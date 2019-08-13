/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/


(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !(global as any).requestAnimationFrame; ++x) {
        (global as any).requestAnimationFrame = (global as any)[vendors[x]+'RequestAnimationFrame'];
        (global as any).cancelAnimationFrame = (global as any)[vendors[x]+'CancelAnimationFrame']
                                   || (global as any)[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!(global as any).requestAnimationFrame)
        (global as any).requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = (global as any).setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!(global as any).cancelAnimationFrame)
        (global as any).cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(global as any).window = global;

import * as app from "tns-core-modules/application";
app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
