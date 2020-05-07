import { TNSCanvasRenderingContext2DBase } from './canvas-plugin.common';
import { CanvasGradient } from './CanvasGradient';
import { ColorHandler } from './ColorHelper';
import { TNSPath2D } from './TNSPath2D';
import { fromFile, ImageSource } from 'tns-core-modules/image-source';
import { ImageData } from './ImageData';
import { TextMetrics } from './TextMetrics';
import { Color } from 'tns-core-modules/color';
import { TNSImageAsset } from './TNSImageAsset';

export class TNSCanvasRenderingContext2D extends TNSCanvasRenderingContext2DBase {
    private context: com.github.triniwiz.canvas.CanvasRenderingContext2D;

    constructor(context: any) {
        super();
        this.context = context;
    }

    get native() {
        return this.context;
    }

    private _shadowColor: string = 'transparent';

    get shadowColor() {
        return this._shadowColor;
    }

    set shadowColor(color: string) {
        this.context.setShadowColor(new Color(color).android);
    }


    set globalAlpha(alpha: number) {
        this.context.setGlobalAlpha(alpha);
    }

    get globalAlpha(): number {
        return this.context.getGlobalAlpha();
    }

    set imageSmoothingEnabled(enabled: boolean) {
        this.context.setImageSmoothingEnabled(enabled);
    }

    get imageSmoothingEnabled() {
        return this.context.getImageSmoothingEnabled();
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


    get imageSmoothingQuality() {
        return this.context.getImageSmoothingQuality().toString();
    }

    set lineDashOffset(offset: number) {
        this.context.setLineDashOffset(offset);
    }

    get lineDashOffset() {
        return this.context.getLineDashOffset();
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

    get lineJoin() {
        return this.context.getLineJoin().toString();
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

    get lineCap() {
        return this.context.getLineCap().toString();
    }

    set miterLimit(limit: number) {
        this.context.setMiterLimit(limit);
    }

    get miterLimit() {
        return this.context.getMiterLimit();
    }

    set shadowBlur(blur: number) {
        this.context.setShadowBlur(blur);
    }

    get shadowBlur() {
        return this.context.getShadowBlur();
    }

    set shadowOffsetX(x: number) {
        this.context.setShadowOffsetX(x);
    }

    get shadowOffsetX() {
        return this.context.getShadowOffsetX();
    }

    set shadowOffsetY(y: number) {
        this.context.setShadowOffsetY(y);
    }

    get shadowOffsetY() {
        return this.context.getShadowOffsetY();
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

    get textAlign() {
        return this.context.getTextAlign().toString();
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

    get globalCompositeOperation() {
        return this.context.getGlobalCompositeOperation().toString();
    }

    private _fillStyle: string | CanvasGradient = 'black';
    get fillStyle() {
        return this._fillStyle;
    }

    set fillStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.nativeInstance;
            this._fillStyle = color;
        } else {

            if (color.startsWith('hsla')) {
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (color.startsWith('hsl')) {
                color = ColorHandler.HSLToRGB(color, false);
            }
            if (typeof color === 'string' && color.indexOf('Invalid input color') > -1) {
                color = 'black';
            }
            this._fillStyle = color;
            nativeStyle = new com.github.triniwiz.canvas.CanvasColorStyle.Color(
                new Color(color).android
            );
        }
        this.context.setFillStyle(nativeStyle);
    }

    private _strokeStyle: string | CanvasGradient = 'black';
    get strokeStyle() {
        return this._strokeStyle;
    }

    set strokeStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.nativeInstance;
            this._strokeStyle = color;
        } else {

            if (color.startsWith('hsla')) {
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (color.startsWith('hsl')) {
                color = ColorHandler.HSLToRGB(color, false);
            }
            if (typeof color === 'string' && color.indexOf('Invalid input color') > -1) {
                color = 'black';
            }

            this._strokeStyle = color;

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
        if (image instanceof TNSImageAsset) {
            image = image.native;
        } else if (image instanceof ImageSource) {
            image = image.android;
        } else if (image instanceof android.graphics.Bitmap) {
            image = image;
        } else if (image && typeof image.tagName === 'string' && image.tagName === 'IMG') {
            if (image._imageSource instanceof ImageSource) {
                image = image._imageSource.android;
            } else if (image._image instanceof android.graphics.Bitmap) {
                image = image._image;
            } else if (image._asset instanceof TNSImageAsset) {
                image = image._asset.native;
            } else if (typeof image.src === 'string') {
                image = fromFile(image.src).android;
            }
        } else if (
            image &&
            typeof image.tagName === 'string' &&
            image.tagName === 'CANVAS'
        ) {
            // NOOP
            return;
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
