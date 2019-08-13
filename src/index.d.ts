import { CanvasGradientBase, ImageDataBase, TextMetricsBase, TNSCanvasBase, TNSCanvasRenderingContext, TNSCanvasRenderingContext2DBase, TNSPath2DBase } from './canvas-plugin.common';
export declare class TNSCanvas extends TNSCanvasBase {
    private _2dContext;
    createNativeView(): any;
    getContext(type: string): TNSCanvasRenderingContext | null;
}
export declare class ImageData extends ImageDataBase {
    constructor(nativeInstance: any);
}
export declare class TNSCanvasRenderingContext2D extends TNSCanvasRenderingContext2DBase {
    private context;
    constructor(context: any);
    shadowColor: string;
    globalAlpha: number;
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: string;
    lineDashOffset: number;
    lineJoin: string;
    lineCap: string;
    miterLimit: number;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    textAlign: string;
    globalCompositeOperation: string;
    fillStyle: string | CanvasGradient;
    strokeStyle: string | CanvasGradient;
    addHitRegion(region: any): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    beginPath(): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    clearHitRegions(): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    clip(): void;
    clip(fillRule: string): void;
    clip(path: any, fillRule: string): void;
    closePath(): void;
    createImageData(width: number, height: number): ImageDataBase;
    createImageData(data: ImageDataBase): ImageDataBase;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: any, repetition: string): void;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    drawFocusIfNeeded(element: any): void;
    drawFocusIfNeeded(path: any, element: any): void;
    drawImage(image: any, dx: number, dy: number): void;
    drawImage(image: any, dx: number, dy: number, dWidth: number, dHeight: number): void;
    drawImage(image: any, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    fill(fillRule: string): void;
    fill(path: TNSPath2DBase, fillRule: string): void;
    fillRect(x: number, y: number, width: number, height: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    getLineDash(): any;
    isPointInPath(x: number, y: number, fillRule: string): boolean;
    isPointInPath(path: TNSPath2DBase, x: number, y: number, fillRule: string): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: TNSPath2DBase, x: number, y: number): boolean;
    lineTo(x: number, y: number): void;
    measureText(text: string): TextMetrics;
    moveTo(x: number, y: number): void;
    putImageData(imageData: ImageDataBase, dx: number, dy: number): void;
    putImageData(imageData: ImageDataBase, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
    putImageData(imageData: ImageDataBase, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    removeHitRegion(id: string): void;
    resetTransform(): void;
    restore(): void;
    rotate(angle: number): void;
    save(): void;
    scale(x: number, y: number): void;
    scrollPathIntoView(): void;
    scrollPathIntoView(path: TNSPath2DBase): void;
    setLineDash(segments: number[]): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    stroke(): void;
    stroke(path: TNSPath2DBase): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
}
export declare class TextMetrics extends TextMetricsBase {
    constructor(instance: any);
    readonly width: number;
}
export declare class CanvasGradient extends CanvasGradientBase {
    readonly nativeInstance: any;
    protected constructor(nativeInstance: any);
    addColorStop(offset: number, color: any): void;
    static fromNative(nativeInstance: any): CanvasGradient;
}
