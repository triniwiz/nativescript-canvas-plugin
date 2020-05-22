import * as React from "react";
import { PropsWithoutForwardedRef } from "react-nativescript/dist/shared/NativeScriptComponentTypings";
import { TNSCanvas as NativeScriptTNSCanvas} from "../canvas-plugin";
import { ViewComponentProps, RCTView } from "react-nativescript/dist/components/View";
import { register } from "react-nativescript/dist/client/ElementRegistry";

const elementKey: string = "tnsCanvas";
register(elementKey, (NativeScriptTNSCanvas as any));

// @ts-ignore
type TNSCanvasProps = Pick<NativeScriptTNSCanvas, "ready">;

interface Props {
    onIsLoadingChange?: (isLoading: boolean) => void;
}

export type TNSCanvasComponentProps<
    E extends NativeScriptTNSCanvas = NativeScriptTNSCanvas
    > = Props /* & typeof TNSCanvas.defaultProps */ & Partial<TNSCanvasProps> & ViewComponentProps<E>;

// tslint:disable-next-line:class-name
export class _TNSCanvas<
    P extends TNSCanvasComponentProps<E>,
    S extends {},
    E extends NativeScriptTNSCanvas
    > extends RCTView<P, S, E> {

    render(): React.ReactNode {
        const {
            forwardedRef,

            onLoaded,
            onUnloaded,
            onAndroidBackPressed,
            onShowingModally,
            onShownModally,

            onTap,
            onDoubleTap,
            onPinch,
            onPan,
            onSwipe,
            onRotation,
            onLongPress,
            onTouch,

            onPropertyChange,

            children,
            ...rest
        } = this.props;

        return React.createElement(
            elementKey,
            {
                ...rest,
                ref: forwardedRef || this.myRef,
            },
            children
        );
    }
}

type OwnPropsWithoutForwardedRef = PropsWithoutForwardedRef<TNSCanvasComponentProps<NativeScriptTNSCanvas>>;

export const $TNSCanvas: React.ComponentType<
    OwnPropsWithoutForwardedRef & React.ClassAttributes<NativeScriptTNSCanvas>
    > = React.forwardRef<NativeScriptTNSCanvas, OwnPropsWithoutForwardedRef>(
    (props: React.PropsWithChildren<OwnPropsWithoutForwardedRef>, ref: React.RefObject<NativeScriptTNSCanvas>) => {
        const { children, ...rest } = props;

        return React.createElement(
            _TNSCanvas,
            {
                ...rest,
                forwardedRef: ref,
            },
            children
        );
    }
);
