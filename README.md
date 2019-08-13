# NativeScript Canvas

[![npm](https://img.shields.io/npm/v/nativescript-canvas-plugin.svg)](https://www.npmjs.com/package/nativescript-canvas-plugin)
[![npm](https://img.shields.io/npm/dt/nativescript-canvas-plugin.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-canvas-plugin)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-canvas.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-canvas)
## WIP
## Installation

```javascript
`tns plugin add nativescript-canvas-plugin`;
```

_Note_ min ios support atm 11 | min android support atm 21

IMPORTANT: ensure you include xmlns:canvas="nativescript-canvas-plugin" on the Page element for core {N}

## Usage

```xml
<canvas:TNSCanvas id="canvas" width="100%" height="100%" loaded="canvasLoaded"/>
```

```ts
let ctx;
let canvas;
export function canvasLoaded(args) {
  console.log('loaded canvas');
  canvas = args.object;
  console.log(canvas);
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 150, 100);
}
```

## API

 Similar to -> the [Web Spec](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

