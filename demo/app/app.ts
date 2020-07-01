/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
import * as app from "@nativescript/core/application";
import { requestAnimationFrame } from 'nativescript-canvas-plugin';
/*Object.defineProperty(global, "XMLHttpRequest", {
    value: TNSXMLHttpRequest,
    configurable: true,
    writable: true,
});
Object.defineProperty(global, "Blob", {
    value: Blob,
    configurable: true,
    writable: true,
});

Object.defineProperty(global, "FileReader", {
    value: FileReader,
    configurable: true,
    writable: true,
});*/
import 'nativescript-browser-polyfill';
// Object.defineProperty(global, "requestAnimationFrame", {
//     value: requestAnimationFrame,
//     configurable: true,
//     writable: true,
// });
app.run({ moduleName: "app-root" });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
