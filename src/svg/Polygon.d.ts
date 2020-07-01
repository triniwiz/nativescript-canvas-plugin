import { Property } from "@nativescript/core/ui/core/view";
import { SVGItem } from "./SVGItem";
export declare const pointsProperty: Property<Polygon, any>;
export declare class Polygon extends SVGItem {
    points: any;
    handleValues(canvas?: any): void;
}
