import { AddChildFromBuilder } from "@nativescript/core/ui/core/view";
import { SVGItem } from "./SVGItem";
export declare class Defs extends SVGItem implements AddChildFromBuilder {
    _views: any[];
    constructor();
    _addChildFromBuilder(name: string, value: any): void;
}
