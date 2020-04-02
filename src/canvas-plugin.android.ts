import {
    CanvasGradientBase,
    ImageDataBase,
    TextMetricsBase,
    TNSCanvasBase,
    TNSCanvasRenderingContext2DBase,
    TNSDOMMatrixBase,
    TNSPath2DBase
} from './canvas-plugin.common';
import { Color } from 'tns-core-modules/color';
import { ImageSource } from 'tns-core-modules/image-source';
import { ColorHandler } from './ColorHelper';


export * from './canvas-plugin.common';

export function createSVGMatrix(): TNSDOMMatrix {
    return new TNSDOMMatrix(com.github.triniwiz.canvas.CanvasView.createSVGMatrix());
}

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

    initNativeView(): void {
        super.initNativeView();
    }

    disposeNativeView(): void {
        super.disposeNativeView();
    }

    getContext(type: string): TNSCanvasRenderingContext2D | null {
        if (type && type === '2d') {
            if (!this._2dContext) {
                this._2dContext = new TNSCanvasRenderingContext2D(
                    this.canvas.getContext(type)
                );
            }
        }
        return this._2dContext;
    }

    getBoundingClientRect(): { x: number; y: number; width: number; height: number; top: number; right: number; bottom: number; left: number } {
        const view = this;
        const nativeView = (view.android as android.widget.FrameLayout);
        const width = this.getMeasuredWidth();
        const height = this.getMeasuredHeight();
        return {
            bottom: nativeView.getBottom(),
            height: height,
            left: nativeView.getLeft(),
            right: nativeView.getRight(),
            top: nativeView.getTop(),
            width: width,
            x: nativeView.getX(),
            y: nativeView.getY()
        };
    }
}

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
        this.context.setGlobalAlpha(alpha);
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
        switch (join) {
            case 'bevel':
                this.context.setLineJoin(com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin.Bevel);
                break;
            case 'round':
                this.context.setLineJoin(com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin.Round);
                break;
            default:
                this.context.setLineJoin(com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin.Miter);
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
        this.context.setMiterLimit(limit);
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
        let operation;
        switch (composite.toLowerCase()) {
            case 'source-over':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.SourceOver;
                break;
            case 'source-in':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.SourceIn;
                break;
            case 'source-out':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.SourceoOut;
                break;
            case 'source-atop':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.SourceAtop;
                break;
            case 'destination-over':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.DestinationOver;
                break;
            case 'destination-in':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.DestinationIn;
                break;
            case 'destination-out':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.DestinationOut;
                break;
            case 'destination-atop':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.DestinationAtop;
                break;
            case 'lighter':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Lighter;
                break;
            case 'copy':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Copy;
                break;
            case 'xor':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Xor;
                break;
            case 'multiply':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Multiply;
                break;
            case 'screen':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Screen;
                break;
            case 'overlay':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Overlay;
                break;
            case 'darken':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Darken;
                break;
            case 'lighten':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Lighten;
                break;
            case 'color-dodge':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.ColorDodge;
                break;
            case 'color-burn':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.ColorBurn;
                break;
            case 'hard-light':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.HardLight;
                break;
            case 'soft-light':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.SoftLight;
                break;
            case 'difference':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Difference;
                break;
            case 'exclusion':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Exclusion;
                break;
            case 'hue':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Hue;
                break;
            case 'saturation':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Saturation;
                break;
            case 'color':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Color;
                break;
            case 'luminosity':
                operation = com.github.triniwiz.canvas.CanvasCompositeOperationType.Luminosity;
                break;
        }
        this.context.setGlobalCompositeOperation(operation);
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

            if (color.startsWith('hsla')) {
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (color.startsWith('hsl')) {
                color = ColorHandler.HSLToRGB(color, false);
            }
            if (typeof color === 'string' && color.indexOf('Invalid input color') > -1) {
                color = 'black';
            }

            nativeStyle = new com.github.triniwiz.canvas.CanvasColorStyle.Color(
                new Color(color).android
            );
        }
        this.context.setStrokeStyle(nativeStyle);
    }

    get lineWidth() {
        return this.context.getLineWidth();
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
    clip(path: TNSPath2D, fillRule: string): void;
    clip(...args: any): void {
        if (typeof args[0] === 'string') {
            this.context.clip(args[0]);
        } else if (args[0] instanceof TNSPath2D && typeof args[1] === 'string') {
            this.context.clip(args[0].native, args[1]);
        } else if (args[0] instanceof TNSPath2D) {
            this.context.clip(args[0].native);
        } else {
            this.context.clip();
        }
    }

    closePath(): void {
        this.context.closePath();
    }

    createImageData(width: number, height: number): ImageData;
    createImageData(data: ImageData): ImageData;
    createImageData(width: number | ImageData, height?: number): ImageData {
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

    fill(): void;
    fill(fillRule: string): void;
    fill(path: TNSPath2D, fillRule: string): void;
    fill(...args: any): void {
        if (typeof args[0] === 'string') {
            this.context.fill(args[0]);
        } else if (args[0] instanceof TNSPath2D && typeof args[1] === 'string') {
            this.context.fill(args[0].native, args[1]);
        } else if (args[0] instanceof TNSPath2D && typeof args[1] === 'string') {
            this.context.fill(args[0].native);
        } else {
            this.context.fill();
        }
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
        this.context.lineTo(x, y);
    }

    measureText(text: string): TextMetrics {
        return undefined;
    }

    moveTo(x: number, y: number): void {
        this.context.moveTo(x, y);
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
        // Would be nice not to update the native backing array each time ... but since buffers don't use pointers ... we are here 😅
        if (args.length === 1) {
            data.native.updateData(Array.from(data.data));
            this.context.putImageData(data.native);
        } else if (args.length === 3) {
            data.native.updateData(Array.from(data.data));
            this.context.putImageData(data.native, args[1], args[2]);
        } else if (args.length === 7) {
            data.native.updateData(Array.from(data.data));
            this.context.putImageData(data.native, args[1], args[2], args[3], args[4], args[5], args[6]);
        }
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
        this.context.resetTransform();
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
    scrollPathIntoView(path: TNSPath2D): void;
    scrollPathIntoView(path?: TNSPath2D): void {
    }

    setLineDash(segments: number[]): void {
        this.context.setLineDash(segments);
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
    stroke(path?: TNSPath2D): void {
        if (path) {
            this.context.stroke(path.native);
        } else {
            this.context.stroke();
        }
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
        this.context.transform(a, b, c, d, e, f);
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

export class TNSPath2D extends TNSPath2DBase {
    constructor(instance: any) {
        super(instance);
    }

    addPath(path: TNSPath2D, transform?: TNSDOMMatrix): void {
        if (transform) {
            this.nativeInstance.addPath(path.nativeInstance, transform.native);
        } else {
            this.nativeInstance.addPath(path.nativeInstance, null);
        }
    }

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean = false): void {
        this.nativeInstance.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this.nativeInstance.arcTo(x1, y1, x2, y2, radius);
    }

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
        this.nativeInstance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    closePath(): void {
        this.nativeInstance.closePath();
    }

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean = false): void {
        this.nativeInstance.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    }

    lineTo(x: number, y: number): void {
        this.nativeInstance.lineTo(x, y);
    }

    moveTo(x: number, y: number): void {
        this.nativeInstance.moveTo(x, y);
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        this.nativeInstance.quadraticCurveTo(cpx, cpy, x, y);
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.nativeInstance.rect(x, y, width, height);
    }
}

export class TNSDOMMatrix extends TNSDOMMatrixBase {
    constructor(instance) {
        super(instance);
    }

    get a(): number {
        return this.nativeInstance.getA();
    }

    set a(value) {
        this.nativeInstance.setA(value);
    }

    get b(): number {
        return this.nativeInstance.getB();
    }

    set b(value) {
        this.nativeInstance.setB(value);
    }


    get c(): number {
        return this.nativeInstance.getC();
    }

    set c(value) {
        this.nativeInstance.setC(value);
    }

    get d(): number {
        return this.nativeInstance.getD();
    }

    set d(value) {
        this.nativeInstance.setD(value);
    }

    get e(): number {
        return this.nativeInstance.getE();
    }

    set e(value) {
        this.nativeInstance.setE(value);
    }

    get f(): number {
        return this.nativeInstance.getF();
    }

    set f(value) {
        this.nativeInstance.setF(value);
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
