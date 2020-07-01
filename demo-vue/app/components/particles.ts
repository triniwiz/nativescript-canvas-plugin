import {TNSCanvas, TNSCanvasRenderingContext2D} from 'nativescript-canvas-plugin';
import {GestureTypes, TouchGestureEventData} from 'tns-core-modules/ui/gestures';
import * as platform from 'tns-core-modules/platform';

export function particles(canvas: TNSCanvas) {

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
    const colorVariation = function (color, returnString) {
        let r, g, b, a, variation;
        r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.r);
        g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.g);
        b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.b);
        a = Math.random() + .5;
        if (returnString) {
            return "rgba(" + r + "," + g + "," + b + "," + a + ")";
        } else {
            return {r, g, b, a};
        }
    };
    const ctx = canvas.getContext('2d') as TNSCanvasRenderingContext2D;

// Set Canvas to be window size
    //  canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

// Configuration, Play with these
    const config = {
        particleNumber: 10,
        maxParticleSize: 10,
        maxSpeed: 40,
        colorVariation: 10
    };

// Colors
    const colorPalette = {
        bg: {r: 12, g: 9, b: 29},
        matter: [
            {r: 36, g: 18, b: 42}, // darkPRPL
            {r: 78, g: 36, b: 42}, // rockDust
            {r: 252, g: 178, b: 96}, // solorFlare
            {r: 253, g: 238, b: 152} // totesASun
        ]
    };
    const width = canvas.getMeasuredWidth();
    const height = canvas.getMeasuredHeight();

// Some Variables hanging out
    let particles = [],
        centerX = width / 2,
        // @ts-ignore
        centerY = height / 2,
        drawBg;

// Draws the background for the canvas, because space
    drawBg = function (ctx, color) {
        ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        ctx.fillRect(0, 0, width, height);
    };

// Particle Constructor
    const Particle = function (x, y) {
        // X Coordinate
        this.x = x || Math.round(Math.random() * width);
        // Y Coordinate
        this.y = y || Math.round(Math.random() * height);
        // Radius of the space dust
        this.r = Math.ceil(Math.random() * config.maxParticleSize);
        // Color of the rock, given some randomness
        this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)], true);
        // Speed of which the rock travels
        this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
        // Direction the Rock flies
        this.d = Math.round(Math.random() * 360);
    };

// Used to find the rocks next point in space, accounting for speed and direction
    const updateParticleModel = function (p) {
        const a = 180 - (p.d + 90); // find the 3rd angle
        p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
        p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
        return p;
    };

// Just the function that physically draws the particles
// Physically? sure why not, physically.
    const drawParticle = function (x, y, r, c) {
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    };

// Remove particles that aren't on the canvas
    const cleanUpArray = function () {
        particles = particles.filter((p) => {
            return (p.x > -100 && p.y > -100);
        });
    };


    const initParticles = function (numParticles, x?, y?) {
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(x, y));
        }
        particles.forEach((p) => {
            drawParticle(p.x, p.y, p.r, p.c);
        });
    };

// That thing
    const requestAnimFrame = requestAnimationFrame;


// Our Frame function
    const frame = function () {
        // Draw background first
        drawBg(ctx, colorPalette.bg);
        // Update Particle models to new position
        particles.map((p) => {
            return updateParticleModel(p);
        });
        // Draw em'
        particles.forEach((p) => {
            drawParticle(p.x, p.y, p.r, p.c);
        });
        // Play the same song? Ok!
        requestAnimFrame(frame);
    };

// Click listener
    canvas.parent.on(GestureTypes.tap as any, args => {
        console.log('tap');
    });
    canvas.parent.on(GestureTypes.touch as any, (args: TouchGestureEventData) => {
        const x = args.getX() * platform.screen.mainScreen.scale,
            y = args.getY() * platform.screen.mainScreen.scale;
        cleanUpArray();
        initParticles(config.particleNumber, x, y);
    });

// First Frame
    frame();

// First particle explosion
    initParticles(config.particleNumber);


}
