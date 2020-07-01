import { SVGItem } from "./SVGItem";
import { AddChildFromBuilder } from "@nativescript/core/ui/core/view";
export declare class Symbol extends SVGItem implements AddChildFromBuilder {
    _views: any[];
    constructor();
    _addChildFromBuilder(name: string, value: any): void;
}
