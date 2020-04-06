// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { registerElement } from 'nativescript-angular';

registerElement('Canvas', () => require('nativescript-canvas-plugin').TNSCanvas);
import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
