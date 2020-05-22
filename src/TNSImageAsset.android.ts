import { TNSImageAssetBase, TNSImageAssetSaveFormat, } from './canvas-plugin.common';
import * as fs from '@nativescript/core/file-system';

export class TNSImageAsset extends TNSImageAssetBase {
    constructor() {
        super(new com.github.triniwiz.canvas.ImageAsset());
    }

    loadFile(path: string): boolean {
        let realPath = path;
        if (typeof realPath === 'string') {
            if (realPath.startsWith('~/')) {
                realPath = fs.path.join(
                    fs.knownFolders.currentApp().path,
                    realPath.replace('~/', '')
                );
            }
        }
        return this.native.loadImageFromPath(realPath);
    }

    static toPrimitive(value): any {
        if (value instanceof java.lang.Integer) {
            return value.intValue();
        } else if (value instanceof java.lang.Long) {
            return value.longValue();
        } else if (value instanceof java.lang.Short) {
            return value.shortValue();
        } else if (value instanceof java.lang.Byte) {
            return value.byteValue();
        } else if (value instanceof java.lang.Boolean) {
            return value.booleanValue();
        } else if (value instanceof java.lang.String) {
            return value.toString();
        } else if (value instanceof java.lang.Float) {
            return value.floatValue();
        } else if (value instanceof java.lang.Double) {
            return value.doubleValue();
        }
        return value;
    }

    loadFileAsync(path: string) {
        return new Promise((resolve, reject) => {
            if (typeof path === 'string') {
                if (path.startsWith('~/')) {
                    path = fs.path.join(
                        fs.knownFolders.currentApp().path,
                        path.replace('~/', '')
                    );
                }
            }
            this.native.loadImageFromPathAsync(
                path,
                new com.github.triniwiz.canvas.ImageAsset.Callback({
                    onError(error) {
                        reject(error);
                    },
                    onSuccess(success) {
                        resolve(TNSImageAsset.toPrimitive(success));
                    },
                })
            );
        });
    }

    loadFromNative(image: any): boolean {
        return this.native.loadImageFromImage(image);
    }

    loadFromNativeAsync(image: any) {
        return new Promise((resolve, reject) => {
            this.native.loadImageFromImageAsync(
                image,
                new com.github.triniwiz.canvas.ImageAsset.Callback({
                    onError(error) {
                        reject(error);
                    },
                    onSuccess(success) {
                        resolve(TNSImageAsset.toPrimitive(success));
                    },
                })
            );
        });
    }

    loadFromBytes(bytes: Uint8Array | Uint8ClampedArray) {
        if (bytes instanceof Uint8Array || bytes instanceof Uint8ClampedArray) {
            let buf = java.nio.ByteBuffer.wrap(Array.from(bytes));
            return this.native.loadImageFromBytes(buf.array());
        }
        return this.native.loadImageFromBytes(bytes as any);
    }

    loadFromBytesAsync(bytes: Uint8Array | Uint8ClampedArray) {
        return new Promise((resolve, reject) => {
            const callback = new com.github.triniwiz.canvas.ImageAsset.Callback({
                onError(error) {
                    reject(error);
                },
                onSuccess(success) {
                    resolve(TNSImageAsset.toPrimitive(success));
                },
            });
            if (bytes instanceof Uint8Array || bytes instanceof Uint8ClampedArray) {
                let buf = java.nio.ByteBuffer.wrap(Array.from(bytes));
                this.native.loadImageFromBytesAsync(buf.array(), callback);
            } else {
                this.native.loadImageFromBytesAsync(bytes as any, callback);
            }
        });
    }

    get width() {
        return this.native.getWidth();
    }

    get height() {
        return this.native.getHeight();
    }

    scale(x: number, y: number) {
        this.native.scale(x, y);
    }

    save(path: string, format: TNSImageAssetSaveFormat): boolean {
        let realFormat;
        switch (format) {
            case TNSImageAssetSaveFormat.PNG:
                realFormat = com.github.triniwiz.canvas.ImageAssetFormat.PNG;
                break;
            case TNSImageAssetSaveFormat.ICO:
                realFormat = com.github.triniwiz.canvas.ImageAssetFormat.ICO;
                break;
            case TNSImageAssetSaveFormat.BMP:
                realFormat = com.github.triniwiz.canvas.ImageAssetFormat.BMP;
                break;
            case TNSImageAssetSaveFormat.TIFF:
                realFormat = com.github.triniwiz.canvas.ImageAssetFormat.TIFF;
                break;
            default:
                realFormat = com.github.triniwiz.canvas.ImageAssetFormat.JPG;
                break;
        }
        return this.native.save(path, realFormat);
    }

    saveAsync(path: string, format: TNSImageAssetSaveFormat): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let realFormat;
            switch (format) {
                case TNSImageAssetSaveFormat.PNG:
                    realFormat = com.github.triniwiz.canvas.ImageAssetFormat.PNG;
                    break;
                case TNSImageAssetSaveFormat.ICO:
                    realFormat = com.github.triniwiz.canvas.ImageAssetFormat.ICO;
                    break;
                case TNSImageAssetSaveFormat.BMP:
                    realFormat = com.github.triniwiz.canvas.ImageAssetFormat.BMP;
                    break;
                case TNSImageAssetSaveFormat.TIFF:
                    realFormat = com.github.triniwiz.canvas.ImageAssetFormat.TIFF;
                    break;
                default:
                    realFormat = com.github.triniwiz.canvas.ImageAssetFormat.JPG;
                    break;
            }
            (this.native as com.github.triniwiz.canvas.ImageAsset).saveAsync(
                path,
                realFormat,
                new com.github.triniwiz.canvas.ImageAsset.Callback({
                    onError(error) {
                        reject(error);
                    },
                    onSuccess(success) {
                        resolve(TNSImageAsset.toPrimitive(success));
                    },
                })
            );
        });
    }

    flipX() {
        this.native.flipX();
    }

    flipY() {
        this.native.flipY();
    }

    get error(): string {
        return this.native.getError();
    }
}


declare namespace com {
    export namespace github {
        export namespace triniwiz {
            export namespace canvas {
                export class ImageAsset {
                    public static class: java.lang.Class<com.github.triniwiz.canvas.ImageAsset>;

                    public loadImageFromPathAsync(param0: string, param1: com.github.triniwiz.canvas.ImageAsset.Callback): void;

                    public flipX(): void;

                    public getHeight(): number;

                    public finalize(): void;

                    public getWidth(): number;

                    public loadImageFromPath(param0: string): boolean;

                    public loadImageFromImage(param0: globalAndroid.graphics.Bitmap): boolean;

                    public save(param0: string, param1: com.github.triniwiz.canvas.ImageAssetFormat): boolean;

                    public getBytes(): native.Array<number>;

                    public getError(): string;

                    public loadImageFromImageAsync(param0: globalAndroid.graphics.Bitmap, param1: com.github.triniwiz.canvas.ImageAsset.Callback): void;

                    public flipY(): void;

                    public scale(param0: number, param1: number): void;

                    public constructor();

                    public loadImageFromBytesAsync(param0: native.Array<number>, param1: com.github.triniwiz.canvas.ImageAsset.Callback): void;

                    public saveAsync(param0: string, param1: com.github.triniwiz.canvas.ImageAssetFormat, param2: com.github.triniwiz.canvas.ImageAsset.Callback): void;

                    public loadImageFromBytes(param0: native.Array<number>): boolean;
                }

                export namespace ImageAsset {
                    export class Callback {
                        public static class: java.lang.Class<com.github.triniwiz.canvas.ImageAsset.Callback>;

                        /**
                         * Constructs a new instance of the com.github.triniwiz.canvas.ImageAsset$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onSuccess(param0: any): void;
                            onError(param0: string): void;
                        });
                        public constructor();

                        public onSuccess(param0: any): void;

                        public onError(param0: string): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace github {
        export namespace triniwiz {
            export namespace canvas {
                export class ImageAssetFormat {
                    public static class: java.lang.Class<com.github.triniwiz.canvas.ImageAssetFormat>;
                    public static JPG: com.github.triniwiz.canvas.ImageAssetFormat;
                    public static PNG: com.github.triniwiz.canvas.ImageAssetFormat;
                    public static ICO: com.github.triniwiz.canvas.ImageAssetFormat;
                    public static BMP: com.github.triniwiz.canvas.ImageAssetFormat;
                    public static TIFF: com.github.triniwiz.canvas.ImageAssetFormat;

                    public getFormat(): number;

                    public static valueOf(param0: string): com.github.triniwiz.canvas.ImageAssetFormat;

                    public static values(): native.Array<com.github.triniwiz.canvas.ImageAssetFormat>;
                }
            }
        }
    }
}
