import { ContainerView, CSSType } from 'tns-core-modules/ui/core/view';
import { GestureStateTypes } from 'tns-core-modules/ui/gestures/gestures';
import { screen } from 'tns-core-modules/platform';

export * from 'tns-core-modules/ui/core/view';

@CSSType('TNSCanvas')
export abstract class TNSCanvasBase extends ContainerView {
    _touchEvents: any;

    constructor() {
        super();
        this._touchEvents = this._touchEventsFN.bind(this);
        this.on('touch, pan', this._touchEvents);
    }

    private _emitEvent(name, event) {
        this.notify(this._getTouchEvent(name, event, this));
    }

    private _touchEventsFN(event: any) {
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


    private _getTouchEvent(name, event, target) {
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

    public abstract getContext(type: string): TNSCanvasRenderingContext | null;

    public abstract getContext(type: string, options: any): TNSCanvasRenderingContext | null;

    public abstract getBoundingClientRect(): { x: number, y: number, width: number, height: number, top: number, right: number, bottom: number, left: number }
}

class TouchList extends Array {
    item(index: number) {
        return this[index];
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
    };

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

    readonly ACTIVE_ATTRIBUTES: number;

    readonly ACTIVE_TEXTURE: number;

    readonly ACTIVE_UNIFORMS: number;

    readonly ALIASED_LINE_WIDTH_RANGE: number;

    readonly ALIASED_POINT_SIZE_RANGE: number;

    readonly ALPHA: number;

    readonly ALPHA_BITS: number;

    readonly ALWAYS: number;

    readonly ARRAY_BUFFER: number;

    readonly ARRAY_BUFFER_BINDING: number;

    readonly ATTACHED_SHADERS: number;

    readonly BACK: number;

    readonly BLEND: number;

    readonly BLEND_COLOR: number;

    readonly BLEND_DST_ALPHA: number;

    readonly BLEND_DST_RGB: number;

    readonly BLEND_EQUATION: number;

    readonly BLEND_EQUATION_ALPHA: number;

    readonly BLEND_EQUATION_RGB: number;

    readonly BLEND_SRC_ALPHA: number;

    readonly BLEND_SRC_RGB: number;

    readonly BLUE_BITS: number;

    readonly BOOL: number;

    readonly BOOL_VEC2: number;

    readonly BOOL_VEC3: number;

    readonly BOOL_VEC4: number;

    readonly CCW: number;

    readonly CLAMP_TO_EDGE: number;

    readonly COLOR_ATTACHMENT0: number;

    readonly COLOR_ATTACHMENT0_WEBGL: number;

    readonly COLOR_ATTACHMENT10_WEBGL: number;

    readonly COLOR_ATTACHMENT11_WEBGL: number;

    readonly COLOR_ATTACHMENT12_WEBGL: number;

    readonly COLOR_ATTACHMENT13_WEBGL: number;

    readonly COLOR_ATTACHMENT14_WEBGL: number;

    readonly COLOR_ATTACHMENT15_WEBGL: number;

    readonly COLOR_ATTACHMENT1_WEBGL: number;

    readonly COLOR_ATTACHMENT2_WEBGL: number;

    readonly COLOR_ATTACHMENT3_WEBGL: number;

    readonly COLOR_ATTACHMENT4_WEBGL: number;

    readonly COLOR_ATTACHMENT5_WEBGL: number;

    readonly COLOR_ATTACHMENT6_WEBGL: number;

    readonly COLOR_ATTACHMENT7_WEBGL: number;

    readonly COLOR_ATTACHMENT8_WEBGL: number;

    readonly COLOR_ATTACHMENT9_WEBGL: number;

    readonly COLOR_BUFFER_BIT: number;

    readonly COLOR_CLEAR_VALUE: number;

    readonly COLOR_WRITEMASK: number;

    readonly COMPILE_STATUS: number;

    readonly COMPRESSED_R11_EAC: number;

    readonly COMPRESSED_RED_GREEN_RGTC2_EXT: number;

    readonly COMPRESSED_RED_RGTC1_EXT: number;

    readonly COMPRESSED_RG11_EAC: number;

    readonly COMPRESSED_RGB8_ETC2: number;

    readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;

    readonly COMPRESSED_RGBA8_ETC2_EAC: number;

    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: number;

    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: number;

    readonly COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;

    readonly COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;

    readonly COMPRESSED_RGBA_BPTC_UNORM_EXT: number;

    readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;

    readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;

    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: number;

    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: number;

    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: number;

    readonly COMPRESSED_RGB_ATC_WEBGL: number;

    readonly COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: number;

    readonly COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: number;

    readonly COMPRESSED_RGB_ETC1_WEBGL: number;

    readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;

    readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;

    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: number;

    readonly COMPRESSED_SIGNED_R11_EAC: number;

    readonly COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: number;

    readonly COMPRESSED_SIGNED_RED_RGTC1_EXT: number;

    readonly COMPRESSED_SIGNED_RG11_EAC: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;

    readonly COMPRESSED_SRGB8_ETC2: number;

    readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;

    readonly COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: number;

    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: number;

    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: number;

    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: number;

    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: number;

    readonly COMPRESSED_TEXTURE_FORMATS: number;

    readonly CONTEXT_LOST_WEBGL: number;

    readonly CULL_FACE: number;

    readonly CULL_FACE_MODE: number;

    readonly CURRENT_PROGRAM: number;

    readonly CURRENT_VERTEX_ATTRIB: number;

    readonly CW: number;

    readonly DECR: number;

    readonly DECR_WRAP: number;

    readonly DELETE_STATUS: number;

    readonly DEPTH_ATTACHMENT: number;

    readonly DEPTH_BITS: number;

    readonly DEPTH_BUFFER_BIT: number;

    readonly DEPTH_CLEAR_VALUE: number;

    readonly DEPTH_COMPONENT16: number;

    readonly DEPTH_FUNC: number;

    readonly DEPTH_RANGE: number;

    readonly DEPTH_STENCIL: number;

    readonly DEPTH_STENCIL_ATTACHMENT: number;

    readonly DEPTH_TEST: number;

    readonly DEPTH_WRITEMASK: number;

    readonly DITHER: number;

    readonly DONT_CARE: number;

    readonly DYNAMIC_DRAW: number;

    readonly ELEMENT_ARRAY_BUFFER: number;

    readonly ELEMENT_ARRAY_BUFFER_BINDING: number;

    readonly EQUAL: number;

    readonly FASTEST: number;

    readonly FLOAT: number;

    readonly FLOAT_MAT2: number;

    readonly FLOAT_MAT3: number;

    readonly FLOAT_MAT4: number;

    readonly FLOAT_VEC2: number;

    readonly FLOAT_VEC3: number;

    readonly FLOAT_VEC4: number;

    readonly FRAGMENT_SHADER: number;

    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;

    readonly FRAMEBUFFER: number;

    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;

    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;

    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;

    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;

    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;

    readonly FRAMEBUFFER_BINDING: number;

    readonly FRAMEBUFFER_COMPLETE: number;

    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;

    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;

    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;

    readonly FRAMEBUFFER_UNSUPPORTED: number;

    readonly FRONT: number;

    readonly FRONT_AND_BACK: number;

    readonly FRONT_FACE: number;

    readonly FUNC_ADD: number;

    readonly FUNC_REVERSE_SUBTRACT: number;

    readonly FUNC_SUBTRACT: number;

    readonly GENERATE_MIPMAP_HINT: number;

    readonly GEQUAL: number;

    readonly GREATER: number;

    readonly GREEN_BITS: number;

    readonly IMPLEMENTATION_COLOR_READ_FORMAT: number;

    readonly IMPLEMENTATION_COLOR_READ_TYPE: number;

    readonly INCR: number;

    readonly INCR_WRAP: number;

    readonly INT: number;

    readonly INT_VEC2: number;

    readonly INT_VEC3: number;

    readonly INT_VEC4: number;

    readonly INVALID_ENUM: number;

    readonly INVALID_FRAMEBUFFER_OPERATION: number;

    readonly INVALID_OPERATION: number;

    readonly INVALID_VALUE: number;

    readonly INVERT: number;

    readonly KEEP: number;

    readonly LEQUAL: number;

    readonly LESS: number;

    readonly LINEAR: number;

    readonly LINEAR_MIPMAP_LINEAR: number;

    readonly LINEAR_MIPMAP_NEAREST: number;

    readonly LINES: number;

    readonly LINE_LOOP: number;

    readonly LINE_STRIP: number;

    readonly LINE_WIDTH: number;

    readonly LINK_STATUS: number;

    readonly LUMINANCE: number;

    readonly LUMINANCE_ALPHA: number;

    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;

    readonly MAX_CUBE_MAP_TEXTURE_SIZE: number;

    readonly MAX_FRAGMENT_UNIFORM_VECTORS: number;

    readonly MAX_RENDERBUFFER_SIZE: number;

    readonly MAX_TEXTURE_IMAGE_UNITS: number;

    readonly MAX_TEXTURE_SIZE: number;

    readonly MAX_VARYING_VECTORS: number;

    readonly MAX_VERTEX_ATTRIBS: number;

    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;

    readonly MAX_VERTEX_UNIFORM_VECTORS: number;

    readonly MAX_VIEWPORT_DIMS: number;

    readonly MIRRORED_REPEAT: number;

    readonly NEAREST: number;

    readonly NEAREST_MIPMAP_LINEAR: number;

    readonly NEAREST_MIPMAP_NEAREST: number;

    readonly NEVER: number;

    readonly NICEST: number;

    readonly NOTEQUAL: number;

    readonly NO_ERROR: number;

    readonly ONE: number;

    readonly OUT_OF_MEMORY: number;

    readonly PACK_ALIGNMENT: number;

    readonly POINTS: number;

    readonly POLYGON_OFFSET_FACTOR: number;

    readonly POLYGON_OFFSET_FILL: number;

    readonly POLYGON_OFFSET_UNITS: number;

    readonly RED_BITS: number;

    readonly RENDERBUFFER: number;

    readonly RENDERBUFFER_ALPHA_SIZE: number;

    readonly RENDERBUFFER_BINDING: number;

    readonly RENDERBUFFER_BLUE_SIZE: number;

    readonly RENDERBUFFER_DEPTH_SIZE: number;

    readonly RENDERBUFFER_GREEN_SIZE: number;

    readonly RENDERBUFFER_HEIGHT: number;

    readonly RENDERBUFFER_INTERNAL_FORMAT: number;

    readonly RENDERBUFFER_RED_SIZE: number;

    readonly RENDERBUFFER_STENCIL_SIZE: number;

    readonly RENDERBUFFER_WIDTH: number;

    readonly RENDERER: number;

    readonly REPEAT: number;

    readonly REPLACE: number;

    readonly RGB: number;

    readonly RGB32F_EXT: number;

    readonly RGB565: number;

    readonly RGB5_A1: number;

    readonly RGBA: number;

    readonly RGBA32F_EXT: number;

    readonly RGBA4: number;

    readonly SAMPLER_2D: number;

    readonly SAMPLER_CUBE: number;

    readonly SAMPLES: number;

    readonly SAMPLE_ALPHA_TO_COVERAGE: number;

    readonly SAMPLE_BUFFERS: number;

    readonly SAMPLE_COVERAGE: number;

    readonly SAMPLE_COVERAGE_INVERT: number;

    readonly SAMPLE_COVERAGE_VALUE: number;

    readonly SCISSOR_BOX: number;

    readonly SCISSOR_TEST: number;

    readonly SHADER_TYPE: number;

    readonly SHADING_LANGUAGE_VERSION: number;

    readonly SRGB8_ALPHA8_EXT: number;

    readonly STATIC_DRAW: number;

    readonly STENCIL_ATTACHMENT: number;

    readonly STENCIL_BACK_FAIL: number;

    readonly STENCIL_BACK_FUNC: number;

    readonly STENCIL_BACK_PASS_DEPTH_FAIL: number;

    readonly STENCIL_BACK_PASS_DEPTH_PASS: number;

    readonly STENCIL_BACK_REF: number;

    readonly STENCIL_BACK_VALUE_MASK: number;

    readonly STENCIL_BACK_WRITEMASK: number;

    readonly STENCIL_BITS: number;

    readonly STENCIL_BUFFER_BIT: number;

    readonly STENCIL_CLEAR_VALUE: number;

    readonly STENCIL_FAIL: number;

    readonly STENCIL_FUNC: number;

    readonly STENCIL_INDEX8: number;

    readonly STENCIL_PASS_DEPTH_FAIL: number;

    readonly STENCIL_PASS_DEPTH_PASS: number;

    readonly STENCIL_REF: number;

    readonly STENCIL_TEST: number;

    readonly STENCIL_VALUE_MASK: number;

    readonly STENCIL_WRITEMASK: number;

    readonly STREAM_DRAW: number;

    readonly SUBPIXEL_BITS: number;

    readonly TEXTURE0: number;

    readonly TEXTURE1: number;

    readonly TEXTURE10: number;

    readonly TEXTURE11: number;

    readonly TEXTURE12: number;

    readonly TEXTURE13: number;

    readonly TEXTURE14: number;

    readonly TEXTURE15: number;

    readonly TEXTURE16: number;

    readonly TEXTURE17: number;

    readonly TEXTURE18: number;

    readonly TEXTURE19: number;

    readonly TEXTURE2: number;

    readonly TEXTURE20: number;

    readonly TEXTURE21: number;

    readonly TEXTURE22: number;

    readonly TEXTURE23: number;

    readonly TEXTURE24: number;

    readonly TEXTURE25: number;

    readonly TEXTURE26: number;

    readonly TEXTURE27: number;

    readonly TEXTURE28: number;

    readonly TEXTURE29: number;

    readonly TEXTURE3: number;

    readonly TEXTURE30: number;

    readonly TEXTURE31: number;

    readonly TEXTURE4: number;

    readonly TEXTURE5: number;

    readonly TEXTURE6: number;

    readonly TEXTURE7: number;

    readonly TEXTURE8: number;

    readonly TEXTURE9: number;

    readonly TEXTURE_2D: number;

    readonly TEXTURE_BINDING_2D: number;

    readonly TEXTURE_BINDING_CUBE_MAP: number;

    readonly TEXTURE_CUBE_MAP: number;

    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: number;

    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: number;

    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: number;

    readonly TEXTURE_CUBE_MAP_POSITIVE_X: number;

    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: number;

    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: number;

    readonly TEXTURE_MAG_FILTER: number;

    readonly TEXTURE_MAX_ANISOTROPY_EXT: number;

    readonly TEXTURE_MIN_FILTER: number;

    readonly TEXTURE_WRAP_S: number;

    readonly TEXTURE_WRAP_T: number;

    readonly TRIANGLES: number;

    readonly TRIANGLE_FAN: number;

    readonly TRIANGLE_STRIP: number;

    readonly UNPACK_ALIGNMENT: number;

    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: number;

    readonly UNPACK_FLIP_Y_WEBGL: number;

    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;

    readonly UNSIGNED_BYTE: number;

    readonly UNSIGNED_INT: number;

    readonly UNSIGNED_SHORT: number;

    readonly UNSIGNED_SHORT_4_4_4_4: number;

    readonly UNSIGNED_SHORT_5_5_5_1: number;

    readonly UNSIGNED_SHORT_5_6_5: number;

    readonly VALIDATE_STATUS: number;

    readonly VENDOR: number;

    readonly VERSION: number;

    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;

    readonly VERTEX_ATTRIB_ARRAY_ENABLED: number;

    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: number;

    readonly VERTEX_ATTRIB_ARRAY_POINTER: number;

    readonly VERTEX_ATTRIB_ARRAY_SIZE: number;

    readonly VERTEX_ATTRIB_ARRAY_STRIDE: number;

    readonly VERTEX_ATTRIB_ARRAY_TYPE: number;

    readonly VERTEX_SHADER: number;

    readonly VIEWPORT: number;

    readonly ZERO: number;

    readonly drawingBufferHeight: number;

    readonly drawingBufferWidth: number;

    _canvas: any;
    get canvas(): any {
        return this._canvas;
    };

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

    abstract getContextAttributes(): any

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

    abstract getSupportedExtensions(): string[]

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
    protected nativeInstance: any;

    constructor(nativeInstance: any) {
        this.nativeInstance = nativeInstance;
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
