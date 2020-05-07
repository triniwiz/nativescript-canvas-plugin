import { TNSImageAssetBase, TNSImageAssetSaveFormat, } from './canvas-plugin.common';
import * as fs from 'tns-core-modules/file-system';

declare var ImageAsset;

const main_queue = dispatch_get_current_queue();

export class TNSImageAsset extends TNSImageAssetBase {
    constructor() {
        super(ImageAsset.alloc().init());
    }

    private _createQueue() {
        return dispatch_queue_create('TNSImageAsset', null);
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
        return this.native.loadImageFromPathWithPath(realPath);
    }

    loadFileAsync(path: string) {
        return new Promise((resolve, reject) => {
            const queue = this._createQueue();
            dispatch_async(queue, () => {
                const success = this.loadFile(path);
                dispatch_async(main_queue, () => {
                    if (!success) {
                        reject(this.error);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }

    loadFromNative(image: any): boolean {
        return this.native.loadImageFromImageWithImage(image);
    }

    loadFromNativeAsync(image: any) {
        return new Promise((resolve, reject) => {
            const queue = this._createQueue();
            dispatch_async(queue, () => {
                const success = this.loadFromNative(image);
                dispatch_async(main_queue, () => {
                    if (!success) {
                        reject(this.error);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }

    loadFromBytes(bytes: Uint8Array | Uint8ClampedArray): boolean {
        return this.native.loadImageFromBytesWithArray(bytes as any);
    }

    loadFromBytesAsync(bytes: Uint8Array | Uint8ClampedArray) {
        return new Promise((resolve, reject) => {
            const queue = this._createQueue();
            dispatch_async(queue, () => {
                const success = this.loadFromBytes(bytes);
                dispatch_async(main_queue, () => {
                    if (!success) {
                        reject(this.error);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }

    get width() {
        return this.native.width;
    }

    get height() {
        return this.native.height;
    }

    scale(x: number, y: number) {
        this.native.scaleWithXY(x, y);
    }

    save(path: string, format: TNSImageAssetSaveFormat): boolean {
        return this.native.saveWithPathFormat(path, format.valueOf());
    }

    saveAsync(path: string, format: TNSImageAssetSaveFormat): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const result = this.save(path, format);
            dispatch_async(main_queue, () => {
                if (!result) {
                    reject(this.error);
                    return;
                }
                resolve(result);
            });
        });
    }

    flipX() {
        this.native.flipX();
    }

    flipY() {
        this.native.flipY();
    }

    get error(): string {
        return this.native.error;
    }
}
