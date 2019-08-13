
export class ColorHandler {

    static HSLToRGB(hsl, isPct) {
        let ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
        if (ex.test(hsl)) {
            let sep = hsl.indexOf(',') > -1 ? ',' : ' ';
            hsl = hsl.substr(4).split(')')[0].split(sep);
            isPct = isPct === true;

            let h = hsl[0],
                s = hsl[1].substr(0, hsl[1].length - 1) / 100,
                l = hsl[2].substr(0, hsl[2].length - 1) / 100;

            // strip label and convert to degrees (if necessary)
            if (h.indexOf('deg') > -1)
                h = h.substr(0, h.length - 3);
            else if (h.indexOf('rad') > -1)
                h = Math.round(h.substr(0, h.length - 3) / (2 * Math.PI) * 360);
            else if (h.indexOf('turn') > -1)
                h = Math.round(h.substr(0, h.length - 4) * 360);
            // keep hue fraction of 360 if ending up over
            if (h >= 360)
                h %= 360;

            let c = (1 - Math.abs(2 * l - 1)) * s,
                x = c * (1 - Math.abs((h / 60) % 2 - 1)),
                m = l - c / 2,
                r = 0,
                g = 0,
                b = 0;

            if (0 <= h && h < 60) {
                r = c;
                g = x;
                b = 0;
            } else if (60 <= h && h < 120) {
                r = x;
                g = c;
                b = 0;
            } else if (120 <= h && h < 180) {
                r = 0;
                g = c;
                b = x;
            } else if (180 <= h && h < 240) {
                r = 0;
                g = x;
                b = c;
            } else if (240 <= h && h < 300) {
                r = x;
                g = 0;
                b = c;
            } else if (300 <= h && h < 360) {
                r = c;
                g = 0;
                b = x;
            }

            r = Math.round((r + m) * 255);
            g = Math.round((g + m) * 255);
            b = Math.round((b + m) * 255);

            if (isPct) {
                r = +(r / 255 * 100).toFixed(1);
                g = +(g / 255 * 100).toFixed(1);
                b = +(b / 255 * 100).toFixed(1);
            }

            return 'rgb(' + (isPct ? r + '%,' + g + '%,' + b + '%' : +r + ',' + +g + ',' + +b) + ')';

        } else {
            return 'Invalid input color';
        }
    }

    static HSLAToRGBA(hsla, isPct) {
        let ex = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
        if (ex.test(hsla)) {
            let sep = hsla.indexOf(',') > -1 ? ',' : ' ';
            hsla = hsla.substr(5).split(')')[0].split(sep);

            // strip the slash if using space-separated syntax
            if (hsla.indexOf('/') > -1)
                hsla.splice(3, 1);

            isPct = isPct === true;

            // must be fractions of 1
            let h = hsla[0],
                s = hsla[1].substr(0, hsla[1].length - 1) / 100,
                l = hsla[2].substr(0, hsla[2].length - 1) / 100,
                a = hsla[3];

            // strip label and convert to degrees (if necessary)
            if (h.indexOf('deg') > -1)
                h = h.substr(0, h.length - 3);
            else if (h.indexOf('rad') > -1)
                h = Math.round(h.substr(0, h.length - 3) / (2 * Math.PI) * 360);
            else if (h.indexOf('turn') > -1)
                h = Math.round(h.substr(0, h.length - 4) * 360);
            if (h >= 360)
                h %= 360;

            let c = (1 - Math.abs(2 * l - 1)) * s,
                x = c * (1 - Math.abs((h / 60) % 2 - 1)),
                m = l - c / 2,
                r = 0,
                g = 0,
                b = 0;

            if (0 <= h && h < 60) {
                r = c;
                g = x;
                b = 0;
            } else if (60 <= h && h < 120) {
                r = x;
                g = c;
                b = 0;
            } else if (120 <= h && h < 180) {
                r = 0;
                g = c;
                b = x;
            } else if (180 <= h && h < 240) {
                r = 0;
                g = x;
                b = c;
            } else if (240 <= h && h < 300) {
                r = x;
                g = 0;
                b = c;
            } else if (300 <= h && h < 360) {
                r = c;
                g = 0;
                b = x;
            }

            r = Math.round((r + m) * 255);
            g = Math.round((g + m) * 255);
            b = Math.round((b + m) * 255);

            let pctFound = a.indexOf('%') > -1;

            if (isPct) {
                r = +(r / 255 * 100).toFixed(1);
                g = +(g / 255 * 100).toFixed(1);
                b = +(b / 255 * 100).toFixed(1);
                if (!pctFound) {
                    a *= 100;
                } else {
                    a = a.substr(0, a.length - 1);
                }

            } else if (pctFound) {
                a = a.substr(0, a.length - 1) / 100;
            }

            return 'rgba(' + (isPct ? r + '%,' + g + '%,' + b + '%,' + a + '%' : +r + ',' + +g + ',' + +b + ',' + +a) + ')';

        } else {
            return 'Invalid input color';
        }
    }

}
