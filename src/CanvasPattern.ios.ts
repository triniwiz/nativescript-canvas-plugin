import {CanvasPatternBase} from './canvas-plugin.common';
import {TNSDOMMatrix} from './TNSDOMMatrix';

export class CanvasPattern extends CanvasPatternBase {
    constructor(instance: any) {
        super(instance);
    }

    public setTransform(matrix: TNSDOMMatrix) {
        this.native.setTransformWithMatrix(matrix.native);
    }
}
