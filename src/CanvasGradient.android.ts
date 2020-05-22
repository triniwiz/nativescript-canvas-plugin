import { CanvasGradientBase } from './canvas-plugin.common';
import { Color } from '@nativescript/core/color';

export class CanvasGradient extends CanvasGradientBase {
    readonly nativeInstance;

    protected constructor(nativeInstance: any) {
        super();
        this.nativeInstance = nativeInstance;
    }

    public addColorStop(offset: number, color: any): void {
        this.nativeInstance.addColorStop(offset, new Color(color).android);
    }

    static fromNative(nativeInstance) {
        return new CanvasGradient(nativeInstance);
    }

    get native() {
        return this.nativeInstance;
    }
}
