import * as React from "react";
import { PropsWithoutForwardedRef } from "react-nativescript/dist/shared/NativeScriptComponentTypings";
import { TNSCanvas as NativeScriptTNSCanvas } from "../canvas-plugin";
import { ViewComponentProps, RCTView } from "react-nativescript/dist/components/View";
declare type TNSCanvasProps = Pick<NativeScriptTNSCanvas, "ready">;
interface Props {
    onIsLoadingChange?: (isLoading: boolean) => void;
}
export declare type TNSCanvasComponentProps<E extends NativeScriptTNSCanvas = NativeScriptTNSCanvas> = Props & Partial<TNSCanvasProps> & ViewComponentProps<E>;
export declare class _TNSCanvas<P extends TNSCanvasComponentProps<E>, S extends {}, E extends NativeScriptTNSCanvas> extends RCTView<P, S, E> {
    render(): React.ReactNode;
}
declare type OwnPropsWithoutForwardedRef = PropsWithoutForwardedRef<TNSCanvasComponentProps<NativeScriptTNSCanvas>>;
export declare const $TNSCanvas: React.ComponentType<OwnPropsWithoutForwardedRef & React.ClassAttributes<NativeScriptTNSCanvas>>;
export {};
