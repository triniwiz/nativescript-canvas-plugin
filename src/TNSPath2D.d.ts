import { TNSPath2DBase } from './canvas-plugin.common';
import { TNSDOMMatrix } from './TNSDOMMatrix';

export declare class TNSPath2D extends TNSPath2DBase {
    constructor(instance: any);

    addPath(path: TNSPath2D, transform?: TNSDOMMatrix): void;

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    closePath(): void;

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

    lineTo(x: number, y: number): void;

    moveTo(x: number, y: number): void;

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    rect(x: number, y: number, width: number, height: number): void;
}
