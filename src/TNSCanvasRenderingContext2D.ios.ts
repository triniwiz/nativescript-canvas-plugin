import {TNSCanvasRenderingContext2DBase} from './canvas-plugin.common';
import {CanvasGradient} from './CanvasGradient';
import {ColorHandler} from './ColorHelper';
import {TNSPath2D} from './TNSPath2D';
import {ImageSource} from '@nativescript/core/image-source';
import {ImageData} from './ImageData';
import {TextMetrics} from './TextMetrics';
import {Color as TNSColor} from '@nativescript/core/color';
import {TNSImageAsset} from './TNSImageAsset';
import {CanvasPattern} from './CanvasPattern';
import {TNSCanvas} from './TNSCanvas';

declare let ImageAsset, Canvas;

export class TNSCanvasRenderingContext2D extends TNSCanvasRenderingContext2DBase {
    public static isDebug = false;
    private context;

    constructor(context: any) {
        super();
        this.context = context;
    }

    get native() {
        return this.context;
    }

    get canvas() {
        return this._canvas;
    }

    get font(): string {
        this.log('get font');
        return this.context.font;
    }

    set font(value: string) {
        this.log('set font value:', value);
        if (this.context) {
            this.context.font = value;
        }
    }

    private _shadowColor: any = 'transparent';

    get shadowColor() {
        this.log('get shadowColor');
        return this._shadowColor;
    }

    set shadowColor(color: any) {
        this.log('set shadowColor', color);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            if (typeof color === 'string' && !isNaN(parseInt(color))) {
                this.context.shadowColor = parseInt(color);
            } else {
                this.context.shadowColor = new TNSColor(color).argb;
            }
        }
    }

    get globalAlpha(): number {
        this.log('get globalAlpha');
        return this.context.globalAlpha;
    }

    set globalAlpha(alpha: number) {
        this.log('set globalAlpha', alpha);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.globalAlpha = alpha;
        }
    }

    get imageSmoothingEnabled() {
        this.log('get imageSmoothingEnabled');
        return this.context.imageSmoothingEnabled;
    }

    set imageSmoothingEnabled(enabled: boolean) {
        this.log('set imageSmoothingEnabled', enabled);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.imageSmoothingEnabled = enabled;
        }
    }

    get imageSmoothingQuality() {
        this.log('get imageSmoothingQuality');
        switch (this.context.imageSmoothingQuality) {
            case 1:
                return 'medium';
            case 2:
                return 'high';
            default:
                return 'low';
        }
    }

    set imageSmoothingQuality(quality: string) {
        this.log('set imageSmoothingQuality', quality);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            switch (quality) {
                case 'high':
                    this.context.imageSmoothingQuality = 2; // ImageSmoothingQuality.High;
                    break;
                case 'medium':
                    this.context.imageSmoothingQuality = 1; // ImageSmoothingQuality.Medium;
                    break;
                default:
                    this.context.imageSmoothingQuality = 0; // ImageSmoothingQuality.Low;
                    break;
            }
        }
    }

    get lineDashOffset() {
        this.log('get lineDashOffset');
        return this.context.lineDashOffset;
    }

    set lineDashOffset(offset: number) {
        this.log('set lineDashOffset', offset);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.lineDashOffset = offset;
        }
    }

    get lineJoin() {
        this.log('get lineJoin');
        switch (this.context.lineJoin) {
            case 0:
                return 'bevel';
            case 1:
                return 'round';
            default:
                return 'miter';
        }
    }

    set lineJoin(join: string) {
        this.log('set lineJoin', join);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            switch (join) {
                case 'bevel':
                    this.context.lineJoin = 0; // LineJoin.Bevel;
                    break;
                case 'round':
                    this.context.lineJoin = 1; // LineJoin.Round;
                    break;
                default:
                    this.context.lineJoin = 2; // LineJoin.Miter;
                    break;
            }
        }
    }

    get lineCap() {
        this.log('get lineCap');
        switch (this.context.lineCap) {
            case 1:
                return 'round';
            case 2:
                return 'square';
            default:
                return 'butt';
        }
    }

    set lineCap(cap: string) {
        this.log('set lineCap', cap);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            switch (cap) {
                case 'round':
                    this.context.lineCap = 1; // LineCap.Round;
                    break;
                case 'square':
                    this.context.lineCap = 2; // LineCap.Square;
                    break;
                default:
                    this.context.lineCap = 0; // LineCap.Butt;
            }
        }
    }

    get miterLimit() {
        this.log('get miterLimit');
        return this.context.miterLimit;
    }

    set miterLimit(limit: number) {
        this.log('set miterLimit', limit);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.miterLimit = limit;
        }
    }

    get shadowBlur() {
        this.log('get shadowBlur');
        return this.context.shadowBlur;
    }

    set shadowBlur(blur: number) {
        this.log('set shadowBlur', blur);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.shadowBlur = blur;
        }
    }

    get shadowOffsetX() {
        this.log('get shadowOffsetX');
        return this.context.shadowOffsetX;
    }

    set shadowOffsetX(x: number) {
        this.log('set shadowOffsetX', x);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.shadowOffsetX = x;
        }
    }

    get shadowOffsetY() {
        this.log('get shadowOffsetY');
        return this.context.shadowOffsetY;
    }

    set shadowOffsetY(y: number) {
        this.log('set shadowOffsetY', y);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.shadowOffsetY = y;
        }
    }

    get textAlign() {
        this.log('get textAlign');
        switch (this.context.textAlign) {
            case 1:
                return 'start';
            case 2:
                return 'center';
            case 3:
                return 'end';
            case 4:
                return 'right';
            default:
                return 'left';
        }
    }

    set textAlign(alignment: string) {
        this.log('set textAlign', alignment);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            switch (alignment) {
                case 'start':
                    this.context.textAlign = 1; // TextAlignment.Start;
                    break;
                case 'center':
                    this.context.textAlign = 2; // TextAlignment.Center;
                    break;
                case 'end':
                    this.context.textAlign = 3; // TextAlignment.End;
                    break;
                case 'right':
                    this.context.textAlign = 4; // TextAlignment.Right;
                    break;
                default:
                    this.context.textAlign = 0; // TextAlignment.Left;
                    break;
            }
        }
    }

    get globalCompositeOperation() {
        this.log('get globalCompositeOperation');
        switch (this.context.globalCompositeOperation) {
            case 0:
                return 'source-over';
            case 1:
                return 'source-in';
            case 2:
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

    set globalCompositeOperation(composite: string) {
        this.log('set globalCompositeOperation', composite);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
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
    }

    private _fillStyle: string | CanvasGradient | CanvasPattern = 'black';

    get fillStyle() {
        this.log('get fillStyle');
        return this._fillStyle;
    }

    set fillStyle(color: string | CanvasGradient | CanvasPattern) {
        this.log('set fillStyle', color);
        this._ensureLayoutBeforeDraw();
        if (this._fillStyle === color) {
            return;
        }
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            this._fillStyle = color;
            nativeStyle = color.native;
        } else if (color instanceof CanvasPattern) {
            this._fillStyle = color;
            nativeStyle = color.native;
        } else if (color === undefined || color === null) {
            color = 'black';
        } else {
            let wasHsl = false;
            if (typeof color === 'string' && color.startsWith('hsla')) {
                wasHsl = true;
                color = ColorHandler.HSLAToRGBA(color, false);
            } else if (typeof color === 'string' && color.startsWith('hsl')) {
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
            nativeStyle = new TNSColor(color).argb;
        }
        this.context.fillStyle = nativeStyle;
    }

    private _strokeStyle: string | CanvasGradient | CanvasPattern = 'black';

    get strokeStyle() {
        this.log('get strokeStyle');
        return this._strokeStyle;
    }

    set strokeStyle(color: string | CanvasGradient | CanvasPattern) {
        this.log('set strokeStyle', color);
        this._ensureLayoutBeforeDraw();
        if (this.strokeStyle === color) {
            return;
        }
        let nativeStyle;
        if (color instanceof CanvasGradient) {
            nativeStyle = color.native;
            this._strokeStyle = color;
        } else if (color instanceof CanvasPattern) {
            this._strokeStyle = color;
            nativeStyle = color.native;
        } else if (color === undefined || color === null) {
            color = 'black';
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
            nativeStyle = new TNSColor(color).argb;
        }
        this.context.strokeStyle = nativeStyle;
    }

    get lineWidth() {
        this.log('get lineWidth');
        return this.context.lineWidth;
    }

    set lineWidth(width: number) {
        this.log('set lineWidth', width);
        this._ensureLayoutBeforeDraw();
        if (this.context) {
            this.context.lineWidth = width;
        }
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
        this.log('arc', x, y, radius, startAngle, anticlockwise);
        this._ensureLayoutBeforeDraw();
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
        this.log('arcTo', x1, y1, x2, y2, radius);
        this._ensureLayoutBeforeDraw();
        this.context.arcToX1Y1X2Y2Radius(x1, y1, x2, y2, radius);
    }

    beginPath(): void {
        this.log('beginPath');
        this._ensureLayoutBeforeDraw();
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
        this.log('bezierCurveTo', cp1x, cp1y, cp2x, cp2y, x, y);
        this._ensureLayoutBeforeDraw();
        this.context.bezierCurveToCp1xCp1yCp2xCp2yXY(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    clearHitRegions(): void {
    }

    clearRect(x: number, y: number, width: number, height: number): void {
        this.log('clearRect', x, y, width, height);
        this._ensureLayoutBeforeDraw();
        this.context.clearRectWithXYWidthHeight(x, y, width, height);
    }

    clip(): void;

    clip(fillRule: string): void;

    clip(path: any, fillRule: string): void;

    clip(...args): void {
        this.log('clip', ...args);
        this._ensureLayoutBeforeDraw();
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
        this.log('closePath');
        this._ensureLayoutBeforeDraw();
        this.context.closePath();
    }

    createImageData(width: number, height: number): ImageData;

    createImageData(data: ImageData): ImageData;

    createImageData(width: number | ImageData, height?: number): ImageData {
        this.log('createImageData', width, height);
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
        this.log('createLinearGradient', x0, y0, x1, y1);
        this._ensureLayoutBeforeDraw();
        return CanvasGradient.fromNative(
            this.context.createLinearGradientWithX0Y0X1Y1(x0, y0, x1, y1)
        );
    }

    createPattern(image: any, repetition: string): CanvasPattern | null {
        this.log('createPattern', image, repetition);
        this._ensureLayoutBeforeDraw();
        if (repetition === undefined || typeof repetition !== 'string') {
            const e = new Error('The string did not match the expected pattern.');
            e.name = 'SyntaxError';
            throw e;
        }
        let img;
        if (image instanceof ImageSource) {
            img = image.ios;
        } else if (image instanceof UIImage) {
            img = image;
        } else if (image instanceof TNSImageAsset) {
            img = image.native;
        } else if (image instanceof TNSCanvas) {
            img = image.ios;
        } else if (image && typeof image.tagName === 'string' && image.tagName === 'IMG') {
            if (image._imageSource instanceof ImageSource) {
                img = image._imageSource.android;
            } else if (image._image instanceof UIImage) {
                img = image._image;
            } else if (image._asset instanceof TNSImageAsset) {
                img = image._asset.native;
            } else if (typeof image.src === 'string') {
                img = ImageSource.fromFileSync(image.src).ios;
            }
        } else if (
            image &&
            typeof image.tagName === 'string' &&
            image.tagName === 'CANVAS'
        ) {
            if (image._canvas instanceof TNSCanvas) {
                img = image._canvas.ios;
            }
        }

        if (!img) {
            return null;
        }

        let rep;
        switch (repetition) {
            case 'no-repeat':
                rep = 3; // PatternRepetition.NoRepeat;
                break;
            case 'repeat-x':
                rep = 1; // PatternRepetition.RepeatX;
                break;
            case 'repeat-y':
                rep = 2; // PatternRepetition.RepeatY;
                break;
            default:
                rep = 0; // PatternRepetition.Repeat;
                break;
        }

        if (img instanceof ImageAsset) {
            return new CanvasPattern(this.context.createPatternWithAssetRepetition(img, rep));
        } else if (img instanceof UIImage) {
            return new CanvasPattern(this.context.createPatternWithSrcRepetition(img, rep));
        } else if (img instanceof Canvas) {
            return new CanvasPattern(this.context.createPatternWithCanvasRepetition(img, rep));
        }
        return null;
    }

    createRadialGradient(
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number
    ) {
        this.log('createRadialGradient', x0, y0, r0, x1, y1, r1);
        this._ensureLayoutBeforeDraw();
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
        this.log('drawImage', ...args);
        this._ensureLayoutBeforeDraw();
        if (!args) {
            return;
        }
        let image = args[0];
        let asset = null;
        let width = 0;
        let height = 0;
        if (image instanceof ImageSource) {
            image = image.ios;
        } else if (image instanceof TNSImageAsset || image instanceof UIImage) {
            // NOOP
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
                image = ImageSource.fromFileSync(image.src).ios;
            }
        } else if (
            image &&
            typeof image.tagName === 'string' &&
            image.tagName === 'CANVAS' && image._canvas instanceof TNSCanvas
        ) {
            image = image._canvas;
        }


        if (args.length === 3) {
            if (image instanceof TNSImageAsset) {
                this.context.drawImageWithAssetDxDy(image.native, args[1], args[2]);
            } else if (image instanceof TNSCanvas) {
                this.context.drawImageWithCanvasDxDy(image.ios, args[1], args[2]);
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
            } else if (image instanceof TNSCanvas) {
                this.context.drawImageWithCanvasDxDyDWidthDHeight(image.ios, args[1],
                    args[2],
                    args[3],
                    args[4]);
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
            } else if (image instanceof TNSCanvas) {
                this.context.drawImageWithCanvasSxSySWidthSHeightDxDyDWidthDHeight(image.ios, args[1],
                    args[2],
                    args[3],
                    args[4],
                    args[5],
                    args[6],
                    args[7],
                    args[8]);
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
        this.log('ellipse', x,
            y,
            radiusX,
            radiusY,
            rotation,
            startAngle,
            endAngle,
            anticlockwise);
        this._ensureLayoutBeforeDraw();
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
        this.log('fill', ...args);
        this._ensureLayoutBeforeDraw();
        if (typeof args[0] === 'string') {
            this.context.fillWithRule(args[0]);
        } else if (args[0] instanceof TNSPath2D && typeof args[1] === 'string') {
            this.context.fillWithPathRule(args[0].native, args[1]);
        } else if (args[0] instanceof TNSPath2D) {
            this.context.fillWithPath(args[0].native);
        } else {
            this.context.fill();
        }
    }

    fillRect(x: number, y: number, width: number, height: number): void {
        this.log('fillRect', x, y, width, height);
        this._ensureLayoutBeforeDraw();
        this.context.fillRectWithXYWidthHeight(x, y, width, height);
    }

    fillText(text: string, x: number, y: number, maxWidth?: number): void {
        this.log('fillText', text, x, y, maxWidth);
        this._ensureLayoutBeforeDraw();
        if (typeof maxWidth === 'number') {
            this.context.fillTextWithTextXYWidth(text, x, y, maxWidth);
        } else {
            this.context.fillTextWithTextXY(text, x, y);
        }
    }

    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
        this.log('getImageData', sx, sy, sw, sh);
        this._ensureLayoutBeforeDraw();
        return ImageData.fromNative(this.context.getImageDataWithSxSySwSh(sx, sy, sw, sh));
    }

    getLineDash() {
        this.log('getLineDash');
        this._ensureLayoutBeforeDraw();
        return this.context.getLineDash() as any;
    }

    isPointInPath(x: number, y: number, fillRule: string): boolean;

    isPointInPath(
        path: TNSPath2D,
        x: number,
        y: number,
        fillRule: string
    ): boolean;

    isPointInPath(...args): boolean {
        this.log('isPointInPath', ...args);
        this._ensureLayoutBeforeDraw();
        if (args.length === 2) {
            return this.context.isPointInPathWithXY(args[0], args[1]);
        } else if (args.length === 3) {
            return this.context.isPointInPathWithXYFillRule(args[0], args[1], args[2]);
        } else if (args.length === 4 && args[0] instanceof TNSPath2D) {
            return this.context.isPointInPathWithPathXYFillRule(args[0].native, args[1], args[2], args[3]);
        }
        return false;
    }

    isPointInStroke(x: number, y: number): boolean;

    isPointInStroke(path: TNSPath2D, x: number, y: number): boolean;

    isPointInStroke(...args): boolean {
        this.log('isPointInStroke', ...args);
        this._ensureLayoutBeforeDraw();
        if (args.length === 2) {
            return this.context.isPointInStrokeWithXY(args[0], args[1]);
        } else if (args.length === 3 && args[0] instanceof TNSPath2D) {
            return this.context.isPointInStrokeWithPathXY(args[0].native, args[1], args[2]);
        }
        return false;
    }

    lineTo(x: number, y: number): void {
        this.log('lineTo', x, y);
        this._ensureLayoutBeforeDraw();
        this.context.lineToXY(x, y);
    }

    measureText(text: string): TextMetrics {
        this.log('measureText', text);
        this._ensureLayoutBeforeDraw();
        return new TextMetrics(this.context.measureTextWithText(text));
    }

    moveTo(x: number, y: number): void {
        this.log('moveTo', x, y);
        this._ensureLayoutBeforeDraw();
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
        this.log('putImageData', ...args);
        this._ensureLayoutBeforeDraw();
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
        this.log('quadraticCurveTo', cpx, cpy, x, y);
        this._ensureLayoutBeforeDraw();
        this.context.quadraticCurveToCpxCpyXY(cpx, cpy, x, y);
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.log('rect', x, y, width, height);
        this._ensureLayoutBeforeDraw();
        this.context.rectWithXYWidthHeight(x, y, width, height);
    }

    removeHitRegion(id: string): void {
    }

    resetTransform(): void {
        this.log('resetTransform');
        this._ensureLayoutBeforeDraw();
        this.context.resetTransform();
    }

    restore(): void {
        this.log('restore');
        this._ensureLayoutBeforeDraw();
        this.context.restore();
    }

    rotate(angle: number): void {
        this.log('rotate', angle);
        this._ensureLayoutBeforeDraw();
        this.context.rotateWithAngle(angle);
    }

    save(): void {
        this.log('save');
        this._ensureLayoutBeforeDraw();
        this.context.save();
    }

    scale(x: number, y: number): void {
        this.log('scale', x, y);
        this._ensureLayoutBeforeDraw();
        this.context.scaleWithXY(x, y);
    }

    scrollPathIntoView(): void;

    scrollPathIntoView(path: TNSPath2D): void;

    scrollPathIntoView(path?: TNSPath2D): void {
    }

    setLineDash(segments: number[]): void {
        this.log('setLineDash', segments);
        this._ensureLayoutBeforeDraw();
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
        this.log('setTransform', a, b, c, d, e, f);
        this._ensureLayoutBeforeDraw();
        this.context.setTransformWithABCDEF(a, b, c, d, e, f);
    }

    stroke(): void;

    stroke(path?: TNSPath2D): void {
        this.log('stroke', path);
        this._ensureLayoutBeforeDraw();
        if (path) {
            this.context.strokeWithPath(path.native);
        } else {
            this.context.stroke();
        }
    }

    strokeRect(x: number, y: number, width: number, height: number): void {
        this.log('strokeRect', x, y, width, height);
        this._ensureLayoutBeforeDraw();
        this.context.strokeRectWithXYWidthHeight(x, y, width, height);
    }

    strokeText(text: string, x: number, y: number, maxWidth?: number): void {
        this.log('strokeText', text, x, y, maxWidth);
        this._ensureLayoutBeforeDraw();
        if (typeof maxWidth === 'number') {
            this.context.strokeTextWithTextXYWidth(text, x, y, maxWidth);
        } else {
            this.context.strokeTextWithTextXY(text, x, y);
        }
    }

    transform(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void {
        this.log('transform', a, b, c, d, e, f);
        this._ensureLayoutBeforeDraw();
        this.context.transformWithABCDEF(a, b, c, d, e, f);
    }

    translate(x: number, y: number): void {
        this.log('translate', x, y);
        this._ensureLayoutBeforeDraw();
        this.context.translateWithXY(x, y);
    }

    private log(message, ...args) {
        if (!TNSCanvasRenderingContext2D.isDebug) {
            return;
        }
        console.log(message, args);
    }

    private _ensureLayoutBeforeDraw() {
        if (this.canvas) {
            this.canvas._layoutNative();
        }
    }
}
