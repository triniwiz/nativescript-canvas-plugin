import { TNSImageAssetBase, TNSImageAssetSaveFormat, } from './canvas-plugin.common';

export declare class TNSImageAsset extends TNSImageAssetBase {
    constructor();

    loadFile(path: string): boolean;

    loadFileAsync(path: string): Promise<boolean>;

    loadFromNative(image: any): boolean;

    loadFromNativeAsync(image: any): Promise<boolean>;

    loadFromBytes(bytes: Uint8Array | Uint8ClampedArray): boolean;

    loadFromBytesAsync(bytes: Uint8Array | Uint8ClampedArray): Promise<boolean>;

    width: number;

    height: number;

    scale(x: number, y: number);

    save(path: string, format: TNSImageAssetSaveFormat): boolean;

    saveAsync(path: string, format: TNSImageAssetSaveFormat): Promise<boolean>;

    flipX();

    flipY();

    error: string;
}
