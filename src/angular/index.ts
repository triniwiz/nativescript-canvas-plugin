import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { TNSCanvas } from '../canvas-plugin';
import { registerElement } from '@nativescript/angular';

registerElement('TNSCanvas', () => TNSCanvas);

@NgModule({
    schemas: [NO_ERRORS_SCHEMA]
})
export class TNSCanvasModule {
}
