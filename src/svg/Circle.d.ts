import { Property } from "@nativescript/core/ui/core/view";
import { SVGItem } from "./SVGItem";
export declare const cxProperty: Property<Circle, any>;
export declare const cyProperty: Property<Circle, any>;
export declare const rProperty: Property<Circle, any>;
export declare class Circle extends SVGItem {
    cx: any;
    cy: any;
    r: any;
    handleValues(canvas?: any): void;
}
