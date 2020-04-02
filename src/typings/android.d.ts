declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class AnimationFrame {
					public static class: java.lang.Class<com.github.triniwiz.canvas.AnimationFrame>;
					public static cancelAnimationFrame(param0: string): void;
					public doFrame(param0: number): void;
					public static requestAnimationFrame(param0: com.github.triniwiz.canvas.AnimationFrame.Callback): string;
					public constructor();
				}
				export module AnimationFrame {
					export class Callback {
						public static class: java.lang.Class<com.github.triniwiz.canvas.AnimationFrame.Callback>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.canvas.AnimationFrame$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFrame(param0: number): void;
						});
						public constructor();
						public onFrame(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.triniwiz.canvas.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasColorStyle {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyle>;
					public constructor();
				}
				export module CanvasColorStyle {
					export class Color extends com.github.triniwiz.canvas.ICanvasColorStyle {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyle.Color>;
						public constructor(param0: number);
						public getStyleType(): com.github.triniwiz.canvas.CanvasColorStyleType;
						public constructor(param0: string);
					}
					export class Gradient extends com.github.triniwiz.canvas.ICanvasColorStyle {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyle.Gradient>;
						public addColorStop(param0: number, param1: number): void;
						public getStyleType(): com.github.triniwiz.canvas.CanvasColorStyleType;
					}
					export class LinearGradient extends com.github.triniwiz.canvas.CanvasColorStyle.Gradient {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyle.LinearGradient>;
						public getStyleType(): com.github.triniwiz.canvas.CanvasColorStyleType;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
					export class Pattern extends com.github.triniwiz.canvas.ICanvasColorStyle {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyle.Pattern>;
						public constructor(param0: any, param1: com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition);
						public getStyleType(): com.github.triniwiz.canvas.CanvasColorStyleType;
					}
					export module Pattern {
						export class PatternRepetition {
							public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition>;
							public static Repeat: com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition;
							public static RepeatX: com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition;
							public static RepeatY: com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition;
							public static NoRepeat: com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition;
							public static values(): native.Array<com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition>;
							public toString(): string;
							public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition;
						}
					}
					export class RadialGradient extends com.github.triniwiz.canvas.CanvasColorStyle.Gradient {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyle.RadialGradient>;
						public getStyleType(): com.github.triniwiz.canvas.CanvasColorStyleType;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasColorStyleType {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasColorStyleType>;
					public static Color: com.github.triniwiz.canvas.CanvasColorStyleType;
					public static Gradient: com.github.triniwiz.canvas.CanvasColorStyleType;
					public static Pattern: com.github.triniwiz.canvas.CanvasColorStyleType;
					public static values(): native.Array<com.github.triniwiz.canvas.CanvasColorStyleType>;
					public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasColorStyleType;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasCompositeOperationType {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasCompositeOperationType>;
					public static SourceOver: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static SourceIn: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static SourceoOut: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static SourceAtop: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static DestinationOver: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static DestinationIn: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static DestinationOut: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static DestinationAtop: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Lighter: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Copy: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Xor: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Multiply: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Screen: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Overlay: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Darken: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Lighten: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static ColorDodge: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static ColorBurn: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static HardLight: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static SoftLight: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Difference: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Exclusion: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Hue: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Saturation: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Color: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static Luminosity: com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public toString(): string;
					public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public static values(): native.Array<com.github.triniwiz.canvas.CanvasCompositeOperationType>;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasDOMMatrix {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasDOMMatrix>;
					public setB(param0: number): void;
					public getE(): number;
					public setC(param0: number): void;
					public setA(param0: number): void;
					public finalize(): void;
					public setD(param0: number): void;
					public getB(): number;
					public setE(param0: number): void;
					public setF(param0: number): void;
					public getF(): number;
					public getD(): number;
					public constructor();
					public getA(): number;
					public getC(): number;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasPath2D {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasPath2D>;
					public moveTo(param0: number, param1: number): void;
					public rect(param0: number, param1: number, param2: number, param3: number): void;
					public constructor(param0: string);
					public bezierCurveTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public finalize(): void;
					public arc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean): void;
					public ellipse(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean): void;
					public constructor();
					public arcTo(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public quadraticCurveTo(param0: number, param1: number, param2: number, param3: number): void;
					public lineTo(param0: number, param1: number): void;
					public constructor(param0: com.github.triniwiz.canvas.CanvasPath2D);
					public addPath(param0: com.github.triniwiz.canvas.CanvasPath2D, param1: com.github.triniwiz.canvas.CanvasDOMMatrix): void;
					public closePath(): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasRenderingContext {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasRenderingContext>;
					/**
					 * Constructs a new instance of the com.github.triniwiz.canvas.CanvasRenderingContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasRenderingContext2D extends com.github.triniwiz.canvas.CanvasRenderingContext {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasRenderingContext2D>;
					public getMiterLimit(): number;
					public beginPath(): void;
					public setFont(param0: string): void;
					public setLineDashOffset(param0: number): void;
					public clip(param0: com.github.triniwiz.canvas.CanvasPath2D, param1: string): void;
					public getStrokeStyle(): com.github.triniwiz.canvas.ICanvasColorStyle;
					public stroke(): void;
					public getShadowOffsetX(): number;
					public setFillStyle(param0: com.github.triniwiz.canvas.ICanvasColorStyle): void;
					public clip(param0: string): void;
					public getImageSmoothingQuality(): com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality;
					public stroke(param0: com.github.triniwiz.canvas.CanvasPath2D): void;
					public fillText(param0: string, param1: number, param2: number): void;
					public lineTo(param0: number, param1: number): void;
					public createPattern(param0: any, param1: com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition): com.github.triniwiz.canvas.CanvasColorStyle.Pattern;
					public setLineDashInternal(param0: native.Array<number>): void;
					public restore(): void;
					public closePath(): void;
					public getFillStyle(): com.github.triniwiz.canvas.ICanvasColorStyle;
					public clearRect(param0: number, param1: number, param2: number, param3: number): void;
					public strokeRect(param0: number, param1: number, param2: number, param3: number): void;
					public clip(param0: com.github.triniwiz.canvas.CanvasPath2D): void;
					public strokeText(param0: string, param1: number, param2: number, param3: number): void;
					public rect(param0: number, param1: number, param2: number, param3: number): void;
					public bezierCurveTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public fill(): void;
					public ellipse(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public getCanvas(): com.github.triniwiz.canvas.CanvasView;
					public fillText(param0: string, param1: number, param2: number, param3: number): void;
					public fillRect(param0: number, param1: number, param2: number, param3: number): void;
					public translate(param0: number, param1: number): void;
					public getImageData(param0: number, param1: number, param2: number, param3: number): com.github.triniwiz.canvas.ImageData;
					public arc(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public drawImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number): void;
					public getLineJoin(): com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin;
					public getGlobalCompositeOperation(): com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public scale(param0: number, param1: number): void;
					public getGlobalAlpha(): number;
					public arcTo(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public quadraticCurveTo(param0: number, param1: number, param2: number, param3: number): void;
					public putImageData(param0: com.github.triniwiz.canvas.ImageData, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public drawImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): void;
					public setGlobalAlpha(param0: number): void;
					public setLineJoin(param0: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin): void;
					public createLinearGradient(param0: number, param1: number, param2: number, param3: number): com.github.triniwiz.canvas.CanvasColorStyle.LinearGradient;
					public transform(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getShadowOffsetY(): number;
					public getShadowBlur(): number;
					public setGlobalCompositeOperation(param0: com.github.triniwiz.canvas.CanvasCompositeOperationType): void;
					public getShadowColor(): number;
					public setTextAlign(param0: com.github.triniwiz.canvas.CanvasTextAlignment): void;
					public clip(): void;
					public setTransform(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public createImageData(param0: com.github.triniwiz.canvas.ImageData): com.github.triniwiz.canvas.ImageData;
					public arc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean): void;
					public ellipse(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean): void;
					public rotate(param0: number): void;
					public fill(param0: com.github.triniwiz.canvas.CanvasPath2D, param1: string): void;
					public getImageSmoothingEnabled(): boolean;
					public setStrokeStyle(param0: com.github.triniwiz.canvas.ICanvasColorStyle): void;
					public getFont(): string;
					public setShadowOffsetY(param0: number): void;
					public moveTo(param0: number, param1: number): void;
					public getLineDash(): native.Array<number>;
					public setShadowColor(param0: number): void;
					public setImageSmoothingQuality(param0: com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality): void;
					public strokeText(param0: string, param1: number, param2: number): void;
					public getTextAlign(): com.github.triniwiz.canvas.CanvasTextAlignment;
					public save(): void;
					public setImageSmoothingEnabled(param0: boolean): void;
					public putImageData(param0: com.github.triniwiz.canvas.ImageData, param1: number, param2: number): void;
					public resetTransform(): void;
					public setMiterLimit(param0: number): void;
					public getLineWidth(): number;
					public fill(param0: com.github.triniwiz.canvas.CanvasPath2D): void;
					public measureText(param0: string): com.github.triniwiz.canvas.CanvasTextMetrics;
					public createRadialGradient(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): com.github.triniwiz.canvas.CanvasColorStyle.RadialGradient;
					public putImageData(param0: com.github.triniwiz.canvas.ImageData): void;
					public setLineCap(param0: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap): void;
					public setShadowBlur(param0: number): void;
					public fill(param0: string): void;
					public createImageData(param0: number, param1: number): com.github.triniwiz.canvas.ImageData;
					public setLineDash(param0: native.Array<number>): void;
					public getLineCap(): com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap;
					public drawImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public setShadowOffsetX(param0: number): void;
					public setLineWidth(param0: number): void;
				}
				export module CanvasRenderingContext2D {
					export class ImageSmoothingQuality {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality>;
						public static Low: com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality;
						public static Medium: com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality;
						public static High: com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality;
						public static values(): native.Array<com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality>;
						public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality;
						public toString(): string;
					}
					export class LineCap {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap>;
						public static Butt: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap;
						public static Round: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap;
						public static Square: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap;
						public static values(): native.Array<com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap>;
						public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap;
						public toString(): string;
					}
					export class LineJoin {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin>;
						public static Bevel: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin;
						public static Round: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin;
						public static Miter: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin;
						public static values(): native.Array<com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin>;
						public toString(): string;
						public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasRenderingContext2D.LineJoin;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasTextAlignment {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasTextAlignment>;
					public static Left: com.github.triniwiz.canvas.CanvasTextAlignment;
					public static Right: com.github.triniwiz.canvas.CanvasTextAlignment;
					public static Center: com.github.triniwiz.canvas.CanvasTextAlignment;
					public static Start: com.github.triniwiz.canvas.CanvasTextAlignment;
					public static End: com.github.triniwiz.canvas.CanvasTextAlignment;
					public toString(): string;
					public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasTextAlignment;
					public static values(): native.Array<com.github.triniwiz.canvas.CanvasTextAlignment>;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasTextBaseline {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasTextBaseline>;
					public static Top: com.github.triniwiz.canvas.CanvasTextBaseline;
					public static Hanging: com.github.triniwiz.canvas.CanvasTextBaseline;
					public static Middle: com.github.triniwiz.canvas.CanvasTextBaseline;
					public static Alphabetic: com.github.triniwiz.canvas.CanvasTextBaseline;
					public static Ideographic: com.github.triniwiz.canvas.CanvasTextBaseline;
					public static Bottom: com.github.triniwiz.canvas.CanvasTextBaseline;
					public static valueOf(param0: string): com.github.triniwiz.canvas.CanvasTextBaseline;
					public toString(): string;
					public static values(): native.Array<com.github.triniwiz.canvas.CanvasTextBaseline>;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasTextMetrics {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasTextMetrics>;
					public getWidth(): number;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class CanvasView implements com.github.triniwiz.canvas.GLTextureView.Renderer {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasView>;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public doFrame(param0: number): void;
					public finalize(): void;
					public queueEvent(param0: java.lang.Runnable): void;
					public setupActivityHandler(param0: globalAndroid.app.Application): void;
					public setHandleInvalidationManually(param0: boolean): void;
					public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
					public onAttachedToWindow(): void;
					public toDataURLAsync(param0: string, param1: number, param2: com.github.triniwiz.canvas.CanvasView.DataURLListener): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public toDataURLAsync(param0: com.github.triniwiz.canvas.CanvasView.DataURLListener): void;
					public destroy(): void;
					public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					public toDataURL(): string;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
					public onDetachedFromWindow(): void;
					public getSurface(): com.github.triniwiz.canvas.GLTextureView;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public flush(): void;
					public toDataURLAsync(param0: string, param1: com.github.triniwiz.canvas.CanvasView.DataURLListener): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public onResume(): void;
					public constructor(param0: globalAndroid.content.Context);
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public toDataURL(param0: string): string;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public isHandleInvalidationManually(): boolean;
					public toDataURL(param0: string, param1: number): string;
					public onPause(): void;
					public toData(): native.Array<number>;
					public getContext(param0: string): com.github.triniwiz.canvas.CanvasRenderingContext;
					public static createSVGMatrix(): com.github.triniwiz.canvas.CanvasDOMMatrix;
					public static isEmulator(): boolean;
				}
				export module CanvasView {
					export class DataURLListener {
						public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasView.DataURLListener>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.canvas.CanvasView$DataURLListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResult(param0: string): void;
						});
						public constructor();
						public onResult(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class Colors {
					public static class: java.lang.Class<com.github.triniwiz.canvas.Colors>;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class GLTextureView {
					public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView>;
					public static RENDERMODE_WHEN_DIRTY: number;
					public static RENDERMODE_CONTINUOUSLY: number;
					public static DEBUG_CHECK_GL_ERROR: number;
					public static DEBUG_LOG_GL_CALLS: number;
					public setPreserveEGLContextOnPause(param0: boolean): void;
					public setGLWrapper(param0: com.github.triniwiz.canvas.GLTextureView.GLWrapper): void;
					public setEGLContextFactory(param0: com.github.triniwiz.canvas.GLTextureView.EGLContextFactory): void;
					public finalize(): void;
					public surfaceCreated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public queueEvent(param0: java.lang.Runnable): void;
					public setEGLConfigChooser(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getDebugFlags(): number;
					public onAttachedToWindow(): void;
					public setDebugFlags(param0: number): void;
					public setEGLConfigChooser(param0: com.github.triniwiz.canvas.GLTextureView.EGLConfigChooser): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setEGLWindowSurfaceFactory(param0: com.github.triniwiz.canvas.GLTextureView.EGLWindowSurfaceFactory): void;
					public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public setEGLContextClientVersion(param0: number): void;
					public getPreserveEGLContextOnPause(): boolean;
					public onDetachedFromWindow(): void;
					public surfaceChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number, param3: number): void;
					public surfaceDestroyed(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setEGLConfigChooser(param0: boolean): void;
					public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
					public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public requestRender(): void;
					public setRenderer(param0: com.github.triniwiz.canvas.GLTextureView.Renderer): void;
					public onResume(): void;
					public constructor(param0: globalAndroid.content.Context);
					public addSurfaceTextureListener(param0: globalAndroid.view.TextureView.SurfaceTextureListener): void;
					public getRenderMode(): number;
					public onPause(): void;
					public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public setRenderMode(param0: number): void;
				}
				export module GLTextureView {
					export abstract class BaseConfigChooser extends com.github.triniwiz.canvas.GLTextureView.EGLConfigChooser {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.BaseConfigChooser>;
						public mConfigSpec: native.Array<number>;
						public constructor(param0: com.github.triniwiz.canvas.GLTextureView, param1: native.Array<number>);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class ComponentSizeChooser extends com.github.triniwiz.canvas.GLTextureView.BaseConfigChooser {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.ComponentSizeChooser>;
						public redSize: number;
						public greenSize: number;
						public blueSize: number;
						public alphaSize: number;
						public depthSize: number;
						public stencilSize: number;
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: com.github.triniwiz.canvas.GLTextureView, param1: native.Array<number>);
						public constructor(param0: com.github.triniwiz.canvas.GLTextureView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class DefaultContextFactory extends com.github.triniwiz.canvas.GLTextureView.EGLContextFactory {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.DefaultContextFactory>;
						public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
						public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					}
					export class DefaultWindowSurfaceFactory extends com.github.triniwiz.canvas.GLTextureView.EGLWindowSurfaceFactory {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.DefaultWindowSurfaceFactory>;
						public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
						public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
					}
					export class EGLConfigChooser {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.EGLConfigChooser>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.canvas.GLTextureView$EGLConfigChooser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
						});
						public constructor();
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class EGLContextFactory {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.EGLContextFactory>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.canvas.GLTextureView$EGLContextFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
							destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
						});
						public constructor();
						public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
						public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					}
					export class EGLWindowSurfaceFactory {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.EGLWindowSurfaceFactory>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.canvas.GLTextureView$EGLWindowSurfaceFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
							destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
						});
						public constructor();
						public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
						public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
					}
					export class EglHelper {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.EglHelper>;
						public static logEglErrorAsWarning(param0: string, param1: string, param2: number): void;
						public static formatEglError(param0: string, param1: number): string;
						public constructor(param0: java.lang.ref.WeakReference<com.github.triniwiz.canvas.GLTextureView>);
						public start(): void;
						public swap(): number;
						public finish(): void;
						public static throwEglException(param0: string, param1: number): void;
						public destroySurface(): void;
						public createSurface(): boolean;
					}
					export class GLThread {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.GLThread>;
						public queueEvent(param0: java.lang.Runnable): void;
						public requestReleaseEglContextLocked(): void;
						public onResume(): void;
						public ableToDraw(): boolean;
						public surfaceDestroyed(): void;
						public onPause(): void;
						public requestRender(): void;
						public surfaceCreated(): void;
						public run(): void;
						public onWindowResize(param0: number, param1: number): void;
						public getRenderMode(): number;
						public requestExitAndWait(): void;
						public setRenderMode(param0: number): void;
					}
					export class GLThreadManager {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.GLThreadManager>;
						public threadExiting(param0: com.github.triniwiz.canvas.GLTextureView.GLThread): void;
						public tryAcquireEglContextLocked(param0: com.github.triniwiz.canvas.GLTextureView.GLThread): boolean;
						public releaseEglContextLocked(param0: com.github.triniwiz.canvas.GLTextureView.GLThread): void;
						public checkGLDriver(param0: javax.microedition.khronos.opengles.GL10): void;
						public shouldTerminateEGLWhenPausing(): boolean;
						public shouldReleaseEGLContextWhenPausing(): boolean;
					}
					export class GLWrapper {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.GLWrapper>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.canvas.GLTextureView$GLWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							wrap(param0: javax.microedition.khronos.opengles.GL): javax.microedition.khronos.opengles.GL;
						});
						public constructor();
						public wrap(param0: javax.microedition.khronos.opengles.GL): javax.microedition.khronos.opengles.GL;
					}
					export class LogWriter {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.LogWriter>;
						public close(): void;
						public flush(): void;
						public write(param0: native.Array<string>, param1: number, param2: number): void;
					}
					export class Renderer {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.Renderer>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.canvas.GLTextureView$Renderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
							onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
							onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
						});
						public constructor();
						public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
						public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
						public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					}
					export class SimpleEGLConfigChooser extends com.github.triniwiz.canvas.GLTextureView.ComponentSizeChooser {
						public static class: java.lang.Class<com.github.triniwiz.canvas.GLTextureView.SimpleEGLConfigChooser>;
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: com.github.triniwiz.canvas.GLTextureView, param1: native.Array<number>);
						public constructor(param0: com.github.triniwiz.canvas.GLTextureView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: com.github.triniwiz.canvas.GLTextureView, param1: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class ICanvasColorStyle {
					public static class: java.lang.Class<com.github.triniwiz.canvas.ICanvasColorStyle>;
					/**
					 * Constructs a new instance of the com.github.triniwiz.canvas.ICanvasColorStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getStyleType(): com.github.triniwiz.canvas.CanvasColorStyleType;
					});
					public constructor();
					public getStyleType(): com.github.triniwiz.canvas.CanvasColorStyleType;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class ImageData {
					public static class: java.lang.Class<com.github.triniwiz.canvas.ImageData>;
					public getHeight(): number;
					public getData(): native.Array<number>;
					public getWidth(): number;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class SVGView {
					public static class: java.lang.Class<com.github.triniwiz.canvas.SVGView>;
					public bitmap: globalAndroid.graphics.Bitmap;
					public svgCanvas: number;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setSrc(param0: string): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module canvas {
				export class TextMetrics {
					public static class: java.lang.Class<com.github.triniwiz.canvas.TextMetrics>;
				}
			}
		}
	}
}

//Generics information:

