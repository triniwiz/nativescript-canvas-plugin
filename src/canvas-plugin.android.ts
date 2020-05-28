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
declare var com;

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
