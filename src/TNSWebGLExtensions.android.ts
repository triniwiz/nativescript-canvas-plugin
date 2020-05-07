export class EXT_blend_minmax {
    readonly MAX_EXT: number;
    readonly MIN_EXT: number;

    constructor(nativeInstance) {
        this.MAX_EXT = nativeInstance.MAX_EXT;
        this.MIN_EXT = nativeInstance.MIN_EXT;
    }
}

export class EXT_color_buffer_float {
    readonly R11F_G11F_B10F: number;

    readonly R16F: number;

    readonly R32F: number;

    readonly RG16F: number;

    readonly RG32F: number;

    readonly RGB16F: number;

    readonly RGBA32F: number;

    constructor(nativeInstance) {
        this.R11F_G11F_B10F = nativeInstance.R11F_G11F_B10F;
        this.R16F = nativeInstance.R16F;
        this.R32F = nativeInstance.R32F;
        this.RG16F = nativeInstance.RG16F;
        this.RG32F = nativeInstance.RG32F;
        this.RGB16F = nativeInstance.RGB16F;
        this.RGBA32F = nativeInstance.RGBA32F;
    }
}

export class EXT_color_buffer_half_float {
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;

    readonly RGB16F_EXT: number;

    readonly RGBA16F_EXT: number;

    readonly UNSIGNED_NORMALIZED_EXT: number;

    constructor(nativeInstance) {
        this.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT =
            nativeInstance.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;
        this.RGB16F_EXT = nativeInstance.RGB16F_EXT;
        this.RGBA16F_EXT = nativeInstance.RGBA16F_EXT;
        this.UNSIGNED_NORMALIZED_EXT = nativeInstance.UNSIGNED_NORMALIZED_EXT;
    }
}

export class EXT_sRGB {
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;

    readonly SRGB8_ALPHA8_EXT: number;

    readonly SRGB_ALPHA_EXT: number;

    readonly SRGB_EXT: number;

    constructor(nativeInstance) {
        this.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT =
            nativeInstance.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT;
        this.SRGB8_ALPHA8_EXT = nativeInstance.SRGB8_ALPHA8_EXT;
        this.SRGB_ALPHA_EXT = nativeInstance.SRGB_ALPHA_EXT;
        this.SRGB_EXT = nativeInstance.SRGB_EXT;
    }
}

export class EXT_shader_texture_lod {
    constructor(nativeInstance) {
    }
}

export class EXT_texture_filter_anisotropic {
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;

    readonly TEXTURE_MAX_ANISOTROPY_EXT: number;

    constructor(nativeInstance) {
        this.MAX_TEXTURE_MAX_ANISOTROPY_EXT =
            nativeInstance.MAX_TEXTURE_MAX_ANISOTROPY_EXT;
        this.TEXTURE_MAX_ANISOTROPY_EXT = nativeInstance.TEXTURE_MAX_ANISOTROPY_EXT;
    }
}

export class OES_element_index_uint {
    readonly UNSIGNED_INT: number;

    constructor(nativeInstance) {
        this.UNSIGNED_INT = nativeInstance.UNSIGNED_INT;
    }
}

export class OES_fbo_render_mipmap {
    constructor(nativeInstance) {
    }
}

export class OES_standard_derivatives {
    constructor(nativeInstance) {
    }
}

export class OES_texture_float {
    constructor(nativeInstance) {
    }
}

export class OES_texture_float_linear {
    constructor(nativeInstance) {
    }
}

export class OES_texture_half_float {
    readonly HALF_FLOAT_OES: number;

    constructor(nativeInstance) {
        this.HALF_FLOAT_OES = nativeInstance.HALF_FLOAT_OES;
    }
}

export class OES_texture_half_float_linear {
    constructor(nativeInstance) {
    }
}

export class OES_vertex_array_object {
    readonly VERTEX_ARRAY_BINDING_OES;

    constructor(nativeInstance) {
        this.VERTEX_ARRAY_BINDING_OES = nativeInstance.VERTEX_ARRAY_BINDING_OES;
    }

}

export class WEBGL_color_buffer_float {
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;

    readonly RGB32F_EXT: number;

    readonly RGBA32F_EXT: number;

    readonly UNSIGNED_NORMALIZED_EXT: number;

    constructor(nativeInstance) {
        this.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT =
            nativeInstance.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;
        this.RGB32F_EXT = nativeInstance.RGB32F_EXT;
        this.RGBA32F_EXT = nativeInstance.RGBA32F_EXT;
        this.UNSIGNED_NORMALIZED_EXT = nativeInstance.UNSIGNED_NORMALIZED_EXT;
    }
}

export class WEBGL_compressed_texture_etc {
    readonly COMPRESSED_R11_EAC: number;

    readonly COMPRESSED_RG11_EAC: number;

    readonly COMPRESSED_RGB8_ETC2: number;

    readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;

    readonly COMPRESSED_RGBA8_ETC2_EAC: number;

    readonly COMPRESSED_SIGNED_R11_EAC: number;

    readonly COMPRESSED_SIGNED_RG11_EAC: number;

    readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;

    readonly COMPRESSED_SRGB8_ETC2: number;

    readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;

    constructor(nativeInstance) {
        this.COMPRESSED_R11_EAC = nativeInstance.COMPRESSED_R11_EAC;
        this.COMPRESSED_RG11_EAC = nativeInstance.COMPRESSED_RG11_EAC;
        this.COMPRESSED_RGB8_ETC2 = nativeInstance.COMPRESSED_RGB8_ETC2;
        this.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 =
            nativeInstance.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
        this.COMPRESSED_RGBA8_ETC2_EAC = nativeInstance.COMPRESSED_RGBA8_ETC2_EAC;
        this.COMPRESSED_SIGNED_R11_EAC = nativeInstance.COMPRESSED_SIGNED_R11_EAC;
        this.COMPRESSED_SIGNED_RG11_EAC = nativeInstance.COMPRESSED_SIGNED_RG11_EAC;
        this.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC =
            nativeInstance.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
        this.COMPRESSED_SRGB8_ETC2 = nativeInstance.COMPRESSED_SRGB8_ETC2;
        this.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 =
            nativeInstance.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
    }
}

export class WEBGL_compressed_texture_etc1 {
    readonly COMPRESSED_RGB_ETC1_WEBGL: number;

    constructor(nativeInstance) {
        this.COMPRESSED_RGB_ETC1_WEBGL = nativeInstance.COMPRESSED_RGB_ETC1_WEBGL;
    }
}

export class WEBGL_compressed_texture_pvrtc {
    readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;

    readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;

    readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;

    readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;

    constructor(nativeInstance) {
        this.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG =
            nativeInstance.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        this.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG =
            nativeInstance.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        this.COMPRESSED_RGB_PVRTC_2BPPV1_IMG =
            nativeInstance.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        this.COMPRESSED_RGB_PVRTC_4BPPV1_IMG =
            nativeInstance.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
    }
}

export class WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: number;

    constructor(nativeInstance) {
        this.UNSIGNED_INT_24_8_WEBGL = nativeInstance.UNSIGNED_INT_24_8_WEBGL;
    }
}

export class WEBGL_lose_context {
    private nativeInstance: any;

    constructor(nativeInstance) {
        this.nativeInstance = nativeInstance;
    }

    public loseContext() {
        this.nativeInstance.loseContext();
    }

    public restoreContext() {
        this.nativeInstance.restoreContext();
    }
}

export class EXT_disjoint_timer_query {
    private nativeInstance: any;

    readonly QUERY_COUNTER_BITS_EXT;
    readonly CURRENT_QUERY_EXT;
    readonly QUERY_RESULT_EXT;
    readonly QUERY_RESULT_AVAILABLE_EXT;
    readonly TIME_ELAPSED_EXT;
    readonly TIMESTAMP_EXT;
    readonly GPU_DISJOINT_EXT;

    constructor(nativeInstance) {
        this.nativeInstance = nativeInstance;
        this.QUERY_COUNTER_BITS_EXT = nativeInstance.QUERY_COUNTER_BITS_EXT;
        this.CURRENT_QUERY_EXT = nativeInstance.CURRENT_QUERY_EXT;
        this.QUERY_RESULT_EXT = nativeInstance.QUERY_RESULT_EXT;
        this.QUERY_RESULT_AVAILABLE_EXT = nativeInstance.QUERY_RESULT_AVAILABLE_EXT;
        this.TIME_ELAPSED_EXT = nativeInstance.TIME_ELAPSED_EXT;
        this.TIMESTAMP_EXT = nativeInstance.TIMESTAMP_EXT;
        this.GPU_DISJOINT_EXT = nativeInstance.GPU_DISJOINT_EXT;
    }
}


export class WEBGL_compressed_texture_atc {
    private nativeInstance: any;
    readonly COMPRESSED_RGB_ATC_WEBGL;
    readonly COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL;
    readonly COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL;

    constructor(nativeInstance) {
        this.COMPRESSED_RGB_ATC_WEBGL = nativeInstance.COMPRESSED_RGB_ATC_WEBGL;
        this.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = nativeInstance.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL;
        this.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = nativeInstance.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL;
    }
}


export class WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT;
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT;
    private nativeInstance: any;

    constructor(nativeInstance) {
        this.COMPRESSED_RGB_S3TC_DXT1_EXT = nativeInstance.COMPRESSED_RGB_S3TC_DXT1_EXT;
        this.COMPRESSED_RGBA_S3TC_DXT1_EXT = nativeInstance.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        this.COMPRESSED_RGBA_S3TC_DXT3_EXT = nativeInstance.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        this.COMPRESSED_RGBA_S3TC_DXT5_EXT = nativeInstance.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }
}

export class WEBGL_compressed_texture_s3tc_srgb {
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    private nativeInstance: any;

    constructor(nativeInstance) {
        this.COMPRESSED_SRGB_S3TC_DXT1_EXT = nativeInstance.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        this.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = nativeInstance.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        this.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = nativeInstance.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        this.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = nativeInstance.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    }
}

export class WEBGL_draw_buffers {
    readonly COLOR_ATTACHMENT0_WEBGL;
    readonly COLOR_ATTACHMENT1_WEBGL;
    readonly COLOR_ATTACHMENT2_WEBGL;
    readonly COLOR_ATTACHMENT3_WEBGL;
    readonly COLOR_ATTACHMENT4_WEBGL;
    readonly COLOR_ATTACHMENT5_WEBGL;
    readonly COLOR_ATTACHMENT6_WEBGL;
    readonly COLOR_ATTACHMENT7_WEBGL;
    readonly COLOR_ATTACHMENT8_WEBGL;
    readonly COLOR_ATTACHMENT9_WEBGL;
    readonly COLOR_ATTACHMENT10_WEBGL;
    readonly COLOR_ATTACHMENT11_WEBGL;
    readonly COLOR_ATTACHMENT12_WEBGL;
    readonly COLOR_ATTACHMENT13_WEBGL;
    readonly COLOR_ATTACHMENT14_WEBGL;
    readonly COLOR_ATTACHMENT15_WEBGL;
    readonly DRAW_BUFFER0_WEBGL;
    readonly DRAW_BUFFER1_WEBGL;
    readonly DRAW_BUFFER2_WEBGL;
    readonly DRAW_BUFFER3_WEBGL;
    readonly DRAW_BUFFER4_WEBGL;
    readonly DRAW_BUFFER5_WEBGL;
    readonly DRAW_BUFFER6_WEBGL;
    readonly DRAW_BUFFER7_WEBGL;
    readonly DRAW_BUFFER8_WEBGL;
    readonly DRAW_BUFFER9_WEBGL;
    readonly DRAW_BUFFER10_WEBGL;
    readonly DRAW_BUFFER11_WEBGL;
    readonly DRAW_BUFFER12_WEBGL;
    readonly DRAW_BUFFER13_WEBGL;
    readonly DRAW_BUFFER14_WEBGL;
    readonly DRAW_BUFFER15_WEBGL;
    readonly MAX_COLOR_ATTACHMENTS_WEBGL;
    readonly MAX_DRAW_BUFFERS_WEBGL;

    private nativeInstance: any;

    constructor(nativeInstance) {
        this.COLOR_ATTACHMENT0_WEBGL = nativeInstance.COLOR_ATTACHMENT0_EXT;
        this.COLOR_ATTACHMENT1_WEBGL = nativeInstance.COLOR_ATTACHMENT1_EXT;
        this.COLOR_ATTACHMENT2_WEBGL = nativeInstance.COLOR_ATTACHMENT2_EXT;
        this.COLOR_ATTACHMENT3_WEBGL = nativeInstance.COLOR_ATTACHMENT3_EXT;
        this.COLOR_ATTACHMENT4_WEBGL = nativeInstance.COLOR_ATTACHMENT4_EXT;
        this.COLOR_ATTACHMENT5_WEBGL = nativeInstance.COLOR_ATTACHMENT5_EXT;
        this.COLOR_ATTACHMENT6_WEBGL = nativeInstance.COLOR_ATTACHMENT6_EXT;
        this.COLOR_ATTACHMENT7_WEBGL = nativeInstance.COLOR_ATTACHMENT7_EXT;
        this.COLOR_ATTACHMENT8_WEBGL = nativeInstance.COLOR_ATTACHMENT8_EXT;
        this.COLOR_ATTACHMENT9_WEBGL = nativeInstance.COLOR_ATTACHMENT9_EXT;
        this.COLOR_ATTACHMENT10_WEBGL = nativeInstance.COLOR_ATTACHMENT10_EXT;
        this.COLOR_ATTACHMENT11_WEBGL = nativeInstance.COLOR_ATTACHMENT11_EXT;
        this.COLOR_ATTACHMENT12_WEBGL = nativeInstance.COLOR_ATTACHMENT12_EXT;
        this.COLOR_ATTACHMENT13_WEBGL = nativeInstance.COLOR_ATTACHMENT13_EXT;
        this.COLOR_ATTACHMENT14_WEBGL = nativeInstance.COLOR_ATTACHMENT14_EXT;
        this.COLOR_ATTACHMENT15_WEBGL = nativeInstance.COLOR_ATTACHMENT15_EXT;
        this.DRAW_BUFFER0_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER1_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER2_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER3_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER4_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER5_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER6_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER7_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER8_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER9_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER10_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER11_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER12_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER13_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER14_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.DRAW_BUFFER15_WEBGL = nativeInstance.DRAW_BUFFER0_EXT;
        this.MAX_COLOR_ATTACHMENTS_WEBGL = nativeInstance.MAX_COLOR_ATTACHMENTS_EXT;
        this.MAX_DRAW_BUFFERS_WEBGL = nativeInstance.MAX_DRAW_BUFFERS_EXT;
    }
}
