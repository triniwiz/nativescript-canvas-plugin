import { View } from '@nativescript/core/ui/core/view';
import { TNSCanvas } from "../TNSCanvas";
export declare class SVGItem extends View {
    set stroke(value: any);
    get stroke(): any;
    set strokeWidth(value: any);
    get strokeWidth(): any;
    get fill(): any;
    set fill(value: any);
    _parseOpacity(value: any): any;
    set fillOpacity(value: any);
    get fillOpacity(): any;
    opacity: any;
    _canvas: TNSCanvas;
    _doStroke(): boolean;
    _doFill(): boolean;
    _doFillOpacity(): boolean;
    get _realFillOpacity(): any;
    get _realStroke(): any;
    get _realFill(): any;
    get _realOpacity(): any;
    _getRealSize(value: any, parent?: any, type?: string): any;
    _appendChild(id: any, child: any): void;
    _removeChild(id: any): void;
    _getViewById(name: string): any;
}
