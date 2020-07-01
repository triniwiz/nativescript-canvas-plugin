import {TNSTextDecoderBase} from './canvas-plugin.common';

declare let NativeTextDecoder;

export class TNSTextDecoder extends TNSTextDecoderBase {
    constructor(encoding: string = 'utf-8') {
        super(NativeTextDecoder.alloc().initWithEncoding(encoding));
    }

    get encoding(): string {
        return this.native.encoding;
    }

    decode(buffer?: ArrayBuffer | ArrayBufferView, options?: any): string {
        if (
            buffer instanceof ArrayBuffer ||
            buffer instanceof Uint8Array ||
            buffer instanceof Int8Array ||
            buffer instanceof Uint16Array ||
            buffer instanceof Int16Array ||
            buffer instanceof Uint32Array ||
            buffer instanceof Int32Array ||
            buffer instanceof Float32Array
        ) {
            if (
                buffer instanceof Uint8Array
            ) {
                return this.native.decodeWithBytes(buffer);
            } else if (
                buffer instanceof Int8Array
            ) {
                return this.native.decodeWithI8(buffer);
            }
            if (
                buffer instanceof Uint16Array
            ) {
                return this.native.decodeWithU16(buffer);
            } else if (
                buffer instanceof Int16Array
            ) {
                return this.native.decodeWithI16(buffer);
            } else if (
                buffer instanceof Int32Array
            ) {
                return this.native.decodeWithI32(buffer);
            }
            return this.native.decodeWithBuffer(NSData.dataWithData(buffer as any));
        } else {
            return '';
        }
    }
}
