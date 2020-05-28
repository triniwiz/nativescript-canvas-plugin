import { TNSTextEncoderBase } from './canvas-plugin.common';

export declare class TNSTextEncoder extends TNSTextEncoderBase {
    constructor(encoding?: string);

    readonly native;

    readonly encoding: string;

    encode(text: string): Uint8Array;
}
