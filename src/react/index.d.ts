import { NativeScriptProps, ViewAttributes } from "react-nativescript";
import { TNSCanvasRenderingContext2D } from "../TNSCanvasRenderingContext2D";
import { TNSWebGLRenderingContext } from "../TNSWebGLRenderingContext";
import { TNSCanvas } from "../TNSCanvas";
import { EventData } from "@nativescript/core";
export declare type TNSCanvasAttributes = ViewAttributes & {
    readonly clientWidth?: number;
    readonly clientHeight?: number;
    flush?(): void;
    toDataURL?(type?: string, encoderOptions?: number): any;
    getContext?(type: string, options?: any): TNSCanvasRenderingContext2D | TNSWebGLRenderingContext | null;
    onReady?: (arg: EventData) => void;
};
declare global {
    module JSX {
        interface IntrinsicElements {
            tnsCanvas: NativeScriptProps<TNSCanvasAttributes, TNSCanvas>;
        }
    }
}
