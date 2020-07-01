import {TNSTextEncoderBase} from './canvas-plugin.common';

export declare class TNSTextEncoder extends TNSTextEncoderBase {
    readonly native;
    readonly encoding: string;

    constructor(encoding?: string);

    encode(text: string): Uint8Array;
}
