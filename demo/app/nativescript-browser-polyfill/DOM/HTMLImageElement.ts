import { Element } from "./Element";
import { isIOS } from "tns-core-modules/platform";
import * as fs from "tns-core-modules/file-system";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import { ImageSource } from "tns-core-modules/image-source/image-source";
const b64Extensions = {
    "/": "jpg",
    i: "png",
    R: "gif",
    U: "webp",
};

function b64WithoutPrefix(b64) {
    return b64.split(",")[1];
}

function getMIMEforBase64String(b64) {
    let input = b64;
    if (b64.includes(",")) {
        input = b64WithoutPrefix(b64);
    }
    const first = input.charAt(0);
    const mime = b64Extensions[first];
    if (!mime) {
        throw new Error("Unknown Base64 MIME type: " + b64);
    }
    return mime;
}

function getUUID() {
    if (isIOS) {
        return NSUUID.UUID().UUIDString;
    }
    return java.util.UUID.randomUUID().toString();
}

export class HTMLImageElement extends Element {
    localUri: any;
    _onload: any;
    _complete: any;
    width: any;
    height: any;
    _base64: string;
    _imageSource: any;
    _image: any;
    get src() {
        return this.localUri;
    }

    set src(value) {
        this.localUri = value;
        this._load();
    }

    get onload() {
        return this._onload;
    }
    set onload(value) {
        this._onload = value;
    }

    get complete() {
        return this._complete;
    }
    set complete(value) {
        this._complete = value;
        if (value) {
            this.emitter.emit("load", this);
            this.onload();
        }
    }
    constructor(props) {
        super("img");
        //this._load = this._load.bind(this);
        this._onload = () => {};
        if (props !== null && typeof props === "object") {
            this.src = props.localUri;
            this.width = props.width;
            this.height = props.height;
            this._load();
        }
    }

    _load() {
        if (this.src) {
            if (
                typeof this.src === "string" &&
                this.src.startsWith &&
                this.src.startsWith("data:")
            ) {
                // is base64 - convert and try again;
                this._base64 = this.src;
                const base64result = this.src.split(",")[1];
                (async () => {
                    try {
                        const MIME = getMIMEforBase64String(base64result);
                        this.localUri = fs.path.join(
                            fs.knownFolders.documents().path,
                            `${getUUID()}-b64image.${MIME}`
                        );
                        const file = fs.File.fromPath(this.localUri);
                        let toWrite;
                        if (isIOS) {
                            toWrite = NSData.alloc().initWithBase64EncodedStringOptions(
                                base64result,
                                0
                            );
                        } else {
                            toWrite = android.util.Base64.decode(
                                base64result,
                                android.util.Base64.DEFAULT
                            );
                        }
                        await file.write(toWrite);
                        this._load();
                    } catch (error) {
                        if ((global as any).__debug_browser_polyfill_image) {
                            console.log(
                                `nativescript-browser-polyfill: Error:`,
                                error.message
                            );
                        }
                        this.emitter.emit("error", { target: this, error });
                    }
                })();
                return;
            }
            if (!this.width || !this.height) {
                this.complete = false;
                ImageSource.fromFile(this.src)
                    .then((image) => {
                        this.width = image.width;
                        this.height = image.height;
                        this._imageSource = image;
                        this.complete = true;
                    })
                    .catch((e) => {
                        this.emitter.emit("error", { target: this });
                    });
            } else {
                ImageSource.fromFile(this.src)
                    .then((image) => {
                        this.width = image.width;
                        this.height = image.height;
                        this._imageSource = image;
                        this.complete = true;
                    })
                    .catch((e) => {
                        this.emitter.emit("error", { target: this });
                    });
            }
        }
    }
}
