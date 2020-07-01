import {TNSTextDecoderBase} from './canvas-plugin.common';

export declare class TNSTextDecoder extends TNSTextDecoderBase {
    readonly native: any;
    readonly encoding: string;

    constructor(encoding?: string);

    decode(buffer?: ArrayBuffer | ArrayBufferView, options?: any): string;
}
