import { Property } from "@nativescript/core/ui/core/view";
import { SVGItem } from "./SVGItem";
export declare const pointsProperty: Property<Polyline, any>;
export declare class Polyline extends SVGItem {
    points: any;
    handleValues(canvas?: any): void;
}
