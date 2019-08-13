import {
    CanvasGradientBase,
    ImageDataBase,
    TextMetricsBase,
    TNSCanvasBase,
    TNSCanvasRenderingContext,
    TNSCanvasRenderingContext2DBase,
    TNSPath2DBase
} from './canvas-plugin.common';
import { Color as TNSColor } from 'tns-core-modules/color';
import { ImageSource } from 'tns-core-modules/image-source';
import { ColorHandler } from './ColorHelper';

declare var Canvas, AnimationFrame;

export class TNSCanvas extends TNSCanvasBase {
    private _2dContext: TNSCanvasRenderingContext2D;

    createNativeView() {
        return Canvas.new();
    }

    getContext(type: string): TNSCanvasRenderingContext | null {
        if (type && type === '2d') {
            if (!this._2dContext) {
                this._2dContext = new TNSCanvasRenderingContext2D(
                    this.nativeView.getContextWithType(type)
                );
            }
        }
        return this._2dContext;
    }
}

export class ImageData extends ImageDataBase {
    constructor(nativeInstance: any) {
        super(nativeInstance);
        const buffer = interop.bufferFromData(nativeInstance.data);
        this.data = new Uint8ClampedArray(buffer, 0, buffer.byteLength);
    }
}

export class TNSCanvasRenderingContext2D extends TNSCanvasRenderingContext2DBase {
    private context;

    constructor(context: any) {
        super();
        this.context = context;
    }

    set shadowColor(color: string) {
        this.context.shadowColor = new TNSColor(color).ios;
    }

    set globalAlpha(alpha: number) {
        this.context.globalAlpha = alpha;
    }

    set imageSmoothingEnabled(enabled: boolean) {
        this.context.imageSmoothingEnabled = enabled;
    }

    set imageSmoothingQuality(quality: string) {
        switch (quality) {
            case 'high':
                this.context.imageSmoothingQuality = ImageSmoothingQuality.High;
                break;
            case 'medium':
                this.context.imageSmoothingQuality = ImageSmoothingQuality.Medium;
                break;
            default:
                this.context.imageSmoothingQuality = ImageSmoothingQuality.Low;
                break;
        }
    }

    set lineDashOffset(offset: number) {
        this.context.lineDashOffset = offset;
    }

    set lineJoin(join: string) {
        switch (join) {
            case 'bevel':
                this.context.lineJoin = LineJoin.Bevel;
                break;
            case 'round':
                this.context.lineJoin = LineJoin.Round;
                break;
            default:
                this.context.lineJoin = LineJoin.Miter;
                break;
        }
    }

    set lineCap(cap: string) {
        switch (cap) {
            case 'round':
                this.context.lineCap = LineCap.Round;
                break;
            case 'square':
                this.context.lineCap = LineCap.Square;
                break;
            default:
                this.context.lineCap = LineCap.Butt;
        }
    }

    set miterLimit(limit: number) {
        this.context.miterLimit = limit;
    }

    set shadowBlur(blur: number) {
        this.context.shadowBlur = blur;
    }

    set shadowOffsetX(x: number) {
        this.context.shadowOffsetX = x;
    }

    set shadowOffsetY(y: number) {
        this.context.shadowOffsetY = y;
    }

    set textAlign(alignment: string) {
        switch (alignment) {
            case 'start':
                this.context.textAlign = TextAlignment.Start;
                break;
            case 'center':
                this.context.textAlign = TextAlignment.Center;
                break;
            case 'end':
                this.context.textAlign = TextAlignment.End;
                break;
            case 'right':
                this.context.textAlign = TextAlignment.Right;
                break;
            default:
                this.context.textAlign = TextAlignment.Left;
                break;
        }
    }


    set globalCompositeOperation(composite: string) {
        switch (composite) {
            case 'destination-over':
                this.context.globalCompositeOperation = CanvasCompositeOperationType.DestinationOver;
                break;
        }
    }

    set fillStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.nativeInstance;
        } else {
            if (color.startsWith('hsla')) {
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (color.startsWith('hsl')) {
                color = ColorHandler.HSLToRGB(color, false);
            }
            if (typeof color === 'string' && color.indexOf('Invalid input color') > -1) {
                color = 'black';
            }
            // @ts-ignore
            nativeStyle = Color.alloc().initWithColor(new TNSColor(color).ios);
        }
        this.context.fillStyle = nativeStyle;
    }

    set strokeStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.nativeInstance;
        } else {
            if (color.startsWith('hsla')) {
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (color.startsWith('hsl')) {
                color = ColorHandler.HSLToRGB(color, false);
            }
            if (typeof color === 'string' && color.indexOf('Invalid input color') > -1) {
                color = 'black';
            }
            // @ts-ignore
            nativeStyle = Color.alloc().initWithColor(new TNSColor(color).ios);
        }
        this.context.strokeStyle = nativeStyle;
    }

    addHitRegion(region: any): void {
    }

    arc(
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean = false
    ): void {
        this.context.arcWithXYRadiusStartAngleEndAngleAnticlockwise(x, y, radius, startAngle, endAngle, anticlockwise);
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this.context.arcToX1Y1X2Y2Radius(x1, y1, x2, y2, radius);
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
        this.context.bezierCurveToCp1xCp1yCp2xCp2yXY(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    clearHitRegions(): void {
    }

    clearRect(x: number, y: number, width: number, height: number): void {
        this.context.clearRectWithXYWidthHeight(x, y, width, height);
    }

    clip(): void;
    clip(fillRule: string): void;
    clip(path: any, fillRule: string): void;
    clip(...args): void {
        if (typeof args.length[0] === 'string') {
            this.context.clipWithRule(args[0]);
        } else {
            this.context.clipWithRule('');
        }

    }

    closePath(): void {
        this.context.closePath();
    }

    createImageData(width: number, height: number): ImageDataBase;
    createImageData(data: ImageDataBase): ImageDataBase;
    createImageData(
        width: number | ImageDataBase,
        height?: number
    ): ImageDataBase {
        if (width instanceof ImageDataBase) {
            return new ImageData(this.context.createImageDataWithImageData(width.native));
        } else {
            return new ImageData(this.context.createImageDataWithWidthHeight(width, height));
        }
    }

    createLinearGradient(x0: number, y0: number, x1: number, y1: number) {
        return CanvasGradient.fromNative(this.context.createLinearGradientWithX0Y0X1Y1(x0, y0, x1, y1));
    }

    createPattern(image: any, repetition: string) {
    }

    createRadialGradient(
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number
    ) {
        return CanvasGradient.fromNative(this.context.createRadialGradientWithX0Y0R0X1Y1R1(x0, y0, r0, x1, y1, r1));
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
        if (!args) {
            return;
        }
        let image = args[0];
        if (image instanceof ImageSource) {
            image = image.ios;
        }

        if (args.length === 3) {
            this.context.drawImageWithImageDxDy(image, args[1], args[2]);
        } else if (args.length === 5) {
            this.context.drawImageWithImageDxDyDWidthDHeight(image, args[1], args[2], args[3], args[4]);
        } else if (args.length === 9) {
            this.context.drawImageWithImageSxSySWidthSHeightDxDyDWidthDHeight(image, args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
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
        anticlockwise: boolean = false
    ): void {
        this.context.ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngleAnticlockwise(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    }

    fill(fillRule: string): void;
    fill(path: TNSPath2DBase, fillRule: string): void;
    fill(...args: any): void {
        this.context.fill();
    }

    fillRect(x: number, y: number, width: number, height: number): void {
        this.context.fillRectWithXYWidthHeight(x, y, width, height);
    }

    fillText(text: string, x: number, y: number, maxWidth?: number): void {
        this.context.fillTextWithTextXYWidth(text, x, y, maxWidth);
    }

    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
        return new ImageData(this.context.getImageDataWithSxSySwSh(sx, sy, sw, sh));
    }

    getLineDash() {
        return this.context.getLineDash() as any;
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
        this.context.lineToXY(x, y);
    }

    measureText(text: string): TextMetrics {
        return new TextMetrics(this.context.measureTextWithText(text));
    }

    moveTo(x: number, y: number): void {
        this.context.moveToXY(x, y);
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
    ): void;
    putImageData(...args): void {
        if (!args) {
            return;
        }
        let data = args[0] as any;
        if (args.length === 3) {
            this.context.putImageDataWithImageDataDxDy(data.native, args[1], args[2]);
        } else if (args.length === 7) {
            this.context.putImageDataWithImageDataDxDyDirtyXDirtyYDirtyWidthDirtyHeight(data.native, args[1], args[2], args[3], args[4], args[5], args[6]);
        }
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
        this.context.quadraticCurveToCpxCpyXY(cpx, cpy, x, y);
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.context.rectWithXYWidthHeight(x, y, width, height);
    }

    removeHitRegion(id: string): void {
    }

    resetTransform(): void {
        this.context.resetTransform();
    }

    restore(): void {
        this.context.restore();
    }

    rotate(angle: number): void {
        this.context.rotateWithAngle(angle);
    }

    save(): void {
        this.context.save();
    }

    scale(x: number, y: number): void {
        this.context.scaleWithXY(x, y);
    }

    scrollPathIntoView(): void;
    scrollPathIntoView(path: TNSPath2DBase): void;
    scrollPathIntoView(path?: TNSPath2DBase): void {
    }

    setLineDash(segments: number[]): void {
        this.context.setLineDashWithSegments(segments);
    }

    setTransform(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void {
        this.context.setTransformWithABCDEF(a, b, c, d, e, f);
    }

    stroke(): void;
    stroke(path: TNSPath2DBase): void;
    stroke(path?: TNSPath2DBase): void {
        this.context.stroke();
    }

    strokeRect(x: number, y: number, width: number, height: number): void {
        this.context.strokeRectWithXYWidthHeight(x, y, width, height);
    }

    strokeText(text: string, x: number, y: number, maxWidth?: number): void {
        this.context.strokeTextWithTextXYWidth(text, x, y, maxWidth);
    }

    transform(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void {
        this.context.transformWithABCDEF(a, b, c, d, e, f);
    }

    translate(x: number, y: number): void {
        this.context.translateWithXY(x, y);
    }
}

export class TextMetrics extends TextMetricsBase {
    constructor(instance: any) {
        super(instance);
    }

    get width(): number {
        return this.nativeInstance.width;
    }
}


export class CanvasGradient extends CanvasGradientBase {
    readonly nativeInstance: any;

    protected constructor(nativeInstance: any) {
        super();
        this.nativeInstance = nativeInstance;
    }

    public addColorStop(offset: number, color: any): void {
        this.nativeInstance.addColorStopWithOffsetColor(offset, new TNSColor(color).ios);
    }

    static fromNative(nativeInstance) {
        return new CanvasGradient(nativeInstance);
    }
}

(global as any).requestAnimationFrame = (loop) => {
    return AnimationFrame.requestAnimationFrameToLoop((called) => {
        loop(called);
    });
};
(global as any).cancelAnimationFrame = (id) => {
    AnimationFrame.cancelAnimationFrameWithId(id);
};

