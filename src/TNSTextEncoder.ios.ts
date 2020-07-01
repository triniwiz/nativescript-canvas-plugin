import {TNSTextEncoderBase} from './canvas-plugin.common';

declare let NativeTextEncoder;

export class TNSTextEncoder extends TNSTextEncoderBase {
    constructor(encoding: string = 'utf-8') {
        super(NativeTextEncoder.alloc().initWithEncoding(encoding));
    }

    get encoding(): string {
        return this.native.encoding;
    }

    encode(text: string): Uint8Array {
        const raw = this.native.encodeWithText(text);
        return new Uint8Array(interop.bufferFromData(raw));
    }
}
