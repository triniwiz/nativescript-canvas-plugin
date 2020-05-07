import {
    WebGLActiveInfo,
    WebGLBuffer,
    WebGLProgram,
    WebGLQuery,
    WebGLSampler,
    WebGLSync,
    WebGLTexture,
    WebGLTransformFeedback,
    WebGLUniformLocation,
    WebGLVertexArrayObject
} from './canvas-plugin.common';

import { TNSWebGLRenderingContext } from './TNSWebGLRenderingContext';
import { fromFile, ImageSource } from 'tns-core-modules/image-source/image-source';
import { TNSImageAsset } from './TNSImageAsset';

export class TNSWebGL2RenderingContext extends TNSWebGLRenderingContext {
    constructor(context) {
        super(context);
    }

    get ALREADY_SIGNALED(): number {
        return this.native.ALREADY_SIGNALED;
    }

    get ANY_SAMPLES_PASSED(): number {
        return this.native.ANY_SAMPLES_PASSED;
    }

    get ANY_SAMPLES_PASSED_CONSERVATIVE(): number {
        return this.native.ANY_SAMPLES_PASSED_CONSERVATIVE;
    }

    get BYTE(): number {
        return this.native.BYTE;
    }

    get COLOR(): number {
        return this.native.COLOR;
    }

    get COLOR_ATTACHMENT1(): number {
        return this.native.COLOR_ATTACHMENT1;
    }

    get COLOR_ATTACHMENT10(): number {
        return this.native.COLOR_ATTACHMENT10;
    }

    get COLOR_ATTACHMENT11(): number {
        return this.native.COLOR_ATTACHMENT11;
    }

    get COLOR_ATTACHMENT12(): number {
        return this.native.COLOR_ATTACHMENT12;
    }

    get COLOR_ATTACHMENT13(): number {
        return this.native.COLOR_ATTACHMENT13;
    }

    get COLOR_ATTACHMENT14(): number {
        return this.native.COLOR_ATTACHMENT14;
    }

    get COLOR_ATTACHMENT15(): number {
        return this.native.COLOR_ATTACHMENT15;
    }

    get COLOR_ATTACHMENT2(): number {
        return this.native.COLOR_ATTACHMENT2;
    }

    get COLOR_ATTACHMENT3(): number {
        return this.native.COLOR_ATTACHMENT3;
    }

    get COLOR_ATTACHMENT4(): number {
        return this.native.COLOR_ATTACHMENT4;
    }

    get COLOR_ATTACHMENT5(): number {
        return this.native.COLOR_ATTACHMENT5;
    }

    get COLOR_ATTACHMENT6(): number {
        return this.native.COLOR_ATTACHMENT6;
    }

    get COLOR_ATTACHMENT7(): number {
        return this.native.COLOR_ATTACHMENT7;
    }

    get COLOR_ATTACHMENT8(): number {
        return this.native.COLOR_ATTACHMENT8;
    }

    get COLOR_ATTACHMENT9(): number {
        return this.native.COLOR_ATTACHMENT9;
    }

    get CONDITION_SATISFIED(): number {
        return this.native.CONDITION_SATISFIED;
    }

    get COPY_READ_BUFFER(): number {
        return this.native.COPY_READ_BUFFER;
    }

    get COPY_WRITE_BUFFER(): number {
        return this.native.COPY_WRITE_BUFFER;
    }

    get CURRENT_QUERY(): number {
        return this.native.CURRENT_QUERY;
    }

    get DEPTH(): number {
        return this.native.DEPTH;
    }

    get DEPTH24_STENCIL8(): number {
        return this.native.DEPTH24_STENCIL8;
    }

    get DEPTH32F_STENCIL8(): number {
        return this.native.DEPTH32F_STENCIL8;
    }

    get DEPTH_COMPONENT24(): number {
        return this.native.DEPTH_COMPONENT24;
    }

    get DEPTH_COMPONENT32F(): number {
        return this.native.DEPTH_COMPONENT32F;
    }

    get DRAW_FRAMEBUFFER(): number {
        return this.native.DRAW_FRAMEBUFFER;
    }

    get FLOAT_32_UNSIGNED_INT_24_8_REV(): number {
        return this.native.FLOAT_32_UNSIGNED_INT_24_8_REV;
    }

    get QUERY_COUNTER_BITS(): number {
        return this.native.QUERY_COUNTER_BITS;
    }

    get QUERY_COUNTER_BITS_EXT(): number {
        return this.native.QUERY_COUNTER_BITS_EXT;
    }

    get HALF_FLOAT(): number {
        return this.native.HALF_FLOAT;
    }

    get INTERLEAVED_ATTRIBS(): number {
        return this.native.INTERLEAVED_ATTRIBS;
    }

    get MAX_CLIENT_WAIT_TIMEOUT_WEBGL(): number {
        return this.native.MAX_CLIENT_WAIT_TIMEOUT_WEBGL;
    }

    get NONE(): number {
        return this.native.NONE;
    }

    get OBJECT_TYPE(): number {
        return this.native.OBJECT_TYPE;
    }

    get PIXEL_PACK_BUFFER(): number {
        return this.native.PIXEL_PACK_BUFFER;
    }

    get PIXEL_UNPACK_BUFFER(): number {
        return this.native.PIXEL_UNPACK_BUFFER;
    }

    get QUERY_RESULT(): number {
        return this.native.QUERY_RESULT;
    }

    get QUERY_RESULT_AVAILABLE(): number {
        return this.native.QUERY_RESULT_AVAILABLE;
    }

    get R11F_G11F_B10F(): number {
        return this.native.R11F_G11F_B10F;
    }

    get R16F(): number {
        return this.native.R16F;
    }

    get R16I(): number {
        return this.native.R16I;
    }

    get R16UI(): number {
        return this.native.R16UI;
    }

    get R32F(): number {
        return this.native.R32F;
    }

    get R32I(): number {
        return this.native.R32I;
    }

    get R32UI(): number {
        return this.native.R32UI;
    }

    get R8(): number {
        return this.native.R8;
    }

    get R8G(): number {
        return this.native.R8G;
    }

    get R8I(): number {
        return this.native.R8I;
    }

    get R8UI(): number {
        return this.native.R8UI;
    }

    get READ_FRAMEBUFFER(): number {
        return this.native.READ_FRAMEBUFFER;
    }

    get RG16F(): number {
        return this.native.RG16F;
    }

    get RG16I(): number {
        return this.native.RG16I;
    }

    get RG16UI(): number {
        return this.native.RG16UI;
    }

    get RG32F(): number {
        return this.native.RG32F;
    }

    get RG32I(): number {
        return this.native.RG32I;
    }

    get RG32UI(): number {
        return this.native.RG32UI;
    }

    get RG8I(): number {
        return this.native.RG8I;
    }

    get RG8UI(): number {
        return this.native.RG8UI;
    }

    get RGB10_A2(): number {
        return this.native.RGB10_A2;
    }

    get RGB10_A2UI(): number {
        return this.native.RGB10_A2UI;
    }

    get RGB16F(): number {
        return this.native.RGB16F;
    }

    get RGB32F(): number {
        return this.native.RGB32F;
    }

    get RGB8(): number {
        return this.native.RGB8;
    }

    get RGB8UI(): number {
        return this.native.RGB8UI;
    }

    get RGB9_E5(): number {
        return this.native.RGB9_E5;
    }

    get RGBA16F(): number {
        return this.native.RGBA16F;
    }

    get RGBA16I(): number {
        return this.native.RGBA16I;
    }

    get RGBA16UI(): number {
        return this.native.RGBA16UI;
    }

    get RGBA32F(): number {
        return this.native.RGBA32F;
    }

    get RGBA32I(): number {
        return this.native.RGBA32I;
    }

    get RGBA32UI(): number {
        return this.native.RGBA32UI;
    }

    get RGBA4444(): number {
        return this.native.RGBA4444;
    }

    get RGBA8(): number {
        return this.native.RGBA8;
    }

    get RGBA8I(): number {
        return this.native.RGBA8I;
    }

    get RGBA8UI(): number {
        return this.native.RGBA8UI;
    }

    get SEPARATE_ATTRIBS(): number {
        return this.native.SEPARATE_ATTRIBS;
    }

    get SHORT(): number {
        return this.native.SHORT;
    }

    get SIGNALED(): number {
        return this.native.SIGNALED;
    }

    get SRGB8(): number {
        return this.native.SRGB8;
    }

    get SRGB8_ALPHA8(): number {
        return this.native.SRGB8_ALPHA8;
    }

    get SRGB_APLHA8(): number {
        return this.native.SRGB_APLHA8;
    }

    get STENCIL(): number {
        return this.native.STENCIL;
    }

    get SYNC_CONDITION(): number {
        return this.native.SYNC_CONDITION;
    }

    get SYNC_FENCE(): number {
        return this.native.SYNC_FENCE;
    }

    get SYNC_FLAGS(): number {
        return this.native.SYNC_FLAGS;
    }

    get SYNC_FLUSH_COMMANDS_BIT(): number {
        return this.native.SYNC_FLUSH_COMMANDS_BIT;
    }

    get SYNC_GPU_COMMANDS_COMPLETE(): number {
        return this.native.SYNC_GPU_COMMANDS_COMPLETE;
    }

    get SYNC_STATUS(): number {
        return this.native.SYNC_STATUS;
    }

    get TEXTURE_2D_ARRAY(): number {
        return this.native.TEXTURE_2D_ARRAY;
    }

    get TEXTURE_3D(): number {
        return this.native.TEXTURE_3D;
    }

    get TEXTURE_COMPARE_FUNC(): number {
        return this.native.TEXTURE_COMPARE_FUNC;
    }

    get TEXTURE_COMPARE_MODE(): number {
        return this.native.TEXTURE_COMPARE_MODE;
    }

    get TEXTURE_MAX_LOD(): number {
        return this.native.TEXTURE_MAX_LOD;
    }

    get TEXTURE_MIN_LOD(): number {
        return this.native.TEXTURE_MIN_LOD;
    }

    get TEXTURE_WRAP_R(): number {
        return this.native.TEXTURE_WRAP_R;
    }

    get TIMEOUT_EXPIRED(): number {
        return this.native.TIMEOUT_EXPIRED;
    }

    get TRANSFORM_FEEDBACK_BUFFER(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER;
    }

    get TRANSFORM_FEEDBACK_BUFFER_BINDING(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER_BINDING;
    }

    get TRANSFORM_FEEDBACK_BUFFER_SIZE(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER_SIZE;
    }

    get TRANSFORM_FEEDBACK_BUFFER_START(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER_START;
    }

    get TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN(): number {
        return this.native.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN;
    }

    get UNIFORM_ARRAY_STRIDE(): number {
        return this.native.UNIFORM_ARRAY_STRIDE;
    }

    get UNIFORM_BLOCK_ACTIVE_UNIFORMS(): number {
        return this.native.UNIFORM_BLOCK_ACTIVE_UNIFORMS;
    }

    get UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES(): number {
        return this.native.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES;
    }

    get UNIFORM_BLOCK_BINDING(): number {
        return this.native.UNIFORM_BLOCK_BINDING;
    }

    get UNIFORM_BLOCK_DATA_SIZE(): number {
        return this.native.UNIFORM_BLOCK_DATA_SIZE;
    }

    get UNIFORM_BLOCK_INDEX(): number {
        return this.native.UNIFORM_BLOCK_INDEX;
    }

    get UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER(): number {
        return this.native.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER;
    }

    get UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER(): number {
        return this.native.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER;
    }

    get UNIFORM_BUFFER(): number {
        return this.native.UNIFORM_BUFFER;
    }

    get UNIFORM_BUFFER_BINDING(): number {
        return this.native.UNIFORM_BUFFER_BINDING;
    }

    get UNIFORM_BUFFER_SIZE(): number {
        return this.native.UNIFORM_BUFFER_SIZE;
    }

    get UNIFORM_BUFFER_START(): number {
        return this.native.UNIFORM_BUFFER_START;
    }

    get UNIFORM_IS_ROW_MAJOR(): number {
        return this.native.UNIFORM_IS_ROW_MAJOR;
    }

    get UNIFORM_MATRIX_STRIDE(): number {
        return this.native.UNIFORM_MATRIX_STRIDE;
    }

    get UNIFORM_OFFSET(): number {
        return this.native.UNIFORM_OFFSET;
    }

    get UNIFORM_SIZE(): number {
        return this.native.UNIFORM_SIZE;
    }

    get UNIFORM_TYPE(): number {
        return this.native.UNIFORM_TYPE;
    }

    get UNSIGNALED(): number {
        return this.native.UNSIGNALED;
    }

    get UNSIGNED_INT_10F_11F_11F_REV(): number {
        return this.native.UNSIGNED_INT_10F_11F_11F_REV;
    }

    get UNSIGNED_INT_24_8(): number {
        return this.native.UNSIGNED_INT_24_8;
    }

    get UNSIGNED_INT_2_10_10_10_REV(): number {
        return this.native.UNSIGNED_INT_2_10_10_10_REV;
    }

    get UNSIGNED_INT_5_9_9_9_REV(): number {
        return this.native.UNSIGNED_INT_5_9_9_9_REV;
    }

    get WAIT_FAILED(): number {
        return this.native.WAIT_FAILED;
    }

    public static isDebug = false;

    protected _glCheckError(message: string) {
        if (!TNSWebGL2RenderingContext.isDebug) {
            return;
        }
        console.log(message, this.getError());
    }


    beginQuery(target: number, query: WebGLQuery): void {
        this._glCheckError('beginQuery');
        const value = query ? query.native : 0;
        this.native.beginQueryWithTargetQuery(target, value);
    }

    beginTransformFeedback(primitiveMode: number): void {
        this._glCheckError('beginTransformFeedback');
        this.native.beginTransformFeedbackWithPrimitiveMode(primitiveMode);
    }

    bindBufferBase(target: number, index: number, buffer: WebGLBuffer): void {
        this._glCheckError('bindBufferBase');
        const value = buffer ? buffer.native : 0;
        this.native.bindBufferBaseWithTargetIndexBuffer(target, index, value);
    }

    bindBufferRange(target: number, index: number, buffer: WebGLBuffer, offset: number, size: number): void {
        this._glCheckError('bindBufferRange');
        const value = buffer ? buffer.native : 0;
        this.native.bindBufferRangeWithTargetIndexBufferOffsetSize(target, index, value, offset, size);
    }

    bindSampler(unit: number, sampler: WebGLSampler): void {
        this._glCheckError('bindSampler');
        const value = sampler ? sampler.native : 0;
        this.native.bindSamplerWithUnitSampler(unit, value);
    }

    bindTransformFeedback(target: number, transformFeedback: WebGLTransformFeedback): void {
        this._glCheckError('bindTransformFeedback');
        const value = transformFeedback ? transformFeedback.native : 0;
        this.native.bindTransformFeedbackWithTargetTransformFeedback(target, value);
    }

    bindVertexArray(vertexArray: WebGLVertexArrayObject): void {
        this._glCheckError('bindVertexArray');
        const value = vertexArray ? vertexArray.native : 0;
        this.native.bindVertexArrayWithVertexArray(value);
    }

    blitFramebuffer(srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void {
        this._glCheckError('blitFramebuffer');
        this.native.blitFramebufferWithSrcX0SrcY0SrcX1SrcY1DstX0DstY0DstX1DstY1MaskFilter(srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter);
    }

    clearBufferfi(buffer: WebGLBuffer, drawbuffer: number, depth: number, stencil: number): void {
        this._glCheckError('clearBufferfi');
        this.native.clearBufferfiWithBufferDrawbufferDepthStencil(buffer.native, drawbuffer, depth, stencil);
    }

    clearBufferfv(buffer: WebGLBuffer, drawbuffer: number, values: number[] | Float32Array): void {
        this._glCheckError('clearBufferfv');
        this.native.clearBufferfvWithBufferDrawbufferValues(buffer.native, drawbuffer, values as any);
    }

    clearBufferiv(buffer: WebGLBuffer, drawbuffer: number, values: number[] | Int32Array): void {
        this._glCheckError('clearBufferiv');
        this.native.clearBufferivWithBufferDrawbufferValues(buffer.native, drawbuffer, values as any);
    }

    clearBufferuiv(buffer: WebGLBuffer, drawbuffer: number, values: number[] | Uint32Array): void {
        this._glCheckError('clearBufferuiv');
        this.native.clearBufferuivWithBufferDrawbufferValues(buffer.native, drawbuffer, values as any);
    }

    clientWaitSync(sync: WebGLSync, flags: number, timeout: number): number {
        this._glCheckError('clientWaitSync');
        return this.native.clientWaitSyncWithSyncFlagsTimeout(sync.native, flags, timeout);
    }

    compressedTexSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, imageSize: number, offset: any)
    compressedTexSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, srcData: any, srcOffset: number = 0, srcLengthOverride: number = 0): void {
        this._glCheckError('compressedTexSubImage3D');
        if (typeof srcOffset === 'number') {
            this.native.compressedTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatImageSizeOffset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset);
        } else if (srcData && srcData.buffer) {
            this.native.compressedTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatSrcDataSrcOffsetSrcLengthOverride(
                target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData as any, srcOffset, srcLengthOverride
            );
        }
    }

    copyBufferSubData(readTarget: number, writeTarget: number, readOffset: number, writeOffset: number, size: number): void {
        this._glCheckError('copyBufferSubData');
        this.native.copyBufferSubDataWithReadTargetWriteTargetReadOffsetWriteOffsetSize(readTarget, writeTarget, readOffset, writeOffset, size);
    }

    copyTexSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, x: number, y: number, width: number, height: number): void {
        this._glCheckError('copyTexSubImage3D');
        this.native.copyTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetXYWidthHeight(target, level, xoffset, yoffset, zoffset, x, y, width, height);
    }

    createQuery(): WebGLQuery {
        this._glCheckError('createQuery');
        return new WebGLQuery(this.native.createQuery());
    }

    createSampler(): WebGLSampler {
        this._glCheckError('createSampler');
        return new WebGLSampler(this.native.createSampler());
    }

    createTransformFeedback(): WebGLTransformFeedback {
        this._glCheckError('createTransformFeedback');
        return new WebGLTransformFeedback(this.native.createTransformFeedback());
    }

    createVertexArray(): WebGLVertexArrayObject {
        this._glCheckError('createVertexArray');
        return new WebGLVertexArrayObject(this.native.createVertexArray());
    }

    deleteQueryWithQuery(query: WebGLQuery): void {
        this._glCheckError('deleteQueryWithQuery');
        this.native.deleteQueryWithQuery(query.native);
    }

    deleteSamplerWithSampler(sampler: WebGLSampler): void {
        this._glCheckError('deleteSamplerWithSampler');
        this.native.deleteSamplerWithSampler(sampler.native);
    }

    deleteSyncWithSync(sync: WebGLSync): void {
        this._glCheckError('deleteSyncWithSync');
        this.native.deleteSyncWithSync(sync.native);
    }

    deleteTransformFeedback(transformFeedback: WebGLTransformFeedback): void {
        this._glCheckError('deleteTransformFeedback');
        this.native.deleteTransformFeedbackWithTransformFeedback(transformFeedback.native);
    }

    deleteVertexArray(vertexArray: WebGLVertexArrayObject): void {
        this._glCheckError('deleteVertexArray');
        this.native.deleteVertexArrayWithVertexArray(vertexArray.native);
    }

    drawArraysInstanced(mode: number, first: number, count: number, instanceCount: number): void {
        this._glCheckError('drawArraysInstanced');
        this.native.drawArraysInstancedWithModeFirstCountInstanceCount(mode, first, count, instanceCount);
    }

    drawBuffers(buffers: number[]): void {
        this._glCheckError('drawBuffers');
        this.native.drawBuffersWithBuffers(buffers);
    }

    drawElementsInstanced(mode: number, count: number, type: number, offset: number, instanceCount: number): void {
        this._glCheckError('drawElementsInstanced');
        this.native.drawElementsInstancedWithModeCountTypeOffsetInstanceCount(mode, count, type, offset, instanceCount);
    }

    drawRangeElements(mode: number, start: number, end: number, count: number, type: number, offset: number): void {
        this._glCheckError('drawRangeElements');
        this.native.drawRangeElementsWithModeStartEndCountTypeOffset(mode, start, end, count, type, offset);
    }

    endQuery(target: number): void {
        this._glCheckError('endQuery');
        this.native.endQueryWithTarget(target);
    }

    endTransformFeedback(): void {
        this._glCheckError('endTransformFeedback');
        this.native.endTransformFeedback();
    }

    fenceSync(condition: number, flags: number): void {
        this._glCheckError('fenceSync');
        this.native.fenceSyncWithConditionFlags(condition, flags);
    }

    framebufferTextureLayer(target: number, attachment: number, texture: WebGLTexture, level: number, layer: number): void {
        this._glCheckError('framebufferTextureLayer');
        this.native.framebufferTextureLayerWithTargetAttachmentTextureLevelLayer(target, attachment, texture.native, level, layer);
    }

    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: number): string {
        this._glCheckError('getActiveUniformBlockName');
        return this.native.getActiveUniformBlockNameWithProgramUniformBlockIndex(program.native, uniformBlockIndex);
    }

    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: number, pname: number): any {
        this._glCheckError('getActiveUniformBlockParameter');
        const param = this.native.getActiveUniformBlockParameterWithProgramUniformBlockIndexPname(program.native, uniformBlockIndex, pname);
        if (pname === this.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES) {
            return new Uint32Array(this.getJSArray(param));
        }
        return param;
    }

    getActiveUniforms(program: WebGLProgram, uniformIndices: number[], pname: number): any {
        this._glCheckError('getActiveUniforms');
        return this.getJSArray(this.native.getActiveUniformsWithProgramUniformIndicesPname(program.native, uniformIndices, pname));
    }

    getBufferSubData(target: number, srcByteOffset: number, dstData: ArrayBuffer, dstOffset: number = 0, length: number = 0): void {
        this._glCheckError('getBufferSubData');
        this.native.getBufferSubDataWithTargetSrcByteOffsetDstDataDstOffsetLength(target, srcByteOffset, new Uint8Array(dstData.slice(0)) as any, dstOffset, length);
    }

    getFragDataLocation(program: WebGLProgram, name: string): number {
        this._glCheckError('getFragDataLocation');
        return this.native.getFragDataLocationWithProgramName(program.native, name);
    }

    getIndexedParameter(target: number, index: number): any {
        this._glCheckError('getIndexedParameter');
        const param = this.native.getIndexedParameterWithTargetIndex(target, index);
        if (target === this.TRANSFORM_FEEDBACK_BUFFER_BINDING || target === this.UNIFORM_BUFFER_BINDING) {
            return new WebGLBuffer(param);
        }
        return param;
    }

    getInternalformatParameter(target: number, internalformat: number, pname: number): any {
        this._glCheckError('getInternalformatParameter');
        const param = this.native.getInternalformatParameterWithTargetInternalformatPname(target, internalformat, pname);
        if (pname === this.SAMPLES) {
            return new Int32Array(this.getJSArray(param));
        }
        return param;
    }

    getQueryParameter(query: WebGLQuery, pname: number): any {
        this._glCheckError('getQueryParameter');
        return this.native.getQueryParameterWithQueryPname(query.native, pname);
    }

    getQuery(target: number, pname: number): any {
        this._glCheckError('getQuery');

        const query = this.native.getQueryParameterWithQueryPname(target, pname);
        if (query) {
            return new WebGLQuery(query);
        }
        return null;
    }

    getSamplerParameter(sampler: WebGLSampler, pname: number): any {
        this._glCheckError('getSamplerParameter');
        return this.native.getSamplerParameterWithSamplerPname(sampler.native, pname);
    }

    getSyncParameter(sync: WebGLSync, pname: number): any {
        this._glCheckError('getSyncParameter');
        return this.native.getSyncParameterWithSyncPname(sync.native, pname);
    }

    getTransformFeedbackVarying(program: WebGLProgram, index: number): any {
        this._glCheckError('getTransformFeedbackVarying');
        const info = this.native.getTransformFeedbackVaryingWithProgramIndex(program.native, index);
        if (info) {
            return new WebGLActiveInfo(info.name, info.size, info.size);
        }
        return null;
    }

    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): number {
        this._glCheckError('getUniformBlockIndex');
        return this.native.getUniformBlockIndexWithProgramUniformBlockName(program.native, uniformBlockName);
    }

    getUniformIndices(program: WebGLProgram, uniformNames: string[]): number[] {
        this._glCheckError('getUniformIndices');
        return this.getJSArray(this.native.getUniformIndicesWithProgramUniformNames(program.native, uniformNames));
    }

    invalidateFramebuffer(target: number, attachments: number[]): void {
        this._glCheckError('invalidateFramebuffer');
        this.native.invalidateFramebufferWithTargetAttachments(target, attachments);
    }

    invalidateSubFramebuffer(target: number, attachments: number[], x: number, y: number, width: number, height: number): void {
        this._glCheckError('invalidateSubFramebuffer');
        this.native.invalidateSubFramebufferWithTargetAttachmentsXYWidthHeight(target, attachments, x, y, width, height);
    }

    isQuery(query: WebGLQuery): boolean {
        this._glCheckError('isQuery');
        return this.native.isQueryWithQuery(query.native);
    }

    isSampler(sampler: WebGLSampler): boolean {
        this._glCheckError('isSampler');
        return this.native.isSamplerWithSampler(sampler.native);
    }

    isSync(sync: WebGLSync): boolean {
        this._glCheckError('isSync');
        return this.native.isSyncWithSync(sync.native);
    }

    isTransformFeedback(transformFeedback: WebGLTransformFeedback): boolean {
        this._glCheckError('isTransformFeedback');
        return this.native.isTransformFeedbackWithTransformFeedback(transformFeedback.native);
    }

    isVertexArray(vertexArray: WebGLVertexArrayObject): boolean {
        this._glCheckError('isVertexArray');
        return this.native.isVertexArrayWithVertexArray(vertexArray.native);
    }

    pauseTransformFeedback(): void {
        this._glCheckError('pauseTransformFeedback');
        this.native.pauseTransformFeedback();
    }

    readBuffer(src: number): void {
        this._glCheckError('readBuffer');
        this.native.readBufferWithSrc(src);
    }

    renderbufferStorageMultisample(target: number, samples: number, internalFormat: number, width: number, height: number): void {
        this._glCheckError('renderbufferStorageMultisample');
        this.native.renderbufferStorageMultisampleWithTargetSamplesInternalFormatWidthHeight(target, samples, internalFormat, width, height);
    }

    resumeTransformFeedback(): void {
        this._glCheckError('resumeTransformFeedback');
        this.native.resumeTransformFeedback();
    }

    samplerParameterf(sampler: WebGLSampler, pname: number, param: number): void {
        this._glCheckError('samplerParameterf');
        this.native.samplerParameterfWithSamplerPnameParam(sampler.native, pname, param);
    }

    samplerParameteri(sampler: WebGLSampler, pname: number, param: number): void {
        this._glCheckError('samplerParameteri');
        this.native.samplerParameteriWithSamplerPnameParam(sampler.native, pname, param);
    }

    texImage3D(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, offset: any)
    texImage3D(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, source: any): void {
        this._glCheckError('texImage3D');
        if (typeof source === 'number') {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeOffset(target, level, internalformat, width, height, depth, border, format, type, source);
        } else if (source && source.buffer) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeSource(target, level, internalformat, width, height, depth, border, format, type, new Uint8Array(source.slice(0)) as any);
        } else if (source instanceof UIImage) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source);
        } else if (source instanceof ImageSource) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source.ios);
        } else if (source instanceof TNSImageAsset) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeAsset(target, level, internalformat, width, height, depth, border, format, type, source.native);
        } else if (source &&
            typeof source.tagName === 'string' &&
            source.tagName === 'IMG') {
            if (source._imageSource instanceof ImageSource) {
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source._imageSource.ios);
            } else if (source._image instanceof UIImage) {
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source._image);
            } else if (source._asset instanceof TNSImageAsset) {
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeAsset(target, level, internalformat, width, height, depth, border, format, type, source._asset.native);
            } else if (typeof source.src === 'string') {
                const result = fromFile(source.src);
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeAsset(target, level, internalformat, width, height, depth, border, format, type, result ? result.ios : null);
            }
        }
    }

    texStorage2D(target: number, levels: number, internalformat: number, width: number, height: number): void {
        this._glCheckError('texStorage2D');
        this.native.texStorage2DWithTargetLevelsInternalformatWidthHeight(target, levels, internalformat, width, height);
    }

    texStorage3D(target: number, levels: number, internalformat: number, width: number, height: number, depth: number): void {
        this._glCheckError('texStorage3D');
        this.native.texStorage3DWithTargetLevelsInternalformatWidthHeightDepth(target, levels, internalformat, width, height, depth);
    }

    texSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, offset: any)
    texSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, srcData: any)
    texSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, srcData: any, srcOffset: number = 0): void {
        this._glCheckError('texSubImage3D');
        if (typeof srcData === 'number') {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeOffset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData);
        } else if (srcData && srcData.buffer) {
            if (srcOffset) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeSrcDataSrcOffset(
                    target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset
                );
            } else {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeSrcData(
                    target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData
                );
            }
        } else if (srcData instanceof UIImage) {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData);
        } else if (srcData instanceof ImageSource) {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData.ios);
        } else if (srcData instanceof TNSImageAsset) {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeAsset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData.native);
        } else if (srcData &&
            typeof srcData.tagName === 'string' &&
            srcData.tagName === 'IMG') {
            if (srcData._imageSource instanceof ImageSource) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData._imageSource.ios);
            } else if (srcData._image instanceof UIImage) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData._image);
            } else if (srcData._asset instanceof TNSImageAsset) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeAsset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData._asset.native);
            } else if (typeof srcData.src === 'string') {
                const result = fromFile(srcData.src);
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, result ? result.ios : null);
            }
        }

    }

    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: number): void {
        this._glCheckError('transformFeedbackVaryings');
        this.native.transformFeedbackVaryingsWithProgramVaryingsBufferMode(program.native, varyings, bufferMode);
    }

    uniform1ui(location: number, v0: number): void {
        this._glCheckError('uniform1ui');
        this.native.uniform1uiWithLocationV0(location, v0);
    }

    uniform1uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform1uiv');
        this.native.uniform1uivWithLocationData(location, data as any);
    }

    uniform2ui(location: number, v0: number, v1: number): void {
        this._glCheckError('uniform2ui');
        this.native.uniform2uiWithLocationV0V1(location, v0, v1);
    }

    uniform2uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform2uiv');
        this.native.uniform2uivWithLocationData(location, data as any);
    }

    uniform3ui(location: number, v0: number, v1: number, v2: number): void {
        this._glCheckError('uniform3ui');
        this.native.uniform3uiWithLocationV0V1V2(location, v0, v1, v2);
    }

    uniform3uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform3uiv');
        this.native.uniform3uivWithLocationData(location, data as any);
    }

    uniform4ui(location: number, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('uniform4ui');
        this.native.uniform4uiWithLocationV0V1V2V3(location, v0, v1, v2, v3);
    }

    uniform4uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform4uiv');
        this.native.uniform4uivWithLocationData(location, data as any);
    }

    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: number, uniformBlockBinding: number): void {
        this._glCheckError('uniformBlockBinding');
        this.native.uniformBlockBindingWithProgramUniformBlockIndexUniformBlockBinding(program.native, uniformBlockIndex, uniformBlockBinding);
    }

    uniformMatrix2x3fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix2x3fv');
        this.native.uniformMatrix2x3fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix2x4fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix2x4fv');
        this.native.uniformMatrix2x4fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix3x2fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix3x2fv');
        this.native.uniformMatrix3x2fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix3x4fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix3x4fv');
        this.native.uniformMatrix3x4fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix4x2fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix4x2fv');
        this.native.uniformMatrix4x2fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix4x3fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix4x3fv');
        this.native.uniformMatrix4x3fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    vertexAttribDivisor(index: number, divisor: number): void {
        this._glCheckError('vertexAttribDivisor');
        this.native.vertexAttribDivisorWithIndexDivisor(index, divisor);
    }

    vertexAttribI4i(index: number, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('vertexAttribI4i');
        this.native.vertexAttribI4iWithIndexV0V1V2V3(index, v0, v1, v2, v3);
    }

    vertexAttribI4iv(index: number, value: number[] | Int32Array): void {
        this._glCheckError('vertexAttribI4iv');
        this.native.vertexAttribI4uivWithIndexValue(index, value as any);
    }

    vertexAttribI4ui(index: number, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('vertexAttribI4ui');
        this.native.vertexAttribI4uiWithIndexV0V1V2V3(index, v0, v1, v2, v3);
    }

    vertexAttribI4uiv(index: number, value: number[] | Uint32Array): void {
        this._glCheckError('vertexAttribI4uiv');
        this.native.vertexAttribI4uivWithIndexValue(index, value as any);
    }
}
