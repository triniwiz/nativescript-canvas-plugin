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
				export class CanvasPath2D {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasPath2D>;
					public arc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean): void;
					public moveTo(param0: number, param1: number): void;
					public rect(param0: number, param1: number, param2: number, param3: number): void;
					public ellipse(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean): void;
					public bezierCurveTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public constructor();
					public arcTo(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public quadraticCurveTo(param0: number, param1: number, param2: number, param3: number): void;
					public addPath(param0: com.github.triniwiz.canvas.CanvasPath2D): void;
					public lineTo(param0: number, param1: number): void;
					public constructor(param0: com.github.triniwiz.canvas.CanvasPath2D);
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
					public beginPath(): void;
					public setFont(param0: string): void;
					public setLineDashOffset(param0: number): void;
					public getStrokeStyle(): com.github.triniwiz.canvas.ICanvasColorStyle;
					public stroke(): void;
					public getShadowOffsetX(): number;
					public setFillStyle(param0: com.github.triniwiz.canvas.ICanvasColorStyle): void;
					public clip(param0: string): void;
					public getImageSmoothingQuality(): com.github.triniwiz.canvas.CanvasRenderingContext2D.ImageSmoothingQuality;
					public fillText(param0: string, param1: number, param2: number): void;
					public lineTo(param0: number, param1: number): void;
					public createPattern(param0: any, param1: com.github.triniwiz.canvas.CanvasColorStyle.Pattern.PatternRepetition): com.github.triniwiz.canvas.CanvasColorStyle.Pattern;
					public setLineDashInternal(param0: native.Array<number>): void;
					public restore(): void;
					public closePath(): void;
					public getFillStyle(): com.github.triniwiz.canvas.ICanvasColorStyle;
					public clearRect(param0: number, param1: number, param2: number, param3: number): void;
					public strokeRect(param0: number, param1: number, param2: number, param3: number): void;
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
					public getGlobalCompositeOperation(): com.github.triniwiz.canvas.CanvasCompositeOperationType;
					public scale(param0: number, param1: number): void;
					public arcTo(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public quadraticCurveTo(param0: number, param1: number, param2: number, param3: number): void;
					public putImageData(param0: com.github.triniwiz.canvas.ImageData, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public drawImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): void;
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
					public getLineWidth(): number;
					public measureText(param0: string): com.github.triniwiz.canvas.CanvasTextMetrics;
					public createRadialGradient(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): com.github.triniwiz.canvas.CanvasColorStyle.RadialGradient;
					public putImageData(param0: com.github.triniwiz.canvas.ImageData): void;
					public setLineCap(param0: com.github.triniwiz.canvas.CanvasRenderingContext2D.LineCap): void;
					public setShadowBlur(param0: number): void;
					public createImageData(param0: number, param1: number): com.github.triniwiz.canvas.ImageData;
					public setLineDash(param0: native.Array<number>): void;
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
				export class CanvasView {
					public static class: java.lang.Class<com.github.triniwiz.canvas.CanvasView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					public doFrame(param0: number): void;
					public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
					public onAttachedToWindow(): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public getContext(param0: string): com.github.triniwiz.canvas.CanvasRenderingContext;
					public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
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

