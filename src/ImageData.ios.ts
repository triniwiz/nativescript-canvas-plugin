import { ImageDataBase } from './canvas-plugin.common';

export class ImageData extends ImageDataBase {
    constructor(nativeInstance: any) {
        super(nativeInstance);
        const buffer = interop.bufferFromData(nativeInstance.data);
        this.data = new Uint8ClampedArray(buffer, 0, buffer.byteLength);
    }

    static fromNative(nativeInstance) {
        return new ImageData(nativeInstance);
    }

    static from(instance: ImageData) {
        return new ImageData(instance.nativeInstance);
    }
}
