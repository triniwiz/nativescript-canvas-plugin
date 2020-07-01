import { Property } from "@nativescript/core/ui/core/view";
import { SVGItem } from "./SVGItem";
export declare const x1Property: Property<Line, any>;
export declare const y1Property: Property<Line, any>;
export declare const x2Property: Property<Line, any>;
export declare const y2Property: Property<Line, any>;
export declare class Line extends SVGItem {
    x1: any;
    y1: any;
    x2: any;
    y2: any;
    handleValues(canvas?: any): void;
}
