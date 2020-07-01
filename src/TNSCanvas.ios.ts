import {TNSDOMMatrix} from './TNSDOMMatrix';
import {layout, TNSCanvasBase} from './canvas-plugin.common';
import {TNSCanvasRenderingContext2D} from './TNSCanvasRenderingContext2D';
import {TNSWebGLRenderingContext} from './TNSWebGLRenderingContext';
import {TNSWebGL2RenderingContext} from './TNSWebGL2RenderingContext';

declare var Canvas;

export function createSVGMatrix(): TNSDOMMatrix {
    return new TNSDOMMatrix(Canvas.createSVGMatrix());
}

export * from './canvas-plugin.common';

export class TNSCanvas extends TNSCanvasBase {
    useMetal: boolean = false;
    private _2dContext: TNSCanvasRenderingContext2D;
    private _webglContext: TNSWebGLRenderingContext;
    private _webgl2Context: TNSWebGL2RenderingContext;
    private _canvas: any;
    private _didPause: boolean = false;
    private _isReady: boolean = false;

    constructor() {
        super();
        this._canvas = Canvas.alloc().initWithFrameUseGL(
            CGRectZero,
            !this.useMetal
        );
    }

    get ios() {
        return this._canvas;
    }

    get clientWidth() {
        return this.width;
    }

    get clientHeight() {
        return this.height;
    }

    get width() {
        const measuredWidth = this.getMeasuredWidth();
        if (measuredWidth > 0) {
            return measuredWidth;
        }
        return this._realSize.width;
    }

    set width(value) {
        this.style.width = value;
        if (this._isCustom) {
            this._layoutNative();
        }
    }

    get height() {
        const measuredHeight = this.getMeasuredHeight();
        if (measuredHeight > 0) {
            return measuredHeight;
        }
        return this._realSize.height;
    }

    set height(value) {
        this.style.height = value;
        if (this._isCustom) {
            this._layoutNative();
        }
    }

    private _iosOverflowSafeArea = false;

    get iosOverflowSafeArea() {
        return this._iosOverflowSafeArea;
    }

    set iosOverflowSafeArea(value: boolean) {
        const window = UIApplication.sharedApplication.windows[0];
        const topPadding = window.safeAreaInsets.top;
        const bottomPadding = window.safeAreaInsets.bottom;
        if (bottomPadding === 0) {
            this._iosOverflowSafeArea = false;
        } else {
            this._iosOverflowSafeArea = value;
        }
    }

    static createCustomView() {
        const canvas = new TNSCanvas();
        canvas._isCustom = true;
        canvas.width = 300;
        canvas.height = 150;
        return canvas;
    }

    createNativeView() {
        return this._canvas;
    }

    flush() {
        if (this.ios) {
            this.ios.flush();
        }
    }

    onUnloaded() {
        this.ios.pause();
        this._didPause = true;
        super.onUnloaded();
    }

    onLoaded() {
        super.onLoaded();
        if (this._didPause) {
            this.ios.resume();
            this._didPause = false;
        }
    }

    public onLayout(left: number, top: number, right: number, bottom: number) {
        super.onLayout(left, top, right, bottom);
        if (!this._isReady) {
            this._readyEvent();
            this._isReady = true;
        }
    }

    disposeNativeView(): void {
        this.off('touch, pan', this._touchEvents);
        super.disposeNativeView();
    }

    _layoutNative() {
        if (!this.parent) {
            if (
                (typeof this.style.width === 'string' && this.style.width.indexOf('%')) ||
                (typeof this.style.height === 'string' && this.style.height.indexOf('%'))
            ) {
                return;
            }
            if (!this._isCustom) {
                return;
            }

            const size = this._realSize;
            if (!(size.width || 0) && !(size.height || 0)) {
                return;
            }
            let frameSize = this._canvas.frame.size;

            const frame_origin = this._canvas.frame.origin;
            const frame = CGRectMake(
                frame_origin.x,
                frame_origin.y,
                layout.toDeviceIndependentPixels(size.width || 0),
                layout.toDeviceIndependentPixels(size.height || 0)
            );
            this._canvas.frame = frame;

        }
    }

    getContext(
        type: string,
        options?: any
    ):
        | TNSCanvasRenderingContext2D
        | TNSWebGLRenderingContext
        | TNSWebGL2RenderingContext
        | null {
        const glOpts = options || {
            alpha: true,
            antialias: true,
            depth: true,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            stencil: false,
            desynchronized: false
        };
        const canvasOpts = options || {
            alpha: true
        };
        if (type && type === '2d') {
            if (this._webglContext || this._webgl2Context) {
                return null;
            }
            if (!this._2dContext) {
                this._2dContext = new TNSCanvasRenderingContext2D(
                    this._canvas.getContextWithTypeContextAttributes(type, canvasOpts)
                );
                this._2dContext._canvas = this;
            } else {
                this._canvas.getContextWithTypeContextAttributes(type, canvasOpts);
            }
            this._2dContext._type = '2d';
            return this._2dContext;
        } else if (type && (type === 'webgl' || type === 'experimental-webgl')) {
            if (this._2dContext || this._webgl2Context) {
                return null;
            }
            if (!this._webglContext) {
                this._webglContext = new TNSWebGLRenderingContext(
                    this._canvas.getContextWithTypeContextAttributes('webgl', glOpts)
                );
                this._webglContext._canvas = this;
            } else {
                this._canvas.getContextWithTypeContextAttributes('webgl', glOpts);
            }
            this._webglContext._type = 'webgl';
            return this._webglContext;
        } else if (type && (type === 'webgl2' || type === 'experimental-webgl2')) {
            if (this._2dContext || this._webglContext) {
                return null;
            }
            if (!this._webgl2Context) {
                this._webgl2Context = new TNSWebGL2RenderingContext(
                    this._canvas.getContextWithTypeContextAttributes('webgl2', glOpts)
                );
                this._webgl2Context._canvas = this;
            } else {
                this._canvas.getContextWithTypeContextAttributes('webgl2', glOpts);
            }
            this._webgl2Context._type = 'webgl';
            return this._webgl2Context;
        }
        return null;
    }

    toDataURL(type = 'image/png', encoderOptions = 0.92) {
        return this._canvas.toDataURLWithTypeFormat(type, encoderOptions);
    }

    getBoundingClientRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    } {
        const view = this;
        const frame = view.ios.frame as CGRect;
        const width = view.width;
        const height = view.height;
        return {
            bottom: height,
            height: height,
            left: frame.origin.x,
            right: width,
            top: frame.origin.y,
            width: width,
            x: frame.origin.x,
            y: frame.origin.y,
        };
    }
}
