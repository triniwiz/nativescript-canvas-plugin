import { Element } from "./Element";
import { HTMLVideoElement } from "./HTMLVideoElement";
import { HTMLImageElement } from "./HTMLImageElement";
import { HTMLCanvasElement } from "./HTMLCanvasElement";

export class Document extends Element {
    body: Element;
    documentElement: Element;
    readyState: string;
    constructor() {
        super("#document");
        this.body = new Element("BODY");
        this.documentElement = new Element("HTML");
        this.readyState = "complete";
    }

    createElement(tagName) {
        switch ((tagName || "").toLowerCase()) {
            case "video":
                return new HTMLVideoElement(tagName);
            case "img":
                return new HTMLImageElement(tagName);
            case "canvas":
                return new HTMLCanvasElement(tagName);
            case "iframe":
                // Return nothing to keep firebase working.
                return null;
            default:
                return new Element(tagName);
        }
    }

    createElementNS(tagName) {
        const element = this.createElement(tagName) as any;
        element.toDataURL = () => ({});
        return element;
    }

    getElementById(id) {
        return new Element("div");
    }
}
