import { AddChildFromBuilder } from "@nativescript/core/ui/core/view";
import { TNSCanvas } from "../TNSCanvas";
import { SVGItem } from "./SVGItem";
export declare class G extends SVGItem implements AddChildFromBuilder {
    _canvas: TNSCanvas;
    _views: any[];
    transform: string;
    x: any;
    y: any;
    constructor();
    _addChildFromBuilder(name: string, value: any): void;
    handleValues(): void;
}
