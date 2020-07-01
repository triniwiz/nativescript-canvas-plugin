import {Page} from "@nativescript/core/ui/page";
import {Frame} from "@nativescript/core/ui/frame";
import {HomeViewModel} from "./home-view-model";
import {
    TNSCanvas,
    TNSCanvasRenderingContext2D,
    TNSWebGLRenderingContext,
    TNSPath2D,
    TNSImageAsset,
} from "nativescript-canvas-plugin";
import {screen} from "@nativescript/core/platform";
import {swarm, LAF as swarmLAF} from "~/particles/swarm";
import {particles, LAF as particlesLAF} from "~/particles/particles";
import {cloth} from "~/cloth";
import {rainbowOctopus, LAF as rainbowOctopusLAF} from "~/rainbowOctopus";
import {
    particlesColor,
    LAF as particlesColorLAF,
} from "~/particles/particlesColor";
import {
    particlesLarge,
    LAF as particlesLargeLAF,
} from "~/particles/particlesLarge";
import {colorRain, LAF as colorRainLAF} from "~/colorRain";
import {
    draw_instanced,
    LAF as draw_instancedLAF,
} from "../webgl2/draw_instanced";

let page: Page;
let canvas;
import {Color} from "@nativescript/core/color";
import * as application from "@nativescript/core/application";

function goTo(menu) {
    switch (menu) {
        case "phaser":
            Frame.topmost().navigate("phaser-example/phaser-example");
            break;
        case "goToFlappyBird":
            Frame.topmost().navigate("flappybird/flappybird");
            break;
        case "goToBreakOut":
            Frame.topmost().navigate("games/breakout/breakout");
            break;
        default:
            break;
    }
}

export function gridLoaded(args) {
    const grid = args.object;
    removeClipping(grid);
}

export function svgLoaded(args) {
    const svg = args.object;
    removeClipping(svg);
}

function removeClipping(view) {
    if (view.android) {
        if (view.nativeView.setClipChildren) {
            view.nativeView.setClipChildren(false);
        }
        if (view.nativeView.setClipToPadding) {
            view.nativeView.setClipToPadding(false);
        }

    }
}

export function goToFlappyBird(menu) {
    goTo("goToFlappyBird");
}

export function goToPhaser(menu) {
    goTo("phaser");
}

export function goToBreakOut(menu) {
    goTo("goToBreakOut");
}

function getWidth() {
    return screen.mainScreen.widthPixels;
}

function getHeight() {
    return screen.mainScreen.heightPixels - 300;
}

let ctx: TNSCanvasRenderingContext2D;
import {main, LAF as mainLAF} from "../webgl/cube-example";
import {textures} from "../webgl/textures";
import {cubeRotation, LAF as cubeRotationLAF} from "../webgl/cube-rotation";
import {
    interactiveCube,
    LAF as interactiveCubeLAF,
} from "../webgl/interactive-cube";
import {cubeRotationRotation} from "../webgl/cuberotation-rotation";
import {
    drawElements,
    drawElementsBasic,
    scaleTriangle,
    triangle,
    points,
    drawModes,
} from "../webgl/drawelements";
import {imageProcessing} from "../webgl/webgl-image-processing";
import {imageFilter} from "../webgl/image-filter";
import {draw_image_space} from "../webgl2/draw_image_space";
import {
    environmentMap,
    LAF as environmentMapLAF,
} from "../webgl2/environment-map";
import {fog, LAF as fogLAF} from "../webgl2/fog";
import Chart from "chart.js";
import {ImageAsset} from "@nativescript/core/image-asset/image-asset";
import {ImageSource} from "@nativescript/core/image-source";
import * as Matter from "matter-js";
import * as L from 'leaflet';
import * as fs from '@nativescript/core/file-system';

export function canvasLoaded(args) {
    canvas = args.object;
    // var map = L.map('map', {
    //     center: [51.505, -0.09],
    //     zoom: 13
    // });

    //  const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(0,0,400,400)
    //ellipse(canvas);
    // drawPatternWithCanvas(canvas);
    // clock(canvas);
     solar(canvas);
    //console.log('ready ??');
    //coloredParticles(canvas);
    //ball(canvas)
    //swarm(canvas);
    //bubbleChart(canvas);
    //donutChart(canvas);
    //canvas.page.actionBarHidden = true;
    //hBarChart(canvas);
    //bubbleChart(canvas);
    //dataSets(canvas);
    //chartJS(canvas);
    //clear(null)
    //points(canvas)
    //textures(canvas);
    //scaleTriangle(canvas);
    //setTimeout(()=>{
    // colorRain(canvas);
    //particlesLarge(canvas);
    // rainbowOctopus(canvas);
    //particlesColor(canvas);
    //cloth(canvas);
    //particles(canvas);
    //swarm(canvas);
    // textures(canvas)
    //drawModes(canvas,'triangles')
    //drawElements(canvas)
    // ctx = canvas.getContext("2d") as any;
    //swarm(canvas);
    // canvas.nativeView.handleInvalidationManually = true;
    //  setTimeout(() => {
    //draw_instanced(canvas);
    //draw_image_space(canvas);
    // fog(canvas);
    //environmentMap(canvas);
    //cubeRotationRotation(canvas);
    // main(canvas);
    //imageFilter(canvas);
    //interactiveCube(canvas);
    //textures(canvas)
    //drawElements(canvas)
    //drawElements(canvas)
    //drawModes(canvas,'line_strip')
    // fog(canvas);
    // }, 1000);
    // cubeRotation(canvas);
    //},3000)
    //drawModes(canvas,'triangles')
    // cubeRotation(canvas);
    // main(canvas)
    // pointStyle(canvas);
    //matterJSExample(canvas);
    //matterJSCar(canvas);
    //multiCanvas(canvas);

}

function coloredParticles(canvas) {
    var ctx = canvas.getContext('2d'),
        particles = [],
        patriclesNum = 100,
        w = canvas.width,
        h = canvas.height,
        colors = ['#f35d4f', '#f36849', '#c0d988', '#6ddaf1', '#f1e85b'];

    function Factory() {
        this.x = Math.round(Math.random() * w);
        this.y = Math.round(Math.random() * h);
        this.rad = Math.round(Math.random() * 1) + 1;
        this.rgba = colors[Math.round(Math.random() * 3)];
        this.vx = Math.round(Math.random() * 3) - 1.5;
        this.vy = Math.round(Math.random() * 3) - 1.5;
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'lighter';
        for (var i = 0; i < patriclesNum; i++) {
            var temp = particles[i];
            var factor = 1;

            for (var j = 0; j < patriclesNum; j++) {

                var temp2 = particles[j];
                ctx.lineWidth = 0.5;

                if (temp.rgba == temp2.rgba && findDistance(temp, temp2) < 50) {
                    ctx.strokeStyle = temp.rgba;
                    ctx.beginPath();
                    ctx.moveTo(temp.x, temp.y);
                    ctx.lineTo(temp2.x, temp2.y);
                    ctx.stroke();
                    factor++;
                }
            }


            ctx.fillStyle = temp.rgba;
            ctx.strokeStyle = temp.rgba;

            ctx.beginPath();
            ctx.arc(temp.x, temp.y, temp.rad * factor, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(temp.x, temp.y, (temp.rad + 5) * factor, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.closePath();


            temp.x += temp.vx;
            temp.y += temp.vy;

            if (temp.x > w) temp.x = 0;
            if (temp.x < 0) temp.x = w;
            if (temp.y > h) temp.y = 0;
            if (temp.y < 0) temp.y = h;
        }
    }

    function findDistance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    function init() {
        for (var i = 0; i < patriclesNum; i++) {
            particles.push(new Factory);
        }
    }

    function loop() {
        draw();
        requestAnimationFrame(loop);
    }

    init();
    loop();
}

function ball(canvs) {
    var ctx = canvas.getContext('2d');
    var raf;
    var running = false;

    var ball = {
        x: 100,
        y: 100,
        vx: 5,
        vy: 1,
        radius: 25,
        color: 'blue',
        draw: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    function clear() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
        clear();
        ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
        }
        if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
        }

        raf = window.requestAnimationFrame(draw);
    }

    ball.draw();


    raf = window.requestAnimationFrame(draw);
    running = true;
}

function matterJSCar(canvas) {
    const car = function () {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Composites = Matter.Composites,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies;

        // create engine
        var engine = Engine.create(),
            world = engine.world;

        // create renderer
        var render = Render.create({
            canvas,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                showAngleIndicator: true,
                showCollisions: true,
            },
        });

        Render.run(render);

        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        World.add(world, [
            // walls
            Bodies.rectangle(400, 0, 800, 50, {isStatic: true}),
            Bodies.rectangle(400, 600, 800, 50, {isStatic: true}),
            Bodies.rectangle(800, 300, 50, 600, {isStatic: true}),
            Bodies.rectangle(0, 300, 50, 600, {isStatic: true}),
        ]);

        var scale = 0.9;
        World.add(
            world,
            Composites.car(150, 100, 150 * scale, 30 * scale, 30 * scale)
        );

        scale = 0.8;
        World.add(
            world,
            Composites.car(350, 300, 150 * scale, 30 * scale, 30 * scale)
        );

        World.add(world, [
            Bodies.rectangle(200, 150, 400, 20, {
                isStatic: true,
                angle: Math.PI * 0.06,
            }),
            Bodies.rectangle(500, 350, 650, 20, {
                isStatic: true,
                angle: -Math.PI * 0.06,
            }),
            Bodies.rectangle(300, 560, 600, 20, {
                isStatic: true,
                angle: Math.PI * 0.04,
            }),
        ]);

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false,
                    },
                },
            });

        World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: {x: 0, y: 0},
            max: {x: 800, y: 600},
        });

        // context for MatterTools.Demo
        return {
            engine: engine,
            runner: runner,
            render: render,
            canvas: render.canvas,
            stop: function () {
                Matter.Render.stop(render);
                Matter.Runner.stop(runner);
            },
        };
    };

    car();
}

function matterJSExample(canvas) {
    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        canvas,
        engine: engine,
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});

    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}

function multiCanvas(canvas) {
    if (canvas.id === "canvas1") {
        swarm(canvas);
    }
    if (canvas.id === "canvas2") {
        clock(canvas);
    }

    if (canvas.id === "canvas3") {
        solar(canvas);
    }
    if (canvas.id === "canvas4") {
        main(canvas);
    }
}

function pointStyle(canvas) {
    var color = Chart.helpers.color;

    function createConfig(colorName) {
        return {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        backgroundColor: color(chartColors[colorName])
                            .alpha(0.5)
                            .rgbString(),
                        borderColor: chartColors[colorName],
                        borderWidth: 1,
                        pointStyle: "rectRot",
                        pointRadius: 5,
                        pointBorderColor: "rgb(0, 0, 0)",
                    },
                ],
            },
            options: {
                responsive: true,
                legend: {
                    labels: {
                        usePointStyle: false,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Value",
                            },
                        },
                    ],
                },
                title: {
                    display: true,
                    text: "Normal Legend",
                },
            },
        };
    }

    function createPointStyleConfig(colorName) {
        var config = createConfig(colorName);
        config.options.legend.labels.usePointStyle = true;
        config.options.title.text = "Point Style Legend";
        return config;
    }

    [
        {
            id: "chart-legend-normal",
            config: createConfig("red"),
        },
        {
            id: "chart-legend-pointstyle",
            config: createPointStyleConfig("blue"),
        },
    ].forEach(function (details) {
        var ctx = canvas.getContext("2d");
        new Chart(ctx, details.config);
    });
}

function lineBoundaries(canvas) {
    var presets = chartColors;
    var inputs = {
        min: -100,
        max: 100,
        count: 8,
        decimals: 2,
        continuity: 1,
    };

    function generateData(config?) {
        return utils.numbers(Chart.helpers.merge(inputs, config || {}));
    }

    function generateLabels(config?) {
        return utils.months(
            Chart.helpers.merge(
                {
                    count: inputs.count,
                    section: 3,
                },
                config || {}
            )
        );
    }

    var options = {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001,
            },
        },
        plugins: {
            filler: {
                propagate: false,
            },
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                    },
                },
            ],
        },
    };

    [false, "origin", "start", "end"].forEach(function (boundary, index) {
        // reset the random seed to generate the same data for all charts
        utils.srand(8);

        new Chart(canvas, {
            type: "line",
            data: {
                labels: generateLabels(),
                datasets: [
                    {
                        backgroundColor: utils.transparentize(presets.red),
                        borderColor: presets.red,
                        data: generateData(),
                        label: "Dataset",
                        fill: boundary,
                    },
                ],
            },
            options: Chart.helpers.merge(options, {
                title: {
                    text: "fill: " + boundary,
                    display: true,
                },
            }),
        });
    });

    // eslint-disable-next-line no-unused-vars
    function toggleSmooth(btn) {
        var value = btn.classList.toggle("btn-on");
        Chart.helpers.each(Chart.instances, function (chart) {
            chart.options.elements.line.tension = value ? 0.4 : 0.000001;
            chart.update();
        });
    }

    // eslint-disable-next-line no-unused-vars
    function randomize() {
        var seed = utils.rand();
        Chart.helpers.each(Chart.instances, function (chart) {
            utils.srand(seed);

            chart.data.datasets.forEach(function (dataset) {
                dataset.data = generateData();
            });

            chart.update();
        });
    }
}

function ellipse(canvas) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.ellipse(60, 75, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(150, 75, 50, 30, Math.PI * 0.25, 0, Math.PI);
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.ellipse(240, 75, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
    ctx.fill();
}

function drawPatternWithCanvas(canvas) {
    const patternCanvas = (TNSCanvas as any).createCustomView() as any;

    const patternContext = patternCanvas.getContext("2d") as any;

    // Give the pattern a width and height of 50
    patternCanvas.width = 50;
    patternCanvas.height = 50;

    //  patternCanvas.getContext('2d') as any;

    const scale = screen.mainScreen.scale;
    // Give the pattern a background color and draw an arc
    patternContext.fillStyle = "#fec";
    patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
    patternContext.arc(0, 0, 50 * scale, 0, 0.5 * Math.PI);
    patternContext.stroke();

    // Create our primary canvas and fill it with the pattern
    const ctx = canvas.getContext("2d");
    const pattern = ctx.createPattern(patternCanvas, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function donutChart(canvas) {
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: "doughnut",
        data: {
            datasets: [
                {
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        chartColors.red,
                        chartColors.orange,
                        chartColors.yellow,
                        chartColors.green,
                        chartColors.blue,
                    ],
                    label: "Dataset 1",
                },
            ],
            labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        },
        options: {
            responsive: true,
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Doughnut Chart",
            },
            animation: {
                animateScale: true,
                animateRotate: true,
            },
        },
    };

    const myDoughnut = new Chart(canvas, config);

    function randomizeData() {
        config.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });

        myDoughnut.update();
    }

    var colorNames = Object.keys(chartColors);

    function addDataset() {
        var newDataset = {
            backgroundColor: [],
            data: [],
            label: "New dataset " + config.data.datasets.length,
        };

        for (var index = 0; index < config.data.labels.length; ++index) {
            newDataset.data.push(randomScalingFactor());

            var colorName = colorNames[index % colorNames.length];
            var newColor = chartColors[colorName];
            newDataset.backgroundColor.push(newColor);
        }

        config.data.datasets.push(newDataset);
        myDoughnut.update();
    }

    function addData() {
        if (config.data.datasets.length > 0) {
            config.data.labels.push("data #" + config.data.labels.length);

            var colorName =
                colorNames[
                config.data.datasets[0].data.length % colorNames.length
                    ];
            var newColor = chartColors[colorName];

            config.data.datasets.forEach(function (dataset) {
                dataset.data.push(randomScalingFactor());
                dataset.backgroundColor.push(newColor);
            });

            myDoughnut.update();
        }
    }

    function removeDataset() {
        config.data.datasets.splice(0, 1);
        myDoughnut.update();
    }

    function removeData() {
        config.data.labels.splice(-1, 1); // remove the label first

        config.data.datasets.forEach(function (dataset) {
            dataset.data.pop();
            dataset.backgroundColor.pop();
        });

        myDoughnut.update();
    }

    function changeCircleSize() {
        if (myDoughnut.options.circumference === Math.PI) {
            myDoughnut.options.circumference = 2 * Math.PI;
            myDoughnut.options.rotation = -Math.PI / 2;
        } else {
            myDoughnut.options.circumference = Math.PI;
            myDoughnut.options.rotation = -Math.PI;
        }

        myDoughnut.update();
    }

    setTimeout(() => {
        addData();
    }, 3000);
}

function clock(canvas) {
    let scale = false;

    function clock() {
        var now = new Date();
        var ctx = canvas.getContext("2d");
        ctx.save();
        ctx.clearRect(0, 0, 150, 150);
        ctx.translate(75, 75);
        ctx.scale(0.4, 0.4);
        ctx.rotate(-Math.PI / 2);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";

        // Hour marks
        ctx.save();
        for (var i = 0; i < 12; i++) {
            ctx.beginPath();
            ctx.rotate(Math.PI / 6);
            ctx.moveTo(100, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.restore();

        // Minute marks
        ctx.save();
        ctx.lineWidth = 5;
        for (i = 0; i < 60; i++) {
            if (i % 5 != 0) {
                ctx.beginPath();
                ctx.moveTo(117, 0);
                ctx.lineTo(120, 0);
                ctx.stroke();
            }
            ctx.rotate(Math.PI / 30);
        }
        ctx.restore();

        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr = now.getHours();
        hr = hr >= 12 ? hr - 12 : hr;

        ctx.fillStyle = "black";

        // write Hours
        ctx.save();
        ctx.rotate(
            hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec
        );
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(80, 0);
        ctx.stroke();
        ctx.restore();

        // write Minutes
        ctx.save();
        ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(-28, 0);
        ctx.lineTo(112, 0);
        ctx.stroke();
        ctx.restore();

        // Write seconds
        ctx.save();
        ctx.rotate((sec * Math.PI) / 30);
        ctx.strokeStyle = "#D40000";
        ctx.fillStyle = "#D40000";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-30, 0);
        ctx.lineTo(83, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = "#325FA2";
        ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
        ctx.stroke();

        ctx.restore();

        requestAnimationFrame(clock);
    }

    requestAnimationFrame(clock);
}

export async function solar(canvas) {
    var sun = await ImageSource.fromUrl(
        "https://mdn.mozillademos.org/files/1456/Canvas_sun.png"
    );
    var moon = await ImageSource.fromUrl(
        "https://mdn.mozillademos.org/files/1443/Canvas_moon.png"
    );
    var earth = await ImageSource.fromUrl(
        "https://mdn.mozillademos.org/files/1429/Canvas_earth.png"
    );

    function init() {
        window.requestAnimationFrame(draw);
    }

    let didScale = false;

    function draw() {
        var ctx = canvas.getContext("2d");

        ctx.globalCompositeOperation = "destination-over";
        ctx.clearRect(0, 0, 300, 300); // clear canvas

        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
        ctx.save();
        ctx.translate(150, 150);

        // Earth
        var time = new Date();
        ctx.rotate(
            ((2 * Math.PI) / 60) * time.getSeconds() +
            ((2 * Math.PI) / 60000) * time.getMilliseconds()
        );
        ctx.translate(105, 0);
        ctx.fillRect(0, -12, 40, 24); // Shadow
        ctx.drawImage(earth, -12, -12);

        // Moon
        ctx.save();
        ctx.rotate(
            ((2 * Math.PI) / 6) * time.getSeconds() +
            ((2 * Math.PI) / 6000) * time.getMilliseconds()
        );
        ctx.translate(0, 28.5);
        ctx.drawImage(moon, -3.5, -3.5);
        ctx.restore();

        ctx.restore();

        ctx.beginPath();
        ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
        ctx.stroke();

        ctx.drawImage(sun, 0, 0, 300, 300);

        if (!didScale) {
            ctx.scale(canvas.clientWidth / 300, canvas.clientHeight / 300);
            didScale = true;
        }

        window.requestAnimationFrame(draw);
    }

    init();
}

/* TODO after SVG
import * as d3 from 'd3';
export function d3Example(canvas){
    var mouse = [480, 250],
    count = 0;

var svg = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 500);

var g = svg.selectAll("g")
    .data(d3.range(25))
  .enter().append("g")
    .attr("transform", "translate(" + mouse + ")");

g.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -12.5)
    .attr("y", -12.5)
    .attr("width", 25)
    .attr("height", 25)
    .attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; })
    .style("fill", d3.scale.category20c());

g.datum(function(d) {
  return {center: mouse.slice(), angle: 0};
});

svg.on("mousemove", function() {
  mouse = d3.mouse(this);
});

d3.timer(function() {
  count++;
  g.attr("transform", function(d, i) {
    d.center[0] += (mouse[0] - d.center[0]) / (i + 5);
    d.center[1] += (mouse[1] - d.center[1]) / (i + 5);
    d.angle += Math.sin((count + i) / 10) * 7;
    return "translate(" + d.center + ")rotate(" + d.angle + ")";
  });
});
}
*/
const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
};

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const COLORS = [
    "#4dc9f6",
    "#f67019",
    "#f53794",
    "#537bc4",
    "#acc236",
    "#166a8f",
    "#00a950",
    "#58595b",
    "#8549ba",
];

const utils = {
    // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
    srand: function (seed) {
        this._seed = seed;
    },

    rand: function (min?, max?) {
        var seed = this._seed;
        min = min === undefined ? 0 : min;
        max = max === undefined ? 1 : max;
        this._seed = (seed * 9301 + 49297) % 233280;
        return min + (this._seed / 233280) * (max - min);
    },

    numbers: function (config) {
        var cfg = config || {};
        var min = cfg.min || 0;
        var max = cfg.max || 1;
        var from = cfg.from || [];
        var count = cfg.count || 8;
        var decimals = cfg.decimals || 8;
        var continuity = cfg.continuity || 1;
        var dfactor = Math.pow(10, decimals) || 0;
        var data = [];
        var i, value;

        for (i = 0; i < count; ++i) {
            value = (from[i] || 0) + this.rand(min, max);
            if (this.rand() <= continuity) {
                data.push(Math.round(dfactor * value) / dfactor);
            } else {
                data.push(null);
            }
        }

        return data;
    },

    labels: function (config) {
        var cfg = config || {};
        var min = cfg.min || 0;
        var max = cfg.max || 100;
        var count = cfg.count || 8;
        var step = (max - min) / count;
        var decimals = cfg.decimals || 8;
        var dfactor = Math.pow(10, decimals) || 0;
        var prefix = cfg.prefix || "";
        var values = [];
        var i;

        for (i = min; i < max; i += step) {
            values.push(prefix + Math.round(dfactor * i) / dfactor);
        }

        return values;
    },

    months: function (config) {
        var cfg = config || {};
        var count = cfg.count || 12;
        var section = cfg.section;
        var values = [];
        var i, value;

        for (i = 0; i < count; ++i) {
            value = MONTHS[Math.ceil(i) % 12];
            values.push(value.substring(0, section));
        }

        return values;
    },

    color: function (index) {
        return COLORS[index % COLORS.length];
    },

    transparentize: function (color, opacity?) {
        var alpha = (opacity === undefined ? 0.5 : 1 - opacity) * 255;
        const c = new Color(color);
        const newColor = new Color(alpha, c.r, c.g, c.b);
        return `rgba(${newColor.r},${newColor.g},${newColor.b},${
            newColor.a / 255
        })`;
    },
};
var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

function polarChart(canvas) {
    var DATA_COUNT = 7;

    utils.srand(110);

    function colorize(opaque, hover, ctx) {
        var v = ctx.dataset.data[ctx.dataIndex];
        var c =
            v < 35
                ? "#D60000"
                : v < 55
                ? "#F46300"
                : v < 75
                    ? "#0358B6"
                    : "#44DE28";

        var opacity = hover
            ? 1 - Math.abs(v / 150) - 0.2
            : 1 - Math.abs(v / 150);

        return opaque ? c : utils.transparentize(c, opacity);
    }

    function hoverColorize(ctx) {
        return colorize(false, true, ctx);
    }

    function generateData() {
        return utils.numbers({
            count: DATA_COUNT,
            min: 0,
            max: 100,
        });
    }

    var data = {
        datasets: [
            {
                data: generateData(),
            },
        ],
    };

    var options = {
        legend: false,
        tooltips: false,
        elements: {
            arc: {
                backgroundColor: colorize.bind(null, false, false),
                hoverBackgroundColor: hoverColorize,
            },
        },
    };

    var chart = new Chart(canvas, {
        type: "polarArea",
        data: data,
        options: options,
    });

    // eslint-disable-next-line no-unused-vars
    function randomize() {
        chart.data.datasets.forEach(function (dataset) {
            dataset.data = generateData();
        });
        chart.update();
    }

    // eslint-disable-next-line no-unused-vars
    var addData = function () {
        var newData = Math.round(Math.random() * 100);
        chart.data.datasets[0].data.push(newData);
        chart.update();
    };

    // eslint-disable-next-line no-unused-vars
    function removeData() {
        chart.data.datasets[0].data.pop();
        chart.update();
    }

    setTimeout(() => {
        addData();

        setTimeout(() => {
            randomize();

            setTimeout(() => {
                removeData();
            }, 3000);
        }, 3000);
    }, 3000);
}

function bubbleChart(canvas) {
    var DATA_COUNT = 16;
    var MIN_XY = -150;
    var MAX_XY = 100;

    utils.srand(110);

    function colorize(opaque, context) {
        var value = context.dataset.data[context.dataIndex];
        var x = value.x / 100;
        var y = value.y / 100;
        var r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
        var g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
        var b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
        var a = opaque ? 1 : (0.5 * value.v) / 1000;
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }

    function generateData() {
        var data = [];
        var i;

        for (i = 0; i < DATA_COUNT; ++i) {
            data.push({
                x: utils.rand(MIN_XY, MAX_XY),
                y: utils.rand(MIN_XY, MAX_XY),
                v: utils.rand(0, 1000),
            });
        }

        return data;
    }

    var data = {
        datasets: [
            {
                data: generateData(),
            },
            {
                data: generateData(),
            },
        ],
    };

    var options = {
        aspectRatio: 1,
        legend: false,
        tooltips: false,
        responsive: true,
        elements: {
            point: {
                backgroundColor: colorize.bind(null, false),

                borderColor: colorize.bind(null, true),

                borderWidth: function (context) {
                    return Math.min(Math.max(1, context.datasetIndex + 1), 8);
                },

                hoverBackgroundColor: "transparent",

                hoverBorderColor: function (context) {
                    return utils.color(context.datasetIndex);
                },

                hoverBorderWidth: function (context) {
                    var value = context.dataset.data[context.dataIndex];
                    return Math.round((8 * value.v) / 1000);
                },

                radius: function (context) {
                    var value = context.dataset.data[context.dataIndex];
                    var size = context.chart.width;
                    var base = Math.abs(value.v) / 1000;
                    return (size / 24) * base;
                },
            },
        },
    };

    var chart = new Chart(canvas, {
        type: "bubble",
        data: data,
        options: options,
    });

    // eslint-disable-next-line no-unused-vars
    function randomize() {
        chart.data.datasets.forEach(function (dataset) {
            dataset.data = generateData();
        });
        chart.update();
    }

    // eslint-disable-next-line no-unused-vars
    function addDataset() {
        chart.data.datasets.push({
            data: generateData(),
        });
        chart.update();
    }

    // eslint-disable-next-line no-unused-vars
    function removeDataset() {
        chart.data.datasets.shift();
        chart.update();
    }

    setTimeout(() => {
        addDataset();
    }, 5000);
}

function hBarChart(canvas) {
    var color = Chart.helpers.color;
    var horizontalBarChartData = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: "Dataset 1",
                backgroundColor: utils.transparentize(chartColors.red, 0.5),
                borderColor: chartColors.red,
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
            },
            {
                label: "Dataset 2",
                backgroundColor: utils.transparentize(chartColors.blue, 0.5),
                borderColor: chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
            },
        ],
    };

    const myHorizontalBar = new Chart(canvas, {
        type: "horizontalBar",
        data: horizontalBarChartData,
        options: {
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
                rectangle: {
                    borderWidth: 2,
                },
            },
            responsive: true,
            legend: {
                position: "right",
            },
            title: {
                display: true,
                text: "Chart.js Horizontal Bar Chart",
            },
        },
    });

    function randomizeData() {
        var zero = Math.random() < 0.2 ? true : false;
        horizontalBarChartData.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return zero ? 0.0 : randomScalingFactor();
            });
        });
        myHorizontalBar.update();
    }

    var colorNames = Object.keys(chartColors);

    function addDataset() {
        var colorName =
            colorNames[
            horizontalBarChartData.datasets.length % colorNames.length
                ];
        var dsColor = chartColors[colorName];
        var newDataset = {
            label: "Dataset " + (horizontalBarChartData.datasets.length + 1),
            backgroundColor: color(dsColor).alpha(0.5).rgbString(),
            borderColor: dsColor,
            data: [],
        };

        for (
            var index = 0;
            index < horizontalBarChartData.labels.length;
            ++index
        ) {
            newDataset.data.push(randomScalingFactor());
        }

        horizontalBarChartData.datasets.push(newDataset);
        myHorizontalBar.update();
    }

    function addData() {
        if (horizontalBarChartData.datasets.length > 0) {
            var month =
                MONTHS[horizontalBarChartData.labels.length % MONTHS.length];
            horizontalBarChartData.labels.push(month);

            for (
                var index = 0;
                index < horizontalBarChartData.datasets.length;
                ++index
            ) {
                horizontalBarChartData.datasets[index].data.push(
                    randomScalingFactor()
                );
            }

            myHorizontalBar.update();
        }
    }

    function removeDataset() {
        horizontalBarChartData.datasets.pop();
        myHorizontalBar.update();
    }

    function removeData() {
        horizontalBarChartData.labels.splice(-1, 1); // remove the label first

        horizontalBarChartData.datasets.forEach(function (dataset) {
            dataset.data.pop();
        });

        myHorizontalBar.update();
    }
}

function dataSets(canvas) {
    var presets = chartColors;
    var inputs = {
        min: 20,
        max: 80,
        count: 8,
        decimals: 2,
        continuity: 1,
    };

    function generateData() {
        return utils.numbers(inputs);
    }

    function generateLabels() {
        return utils.months({count: inputs.count});
    }

    utils.srand(42);

    var data = {
        labels: generateLabels(),
        datasets: [
            {
                backgroundColor: utils.transparentize(presets.red),
                borderColor: presets.red,
                data: generateData(),
                hidden: true,
                label: "D0",
            },
            {
                backgroundColor: utils.transparentize(presets.orange),
                borderColor: presets.orange,
                data: generateData(),
                label: "D1",
                fill: "-1",
            },
            {
                backgroundColor: utils.transparentize(presets.yellow),
                borderColor: presets.yellow,
                data: generateData(),
                hidden: true,
                label: "D2",
                fill: 1,
            },
            {
                backgroundColor: utils.transparentize(presets.green),
                borderColor: presets.green,
                data: generateData(),
                label: "D3",
                fill: "-1",
            },
            {
                backgroundColor: utils.transparentize(presets.blue),
                borderColor: presets.blue,
                data: generateData(),
                label: "D4",
                fill: "-1",
            },
            {
                backgroundColor: utils.transparentize(presets.grey),
                borderColor: presets.grey,
                data: generateData(),
                label: "D5",
                fill: "+2",
            },
            {
                backgroundColor: utils.transparentize(presets.purple),
                borderColor: presets.purple,
                data: generateData(),
                label: "D6",
                fill: false,
            },
            {
                backgroundColor: utils.transparentize(presets.red),
                borderColor: presets.red,
                data: generateData(),
                label: "D7",
                fill: 8,
            },
            {
                backgroundColor: utils.transparentize(presets.orange),
                borderColor: presets.orange,
                data: generateData(),
                hidden: true,
                label: "D8",
                fill: "end",
            },
        ],
    };

    var options = {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001,
            },
        },
        scales: {
            yAxes: [
                {
                    stacked: true,
                },
            ],
        },
        plugins: {
            filler: {
                propagate: false,
            },
            "samples-filler-analyser": {
                target: "chart-analyser",
            },
        },
    };

    var chart = new Chart(canvas, {
        type: "line",
        data: data,
        options: options,
    });

    // eslint-disable-next-line no-unused-vars
    function togglePropagate(btn) {
        var value = btn.classList.toggle("btn-on");
        chart.options.plugins.filler.propagate = value;
        chart.update();
    }

    // eslint-disable-next-line no-unused-vars
    function toggleSmooth(btn) {
        var value = btn.classList.toggle("btn-on");
        chart.options.elements.line.tension = value ? 0.4 : 0.000001;
        chart.update();
    }

    // eslint-disable-next-line no-unused-vars
    function randomize() {
        chart.data.datasets.forEach(function (dataset) {
            dataset.data = generateData();
        });
        chart.update();
    }
}

function chartJSPie(canvas) {
    var config = {
        type: "pie",
        data: {
            datasets: [
                {
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        chartColors.red,
                        chartColors.orange,
                        chartColors.yellow,
                        chartColors.green,
                        chartColors.blue,
                    ],
                    label: "Dataset 1",
                },
            ],
            labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        },
        options: {
            responsive: true,
        },
    };

    const myPie = new Chart(canvas.getContext("2d"), config);
}

function chartJS(canvas) {
    //var ctx = canvas.getContext('2d');

    var myChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    });
}

export function toggle(args) {
    //vm.set("show", !vm.get("show"));
    //  drawPatternWithCanvas(canvas);
}

function clear2D(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillColor = "black";
    ctx.strokeColor = "black";
    ctx.clearRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());
}

function clearGL(canvas) {
    const ctx = canvas.getContext("webgl");
    ctx.clearColor(1, 1, 1, 1);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
    ctx.canvas.flush();
}

function clearGL2(canvas) {
    const ctx = canvas.getContext("webgl2");
    ctx.clearColor(1, 1, 1, 1);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
    ctx.canvas.flush();
}

function changeTextColor(value) {
    vm.set("textColor", value);
}

let last;

function cleanup() {
    switch (last) {
        case "swarm":
            cancelAnimationFrame(swarmLAF);
            break;
        case "colorRain":
            cancelAnimationFrame(colorRainLAF);
            break;
        case "particlesLarge":
            clearInterval(particlesLargeLAF);
            break;
        case "rainbowOctopus":
            cancelAnimationFrame(rainbowOctopusLAF);
            break;
        case "particlesColor":
            cancelAnimationFrame(particlesColorLAF);
            break;
        case "textures":
            break;
        case "drawElements":
            break;
        case "interactiveCube":
            cancelAnimationFrame(interactiveCubeLAF);
            break;
        case "main":
            cancelAnimationFrame(mainLAF);
            break;
        case "draw_instanced":
            break;
        case "draw_image_space":
            break;
        case "fog":
            cancelAnimationFrame(fogLAF);
            break;
        case "environmentMap":
            cancelAnimationFrame(environmentMapLAF);
            break;
        default:
            break;
    }
}

function save2D() {
    if (!last) {
        canvas.getContext("2d").save();
    }
}

function restore2D() {
    canvas.getContext("2d").restore();
}

export function tap(args) {
    const type = args.view.bindingContext.type || null;
    changeTextColor("white");
    cleanup();
    switch (type) {
        case "swarm":
            save2D();
            clear2D(canvas);
            restore2D();
            swarm(canvas);
            changeTextColor("white");
            last = "swarm";
            break;
        case "colorRain":
            save2D();
            clear2D(canvas);
            restore2D();
            colorRain(canvas);
            changeTextColor("white");
            last = "colorRain";
            break;
        case "particlesLarge":
            save2D();
            clear2D(canvas);
            restore2D();
            particlesLarge(canvas);
            changeTextColor("black");
            last = "particlesLarge";
            break;
        case "rainbowOctopus":
            save2D();
            clear2D(canvas);
            restore2D();
            rainbowOctopus(canvas);
            changeTextColor("black");
            last = "rainbowOctopus";
            break;
        case "particlesColor":
            save2D();
            clear2D(canvas);
            restore2D();
            particlesColor(canvas);
            changeTextColor("white");
            last = "particlesColor";
            break;
        case "textures":
            clearGL(canvas);
            textures(canvas);
            changeTextColor("white");
            last = "textures";
            break;
        case "drawElements":
            clearGL(canvas);
            drawElements(canvas);
            changeTextColor("black");
            last = "drawElements";
            break;
        case "drawModes":
            clearGL(canvas);
            drawModes(canvas);
            changeTextColor("black");
            last = "drawModes";
            break;
        case "interactiveCube":
            clearGL(canvas);
            interactiveCube(canvas);
            last = "interactiveCube";
            break;
        case "main":
            clearGL(canvas);
            main(canvas);
            changeTextColor("white");
            break;
        case "draw_instanced":
            clearGL2(canvas);
            draw_instanced(canvas);
            last = "draw_instanced";
            break;
        case "draw_image_space":
            clearGL2(canvas);
            draw_image_space(canvas);
            last = "draw_image_space";
            break;
        case "cubeRotationRotation":
            clearGL2(canvas);
            cubeRotationRotation(canvas);
            last = "draw_image_space";
            changeTextColor("black");
            break;
        case "fog":
            clearGL2(canvas);
            fog(canvas);
            last = "fog";
            break;
        case "environmentMap":
            clearGL2(canvas);
            environmentMap(canvas);
            last = "environmentMap";
            break;
    }
}

export function clear(args) {
    // ctx.clearRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());
    // ctx.fillStyle = 'red'
    ///ctx.fillRect(0, 0, canvas.getMeasuredWidth(), canvas.getMeasuredHeight());
    //const imageData = ctx.createImageData(100, 100);
    /*
    // Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i] = 190; // R value
        imageData.data[i + 1] = 0; // G value
        imageData.data[i + 2] = 210; // B value
        imageData.data[i + 3] = 255; // A value
    }
    ctx.createImageData(imageData);

    // Draw image data to the canvas
    ctx.putImageData(imageData, 20, 20);

    */
}

let vm = new HomeViewModel();

export function loaded(args) {
    page = <Page>args.object;
    page.bindingContext = vm;
    // canvas = page.getViewById("canvas");
    // ctx = canvas.getContext("2d") as TNSCanvasRenderingContext2D;
}

export function arcAnimation(ctx) {
    ctx.scale(2, 2);
    const mouse = {x: 0, y: 0};

    let r = 100; // Radius
    const p0 = {x: 0, y: 50};

    const p1 = {x: 100, y: 100};
    const p2 = {x: 150, y: 50};
    const p3 = {x: 200, y: 100};

    const labelPoint = function (p, offset, i = 0) {
        const {x, y} = offset;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill("");
        ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
    };

    const drawPoints = function (points) {
        for (let i = 0; i < points.length; i++) {
            var p = points[i];
            labelPoint(p, {x: 0, y: -20}, i);
        }
    };

    // Draw arc
    const drawArc = function ([p0, p1, p2], r) {
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    };

    let t0 = 0;
    let rr = 0; // the radius that changes over time
    let a = 0; // angle
    let PI2 = Math.PI * 2;
    const loop = function (t) {
        t0 = t / 1000;
        a = t0 % PI2;
        rr = Math.abs(Math.cos(a) * r);

        ctx.clearRect(
            0,
            0,
            canvas.getMeasuredWidth(),
            canvas.getMeasuredHeight()
        );

        drawArc([p1, p2, p3], rr);
        drawPoints([p1, p2, p3]);
        requestAnimationFrame(loop);
    };

    loop(0);
}
