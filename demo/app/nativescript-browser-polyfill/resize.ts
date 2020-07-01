import * as platform from "@nativescript/core/platform";
import * as app from "@nativescript/core/application";
/*
 Window Resize Stub
*/

const scale = platform.screen.mainScreen.scale;

(global as any).window.devicePixelRatio = (global as any).devicePixelRatio = scale;
(global as any).window.innerWidth = (global as any).innerWidth =
    platform.screen.mainScreen.widthPixels;
(global as any).window.clientWidth = (global as any).clientWidth =
    platform.screen.mainScreen.widthPixels;
(global as any).window.innerHeight = (global as any).innerHeight =
    platform.screen.mainScreen.heightPixels;
(global as any).window.clientHeight = (global as any).clientHeight =
    platform.screen.mainScreen.heightPixels;
(global as any).window.screen = (global as any).screen =
    (global as any).screen || {};
(global as any).window.screen.orientation = (global as any).screen.orientation =
    (global as any).screen.orientation ||
    (global as any).clientWidth < (global as any).clientHeight
        ? 0
        : 90;

if (!(global as any).__TNS_BROWSER_POLYFILL_RESIZE) {
    (global as any).__TNS_BROWSER_POLYFILL_RESIZE = true;
    app.on("orientationChanged", (args: app.OrientationChangedEventData) => {
        let width = 0;
        let height = 0;
        switch (args.newValue) {
            case "portrait":
                width = platform.screen.mainScreen.widthPixels;
                height = platform.screen.mainScreen.heightPixels;
                break;
            default:
                width = platform.screen.mainScreen.heightPixels;
                height = platform.screen.mainScreen.widthPixels;
                break;
        }

        (global as any).window.devicePixelRatio = (global as any).devicePixelRatio = scale;
        (global as any).window.innerWidth = (global as any).innerWidth = width;
        (global as any).window.clientWidth = (global as any).clientWidth = width;
        (global as any).window.innerHeight = (global as any).innerHeight = height;
        (global as any).window.clientHeight = (global as any).clientHeight = height;

        (global as any).window.orientation = (global as any).orientation =
            args.newValue === "portrait" ? 0 : 90;
        (global as any).window.screen.orientation = (global as any).screen.orientation = (global as any).orientation;
        if ((global as any).emitter && (global as any).emitter.emit) {
            (global as any).emitter.emit("resize");
        }
    });
}
