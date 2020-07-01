import { setupGame } from "./breakout-game";
import {
    TouchGestureEventData,
    PanGestureEventData,
    GestureStateTypes,
} from "@nativescript/core/ui/gestures/gestures";
let page;
let canvas;

export function loaded(args) {
    page = args.object;
}
export function canvasLoaded(args) {
    canvas = args.object;
    const context = args.object.getContext("webgl");
    setupGame(args.object, context);
}
export function indicatorLoaded(args) {}
