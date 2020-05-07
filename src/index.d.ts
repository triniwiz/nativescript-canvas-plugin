import {
    CanvasGradientBase,
    ImageDataBase,
    TextMetricsBase,
    TNSCanvasBase,
    TNSCanvasRenderingContext2DBase,
    TNSDOMMatrixBase,
    TNSPath2DBase
} from './canvas-plugin.common';
import { TNSWebGL2RenderingContext } from './TNSWebGL2RenderingContext';
import { TNSWebGLRenderingContext } from './TNSWebGLRenderingContext';

export { TNSWebGLRenderingContext, TNSWebGL2RenderingContext };
export * from './TNSImageAsset';

export declare function createSVGMatrix(): TNSDOMMatrix;

export declare class TNSCanvas extends TNSCanvasBase {
    useMetal: boolean;

    createNativeView(): any;

    getContext(type: string): TNSCanvasRenderingContext2D | TNSWebGLRenderingContext | TNSWebGL2RenderingContext | null;

    getBoundingClientRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    };

    toDataURL(type: string, encoderOptions: number): string;
}

export declare class ImageData extends ImageDataBase {
    constructor(nativeInstance: any);
}

export declare class TNSCanvasRenderingContext2D extends TNSCanvasRenderingContext2DBase {
    private context;

    constructor(context: any);

    native: any;
    shadowColor: string;
    globalAlpha: number;
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: string;
    lineDashOffset: number;
    lineJoin: string;
    lineCap: string;
    miterLimit: number;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    textAlign: string;
    globalCompositeOperation: string;
    fillStyle: string | CanvasGradient;
    strokeStyle: string | CanvasGradient;

    addHitRegion(region: any): void;

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

    beginPath(): void;

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    clearHitRegions(): void;

    clearRect(x: number, y: number, width: number, height: number): void;

    clip(): void;
    clip(fillRule: string): void;
    clip(path: any, fillRule: string): void;

    closePath(): void;

    createImageData(width: number, height: number): ImageData;
    createImageData(data: ImageData): ImageData;

    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;

    createPattern(image: any, repetition: string): void;

    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;

    drawFocusIfNeeded(element: any): void;
    drawFocusIfNeeded(path: any, element: any): void;

    drawImage(image: any, dx: number, dy: number): void;
    drawImage(image: any, dx: number, dy: number, dWidth: number, dHeight: number): void;
    drawImage(image: any, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

    fill(): void;
    fill(fillRule: string): void;
    fill(path: TNSPath2D, fillRule: string): void;

    fillRect(x: number, y: number, width: number, height: number): void;

    fillText(text: string, x: number, y: number, maxWidth?: number): void;

    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;

    getLineDash(): any;

    isPointInPath(x: number, y: number, fillRule: string): boolean;
    isPointInPath(path: TNSPath2D, x: number, y: number, fillRule: string): boolean;

    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: TNSPath2D, x: number, y: number): boolean;

    lineTo(x: number, y: number): void;

    measureText(text: string): TextMetrics;

    moveTo(x: number, y: number): void;

    putImageData(imageData: ImageData, dx: number, dy: number): void;
    putImageData(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
    putImageData(imageData: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    rect(x: number, y: number, width: number, height: number): void;

    removeHitRegion(id: string): void;

    resetTransform(): void;

    restore(): void;

    rotate(angle: number): void;

    save(): void;

    scale(x: number, y: number): void;

    scrollPathIntoView(): void;
    scrollPathIntoView(path: TNSPath2D): void;

    setLineDash(segments: number[]): void;

    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    stroke(): void;

    strokeRect(x: number, y: number, width: number, height: number): void;

    strokeText(text: string, x: number, y: number, maxWidth?: number): void;

    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    translate(x: number, y: number): void;
}

export declare class TextMetrics extends TextMetricsBase {
    constructor(instance: any);

    readonly width: number;
}

export declare class TNSPath2D extends TNSPath2DBase {
    constructor(instance: any);

    addPath(path: TNSPath2D, transform?: TNSDOMMatrix): void;

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    closePath(): void;

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

    lineTo(x: number, y: number): void;

    moveTo(x: number, y: number): void;

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    rect(x: number, y: number, width: number, height: number): void;
}

export declare class TNSDOMMatrix extends TNSDOMMatrixBase {
    constructor(instance: any);

    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}

export declare class CanvasGradient extends CanvasGradientBase {
    protected nativeInstance: any;

    protected constructor(nativeInstance: any);

    addColorStop(offset: number, color: any): void;

    static fromNative(nativeInstance: any): CanvasGradient;

    readonly native: any;
}

export declare function requestAnimationFrame(loop: any): string;

export declare function cancelAnimationFrame(id: any): void;

/*
export declare class TNSWebGLRenderingContext extends TNSWebGLRenderingContextBase {
    private context;
    constructor(context: any);
    activeTexture(texture: number): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: number, name: string): void;
    bindBuffer(target: number, buffer: WebGLBuffer): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;
    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;
    bindTexture(target: number, texture: WebGLTexture): void;
    blendColor(red: number, green: number, blue: number, alpha: number): void;
    blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
    blendEquation(mode: number): void;
    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
    blendFunc(sfactor: number, dfactor: number): void;
    bufferData(target: number, size: number, usage: number): void;
    bufferData(target: number, srcData: ArrayBuffer | ArrayBufferView, usage: number): void;
    bufferSubData(target: number, offset: number, srcData: ArrayBuffer | ArrayBufferView): void;
    checkFramebufferStatus(target: number): number;
    clearColor(red: number, green: number, blue: number, alpha: number): void;
    clearDepth(depth: number): void;
    clearStencil(stencil: number): void;
    clear(mask: number): void;
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    commit(): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: ArrayBufferView): void;
    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: ArrayBufferView): void;
    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;
    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;
    createBuffer(): WebGLBuffer;
    createFramebuffer(): WebGLFramebuffer;
    createProgram(): WebGLProgram;
    createRenderbuffer(): WebGLRenderbuffer;
    createShader(type: number): WebGLShader;
    createTexture(): WebGLTexture;
    cullFace(mode: number): void;
    deleteBuffer(buffer: WebGLBuffer): void;
    deleteFramebuffer(frameBuffer: WebGLFramebuffer): void;
    deleteProgram(program: WebGLProgram): void;
    deleteRenderbuffer(renderBuffer: WebGLRenderbuffer): void;
    deleteShader(shader: WebGLRenderbuffer): void;
    deleteTexture(texture: WebGLTexture): void;
    depthFunc(func: number): void;
    depthMask(flag: boolean): void;
    depthRange(zNear: number, zFar: number): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disableVertexAttribArray(index: number): void;
    disable(cap: number): void;
    drawArrays(mode: number, first: number, count: number): void;
    drawElements(mode: number, count: number, type: number, offset: number): void;
    enableVertexAttribArray(index: number): void;
    enable(cap: number): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void;
    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void;
    frontFace(mode: number): void;
    generateMipmap(target: number): void;
    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;
    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;
    getAttachedShaders(program: WebGLProgram): WebGLShader[];
    getAttribLocation(program: WebGLProgram, name: string): number;
    getBufferParameter(target: number, pname: number): number;
    getContextAttributes(): any;
    getError(): number;
    getExtension(name: string): void;
    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): number | WebGLRenderbuffer | WebGLTexture;
    getParameter(pname: number): void;
    getProgramInfoLog(program: WebGLProgram): string;
    getProgramParameter(program: WebGLProgram, pname: number): void;
    getRenderbufferParameter(target: number, pname: number): number;
    getShaderInfoLog(shader: WebGLShader): string;
    getShaderParameter(shader: WebGLShader, pname: number): void;
    getShaderPrecisionFormat(shaderType: number, precisionType: number): WebGLShaderPrecisionFormat;
    getShaderSource(shader: WebGLShader): string;
    getSupportedExtensions(): string[];
    getTexParameter(target: number, pname: number): number;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): number;
    getVertexAttribOffset(index: number, pname: number): void;
    getVertexAttrib(index: number, pname: number): void;
    hint(target: number, mode: number): void;
    isBuffer(buffer: WebGLBuffer): boolean;
    isContextLost(): boolean;
    isEnabled(cap: number): boolean;
    isFramebuffer(framebuffer: WebGLFramebuffer): boolean;
    isProgram(program: WebGLProgram): boolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean;
    isShader(shader: WebGLShader): boolean;
    isTexture(texture: WebGLTexture): boolean;
    lineWidth(width: number): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: number, param: number): void;
    polygonOffset(factor: number, units: number): void;
    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
    renderbufferStorage(target: number, internalFormat: number, width: number, height: number): void;
    sampleCoverage(value: number, invert: boolean): void;
    scissor(x: number, y: number, width: number, height: number): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
    stencilFunc(func: number, ref: number, mask: number): void;
    stencilMaskSeparate(face: number, mask: number): void;
    stencilMask(mask: number): void;
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
    stencilOp(fail: number, zfail: number, zpass: number): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: any): void;
    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView): void;
    texParameterf(target: number, pname: number, param: number): void;
    texParameteri(target: number, pname: number, param: number): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: any): void;
    uniform1f(location: WebGLUniformLocation, v0: number): void;
    uniform1iv(location:WebGLUniformLocation, value: number[]): void;
    uniform1fv(location:WebGLUniformLocation, value: number[]): void;
    uniform1i(location:WebGLUniformLocation, v0: number): void;
    uniform2f(location:WebGLUniformLocation, v0: number, v1: number): void;
    uniform2iv(location:WebGLUniformLocation, value: number[]): void;
    uniform2fv(location:WebGLUniformLocation, value: number[]): void;
    uniform2i(location:WebGLUniformLocation, v0: number, v1: number): void;
    uniform3f(location:WebGLUniformLocation, v0: number, v1: number, v2: number): void;
    uniform3iv(location:WebGLUniformLocation, value: number[]): void;
    uniform3fv(location:WebGLUniformLocation, value: number[]): void;
    uniform3i(location:WebGLUniformLocation, v0: number, v1: number, v2: number): void;
    uniform4f(location:WebGLUniformLocation, v0: number, v1: number, v2: number, v3: number): void;
    uniform4iv(location:WebGLUniformLocation, value: number[]): void;
    uniform4fv(location:WebGLUniformLocation, value: number[]): void;
    uniform4i(location:WebGLUniformLocation, v0: number, v1: number, v2: number, v3: number): void;
    uniformMatrix2fv(location:WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix3fv(location:WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix4fv(location:WebGLUniformLocation, transpose: boolean, value: number[]): void;
    useProgram(program: WebGLProgram): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: number, v0: number): void;
    vertexAttrib1fv(index: number, value: number[]): void;
    vertexAttrib2f(index: number, v0: number, v1: number): void;
    vertexAttrib2fv(index: number, value: number[]): void;
    vertexAttrib3f(index: number, v0: number, v1: number, v2: number): void;
    vertexAttrib3fv(index: number, value: number[]): void;
    vertexAttrib4f(index: number, v0: number, v1: number, v2: number, v3: number): void;
    vertexAttrib4fv(index: number, value: number[]): void;
    vertexAttribPointer(index: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;
    viewport(x: number, y: number, width: number, height: number): void;
}
*/
