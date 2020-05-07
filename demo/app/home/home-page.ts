import { Page } from "tns-core-modules/ui/page";
import { Frame } from "tns-core-modules/ui/frame";
import { HomeViewModel } from "./home-view-model";
import {
    TNSCanvas,
    TNSCanvasRenderingContext2D,
    TNSWebGLRenderingContext,
} from "nativescript-canvas-plugin";
import { screen } from "tns-core-modules/platform";
import { swarm, LAF as swarmLAF } from "~/particles/swarm";
import { particles, LAF as particlesLAF } from "~/particles/particles";
import { cloth } from "~/cloth";
import { rainbowOctopus, LAF as rainbowOctopusLAF } from "~/rainbowOctopus";
import {
    particlesColor,
    LAF as particlesColorLAF,
} from "~/particles/particlesColor";
import {
    particlesLarge,
    LAF as particlesLargeLAF,
} from "~/particles/particlesLarge";
import { colorRain, LAF as colorRainLAF } from "~/colorRain";
import {
    draw_instanced,
    LAF as draw_instancedLAF,
} from "../webgl2/draw_instanced";
let page: Page;
let canvas;

function goTo(menu) {
    switch (menu) {
        case "phaser":
            Frame.topmost().navigate("phaser-example/phaser-example");
            break;
        case "goToFlappyBird":
            Frame.topmost().navigate("flappybird/flappybird");
            break;
        case "goToBreakOut":
            Frame.topmost().navigate("games/breakout/breakout");
            break;
        default:
            break;
    }
}

export function goToFlappyBird(menu) {
    goTo("goToFlappyBird");
}
export function goToPhaser(menu) {
    goTo("phaser");
}

export function goToBreakOut(menu) {
    goTo("goToBreakOut");
}

function getWidth() {
    return screen.mainScreen.widthPixels;
}

function getHeight() {
    return screen.mainScreen.heightPixels - 300;
}

let ctx: TNSCanvasRenderingContext2D;
import { main } from "../webgl/cube-example";
import { textures } from "../webgl/textures";
import { cubeRotation } from "../webgl/cube-rotation";
import { interactiveCube } from "../webgl/interactive-cube";
import { cubeRotationRotation } from "../webgl/cuberotation-rotation";
import {
    drawElements,
    drawElementsBasic,
    scaleTriangle,
    triangle,
    points,
    drawModes,
} from "../webgl/drawelements";
import { imageProcessing } from "../webgl/webgl-image-processing";
import { imageFilter } from "../webgl/image-filter";
import { draw_image_space } from "../webgl2/draw_image_space";
import { environmentMap } from "../webgl2/environment-map";
import { fog } from "../webgl2/fog";
export function canvasLoaded(args) {
    canvas = args.object;

    //clear(null)
    //points(canvas)
    // textures(canvas);
    //scaleTriangle(canvas);
    //setTimeout(()=>{
    // colorRain(canvas);
    // particlesLarge(canvas);
    //rainbowOctopus(canvas);
    //particlesColor(canvas);
    //cloth(canvas);
    // particles(canvas);
    //swarm(canvas);
    // textures(canvas)
    //drawModes(canvas,'triangles')
    //drawElements(canvas)
    // ctx = canvas.getContext("2d") as any;
    //swarm(canvas);
    // canvas.nativeView.handleInvalidationManually = true;
    setTimeout(() => {
        //draw_instanced(canvas);
        //draw_image_space(canvas);
        //  fog(canvas);
        //environmentMap(canvas);
        //cubeRotationRotation(canvas);
        //main(canvas);
        //imageFilter(canvas);
        //interactiveCube(canvas);
        // textures(canvas)
        // drawElements(canvas)
        //drawElements(canvas)
        //drawModes(canvas,'line_strip')
        //fog(canvas);
    }, 1000);
    // cubeRotation(canvas);
    //},3000)
    //drawModes(canvas,'triangles')
    // cubeRotation(canvas);
    // main(canvas)
}

export function toggle(args) {
    vm.set("show", !vm.get("show"));
}

function clear2D(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillColor = "black";
    ctx.strokeColor = "black";
    ctx.clearRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());
}

function clearGL(canvas) {
    const ctx = canvas.getContext("webgl");
    ctx.clearColor(1, 1, 1, 1);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
    ctx.canvas.nativeView.flush();
}

function clearGL2(canvas) {
    const ctx = canvas.getContext("webgl2");
    ctx.clearColor(1, 1, 1, 1);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
    ctx.canvas.nativeView.flush();
}

function changeTextColor(value) {
    vm.set("textColor", value);
}

let last;

function cleanup() {
    switch (last) {
        case "swarm":
            cancelAnimationFrame(swarmLAF);
            break;
        case "colorRain":
            cancelAnimationFrame(colorRainLAF);
            break;
        case "particlesLarge":
            clearInterval(particlesLargeLAF);
            break;
        case "rainbowOctopus":
            cancelAnimationFrame(rainbowOctopusLAF);
            break;
        case "particlesColor":
            cancelAnimationFrame(particlesColorLAF);
            break;
        case "textures":
            break;
        case "drawElements":
            break;
        case "interactiveCube":
            break;
        case "main":
            break;
        case "draw_instanced":
            break;
        case "draw_image_space":
            break;
        case "fog":
            break;
        case "environmentMap":
            break;
        default:
            break;
    }
}

function save2D() {
    if (!last) {
        canvas.getContext("2d").save();
    }
}

function restore2D() {
    canvas.getContext("2d").restore();
}
export function tap(args) {
    const type = args.view.bindingContext.type || null;
    changeTextColor("white");
    cleanup();
    switch (type) {
        case "swarm":
            save2D();
            clear2D(canvas);
            restore2D();
            swarm(canvas);
            changeTextColor("white");
            last = "swarm";
            break;
        case "colorRain":
            save2D();
            clear2D(canvas);
            restore2D();
            colorRain(canvas);
            changeTextColor("white");
            last = "colorRain";
            break;
        case "particlesLarge":
            save2D();
            clear2D(canvas);
            restore2D();
            particlesLarge(canvas);
            changeTextColor("black");
            last = "particlesLarge";
            break;
        case "rainbowOctopus":
            save2D();
            clear2D(canvas);
            restore2D();
            rainbowOctopus(canvas);
            changeTextColor("black");
            last = "rainbowOctopus";
            break;
        case "particlesColor":
            save2D();
            clear2D(canvas);
            restore2D();
            particlesColor(canvas);
            changeTextColor("white");
            last = "particlesColor";
            break;
        case "textures":
            clearGL(canvas);
            textures(canvas);
            changeTextColor("white");
            last = "textures";
            break;
        case "drawElements":
            clearGL(canvas);
            drawElements(canvas);
            changeTextColor("black");
            last = "drawElements";
            break;
        case "drawModes":
            clearGL(canvas);
            drawModes(canvas);
            changeTextColor("black");
            last = "drawModes";
            break;
        case "interactiveCube":
            clearGL(canvas);
            interactiveCube(canvas);
            last = "interactiveCube";
            break;
        case "main":
            clearGL(canvas);
            main(canvas);
            changeTextColor("white");
            break;
        case "draw_instanced":
            clearGL2(canvas);
            draw_instanced(canvas);
            last = "draw_instanced";
            break;
        case "draw_image_space":
            clearGL2(canvas);
            draw_image_space(canvas);
            last = "draw_image_space";
            break;
        case "cubeRotationRotation":
            clearGL2(canvas);
            cubeRotationRotation(canvas);
            last = "draw_image_space";
            changeTextColor("black");
            break;
        case "fog":
            clearGL2(canvas);
            fog(canvas);
            last = "fog";
            break;
        case "environmentMap":
            clearGL2(canvas);
            environmentMap(canvas);
            last = "environmentMap";
            break;
    }
}

export function clear(args) {
    // ctx.clearRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());
    // ctx.fillStyle = 'red'
    ///ctx.fillRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());
    //const imageData = ctx.createImageData(100, 100);
    /*
    // Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i] = 190; // R value
        imageData.data[i + 1] = 0; // G value
        imageData.data[i + 2] = 210; // B value
        imageData.data[i + 3] = 255; // A value
    }
    ctx.createImageData(imageData);

    // Draw image data to the canvas
    ctx.putImageData(imageData, 20, 20);

    */
}
let vm = new HomeViewModel();
export function loaded(args) {
    page = <Page>args.object;
    page.bindingContext = vm;
    // canvas = page.getViewById("canvas");
    // ctx = canvas.getContext("2d") as TNSCanvasRenderingContext2D;
}

export function arcAnimation(ctx) {
    ctx.scale(2, 2);
    const mouse = { x: 0, y: 0 };

    let r = 100; // Radius
    const p0 = { x: 0, y: 50 };

    const p1 = { x: 100, y: 100 };
    const p2 = { x: 150, y: 50 };
    const p3 = { x: 200, y: 100 };

    const labelPoint = function (p, offset, i = 0) {
        const { x, y } = offset;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill("");
        ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
    };

    const drawPoints = function (points) {
        for (let i = 0; i < points.length; i++) {
            var p = points[i];
            labelPoint(p, { x: 0, y: -20 }, i);
        }
    };

    // Draw arc
    const drawArc = function ([p0, p1, p2], r) {
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    };

    let t0 = 0;
    let rr = 0; // the radius that changes over time
    let a = 0; // angle
    let PI2 = Math.PI * 2;
    const loop = function (t) {
        t0 = t / 1000;
        a = t0 % PI2;
        rr = Math.abs(Math.cos(a) * r);

        ctx.clearRect(
            0,
            0,
            canvas.getMeasuredWidth(),
            canvas.getMeasuredHeight()
        );

        drawArc([p1, p2, p3], rr);
        drawPoints([p1, p2, p3]);
        requestAnimationFrame(loop);
    };

    loop(0);
}
