import { AddChildFromBuilder, Property, View } from "@nativescript/core/ui/core/view";
export declare const xProperty: Property<Text, any>;
export declare const yProperty: Property<Text, any>;
export declare const dxProperty: Property<Text, any>;
export declare class Text extends View implements AddChildFromBuilder {
    x: any;
    y: any;
    dx: any;
    constructor();
    _addChildFromBuilder(name: string, value: any): void;
}
