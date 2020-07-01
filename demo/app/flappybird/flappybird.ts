import { setupGame } from "./game";
import { GestureStateTypes } from "@nativescript/core/ui/gestures/gestures";
let canvas;
let page;
declare const CANVAS_RENDERER;
export function loaded(args) {
    page = args.object;
}
export function canvasLoaded(args) {
    canvas = args.object;
    const context = args.object.getContext("webgl");

    setTimeout(()=>{
        setupGame(args.object, context);
    })
}
export function indicatorLoaded(args) {}




function getTouchEvent(name, event, target) {
    const pointers = new TouchList();
    if (name === "touchmove") {
        pointers.push({
            clientX: event.deltaX * 3,
            clientY: event.deltaY * 3,
            force: 0.0,
            identifier: 0,
            pageX: event.deltaX * 3,
            pageY: event.deltaY * 3,
            radiusX: 0,
            radiusY: 0,
            rotationAngle: 0,
            screenX: event.deltaX * 3,
            screenY: event.deltaY * 3,
            target,
        });
    } else {
        const count = event.getAllPointers().length;
        for (let i = 0; i < count; i++) {
            const point = event.getAllPointers()[i];
            pointers.push({
                clientX: point.getX(),
                clientY: point.getY(),
                force: 0.0,
                identifier: i,
                pageX: point.getX(),
                pageY: point.getY(),
                radiusX: 0,
                radiusY: 0,
                rotationAngle: 0,
                screenX: point.getX(),
                screenY: point.getY(),
                target,
            });
        }
    }


    return {
        eventName: name,
        object: null,
        defaultPrevented: false,
        cancelable: false,
        altKey: false,
        changedTouches: pointers,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        targetTouches: pointers,
        touches: pointers,
        preventDefault: ()=>{},
        target
    };
}

class TouchList extends Array {

    item(index: number) {
        return this[index];
    }
}

export function getTouchList() {}

let state = 'idle';
export function onTouch(event: any) {
    // event.getAllPointers()[0]

    /*
     mousemove
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events mousedown
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events mouseup
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events mouseover
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events mouseout
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events wheel
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events touchstart
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events touchmove
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events touchend
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events touchcancel
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events touchover
CONSOLE LOG file:///node_modules/@nativescript/core/ui/core/view/view-common.js:193:0: events touchout
CONSOLE LOG file:///node_modules/nativescript-http-async/xhr/TNSXMLHttpRequest.js:464:0: type image/png
    */

    if (event.eventName === "touch") {
        switch (event.action) {
            case "down":
               // if(state === 'idle'){
                    canvas.notify(getTouchEvent("touchstart", event, canvas));
                    state = 'touching';
             //   }
                break;
            case "up":
             //   if(state === 'touching'){
                    canvas.notify(getTouchEvent("touchend", event, canvas));
                    state = 'idle';
              //  }
                break;
            case "cancel":
              //  if(state === 'touching'){
                    canvas.notify(getTouchEvent("touchcancel", event, canvas));
                    state = 'idle';
              //  }
                break;
                case 'move':
                    //if(state === 'touching'){

                       // state = 'moving';
                   // }
                    break;
            default:
                break;
        }
    } else if (event.eventName === "pan") {
        if(event.state === GestureStateTypes.began || event.state === GestureStateTypes.changed){
            console.log('event',event.eventName, 'move');
            canvas.notify(getTouchEvent("touchmove", event, canvas));
        }

        //canvas.notify(getTouchEvent("touchmove", event));
        //this.game.updateControls(event.deltaX);
    }
}
