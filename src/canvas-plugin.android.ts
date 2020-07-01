export * from './canvas-plugin.common';
export * from './CanvasGradient';
export * from './ImageData';
export * from './TextMetrics';
export * from './TNSCanvas';
export * from './TNSCanvasRenderingContext2D';
export * from './TNSDOMMatrix';
export * from './TNSPath2D';
export * from './TNSWebGLRenderingContext';
export * from './TNSWebGL2RenderingContext';
export * from './TNSImageAsset';
export * from './TNSTextEncoder';
export * from './TNSTextDecoder';
export * from './CanvasPattern';
declare var com;

import {CanvasPattern} from './CanvasPattern';
import {CanvasGradient} from './CanvasGradient';

Object.defineProperty(global, 'CanvasPattern', {
    value: CanvasPattern,
    configurable: true,
    writable: true,
});

Object.defineProperty(global, 'CanvasGradient', {
    value: CanvasGradient,
    configurable: true,
    writable: true,
});

export function requestAnimationFrame(loop) {
    return com.github.triniwiz.canvas.AnimationFrame.requestAnimationFrame(new com.github.triniwiz.canvas.AnimationFrame.Callback({
        onFrame(called: number): void {
            loop(called);
        }
    }));
}

export function cancelAnimationFrame(id) {
    com.github.triniwiz.canvas.AnimationFrame.cancelAnimationFrame(id);
}
