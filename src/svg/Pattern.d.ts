import { SVGItem } from "./SVGItem";
import { TNSCanvas } from "../TNSCanvas";
import { AddChildFromBuilder, PercentLength } from "@nativescript/core/ui/core/view";
export declare class Pattern extends SVGItem implements AddChildFromBuilder {
    _pattern: TNSCanvas;
    _views: any[];
    constructor();
    set width(value: PercentLength);
    get width(): PercentLength;
    get height(): PercentLength;
    set height(value: PercentLength);
    _addChildFromBuilder(name: string, value: any): void;
    _getFillOrStrokeStyle(): TNSCanvas;
}
