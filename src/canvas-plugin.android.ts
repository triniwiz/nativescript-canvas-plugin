import {
    CanvasGradientBase,
    ImageDataBase,
    TextMetricsBase,
    TNSCanvasBase,
    TNSCanvasRenderingContext,
    TNSCanvasRenderingContext2DBase,
    TNSPath2DBase
} from './canvas-plugin.common';
import { Color } from 'tns-core-modules/color';
import { ImageSource } from 'tns-core-modules/image-source';

export * from './canvas-plugin.common';

export class TNSCanvas extends TNSCanvasBase {
    private _2dContext: TNSCanvasRenderingContext2D;
    private canvas;

    constructor() {
        super();
    }

    createNativeView() {
        this.canvas = new com.github.triniwiz.canvas.CanvasView(
            this._context,
            null
        );
        return this.canvas;
    }

    getContext(type: string): TNSCanvasRenderingContext | null {
        if (type && type === '2d') {
            if (!this._2dContext) {
                this._2dContext = new TNSCanvasRenderingContext2D(
                    this.canvas.getContext(type)
                );
            }
        }
        return this._2dContext;
    }
}

export class ImageData extends ImageDataBase {
    protected constructor(nativeInstance: any) {
        super(nativeInstance);
    }

    static fromNative(nativeInstance) {
        return new ImageData(nativeInstance);
    }

    static from(instance: ImageData) {
        return new ImageData(instance.nativeInstance);
    }
}

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
}

export class TNSCanvasRenderingContext2D extends TNSCanvasRenderingContext2DBase {
    private context: com.github.triniwiz.canvas.CanvasRenderingContext2D;

    constructor(context: any) {
        super();
        this.context = context;
    }

    set shadowColor(color: string) {
        this.context.setShadowColor(new Color(color).android);
    }

    set globalAlpha(alpha: number) {
        //TODO
       // this.context.setGlobalAlpha = alpha;
    }

    set imageSmoothingEnabled(enabled: boolean) {
        this.context.setImageSmoothingEnabled(enabled);
    }

    set imageSmoothingQuality(quality: string) {
        switch (quality) {
            case 'high':
                this.context.setImageSmoothingQuality(com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality.High);
                break;
            case 'medium':
                this.context.setImageSmoothingQuality(com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality.Medium);
                break;
            default:
                this.context.setImageSmoothingQuality(com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality.Low);
                break;
        }
    }

    set lineDashOffset(offset: number) {
        this.context.setLineDashOffset(offset);
    }

    set lineJoin(join: string) {
        // TODO
        switch (join) {
            case 'bevel':

                break;
            case 'round':

                break;
            default:

                break;
        }
    }

    set lineCap(cap: string) {
        switch (cap) {
            case 'round':
                this.context.setLineCap(com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap.Round);
                break;
            case 'square':
                this.context.setLineCap(com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap.Square);
                break;
            default:
                this.context.setLineCap(com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap.Butt);
        }
    }

    set miterLimit(limit: number) {
        // TODO
    }

    set shadowBlur(blur: number) {
        this.context.setShadowBlur(blur);
    }

    set shadowOffsetX(x: number) {
        this.context.setShadowOffsetX(x);
    }

    set shadowOffsetY(y: number) {
        this.context.setShadowOffsetY(y);
    }

    set textAlign(alignment: string) {
        switch (alignment) {
            case 'start':
                    this.context.setTextAlign(com.github.triniwiz.canvas.CanvasTextAlignment.Start);
                break;
            case 'center':
                    this.context.setTextAlign(com.github.triniwiz.canvas.CanvasTextAlignment.Center);
                break;
            case 'end':
                    this.context.setTextAlign(com.github.triniwiz.canvas.CanvasTextAlignment.End);
                break;
            case 'right':
                    this.context.setTextAlign(com.github.triniwiz.canvas.CanvasTextAlignment.Right);
                break;
            default:
                    this.context.setTextAlign(com.github.triniwiz.canvas.CanvasTextAlignment.Left);
                break;
        }
    }


    set globalCompositeOperation(composite: string) {
        this.context.setGlobalCompositeOperation(com.github.triniwiz.canvas.CanvasCompositeOperationType.valueOf(composite));
    }


    set fillStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.nativeInstance;
        } else {
            nativeStyle = new com.github.triniwiz.canvas.CanvasColorStyle.Color(
                new Color(color).android
            );
        }
        this.context.setFillStyle(nativeStyle);
    }

    set strokeStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.nativeInstance;
        } else {
            nativeStyle = new com.github.triniwiz.canvas.CanvasColorStyle.Color(
                new Color(color).android
            );
        }
        this.context.setStrokeStyle(nativeStyle);
    }

    get lineWidth() {
        return 0;
    }

    set lineWidth(width: number) {
        this.context.setLineWidth(width);
    }

    addHitRegion(region: any): void {
    }

    arc(
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean
    ): void {
        this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this.context.arcTo(x1, y1, x2, y2, radius);
    }

    beginPath(): void {
        this.context.beginPath();
    }

    bezierCurveTo(
        cp1x: number,
        cp1y: number,
        cp2x: number,
        cp2y: number,
        x: number,
        y: number
    ): void {
        this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    clearHitRegions(): void {
    }

    clearRect(x: number, y: number, width: number, height: number): void {
        this.context.clearRect(x, y, width, height);
    }

    clip(): void;
    clip(fillRule: string): void;
    clip(path: any, fillRule: string): void;
    clip(...args: any): void {
        this.context.clip();
    }

    closePath(): void {
        this.context.closePath();
    }

    createImageData(width: number, height: number): ImageDataBase;
    createImageData(data: ImageDataBase): ImageDataBase;
    createImageData(width: number | ImageDataBase, height?: number): ImageData {
        if (width instanceof ImageData) {
            return ImageData.from(width);
        } else {
            return ImageData.fromNative(
                this.context.createImageData(width as any, height)
            );
        }
    }

    createLinearGradient(x0: number, y0: number, x1: number, y1: number) {
        return CanvasGradient.fromNative(
            this.context.createLinearGradient(x0, y0, x1, y1)
        );
    }

    createPattern(image: any, repetition: string) {
        // this.context.createPattern(image, repetition);
    }

    createRadialGradient(
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number
    ) {
        return CanvasGradient.fromNative(
            this.context.createRadialGradient(x0, y0, r0, x1, y1, r1)
        );
    }

    drawFocusIfNeeded(element): void;
    drawFocusIfNeeded(path, element): void;
    drawFocusIfNeeded(...args: any): void {
    }

    drawImage(image: any, dx: number, dy: number): void;
    drawImage(
        image: any,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number
    ): void;
    drawImage(
        image: any,
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number
    ): void;
    drawImage(...args): void {
        let image = args[0];
        if (image instanceof ImageSource) {
            image = image.android;
        }
        if (args.length === 3) {
            this.context.drawImage(image, args[1], args[2]);
        } else if (args.length === 5) {
            this.context.drawImage(image, args[1], args[2], args[3], args[4]);
        } else if (args.length === 9) {
            this.context.drawImage(
                image,
                args[1],
                args[2],
                args[3],
                args[4],
                args[5],
                args[6],
                args[7],
                args[8]
            );
        }
    }

    ellipse(
        x: number,
        y: number,
        radiusX: number,
        radiusY: number,
        rotation: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean
    ): void {
        this.context.ellipse(
            x,
            y,
            radiusX,
            radiusY,
            rotation,
            startAngle,
            endAngle,
            anticlockwise
        );
    }

    fill(fillRule: string): void;
    fill(path: TNSPath2DBase, fillRule: string): void;
    fill(...args: any): void {
        this.context.fill();
    }

    fillRect(x: number, y: number, width: number, height: number): void {
        this.context.fillRect(x, y, width, height);
    }

    fillText(text: string, x: number, y: number, maxWidth?: number): void {
        this.context.fillText(text, x, y, maxWidth);
    }

    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
        return ImageData.fromNative(this.context.getImageData(sx, sy, sw, sh));
    }

    getLineDash(): number[] {
        return [];
    }

    isPointInPath(x: number, y: number, fillRule: string): boolean;
    isPointInPath(
        path: TNSPath2DBase,
        x: number,
        y: number,
        fillRule: string
    ): boolean;
    isPointInPath(...args: any): boolean {
        return false;
    }

    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: TNSPath2DBase, x: number, y: number): boolean;
    isPointInStroke(...args: any): boolean {
        return false;
    }

    lineTo(x: number, y: number): void {
        this.context.lineTo(x, y);
    }

    measureText(text: string): TextMetrics {
        return undefined;
    }

    moveTo(x: number, y: number): void {
        this.context.moveTo(x, y);
    }

    putImageData(imageData: ImageDataBase, dx: number, dy: number): void;
    putImageData(
        imageData: ImageDataBase,
        dx: number,
        dy: number,
        dirtyX: number,
        dirtyY: number,
        dirtyWidth: number,
        dirtyHeight: number
    ): void;
    putImageData(
        imageData: ImageDataBase,
        dx: number,
        dy: number,
        dirtyX?: number,
        dirtyY?: number,
        dirtyWidth?: number,
        dirtyHeight?: number
    ): void {
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
        this.context.quadraticCurveTo(cpx, cpy, x, y);
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.context.rect(x, y, width, height);
    }

    removeHitRegion(id: string): void {
    }

    resetTransform(): void {
    }

    restore(): void {
        this.context.restore();
    }

    rotate(angle: number): void {
        this.context.rotate(angle);
    }

    save(): void {
        this.context.save();
    }

    scale(x: number, y: number): void {
        this.context.scale(x, y);
    }

    scrollPathIntoView(): void;
    scrollPathIntoView(path: TNSPath2DBase): void;
    scrollPathIntoView(path?: TNSPath2DBase): void {
    }

    setLineDash(segments: number[]): void {
    }

    setTransform(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void {
        this.context.setTransform(a, b, c, d, e, f);
    }

    stroke(): void;
    stroke(path: TNSPath2DBase): void;
    stroke(path?: TNSPath2DBase): void {
        this.context.stroke();
    }

    strokeRect(x: number, y: number, width: number, height: number): void {
        this.context.strokeRect(x, y, width, height);
    }

    strokeText(text: string, x: number, y: number, maxWidth?: number): void {
        this.context.strokeText(text, x, y, maxWidth);
    }

    transform(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void {

    }

    translate(x: number, y: number): void {
        this.context.translate(x, y);
    }
}

export class TextMetrics extends TextMetricsBase {
    constructor(nativeInstance: any) {
        super(nativeInstance);
    }
    get width() {
        return this.nativeInstance.getWidth();
    }
}


(global as any).requestAnimationFrame = (loop) => {
    return com.github.triniwiz.canvas.AnimationFrame.requestAnimationFrame(new com.github.triniwiz.canvas.AnimationFrame.Callback({
        onFrame(called: number): void {
            loop(called);
        }
    }));
};
(global as any).cancelAnimationFrame = (id) => {
    com.github.triniwiz.canvas.AnimationFrame.cancelAnimationFrame(id);
};
