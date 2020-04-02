import {
    CanvasGradientBase,
    ImageDataBase,
    TextMetricsBase,
    TNSCanvasBase,
    TNSCanvasRenderingContext,
    TNSCanvasRenderingContext2DBase,
    TNSDOMMatrixBase,
    TNSPath2DBase
} from './canvas-plugin.common';
import { Color as TNSColor } from 'tns-core-modules/color';
import { ImageSource } from 'tns-core-modules/image-source';
import { ColorHandler } from './ColorHelper';
import { screen } from 'tns-core-modules/platform';
declare var Canvas, AnimationFrame;

export function createSVGMatrix(): TNSDOMMatrix {
    return new TNSDOMMatrix(Canvas.createSVGMatrix());
}

export class TNSCanvas extends TNSCanvasBase {
    private _2dContext: TNSCanvasRenderingContext2D;
    useMetal: boolean = false;

    createNativeView() {
        return Canvas.alloc().initWithFrameUseGL(CGRectZero, !this.useMetal);
    }

    getContext(type: string): TNSCanvasRenderingContext2D | null {
        if (type && type === '2d') {
            if (!this._2dContext) {
                this._2dContext = new TNSCanvasRenderingContext2D(
                    this.nativeView.getContextWithType(type)
                );
            }
        }
        return this._2dContext;
    }

    getBoundingClientRect(): { x: number; y: number; width: number; height: number; top: number; right: number; bottom: number; left: number } {
        const view = this;
        const frame = (view.ios.frame as CGRect);
        const width = view.getMeasuredWidth();
        const height = view.getMeasuredHeight();
        return {bottom: height, height: height, left: frame.origin.x, right: width, top: frame.origin.y, width: width, x: frame.origin.x, y: frame.origin.y};
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
                this.context.imageSmoothingQuality = 2; //ImageSmoothingQuality.High;
                break;
            case 'medium':
                this.context.imageSmoothingQuality = 1;//ImageSmoothingQuality.Medium;
                break;
            default:
                this.context.imageSmoothingQuality = 0;//ImageSmoothingQuality.Low;
                break;
        }
    }

    set lineDashOffset(offset: number) {
        this.context.lineDashOffset = offset;
    }

    set lineJoin(join: string) {
        switch (join) {
            case 'bevel':
                this.context.lineJoin = 0;//LineJoin.Bevel;
                break;
            case 'round':
                this.context.lineJoin = 1;//LineJoin.Round;
                break;
            default:
                this.context.lineJoin = 2;//LineJoin.Miter;
                break;
        }
    }

    set lineCap(cap: string) {
        switch (cap) {
            case 'round':
                this.context.lineCap = 1;//LineCap.Round;
                break;
            case 'square':
                this.context.lineCap = 2;//LineCap.Square;
                break;
            default:
                this.context.lineCap = 0;//LineCap.Butt;
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
                this.context.textAlign = 1;//TextAlignment.Start;
                break;
            case 'center':
                this.context.textAlign = 2;//TextAlignment.Center;
                break;
            case 'end':
                this.context.textAlign = 3;//TextAlignment.End;
                break;
            case 'right':
                this.context.textAlign = 4;//TextAlignment.Right;
                break;
            default:
                this.context.textAlign = 0;//TextAlignment.Left;
                break;
        }
    }


    set globalCompositeOperation(composite: string) {
        switch (composite.toLowerCase()) {
            case 'source-over':
                this.context.globalCompositeOperation = 0;
                break;
            case 'source-in':
                this.context.globalCompositeOperation = 1;
                break;
            case 'source-out':
                this.context.globalCompositeOperation = 2;
                break;
            case 'source-atop':
                this.context.globalCompositeOperation = 3;
                break;
            case 'destination-over':
                this.context.globalCompositeOperation = 4; //CanvasCompositeOperationType.DestinationOver;
                break;
            case 'destination-in':
                this.context.globalCompositeOperation = 5;
                break;
            case 'destination-out':
                this.context.globalCompositeOperation = 6;
                break;
            case 'destination-atop':
                this.context.globalCompositeOperation = 7;
                break;
            case 'lighter':
                this.context.globalCompositeOperation = 8;
                break;
            case 'copy':
                this.context.globalCompositeOperation = 9;
                break;
            case 'xor':
                this.context.globalCompositeOperation = 10;
                break;
            case 'multiply':
                this.context.globalCompositeOperation = 11;
                break;
            case 'screen':
                this.context.globalCompositeOperation = 12;
                break;
            case 'overlay':
                this.context.globalCompositeOperation = 13;
                break;
            case 'darken':
                this.context.globalCompositeOperation = 14;
                break;
            case 'lighten':
                this.context.globalCompositeOperation = 15;
                break;
            case 'color-dodge':
                this.context.globalCompositeOperation = 16;
                break;
            case 'color-burn':
                this.context.globalCompositeOperation = 17;
                break;
            case 'hard-light':
                this.context.globalCompositeOperation = 18;
                break;
            case 'soft-light':
                this.context.globalCompositeOperation = 19;
                break;
            case 'difference':
                this.context.globalCompositeOperation = 20;
                break;
            case 'exclusion':
                this.context.globalCompositeOperation = 21;
                break;
            case 'hue':
                this.context.globalCompositeOperation = 22;
                break;
            case 'saturation':
                this.context.globalCompositeOperation = 22;
                break;
            case 'color':
                this.context.globalCompositeOperation = 23;
                break;
            case 'luminosity':
                this.context.globalCompositeOperation = 25;
                break;
        }
    }

    set fillStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.native;
        } else {
            let wasHsl = false;
            if (color.startsWith('hsla')) {
                wasHsl = true;
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (color.startsWith('hsl')) {
                wasHsl = true;
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
            nativeStyle = color.native;
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
        if (typeof args[0] === 'string') {
            this.context.clipWithRule(args[0]);
        } else if (args[0] instanceof TNSPath2D && typeof args[1] === 'string') {
            this.context.clipWithPathRule(args[0].native, args[1]);
        } else if (args[0] instanceof TNSPath2D) {
            this.context.clipWithPath(args[0].native);
        } else {
            this.context.clip();
        }
    }

    closePath(): void {
        this.context.closePath();
    }

    createImageData(width: number, height: number): ImageData;
    createImageData(data: ImageData): ImageData;
    createImageData(
        width: number | ImageData,
        height?: number
    ): ImageData {
        if (width instanceof ImageData) {
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

    fill(): void;
    fill(fillRule: string): void;
    fill(path: TNSPath2D, fillRule: string): void;
    fill(...args: any): void {
        if (typeof args[0] === 'string') {
            this.context.fillWithRule(args[0]);
        } else if (args[0] instanceof TNSPath2D && typeof args[1] === 'string') {
            this.context.fillWithPathRule(args[0].native, args[1]);
        } else if (args[0] instanceof TNSPath2D && typeof args[1] === 'string') {
            this.context.fillWithPath(args[0].native);
        } else {
            this.context.fill();
        }
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
        path: TNSPath2D,
        x: number,
        y: number,
        fillRule: string
    ): boolean;
    isPointInPath(...args: any): boolean {
        return false;
    }

    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: TNSPath2D, x: number, y: number): boolean;
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

    putImageData(imageData: ImageData, dx: number, dy: number): void;
    putImageData(
        imageData: ImageData,
        dx: number,
        dy: number,
        dirtyX: number,
        dirtyY: number,
        dirtyWidth: number,
        dirtyHeight: number
    ): void;
    putImageData(
        imageData: ImageData,
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
    scrollPathIntoView(path: TNSPath2D): void;
    scrollPathIntoView(path?: TNSPath2D): void {
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
    stroke(path?: TNSPath2D): void {
        if (path) {
            this.context.strokeWithPath(path.native);
        } else {
            this.context.stroke();
        }
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

export class TNSPath2D extends TNSPath2DBase {
    constructor(instance: any) {
        super(instance);
    }

    addPath(path: TNSPath2D, transform?: TNSDOMMatrix): void {
        if (transform) {
            this.nativeInstance.addPathWithPathTransform(path.nativeInstance, transform.native);
        } else {
            this.nativeInstance.addPathWithPath(path.nativeInstance);
        }
    }

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean = false): void {
        this.nativeInstance.arcWithXYRadiusStartAngleEndAngleAnticlockwise(x, y, radius, startAngle, endAngle, anticlockwise);
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this.nativeInstance.arcToX1Y1X2Y2Radius(x1, y1, x2, y2, radius);
    }

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
        this.nativeInstance.bezierCurveToCp1xCp1yCp2xCp2yXY(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    closePath(): void {
        this.nativeInstance.closePath();
    }

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean = false): void {
        this.nativeInstance.ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngleAnticlockwise(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    }

    lineTo(x: number, y: number): void {
        this.nativeInstance.lineToXY(x, y);
    }

    moveTo(x: number, y: number): void {
        this.nativeInstance.moveToXY(x, y);
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        this.nativeInstance.quadraticCurveToCpxCpyXY(cpx, cpy, x, y);
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.nativeInstance.rectWithXYWidthHeight(x, y, width, height);
    }
}

export class TNSDOMMatrix extends TNSDOMMatrixBase {
    constructor(instance) {
        super(instance);
    }

    get a(): number {
        return this.nativeInstance.a;
    }

    set a(value) {
        this.nativeInstance.a = value;
    }

    get b(): number {
        return this.nativeInstance.b;
    }

    set b(value) {
        this.nativeInstance.b = value;
    }


    get c(): number {
        return this.nativeInstance.c;
    }

    set c(value) {
        this.nativeInstance.c = value;
    }

    get d(): number {
        return this.nativeInstance.d;
    }

    set d(value) {
        this.nativeInstance.d = value;
    }

    get e(): number {
        return this.nativeInstance.e;
    }

    set e(value) {
        this.nativeInstance.e = value;
    }

    get f(): number {
        return this.nativeInstance.f;
    }

    set f(value) {
        this.nativeInstance.f = value;
    }
}

export class CanvasGradient extends CanvasGradientBase {
    protected nativeInstance: any;

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


    get native() {
        return this.nativeInstance;
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

