import { TNSImageAssetBase, TNSImageAssetSaveFormat, } from './canvas-plugin.common';
import * as fs from 'tns-core-modules/file-system';

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
