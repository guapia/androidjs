

namespace android.graphics {

    import Rect = android.graphics.Rect;

    export enum Gravity {
        Left,
        Center,
        Right,
        Top,
        Bottom,
        Auto,
    }

    export class Padding {
        leftPadding: number;
        rightPadding: number;
        topPadding: number;
        bottomPadding: number;
        constructor(padding?: number) {
            if (padding) {
                this.padding = padding;
            } else {
                this.padding = 0;
            }
        }
        set padding(padding: number) {
            this.leftPadding = this.rightPadding = this.topPadding = this.bottomPadding = padding;
        }
    }

    export enum Position {
        Left,
        Top,
        Right,
        Bottom
    }

    export enum Orientation {
        Horizontal,
        Vertical
    }

    export class StrokeStyle {

        strokeWidth: number;
        strokeColor: string;
        dash:number[];
        dashOffset:number;
        constructor(strokewidth: number, strokecolor: string,dash?:number[],dashoffset?:number) {
            this.strokeWidth = strokewidth;
            this.strokeColor = strokecolor;
            if(dash != null && dash instanceof Array && dash.length > 0){
                this.dash = dash;
                if(dashoffset != null && !isNaN(dashoffset)){
                    this.dashOffset = dashoffset;
                }
            }
        }
        getCssStyle() {
            return {
                'stroke-width': this.strokeWidth,
                'stroke': this.strokeColor
            }
        }
        clone() {
            return new StrokeStyle(this.strokeWidth, this.strokeColor)
        }
    }

    export class Font {
        constructor(fz: number, fm: string, fc: string) {
            this.fontSize = fz;
            this.fontFamily = fm;
            this.fontColor = fc;
            if (!this.fontFamily || this.fontFamily === "") {
                this.fontFamily = 'Arial';
            }
        }
        fontSize: number;
        fontFamily: string;
        fontColor: string;
        toString() {
            return " fontSize = " + this.fontSize + ", fontFamily = " + this.fontFamily + ", fontColor = " + this.fontFamily;
        }
        public clone(): Font {
            return new Font(this.fontSize, this.fontFamily, this.fontColor);
        }
    }

    export class Style {
        constructor(bg: string | FillStyle, stroke: StrokeStyle) {
            this.background = bg;
            this.strokeStyle = stroke;
        }
        background: string | FillStyle;
        strokeStyle: StrokeStyle;
    }

    export class Gradient {
        public colors:{offset:number,color:string}[] =[];
        constructor(colors:{offset:number,color:string}[]){
            this.colors = colors;
        }
    }

    export class LinearGradient extends Gradient {
        public startx: number;
        public starty: number;
        public endx:number;
        public endy:number;
        constructor(sx:number,sy:number,ex:number,ey:number,colors:{offset:number,color:string}[]){
            super(colors);
            this.startx =sx;
            this.starty =sy;
            this.endx = ex;
            this.endy = ey;

        }
    }

    export class RadialGradient extends Gradient {
        public centerx:number;
        public centery:number;
        public radius:number
        
        public centerx1:number;
        public centery1:number;
        public radius1:number;
        constructor(cx:number,cy:number,r:number,cx1:number,cy1:number,r1:number,colors:{offset:number,color:string}[]){
            super(colors);
            this.centerx =cx;
            this.centery = cy;
            this.radius = r;
            this.centerx1 =cx1;
            this.centery1 = cy1;
            this.radius1 = r1;
            
        }
    }

    export class Shadow {
        offsetx: number;
        offsety: number;
        color: string;
        blur: number;
    }

    export class FillStyle {
        public fill: Gradient | string;
        public shadow: Shadow;
        constructor() {
            this.fill = 'transparent';
        }
    }

    export class Util {
        static cloneDeep(object: any): any {
            if ((object == null) ||
                (typeof object === 'number') ||
                (typeof object === 'string') ||
                (typeof object === 'boolean')) {
                return object;
            } else if (Array.isArray(object)) {
                let items = [];
                for (let item of object) {
                    items.push(Util.cloneDeep(item));
                }
                return items;
            }
            else if (object instanceof Date) {
                return new Date(object.getTime());
            } else {
                let cloneObject: any = {};
                for (let key in object) {
                    if (typeof object[key] == 'function') {
                        cloneObject[key] = object[key];
                    } else {
                        cloneObject[key] = Util.cloneDeep(object[key]);
                    }
                }
                return cloneObject;
            }
        }

        static contains(rect: Rect, pt: Point): boolean {
            if (pt.x <= rect.right && pt.x >= rect.left && pt.y <= rect.bottom && pt.y >= rect.top) {
                return true;
            }
            return false;
        }
        static getRect(start: Point, size: Size): Rect {
            let rect: Rect = new Rect(start.x, start.y, start.x + size.width, start.y + size.height);
            return rect;
        }
        static getStyleCss(style: Style) {
            return {

                "fill": style.background,
                "stroke": style.strokeStyle ? style.strokeStyle.strokeColor : "",
                "stroke-width": style.strokeStyle ? style.strokeStyle.strokeWidth : 0
            }
        }
        static union(...rects: Rect[]): Rect {
            let rect: Rect = new android.graphics.Rect(0, 0, 0, 0);
            rect.left = Math.min.apply(this, rects.map(e => e.left));
            rect.top = Math.min.apply(this, rects.map(e => e.top));
            rect.right = Math.max.apply(this, rects.map(e => e.right));
            rect.bottom = Math.max.apply(this, rects.map(e => e.bottom));
            return rect;
        }

        static hexToRgb(hex) {

            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                return r + r + g + g + b + b;
            });

            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        static rgbToHex(r, g, b) {
            return "#" + Util.componentToHex(r) + Util.componentToHex(g) + Util.componentToHex(b);
        }
        static componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        static asEnum(value: number, enumType: any, nullOK = false): number {
            if (value == null && nullOK) return null;
            var e = enumType[value];
            return typeof (e) === 'number' ? e : value;
        }
        static isMixed(r1: Rect, r2: Rect): boolean {
            var ismixed: boolean = false;
            if (Math.abs((r1.left + r1.right) / 2 - (r2.left + r2.right) / 2)
                < ((r1.right + r2.right - r1.left - r2.left) / 2) && Math.abs((r1.top + r1.bottom) / 2
                    - (r2.top + r2.bottom) / 2) < ((r1.bottom + r2.bottom - r1.top - r2.top) / 2)) {
                ismixed = true;
            }
            return ismixed;
        }

        static containsRect(r1: Rect, r2: Rect): boolean {
            let flg: boolean = r1.left <= r2.left &&
                r1.top <= r2.top &&
                r1.right >= r2.right &&
                r1.bottom >= r2.bottom;
            return flg;
        }

        // let flg1:boolean = r1.left <=r2.left &&
        // r1.top <= r2.top &&
        // r1.right >=r2.right &&
        // r1.bottom >= r2.bottom;

    }
}
