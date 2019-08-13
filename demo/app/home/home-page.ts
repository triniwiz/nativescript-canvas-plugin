import { Page } from 'tns-core-modules/ui/page';

import { HomeViewModel } from './home-view-model';
import { TNSCanvas, TNSCanvasRenderingContext2D } from 'nativescript-canvas-plugin';
import { screen } from 'tns-core-modules/platform';

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
    console.log('loaded canvas');
    canvas = args.object;
    ctx = canvas.getContext('2d') as any;

  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 150, 100);

}

export function clear(args) {
    ctx.clearRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());


    const imageData = ctx.createImageData(100, 100);

// Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i] = 190;  // R value
        imageData.data[i + 1] = 0;    // G value
        imageData.data[i + 2] = 210;  // B value
        imageData.data[i + 3] = 255;  // A value
    }

// Draw image data to the canvas
    ctx.putImageData(imageData, 20, 20);
}

export function loaded(args) {
    page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
    canvas = page.getViewById('canvas');
    ctx = canvas.getContext('2d') as TNSCanvasRenderingContext2D;

}
