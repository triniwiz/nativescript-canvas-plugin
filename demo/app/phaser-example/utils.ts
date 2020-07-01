import { ImageSource } from "@nativescript/core/image-source/image-source";
import * as fs from "@nativescript/core/file-system";
const icon = "~/assets/icon.png";
const bullet = "~/assets/files/bullet.png";
const enemyBullet = "~/assets/files/enemy-bullet.png";
const explode = "~/assets/files/explode.png";
const invader = "~/assets/files/invader32x32x4.png";
const player = "~/assets/files/player.png";
const starfield = "~/assets/files/starfield.png";

export const images = {
    icon,
    files: {
        bullet,
        enemyBullet,
        explode,
        invader,
        player,
        starfield,
    },
};

const imageSourceCache = {};

function cacheImages(images: any) {
    const imageArray = Object.keys(images).map((key) => images[key]);
    return imageArray.map((image) => {
        return new Promise((resolve, reject) => {
            ImageSource.fromFile(image)
                .then((imageSrc) => {
                    imageSourceCache[image] = imageSrc;
                    resolve(imageSrc);
                })
                .catch((e) => {
                    reject(e);
                });
        });
    });
}
function uri(value) {
    if (value.startsWith("~/")) {
        return fs.path.join(
            fs.knownFolders.currentApp().path,
           value.replace("~/", "")
        );
    }
    return imageSourceCache[value];
}

export const func = {
    cacheImages,
    uri,
};
