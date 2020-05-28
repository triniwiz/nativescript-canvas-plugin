import { CanvasGradientBase } from './canvas-plugin.common';

export declare class CanvasGradient extends CanvasGradientBase {
    readonly nativeInstance: any;
    readonly native: any;

    protected constructor(nativeInstance: any);

    addColorStop(offset: number, color: any): void;

    static fromNative(nativeInstance: any): CanvasGradient;
}
