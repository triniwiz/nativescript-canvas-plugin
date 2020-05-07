import { Observable } from "tns-core-modules/data/observable";

import { ObservableArray } from "tns-core-modules/data/observable-array";

export class HomeViewModel extends Observable {
    show: boolean = true;
    textColor: string = 'black';
    constructor() {
        super();
    }

    items = new ObservableArray([
        { name: "2D Swarm", type: "swarm" },
        { name: "2D ColorRain", type: "colorRain" },
        { name: "2D Particles Large", type: "particlesLarge" },
        { name: "2D Rainbow Octopus", type: "rainbowOctopus" },
        { name: "2D Particles Color", type: "particlesColor" },
        { name: "WEBGL textures", type: "textures" },
        { name: "WEBGL Draw Elements", type: "drawElements" },
        { name: "WEBGL Draw Modes", type: "drawModes" },
        { name: "WEBGL InteractiveCube", type: "interactiveCube" },
        { name: "WEBGL Cube Rotation With Image", type: "main" },
        { name: "WEBGL2 Draw Instanced", type: "draw_instanced" },
        { name: "WEBGL2 Draw ImageSpace", type: "draw_image_space" },
        {
            name: "WEBGL2 Cube Rotation With Cube Roating inside",
            type: "cubeRotationRotation",
        },
        { name: "WEBGL2 Fog", type: "fog" },
        {
            name: "WEBGL2 Environment Map Roatating Cube",
            type: "environmentMap",
        },
    ]);
}
