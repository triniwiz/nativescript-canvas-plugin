import { TNSDOMMatrix } from './TNSDOMMatrix';
import { TNSCanvasBase } from './canvas-plugin.common';
import { TNSCanvasRenderingContext2D } from './TNSCanvasRenderingContext2D';
import { TNSWebGLRenderingContext } from './TNSWebGLRenderingContext';
import { TNSWebGL2RenderingContext } from './TNSWebGL2RenderingContext';

declare var Canvas;

export function createSVGMatrix(): TNSDOMMatrix {
    return new TNSDOMMatrix(Canvas.createSVGMatrix());
}

export * from './canvas-plugin.common';

export class TNSCanvas extends TNSCanvasBase {
    private _2dContext: TNSCanvasRenderingContext2D;
    private _webglContext: TNSWebGLRenderingContext;
    useMetal: boolean = false;

    constructor() {
        super();
    }

    get clientWidth() {
        return this.getMeasuredWidth();
    }

    get clientHeight() {
        return this.getMeasuredHeight();
    }

    createNativeView() {
        return Canvas.alloc().initWithFrameUseGL(CGRectZero, !this.useMetal);
    }

    private _didPause: boolean = false;

    onUnloaded() {
        this.nativeView.pause();
        this._didPause = true;
        super.onUnloaded();
    }

    onLoaded() {
        super.onLoaded();
        if (this._didPause) {
            this.nativeView.resume();
            this._didPause = false;
        }
    }

    disposeNativeView(): void {
        this.off('touch, pan', this._touchEvents);
        super.disposeNativeView();
    }

    getContext(type: string, options?: any): TNSCanvasRenderingContext2D | TNSWebGLRenderingContext | TNSWebGL2RenderingContext | null {
        if (type && type === '2d') {
            if (!this._2dContext) {
                this._2dContext = new TNSCanvasRenderingContext2D(
                    this.nativeView.getContextWithType(type)
                );
                this._2dContext._canvas = this;
            } else {
                this.nativeView.getContextWithType(type);
            }
            this._2dContext._type = '2d';
            return this._2dContext;
        } else if (type && (type === 'webgl' || type === 'experimental-webgl')) {
            if (!this._webglContext) {
                this._webglContext = new TNSWebGLRenderingContext(
                    this.nativeView.getContextWithType('webgl')
                );
                this._webglContext._canvas = this;
            } else {
                this.nativeView.getContextWithType(type);
            }
            this._webglContext._type = 'webgl';
            return this._webglContext;
        } else if (type && (type === 'webgl2')) {
            if (!this._webglContext) {
                this._webglContext = new TNSWebGL2RenderingContext(
                    this.nativeView.getContextWithType('webgl2')
                );
                this._webglContext._canvas = this;
            } else {
                this.nativeView.getContextWithType(type);
            }
            this._webglContext._type = 'webgl2';
            return this._webglContext;
        }
        return null;
    }

    toDataURL(type = 'image/png', encoderOptions = 0.92) {
        return this.nativeView.toDataURLWithTypeFormat(type, encoderOptions);
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
        const width = view.getMeasuredWidth();
        const height = view.getMeasuredHeight();
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
