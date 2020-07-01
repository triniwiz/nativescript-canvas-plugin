import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "@nativescript/angular";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TNSCanvasModule} from 'nativescript-canvas-plugin/angular';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSCanvasModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
