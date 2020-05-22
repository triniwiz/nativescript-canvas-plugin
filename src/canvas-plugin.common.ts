import { ContainerView, CSSType } from '@nativescript/core/ui/core/view';
import { GestureStateTypes } from '@nativescript/core/ui/gestures/gestures';
import { screen } from '@nativescript/core/platform';

export * from '@nativescript/core/ui/core/view';


export interface ITNSCanvasBase {
    on(eventName: 'ready', callback: (data: any) => void, thisArg?: any): void;
}

@CSSType('TNSCanvas')
export abstract class TNSCanvasBase extends ContainerView implements ITNSCanvasBase {
    _touchEvents: any;
    public static readyEvent = 'ready';

    constructor() {
        super();
        this._touchEvents = this._touchEventsFN.bind(this);
        this.on('touch, pan', this._touchEvents);
    }

    _touchEventsFN(event: any) {
        if (event.eventName === 'touch') {
            switch (event.action) {
                case 'down':
                    this._emitEvent('touchstart', event);
                    break;
                case 'up':
                    this._emitEvent('touchend', event);
                    break;
                case 'cancel':
                    this._emitEvent('touchcancel', event);
                    break;
                case 'move':
                    // NOOP
                    break;
                default:
                    break;
            }
        } else if (event.eventName === 'pan') {
            if (event.state === GestureStateTypes.began || event.state === GestureStateTypes.changed) {
                this._emitEvent('touchmove', event);
            }
        }
    }

    _getTouchEvent(name, event, target) {
        const pointers = new TouchList();
        const scale = screen.mainScreen.scale;
        let activePointer = {};
        if (name === 'touchmove') {

            /* mouse */
            activePointer = {
                clientX: event.deltaX * scale,
                clientY: event.deltaY * scale,
                force: 0.0,
                identifier: 0,
                pageX: event.deltaX * scale,
                pageY: event.deltaY * scale,
                radiusX: 0,
                radiusY: 0,
                rotationAngle: 0,
                screenX: event.deltaX * scale,
                screenY: event.deltaY * scale,
                target,
            };

            /* mouse */
            pointers.push({
                // * SCALE ??
                clientX: event.deltaX * scale,
                clientY: event.deltaY * scale,
                force: 0.0,
                identifier: 0,
                pageX: event.deltaX * scale,
                pageY: event.deltaY * scale,
                radiusX: 0,
                radiusY: 0,
                rotationAngle: 0,
                screenX: event.deltaX * scale,
                screenY: event.deltaY * scale,
                target,
            });
        } else {
            const count = event.getAllPointers().length;
            const point = event.getActivePointers()[0];

            // mouse event
            activePointer = {
                clientX: point.getX() * scale,
                clientY: point.getY() * scale,
                force: 0.0,
                identifier: 0,
                pageX: point.getX() * scale,
                pageY: point.getY() * scale,
                radiusX: 0,
                radiusY: 0,
                rotationAngle: 0,
                screenX: point.getX() * scale,
                screenY: point.getY() * scale,
            };

            for (let i = 0; i < count; i++) {
                const point = event.getAllPointers()[i];
                pointers.push({
                    clientX: point.getX(),
                    clientY: point.getY(),
                    force: 0.0,
                    identifier: i,
                    pageX: point.getX(),
                    pageY: point.getY(),
                    radiusX: 0,
                    radiusY: 0,
                    rotationAngle: 0,
                    screenX: point.getX(),
                    screenY: point.getY(),
                    target,
                });
            }
        }

        return {
            eventName: name,
            object: null,
            defaultPrevented: false,
            cancelable: false,
            altKey: false,
            changedTouches: pointers,
            ctrlKey: false,
            metaKey: false,
            shiftKey: false,
            targetTouches: pointers,
            touches: pointers,
            preventDefault: () => {
            },
            target,
            ...activePointer
        };
    }

    _emitEvent(name, event) {
        this.notify(this._getTouchEvent(name, event, this));
    }

    _readyEvent() {
        this.notify({
            eventName: 'ready',
            object: this
        });
    }


    public abstract getContext(type: string): TNSCanvasRenderingContext | null;

    public abstract getContext(type: string, options: any): TNSCanvasRenderingContext | null;

    public abstract getBoundingClientRect(): { x: number, y: number, width: number, height: number, top: number, right: number, bottom: number, left: number };
}

class TouchList extends Array {
    item(index: number) {
        return this[index];
    }
}


export class TNSTextEncoderBase {
    private nativeInstance: any;
    public readonly encoding: string;

    constructor(nativeInstance) {
        this.nativeInstance = nativeInstance;
    }

    get native(): any {
        return this.nativeInstance;
    }

    encode(text: string): Uint8Array {
        return null;
    }
}

export class TNSTextDecoderBase {
    private nativeInstance: any;
    public readonly encoding: string;

    constructor(nativeInstance) {
        this.nativeInstance = nativeInstance;
    }

    get native(): any {
        return this.nativeInstance;
    }

    decode(buffer: ArrayBuffer | ArrayBufferView, options?: any): string {
        return null;
    }
}


export class TNSImageAssetBase {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    get native() {
        return this.nativeInstance;
    }
}


export enum TNSImageAssetSaveFormat {
    JPG,
    PNG,
    ICO,
    BMP,
    TIFF,
}

export interface TNSCanvasRenderingContext {
}

export abstract class TNSCanvasRenderingContext2DBase implements TNSCanvasRenderingContext {
    lineWidth: number;
    fillStyle: string | CanvasGradientBase;
    strokeStyle: string | CanvasGradientBase;
    lineCap: string;
    globalCompositeOperation: string;
    font: string;
    globalAlpha: number;

    imageSmoothingEnabled: boolean;

    imageSmoothingQuality: string;

    lineDashOffset: number;

    lineJoin: string;

    miterLimit: number;

    shadowBlur: number;

    shadowColor: string;

    shadowOffsetX: number;

    shadowOffsetY: number;

    textAlign: string;

    _canvas: any;
    get canvas(): any {
        return this._canvas;
    }

    _type: string = 'none';
    get type() {
        return this._type;
    }


    public abstract addHitRegion(region: any): void;

    public abstract arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

    public abstract arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

    public abstract beginPath(): void;

    public abstract bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    public abstract clearHitRegions(): void;

    public abstract clearRect(x: number, y: number, width: number, height: number): void;

    public abstract clip(): void;

    public abstract clip(fillRule: string): void;

    public abstract clip(path: TNSPath2DBase, fillRule: string): void;

    public abstract closePath(): void;

    public abstract createImageData(width: number, height: number): ImageDataBase;

    public abstract createImageData(data: ImageDataBase): ImageDataBase;

    public abstract createLinearGradient(x0: number, y0: number, x1: number, y1: number);

    public abstract createPattern(image: any, repetition: string);

    public abstract createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number);

    public abstract drawFocusIfNeeded(element): void;
    public abstract drawFocusIfNeeded(path, element): void;

    public abstract drawImage(image: any, dx: number, dy: number): void;
    public abstract drawImage(image: any, dx: number, dy: number, dWidth: number, dHeight: number): void;
    public abstract drawImage(image: any, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;


    public abstract ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

    public abstract fill(): void;
    public abstract fill(fillRule?: string): void;
    public abstract fill(path: TNSPath2DBase, fillRule: string): void;

    public abstract fillRect(x: number, y: number, width: number, height: number): void;

    public abstract fillText(text: string, x: number, y: number, maxWidth?: number): void;

    public abstract getImageData(sx: number, sy: number, sw: number, sh: number): ImageDataBase;

    public abstract getLineDash(): number[];

    public abstract isPointInPath(x: number, y: number, fillRule: string): boolean;
    public abstract isPointInPath(path: TNSPath2DBase, x: number, y: number, fillRule: string): boolean;

    public abstract isPointInStroke(x: number, y: number): boolean;

    public abstract isPointInStroke(path: TNSPath2DBase, x: number, y: number): boolean;

    public abstract lineTo(x: number, y: number): void;

    public abstract measureText(text: string): TextMetricsBase;

    public abstract moveTo(x: number, y: number): void;

    public abstract putImageData(imageData: ImageDataBase, dx: number, dy: number): void;

    public abstract putImageData(imageData: ImageDataBase, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;

    public abstract quadraticCurveTo(cpx: number, cpy: number, x: number, y: number);

    public abstract rect(x: number, y: number, width: number, height: number): void;

    public abstract removeHitRegion(id: string): void;

    public abstract resetTransform(): void;

    public abstract restore(): void;

    public abstract rotate(angle: number): void;

    public abstract save(): void;

    public abstract scale(x: number, y: number): void;

    public abstract scrollPathIntoView(): void;

    public abstract scrollPathIntoView(path: TNSPath2DBase): void;

    public abstract setLineDash(segments: number[]): void;

    public abstract setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    public abstract stroke(): void;

    public abstract stroke(path: TNSPath2DBase): void;

    public abstract strokeRect(x: number, y: number, width: number, height: number): void;

    public abstract strokeText(text: string, x: number, y: number, maxWidth?: number): void;

    public abstract transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    public abstract translate(x: number, y: number): void;
}

export class WebGLProgram {

    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLProgram]';
    }

    [Symbol.toStringTag] = 'WebGLProgram';
}

export class WebGLShader {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLShader]';
    }

    [Symbol.toStringTag] = 'WebGLShader';
}

export class WebGLBuffer {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLBuffer]';
    }

    [Symbol.toStringTag] = 'WebGLBuffer';
}

export class WebGLFramebuffer {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLFramebuffer]';
    }

    [Symbol.toStringTag] = 'WebGLFramebuffer';
}

export class WebGLRenderbuffer {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLRenderbuffer]';
    }

    [Symbol.toStringTag] = 'WebGLRenderbuffer';
}

export class WebGLTexture {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLTexture]';
    }

    [Symbol.toStringTag] = 'WebGLTexture';
}

export class WebGLActiveInfo {
    readonly name: string;
    readonly size: number;
    readonly type: number;

    constructor(name: string, size: number, type: number) {
        this.name = name;
        this.size = size;
        this.type = type;
    }

    public toString() {
        return '[object WebGLActiveInfo]';
    }

    [Symbol.toStringTag] = 'WebGLActiveInfo';
}

export class WebGLShaderPrecisionFormat {
    readonly rangeMin: number;
    readonly rangeMax: number;
    readonly precision: number;


    constructor(rangeMin: number, rangeMax: number, precision: number) {
        this.rangeMin = rangeMin;
        this.rangeMax = rangeMax;
        this.precision = precision;
    }

    public toString() {
        return '[object WebGLShaderPrecisionFormat]';
    }

    [Symbol.toStringTag] = 'WebGLShaderPrecisionFormat';
}

export class WebGLUniformLocation {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLUniformLocation]';
    }

    [Symbol.toStringTag] = 'WebGLUniformLocation';
}

export abstract class TNSWebGLRenderingContextBase implements TNSCanvasRenderingContext {

    _native: any;

    constructor(context) {
        this._native = context;
    }

    get native() {
        return this._native;
    }

    toNativeArray(value: any[], type: string): any {
        return [];
    }

    readonly drawingBufferHeight: number;

    readonly drawingBufferWidth: number;

    _canvas: any;
    get canvas(): any {
        return this._canvas;
    }

    _type: string = 'none';
    get type() {
        return this._type;
    }

    abstract activeTexture(texture: number): void;

    abstract attachShader(program: WebGLProgram, shader: WebGLShader): void;

    abstract bindAttribLocation(program: WebGLProgram, index: number, name: string): void;

    abstract bindBuffer(target: number, buffer: WebGLBuffer): void;

    abstract bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;

    abstract bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;

    abstract bindTexture(target: number, texture: WebGLTexture): void;

    abstract blendColor(red: number, green: number, blue: number, alpha: number): void;

    abstract blendEquationSeparate(modeRGB: number, modeAlpha: number): void;

    abstract blendEquation(mode: number): void;

    abstract blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;

    abstract blendFunc(sfactor: number, dfactor: number): void;

    abstract bufferData(target: number, size: number, usage: number): void;

    abstract bufferData(target: number, srcData: ArrayBuffer | ArrayBufferView, usage: number): void;

    abstract bufferSubData(target: number, offset: number, srcData: ArrayBuffer | ArrayBufferView): void;

    abstract checkFramebufferStatus(target: number): number;

    abstract clearColor(red: number, green: number, blue: number, alpha: number): void;

    abstract clearDepth(depth: number): void;

    abstract clearStencil(stencil: number): void;

    abstract clear(mask: number): void;

    abstract colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;

    abstract commit(): void;

    abstract compileShader(shader: WebGLShader): void;

    abstract compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: ArrayBufferView): void;

    abstract compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: ArrayBufferView): void;

    abstract copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;

    abstract copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;

    abstract createBuffer(): WebGLBuffer;

    abstract createFramebuffer(): WebGLFramebuffer;

    abstract createProgram(): WebGLProgram;

    abstract createRenderbuffer(): WebGLRenderbuffer;

    abstract createShader(type: number): WebGLShader;

    abstract createTexture(): WebGLTexture;

    abstract cullFace(mode: number): void;

    abstract deleteBuffer(buffer: WebGLBuffer): void;

    abstract deleteFramebuffer(frameBuffer: WebGLFramebuffer): void;

    abstract deleteProgram(program: WebGLProgram): void;

    abstract deleteRenderbuffer(renderBuffer: WebGLRenderbuffer): void;

    abstract deleteShader(shader: WebGLRenderbuffer): void;

    abstract deleteTexture(texture: WebGLTexture): void;

    abstract depthFunc(func: number): void;

    abstract depthMask(flag: boolean): void;

    abstract depthRange(zNear: number, zFar: number): void;

    abstract detachShader(program: WebGLProgram, shader: WebGLShader): void;

    abstract disableVertexAttribArray(index: number): void;

    abstract disable(cap: number): void;

    abstract drawArrays(mode: number, first: number, count: number): void;

    abstract drawElements(mode: number, count: number, type: number, offset: number): void;

    abstract enableVertexAttribArray(index: number): void;

    abstract enable(cap: number): void;

    abstract finish(): void;

    abstract flush(): void;

    abstract framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void;

    abstract framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void;

    abstract frontFace(mode: number): void;

    abstract generateMipmap(target: number): void;

    abstract getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;

    abstract getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;

    abstract getAttachedShaders(program: WebGLProgram): WebGLShader[];

    abstract getAttribLocation(program: WebGLProgram, name: string): number;

    abstract getBufferParameter(target: number, pname: number): number;

    // getCanvas(): Canvas;

    abstract getContextAttributes(): any;

    abstract getError(): number;

    abstract getExtension(name: string): any;

    abstract getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): WebGLRenderbuffer | WebGLTexture | number;

    abstract getParameter(pname: number): any;

    abstract getProgramInfoLog(program: WebGLProgram): string;

    abstract getProgramParameter(program: WebGLProgram, pname: number): any;

    abstract getRenderbufferParameter(target: number, pname: number): number;

    abstract getShaderInfoLog(shader: WebGLShader): string;

    abstract getShaderParameter(shader: WebGLShader, pname: number): any;

    abstract getShaderPrecisionFormat(shaderType: number, precisionType: number): WebGLShaderPrecisionFormat | null;

    abstract getShaderSource(shader: WebGLShader): string;

    abstract getSupportedExtensions(): string[];

    abstract getTexParameter(target: number, pname: number): number;

    abstract getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;

    abstract getUniform(program: WebGLProgram, location: WebGLUniformLocation): number;

    abstract getVertexAttribOffset(index: number, pname: number): void;

    abstract getVertexAttrib(index: number, pname: number): any;

    abstract hint(target: number, mode: number): void;

    abstract isBuffer(buffer: WebGLBuffer): boolean;

    abstract isContextLost(): boolean;

    abstract isEnabled(cap: number): boolean;

    abstract isFramebuffer(framebuffer: WebGLFramebuffer): boolean;

    abstract isProgram(program: WebGLProgram): boolean;

    abstract isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean;

    abstract isShader(shader: WebGLShader): boolean;

    abstract isTexture(texture: WebGLTexture): boolean;

    abstract lineWidth(width: number): void;

    abstract linkProgram(program: WebGLProgram): void;

    abstract pixelStorei(pname: number, param: any): void;

    abstract polygonOffset(factor: number, units: number): void;

    abstract readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;

    abstract renderbufferStorage(target: number, internalFormat: number, width: number, height: number): void;

    abstract sampleCoverage(value: number, invert: boolean): void;

    abstract scissor(x: number, y: number, width: number, height: number): void;

    abstract shaderSource(shader: WebGLShader, source: string): void;

    abstract stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;

    abstract stencilFunc(func: number, ref: number, mask: number): void;

    abstract stencilMaskSeparate(face: number, mask: number): void;

    abstract stencilMask(mask: number): void;

    abstract stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;

    abstract stencilOp(fail: number, zfail: number, zpass: number): void;

    abstract texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: any): void;

    abstract texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView): void;

    abstract texParameterf(target: number, pname: number, param: number): void;

    abstract texParameteri(target: number, pname: number, param: number): void;

    abstract texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;

    abstract texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: any): void;

    abstract uniform1f(location: WebGLUniformLocation, v0: number): void;

    abstract uniform1iv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform1fv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform1i(location: WebGLUniformLocation, v0: number): void;

    abstract uniform2f(location: WebGLUniformLocation, v0: number, v1: number): void;

    abstract uniform2iv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform2fv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform2i(location: WebGLUniformLocation, v0: number, v1: number): void;

    abstract uniform3f(location: WebGLUniformLocation, v0: number, v1: number, v2: number): void;

    abstract uniform3iv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform3fv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform3i(location: WebGLUniformLocation, v0: number, v1: number, v2: number): void;

    abstract uniform4f(location: WebGLUniformLocation, v0: number, v1: number, v2: number, v3: number): void;

    abstract uniform4iv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform4fv(location: WebGLUniformLocation, value: number[]): void;

    abstract uniform4i(location: WebGLUniformLocation, v0: number, v1: number, v2: number, v3: number): void;

    abstract uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;

    abstract uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;

    abstract uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;

    abstract useProgram(program: WebGLProgram): void;

    abstract validateProgram(program: WebGLProgram): void;

    abstract vertexAttrib1f(index: number, v0: number): void;

    abstract vertexAttrib1fv(index: number, value: number[]): void;

    abstract vertexAttrib2f(index: number, v0: number, v1: number): void;

    abstract vertexAttrib2fv(index: number, value: number[]): void;

    abstract vertexAttrib3f(index: number, v0: number, v1: number, v2: number): void;

    abstract vertexAttrib3fv(index: number, value: number[]): void;

    abstract vertexAttrib4f(index: number, v0: number, v1: number, v2: number, v3: number): void;

    abstract vertexAttrib4fv(index: number, value: number[]): void;

    abstract vertexAttribPointer(index: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;

    abstract viewport(x: number, y: number, width: number, height: number): void;


    /* Clearing buffers */

    public get DEPTH_BUFFER_BIT(): number {
        return this.native.DEPTH_BUFFER_BIT;
    }

    public get COLOR_BUFFER_BIT(): number {
        return this.native.COLOR_BUFFER_BIT;
    }

    public get STENCIL_BUFFER_BIT(): number {
        return this.native.STENCIL_BUFFER_BIT;
    }

    /* Clearing buffers */

    /* Rendering primitives */

    public get POINTS(): number {
        return this.native.POINTS;
    }

    public get LINES(): number {
        return this.native.LINES;
    }

    public get LINE_LOOP(): number {
        return this.native.LINE_LOOP;
    }

    public get LINE_STRIP(): number {
        return this.native.LINE_STRIP;
    }

    public get TRIANGLES(): number {
        return this.native.TRIANGLES;
    }

    public get TRIANGLE_STRIP(): number {
        return this.native.TRIANGLE_STRIP;
    }

    public get TRIANGLE_FAN(): number {
        return this.native.TRIANGLE_FAN;
    }

    /* Rendering primitives */

    /* Blending modes */


    public get ONE(): number {
        return this.native.ONE;
    }

    public get ZERO(): number {
        return this.native.ZERO;
    }

    public get SRC_COLOR(): number {
        return this.native.SRC_COLOR;
    }

    public get ONE_MINUS_SRC_COLOR(): number {
        return this.native.ONE_MINUS_SRC_COLOR;
    }

    public get SRC_ALPHA(): number {
        return this.native.SRC_ALPHA;
    }

    public get ONE_MINUS_SRC_ALPHA(): number {
        return this.native.ONE_MINUS_SRC_ALPHA;
    }

    public get DST_ALPHA(): number {
        return this.native.DST_ALPHA;
    }

    public get ONE_MINUS_DST_ALPHA(): number {
        return this.native.ONE_MINUS_DST_ALPHA;
    }

    public get DST_COLOR(): number {
        return this.native.DST_COLOR;
    }

    public get ONE_MINUS_DST_COLOR(): number {
        return this.native.ONE_MINUS_DST_COLOR;
    }

    public get SRC_ALPHA_SATURATE(): number {
        return this.native.SRC_ALPHA_SATURATE;
    }

    public get CONSTANT_COLOR(): number {
        return this.native.CONSTANT_COLOR;
    }

    public get ONE_MINUS_CONSTANT_COLOR(): number {
        return this.native.ONE_MINUS_CONSTANT_COLOR;
    }

    public get CONSTANT_ALPHA(): number {
        return this.native.CONSTANT_ALPHA;
    }

    public get ONE_MINUS_CONSTANT_ALPHA(): number {
        return this.native.ONE_MINUS_CONSTANT_ALPHA;
    }

    /* Blending modes */

    /* Blending equations */
    public get FUNC_ADD(): number {
        return this.native.FUNC_ADD;
    }

    public get FUNC_SUBTRACT(): number {
        return this.native.FUNC_SUBTRACT;
    }

    public get FUNC_REVERSE_SUBTRACT(): number {
        return this.native.FUNC_REVERSE_SUBTRACT;
    }

    /* Blending equations */


    /* Getting GL parameter information */

    public get BLEND_EQUATION(): number {
        return this.native.BLEND_EQUATION;
    }

    public get BLEND_EQUATION_RGB(): number {
        return this.native.BLEND_EQUATION_RGB;
    }

    public get BLEND_EQUATION_ALPHA(): number {
        return this.native.BLEND_EQUATION_ALPHA;
    }

    public get BLEND_DST_RGB(): number {
        return this.native.BLEND_DST_RGB;
    }

    public get BLEND_SRC_RGB(): number {
        return this.native.BLEND_SRC_RGB;
    }

    public get BLEND_DST_ALPHA(): number {
        return this.native.BLEND_DST_ALPHA;
    }

    public get BLEND_SRC_ALPHA(): number {
        return this.native.BLEND_SRC_ALPHA;
    }

    public get BLEND_COLOR(): number {
        return this.native.BLEND_COLOR;
    }

    public get ARRAY_BUFFER_BINDING(): number {
        return this.native.ARRAY_BUFFER_BINDING;
    }

    public get ELEMENT_ARRAY_BUFFER_BINDING(): number {
        return this.native.ELEMENT_ARRAY_BUFFER_BINDING;
    }

    public get LINE_WIDTH(): number {
        return this.native.LINE_WIDTH;
    }

    public get ALIASED_POINT_SIZE_RANGE(): number {
        return this.native.ALIASED_POINT_SIZE_RANGE;
    }

    public get ALIASED_LINE_WIDTH_RANGE(): number {
        return this.native.ALIASED_LINE_WIDTH_RANGE;
    }

    public get CULL_FACE_MODE(): number {
        return this.native.CULL_FACE_MODE;
    }

    public get FRONT_FACE(): number {
        return this.native.FRONT_FACE;
    }

    public get DEPTH_RANGE(): number {
        return this.native.DEPTH_RANGE;
    }

    public get DEPTH_WRITEMASK(): number {
        return this.native.DEPTH_WRITEMASK;
    }

    public get DEPTH_CLEAR_VALUE(): number {
        return this.native.DEPTH_CLEAR_VALUE;
    }

    public get DEPTH_FUNC(): number {
        return this.native.DEPTH_FUNC;
    }

    public get STENCIL_CLEAR_VALUE(): number {
        return this.native.STENCIL_CLEAR_VALUE;
    }

    public get STENCIL_FUNC(): number {
        return this.native.STENCIL_FUNC;
    }

    public get STENCIL_FAIL(): number {
        return this.native.STENCIL_FAIL;
    }

    public get STENCIL_PASS_DEPTH_FAIL(): number {
        return this.native.STENCIL_PASS_DEPTH_FAIL;
    }

    public get STENCIL_PASS_DEPTH_PASS(): number {
        return this.native.STENCIL_PASS_DEPTH_PASS;
    }

    public get STENCIL_REF(): number {
        return this.native.STENCIL_REF;
    }

    public get STENCIL_VALUE_MASK(): number {
        return this.native.STENCIL_VALUE_MASK;
    }

    public get STENCIL_WRITEMASK(): number {
        return this.native.STENCIL_WRITEMASK;
    }

    public get STENCIL_BACK_FUNC(): number {
        return this.native.STENCIL_BACK_FUNC;
    }

    public get STENCIL_BACK_FAIL(): number {
        return this.native.STENCIL_BACK_FAIL;
    }

    public get STENCIL_BACK_PASS_DEPTH_FAIL(): number {
        return this.native.STENCIL_BACK_PASS_DEPTH_FAIL;
    }

    public get STENCIL_BACK_PASS_DEPTH_PASS(): number {
        return this.native.STENCIL_BACK_PASS_DEPTH_PASS;
    }

    public get STENCIL_BACK_REF(): number {
        return this.native.STENCIL_BACK_REF;
    }

    public get STENCIL_BACK_VALUE_MASK(): number {
        return this.native.STENCIL_BACK_VALUE_MASK;
    }

    public get STENCIL_BACK_WRITEMASK(): number {
        return this.native.STENCIL_BACK_WRITEMASK;
    }

    public get VIEWPORT(): number {
        return this.native.VIEWPORT;
    }

    public get SCISSOR_BOX(): number {
        return this.native.SCISSOR_BOX;
    }

    public get COLOR_CLEAR_VALUE(): number {
        return this.native.COLOR_CLEAR_VALUE;
    }

    public get COLOR_WRITEMASK(): number {
        return this.native.COLOR_WRITEMASK;
    }

    public get UNPACK_ALIGNMENT(): number {
        return this.native.UNPACK_ALIGNMENT;
    }

    public get PACK_ALIGNMENT(): number {
        return this.native.PACK_ALIGNMENT;
    }

    public get MAX_TEXTURE_SIZE(): number {
        return this.native.MAX_TEXTURE_SIZE;
    }

    public get MAX_VIEWPORT_DIMS(): number {
        return this.native.MAX_VIEWPORT_DIMS;
    }

    public get SUBPIXEL_BITS(): number {
        return this.native.SUBPIXEL_BITS;
    }

    public get RED_BITS(): number {
        return this.native.RED_BITS;
    }

    public get GREEN_BITS(): number {
        return this.native.GREEN_BITS;
    }

    public get BLUE_BITS(): number {
        return this.native.BLUE_BITS;
    }

    public get ALPHA_BITS(): number {
        return this.native.ALPHA_BITS;
    }

    public get DEPTH_BITS(): number {
        return this.native.DEPTH_BITS;
    }

    public get STENCIL_BITS(): number {
        return this.native.STENCIL_BITS;
    }

    public get POLYGON_OFFSET_UNITS(): number {
        return this.native.POLYGON_OFFSET_UNITS;
    }

    public get POLYGON_OFFSET_FACTOR(): number {
        return this.native.POLYGON_OFFSET_FACTOR;
    }

    public get TEXTURE_BINDING_2D(): number {
        return this.native.TEXTURE_BINDING_2D;
    }

    public get SAMPLE_BUFFERS(): number {
        return this.native.SAMPLE_BUFFERS;
    }

    public get SAMPLES(): number {
        return this.native.SAMPLES;
    }

    public get SAMPLE_COVERAGE_VALUE(): number {
        return this.native.SAMPLE_COVERAGE_VALUE;
    }

    public get SAMPLE_COVERAGE_INVERT(): number {
        return this.native.SAMPLE_COVERAGE_INVERT;
    }

    public get COMPRESSED_TEXTURE_FORMATS(): number {
        return this.native.COMPRESSED_TEXTURE_FORMATS;
    }

    public get VENDOR(): number {
        return this.native.VENDOR;
    }

    public get RENDERER(): number {
        return this.native.RENDERER;
    }

    public get VERSION(): number {
        return this.native.VERSION;
    }

    public get IMPLEMENTATION_COLOR_READ_TYPE(): number {
        return this.native.IMPLEMENTATION_COLOR_READ_TYPE;
    }

    public get IMPLEMENTATION_COLOR_READ_FORMAT(): number {
        return this.native.IMPLEMENTATION_COLOR_READ_FORMAT;
    }

    public get BROWSER_DEFAULT_WEBGL(): number {
        return this.native.BROWSER_DEFAULT_WEBGL;
    }

    /* Getting GL parameter information */

    /* Buffers */

    public get STATIC_DRAW(): number {
        return this.native.STATIC_DRAW;
    }

    public get STREAM_DRAW(): number {
        return this.native.STREAM_DRAW;
    }

    public get DYNAMIC_DRAW(): number {
        return this.native.DYNAMIC_DRAW;
    }

    public get ARRAY_BUFFER(): number {
        return this.native.ARRAY_BUFFER;
    }

    public get ELEMENT_ARRAY_BUFFER(): number {
        return this.native.ELEMENT_ARRAY_BUFFER;
    }

    public get BUFFER_SIZE(): number {
        return this.native.BUFFER_SIZE;
    }

    public get BUFFER_USAGE(): number {
        return this.native.BUFFER_USAGE;
    }

    /* Buffers */

    /* Vertex attributes */

    public get CURRENT_VERTEX_ATTRIB(): number {
        return this.native.CURRENT_VERTEX_ATTRIB;
    }

    public get VERTEX_ATTRIB_ARRAY_ENABLED(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_ENABLED;
    }

    public get VERTEX_ATTRIB_ARRAY_SIZE(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_SIZE;
    }

    public get VERTEX_ATTRIB_ARRAY_STRIDE(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_STRIDE;
    }

    public get VERTEX_ATTRIB_ARRAY_TYPE(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_TYPE;
    }

    public get VERTEX_ATTRIB_ARRAY_NORMALIZED(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_NORMALIZED;
    }

    public get VERTEX_ATTRIB_ARRAY_POINTER(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_POINTER;
    }

    public get VERTEX_ATTRIB_ARRAY_BUFFER_BINDING(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
    }

    /* Vertex attributes */

    /* Culling */

    public get CULL_FACE(): number {
        return this.native.CULL_FACE;
    }

    public get FRONT(): number {
        return this.native.FRONT;
    }

    public get BACK(): number {
        return this.native.BACK;
    }

    public get FRONT_AND_BACK(): number {
        return this.native.FRONT_AND_BACK;
    }

    /* Culling */

    /* Enabling and disabling */

    public get BLEND(): number {
        return this.native.BLEND;
    }

    public get DEPTH_TEST(): number {
        return this.native.DEPTH_TEST;
    }

    public get DITHER(): number {
        return this.native.DITHER;
    }

    public get POLYGON_OFFSET_FILL(): number {
        return this.native.POLYGON_OFFSET_FILL;
    }

    public get SAMPLE_ALPHA_TO_COVERAGE(): number {
        return this.native.SAMPLE_ALPHA_TO_COVERAGE;
    }

    public get SAMPLE_COVERAGE(): number {
        return this.native.SAMPLE_COVERAGE;
    }

    public get SCISSOR_TEST(): number {
        return this.native.SCISSOR_TEST;
    }

    public get STENCIL_TEST(): number {
        return this.native.STENCIL_TEST;
    }

    /* Enabling and disabling */

    /* Errors */
    public get NO_ERROR(): number {
        return this.native.NO_ERROR;
    }

    public get INVALID_ENUM(): number {
        return this.native.INVALID_ENUM;
    }

    public get INVALID_VALUE(): number {
        return this.native.INVALID_VALUE;
    }

    public get INVALID_OPERATION(): number {
        return this.native.INVALID_OPERATION;
    }

    public get INVALID_FRAMEBUFFER_OPERATION(): number {
        return this.native.INVALID_FRAMEBUFFER_OPERATION;
    }

    public get OUT_OF_MEMORY(): number {
        return this.native.OUT_OF_MEMORY;
    }

    public get CONTEXT_LOST_WEBGL(): number {
        return this.native.CONTEXT_LOST_WEBGL;
    }

    /* Errors */

    /* Front face directions */

    public get CW(): number {
        return this.native.CW;
    }

    public get CCW(): number {
        return this.native.CCW;
    }

    /* Front face directions */


    /* Hints */

    public get DONT_CARE(): number {
        return this.native.DONT_CARE;
    }

    public get FASTEST(): number {
        return this.native.FASTEST;
    }

    public get NICEST(): number {
        return this.native.NICEST;
    }

    public get GENERATE_MIPMAP_HINT(): number {
        return this.native.GENERATE_MIPMAP_HINT;
    }

    /* Hints */


    /* Data types */

    public get BYTE(): number {
        return this.native.BYTE;
    }

    public get UNSIGNED_BYTE(): number {
        return this.native.UNSIGNED_BYTE;
    }

    public get UNSIGNED_SHORT(): number {
        return this.native.UNSIGNED_SHORT;
    }

    public get SHORT(): number {
        return this.native.SHORT;
    }

    public get UNSIGNED_INT(): number {
        return this.native.UNSIGNED_INT;
    }

    public get INT(): number {
        return this.native.INT;
    }

    public get FLOAT(): number {
        return this.native.FLOAT;
    }

    /* Data types */


    /* Pixel formats */

    public get DEPTH_COMPONENT(): number {
        return this.native.DEPTH_COMPONENT;
    }

    public get ALPHA(): number {
        return this.native.ALPHA;
    }

    public get RGB(): number {
        return this.native.RGB;
    }

    public get RGBA(): number {
        return this.native.RGBA;
    }

    public get LUMINANCE(): number {
        return this.native.LUMINANCE;
    }

    public get LUMINANCE_ALPHA(): number {
        return this.native.LUMINANCE_ALPHA;
    }

    /* Pixel formats */

    /* Pixel types */

    // public get UNSIGNED_BYTE(): number { return this.native.UNSIGNED_BYTE }

    public get UNSIGNED_SHORT_4_4_4_4(): number {
        return this.native.UNSIGNED_SHORT_4_4_4_4;
    }

    public get UNSIGNED_SHORT_5_5_5_1(): number {
        return this.native.UNSIGNED_SHORT_5_5_5_1;
    }

    public get UNSIGNED_SHORT_5_6_5(): number {
        return this.native.UNSIGNED_SHORT_5_6_5;
    }

    /* Pixel types */

    /* Shaders */

    public get FRAGMENT_SHADER(): number {
        return this.native.FRAGMENT_SHADER;
    }

    public get VERTEX_SHADER(): number {
        return this.native.VERTEX_SHADER;
    }

    public get COMPILE_STATUS(): number {
        return this.native.COMPILE_STATUS;
    }

    public get DELETE_STATUS(): number {
        return this.native.DELETE_STATUS;
    }

    public get LINK_STATUS(): number {
        return this.native.LINK_STATUS;
    }

    public get VALIDATE_STATUS(): number {
        return this.native.VALIDATE_STATUS;
    }

    public get ATTACHED_SHADERS(): number {
        return this.native.ATTACHED_SHADERS;
    }

    public get ACTIVE_ATTRIBUTES(): number {
        return this.native.ACTIVE_ATTRIBUTES;
    }

    public get ACTIVE_UNIFORMS(): number {
        return this.native.ACTIVE_UNIFORMS;
    }

    public get MAX_VERTEX_UNIFORM_VECTORS(): number {
        return this.native.MAX_VERTEX_UNIFORM_VECTORS;
    }

    public get MAX_VARYING_VECTORS(): number {
        return this.native.MAX_VARYING_VECTORS;
    }

    public get MAX_COMBINED_TEXTURE_IMAGE_UNITS(): number {
        return this.native.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
    }

    public get MAX_VERTEX_TEXTURE_IMAGE_UNITS(): number {
        return this.native.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    }

    public get MAX_TEXTURE_IMAGE_UNITS(): number {
        return this.native.MAX_TEXTURE_IMAGE_UNITS;
    }

    public get MAX_VERTEX_ATTRIBS(): number {
        return this.native.MAX_VERTEX_ATTRIBS;
    }

    public get MAX_FRAGMENT_UNIFORM_VECTORS(): number {
        return this.native.MAX_FRAGMENT_UNIFORM_VECTORS;
    }

    public get SHADER_TYPE(): number {
        return this.native.SHADER_TYPE;
    }

    public get SHADING_LANGUAGE_VERSION(): number {
        return this.native.SHADING_LANGUAGE_VERSION;
    }

    public get CURRENT_PROGRAM(): number {
        return this.native.CURRENT_PROGRAM;
    }

    /* Shaders */

    /* Depth or stencil tests */

    public get NEVER(): number {
        return this.native.NEVER;
    }

    public get LESS(): number {
        return this.native.LESS;
    }

    public get EQUAL(): number {
        return this.native.EQUAL;
    }

    public get LEQUAL(): number {
        return this.native.LEQUAL;
    }

    public get GREATER(): number {
        return this.native.GREATER;
    }

    public get NOTEQUAL(): number {
        return this.native.NOTEQUAL;
    }

    public get GEQUAL(): number {
        return this.native.GEQUAL;
    }

    public get ALWAYS(): number {
        return this.native.ALWAYS;
    }

    /* Depth or stencil tests */

    /* Stencil actions */

    public get KEEP(): number {
        return this.native.KEEP;
    }

    public get REPLACE(): number {
        return this.native.REPLACE;
    }

    public get INCR(): number {
        return this.native.INCR;
    }

    public get DECR(): number {
        return this.native.DECR;
    }

    public get INVERT(): number {
        return this.native.INVERT;
    }

    public get INCR_WRAP(): number {
        return this.native.INCR_WRAP;
    }

    public get DECR_WRAP(): number {
        return this.native.DECR_WRAP;
    }

    /* Stencil actions */

    /* Textures */

    public get NEAREST(): number {
        return this.native.NEAREST;
    }

    public get LINEAR(): number {
        return this.native.LINEAR;
    }

    public get NEAREST_MIPMAP_NEAREST(): number {
        return this.native.NEAREST_MIPMAP_NEAREST;
    }

    public get LINEAR_MIPMAP_NEAREST(): number {
        return this.native.LINEAR_MIPMAP_NEAREST;
    }

    public get NEAREST_MIPMAP_LINEAR(): number {
        return this.native.NEAREST_MIPMAP_LINEAR;
    }

    public get LINEAR_MIPMAP_LINEAR(): number {
        return this.native.LINEAR_MIPMAP_LINEAR;
    }

    public get TEXTURE_MAG_FILTER(): number {
        return this.native.TEXTURE_MAG_FILTER;
    }

    public get TEXTURE_MIN_FILTER(): number {
        return this.native.TEXTURE_MIN_FILTER;
    }

    public get TEXTURE_WRAP_S(): number {
        return this.native.TEXTURE_WRAP_S;
    }

    public get TEXTURE_WRAP_T(): number {
        return this.native.TEXTURE_WRAP_T;
    }

    public get TEXTURE_2D(): number {
        return this.native.TEXTURE_2D;
    }

    public get TEXTURE(): number {
        return this.native.TEXTURE;
    }

    public get TEXTURE_CUBE_MAP(): number {
        return this.native.TEXTURE_CUBE_MAP;
    }

    public get TEXTURE_BINDING_CUBE_MAP(): number {
        return this.native.TEXTURE_BINDING_CUBE_MAP;
    }

    public get TEXTURE_CUBE_MAP_POSITIVE_X(): number {
        return this.native.TEXTURE_CUBE_MAP_POSITIVE_X;
    }

    public get TEXTURE_CUBE_MAP_NEGATIVE_X(): number {
        return this.native.TEXTURE_CUBE_MAP_NEGATIVE_X;
    }

    public get TEXTURE_CUBE_MAP_POSITIVE_Y(): number {
        return this.native.TEXTURE_CUBE_MAP_POSITIVE_Y;
    }

    public get TEXTURE_CUBE_MAP_NEGATIVE_Y(): number {
        return this.native.TEXTURE_CUBE_MAP_NEGATIVE_Y;
    }

    public get TEXTURE_CUBE_MAP_POSITIVE_Z(): number {
        return this.native.TEXTURE_CUBE_MAP_POSITIVE_Z;
    }

    public get TEXTURE_CUBE_MAP_NEGATIVE_Z(): number {
        return this.native.TEXTURE_CUBE_MAP_NEGATIVE_Z;
    }

    public get MAX_CUBE_MAP_TEXTURE_SIZE(): number {
        return this.native.MAX_CUBE_MAP_TEXTURE_SIZE;
    }

    public get TEXTURE0(): number {
        return this.native.TEXTURE0;
    }

    public get TEXTURE1(): number {
        return this.native.TEXTURE1;
    }

    public get TEXTURE2(): number {
        return this.native.TEXTURE2;
    }

    public get TEXTURE3(): number {
        return this.native.TEXTURE3;
    }

    public get TEXTURE4(): number {
        return this.native.TEXTURE4;
    }

    public get TEXTURE5(): number {
        return this.native.TEXTURE5;
    }

    public get TEXTURE6(): number {
        return this.native.TEXTURE6;
    }

    public get TEXTURE7(): number {
        return this.native.TEXTURE7;
    }

    public get TEXTURE8(): number {
        return this.native.TEXTURE8;
    }

    public get TEXTURE9(): number {
        return this.native.TEXTURE9;
    }

    public get TEXTURE10(): number {
        return this.native.TEXTURE10;
    }

    public get TEXTURE11(): number {
        return this.native.TEXTURE11;
    }

    public get TEXTURE12(): number {
        return this.native.TEXTURE12;
    }

    public get TEXTURE13(): number {
        return this.native.TEXTURE13;
    }

    public get TEXTURE14(): number {
        return this.native.TEXTURE14;
    }

    public get TEXTURE15(): number {
        return this.native.TEXTURE15;
    }

    public get TEXTURE16(): number {
        return this.native.TEXTURE16;
    }

    public get TEXTURE17(): number {
        return this.native.TEXTURE17;
    }

    public get TEXTURE18(): number {
        return this.native.TEXTURE18;
    }

    public get TEXTURE19(): number {
        return this.native.TEXTURE19;
    }

    public get TEXTURE20(): number {
        return this.native.TEXTURE20;
    }

    public get TEXTURE21(): number {
        return this.native.TEXTURE21;
    }

    public get TEXTURE22(): number {
        return this.native.TEXTURE22;
    }

    public get TEXTURE23(): number {
        return this.native.TEXTURE23;
    }

    public get TEXTURE24(): number {
        return this.native.TEXTURE24;
    }

    public get TEXTURE25(): number {
        return this.native.TEXTURE25;
    }

    public get TEXTURE26(): number {
        return this.native.TEXTURE26;
    }

    public get TEXTURE27(): number {
        return this.native.TEXTURE27;
    }

    public get TEXTURE28(): number {
        return this.native.TEXTURE28;
    }

    public get TEXTURE29(): number {
        return this.native.TEXTURE29;
    }

    public get TEXTURE30(): number {
        return this.native.TEXTURE30;
    }

    public get TEXTURE31(): number {
        return this.native.TEXTURE31;
    }

    public get ACTIVE_TEXTURE(): number {
        return this.native.ACTIVE_TEXTURE;
    }

    public get REPEAT(): number {
        return this.native.REPEAT;
    }

    public get CLAMP_TO_EDGE(): number {
        return this.native.CLAMP_TO_EDGE;
    }

    public get MIRRORED_REPEAT(): number {
        return this.native.MIRRORED_REPEAT;
    }

    /* Textures */


    /* Uniform types */

    public get FLOAT_VEC2(): number {
        return this.native.FLOAT_VEC2;
    }

    public get FLOAT_VEC3(): number {
        return this.native.FLOAT_VEC3;
    }

    public get FLOAT_VEC4(): number {
        return this.native.FLOAT_VEC4;
    }

    public get INT_VEC2(): number {
        return this.native.INT_VEC2;
    }

    public get INT_VEC3(): number {
        return this.native.INT_VEC3;
    }

    public get INT_VEC4(): number {
        return this.native.INT_VEC4;
    }


    public get BOOL(): number {
        return this.native.BOOL;
    }


    public get BOOL_VEC2(): number {
        return this.native.BOOL_VEC2;
    }

    public get BOOL_VEC3(): number {
        return this.native.BOOL_VEC3;
    }

    public get BOOL_VEC4(): number {
        return this.native.BOOL_VEC4;
    }


    public get FLOAT_MAT2(): number {
        return this.native.FLOAT_MAT2;
    }


    public get FLOAT_MAT3(): number {
        return this.native.FLOAT_MAT3;
    }


    public get FLOAT_MAT4(): number {
        return this.native.FLOAT_MAT4;
    }

    public get SAMPLER_2D(): number {
        return this.native.SAMPLER_2D;
    }

    public get SAMPLER_CUBE(): number {
        return this.native.SAMPLER_CUBE;
    }

    /* Uniform types */

    /* Shader precision-specified types */

    public get LOW_FLOAT(): number {
        return this.native.LOW_FLOAT;
    }

    public get MEDIUM_FLOAT(): number {
        return this.native.MEDIUM_FLOAT;
    }

    public get HIGH_FLOAT(): number {
        return this.native.HIGH_FLOAT;
    }

    public get LOW_INT(): number {
        return this.native.LOW_INT;
    }

    public get MEDIUM_INT(): number {
        return this.native.MEDIUM_INT;
    }

    public get HIGH_INT(): number {
        return this.native.HIGH_INT;
    }

    /* Shader precision-specified types */


    /* Framebuffers and renderbuffers */

    public get FRAMEBUFFER(): number {
        return this.native.FRAMEBUFFER;
    }

    public get RENDERBUFFER(): number {
        return this.native.RENDERBUFFER;
    }

    public get RGBA4(): number {
        return this.native.RGBA4;
    }

    public get RGB565(): number {
        return this.native.RGB565;
    }

    public get RGB5_A1(): number {
        return this.native.RGB5_A1;
    }

    public get DEPTH_COMPONENT16(): number {
        return this.native.DEPTH_COMPONENT16;
    }

    public get STENCIL_INDEX8(): number {
        return this.native.STENCIL_INDEX8;
    }

    public get DEPTH_STENCIL(): number {
        return this.native.DEPTH_STENCIL;
    }

    public get RENDERBUFFER_WIDTH(): number {
        return this.native.RENDERBUFFER_WIDTH;
    }

    public get RENDERBUFFER_HEIGHT(): number {
        return this.native.RENDERBUFFER_HEIGHT;
    }

    public get RENDERBUFFER_INTERNAL_FORMAT(): number {
        return this.native.RENDERBUFFER_INTERNAL_FORMAT;
    }

    public get RENDERBUFFER_RED_SIZE(): number {
        return this.native.RENDERBUFFER_RED_SIZE;
    }

    public get RENDERBUFFER_GREEN_SIZE(): number {
        return this.native.RENDERBUFFER_GREEN_SIZE;
    }

    public get RENDERBUFFER_BLUE_SIZE(): number {
        return this.native.RENDERBUFFER_BLUE_SIZE;
    }

    public get RENDERBUFFER_ALPHA_SIZE(): number {
        return this.native.RENDERBUFFER_ALPHA_SIZE;
    }

    public get RENDERBUFFER_DEPTH_SIZE(): number {
        return this.native.RENDERBUFFER_DEPTH_SIZE;
    }

    public get RENDERBUFFER_STENCIL_SIZE(): number {
        return this.native.RENDERBUFFER_STENCIL_SIZE;
    }

    public get FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
    }

    public get FRAMEBUFFER_ATTACHMENT_OBJECT_NAME(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
    }

    public get FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
    }

    public get FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
    }

    public get COLOR_ATTACHMENT0(): number {
        return this.native.COLOR_ATTACHMENT0;
    }

    public get DEPTH_ATTACHMENT(): number {
        return this.native.DEPTH_ATTACHMENT;
    }

    public get STENCIL_ATTACHMENT(): number {
        return this.native.STENCIL_ATTACHMENT;
    }

    public get DEPTH_STENCIL_ATTACHMENT(): number {
        return this.native.DEPTH_STENCIL_ATTACHMENT;
    }

    public get NONE(): number {
        return this.native.NONE;
    }

    public get FRAMEBUFFER_COMPLETE(): number {
        return this.native.FRAMEBUFFER_COMPLETE;
    }

    public get FRAMEBUFFER_INCOMPLETE_ATTACHMENT(): number {
        return this.native.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
    }

    public get FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT(): number {
        return this.native.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
    }

    public get FRAMEBUFFER_INCOMPLETE_DIMENSIONS(): number {
        return this.native.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
    }

    public get FRAMEBUFFER_UNSUPPORTED(): number {
        return this.native.FRAMEBUFFER_UNSUPPORTED;
    }

    public get FRAMEBUFFER_BINDING(): number {
        return this.native.FRAMEBUFFER_BINDING;
    }

    public get RENDERBUFFER_BINDING(): number {
        return this.native.RENDERBUFFER_BINDING;
    }

    public get MAX_RENDERBUFFER_SIZE(): number {
        return this.native.MAX_RENDERBUFFER_SIZE;
    }

    // public get INVALID_FRAMEBUFFER_OPERATION(): number { return this.native.INVALID_FRAMEBUFFER_OPERATION }

    /* Framebuffers and renderbuffers */

    /* Pixel storage modes */

    public get UNPACK_COLORSPACE_CONVERSION_WEBGL(): number {
        return this.native.UNPACK_COLORSPACE_CONVERSION_WEBGL;
    }

    public get UNPACK_FLIP_Y_WEBGL(): number {
        return this.native.UNPACK_FLIP_Y_WEBGL;
    }

    public get UNPACK_PREMULTIPLY_ALPHA_WEBGL(): number {
        return this.native.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
    }

    /* Pixel storage modes */
}

export abstract class TNSPath2DBase {

    protected nativeInstance: any;

    constructor(instance: any) {
        this.nativeInstance = instance;
    }

    public abstract addPath(path: TNSPath2DBase, transform?: TNSDOMMatrixBase): void;

    public abstract closePath(): void;

    public abstract moveTo(x: number, y: number): void;

    public abstract lineTo(x: number, y: number): void;

    public abstract bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    public abstract quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    public abstract arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

    public abstract arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

    public abstract ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

    public abstract rect(x: number, y: number, width: number, height: number): void;

    get native() {
        return this.nativeInstance;
    }
}

export abstract class TNSDOMMatrixBase {
    protected nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    a: number;

    b: number;

    c: number;

    d: number;

    e: number;

    f: number;

    get native() {
        return this.nativeInstance;
    }
}

export class ImageDataBase {
    protected nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    width = 0;

    height = 0;

    data = null;

    get native() {
        return this.nativeInstance;
    }

}

export abstract class CanvasGradientBase {
    public abstract addColorStop(offset: number, color: any): void;
}

export abstract class CanvasPattern {
}

export class TextMetricsBase {
    nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    get native() {
        return this.nativeInstance;
    }
}


export class WebGLQuery {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLQuery]';
    }

    [Symbol.toStringTag] = 'WebGLQuery';
}


export class WebGLSampler {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLSampler]';
    }

    [Symbol.toStringTag] = 'WebGLSampler';
}

export class WebGLTransformFeedback {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLTransformFeedback]';
    }

    [Symbol.toStringTag] = 'WebGLTransformFeedback';
}

export class WebGLVertexArrayObject {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLVertexArrayObject]';
    }

    [Symbol.toStringTag] = 'WebGLVertexArrayObject';
}

export class WebGLSync {
    private nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
    }

    public get native() {
        return this.nativeInstance;
    }

    public toString() {
        return '[object WebGLSync]';
    }

    [Symbol.toStringTag] = 'WebGLSync';
}
