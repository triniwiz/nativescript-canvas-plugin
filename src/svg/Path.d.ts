import { Property } from "@nativescript/core/ui/core/view";
import { SVGItem } from "./SVGItem";
export declare const dProperty: Property<Path, string>;
export declare class Path extends SVGItem {
    d: string;
    handleValues(canvas?: any): void;
}
