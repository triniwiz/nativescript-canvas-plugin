import { View, AddChildFromBuilder, Style, CssProperty } from '@nativescript/core/ui/core/view';
import { DOMParser } from 'xmldom-qsa';
export declare const strokeProperty: CssProperty<Style, any>;
export declare const strokeWidthProperty: CssProperty<Style, number>;
export declare const fillProperty: CssProperty<Style, any>;
export declare const fillOpacityProperty: CssProperty<Style, any>;
export declare const stopColorProperty: CssProperty<Style, any>;
export declare class SVG extends View implements AddChildFromBuilder {
    _canvas: any;
    _views: any[];
    _children: Map<string, View>;
    _parser: DOMParser;
    constructor();
    createNativeView(): Object;
    _addChildFromBuilder(name: string, value: any): void;
    _getViewById(name: string): any;
}
