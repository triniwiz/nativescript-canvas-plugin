import { Property } from "@nativescript/core/ui/core/view";
import { SVGItem } from "./SVGItem";
export declare const cxProperty: Property<Ellipse, any>;
export declare const cyProperty: Property<Ellipse, any>;
export declare const rxProperty: Property<Ellipse, any>;
export declare const ryProperty: Property<Ellipse, any>;
export declare class Ellipse extends SVGItem {
    cx: any;
    cy: any;
    rx: any;
    ry: any;
    constructor();
    handleValues(canvas?: any): void;
}
