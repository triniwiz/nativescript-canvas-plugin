
declare class AnimationFrame extends NSObject {

	static alloc(): AnimationFrame; // inherited from NSObject

	static cancelAnimationFrameWithId(id: string): void;

	static new(): AnimationFrame; // inherited from NSObject

	static requestAnimationFrameToLoop(toLoop: (p1: number) => void): void;
}

declare class Canvas extends GLKView implements GLKViewDelegate {

	static alloc(): Canvas; // inherited from NSObject

	static appearance(): Canvas; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): Canvas; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): Canvas; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Canvas; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): Canvas; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Canvas; // inherited from UIAppearance

	static new(): Canvas; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	ensureIsContextIsCurrent(): boolean;

	getContextWithType(type: string): CanvasRenderingContext;

	glkViewDrawInRect(view: GLKView, rect: CGRect): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class CanvasColorStyle extends NSObject {

	static alloc(): CanvasColorStyle; // inherited from NSObject

	static new(): CanvasColorStyle; // inherited from NSObject
}

declare const enum CanvasColorStyleType {

	Color = 0,

	Gradient = 1,

	Pattern = 2
}

declare const enum CanvasCompositeOperationType {

	SourceOver = 0,

	SourceIn = 1,

	SourceOut = 2,

	SourceAtop = 3,

	DestinationOver = 4,

	DestinationIn = 5,

	DestinationOut = 6,

	DestinationAtop = 7,

	Lighter = 8,

	Copy = 9,

	Xor = 10,

	Multiply = 11,

	Screen = 12,

	Overlay = 13,

	Darken = 14,

	Lighten = 15,

	ColorDodge = 16,

	ColorBurn = 17,

	HardLight = 18,

	SoftLight = 19,

	Difference = 20,

	Exclusion = 21,

	Hue = 22,

	Saturation = 23,

	Color = 24,

	Luminosity = 25
}

interface CanvasImageData {
	array: interop.Pointer | interop.Reference<any>;
	length: number;
}
declare var CanvasImageData: interop.StructType<CanvasImageData>;

declare var CanvasNativeVersionNumber: number;

declare var CanvasNativeVersionString: interop.Reference<number>;

declare class CanvasRenderingContext extends NSObject {

	static alloc(): CanvasRenderingContext; // inherited from NSObject

	static new(): CanvasRenderingContext; // inherited from NSObject
}

declare class CanvasRenderingContext2D extends CanvasRenderingContext {

	static alloc(): CanvasRenderingContext2D; // inherited from NSObject

	static new(): CanvasRenderingContext2D; // inherited from NSObject

	fillStyle: ICanvasColorStyle;

	font: string;

	globalAlpha: number;

	globalCompositeOperation: CanvasCompositeOperationType;

	imageSmoothingEnabled: boolean;

	imageSmoothingQuality: ImageSmoothingQuality;

	lineCap: LineCap;

	lineDashOffset: number;

	lineJoin: LineJoin;

	lineWidth: number;

	miterLimit: number;

	shadowBlur: number;

	shadowColor: UIColor;

	shadowOffsetX: number;

	shadowOffsetY: number;

	strokeStyle: ICanvasColorStyle;

	textAlign: TextAlignment;

	constructor(o: { canvas: Canvas; });

	arcToX1Y1X2Y2Radius(x1: number, y1: number, x2: number, y2: number, radius: number): void;

	arcWithXYRadiusStartAngleEndAngle(x: number, y: number, radius: number, startAngle: number, endAngle: number): void;

	arcWithXYRadiusStartAngleEndAngleAnticlockwise(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

	beginPath(): void;

	bezierCurveToCp1xCp1yCp2xCp2yXY(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

	clearRectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	clipWithRule(rule: string): void;

	closePath(): void;

	createImageDataWithImageData(imageData: ImageData): ImageData;

	createImageDataWithWidthHeight(width: number, height: number): ImageData;

	createLinearGradientWithX0Y0X1Y1(x0: number, y0: number, x1: number, y1: number): LinearGradient;

	createPatternWithSrcRepetition(src: any, repetition: PatternRepetition): Pattern;

	createRadialGradientWithX0Y0R0X1Y1R1(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): RadialGradient;

	drawImageWithImageDxDy(image: UIImage, dx: number, dy: number): void;

	drawImageWithImageDxDyDWidthDHeight(image: UIImage, dx: number, dy: number, dWidth: number, dHeight: number): void;

	drawImageWithImageSxSySWidthSHeightDxDyDWidthDHeight(image: UIImage, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;

	ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngle(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number): void;

	ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngleAnticlockwise(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

	fill(): void;

	fillRectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	fillTextWithTextXY(text: string, x: number, y: number): void;

	fillTextWithTextXYWidth(text: string, x: number, y: number, width: number): void;

	getCanvas(): Canvas;

	getImageDataWithSxSySwSh(sx: number, sy: number, sw: number, sh: number): ImageData;

	getLineDash(): NSArray<number>;

	initWithCanvas(canvas: Canvas): this;

	lineToXY(x: number, y: number): void;

	measureTextWithText(text: string): TextMetrics;

	moveToXY(x: number, y: number): void;

	putImageDataWithImageDataDxDy(imageData: ImageData, dx: number, dy: number): void;

	putImageDataWithImageDataDxDyDirtyXDirtyYDirtyWidthDirtyHeight(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;

	quadraticCurveToCpxCpyXY(cpx: number, cpy: number, x: number, y: number): void;

	rectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	resetTransform(): void;

	restore(): void;

	rotateWithAngle(angle: number): void;

	save(): void;

	scaleWithXY(x: number, y: number): void;

	setLineDashWithSegments(segments: NSArray<number> | number[]): void;

	setTransformWithABCDEF(a: number, b: number, c: number, d: number, e: number, f: number): void;

	stroke(): void;

	strokeRectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	strokeTextWithTextXY(text: string, x: number, y: number): void;

	strokeTextWithTextXYWidth(text: string, x: number, y: number, width: number): void;

	transformWithABCDEF(a: number, b: number, c: number, d: number, e: number, f: number): void;

	translateWithXY(x: number, y: number): void;
}

interface CanvasTextMetrics {
	width: number;
}
declare var CanvasTextMetrics: interop.StructType<CanvasTextMetrics>;

declare class Color extends NSObject implements ICanvasColorStyle {

	static alloc(): Color; // inherited from NSObject

	static new(): Color; // inherited from NSObject

	constructor(o: { color: UIColor; });

	getStyleType(): CanvasColorStyleType;

	initWithColor(color: UIColor): this;
}

declare class Gradient extends NSObject implements ICanvasColorStyle {

	static alloc(): Gradient; // inherited from NSObject

	static new(): Gradient; // inherited from NSObject

	addColorStopWithOffsetColor(offset: number, color: UIColor): void;

	getStyleType(): CanvasColorStyleType;
}

interface ICanvasColorStyle {

	getStyleType(): CanvasColorStyleType;
}
declare var ICanvasColorStyle: {

	prototype: ICanvasColorStyle;
};

declare class ImageData extends NSObject {

	static alloc(): ImageData; // inherited from NSObject

	static new(): ImageData; // inherited from NSObject

	readonly data: NSData;

	readonly height: number;

	readonly width: number;

	constructor(o: { width: number; height: number; });

	initWithWidthHeight(width: number, height: number): this;
}

declare const enum ImageSmoothingQuality {

	Low = 0,

	Medium = 1,

	High = 2
}

declare const enum LineCap {

	Butt = 0,

	Round = 1,

	Square = 2
}

declare const enum LineJoin {

	Bevel = 0,

	Round = 1,

	Miter = 2
}

declare class LinearGradient extends Gradient {

	static alloc(): LinearGradient; // inherited from NSObject

	static new(): LinearGradient; // inherited from NSObject

	constructor(o: { x0: number; y0: number; x1: number; y1: number; });

	initWithX0Y0X1Y1(x0: number, y0: number, x1: number, y1: number): this;
}

declare class Pattern extends NSObject implements ICanvasColorStyle {

	static alloc(): Pattern; // inherited from NSObject

	static new(): Pattern; // inherited from NSObject

	constructor(o: { src: any; pattern: PatternRepetition; });

	getStyleType(): CanvasColorStyleType;

	initWithSrcPattern(src: any, pattern: PatternRepetition): this;
}

declare const enum PatternRepetition {

	Repeat = 0,

	RepeatX = 1,

	RepeatY = 2,

	NoRepeat = 3
}

declare class RadialGradient extends Gradient {

	static alloc(): RadialGradient; // inherited from NSObject

	static new(): RadialGradient; // inherited from NSObject

	constructor(o: { x0: number; y0: number; r0: number; x1: number; y1: number; r1: number; });

	initWithX0Y0R0X1Y1R1(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): this;
}

declare const enum TextAlignment {

	Left = 0,

	Start = 1,

	Center = 2,

	End = 3,

	Right = 4
}

declare class TextMetrics extends NSObject {

	static alloc(): TextMetrics; // inherited from NSObject

	static new(): TextMetrics; // inherited from NSObject

	readonly width: number;
}

declare function native_arc(canvas_native_ptr: number, x: number, y: number, radius: number, start_angle: number, end_angle: number, anticlockwise: boolean): number;

declare function native_arc_to(canvas_native_ptr: number, x1: number, y1: number, x2: number, y2: number, radius: number): number;

declare function native_begin_path(canvas_native_ptr: number): number;

declare function native_bezier_curve_to(canvas_native_ptr: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): number;

declare function native_clear_canvas(canvas_native_ptr: number): number;

declare function native_clear_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number): number;

declare function native_clip(canvas_native_ptr: number, fill_rule: string): number;

declare function native_close_path(canvas_native_ptr: number): number;

declare function native_create_image_data(width: number, height: number): CanvasImageData;

declare function native_draw_image(canvas_native_ptr: number, image_array: string, image_size: number, original_width: number, original_height: number, dx: number, dy: number): number;

declare function native_draw_image_dw(canvas_native_ptr: number, image_array: string, image_size: number, original_width: number, original_height: number, dx: number, dy: number, d_width: number, d_height: number): number;

declare function native_draw_image_sw(canvas_native_ptr: number, image_array: string, image_size: number, original_width: number, original_height: number, sx: number, sy: number, s_width: number, s_height: number, dx: number, dy: number, d_width: number, d_height: number): number;

declare function native_drop_image_data(data: CanvasImageData): void;

declare function native_drop_text_metrics(data: CanvasTextMetrics): void;

declare function native_ellipse(canvas_native_ptr: number, x: number, y: number, radius_x: number, radius_y: number, rotation: number, start_angle: number, end_angle: number, anticlockwise: boolean): number;

declare function native_fill(canvas_native_ptr: number): number;

declare function native_fill_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number): number;

declare function native_fill_text(canvas_native_ptr: number, text: string, x: number, y: number, width: number): number;

declare function native_get_image_data(canvas_native_ptr: number, sx: number, sy: number, sw: number, sh: number): CanvasImageData;

declare function native_image_smoothing_enabled(canvas_native_ptr: number, enabled: boolean): number;

declare function native_image_smoothing_quality(canvas_native_ptr: number, quality: string): number;

declare function native_init(width: number, height: number, buffer_id: number, scale: number): number;

declare function native_line_dash_offset(canvas_native_ptr: number, offset: number): number;

declare function native_line_join(canvas_native_ptr: number, line_cap: string): number;

declare function native_line_to(canvas_native_ptr: number, x: number, y: number): number;

declare function native_measure_text(canvas_native_ptr: number, text: string): CanvasTextMetrics;

declare function native_miter_limit(canvas_native_ptr: number, limit: number): number;

declare function native_move_to(canvas_native_ptr: number, x: number, y: number): number;

declare function native_put_image_data(canvas_native_ptr: number, width: number, height: number, array: string, array_size: number, x: number, y: number, dirty_x: number, dirty_y: number, dirty_width: number, dirty_height: number): number;

declare function native_quadratic_curve_to(canvas_native_ptr: number, cpx: number, cpy: number, x: number, y: number): number;

declare function native_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number): number;

declare function native_reset_transform(canvas_native_ptr: number): number;

declare function native_restore(canvas_native_ptr: number): number;

declare function native_rotate(canvas_native_ptr: number, angle: number): number;

declare function native_save(canvas_native_ptr: number): number;

declare function native_scale(canvas_native_ptr: number, x: number, y: number): number;

declare function native_set_fill_color_rgba(canvas_native_ptr: number, red: number, green: number, blue: number, alpha: number): number;

declare function native_set_fill_gradient_linear(canvas_native_ptr: number, x0: number, y0: number, x1: number, y1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_fill_gradient_radial(canvas_native_ptr: number, x0: number, y0: number, radius_0: number, x1: number, y1: number, radius_1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_font(canvas_native_ptr: number, font: string): number;

declare function native_set_global_alpha(canvas_native_ptr: number, alpha: number): number;

declare function native_set_global_composite_operation(canvas_native_ptr: number, composite: string): number;

declare function native_set_line_cap(canvas_native_ptr: number, line_cap: string): number;

declare function native_set_line_dash(canvas_native_ptr: number, size: number, array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_line_width(canvas_native_ptr: number, line_width: number): number;

declare function native_set_stroke_color_rgba(canvas_native_ptr: number, red: number, green: number, blue: number, alpha: number): number;

declare function native_set_stroke_gradient_linear(canvas_native_ptr: number, x0: number, y0: number, x1: number, y1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_stroke_gradient_radial(canvas_native_ptr: number, x0: number, y0: number, radius_0: number, x1: number, y1: number, radius_1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_transform(canvas_native_ptr: number, a: number, b: number, c: number, d: number, e: number, f: number): number;

declare function native_shadow_blur(canvas_native_ptr: number, limit: number): number;

declare function native_shadow_color(canvas_native_ptr: number, color: number): number;

declare function native_shadow_offset_x(canvas_native_ptr: number, x: number): number;

declare function native_shadow_offset_y(canvas_native_ptr: number, y: number): number;

declare function native_stroke(canvas_native_ptr: number): number;

declare function native_stroke_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number): number;

declare function native_stroke_text(canvas_native_ptr: number, text: string, x: number, y: number, width: number): number;

declare function native_surface_resized(width: number, height: number, buffer_id: number, current_canvas: number): number;

declare function native_text_align(canvas_native_ptr: number, alignment: string): number;

declare function native_transform(canvas_native_ptr: number, a: number, b: number, c: number, d: number, e: number, f: number): number;

declare function native_translate(canvas_native_ptr: number, x: number, y: number): number;
