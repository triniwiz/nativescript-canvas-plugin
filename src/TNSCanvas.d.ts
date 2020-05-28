import { TNSDOMMatrix } from './TNSDOMMatrix';
import { TNSCanvasBase } from './canvas-plugin.common';
import { TNSCanvasRenderingContext2D } from './TNSCanvasRenderingContext2D';
import { TNSWebGLRenderingContext } from './TNSWebGLRenderingContext';

export declare function createSVGMatrix(): TNSDOMMatrix;

export declare class TNSCanvas extends TNSCanvasBase {
    private _2dContext;
    private canvas;

    readonly clientWidth: number;

    readonly clientHeight: number;

    constructor();

    flush(): void;

    createNativeView(): any;

    initNativeView(): void;

    disposeNativeView(): void;

    toDataURL(type?: string, encoderOptions?: number): any;

    getContext(type: string): TNSCanvasRenderingContext2D | TNSWebGLRenderingContext | null;
    getContext(type: string, options: any): TNSCanvasRenderingContext2D | TNSWebGLRenderingContext | null;

    getBoundingClientRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
