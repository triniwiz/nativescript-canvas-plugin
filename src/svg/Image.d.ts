import { SVGItem } from "./SVGItem";
export declare class Image extends SVGItem {
    xlink: {
        href?: string;
    };
    href: string;
    handleValues(canvas?: any): void;
    isBase64(src: any): boolean;
    loadSrc(src: any): globalAndroid.graphics.Bitmap | UIImage;
}
