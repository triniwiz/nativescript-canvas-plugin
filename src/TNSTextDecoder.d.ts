import { TNSTextDecoderBase } from './canvas-plugin.common';

export declare class TNSTextDecoder extends TNSTextDecoderBase {
    constructor(encoding?: string);

    readonly native: any;

    readonly encoding: string;

    decode(buffer?: ArrayBuffer | ArrayBufferView, options?: any): string;
}
