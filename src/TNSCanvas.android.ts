import { TNSDOMMatrix } from './TNSDOMMatrix';
import { TNSCanvasBase } from './canvas-plugin.common';
import { TNSCanvasRenderingContext2D } from './TNSCanvasRenderingContext2D';
import { TNSWebGLRenderingContext } from './TNSWebGLRenderingContext';
import { TNSWebGL2RenderingContext } from './TNSWebGL2RenderingContext';

export function createSVGMatrix(): TNSDOMMatrix {
    return new TNSDOMMatrix(com.github.triniwiz.canvas.CanvasView.createSVGMatrix());
}

export * from './canvas-plugin.common';

export class TNSCanvas extends TNSCanvasBase {
    private _2dContext: TNSCanvasRenderingContext2D;
    private _webglContext: TNSWebGLRenderingContext;
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

    get clientWidth() {
        return this.getMeasuredWidth();
    }

    get clientHeight() {
        return this.getMeasuredHeight();
    }

    initNativeView(): void {
        super.initNativeView();
    }

    private _didPause: boolean = false;

    onUnloaded() {
        this.canvas.onPause();
        this._didPause = true;
        super.onUnloaded();
    }

    onLoaded() {
        super.onLoaded();
        if (this._didPause) {
            this.canvas.onResume();
            this.nativeView.resume();
            this._didPause = false;
        }
    }


    disposeNativeView(): void {
        this.off('touch, pan', this._touchEvents);
        super.disposeNativeView();
    }

    toDataURL(type = 'png', encoderOptions = 0.92) {
        return this.nativeView.toDataURL(type, encoderOptions);
    }

    getContext(type: string, options?: any): TNSCanvasRenderingContext2D | TNSWebGLRenderingContext | TNSWebGL2RenderingContext | null {
        if (typeof type === 'string') {
            if (type === '2d') {
                if (!this._2dContext) {
                    this._2dContext = new TNSCanvasRenderingContext2D(
                        this.canvas.getContext(type)
                    );
                    this._2dContext._canvas = this;
                }
                this._2dContext._type = '2d';
                return this._2dContext;
            } else if (type === 'webgl' || type === 'experimental-webgl') {
                if (!this._webglContext) {
                    this._webglContext = new TNSWebGLRenderingContext(this.canvas.getContext('webgl'));
                    this._webglContext._canvas = this;
                }
                this._webglContext._type = 'webgl';
                return this._webglContext;
            } else if (type && (type === 'webgl2')) {
                if (!this._webglContext) {
                    this._webglContext = new TNSWebGL2RenderingContext(
                        this.nativeView.getContext('webgl2')
                    );
                    this._webglContext._canvas = this;
                }
                this._webglContext._type = 'webgl2';
                return this._webglContext;
            }

        }
        return null;
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
