import { Color as TNSColor } from '@nativescript/core/color';
import { CanvasGradientBase } from './canvas-plugin.common';

export class CanvasGradient extends CanvasGradientBase {
    readonly nativeInstance: any;

    protected constructor(nativeInstance: any) {
        super();
        this.nativeInstance = nativeInstance;
    }

    public addColorStop(offset: number, color: any): void {
        this.nativeInstance.addColorStopWithOffsetColor(
            offset,
            new TNSColor(color).ios
        );
    }

    static fromNative(nativeInstance) {
        return new CanvasGradient(nativeInstance);
    }

    get native() {
        return this.nativeInstance;
    }
}
