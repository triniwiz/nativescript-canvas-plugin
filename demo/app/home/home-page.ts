import { Page } from 'tns-core-modules/ui/page';

import { HomeViewModel } from './home-view-model';
import { TNSCanvas, TNSCanvasRenderingContext2D } from 'nativescript-canvas-plugin';
import { screen } from 'tns-core-modules/platform';
import { swarm } from '~/particles/swarm';
import { particles } from '~/particles/particles';
import { cloth } from '~/cloth';
import { rainbowOctopus } from '~/rainbowOctopus';
import { particlesColor } from '~/particles/particlesColor';
import { particlesLarge } from '~/particles/particlesLarge';
import { colorRain } from '~/colorRain';

let page: Page;
let canvas: TNSCanvas;

function getWidth() {
    return screen.mainScreen.widthPixels;
}

function getHeight() {
    return screen.mainScreen.heightPixels - 300;
}

let ctx: TNSCanvasRenderingContext2D;

export function canvasLoaded(args) {
    canvas = args.object;
    ctx = canvas.getContext('2d') as any;
    swarm(canvas);
}

export function clear(args) {
   // ctx.clearRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());
    ctx.fillRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());

    const imageData = ctx.createImageData(100, 100);

// Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i] = 190;  // R value
        imageData.data[i + 1] = 0;    // G value
        imageData.data[i + 2] = 210;  // B value
        imageData.data[i + 3] = 255;  // A value
    }
    ctx.createImageData(imageData);

// Draw image data to the canvas
    ctx.putImageData(imageData, 20, 20);

}

export function loaded(args) {
    page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
    canvas = page.getViewById('canvas');
    ctx = canvas.getContext('2d') as TNSCanvasRenderingContext2D;
}

export function arcAnimation() {
    ctx.scale(2, 2);
    const mouse = {x: 0, y: 0};

    let r = 100; // Radius
    const p0 = {x: 0, y: 50};

    const p1 = {x: 100, y: 100};
    const p2 = {x: 150, y: 50};
    const p3 = {x: 200, y: 100};

    const labelPoint = function (p, offset, i = 0) {
        const {x, y} = offset;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill('');
        ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
    };

    const drawPoints = function (points) {
        for (let i = 0; i < points.length; i++) {
            var p = points[i];
            labelPoint(p, {x: 0, y: -20}, i);
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

        ctx.clearRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());

        drawArc([p1, p2, p3], rr);
        drawPoints([p1, p2, p3]);
        requestAnimationFrame(loop);
    };

    loop(0);
}
