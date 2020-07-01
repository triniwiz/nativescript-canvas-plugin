import { SVGItem } from "./SVGItem";
import { AddChildFromBuilder } from "@nativescript/core/ui/core/view";
export declare class LinearGradient extends SVGItem implements AddChildFromBuilder {
    _views: any[];
    x1: any;
    y1: any;
    x2: any;
    y2: any;
    gradientTransform: string;
    constructor();
    _getFillOrStrokeStyle(canvas?: any): any;
    _addChildFromBuilder(name: string, value: any): void;
}
