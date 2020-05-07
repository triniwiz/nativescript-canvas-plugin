import { PhaserExampleViewModel } from "./phaser-example-view-model";
import { TNSCanvasRenderingContext2D } from "nativescript-canvas-plugin";
let vm: PhaserExampleViewModel = new PhaserExampleViewModel();
let context;
vm.on("propertyChange", (args) => {
    if (!vm.isLoading && !vm.didInit && context) {
        vm.setupGame(context);
        vm.set("didInit", true);
    }
});

export function loaded(args) {
    const page = args.object;
    page.bindingContext = vm;
    // vm.set('useAccelerometer', false);
}
export function canvasLoaded(args) {
    context = args.object.getContext("2d");
    if (!vm.isLoading && !vm.didInit && context) {
        vm.setupGame(context);
        vm.set("didInit", true);
    }
}
export function indicatorLoaded(args) {
    vm.preloadAssetsAsync();
}
