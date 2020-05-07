import {
    TNSWebGLRenderingContextBase,
    WebGLActiveInfo,
    WebGLBuffer,
    WebGLFramebuffer,
    WebGLProgram,
    WebGLRenderbuffer,
    WebGLShader,
    WebGLShaderPrecisionFormat,
    WebGLTexture,
    WebGLUniformLocation
} from './canvas-plugin.common';
import { fromFile, ImageSource } from 'tns-core-modules/image-source';
import * as types from 'tns-core-modules/utils/types';
import {
    EXT_blend_minmax,
    EXT_color_buffer_half_float,
    EXT_disjoint_timer_query,
    EXT_shader_texture_lod,
    EXT_sRGB,
    EXT_texture_filter_anisotropic,
    OES_element_index_uint,
    OES_standard_derivatives,
    OES_texture_float,
    OES_texture_float_linear,
    OES_texture_half_float,
    OES_texture_half_float_linear,
    OES_vertex_array_object,
    WEBGL_color_buffer_float,
    WEBGL_compressed_texture_atc,
    WEBGL_compressed_texture_etc,
    WEBGL_compressed_texture_etc1,
    WEBGL_compressed_texture_pvrtc,
    WEBGL_compressed_texture_s3tc,
    WEBGL_lose_context
} from './TNSWebGLExtensions';
import { TNSImageAsset } from './TNSImageAsset';


export class TNSWebGLRenderingContext extends TNSWebGLRenderingContextBase {
    private context;//: com.github.triniwiz.canvas.WebGLRenderingContext;

    constructor(context) {
        super();
        this.context = context;
    }

    protected getJSArray(value): any[] {
        const count = value.length;
        const array: number[] = [];
        for (let i = 0; i < count; i++) {
            array.push(value[i]);
        }
        return array;
    }

    get native() {
        return this.context;
    }

    get drawingBufferHeight() {
        return this.context.getDrawingBufferHeight();
    }

    get drawingBufferWidth() {
        return this.context.getDrawingBufferWidth();
    }

    public static isDebug = false;

    protected _glCheckError(message: string) {
        if (!TNSWebGLRenderingContext.isDebug) {
            return;
        }
        console.log(message, this.getError());
    }

    activeTexture(texture: number): void {
        this._glCheckError('activeTexture');
        this.context.activeTexture(texture);
    }

    attachShader(program: WebGLProgram, shader: WebGLShader): void {
        this._glCheckError('attachShader');
        const value = program ? program.native : null;
        const value2 = shader ? shader.native : null;
        this.context.attachShader(value, value2);
    }

    bindAttribLocation(program: WebGLProgram, index: number, name: string): void {
        this._glCheckError('bindAttribLocation');
        const value = program ? program.native : null;
        this.context.bindAttribLocation(value, index, name);
    }

    bindBuffer(target: number, buffer: WebGLBuffer): void {
        this._glCheckError('bindBuffer');
        const value = buffer ? buffer.native : null;
        this.context.bindBuffer(target, value);
    }

    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void {
        this._glCheckError('bindFramebuffer');
        const value = framebuffer ? framebuffer.native : null;
        this.context.bindFramebuffer(target, value);
    }

    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void {
        this._glCheckError('bindRenderbuffer');
        const value = renderbuffer ? renderbuffer.native : null;
        this.context.bindRenderbuffer(target, value);
    }

    bindTexture(target: number, texture: WebGLTexture): void {
        this._glCheckError('bindTexture');
        const value = texture ? texture.native : null;
        this.context.bindTexture(target, value);
    }

    blendColor(red: number, green: number, blue: number, alpha: number): void {
        this._glCheckError('blendColor');
        this.context.blendColor(red, green, blue, alpha);
    }

    blendEquationSeparate(modeRGB: number, modeAlpha: number): void {
        this._glCheckError('blendEquationSeparate');
        this.context.blendEquationSeparate(modeRGB, modeAlpha);
    }

    blendEquation(mode: number): void {
        this._glCheckError('blendEquation');
        this.context.blendEquation(mode);
    }

    blendFuncSeparate(srcRGB: number = this.ONE, dstRGB: number = this.ZERO, srcAlpha: number = this.ONE, dstAlpha: number = this.ZERO): void {
        this._glCheckError('blendFuncSeparate');
        this.context.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
    }

    blendFunc(sfactor: number = this.ONE, dfactor: number = this.ZERO): void {
        this._glCheckError('blendFunc');
        this.context.blendFunc(sfactor, dfactor);
    }

    toNativeArray(value: any[], type: string) {
        if (value && value.length && typeof type === 'string') {
            const size = value.length;
            const nativeArray = Array.create(type, size);
            for (let i = 0; i < size; i++) {
                nativeArray[i] = value[i];
            }
            return nativeArray;
        }
        return [];
    }

    bufferData(target: number, size: number, usage: number): void;
    bufferData(target: number, srcData: ArrayBuffer | ArrayBufferView, usage: number): void;
    bufferData(target: any, srcData: any, usage: any) {
        this._glCheckError('bufferData');
        if (typeof srcData === 'number') {
            this.context.bufferData(target, srcData, usage);
        } else if (srcData instanceof ArrayBuffer) {
            this.context.bufferData(target, this.toNativeArray(new Uint8Array(srcData.slice(0) as any) as any, 'byte'), usage);
        } else if (srcData && srcData.buffer instanceof ArrayBuffer) {
            if (srcData instanceof Uint8Array) {
                this.context.bufferData(target, this.toNativeArray(srcData as any, 'byte'), usage);
            } else if (srcData instanceof Uint16Array) {
                this.context.bufferData(target, this.toNativeArray(srcData as any, 'short'), usage);
            } else if (srcData instanceof Uint32Array) {
                this.context.bufferData(target, this.toNativeArray(srcData as any, 'int'), usage);
            } else if (srcData instanceof Float32Array) {
                this.context.bufferData(target, this.toNativeArray(srcData as any, 'float'), usage);
            }
        }
    }

    bufferSubData(target: number, offset: number, srcData: ArrayBuffer | ArrayBufferView): void {
        this._glCheckError('bufferSubData');
        if (srcData instanceof ArrayBuffer) {
            this.context.bufferSubData(target, offset, new Uint8Array(srcData.slice(0) as any));
        } else if (srcData && srcData.buffer instanceof ArrayBuffer) {
            if (srcData instanceof Uint8Array) {
                this.context.bufferSubData(target, offset, this.toNativeArray(srcData as any, 'byte'));
            } else if (srcData instanceof Uint16Array) {
                this.context.bufferSubData(target, offset, this.toNativeArray(srcData as any, 'short'));
            } else if (srcData instanceof Uint32Array) {
                this.context.bufferSubData(target, offset, this.toNativeArray(srcData as any, 'int'));
            } else if (srcData instanceof Float32Array) {
                this.context.bufferSubData(target, offset, this.toNativeArray(srcData as any, 'float'));
            }
        }
    }

    checkFramebufferStatus(target: number): number {
        this._glCheckError('checkFramebufferStatus');
        return this.context.checkFramebufferStatus(target);
    }

    clearColor(red: number, green: number, blue: number, alpha: number): void {
        this._glCheckError('clearColor');
        this.context.clearColor(red, green, blue, alpha);
    }

    clearDepth(depth: number): void {
        this._glCheckError('clearDepth');
        this.context.clearDepth(depth);
    }

    clearStencil(stencil: number): void {
        this._glCheckError('clearStencil');
        this.context.clearStencil(stencil);
    }

    clear(mask: number): void {
        this._glCheckError('clear');
        this.context.clear(mask);
    }

    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void {
        this._glCheckError('colorMask');
        this.context.colorMask(red, green, blue, alpha);
    }

    commit(): void {
        // NOOP
        this.context.commit();
    }

    compileShader(shader: WebGLShader): void {
        this._glCheckError('compileShader');
        const value = shader ? shader.native : null;
        this.context.compileShader(value);
    }

    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: ArrayBufferView): void {
        this._glCheckError('compressedTexImage2D');
        if (pixels && pixels.buffer instanceof ArrayBuffer) {
            if (pixels instanceof Uint8Array) {
                this.context.compressedTexImage2D(
                    target,
                    level,
                    internalformat,
                    width,
                    height,
                    border,
                    this.toNativeArray(pixels as any, 'byte')
                );
            } else if (pixels instanceof Uint16Array) {
                this.context.compressedTexImage2D(
                    target,
                    level,
                    internalformat,
                    width,
                    height,
                    border,
                    this.toNativeArray(pixels as any, 'short')
                );
            } else if (pixels instanceof Uint32Array) {
                this.context.compressedTexImage2D(
                    target,
                    level,
                    internalformat,
                    width,
                    height,
                    border,
                    this.toNativeArray(pixels as any, 'int')
                );
            } else if (pixels instanceof Float32Array) {
                this.context.compressedTexImage2D(
                    target,
                    level,
                    internalformat,
                    width,
                    height,
                    border,
                    this.toNativeArray(pixels as any, 'float')
                );
            }
        } else if (pixels instanceof ArrayBuffer) {
            this.context.compressedTexImage2D(
                target,
                level,
                internalformat,
                width,
                height,
                border,
                this.toNativeArray(new Uint8Array(pixels.slice(0) as any) as any, 'byte')
            );
        }
    }

    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: ArrayBufferView): void {
        this._glCheckError('compressedTexSubImage2D');
        if (pixels && pixels.buffer instanceof ArrayBuffer) {
            if (pixels instanceof Uint8Array) {
                this.context.compressedTexSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format,
                    this.toNativeArray(pixels as any, 'byte')
                );
            } else if (pixels instanceof Uint16Array) {
                this.context.compressedTexSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format,
                    this.toNativeArray(pixels as any, 'short')
                );
            } else if (pixels instanceof Uint32Array) {
                this.context.compressedTexSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format,
                    this.toNativeArray(pixels as any, 'int')
                );
            } else if (pixels instanceof Float32Array) {
                this.context.compressedTexSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format,
                    this.toNativeArray(pixels as any, 'float')
                );
            }
        } else if (pixels instanceof ArrayBuffer) {
            this.context.compressedTexSubImage2D(
                target,
                level,
                xoffset,
                yoffset,
                width,
                height,
                format,
                this.toNativeArray(new Uint8Array(pixels.slice(0) as any) as any, 'byte')
            );
        }
    }

    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void {
        this._glCheckError('copyTexImage2D');
        this.context.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
    }

    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void {
        this._glCheckError('copyTexSubImage2D');
        this.context.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
    }

    createBuffer(): WebGLBuffer {
        this._glCheckError('createBuffer');
        const id = this.context.createBuffer();
        return new WebGLBuffer(id);
    }

    createFramebuffer(): WebGLFramebuffer {
        this._glCheckError('createFramebuffer');
        return new WebGLFramebuffer(this.context.createFramebuffer());
    }

    createProgram(): WebGLProgram {
        this._glCheckError('createProgram');
        return new WebGLProgram(this.context.createProgram());
    }

    createRenderbuffer(): WebGLRenderbuffer {
        this._glCheckError('createRenderbuffer');
        return new WebGLRenderbuffer(this.context.createRenderbuffer());
    }

    createShader(type: number): WebGLShader {
        this._glCheckError('createShader');
        return new WebGLShader(this.context.createShader(type));
    }

    createTexture(): WebGLTexture {
        this._glCheckError('createTexture');
        return new WebGLTexture(this.context.createTexture());
    }

    cullFace(mode: number): void {
        this._glCheckError('cullFace');
        this.context.cullFace(mode);
    }

    deleteBuffer(buffer: WebGLBuffer): void {
        this._glCheckError('deleteBuffer');
        const value = buffer ? buffer.native : null;
        this.context.deleteBuffer(value);
    }

    deleteFramebuffer(frameBuffer: WebGLFramebuffer): void {
        this._glCheckError('deleteFramebuffer');
        const value = frameBuffer ? frameBuffer.native : null;
        this.context.deleteFramebuffer(value);
    }

    deleteProgram(program: WebGLProgram): void {
        this._glCheckError('deleteProgram');
        const value = program ? program.native : null;
        this.context.deleteProgram(value);
    }

    deleteRenderbuffer(renderBuffer: WebGLRenderbuffer): void {
        this._glCheckError('deleteRenderbuffer');
        const value = renderBuffer ? renderBuffer.native : null;
        this.context.deleteRenderbuffer(value);
    }

    deleteShader(shader: WebGLRenderbuffer): void {
        this._glCheckError('deleteShader');
        const value = shader ? shader.native : null;
        this.context.deleteShader(value);
    }

    deleteTexture(texture: WebGLTexture): void {
        this._glCheckError('deleteTexture');
        const value = texture ? texture.native : null;
        this.context.deleteTexture(value);
    }

    depthFunc(func: number): void {
        this._glCheckError('depthFunc');
        this.context.depthFunc(func);
    }

    depthMask(flag: boolean): void {
        this._glCheckError('depthMask');
        this.context.depthMask(flag);
    }

    depthRange(zNear: number, zFar: number): void {
        this._glCheckError('depthRange');
        this.context.depthRange(zNear, zFar);
    }

    detachShader(program: WebGLProgram, shader: WebGLShader): void {
        this._glCheckError('detachShader');
        const value = program ? program.native : null;
        const value2 = shader ? shader.native : null;
        this.context.detachShader(value, value2);
    }

    disableVertexAttribArray(index: number): void {
        this._glCheckError('disableVertexAttribArray');
        this.context.disableVertexAttribArray(index);
    }

    disable(cap: number): void {
        this._glCheckError('disable');
        this.context.disable(cap);
    }

    drawArrays(mode: number, first: number, count: number): void {
        this._glCheckError('drawArrays');
        this.context.drawArrays(mode, first, count);
    }

    drawElements(mode: number, count: number, type: number, offset: number): void {
        this._glCheckError('drawElements');
        this.context.drawElements(mode, count, type, offset);
    }

    enableVertexAttribArray(index: number): void {
        this._glCheckError('enableVertexAttribArray');
        this.context.enableVertexAttribArray(index);
    }

    enable(cap: number): void {
        this._glCheckError('enable');
        this.context.enable(cap);
    }

    finish(): void {
        this._glCheckError('finish');
        this.context.finish();
    }

    flush(): void {
        this._glCheckError('flush');
        this.context.flush();
    }

    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void {
        this._glCheckError('framebufferRenderbuffer');
        const value = renderbuffer ? renderbuffer.native : null;
        this.context.framebufferRenderbuffer(target, attachment, renderbuffertarget, value);
    }

    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void {
        this._glCheckError('framebufferTexture2D');
        const value = texture ? texture.native : null;
        this.context.framebufferTexture2D(target, attachment, textarget, value, level);
    }

    frontFace(mode: number): void {
        this._glCheckError('frontFace');
        this.context.frontFace(mode);
    }

    generateMipmap(target: number): void {
        this._glCheckError('generateMipmap');
        this.context.generateMipmap(target);
    }

    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo {
        this._glCheckError('getActiveAttrib');
        const value = program ? program.native : null;
        const attrib = this.context.getActiveAttrib(value, index);
        return new WebGLActiveInfo(attrib.getName(), attrib.getSize(), attrib.getType());
    }

    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo {
        this._glCheckError('getActiveUniform');
        const value = program ? program.native : null;
        const uniform = this.context.getActiveUniform(value, index);
        return new WebGLActiveInfo(uniform.getName(), uniform.getSize(), uniform.getType());
    }

    getAttachedShaders(program: WebGLProgram): WebGLShader[] {
        this._glCheckError('getAttachedShaders');
        const value = program ? program.native : null;
        return this.getJSArray(this.context.getAttachedShaders(value)).map(shader => new WebGLShader(shader));
        ;
    }

    getAttribLocation(program: WebGLProgram, name: string): number {
        this._glCheckError('getAttribLocation');
        const value = program ? program.native : null;
        return this.context.getAttribLocation(value, name);
    }

    getBufferParameter(target: number, pname: number): number {
        this._glCheckError('getBufferParameter');
        return this.context.getBufferParameter(target, pname);
    }

    getContextAttributes(): any {
        const attributes = this.context.getContextAttributes();
        const keys = attributes.keySet().toArray();
        const length = keys.length;
        const contextAttributes = {};
        for (let i = 0; i < length; i++) {
            const key = keys[i];
            contextAttributes[key] = attributes.get(key);
        }
        return contextAttributes;
    }

    getError(): number {
        return this.context.getError();
    }

    getExtension(name: string) {
        this._glCheckError('getExtension');
        const ext = this.context.getExtension(name);
        if (ext) {
            const classObj = types.getClass(ext);
            switch (classObj) {
                case 'com.github.triniwiz.canvas.extensions.EXT_blend_minmax':
                    return new EXT_blend_minmax(ext);
                case 'com.github.triniwiz.canvas.extensions.EXT_color_buffer_half_float':
                    return new EXT_color_buffer_half_float(ext);
                case 'com.github.triniwiz.canvas.extensions.EXT_disjoint_timer_query':
                    return new EXT_disjoint_timer_query(ext);
                case 'com.github.triniwiz.canvas.extensions.EXT_sRGB':
                    return new EXT_sRGB(ext);
                case 'com.github.triniwiz.canvas.extensions.EXT_shader_texture_lod':
                    return new EXT_shader_texture_lod(ext);
                case 'com.github.triniwiz.canvas.extensions.EXT_texture_filter_anisotropic':
                    return new EXT_texture_filter_anisotropic(ext);
                case 'com.github.triniwiz.canvas.extensions.OES_element_index_uint':
                    return new OES_element_index_uint(ext);
                case 'com.github.triniwiz.canvas.extensions.OES_standard_derivatives':
                    return new OES_standard_derivatives(ext);
                case 'com.github.triniwiz.canvas.extensions.OES_texture_float':
                    return new OES_texture_float(ext);
                case 'com.github.triniwiz.canvas.extensions.OES_texture_float_linear':
                    return new OES_texture_float_linear(ext);

                case 'com.github.triniwiz.canvas.extensions.OES_texture_half_float':
                    return new OES_texture_half_float(ext);

                case 'com.github.triniwiz.canvas.extensions.OES_texture_half_float_linear':
                    return new OES_texture_half_float_linear(ext);

                case 'com.github.triniwiz.canvas.extensions.OES_vertex_array_object':
                    return new OES_vertex_array_object(ext);

                case 'com.github.triniwiz.canvas.extensions.WEBGL_color_buffer_float':
                    return new WEBGL_color_buffer_float(ext);

                case 'com.github.triniwiz.canvas.extensions.WEBGL_compressed_texture_atc':
                    return new WEBGL_compressed_texture_atc(ext);

                case 'com.github.triniwiz.canvas.extensions.WEBGL_compressed_texture_etc':
                    return new WEBGL_compressed_texture_etc(ext);

                case 'com.github.triniwiz.canvas.extensions.WEBGL_compressed_texture_etc1':
                    return new WEBGL_compressed_texture_etc1(ext);

                case 'com.github.triniwiz.canvas.extensions.WEBGL_compressed_texture_pvrtc':
                    return new WEBGL_compressed_texture_pvrtc(ext);

                case 'com.github.triniwiz.canvas.extensions.WEBGL_compressed_texture_s3tc':
                    return new WEBGL_compressed_texture_s3tc(ext);

                case 'com.github.triniwiz.canvas.extensions.WEBGL_lose_context':
                    return new WEBGL_lose_context(ext);

            }
        }
        return null;
    }

    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): number | WebGLRenderbuffer | WebGLTexture {
        this._glCheckError('getFramebufferAttachmentParameter');
        const param = this.context.getFramebufferAttachmentParameter(target, attachment, pname);
        if (param.isRenderbuffer()) {
            return new WebGLRenderbuffer(param.getValue());
        } else if (param.isTexture()) {
            return new WebGLTexture(param.getValue());
        }
        return this.toPrimitive(param.getValue());
    }


    getParameter(pname: number): number[] | number | WebGLBuffer | WebGLProgram | WebGLFramebuffer | WebGLRenderbuffer | WebGLTexture | Uint32Array | Int32Array | null {
        this._glCheckError('getParameter');
        const value = this.context.getParameter(pname);
        switch (pname) {
            case this.COLOR_WRITEMASK:
            case this.COLOR_CLEAR_VALUE:
            case this.BLEND_COLOR:
            case this.ALIASED_LINE_WIDTH_RANGE:
            case this.ALIASED_POINT_SIZE_RANGE:
            case this.DEPTH_RANGE:
                return this.getJSArray(value);
            case this.ARRAY_BUFFER_BINDING:
            case this.ELEMENT_ARRAY_BUFFER_BINDING:
                return new WebGLBuffer(value);
            case this.CURRENT_PROGRAM:
                return new WebGLProgram(value);
            case this.COMPRESSED_TEXTURE_FORMATS:
                return new Uint32Array(this.getJSArray(value));
            case this.RENDERBUFFER_BINDING:
                return new WebGLRenderbuffer(value);
            case this.FRAMEBUFFER_BINDING:
                if (value) {
                    return new WebGLFramebuffer(value);
                }
                return null;
            case this.VIEWPORT:
            case this.SCISSOR_BOX:
            case this.MAX_VIEWPORT_DIMS:
                console.log('stuff', this.getJSArray(value));
                return new Int32Array(this.getJSArray(value));
            case this.TEXTURE_BINDING_CUBE_MAP:
            case this.TEXTURE_BINDING_2D:
                if (value) {
                    return new WebGLTexture(value);
                }
                return null;
            default:
                return value;
        }
    }

    getProgramInfoLog(program: WebGLProgram): string {
        this._glCheckError('getProgramInfoLog');
        const value = program ? program.native : null;
        return this.context.getProgramInfoLog(value);
    }

    getProgramParameter(program: WebGLProgram, pname: number): number | boolean {
        this._glCheckError('getProgramParameter');
        const value = program ? program.native : null;
        return this.toPrimitive(this.context.getProgramParameter(value, pname));
    }

    getRenderbufferParameter(target: number, pname: number): number {
        this._glCheckError('getRenderbufferParameter');
        return this.context.getRenderbufferParameter(target, pname);
    }

    getShaderInfoLog(shader: WebGLShader): string {
        this._glCheckError('getShaderInfoLog');
        const value = shader ? shader.native : null;
        return this.context.getShaderInfoLog(value);
    }

    toPrimitive(value): any {
        if (value instanceof java.lang.Integer) {
            return value.intValue();
        } else if (value instanceof java.lang.Long) {
            return value.longValue();
        } else if (value instanceof java.lang.Short) {
            return value.shortValue();
        } else if (value instanceof java.lang.Byte) {
            return value.byteValue();
        } else if (value instanceof java.lang.Boolean) {
            return value.booleanValue();
        } else if (value instanceof java.lang.String) {
            return value.toString();
        } else if (value instanceof java.lang.Float) {
            return value.floatValue();
        } else if (value instanceof java.lang.Double) {
            return value.doubleValue();
        }
        return value;
    }

    getShaderParameter(shader: WebGLShader, pname: number): boolean | number {
        this._glCheckError('getShaderParameter');
        const value = shader ? shader.native : null;
        return this.toPrimitive(this.context.getShaderParameter(value, pname));
    }

    getShaderPrecisionFormat(shaderType: number, precisionType: number): WebGLShaderPrecisionFormat {
        this._glCheckError('getShaderPrecisionFormat');
        const precision = this.context.getShaderPrecisionFormat(shaderType, precisionType);
        return new WebGLShaderPrecisionFormat(precision.getRangeMin(), precision.getRangeMax(), precision.getPrecision());
    }

    getShaderSource(shader: WebGLShader): string {
        this._glCheckError('getShaderSource');
        const value = shader ? shader.native : null;
        return this.context.getShaderSource(value);
    }

    getSupportedExtensions(): string[] {
        this._glCheckError('getSupportedExtensions');
        return this.getJSArray(this.context.getSupportedExtensions());
    }

    getTexParameter(target: number, pname: number): number {
        this._glCheckError('getTexParameter');
        return this.context.getTexParameter(target, pname);
    }

    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation {
        this._glCheckError('getUniformLocation');
        const value = program ? program.native : null;
        return new WebGLUniformLocation(this.context.getUniformLocation(value, name));
    }

    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any {
        this._glCheckError('getUniform');
        const value = program ? program.native : null;
        const value2 = location ? location.native : null;
        const uniform = this.context.getUniform(value, value2);
        if (uniform && uniform.length) {
            return this.getJSArray(uniform);
        }
        return uniform;
    }

    getVertexAttribOffset(index: number, pname: number): number {
        this._glCheckError('getVertexAttribOffset');
        return this.context.getVertexAttribOffset(index, pname);
    }

    getVertexAttrib(index: number, pname: number): number[] | boolean | number {
        this._glCheckError('getVertexAttrib');
        const value = this.context.getVertexAttrib(index, pname);
        if (pname === this.CURRENT_VERTEX_ATTRIB) {
            return this.getJSArray(value);
        }
        return value;
    }

    hint(target: number, mode: number): void {
        this._glCheckError('hint');
        this.context.hint(target, mode);
    }

    isBuffer(buffer: WebGLBuffer): boolean {
        this._glCheckError('isBuffer');
        const value = buffer ? buffer.native : null;
        return this.context.isBuffer(value);
    }

    isContextLost(): boolean {
        this._glCheckError('isContextLost');
        return this.context.isContextLost();
    }

    isEnabled(cap: number): boolean {
        this._glCheckError('isEnabled');
        return this.context.isEnabled(cap);
    }

    isFramebuffer(framebuffer: WebGLFramebuffer): boolean {
        this._glCheckError('isFramebuffer');
        const value = framebuffer ? framebuffer.native : null;
        return this.context.isFramebuffer(value);
    }

    isProgram(program: WebGLProgram): boolean {
        this._glCheckError('isProgram');
        const value = program ? program.native : null;
        return this.context.isProgram(value);
    }

    isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean {
        this._glCheckError('isRenderbuffer');
        const value = renderbuffer ? renderbuffer.native : null;
        return this.context.isRenderbuffer(value);
    }

    isShader(shader: WebGLShader): boolean {
        this._glCheckError('isShader');
        const value = shader ? shader.native : null;
        return this.context.isShader(value);
    }

    isTexture(texture: WebGLTexture): boolean {
        this._glCheckError('isTexture');
        const value = texture ? texture.native : null;
        return this.context.isTexture(value);
    }

    lineWidth(width: number): void {
        this._glCheckError('lineWidth');
        this.context.lineWidth(width);
    }

    linkProgram(program: WebGLProgram): void {
        this._glCheckError('linkProgram');
        const value = program ? program.native : null;
        this.context.linkProgram(value);
    }

    pixelStorei(pname: number, param: any): void {
        this._glCheckError('pixelStorei');
        if (pname === this.UNPACK_FLIP_Y_WEBGL || pname === this.UNPACK_PREMULTIPLY_ALPHA_WEBGL) {
            this.context.pixelStorei(pname, java.lang.Boolean.valueOf(param));
        } else if (pname === this.PACK_ALIGNMENT || pname === this.UNPACK_ALIGNMENT || this.UNPACK_COLORSPACE_CONVERSION_WEBGL) {
            this.context.pixelStorei(pname, java.lang.Integer.valueOf(param));
        } else {
            this.context.pixelStorei(pname, param);
        }
    }

    polygonOffset(factor: number, units: number): void {
        this._glCheckError('polygonOffset');
        this.context.polygonOffset(factor, units);
    }

    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void {
        this._glCheckError('readPixels');
        if (pixels && pixels.buffer instanceof ArrayBuffer) {
            if (pixels instanceof Uint8Array) {
                this.context.readPixels(x, y, width, height, format, type, this.toNativeArray(pixels as any, 'byte'));
            } else if (pixels instanceof Uint16Array) {
                this.context.readPixels(x, y, width, height, format, type, this.toNativeArray(pixels as any, 'short'));
            } else if (pixels instanceof Uint32Array) {
                this.context.readPixels(x, y, width, height, format, type, this.toNativeArray(pixels as any, 'int'));
            } else if (pixels instanceof Float32Array) {
                this.context.readPixels(x, y, width, height, format, type, this.toNativeArray(pixels as any, 'float'));
            }
        } else if (pixels instanceof ArrayBuffer) {
            this.context.readPixels(x, y, width, height, format, type, this.toNativeArray(new Uint8Array(pixels.slice(0) as any) as any, 'byte'));
        }
    }

    renderbufferStorage(target: number, internalFormat: number, width: number, height: number): void {
        this._glCheckError('renderbufferStorage');
        if (internalFormat === this.DEPTH_STENCIL) {
            // DEPTH24_STENCIL8 = 35056
            // DEPTH24_STENCIL8_OES = 0x88F0
            internalFormat = 0x88F0;
        }
        this.context.renderbufferStorage(target, internalFormat, width, height);
    }

    sampleCoverage(value: number, invert: boolean): void {
        this._glCheckError('sampleCoverage');
        this.context.sampleCoverage(value, invert);
    }

    scissor(x: number, y: number, width: number, height: number): void {
        this._glCheckError('scissor');
        this.context.scissor(x, y, width, height);
    }

    shaderSource(shader: WebGLShader, source: string): void {
        this._glCheckError('shaderSource');
        const value = shader ? shader.native : null;
        this.context.shaderSource(value, source ? source : '');
    }

    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void {
        this._glCheckError('stencilFuncSeparate');
        this.context.stencilFuncSeparate(face, func, ref, mask);
    }

    stencilFunc(func: number, ref: number, mask: number): void {
        this._glCheckError('stencilFunc');
        this.context.stencilFunc(func, ref, mask);
    }

    stencilMaskSeparate(face: number, mask: number): void {
        this._glCheckError('stencilMaskSeparate');
        this.context.stencilMaskSeparate(face, mask);
    }

    stencilMask(mask: number): void {
        this._glCheckError('stencilMask');
        this.context.stencilMask(mask);
    }

    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void {
        this._glCheckError('stencilOpSeparate');
        this.context.stencilOpSeparate(face, fail, zfail, zpass);
    }

    stencilOp(fail: number, zfail: number, zpass: number): void {
        this._glCheckError('stencilOp');
        this.context.stencilOp(fail, zfail, zpass);
    }

    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: any): void;
    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView): void;
    texImage2D(target: any, level: any, internalformat: any, width: any, height: any, border: any, format?: any, type?: any, pixels?: any) {
        this._glCheckError('texImage2D');
        if (arguments.length === 9) {
            if (pixels && pixels.buffer instanceof ArrayBuffer) {
                if (pixels instanceof Uint8Array) {
                    this.context.texImage2D(
                        target,
                        level,
                        internalformat,
                        width,
                        height,
                        border,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'byte')
                    );
                } else if (pixels instanceof Uint16Array) {
                    this.context.texImage2D(
                        target,
                        level,
                        internalformat,
                        width,
                        height,
                        border,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'short')
                    );
                } else if (pixels instanceof Uint32Array) {
                    this.context.texImage2D(
                        target,
                        level,
                        internalformat,
                        width,
                        height,
                        border,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'int')
                    );
                } else if (pixels instanceof Float32Array) {
                    this.context.texImage2D(
                        target,
                        level,
                        internalformat,
                        width,
                        height,
                        border,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'float')
                    );
                }
            } else if (pixels instanceof ArrayBuffer) {
                this.context.texImage2D(
                    target,
                    level,
                    internalformat,
                    width,
                    height,
                    border,
                    format,
                    type,
                    this.toNativeArray(new Uint8Array(pixels.slice(0) as any) as any, 'float')
                );
            } else {
                this.context.texImage2D(
                    target,
                    level,
                    internalformat,
                    width,
                    height,
                    border,
                    format,
                    type,
                    pixels as any
                );
            }
        } else if (arguments.length === 6) {
            if (border instanceof TNSImageAsset) {
                this.context.texImage2D(target, level, internalformat, width, height, border.native);
            } else if (border instanceof android.graphics.Bitmap) {
                this.context.texImage2D(target, level, internalformat, width, height, border);
            } else if (border instanceof ImageSource) {
                this.context.texImage2D(target, level, internalformat, width, height, border.android);
            } else if (border &&
                typeof border.tagName === 'string' &&
                border.tagName === 'IMG') {
                if (border._asset instanceof TNSImageAsset) {
                    this.context.texImage2D(target, level, internalformat, width, height, border._asset.native);
                } else if (border._imageSource instanceof ImageSource) {
                    this.context.texImage2D(target, level, internalformat, width, height, border._imageSource.android);
                } else if (border._image instanceof android.graphics.Bitmap) {
                    this.context.texImage2D(target, level, internalformat, width, height, border._image);
                } else if (typeof border.src === 'string') {
                    this.context.texImage2D(target, level, internalformat, width, height, fromFile(border.src).android);
                }
            }
        }

    }

    texParameterf(target: number, pname: number, param: number): void {
        this._glCheckError('texParameterf');
        this.context.texParameterf(target, pname, param);
    }

    texParameteri(target: number, pname: number, param: number): void {
        this._glCheckError('texParameteri');
        this.context.texParameteri(target, pname, param);
    }

    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: any): void;
    texSubImage2D(target: any, level: any, xoffset: any, yoffset: any, width: any, height: any, format: any, type?: any, pixels?: any) {
        this._glCheckError('texSubImage2D');
        if (arguments.length === 9) {
            if (pixels && pixels.buffer) {
                if (pixels instanceof Uint8Array) {
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'byte')
                    );
                } else if (pixels instanceof Uint16Array) {
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'short')
                    );
                } else if (pixels instanceof Uint32Array) {
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'int')
                    );
                } else if (pixels instanceof Float32Array) {
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        format,
                        type,
                        this.toNativeArray(pixels as any, 'float')
                    );
                }
            } else if (pixels instanceof ArrayBuffer) {

                this.context.texSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format,
                    type,
                    this.toNativeArray(new Uint8Array(pixels.slice(0) as any) as any, 'byte')
                );
            }
        } else if (arguments.length === 7) {
            if (format instanceof android.graphics.Bitmap) {
                this.context.texSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format
                );
            } else if (format instanceof ImageSource) {
                this.context.texSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format.android
                );
            } else if (format instanceof TNSImageAsset) {
                this.context.texSubImage2D(
                    target,
                    level,
                    xoffset,
                    yoffset,
                    width,
                    height,
                    format.native
                );
            } else if (format &&
                typeof format.tagName === 'string' &&
                format.tagName === 'IMG') {
                if (format._imageSource instanceof ImageSource) {
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        format._imageSource.android
                    );
                } else if (format._image instanceof android.graphics.Bitmap) {
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        format._image
                    );
                } else if (format._asset instanceof TNSImageAsset) {
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        format._asset.native
                    );
                } else if (typeof format.src === 'string') {
                    const result = fromFile(format.src);
                    this.context.texSubImage2D(
                        target,
                        level,
                        xoffset,
                        yoffset,
                        width,
                        height,
                        result ? result.android : null
                )
                    ;
                }
            }
        }
    }

    uniform1f(location: WebGLUniformLocation, v0: number): void {
        this._glCheckError('uniform1f');
        this.context.uniform1f(location.native, v0);
    }

    uniform1iv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform1iv');
        this.context.uniform1iv(location.native, value);
    }

    uniform1fv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform1fv');
        value = this.toNativeArray(value, 'float');
        this.context.uniform1fv(location.native, value);
    }

    uniform1i(location: WebGLUniformLocation, v0: number): void {
        this._glCheckError('uniform1i');
        this.context.uniform1i(location.native, v0);
    }

    uniform2f(location: WebGLUniformLocation, v0: number, v1: number): void {
        this._glCheckError('uniform2f');
        this.context.uniform2f(location.native, v0, v1);
    }

    uniform2iv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform2iv');
        this.context.uniform2iv(location.native, value);
    }

    uniform2fv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform2fv');
        value = this.toNativeArray(value, 'float');
        this.context.uniform2fv(location.native, value);
    }

    uniform2i(location: WebGLUniformLocation, v0: number, v1: number): void {
        this._glCheckError('uniform2i');
        this.context.uniform2i(location.native, v0, v1);
    }

    uniform3f(location: WebGLUniformLocation, v0: number, v1: number, v2: number): void {
        this._glCheckError('uniform3f');
        this.context.uniform3f(location.native, v0, v1, v2);
    }

    uniform3iv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform3iv');
        this.context.uniform3iv(location.native, value);
    }

    uniform3fv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform3fv');
        value = this.toNativeArray(value, 'float');
        this.context.uniform3fv(location.native, value);
    }

    uniform3i(location: WebGLUniformLocation, v0: number, v1: number, v2: number): void {
        this._glCheckError('uniform3i');
        this.context.uniform3i(location.native, v0, v1, v2);
    }

    uniform4f(location: WebGLUniformLocation, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('uniform4f');
        this.context.uniform4f(location.native, v0, v1, v2, v3);
    }

    uniform4iv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform4iv');
        this.context.uniform4iv(location.native, value);
    }

    uniform4fv(location: WebGLUniformLocation, value: number[]): void {
        this._glCheckError('uniform4fv');
        value = this.toNativeArray(value, 'float');
        this.context.uniform4fv(location.native, value);
    }

    uniform4i(location: WebGLUniformLocation, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('uniform4i');
        this.context.uniform4i(location.native, v0, v1, v2, v3);
    }

    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void {
        this._glCheckError('uniformMatrix2fv');
        value = this.toNativeArray(value, 'float');
        this.context.uniformMatrix2fv(location.native, transpose, value);
    }

    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void {
        this._glCheckError('uniformMatrix3fv');
        value = this.toNativeArray(value, 'float');
        this.context.uniformMatrix3fv(location.native, transpose, value);
    }

    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void {
        this._glCheckError('uniformMatrix4fv');
        value = this.toNativeArray(value, 'float');
        this.context.uniformMatrix4fv(location.native, transpose, value);
    }

    useProgram(program: WebGLProgram): void {
        this._glCheckError('useProgram');
        const value = program ? program.native : null;
        this.context.useProgram(value);
    }

    validateProgram(program: WebGLProgram): void {
        this._glCheckError('validateProgram');
        const value = program ? program.native : null;
        this.context.validateProgram(value);
    }

    vertexAttrib1f(index: number, v0: number): void {
        this._glCheckError('vertexAttrib1f');
        this.context.vertexAttrib1f(index, v0);
    }

    vertexAttrib1fv(index: number, value: number[]): void {
        this._glCheckError('vertexAttrib1fv');
        value = this.toNativeArray(value, 'float');
        this.context.vertexAttrib1fv(index, value);
    }

    vertexAttrib2f(index: number, v0: number, v1: number): void {
        this._glCheckError('vertexAttrib2f');
        this.context.vertexAttrib2f(index, v0, v1);
    }

    vertexAttrib2fv(index: number, value: number[]): void {
        this._glCheckError('vertexAttrib2fv');
        value = this.toNativeArray(value, 'float');
        this.context.vertexAttrib2fv(index, value);
    }

    vertexAttrib3f(index: number, v0: number, v1: number, v2: number): void {
        this._glCheckError('vertexAttrib3f');
        this.context.vertexAttrib3f(index, v0, v1, v2);
    }

    vertexAttrib3fv(index: number, value: number[]): void {
        this._glCheckError('vertexAttrib3fv');
        value = this.toNativeArray(value, 'float');
        this.context.vertexAttrib3fv(index, value);
    }

    vertexAttrib4f(index: number, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('vertexAttrib4f');
        this.context.vertexAttrib4f(index, v0, v1, v2, v3);
    }

    vertexAttrib4fv(index: number, value: number[]): void {
        this._glCheckError('vertexAttrib4fv');
        value = this.toNativeArray(value, 'float');
        this.context.vertexAttrib4fv(index, value);
    }

    vertexAttribPointer(index: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void {
        this._glCheckError('vertexAttribPointer');
        this.context.vertexAttribPointer(index, size, type, normalized, stride, offset);
    }

    viewport(x: number, y: number, width: number, height: number): void {
        this._glCheckError('viewport');
        this.context.viewport(x, y, width, height);
    }

    get ONE_MINUS_CONSTANT_ALPHA(): number {
        return this.context.ONE_MINUS_CONSTANT_ALPHA;
    }

    get CONSTANT_ALPHA(): number {
        return this.context.CONSTANT_ALPHA;
    }

    get ONE_MINUS_CONSTANT_COLOR(): number {
        return this.context.ONE_MINUS_CONSTANT_COLOR;
    }

    get CONSTANT_COLOR(): number {
        return this.context.CONSTANT_COLOR;
    }

    get SRC_ALPHA_SATURATE(): number {
        return this.context.SRC_ALPHA_SATURATE;
    }

    get ONE_MINUS_DST_COLOR(): number {
        return this.context.ONE_MINUS_DST_COLOR;
    }

    get DST_COLOR(): number {
        return this.context.DST_COLOR;
    }

    get ONE_MINUS_DST_ALPHA(): number {
        return this.context.ONE_MINUS_DST_ALPHA;
    }

    get DST_ALPHA(): number {
        return this.context.DST_ALPHA;
    }

    get ONE_MINUS_SRC_COLOR(): number {
        return this.context.ONE_MINUS_SRC_COLOR;
    }

    get SRC_COLOR(): number {
        return this.context.SRC_COLOR;
    }

    get SRC_ALPHA(): number {
        return this.context.SRC_ALPHA;
    }

    get ONE_MINUS_SRC_ALPHA(): number {
        return this.context.ONE_MINUS_SRC_ALPHA;
    }

    get ACTIVE_ATTRIBUTES(): number {
        return this.context.ACTIVE_ATTRIBUTES;
    }

    get ACTIVE_TEXTURE(): number {
        return this.context.ACTIVE_TEXTURE;
    }

    get ACTIVE_UNIFORMS(): number {
        return this.context.ACTIVE_UNIFORMS;
    }

    get ALIASED_LINE_WIDTH_RANGE(): number {
        return this.context.ALIASED_LINE_WIDTH_RANGE;
    }

    get ALIASED_POINT_SIZE_RANGE(): number {
        return this.context.ALIASED_POINT_SIZE_RANGE;
    }

    get ALPHA(): number {
        return this.context.ALPHA;
    }

    get ALPHA_BITS(): number {
        return this.context.ALPHA_BITS;
    }

    get ALWAYS(): number {
        return this.context.ALWAYS;
    }

    get ARRAY_BUFFER(): number {
        return this.context.ARRAY_BUFFER;
    }

    get ARRAY_BUFFER_BINDING(): number {
        return this.context.ARRAY_BUFFER_BINDING;
    }

    get ATTACHED_SHADERS(): number {
        return this.context.ATTACHED_SHADERS;
    }

    get BACK(): number {
        return this.context.BACK;
    }

    get BLEND(): number {
        return this.context.BLEND;
    }

    get BLEND_COLOR(): number {
        return this.context.BLEND_COLOR;
    }

    get BLEND_DST_ALPHA(): number {
        return this.context.BLEND_DST_ALPHA;
    }

    get BLEND_DST_RGB(): number {
        return this.context.BLEND_DST_RGB;
    }

    get BLEND_EQUATION(): number {
        return this.context.BLEND_EQUATION;
    }

    get BLEND_EQUATION_ALPHA(): number {
        return this.context.BLEND_EQUATION_ALPHA;
    }

    get BLEND_EQUATION_RGB(): number {
        return this.context.BLEND_EQUATION_RGB;
    }

    get BLEND_SRC_ALPHA(): number {
        return this.context.BLEND_SRC_RGB;
    }

    get BLEND_SRC_RGB(): number {
        return this.context.BLEND_SRC_RGB;
    }

    get BLUE_BITS(): number {
        return this.context.BLUE_BITS;
    }

    get BOOL(): number {
        return this.context.BOOL;
    }

    get BOOL_VEC2(): number {
        return this.context.BOOL_VEC2;
    }

    get BOOL_VEC3(): number {
        return this.context.BOOL_VEC3;
    }

    get BOOL_VEC4(): number {
        return this.context.BOOL_VEC4;
    }

    get CCW(): number {
        return this.context.CCW;
    }

    get CLAMP_TO_EDGE(): number {
        return this.context.CLAMP_TO_EDGE;
    }

    get COLOR_ATTACHMENT0(): number {
        return this.context.COLOR_ATTACHMENT0;
    }

    get COLOR_ATTACHMENT0_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT0_WEBGL;
    }

    get COLOR_ATTACHMENT10_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT10_WEBGL;
    }

    get COLOR_ATTACHMENT11_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT11_WEBGL;
    }

    get COLOR_ATTACHMENT12_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT12_WEBGL;
    }

    get COLOR_ATTACHMENT13_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT13_WEBGL;
    }

    get COLOR_ATTACHMENT14_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT14_WEBGL;
    }

    get COLOR_ATTACHMENT15_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT15_WEBGL;
    }

    get COLOR_ATTACHMENT1_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT1_WEBGL;
    }

    get COLOR_ATTACHMENT2_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT2_WEBGL;
    }

    get COLOR_ATTACHMENT3_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT3_WEBGL;
    }

    get COLOR_ATTACHMENT4_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT4_WEBGL;
    }

    get COLOR_ATTACHMENT5_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT5_WEBGL;
    }

    get COLOR_ATTACHMENT6_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT6_WEBGL;
    }

    get COLOR_ATTACHMENT7_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT7_WEBGL;
    }

    get COLOR_ATTACHMENT8_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT8_WEBGL;
    }

    get COLOR_ATTACHMENT9_WEBGL(): number {
        return this.context.COLOR_ATTACHMENT9_WEBGL;
    }

    get COLOR_BUFFER_BIT() {
        return this.context.COLOR_BUFFER_BIT;
    }

    get COLOR_CLEAR_VALUE(): number {
        return this.context.COLOR_CLEAR_VALUE;
    }

    get COLOR_WRITEMASK(): number {
        return this.context.COLOR_WRITEMASK;
    }

    get COMPILE_STATUS(): number {
        return this.context.COMPILE_STATUS;
    }

    get COMPRESSED_R11_EAC(): number {
        return this.context.COMPRESSED_R11_EAC;
    }

    get COMPRESSED_RED_GREEN_RGTC2_EXT(): number {
        return this.context.COMPRESSED_RED_GREEN_RGTC2_EXT;
    }

    get COMPRESSED_RED_RGTC1_EXT(): number {
        return this.context.COMPRESSED_RED_RGTC1_EXT;
    }

    get COMPRESSED_RG11_EAC(): number {
        return this.context.COMPRESSED_RG11_EAC;
    }

    get COMPRESSED_RGB8_ETC2(): number {
        return this.context.COMPRESSED_RGB8_ETC2;
    }

    get COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2(): number {
        return this.context.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
    }

    get COMPRESSED_RGBA8_ETC2_EAC(): number {
        return this.context.COMPRESSED_RGBA8_ETC2_EAC;
    }

    get COMPRESSED_RGBA_ASTC_10x10_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_10x10_KHR;
    }

    get COMPRESSED_RGBA_ASTC_10x5_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_10x5_KHR;
    }

    get COMPRESSED_RGBA_ASTC_10x6_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_10x6_KHR;
    }

    get COMPRESSED_RGBA_ASTC_12x10_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_12x10_KHR;
    }

    get COMPRESSED_RGBA_ASTC_12x12_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_12x12_KHR;
    }

    get COMPRESSED_RGBA_ASTC_4x4_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_4x4_KHR;
    }

    get COMPRESSED_RGBA_ASTC_5x4_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_5x4_KHR;
    }

    get COMPRESSED_RGBA_ASTC_5x5_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_5x5_KHR;
    }

    get COMPRESSED_RGBA_ASTC_6x5_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_6x5_KHR;
    }

    get COMPRESSED_RGBA_ASTC_6x6_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_6x6_KHR;
    }

    get COMPRESSED_RGBA_ASTC_8x5_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_8x5_KHR;
    }

    get COMPRESSED_RGBA_ASTC_8x6_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_8x6_KHR;
    }

    get COMPRESSED_RGBA_ASTC_8x8_KHR(): number {
        return this.context.COMPRESSED_RGBA_ASTC_8x8_KHR;
    }

    get COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL(): number {
        return this.context.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL;
    }

    get COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL(): number {
        return this.context.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL;
    }

    get COMPRESSED_RGBA_BPTC_UNORM_EXT(): number {
        return this.context.COMPRESSED_RGBA_BPTC_UNORM_EXT;
    }

    get COMPRESSED_RGBA_PVRTC_2BPPV1_IMG(): number {
        return this.context.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }

    get COMPRESSED_RGBA_PVRTC_4BPPV1_IMG(): number {
        return this.context.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
    }

    get COMPRESSED_RGBA_S3TC_DXT1_EXT(): number {
        return this.context.COMPRESSED_RGBA_S3TC_DXT1_EXT;
    }

    get COMPRESSED_RGBA_S3TC_DXT3_EXT(): number {
        return this.context.COMPRESSED_RGBA_S3TC_DXT3_EXT;
    }

    get COMPRESSED_RGBA_S3TC_DXT5_EXT(): number {
        return this.context.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }

    get COMPRESSED_RGB_ATC_WEBGL(): number {
        return this.context.COMPRESSED_RGB_ATC_WEBGL;
    }

    get COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT(): number {
        return this.context.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
    }

    get COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT(): number {
        return this.context.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    }

    get COMPRESSED_RGB_ETC1_WEBGL(): number {
        return this.context.COMPRESSED_RGB_ETC1_WEBGL;
    }

    get COMPRESSED_RGB_PVRTC_2BPPV1_IMG(): number {
        return this.context.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
    }

    get COMPRESSED_RGB_PVRTC_4BPPV1_IMG(): number {
        return this.context.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
    }

    get COMPRESSED_RGB_S3TC_DXT1_EXT(): number {
        return this.context.COMPRESSED_RGB_S3TC_DXT1_EXT;
    }

    get COMPRESSED_SIGNED_R11_EAC(): number {
        return this.context.COMPRESSED_SIGNED_R11_EAC;
    }

    get COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT(): number {
        return this.context.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    }

    get COMPRESSED_SIGNED_RED_RGTC1_EXT(): number {
        return this.context.COMPRESSED_SIGNED_RED_RGTC1_EXT;
    }

    get COMPRESSED_SIGNED_RG11_EAC(): number {
        return this.context.COMPRESSED_SIGNED_RG11_EAC;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
    }

    get COMPRESSED_SRGB8_ALPHA8_ETC2_EAC(): number {
        return this.context.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
    }

    get COMPRESSED_SRGB8_ETC2(): number {
        return this.context.COMPRESSED_SRGB8_ETC2;
    }

    get COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2(): number {
        return this.context.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
    }

    get COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT(): number {
        return this.context.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
    }

    get COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT(): number {
        return this.context.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
    }

    get COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT(): number {
        return this.context.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
    }

    get COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT(): number {
        return this.context.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    }

    get COMPRESSED_SRGB_S3TC_DXT1_EXT(): number {
        return this.context.COMPRESSED_SRGB_S3TC_DXT1_EXT;
    }

    get COMPRESSED_TEXTURE_FORMATS(): number {
        return this.context.COMPRESSED_TEXTURE_FORMATS;
    }

    get CONTEXT_LOST_WEBGL(): number {
        return this.context.CONTEXT_LOST_WEBGL;
    }

    get CULL_FACE(): number {
        return this.context.CULL_FACE;
    }

    get CULL_FACE_MODE(): number {
        return this.context.CULL_FACE_MODE;
    }

    get CURRENT_PROGRAM(): number {
        return this.context.CURRENT_PROGRAM;
    }

    get CURRENT_VERTEX_ATTRIB(): number {
        return this.context.CURRENT_VERTEX_ATTRIB;
    }

    get CW(): number {
        return this.context.CW;
    }

    get DECR(): number {
        return this.context.DECR;
    }

    get DECR_WRAP(): number {
        return this.context.DECR_WRAP;
    }

    get DELETE_STATUS(): number {
        return this.context.DELETE_STATUS;
    }

    get DEPTH_ATTACHMENT(): number {
        return this.context.DEPTH_ATTACHMENT;
    }

    get DEPTH_BITS(): number {
        return this.context.DEPTH_BITS;
    }

    get DEPTH_BUFFER_BIT(): number {
        return this.context.DEPTH_BUFFER_BIT;
    }

    get DEPTH_CLEAR_VALUE(): number {
        return this.context.DEPTH_CLEAR_VALUE;
    }

    get DEPTH_COMPONENT16(): number {
        return this.context.DEPTH_COMPONENT16;
    }

    get DEPTH_FUNC(): number {
        return this.context.DEPTH_FUNC;
    }

    get DEPTH_RANGE(): number {
        return this.context.DEPTH_RANGE;
    }

    get DEPTH_STENCIL(): number {
        return this.context.DEPTH_STENCIL;
    }

    get DEPTH_STENCIL_ATTACHMENT(): number {
        return this.context.DEPTH_STENCIL_ATTACHMENT;
    }

    get DEPTH_TEST(): number {
        return this.context.DEPTH_TEST;
    }

    get DEPTH_WRITEMASK(): number {
        return this.context.DEPTH_WRITEMASK;
    }

    get DITHER(): number {
        return this.context.DITHER;
    }

    get DONT_CARE(): number {
        return this.context.DONT_CARE;
    }

    get DYNAMIC_DRAW(): number {
        return this.context.DYNAMIC_DRAW;
    }

    get ELEMENT_ARRAY_BUFFER(): number {
        return this.context.ELEMENT_ARRAY_BUFFER;
    }

    get ELEMENT_ARRAY_BUFFER_BINDING(): number {
        return this.context.ELEMENT_ARRAY_BUFFER_BINDING;
    }

    get EQUAL(): number {
        return this.context.EQUAL;
    }

    get FASTEST(): number {
        return this.context.FASTEST;
    }

    get FLOAT(): number {
        return this.context.FLOAT;
    }

    get FLOAT_MAT2(): number {
        return this.context.FLOAT_MAT2;
    }

    get FLOAT_MAT3(): number {
        return this.context.FLOAT_MAT3;
    }

    get FLOAT_MAT4(): number {
        return this.context.FLOAT_MAT4;
    }

    get FLOAT_VEC2(): number {
        return this.context.FLOAT_VEC2;
    }

    get FLOAT_VEC3(): number {
        return this.context.FLOAT_VEC3;
    }

    get FLOAT_VEC4(): number {
        return this.context.FLOAT_VEC4;
    }

    get FRAGMENT_SHADER(): number {
        return this.context.FRAGMENT_SHADER;
    }

    get FRAGMENT_SHADER_DERIVATIVE_HINT_OES(): number {
        return this.context.FRAGMENT_SHADER_DERIVATIVE_HINT_OES;
    }

    get FRAMEBUFFER(): number {
        return this.context.FRAMEBUFFER;
    }

    get FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT(): number {
        return this.context.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT;
    }

    get FRAMEBUFFER_ATTACHMENT_OBJECT_NAME(): number {
        return this.context.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
    }

    get FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE(): number {
        return this.context.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
    }

    get FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE(): number {
        return this.context.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
    }

    get FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL(): number {
        return this.context.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
    }

    get FRAMEBUFFER_BINDING(): number {
        return this.context.FRAMEBUFFER_BINDING;
    }

    get FRAMEBUFFER_COMPLETE(): number {
        return this.context.FRAMEBUFFER_COMPLETE;
    }

    get FRAMEBUFFER_INCOMPLETE_ATTACHMENT(): number {
        return this.context.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
    }

    get FRAMEBUFFER_INCOMPLETE_DIMENSIONS(): number {
        return this.context.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
    }

    get FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT(): number {
        return this.context.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
    }

    get FRAMEBUFFER_UNSUPPORTED(): number {
        return this.context.FRAMEBUFFER_UNSUPPORTED;
    }

    get FRONT(): number {
        return this.context.FRONT;
    }

    get FRONT_AND_BACK(): number {
        return this.context.FRONT_AND_BACK;
    }

    get FRONT_FACE(): number {
        return this.context.FRONT_FACE;
    }

    get FUNC_ADD(): number {
        return this.context.FUNC_ADD;
    }

    get FUNC_REVERSE_SUBTRACT(): number {
        return this.context.FUNC_REVERSE_SUBTRACT;
    }

    get FUNC_SUBTRACT(): number {
        return this.context.FUNC_SUBTRACT;
    }

    get GENERATE_MIPMAP_HINT(): number {
        return this.context.GENERATE_MIPMAP_HINT;
    }

    get GEQUAL(): number {
        return this.context.GEQUAL;
    }

    get GREATER(): number {
        return this.context.GREATER;
    }

    get GREEN_BITS(): number {
        return this.context.GREEN_BITS;
    }

    get IMPLEMENTATION_COLOR_READ_FORMAT(): number {
        return this.context.IMPLEMENTATION_COLOR_READ_FORMAT;
    }

    get IMPLEMENTATION_COLOR_READ_TYPE(): number {
        return this.context.IMPLEMENTATION_COLOR_READ_TYPE;
    }

    get INCR(): number {
        return this.context.INCR;
    }

    get INCR_WRAP(): number {
        return this.context.INCR_WRAP;
    }

    get INT(): number {
        return this.context.INT;
    }

    get INT_VEC2(): number {
        return this.context.INT_VEC2;
    }

    get INT_VEC3(): number {
        return this.context.INT_VEC3;
    }

    get INT_VEC4(): number {
        return this.context.INT_VEC4;
    }

    get INVALID_ENUM(): number {
        return this.context.INVALID_ENUM;
    }

    get INVALID_FRAMEBUFFER_OPERATION(): number {
        return this.context.INVALID_FRAMEBUFFER_OPERATION;
    }

    get INVALID_OPERATION(): number {
        return this.context.INVALID_OPERATION;
    }

    get INVALID_VALUE(): number {
        return this.context.INVALID_VALUE;
    }

    get INVERT(): number {
        return this.context.INVERT;
    }

    get KEEP(): number {
        return this.context.KEEP;
    }

    get LEQUAL(): number {
        return this.context.LEQUAL;
    }

    get LESS(): number {
        return this.context.LESS;
    }

    get LINEAR(): number {
        return this.context.LINEAR;
    }

    get LINEAR_MIPMAP_LINEAR(): number {
        return this.context.LINEAR_MIPMAP_LINEAR;
    }

    get LINEAR_MIPMAP_NEAREST(): number {
        return this.context.LINEAR_MIPMAP_NEAREST;
    }

    get LINES(): number {
        return this.context.LINES;
    }

    get LINE_LOOP(): number {
        return this.context.LINE_LOOP;
    }

    get LINE_STRIP(): number {
        return this.context.LINE_STRIP;
    }

    get LINE_WIDTH(): number {
        return this.context.LINE_WIDTH;
    }

    get LINK_STATUS(): number {
        return this.context.LINK_STATUS;
    }

    get LUMINANCE(): number {
        return this.context.LUMINANCE;
    }

    get LUMINANCE_ALPHA(): number {
        return this.context.LUMINANCE_ALPHA;
    }

    get MAX_COMBINED_TEXTURE_IMAGE_UNITS(): number {
        return this.context.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
    }

    get MAX_CUBE_MAP_TEXTURE_SIZE(): number {
        return this.context.MAX_CUBE_MAP_TEXTURE_SIZE;
    }

    get MAX_FRAGMENT_UNIFORM_VECTORS(): number {
        return this.context.MAX_FRAGMENT_UNIFORM_VECTORS;
    }

    get MAX_RENDERBUFFER_SIZE(): number {
        return this.context.MAX_RENDERBUFFER_SIZE;
    }

    get MAX_TEXTURE_IMAGE_UNITS(): number {
        return this.context.MAX_TEXTURE_IMAGE_UNITS;
    }

    get MAX_TEXTURE_SIZE(): number {
        return this.context.MAX_TEXTURE_SIZE;
    }

    get MAX_VARYING_VECTORS(): number {
        return this.context.MAX_VARYING_VECTORS;
    }

    get MAX_VERTEX_ATTRIBS(): number {
        return this.context.MAX_VERTEX_ATTRIBS;
    }

    get MAX_VERTEX_TEXTURE_IMAGE_UNITS(): number {
        return this.context.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    }

    get MAX_VERTEX_UNIFORM_VECTORS(): number {
        return this.context.MAX_VERTEX_UNIFORM_VECTORS;
    }

    get MAX_VIEWPORT_DIMS(): number {
        return this.context.MAX_VIEWPORT_DIMS;
    }

    get MIRRORED_REPEAT(): number {
        return this.context.MIRRORED_REPEAT;
    }

    get NEAREST(): number {
        return this.context.NEAREST;
    }

    get NEAREST_MIPMAP_LINEAR(): number {
        return this.context.NEAREST_MIPMAP_LINEAR;
    }

    get NEAREST_MIPMAP_NEAREST(): number {
        return this.context.NEAREST_MIPMAP_NEAREST;
    }

    get NEVER(): number {
        return this.context.NEVER;
    }

    get NICEST(): number {
        return this.context.NICEST;
    }

    get NOTEQUAL(): number {
        return this.context.NOTEQUAL;
    }

    get NO_ERROR(): number {
        return this.context.NO_ERROR;
    }

    get ONE(): number {
        return this.context.ONE;
    }

    get OUT_OF_MEMORY(): number {
        return this.context.OUT_OF_MEMORY;
    }

    get PACK_ALIGNMENT(): number {
        return this.context.PACK_ALIGNMENT;
    }

    get POINTS(): number {
        return this.context.POINTS;
    }

    get POLYGON_OFFSET_FACTOR(): number {
        return this.context.POLYGON_OFFSET_FACTOR;
    }

    get POLYGON_OFFSET_FILL(): number {
        return this.context.POLYGON_OFFSET_FILL;
    }

    get POLYGON_OFFSET_UNITS(): number {
        return this.context.POLYGON_OFFSET_UNITS;
    }

    get RED_BITS(): number {
        return this.context.RED_BITS;
    }

    get RENDERBUFFER(): number {
        return this.context.RENDERBUFFER;
    }

    get RENDERBUFFER_ALPHA_SIZE(): number {
        return this.context.RENDERBUFFER_ALPHA_SIZE;
    }

    get RENDERBUFFER_BINDING(): number {
        return this.context.RENDERBUFFER_BINDING;
    }

    get RENDERBUFFER_BLUE_SIZE(): number {
        return this.context.RENDERBUFFER_BLUE_SIZE;
    }

    get RENDERBUFFER_DEPTH_SIZE(): number {
        return this.context.RENDERBUFFER_DEPTH_SIZE;
    }

    get RENDERBUFFER_GREEN_SIZE(): number {
        return this.context.RENDERBUFFER_GREEN_SIZE;
    }

    get RENDERBUFFER_HEIGHT(): number {
        return this.context.RENDERBUFFER_HEIGHT;
    }

    get RENDERBUFFER_INTERNAL_FORMAT(): number {
        return this.context.RENDERBUFFER_INTERNAL_FORMAT;
    }

    get RENDERBUFFER_RED_SIZE(): number {
        return this.context.RENDERBUFFER_RED_SIZE;
    }

    get RENDERBUFFER_STENCIL_SIZE(): number {
        return this.context.RENDERBUFFER_STENCIL_SIZE;
    }

    get RENDERBUFFER_WIDTH(): number {
        return this.context.RENDERBUFFER_WIDTH;
    }

    get RENDERER(): number {
        return this.context.RENDERER;
    }

    get REPEAT(): number {
        return this.context.REPEAT;
    }

    get REPLACE(): number {
        return this.context.REPLACE;
    }

    get RGB(): number {
        return this.context.RGB;
    }

    get RGB32F_EXT(): number {
        return this.context.RGB32F_EXT;
    }

    get RGB565(): number {
        return this.context.RGB565;
    }

    get RGB5_A1(): number {
        return this.context.RGB5_A1;
    }

    get RGBA(): number {
        return this.context.RGBA;
    }

    get RGBA32F_EXT(): number {
        return this.context.RGBA32F_EXT;
    }

    get RGBA4(): number {
        return this.context.RGBA4;
    }

    get SAMPLER_2D(): number {
        return this.context.SAMPLER_2D;
    }

    get SAMPLER_CUBE(): number {
        return this.context.SAMPLER_CUBE;
    }

    get SAMPLES(): number {
        return this.context.SAMPLES;
    }

    get SAMPLE_ALPHA_TO_COVERAGE(): number {
        return this.context.SAMPLE_ALPHA_TO_COVERAGE;
    }

    get SAMPLE_BUFFERS(): number {
        return this.context.SAMPLE_BUFFERS;
    }

    get SAMPLE_COVERAGE(): number {
        return this.context.SAMPLE_COVERAGE;
    }

    get SAMPLE_COVERAGE_INVERT(): number {
        return this.context.SAMPLE_COVERAGE_INVERT;
    }

    get SAMPLE_COVERAGE_VALUE(): number {
        return this.context.SAMPLE_COVERAGE_VALUE;
    }

    get SCISSOR_BOX(): number {
        return this.context.SCISSOR_BOX;
    }

    get SCISSOR_TEST(): number {
        return this.context.SCISSOR_TEST;
    }

    get SHADER_TYPE(): number {
        return this.context.SHADER_TYPE;
    }

    get SHADING_LANGUAGE_VERSION(): number {
        return this.context.SHADING_LANGUAGE_VERSION;
    }

    get SRGB8_ALPHA8_EXT(): number {
        return this.context.SRGB8_ALPHA8_EXT;
    }

    get STATIC_DRAW(): number {
        return this.context.STATIC_DRAW;
    }

    get STENCIL_ATTACHMENT(): number {
        return this.context.STENCIL_ATTACHMENT;
    }

    get STENCIL_BACK_FAIL(): number {
        return this.context.STENCIL_BACK_FAIL;
    }

    get STENCIL_BACK_FUNC(): number {
        return this.context.STENCIL_BACK_FUNC;
    }

    get STENCIL_BACK_PASS_DEPTH_FAIL(): number {
        return this.context.STENCIL_BACK_PASS_DEPTH_FAIL;
    }

    get STENCIL_BACK_PASS_DEPTH_PASS(): number {
        return this.context.STENCIL_BACK_PASS_DEPTH_PASS;
    }

    get STENCIL_BACK_REF(): number {
        return this.context.STENCIL_BACK_REF;
    }

    get STENCIL_BACK_VALUE_MASK(): number {
        return this.context.STENCIL_BACK_VALUE_MASK;
    }

    get STENCIL_BACK_WRITEMASK(): number {
        return this.context.STENCIL_BACK_WRITEMASK;
    }

    get STENCIL_BITS(): number {
        return this.context.STENCIL_BITS;
    }

    get STENCIL_BUFFER_BIT(): number {
        return this.context.STENCIL_BUFFER_BIT;
    }

    get STENCIL_CLEAR_VALUE(): number {
        return this.context.STENCIL_CLEAR_VALUE;
    }

    get STENCIL_FAIL(): number {
        return this.context.STENCIL_FAIL;
    }

    get STENCIL_FUNC(): number {
        return this.context.STENCIL_FUNC;
    }

    get STENCIL_INDEX8(): number {
        return this.context.STENCIL_INDEX8;
    }

    get STENCIL_PASS_DEPTH_FAIL(): number {
        return this.context.STENCIL_PASS_DEPTH_FAIL;
    }

    get STENCIL_PASS_DEPTH_PASS(): number {
        return this.context.STENCIL_PASS_DEPTH_PASS;
    }

    get STENCIL_REF(): number {
        return this.context.STENCIL_REF;
    }

    get STENCIL_TEST(): number {
        return this.context.STENCIL_TEST;
    }

    get STENCIL_VALUE_MASK(): number {
        return this.context.STENCIL_VALUE_MASK;
    }

    get STENCIL_WRITEMASK(): number {
        return this.context.STENCIL_WRITEMASK;
    }

    get STREAM_DRAW(): number {
        return this.context.STREAM_DRAW;
    }

    get SUBPIXEL_BITS(): number {
        return this.context.SUBPIXEL_BITS;
    }

    get TEXTURE0(): number {
        return this.context.TEXTURE0;
    }

    get TEXTURE1(): number {
        return this.context.TEXTURE1;
    }

    get TEXTURE10(): number {
        return this.context.TEXTURE10;
    }

    get TEXTURE11(): number {
        return this.context.TEXTURE11;
    }

    get TEXTURE12(): number {
        return this.context.TEXTURE12;
    }

    get TEXTURE13(): number {
        return this.context.TEXTURE13;
    }

    get TEXTURE14(): number {
        return this.context.TEXTURE14;
    }

    get TEXTURE15(): number {
        return this.context.TEXTURE15;
    }

    get TEXTURE16(): number {
        return this.context.TEXTURE16;
    }

    get TEXTURE17(): number {
        return this.context.TEXTURE17;
    }

    get TEXTURE18(): number {
        return this.context.TEXTURE18;
    }

    get TEXTURE19(): number {
        return this.context.TEXTURE19;
    }

    get TEXTURE2(): number {
        return this.context.TEXTURE2;
    }

    get TEXTURE20(): number {
        return this.context.TEXTURE20;
    }

    get TEXTURE21(): number {
        return this.context.TEXTURE21;
    }

    get TEXTURE22(): number {
        return this.context.TEXTURE22;
    }

    get TEXTURE23(): number {
        return this.context.TEXTURE23;
    }

    get TEXTURE24(): number {
        return this.context.TEXTURE24;
    }

    get TEXTURE25(): number {
        return this.context.TEXTURE25;
    }

    get TEXTURE26(): number {
        return this.context.TEXTURE26;
    }

    get TEXTURE27(): number {
        return this.context.TEXTURE27;
    }

    get TEXTURE28(): number {
        return this.context.TEXTURE28;
    }

    get TEXTURE29(): number {
        return this.context.TEXTURE29;
    }

    get TEXTURE3(): number {
        return this.context.TEXTURE3;
    }

    get TEXTURE30(): number {
        return this.context.TEXTURE30;
    }

    get TEXTURE31(): number {
        return this.context.TEXTURE31;
    }

    get TEXTURE4(): number {
        return this.context.TEXTURE4;
    }

    get TEXTURE5(): number {
        return this.context.TEXTURE5;
    }

    get TEXTURE6(): number {
        return this.context.TEXTURE6;
    }

    get TEXTURE7(): number {
        return this.context.TEXTURE7;
    }

    get TEXTURE8(): number {
        return this.context.TEXTURE8;
    }

    get TEXTURE9(): number {
        return this.context.TEXTURE9;
    }

    get TEXTURE_2D(): number {
        return this.context.TEXTURE_2D;
    }

    get TEXTURE_BINDING_2D(): number {
        return this.context.TEXTURE_BINDING_2D;
    }

    get TEXTURE_BINDING_CUBE_MAP(): number {
        return this.context.TEXTURE_BINDING_CUBE_MAP;
    }

    get TEXTURE_CUBE_MAP(): number {
        return this.context.TEXTURE_CUBE_MAP;
    }

    get TEXTURE_CUBE_MAP_NEGATIVE_X(): number {
        return this.context.TEXTURE_CUBE_MAP_NEGATIVE_X;
    }

    get TEXTURE_CUBE_MAP_NEGATIVE_Y(): number {
        return this.context.TEXTURE_CUBE_MAP_NEGATIVE_Y;
    }

    get TEXTURE_CUBE_MAP_NEGATIVE_Z(): number {
        return this.context.TEXTURE_CUBE_MAP_NEGATIVE_Z;
    }

    get TEXTURE_CUBE_MAP_POSITIVE_X(): number {
        return this.context.TEXTURE_CUBE_MAP_POSITIVE_X;
    }

    get TEXTURE_CUBE_MAP_POSITIVE_Y(): number {
        return this.context.TEXTURE_CUBE_MAP_POSITIVE_Y;
    }

    get TEXTURE_CUBE_MAP_POSITIVE_Z(): number {
        return this.context.TEXTURE_CUBE_MAP_POSITIVE_Z;
    }

    get TEXTURE_MAG_FILTER(): number {
        return this.context.TEXTURE_MAG_FILTER;
    }

    get TEXTURE_MAX_ANISOTROPY_EXT(): number {
        return this.context.TEXTURE_MAX_ANISOTROPY_EXT;
    }

    get TEXTURE_MIN_FILTER(): number {
        return this.context.TEXTURE_MIN_FILTER;
    }

    get TEXTURE_WRAP_S(): number {
        return this.context.TEXTURE_WRAP_S;
    }

    get TEXTURE_WRAP_T(): number {
        return this.context.TEXTURE_WRAP_T;
    }

    get TRIANGLES(): number {
        return this.context.TRIANGLES;
    }

    get TRIANGLE_FAN(): number {
        return this.context.TRIANGLE_FAN;
    }

    get TRIANGLE_STRIP(): number {
        return this.context.TRIANGLE_STRIP;
    }

    get UNPACK_ALIGNMENT(): number {
        return this.context.UNPACK_ALIGNMENT;
    }

    get UNPACK_COLORSPACE_CONVERSION_WEBGL(): number {
        return this.context.UNPACK_COLORSPACE_CONVERSION_WEBGL;
    }

    get UNPACK_FLIP_Y_WEBGL(): number {
        return this.context.UNPACK_FLIP_Y_WEBGL;
    }

    get UNPACK_PREMULTIPLY_ALPHA_WEBGL(): number {
        return this.context.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
    }

    get UNSIGNED_BYTE(): number {
        return this.context.UNSIGNED_BYTE;
    }

    get UNSIGNED_INT(): number {
        return this.context.UNSIGNED_INT;
    }

    get UNSIGNED_SHORT(): number {
        return this.context.UNSIGNED_SHORT;
    }

    get UNSIGNED_SHORT_4_4_4_4(): number {
        return this.context.UNSIGNED_SHORT_4_4_4_4;
    }

    get UNSIGNED_SHORT_5_5_5_1(): number {
        return this.context.UNSIGNED_SHORT_5_5_5_1;
    }

    get UNSIGNED_SHORT_5_6_5(): number {
        return this.context.UNSIGNED_SHORT_5_6_5;
    }

    get VALIDATE_STATUS(): number {
        return this.context.VALIDATE_STATUS;
    }

    get VENDOR(): number {
        return this.context.VENDOR;
    }

    get VERSION(): number {
        return this.context.VERSION;
    }

    get VERTEX_ATTRIB_ARRAY_BUFFER_BINDING(): number {
        return this.context.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
    }

    get VERTEX_ATTRIB_ARRAY_ENABLED(): number {
        return this.context.VERTEX_ATTRIB_ARRAY_ENABLED;
    }

    get VERTEX_ATTRIB_ARRAY_NORMALIZED(): number {
        return this.context.VERTEX_ATTRIB_ARRAY_NORMALIZED;
    }

    get VERTEX_ATTRIB_ARRAY_POINTER(): number {
        return this.context.VERTEX_ATTRIB_ARRAY_POINTER;
    }

    get VERTEX_ATTRIB_ARRAY_SIZE(): number {
        return this.context.VERTEX_ATTRIB_ARRAY_SIZE;
    }

    get VERTEX_ATTRIB_ARRAY_STRIDE(): number {
        return this.context.VERTEX_ATTRIB_ARRAY_STRIDE;
    }

    get VERTEX_ATTRIB_ARRAY_TYPE(): number {
        return this.context.VERTEX_ATTRIB_ARRAY_TYPE;
    }

    get VERTEX_SHADER(): number {
        return this.context.VERTEX_SHADER;
    }

    get VIEWPORT(): number {
        return this.context.VIEWPORT;
    }

    get ZERO(): number {
        return this.context.ZERO;
    }
}
