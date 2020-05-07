import { ImageDataBase } from './canvas-plugin.common';

export class ImageData extends ImageDataBase {
    protected constructor(nativeInstance: any) {
        super(nativeInstance);
        this.data = Uint8ClampedArray.from(nativeInstance.getData());
    }

    static fromNative(nativeInstance) {
        return new ImageData(nativeInstance);
    }

    static from(instance: ImageData) {
        return new ImageData(instance.nativeInstance);
    }
}
