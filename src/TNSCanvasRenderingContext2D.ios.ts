import { TNSCanvasRenderingContext2DBase } from './canvas-plugin.common';
import { CanvasGradient } from './CanvasGradient';
import { ColorHandler } from './ColorHelper';
import { TNSPath2D } from './TNSPath2D';
import { fromFile, ImageSource } from 'tns-core-modules/image-source';
import { ImageData } from './ImageData';
import { TextMetrics } from './TextMetrics';
import { Color as TNSColor } from 'tns-core-modules/color';
import { TNSImageAsset } from './TNSImageAsset';

export class TNSCanvasRenderingContext2D extends TNSCanvasRenderingContext2DBase {
    private context;

    constructor(context: any) {
        super();
        this.context = context;
    }

    get native() {
        return this.context;
    }

    private _shadowColor: string = 'transparent';
    set shadowColor(color: string) {
        this.context.shadowColor = new TNSColor(color).ios;
    }

    get shadowColor() {
        return this._shadowColor;
    }


    set globalAlpha(alpha: number) {
        this.context.globalAlpha = alpha;
    }

    get globalAlpha(): number {
        return this.context.globalAlpha;
    }

    set imageSmoothingEnabled(enabled: boolean) {
        this.context.imageSmoothingEnabled = enabled;
    }

    get imageSmoothingEnabled() {
        return this.context.imageSmoothingEnabled;
    }

    set imageSmoothingQuality(quality: string) {
        switch (quality) {
            case 'high':
                this.context.imageSmoothingQuality = 2; //ImageSmoothingQuality.High;
                break;
            case 'medium':
                this.context.imageSmoothingQuality = 1; //ImageSmoothingQuality.Medium;
                break;
            default:
                this.context.imageSmoothingQuality = 0; //ImageSmoothingQuality.Low;
                break;
        }
    }

    get imageSmoothingQuality() {
        switch (this.context.imageSmoothingQuality) {
            case 1:
                return 'medium';
            case 2:
                return 'high';
            default:
                return 'low';
        }
    }

    set lineDashOffset(offset: number) {
        this.context.lineDashOffset = offset;
    }

    get lineDashOffset() {
        return this.context.lineDashOffset;
    }

    set lineJoin(join: string) {
        switch (join) {
            case 'bevel':
                this.context.lineJoin = 0; //LineJoin.Bevel;
                break;
            case 'round':
                this.context.lineJoin = 1; //LineJoin.Round;
                break;
            default:
                this.context.lineJoin = 2; //LineJoin.Miter;
                break;
        }
    }

    get lineJoin() {
        switch (this.context.lineJoin) {
            case 0:
                return 'bevel';
            case 1:
                return 'round';
            default:
                return 'miter';
        }
    }

    set lineCap(cap: string) {
        switch (cap) {
            case 'round':
                this.context.lineCap = 1; //LineCap.Round;
                break;
            case 'square':
                this.context.lineCap = 2; //LineCap.Square;
                break;
            default:
                this.context.lineCap = 0; //LineCap.Butt;
        }
    }

    get lineCap() {
        switch (this.context.lineCap) {
            case 1:
                return 'round';
            case 2:
                return 'square';
            default:
                return 'butt';
        }
    }

    set miterLimit(limit: number) {
        this.context.miterLimit = limit;
    }

    get miterLimit() {
        return this.context.miterLimit;
    }

    set shadowBlur(blur: number) {
        this.context.shadowBlur = blur;
    }

    get shadowBlur() {
        return this.context.shadowBlur;
    }

    set shadowOffsetX(x: number) {
        this.context.shadowOffsetX = x;
    }

    get shadowOffsetX() {
        return this.context.shadowOffsetX;
    }

    set shadowOffsetY(y: number) {
        this.context.shadowOffsetY = y;
    }

    get shadowOffsetY() {
        return this.context.shadowOffsetY;
    }

    set textAlign(alignment: string) {
        switch (alignment) {
            case 'start':
                this.context.textAlign = 1; //TextAlignment.Start;
                break;
            case 'center':
                this.context.textAlign = 2; //TextAlignment.Center;
                break;
            case 'end':
                this.context.textAlign = 3; //TextAlignment.End;
                break;
            case 'right':
                this.context.textAlign = 4; //TextAlignment.Right;
                break;
            default:
                this.context.textAlign = 0; //TextAlignment.Left;
                break;
        }
    }

    get textAlign() {
        switch (this.context.textAlign) {
            case 1:
                return 'start';
            case 2 :
                return 'center';
            case 3 :
                return 'end';
            case 4:
                return 'right';
            default:
                return 'left';
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
                this.context.globalCompositeOperation = 4;
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
                this.context.globalCompositeOperation = 23;
                break;
            case 'color':
                this.context.globalCompositeOperation = 24;
                break;
            case 'luminosity':
                this.context.globalCompositeOperation = 25;
                break;
        }
    }

    get globalCompositeOperation() {
        switch (this.context.globalCompositeOperation) {
            case 0:
                return 'source-over';
            case 1:
                return 'source-in';
            case 3:
                return 'source-out';
            case 3:
                return 'source-atop';
            case 4:
                return 'destination-over';
            case 5:
                return 'destination-in';
            case 6:
                return 'destination-out';
            case 7:
                return 'destination-atop';
            case 8:
                return 'lighter';
            case 9:
                return 'copy';
            case 10:
                return 'xor';
            case 11:
                return 'multiply';
            case 12:
                return 'screen';
            case 13:
                return 'overlay';
            case 14:
                return 'darken';
            case 15:
                return 'lighten';
            case 16:
                return 'color-dodge';
            case 17:
                return 'color-burn';
            case 18:
                return 'hard-light';
            case 19:
                return 'soft-light';
            case 20:
                return 'difference';
            case 21:
                return 'exclusion';
            case 22:
                return 'hue';
            case 23:
                return 'saturation';
            case 24:
                return 'color';
            case 25:
                return 'luminosity';
            default:
                return 'source-over';
        }
    }

    private _fillStyle: string | CanvasGradient = 'black';
    get fillStyle() {
        return this._fillStyle;
    }

    set fillStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            this._fillStyle = color;
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
            if (
                typeof color === 'string' &&
                color.indexOf('Invalid input color') > -1
            ) {
                color = 'black';
                //  0xff000000
            }
            this._fillStyle = color;
            // @ts-ignore
            nativeStyle = Color.alloc().initWithColor(new TNSColor(color).ios);
        }
        this.context.fillStyle = nativeStyle;
    }

    private _strokeStyle: string | CanvasGradient = 'black';
    get strokeStyle() {
        return this._strokeStyle;
    }

    set strokeStyle(color: string | CanvasGradient) {
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.native;
            this._strokeStyle = color;
        } else {
            if (color.startsWith('hsla')) {
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (color.startsWith('hsl')) {
                color = ColorHandler.HSLToRGB(color, false);
            }
            if (
                typeof color === 'string' &&
                color.indexOf('Invalid input color') > -1
            ) {
                color = 'black';
            }
            this._strokeStyle = color;
            // @ts-ignore
            nativeStyle = Color.alloc().initWithColor(new TNSColor(color).ios);
        }
        this.context.strokeStyle = nativeStyle;
    }

    get lineWidth() {
        return this.context.lineWidth;
    }

    set lineWidth(width: number) {
        this.context.lineWidth = width;
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
        this.context.arcWithXYRadiusStartAngleEndAngleAnticlockwise(
            x,
            y,
            radius,
            startAngle,
            endAngle,
            anticlockwise
        );
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
    createImageData(width: number | ImageData, height?: number): ImageData {
        if (width instanceof ImageData) {
            return ImageData.fromNative(
                this.context.createImageDataWithImageData(width.native)
            );
        } else {
            return ImageData.fromNative(
                this.context.createImageDataWithWidthHeight(width, height)
            );
        }
    }

    createLinearGradient(x0: number, y0: number, x1: number, y1: number) {
        return CanvasGradient.fromNative(
            this.context.createLinearGradientWithX0Y0X1Y1(x0, y0, x1, y1)
        );
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
        return CanvasGradient.fromNative(
            this.context.createRadialGradientWithX0Y0R0X1Y1R1(x0, y0, r0, x1, y1, r1)
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
        if (!args) {
            return;
        }
        let image = args[0];
        let asset = null;
        let width = 0;
        let height = 0;
        if (image instanceof ImageSource) {
            image = image.ios;
        } else if (image instanceof TNSImageAsset) {
            image = image;
        } else if (image instanceof UIImage) {
            image = image;
        } else if (
            image &&
            typeof image.tagName === 'string' &&
            image.tagName === 'IMG'
        ) {
            width = image.width;
            height = image.height;
            if (image._imageSource instanceof ImageSource) {
                image = image._imageSource.ios;
            } else if (image._image instanceof UIImage) {
                image = image._image;
            } else if (image._asset instanceof TNSImageAsset) {
                image = image._asset;
            } else if (typeof image.src === 'string') {
                image = fromFile(image.src).ios;
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
            if (image instanceof TNSImageAsset) {
                this.context.drawImageWithAssetDxDy(image.native, args[1], args[2]);
            } else {
                this.context.drawImageWithImageDxDy(image, args[1], args[2]);
            }

        } else if (args.length === 5) {
            if (image instanceof TNSImageAsset) {
                this.context.drawImageWithAssetDxDyDWidthDHeight(
                    image.native,
                    args[1],
                    args[2],
                    args[3],
                    args[4]
                );
            } else {
                this.context.drawImageWithImageDxDyDWidthDHeight(
                    image,
                    args[1],
                    args[2],
                    args[3],
                    args[4]
                );
            }
        } else if (args.length === 9) {
            if (image instanceof TNSImageAsset) {
                this.context.drawImageWithAssetSxSySWidthSHeightDxDyDWidthDHeight(
                    image.native,
                    args[1],
                    args[2],
                    args[3],
                    args[4],
                    args[5],
                    args[6],
                    args[7],
                    args[8]
                );
            } else {
                this.context.drawImageWithImageSxSySWidthSHeightDxDyDWidthDHeight(
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
        this.context.ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngleAnticlockwise(
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
        return ImageData.fromNative(this.context.getImageDataWithSxSySwSh(sx, sy, sw, sh));
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
            this.context.putImageDataWithImageDataDxDyDirtyXDirtyYDirtyWidthDirtyHeight(
                data.native,
                args[1],
                args[2],
                args[3],
                args[4],
                args[5],
                args[6]
            );
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
