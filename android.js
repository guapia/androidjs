var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var android;
(function (android) {
    var app;
    (function (app) {
        var Intent = (function () {
            function Intent() {
            }
            Intent.prototype.setClass = function (c, activityClass) {
                this.context = c;
                this.targetActivityClass = activityClass;
            };
            Intent.prototype.getClass = function () {
                return this.targetActivityClass;
            };
            Intent.prototype.getContext = function () {
                return this.context;
            };
            return Intent;
        }());
        app.Intent = Intent;
    })(app = android.app || (android.app = {}));
})(android || (android = {}));
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        /**
         * Point holds two integer coordinates
         */
        var Point = (function () {
            function Point(x, y) {
                if (!isNaN(x)) {
                    this.x = x;
                }
                else {
                    this.x = 0;
                }
                if (!isNaN(y)) {
                    this.y = y;
                }
                else {
                    this.y = 0;
                }
            }
            /**
             * Set the point's x and y coordinates
             */
            Point.prototype.set = function (x, y) {
                this.x = x;
                this.y = y;
            };
            /**
             * Negate the point's coordinates
             */
            Point.prototype.negate = function () {
                this.x = -this.x;
                this.y = -this.y;
            };
            /**
             * Offset the point's coordinates by dx, dy
             */
            Point.prototype.offset = function (dx, dy) {
                this.x += dx;
                this.y += dy;
            };
            /**
             * Returns true if the point's coordinates equal (x,y)
             */
            Point.prototype.equals = function (x, y) {
                return this.x == x && this.y == y;
            };
            Point.prototype.equalPoint = function (pt) {
                return this.equals(pt.x, pt.y);
            };
            Point.prototype.hashCode = function () {
                var result = this.x;
                result = 31 * result + this.y;
                return result;
            };
            Point.prototype.toString = function () {
                return "Point(" + this.x + ", " + this.y + ")";
            };
            /**
             * Parcelable interface methods
             */
            Point.prototype.describeContents = function () {
                return 0;
            };
            Point.prototype.clone = function () {
                return new Point(this.x, this.y);
            };
            return Point;
        }());
        graphics.Point = Point;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var Rect = android.graphics.Rect;
        var Gravity;
        (function (Gravity) {
            Gravity[Gravity["Left"] = 0] = "Left";
            Gravity[Gravity["Center"] = 1] = "Center";
            Gravity[Gravity["Right"] = 2] = "Right";
            Gravity[Gravity["Top"] = 3] = "Top";
            Gravity[Gravity["Bottom"] = 4] = "Bottom";
            Gravity[Gravity["Auto"] = 5] = "Auto";
        })(Gravity = graphics.Gravity || (graphics.Gravity = {}));
        var Padding = (function () {
            function Padding(padding) {
                if (padding) {
                    this.padding = padding;
                }
                else {
                    this.padding = 0;
                }
            }
            Object.defineProperty(Padding.prototype, "padding", {
                set: function (padding) {
                    this.leftPadding = this.rightPadding = this.topPadding = this.bottomPadding = padding;
                },
                enumerable: true,
                configurable: true
            });
            return Padding;
        }());
        graphics.Padding = Padding;
        var Position;
        (function (Position) {
            Position[Position["Left"] = 0] = "Left";
            Position[Position["Top"] = 1] = "Top";
            Position[Position["Right"] = 2] = "Right";
            Position[Position["Bottom"] = 3] = "Bottom";
        })(Position = graphics.Position || (graphics.Position = {}));
        var Orientation;
        (function (Orientation) {
            Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
            Orientation[Orientation["Vertical"] = 1] = "Vertical";
        })(Orientation = graphics.Orientation || (graphics.Orientation = {}));
        var StrokeStyle = (function () {
            function StrokeStyle(strokewidth, strokecolor, dash, dashoffset) {
                this.strokeWidth = strokewidth;
                this.strokeColor = strokecolor;
                if (dash != null && dash instanceof Array && dash.length > 0) {
                    this.dash = dash;
                    if (dashoffset != null && !isNaN(dashoffset)) {
                        this.dashOffset = dashoffset;
                    }
                }
            }
            StrokeStyle.prototype.getCssStyle = function () {
                return {
                    'stroke-width': this.strokeWidth,
                    'stroke': this.strokeColor
                };
            };
            StrokeStyle.prototype.clone = function () {
                return new StrokeStyle(this.strokeWidth, this.strokeColor);
            };
            return StrokeStyle;
        }());
        graphics.StrokeStyle = StrokeStyle;
        var Font = (function () {
            function Font(fz, fm, fc) {
                this.fontSize = fz;
                this.fontFamily = fm;
                this.fontColor = fc;
                if (!this.fontFamily || this.fontFamily === "") {
                    this.fontFamily = 'Arial';
                }
            }
            Font.prototype.toString = function () {
                return " fontSize = " + this.fontSize + ", fontFamily = " + this.fontFamily + ", fontColor = " + this.fontFamily;
            };
            Font.prototype.clone = function () {
                return new Font(this.fontSize, this.fontFamily, this.fontColor);
            };
            return Font;
        }());
        graphics.Font = Font;
        var Style = (function () {
            function Style(bg, stroke) {
                this.background = bg;
                this.strokeStyle = stroke;
            }
            return Style;
        }());
        graphics.Style = Style;
        var Gradient = (function () {
            function Gradient(colors) {
                this.colors = [];
                this.colors = colors;
            }
            return Gradient;
        }());
        graphics.Gradient = Gradient;
        var LinearGradient = (function (_super) {
            __extends(LinearGradient, _super);
            function LinearGradient(sx, sy, ex, ey, colors) {
                var _this = _super.call(this, colors) || this;
                _this.startx = sx;
                _this.starty = sy;
                _this.endx = ex;
                _this.endy = ey;
                return _this;
            }
            return LinearGradient;
        }(Gradient));
        graphics.LinearGradient = LinearGradient;
        var RadialGradient = (function (_super) {
            __extends(RadialGradient, _super);
            function RadialGradient(cx, cy, end, colors) {
                var _this = _super.call(this, colors) || this;
                _this.centerx = cx;
                _this.centery = cy;
                _this.end = end;
                return _this;
            }
            return RadialGradient;
        }(Gradient));
        graphics.RadialGradient = RadialGradient;
        var Shadow = (function () {
            function Shadow() {
            }
            return Shadow;
        }());
        graphics.Shadow = Shadow;
        var FillStyle = (function () {
            function FillStyle() {
                this.fill = 'transparent';
            }
            return FillStyle;
        }());
        graphics.FillStyle = FillStyle;
        var Util = (function () {
            function Util() {
            }
            Util.cloneDeep = function (object) {
                if ((object == null) ||
                    (typeof object === 'number') ||
                    (typeof object === 'string') ||
                    (typeof object === 'boolean')) {
                    return object;
                }
                else if (Array.isArray(object)) {
                    var items = [];
                    for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
                        var item = object_1[_i];
                        items.push(Util.cloneDeep(item));
                    }
                    return items;
                }
                else if (object instanceof Date) {
                    return new Date(object.getTime());
                }
                else {
                    var cloneObject = {};
                    for (var key in object) {
                        if (typeof object[key] == 'function') {
                            cloneObject[key] = object[key];
                        }
                        else {
                            cloneObject[key] = Util.cloneDeep(object[key]);
                        }
                    }
                    return cloneObject;
                }
            };
            Util.contains = function (rect, pt) {
                if (pt.x <= rect.right && pt.x >= rect.left && pt.y <= rect.bottom && pt.y >= rect.top) {
                    return true;
                }
                return false;
            };
            Util.getRect = function (start, size) {
                var rect = new Rect(start.x, start.y, start.x + size.width, start.y + size.height);
                return rect;
            };
            Util.getStyleCss = function (style) {
                return {
                    "fill": style.background,
                    "stroke": style.strokeStyle ? style.strokeStyle.strokeColor : "",
                    "stroke-width": style.strokeStyle ? style.strokeStyle.strokeWidth : 0
                };
            };
            Util.union = function () {
                var rects = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    rects[_i] = arguments[_i];
                }
                var rect = new android.graphics.Rect(0, 0, 0, 0);
                rect.left = Math.min.apply(this, rects.map(function (e) { return e.left; }));
                rect.top = Math.min.apply(this, rects.map(function (e) { return e.top; }));
                rect.right = Math.max.apply(this, rects.map(function (e) { return e.right; }));
                rect.bottom = Math.max.apply(this, rects.map(function (e) { return e.bottom; }));
                return rect;
            };
            Util.hexToRgb = function (hex) {
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
            };
            Util.rgbToHex = function (r, g, b) {
                return "#" + Util.componentToHex(r) + Util.componentToHex(g) + Util.componentToHex(b);
            };
            Util.componentToHex = function (c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            };
            Util.asEnum = function (value, enumType, nullOK) {
                if (nullOK === void 0) { nullOK = false; }
                if (value == null && nullOK)
                    return null;
                var e = enumType[value];
                return typeof (e) === 'number' ? e : value;
            };
            Util.isMixed = function (r1, r2) {
                var ismixed = false;
                if (Math.abs((r1.left + r1.right) / 2 - (r2.left + r2.right) / 2)
                    < ((r1.right + r2.right - r1.left - r2.left) / 2) && Math.abs((r1.top + r1.bottom) / 2
                    - (r2.top + r2.bottom) / 2) < ((r1.bottom + r2.bottom - r1.top - r2.top) / 2)) {
                    ismixed = true;
                }
                return ismixed;
            };
            Util.containsRect = function (r1, r2) {
                var flg = r1.left <= r2.left &&
                    r1.top <= r2.top &&
                    r1.right >= r2.right &&
                    r1.bottom >= r2.bottom;
                return flg;
            };
            return Util;
        }());
        graphics.Util = Util;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
var android;
(function (android) {
    var device;
    (function (device) {
        var Device = (function () {
            function Device() {
            }
            Object.defineProperty(Device, "width", {
                get: function () {
                    // return 340;
                    if (Device._width == 0) {
                        Device._width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                    }
                    return Device._width;
                },
                set: function (value) {
                    Device._width = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Device, "height", {
                get: function () {
                    // return 620;
                    if (Device._height == 0) {
                        Device._height = (window.innerHeight > 0) ?
                            window.innerHeight : screen.height;
                    }
                    return Device._height;
                },
                set: function (value) {
                    Device._height = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Device, "density", {
                get: function () {
                    if (Device._density === 0) {
                        Device._density = Math.sqrt(Device.width * Device.width + Device.height * Device.height) / 160;
                    }
                    // return Device._density;
                    return 1;
                },
                enumerable: true,
                configurable: true
            });
            return Device;
        }());
        Device._density = 0;
        Device._width = 0;
        Device._height = 0;
        device.Device = Device;
    })(device = android.device || (android.device = {}));
})(android || (android = {}));
var android;
(function (android) {
    var util;
    (function (util) {
        var Log = (function () {
            function Log() {
            }
            Log.d = function (message, tag) {
                console.log(message);
            };
            Log.w = function (message, tag) {
                console.warn(message);
            };
            Log.e = function (message, tag) {
                console.error(message);
            };
            return Log;
        }());
        util.Log = Log;
    })(util = android.util || (android.util = {}));
})(android || (android = {}));
/// <reference path="../graphics/Util.ts" />
var android;
(function (android) {
    var device;
    (function (device) {
        var Font = android.graphics.Font;
        var StrokeStyle = android.graphics.StrokeStyle;
        var Style = android.graphics.Style;
        var Default = (function () {
            function Default() {
            }
            Object.defineProperty(Default, "font", {
                get: function () {
                    return new Font(10, "", "white");
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Default, "strokestyle", {
                get: function () {
                    return new StrokeStyle(1, 'black');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Default, "style", {
                get: function () {
                    return new Style('gray', Default.strokestyle);
                },
                enumerable: true,
                configurable: true
            });
            return Default;
        }());
        device.Default = Default;
    })(device = android.device || (android.device = {}));
})(android || (android = {}));
/// <reference path="Point.ts" />
/// <reference path="Util.ts" />
/// <reference path="../device/Device.ts" />
/// <reference path="../util/Log.ts" />
/// <reference path="../device/Default.ts" />
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var Point = android.graphics.Point;
        var Device = android.device.Device;
        var Default = android.device.Default;
        var RenderType;
        (function (RenderType) {
            RenderType[RenderType["Canvas"] = 0] = "Canvas";
            RenderType[RenderType["Svg"] = 1] = "Svg";
        })(RenderType = graphics.RenderType || (graphics.RenderType = {}));
        var CanvasState = (function () {
            function CanvasState(x, y) {
                this.xOffset = 0;
                this.yOffset = 0;
                this.xOffset = x;
                this.yOffset = y;
            }
            return CanvasState;
        }());
        var Floor = function (value) { return Math.floor(1000 * value) / 1000; };
        var Canvas = (function () {
            function Canvas(element, type) {
                this.xOffset = 0;
                this.yOffset = 0;
                this.saveStates = [];
                this._hostElement = element;
                this._renderType = type;
                if (type === RenderType.Canvas) {
                    this._render = new graphics.CanvasRenderEngine(element);
                    element.style.width = Device.width + 'px';
                    element.style.height = Device.height + "px";
                    this._render.setViewportSize(Device.width, Device.height);
                    ;
                }
                else if (type === RenderType.Svg) {
                    this._render = new graphics.SvgRenderEngine(element);
                    element.style.width = Device.width + 'px';
                    element.style.height = Device.height + "px";
                    this._render.setViewportSize(Device.width, Device.height);
                }
            }
            Canvas.prototype.clearRect = function (left, top, width, height) {
            };
            Canvas.prototype.save = function () {
                var state = new CanvasState(this.xOffset, this.yOffset);
                this.saveStates.push(state);
                this._render.save();
            };
            Canvas.prototype.clip = function (rect) {
                var r = rect.clone();
                r.translate(this.xOffset, this.yOffset);
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.clip(rect);
                }
                else {
                    this._render.clip();
                }
            };
            Canvas.prototype.restore = function () {
                this.saveStates.pop();
                var state = this.saveStates[this.saveStates.length - 1];
                if (state) {
                    this.xOffset = state.xOffset;
                    this.yOffset = state.yOffset;
                }
                else {
                    this.xOffset = 0;
                    this.yOffset = 0;
                }
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.restore();
                }
            };
            Canvas.prototype.setViewportSize = function (w, h) {
                this._render.setViewportSize(w, h);
            };
            Canvas.prototype.measureString = function (str, font, maxSize) {
                if (!font) {
                    font = Default.font.clone();
                }
                var f = font.clone();
                f.fontSize *= Device.density;
                return this._render.measureString(str, f);
            };
            Canvas.prototype.measureStringWithWidth = function (str, font) {
            };
            Canvas.prototype.drawText = function (str, pt, f, center, angle) {
                if (!f) {
                    f = Default.font.clone();
                }
                var size = this.measureString(str, f);
                var font = f.clone();
                font.fontSize *= Device.density;
                var startpt = new Point(pt.x, pt.y + size.height);
                var tpt = pt.clone();
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    if (angle != null) {
                        this._render.drawStringRotated(str, startpt, center, angle, font);
                    }
                    else {
                        this._render.drawString(str, startpt, font);
                    }
                }
                else if (this._render instanceof graphics.SvgRenderEngine) {
                    startpt.offset(this.xOffset, this.yOffset);
                    if (angle != null) {
                        this._render.drawStringRotated(str, startpt, center, angle, null, { 'font-size': font.fontSize, 'font-family': font.fontFamily });
                    }
                    else {
                        this._render.drawString(str, startpt, null, { 'font-size': font.fontSize, 'font-family': font.fontFamily });
                    }
                }
            };
            Canvas.prototype.drawPosText = function (text, pos, font) {
                if (text.length * 2 > pos.length) {
                    throw "IndexOutOfBoundsException";
                }
                if (!font) {
                    font = Default.font;
                }
                if (this._renderType === RenderType.Canvas) {
                    var pt = new Point(0, 0);
                    for (var i = 0; i < pos.length; i += 2) {
                        pt.set(pos[i], pos[i + 1]);
                        // this._render.drawString(text[i],pt,font);
                        this.drawText(text[i / 2], pt, font);
                    }
                }
                else {
                }
            };
            Canvas.prototype.drawLine = function (pt1, pt2, strokestyle) {
                var stroke = null;
                if (strokestyle) {
                    stroke = strokestyle.clone();
                }
                else {
                    stroke = Default.strokestyle.clone();
                }
                var startpoint = pt1.clone();
                var endpoint = pt2.clone();
                if (this._renderType === RenderType.Canvas) {
                    this._render.drawLine(startpoint.x, startpoint.y, endpoint.x, endpoint.y, stroke);
                }
                else {
                    startpoint.offset(this.xOffset, this.yOffset);
                    endpoint.offset(this.xOffset, this.yOffset);
                    this._render.drawLine(startpoint.x, startpoint.y, endpoint.x, endpoint.y, stroke);
                }
            };
            Canvas.prototype.drawLines = function (xs, ys, strokestyle) {
                // drawLines(xs: number[], ys: number[], strokestyle: StrokeStyle) {
                var stroke = null;
                if (strokestyle) {
                    stroke = strokestyle.clone();
                }
                else {
                    stroke = Default.strokestyle.clone();
                }
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.drawLines(xs, ys, stroke);
                }
                else if (this._render instanceof graphics.SvgRenderEngine) {
                    stroke.transform = "translate(" + this.xOffset + "," + this.yOffset + ")";
                    this._render.drawLines(xs, ys, null, stroke.getCssStyle());
                }
            };
            Canvas.prototype.drawRect = function (pt1, pt2, fill, style) {
                var startpoint = pt1.clone();
                var endpoint = pt2.clone();
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.drawRect(startpoint.x, startpoint.y, endpoint.x - startpoint.x, endpoint.y - startpoint.y, style, fill);
                }
                else if (this._render instanceof graphics.SvgRenderEngine) {
                    startpoint.offset(this.xOffset, this.yOffset);
                    endpoint.offset(this.xOffset, this.yOffset);
                    if (fill) {
                        this._render.drawRect(startpoint.x, startpoint.y, endpoint.x - startpoint.x, endpoint.y - startpoint.y, null, { 'fill': typeof (style.background) == 'string' ? style.background : null }, null);
                    }
                    else {
                        this._render.drawRect(startpoint.x, startpoint.y, endpoint.x - startpoint.x, endpoint.y - startpoint.y, null, { 'fill': 'transparent', 'stroke': typeof (style.background) == 'string' ? style.background : null }, null);
                    }
                }
            };
            Canvas.prototype.drawArc = function (rect, startAngle, sweepAngel, style) {
                var cx = (rect.right - rect.left) / 2 + rect.left + this.xOffset;
                var cy = (rect.bottom - rect.top) / 2 + rect.top + this.yOffset;
                var r = (rect.width < rect.height ? rect.width : rect.height) / 2;
                if (this._render instanceof graphics.SvgRenderEngine) {
                    this._render.drawPie(cx, cy, r, Floor(startAngle), Floor(sweepAngel), null, { 'fill': typeof (style.background) == 'string' ? style.background : null });
                }
                else if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.drawPie(cx, cy, r, Floor(startAngle), Floor(sweepAngel), style);
                }
            };
            Canvas.prototype.drawDonut = function (cx, cy, radius, innerRadius, startAngle, sweepAngle, style) {
                var _cx = cx + this.xOffset;
                var _cy = cy + this.yOffset;
                if (this._render instanceof graphics.SvgRenderEngine) {
                    this._render.drawDonut(_cx, _cy, radius, innerRadius, Floor(startAngle), Floor(sweepAngle), null, { 'fill': typeof (style.background) == 'string' ? style.background : null });
                }
                else if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.drawDonut(_cx, _cy, radius, innerRadius, (startAngle), (sweepAngle), style);
                }
            };
            Canvas.prototype.drawOval = function (rect, color) {
            };
            Object.defineProperty(Canvas.prototype, "alpha", {
                // public alpha :number =0;
                set: function (value) {
                    this._render.alpha = value;
                },
                enumerable: true,
                configurable: true
            });
            Canvas.prototype.drawPolygon = function (xs, ys, style) {
                if (this._render instanceof graphics.SvgRenderEngine) {
                    this._render.drawPolygon(xs, ys, null, { 'fill': typeof (style.background) == 'string' ? style.background : null });
                }
                else if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.drawPolygon(xs, ys, style);
                }
            };
            Canvas.prototype.drawImage = function (x, y, w, h) {
                // this._render.drawImage(x, y, w, h);
            };
            Canvas.prototype.getCache = function (sx, sy, sw, sh) {
                // return this._render.getImageData(sx, sy, sw, sh);
                return null;
            };
            Canvas.prototype.setCache = function (imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
                // this._render.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
            };
            Canvas.prototype.begin = function () {
                this._render.beginRender();
            };
            Canvas.prototype.end = function () {
                this._render.endRender();
            };
            Canvas.prototype.moveTo = function (x, y) {
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.moveTo(x, y);
                }
            };
            Canvas.prototype.scale = function (sx, sy) {
                console.log("canvasScale " + sx + " , " + sy);
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.scale(sx, sy);
                }
            };
            Canvas.prototype.rotate = function (degree) {
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.rotate(degree);
                }
            };
            Canvas.prototype.translate = function (x, y) {
                this.xOffset = x;
                this.yOffset = y;
                if (this._render instanceof graphics.CanvasRenderEngine) {
                    this._render.translate(x, y);
                }
            };
            Object.defineProperty(Canvas.prototype, "canvas", {
                get: function () {
                    if (this._render instanceof graphics.CanvasRenderEngine) {
                        return this._render.canvas;
                    }
                    else {
                        return null;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return Canvas;
        }());
        graphics.Canvas = Canvas;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
var android;
(function (android) {
    var app;
    (function (app) {
        var Context = (function () {
            function Context() {
            }
            return Context;
        }());
        app.Context = Context;
    })(app = android.app || (android.app = {}));
})(android || (android = {}));
/// <reference path="../../graphics/util.ts" />
/// <reference path="../../graphics/util.ts" />
/// <reference path="IView.ts" />
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var Size = (function () {
            function Size(w, h) {
                this.width = w;
                this.height = h;
            }
            Size.prototype.clone = function () {
                return new Size(this.width, this.height);
            };
            Size.prototype.hashCode = function () {
                return this.width * 37213 + this.height;
            };
            return Size;
        }());
        graphics.Size = Size;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var Margin = (function () {
            function Margin(marginLeft, marginRight, marginTop, marginBottom) {
                this.marginLeft = marginLeft;
                this.marginTop = marginTop;
                this.marginRight = marginRight;
                this.marginBottom = marginBottom;
            }
            Margin.prototype.getStartXMargin = function () {
                if (this.marginRight > 0 && !this.marginLeft) {
                    return -this.marginRight;
                }
                return this.marginLeft;
            };
            Margin.prototype.getStartYMargin = function () {
                if (this.marginBottom > 0 && !this.marginTop) {
                    return -this.marginBottom;
                }
                return this.marginTop;
            };
            return Margin;
        }());
        graphics.Margin = Margin;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
/// <reference path="Point.ts" />
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var Point = android.graphics.Point;
        var Rect = (function () {
            function Rect(left, top, right, bottom) {
                this.left = left;
                this.top = top;
                this.right = right;
                this.bottom = bottom;
            }
            Rect.prototype.reset = function (left, top, right, bottom) {
                this.left = left;
                this.top = top;
                this.right = right;
                this.bottom = bottom;
                return this;
            };
            Rect.prototype.correct = function () {
                if (this.left > this.right) {
                    var l = this.left;
                    this.left = this.right;
                    this.right = l;
                }
                if (this.top > this.bottom) {
                    var t = this.top;
                    this.top = this.bottom;
                    this.bottom = t;
                }
            };
            Rect.prototype.translate = function (x, y) {
                this.left += x;
                this.right += x;
                this.top += y;
                this.bottom += y;
                return this;
            };
            Rect.prototype.translateX = function (x) {
                this.translate(x, 0);
                return this;
            };
            Rect.prototype.translateY = function (y) {
                this.translate(0, y);
                return this;
            };
            Rect.prototype.scale = function (r) {
                // if (r < 1 && r > 0) {
                //     var w = this.right - this.left;
                //     var h = this.bottom - this.top;
                //     this.left += r * w / 2;
                //     this.top += r * h / 2;
                //     this.right -= r * w / 2;
                //     this.bottom -= r * h / 2;
                // } else {
                //     this.left += r;
                //     this.top += r;
                //     this.right -= r;
                //     this.bottom -= r;
                // }
                if (r > 0) {
                    var dw = this.width * r - this.width;
                    var dh = this.height * r - this.height;
                    this.left -= dw / 2;
                    this.right += dw / 2;
                    this.top -= dh / 2;
                    this.bottom += dh / 2;
                }
                return this;
            };
            Object.defineProperty(Rect.prototype, "isNil", {
                get: function () {
                    return (this.right - this.left <= 0.01) ||
                        (this.bottom - this.top <= 0.01);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rect.prototype, "height", {
                get: function () {
                    return ((this.bottom - this.top));
                },
                set: function (height) {
                    this.bottom = this.top + height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rect.prototype, "width", {
                get: function () {
                    return ((this.right - this.left));
                },
                set: function (width) {
                    this.right = this.left + width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rect.prototype, "startPoint", {
                get: function () {
                    if (!this._startpoint) {
                        this._startpoint = new Point(this.left, this.top);
                    }
                    this._startpoint.x = this.left;
                    this._startpoint.y = this.top;
                    return this._startpoint;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rect.prototype, "endPoint", {
                get: function () {
                    if (!this._endpoint) {
                        this._endpoint = new Point(this.right, this.bottom);
                    }
                    this._endpoint.x = this.right;
                    this._endpoint.y = this.bottom;
                    return this._endpoint;
                },
                enumerable: true,
                configurable: true
            });
            Rect.prototype.contains = function (x, y) {
                if (x <= this.right && x >= this.left && y <= this.bottom && y >= this.top) {
                    return true;
                }
                return false;
            };
            Rect.prototype.clone = function () {
                return new Rect(this.left, this.top, this.right, this.bottom);
            };
            Rect.prototype.equal = function (rect) {
                if (rect != null) {
                    return rect.left === this.left && rect.top === this.top && rect.bottom === this.bottom && rect.right === this.right;
                }
                return false;
            };
            Rect.prototype.toString = function () {
                return "< left:" + this.left + " ,top:" + this.top + " , width:" + this.width + " ,height:" + this.height + " >";
            };
            return Rect;
        }());
        graphics.Rect = Rect;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
/// <reference path="../../graphics/Margins.ts" />
/// <reference path="../../graphics/Rect.ts" />
var android;
(function (android) {
    var view;
    (function (view) {
        var Rect = android.graphics.Rect;
        var Padding = android.graphics.Padding;
        var Margin = android.graphics.Margin;
        /***
         * 根据measure 计算出的结果
         */
        var LayoutInfo = (function () {
            function LayoutInfo(l, t, r, b, padding, drawindex) {
                this.outterrect = new Rect(l, t, r, b);
                this.padding = padding;
                this.innerrect = new Rect(this.outterrect.left + padding.leftPadding, this.outterrect.top + padding.topPadding, this.outterrect.right - padding.rightPadding, this.outterrect.bottom - padding.bottomPadding);
                if (drawindex) {
                    this.drawindex = drawindex;
                }
                else {
                    this.drawindex = 0;
                }
            }
            LayoutInfo.prototype.reset = function (l, t, r, b, padding, drawindex) {
                this.outterrect = new Rect(l, t, r, b);
                this.padding = padding;
                this.innerrect = new Rect(this.outterrect.left + padding.leftPadding, this.outterrect.top + padding.topPadding, this.outterrect.right - padding.rightPadding, this.outterrect.bottom - padding.bottomPadding);
                if (drawindex) {
                    this.drawindex = drawindex;
                }
                else {
                    this.drawindex = 0;
                }
            };
            LayoutInfo.prototype.offset = function (x, y) {
                this.innerrect.translate(x, y);
                this.outterrect.translate(x, y);
            };
            LayoutInfo.prototype.clone = function () {
                var info = new LayoutInfo(0, 0, 0, 0, new Padding(0));
                info.drawindex = this.drawindex;
                info.innerrect = this.innerrect.clone();
                info.outterrect = this.outterrect.clone();
                return info;
            };
            LayoutInfo.prototype.equal = function (info) {
                if (info != null) {
                    return info.drawindex === this.drawindex && this.innerrect.equal(info.innerrect) && this.outterrect.equal(info.outterrect);
                }
                return false;
            };
            return LayoutInfo;
        }());
        view.LayoutInfo = LayoutInfo;
        /***
         * 输入的参数
         */
        var LayoutParams = (function () {
            function LayoutParams(width, height, margin) {
                this.margin = new Margin(0, 0, 0, 0); // { 'marginLeft': 0, 'marginRight': 0, 'marginTop': 0, 'marginBottom': 0 };
                this.width = width;
                this.height = height;
                if (margin) {
                    this.margin = margin;
                }
            }
            Object.defineProperty(LayoutParams.prototype, "width", {
                get: function () {
                    if (this._width < 0) {
                        return 0;
                    }
                    return this._width;
                },
                set: function (w) {
                    this._width = w;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutParams.prototype, "widthMode", {
                get: function () {
                    var mode = LayoutParams.EXACTLY;
                    switch (this._width) {
                        case LayoutParams.WRAP_CONTENT:
                            mode = LayoutParams.WRAP_CONTENT;
                            break;
                        case LayoutParams.MATCH_PARENT:
                            mode = LayoutParams.MATCH_PARENT;
                            break;
                        case LayoutParams.EXACTLY:
                        default:
                            mode = LayoutParams.EXACTLY;
                            break;
                    }
                    return mode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutParams.prototype, "heightMode", {
                get: function () {
                    var mode = LayoutParams.EXACTLY;
                    switch (this._height) {
                        case LayoutParams.WRAP_CONTENT:
                            mode = LayoutParams.WRAP_CONTENT;
                            break;
                        case LayoutParams.MATCH_PARENT:
                            mode = LayoutParams.MATCH_PARENT;
                            break;
                        case LayoutParams.EXACTLY:
                        default:
                            mode = LayoutParams.EXACTLY;
                            break;
                    }
                    return mode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutParams.prototype, "height", {
                get: function () {
                    if (this._height < 0) {
                        return 0;
                    }
                    return this._height;
                },
                set: function (h) {
                    this._height = h;
                },
                enumerable: true,
                configurable: true
            });
            return LayoutParams;
        }());
        LayoutParams.MATCH_PARENT = -1;
        LayoutParams.WRAP_CONTENT = -2;
        LayoutParams.EXACTLY = -3;
        view.LayoutParams = LayoutParams;
        var MeasureSpec = (function () {
            function MeasureSpec(v, m) {
                this.mode = LayoutParams.EXACTLY;
                if (v !== undefined) {
                    this.value = v;
                }
                if (m !== undefined) {
                    this.mode = m;
                }
            }
            MeasureSpec.prototype.getMeasureValue = function () {
                switch (this.mode) {
                    case LayoutParams.MATCH_PARENT:
                    case LayoutParams.EXACTLY:
                        return this.value;
                    case LayoutParams.WRAP_CONTENT:
                    default:
                        if (this.value) {
                            return this.value;
                        }
                        return LayoutParams.WRAP_CONTENT;
                }
            };
            return MeasureSpec;
        }());
        view.MeasureSpec = MeasureSpec;
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
var android;
(function (android) {
    var view;
    (function (view) {
        var event;
        (function (event) {
            var MotionEvent = (function () {
                function MotionEvent(x, y, action) {
                    this._x = x;
                    this._y = y;
                    this.screenX = x;
                    this.screenY = y;
                    this._action = action;
                }
                Object.defineProperty(MotionEvent.prototype, "x", {
                    get: function () {
                        return this._x;
                    },
                    set: function (v) {
                        this._x = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MotionEvent.prototype, "y", {
                    get: function () {
                        return this._y;
                    },
                    set: function (v) {
                        this._y = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MotionEvent.prototype, "deltaX", {
                    get: function () {
                        return this._deltaX;
                    },
                    set: function (v) {
                        this._deltaX = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MotionEvent.prototype, "deltaY", {
                    get: function () {
                        return this._deltaY;
                    },
                    set: function (v) {
                        this._deltaY = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MotionEvent.prototype, "action", {
                    get: function () {
                        return this._action;
                    },
                    set: function (value) {
                        this._action = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                MotionEvent.prototype.clone = function () {
                    return new MotionEvent(this._x, this._y, this._action);
                };
                MotionEvent.prototype.offset = function (x, y) {
                    this._x += x;
                    this._y += y;
                    this.screenX += x;
                    this.screenY += y;
                };
                MotionEvent.prototype.toString = function () {
                    var delta = (this.deltaX == null ? "" : " , deltaX = " + this.deltaX) + (this.deltaY == null ? "" : " , deltaY = " + this.deltaY);
                    return " x = " + this._x + " , y = " + this._y + delta + " , action = " + this._getaction();
                };
                MotionEvent.prototype._getaction = function () {
                    switch (this._action) {
                        case 0:
                            return "ACTION_OUTSIDE";
                        case 1:
                            return "ACTION_UP";
                        case 2:
                            return "ACTION_MOVE";
                        case 3:
                            return "ACTION_CANCEL";
                        case 4:
                            return "ACTION_OUTSIDE";
                        case 5:
                            return "ACTION_MOUSE_DOWN";
                        case 6:
                            return "ACTION_MOUSE_MOVE";
                        case 7:
                            return "ACTION_MOUSE_UP";
                        case 8:
                            return "ACTION_MOUSE_OVER";
                        case 9:
                            return "ACTION_MOUSE_OUT";
                        case 10:
                            return "ACTION_CLICK";
                        case 11:
                            return "ACTION_MOUSE_ON";
                        case 12:
                            return "ACTION_MOUSE_WHEEL";
                    }
                };
                return MotionEvent;
            }());
            MotionEvent.ACTION_DOWN = 0;
            MotionEvent.ACTION_UP = 1;
            MotionEvent.ACTION_MOVE = 2;
            MotionEvent.ACTION_CANCEL = 3;
            MotionEvent.ACTION_OUTSIDE = 4;
            MotionEvent.ACTION_MOUSE_DOWN = 5;
            MotionEvent.ACTION_MOUSE_MOVE = 6;
            MotionEvent.ACTION_MOUSE_UP = 7;
            MotionEvent.ACTION_MOUSE_OVER = 8;
            MotionEvent.ACTION_MOUSE_OUT = 9;
            MotionEvent.ACTION_MOUSE_ON = 11;
            MotionEvent.ACTION_CLICK = 10;
            MotionEvent.ACTION_SCROLL = 11;
            MotionEvent.ACTION_MOUSE_WHEEL = 12;
            event.MotionEvent = MotionEvent;
        })(event = view.event || (view.event = {}));
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
var android;
(function (android) {
    var view;
    (function (view_1) {
        var animation;
        (function (animation) {
            var AnimationState;
            (function (AnimationState) {
                AnimationState[AnimationState["BeforeStart"] = 0] = "BeforeStart";
                AnimationState[AnimationState["Animating"] = 1] = "Animating";
                AnimationState[AnimationState["End"] = 2] = "End";
            })(AnimationState = animation.AnimationState || (animation.AnimationState = {}));
            var Animating_Proprity = 9999999;
            var Animation = (function () {
                function Animation() {
                    this.duration = 0;
                    this.__oldProprity = 0;
                    this.ease = new animation.AnimationEase();
                    this.start = 0;
                    this.duration = 0;
                    this.type = animation.AnimationType.Alpha;
                    this.from = 1;
                    this.to = 1;
                    this.state = AnimationState.BeforeStart;
                    this.fillAfter = false;
                    this.repeate = false;
                }
                Animation.prototype.setAnimationCallBack = function (onAnimationStart, onAnimationEnd) {
                    this._startCallBack = onAnimationStart;
                    this._endCallBack = onAnimationEnd;
                };
                Object.defineProperty(Animation.prototype, "isAniamtionEnd", {
                    get: function () {
                        // console.log("start " + this.start +" , duration "+this.duration +" , now "+Date.now());
                        return (this.start + this.duration < Date.now()) || this.state == AnimationState.End;
                    },
                    enumerable: true,
                    configurable: true
                });
                Animation.prototype.scale = function (now) {
                    // console.log("ease " +( (now - this.start)/this.duration));
                    return this.ease.ease((now - this.start) / this.duration);
                };
                Animation.prototype.applyTransformation = function (interpolatedTime, canvas, view) {
                    // console.log("applyTransformation "+interpolatedTime + " canvas " + canvas + " View " + view);
                };
                Animation.prototype.onStartAniamtion = function (canvas, view) {
                    this.__oldProprity = view.priority;
                    // console.log("onStartAniamtion "+view.id);
                    view.priority = Animating_Proprity;
                    if (this._startCallBack) {
                        this._startCallBack(view);
                    }
                };
                Animation.prototype.onEndAnimation = function (canvas, view) {
                    view.priority = this.__oldProprity;
                    if (this._endCallBack) {
                        this._endCallBack(view);
                    }
                };
                Animation.prototype.__onInneranimationEnd = function (canvas, view) { };
                return Animation;
            }());
            animation.Animation = Animation;
        })(animation = view_1.animation || (view_1.animation = {}));
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
var android;
(function (android) {
    var view;
    (function (view) {
        var animation;
        (function (animation) {
            var AnimationEase = (function () {
                function AnimationEase() {
                }
                AnimationEase.prototype.ease = function (t) {
                    return t;
                };
                return AnimationEase;
            }());
            animation.AnimationEase = AnimationEase;
            var BounceAnimationEase = (function (_super) {
                __extends(BounceAnimationEase, _super);
                function BounceAnimationEase() {
                    return _super.apply(this, arguments) || this;
                }
                BounceAnimationEase.prototype.ease = function (t) {
                    var b1 = 4 / 11, b2 = 6 / 11, b3 = 8 / 11, b4 = 3 / 4, b5 = 9 / 11, b6 = 10 / 11, b7 = 15 / 16, b8 = 21 / 22, b9 = 63 / 64, b0 = 1 / b1 / b1;
                    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
                };
                return BounceAnimationEase;
            }(AnimationEase));
            animation.BounceAnimationEase = BounceAnimationEase;
            var SinAnimationEase = (function (_super) {
                __extends(SinAnimationEase, _super);
                function SinAnimationEase() {
                    return _super.apply(this, arguments) || this;
                }
                SinAnimationEase.prototype.ease = function (t) {
                    var pi = Math.PI, halfPi = pi / 2;
                    return Math.sin(t * halfPi);
                };
                return SinAnimationEase;
            }(AnimationEase));
            animation.SinAnimationEase = SinAnimationEase;
            var QuadAnimationEase = (function (_super) {
                __extends(QuadAnimationEase, _super);
                function QuadAnimationEase() {
                    return _super.apply(this, arguments) || this;
                }
                QuadAnimationEase.prototype.ease = function (t) {
                    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
                };
                return QuadAnimationEase;
            }(AnimationEase));
            animation.QuadAnimationEase = QuadAnimationEase;
        })(animation = view.animation || (view.animation = {}));
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
/// <reference path="../../graphics/Size.ts" />
/// <reference path="../interface/IView.ts" />
/// <reference path="./LayoutInfo.ts" />
/// <reference path="../event/MotionEvent.ts" />
/// <reference path="../../util/Log.ts" />
/// <reference path="../animation/Animation.ts" />
/// <reference path="../animation/AnimationEase.ts" />
var android;
(function (android) {
    var view;
    (function (view_2) {
        var Padding = android.graphics.Padding;
        var Size = android.graphics.Size;
        var Gravity = android.graphics.Gravity;
        var Default = android.device.Default;
        var AnimationState = android.view.animation.AnimationState;
        // public static  VISIABLE :number= 1; 
        // public static  INVISIABLE :number = -1;
        // public static  GONE :number = 0;
        var ViewState;
        (function (ViewState) {
            ViewState[ViewState["Visiable"] = 0] = "Visiable";
            ViewState[ViewState["InVisiable"] = 1] = "InVisiable";
            ViewState[ViewState["Gone"] = 2] = "Gone";
        })(ViewState = view_2.ViewState || (view_2.ViewState = {}));
        var View = (function () {
            function View(context) {
                this.id = "";
                this._padding = new Padding();
                this.priority = 0;
                this.layoutParams = new view_2.LayoutParams(0, 0, null);
                this._parent = null;
                this._drawingTime = 0;
                this.offsetleft = 0;
                this.offsettop = 0;
                this.visiable = ViewState.Visiable;
                this._context = context;
                this._gravity = Gravity.Left;
                this._background = Default.style;
                this._background.background = 'transparent';
                this._background.strokeStyle.strokeColor = 'transparent';
                this._background.strokeStyle.strokeWidth = 0;
                this.id = Math.random() * 10000000 + "";
                this._animationList = [];
            }
            View.prototype.getContext = function () {
                return this._context;
            };
            /**
             * may be called for serval times
             */
            View.prototype.onMeasure = function (width, height, canvas) {
                this._layoutInfo = new view_2.LayoutInfo(0, 0, 0, 0, this.padding, 0);
                var w = this.layoutParams.width;
                var h = this.layoutParams.height;
                var size = new Size(w, h);
                var widthmode = this.layoutParams.widthMode;
                var heightmode = this.layoutParams.heightMode;
                if (widthmode === view_2.LayoutParams.MATCH_PARENT) {
                    size.width = width.value;
                }
                if (heightmode === view_2.LayoutParams.MATCH_PARENT) {
                    size.height = height.value;
                }
                this.setMeasuredDimension(new view_2.MeasureSpec(size.width, view_2.LayoutParams.EXACTLY), new view_2.MeasureSpec(size.height, view_2.LayoutParams.EXACTLY));
                return size;
            };
            View.prototype.getDrawingTime = function () {
                if (this.parent != null) {
                    return this._drawingTime;
                }
                else {
                    return Date.now();
                }
            };
            View.prototype.setDrawingTime = function (value) {
                this._drawingTime = value;
            };
            View.prototype.onLayout = function (l, t, r, b, canvas) {
                if (this.layoutInfo != null) {
                    this._oldLayoutInfo = this.layoutInfo.clone();
                }
                this.layoutInfo.reset(l + this.offsetleft, t + this.offsettop, r + this.offsetleft, b + this.offsettop, this.padding, 0);
            };
            View.prototype.islayoutChanged = function () {
                return !this.layoutInfo.equal(this._oldLayoutInfo);
            };
            View.prototype.onDraw = function (canvas) {
                if (this.visiable != ViewState.Visiable) {
                    return;
                }
                this._canvas = canvas;
                if (this.background) {
                    canvas.drawRect(this._layoutInfo.outterrect.startPoint, this._layoutInfo.outterrect.endPoint, true, this.background);
                }
            };
            View.prototype.setMeasuredDimension = function (width, height) {
                this._width = width;
                this._height = height;
            };
            View.prototype.onTouchEvent = function (event) {
                return false;
            };
            View.prototype.onMouseEvent = function (event) {
                return false;
            };
            View.prototype.invalidate = function (force) {
                force = true;
                if (force) {
                    if (this.parent) {
                        this.parent.invalidate(force);
                    }
                    else {
                        this.oninvalidate();
                    }
                }
                else {
                    this.parent.invalidateChild(this, this.layoutInfo.outterrect);
                    this.oninvalidate();
                }
            };
            View.prototype.getRootView = function () {
                if (this.parent != null) {
                    var parent_1 = this.parent;
                    do {
                        parent_1 = parent_1.parent;
                    } while (parent_1.parent != null);
                    return parent_1;
                }
                return this;
            };
            View.prototype.oninvalidate = function () {
            };
            View.prototype.requestLayout = function () {
                if (this.parent) {
                    this.parent.requestLayout();
                }
            };
            View.prototype.startAnimation = function (animation) {
                var _this = this;
                if (this.animation == null || this.animation.isAniamtionEnd) {
                    // console.log("addAnimation ");
                    this.animation = animation;
                    if (this.animation != null) {
                        this.getRootView().startAnimation(animation);
                    }
                    this.animation.__onInneranimationEnd = function (canvas, view) {
                        if (_this.animation.repeate) {
                            _this.animation.start = 0;
                            _this.animation.state = AnimationState.BeforeStart;
                            _this.startAnimation(_this.animation);
                        }
                    };
                }
                else {
                    this._animationList.push(animation);
                    this.animation.__onInneranimationEnd = function (canvas, view) {
                        if (_this._animationList.length > 0) {
                            var curranimation = _this._animationList.pop();
                            _this.startAnimation(curranimation);
                        }
                    };
                }
            };
            View.prototype.cleanAnimation = function () {
                if (this.animation != null) {
                    this.animation.repeate = false;
                    this.animation.state = AnimationState.End;
                }
                this._animationList.length = 0;
            };
            View.prototype.setParent = function (p) {
                this._parent = p;
            };
            View.prototype.offset = function (left, top) {
                this.offsetleft += left;
                this.offsettop += top;
                if (isNaN(left) || isNaN(this.offsetleft)) {
                    console.log("offset error");
                    throw "offset error ";
                }
                console.log("offset " + top);
                // this.layoutInfo.offset(left,top);
            };
            Object.defineProperty(View.prototype, "parent", {
                get: function () {
                    return this._parent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "width", {
                get: function () {
                    return this._width.getMeasureValue();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "height", {
                get: function () {
                    return this._height.getMeasureValue();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "padding", {
                get: function () {
                    return this._padding;
                },
                set: function (padding) {
                    this._padding = padding;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "left", {
                get: function () {
                    return this._layoutInfo.outterrect.left;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "top", {
                get: function () {
                    return this._layoutInfo.outterrect.top;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "right", {
                get: function () {
                    return this._layoutInfo.outterrect.right;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "bottom", {
                get: function () {
                    return this._layoutInfo.outterrect.bottom;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "background", {
                get: function () {
                    return this._background;
                },
                set: function (background) {
                    this._background = background;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "layoutInfo", {
                get: function () {
                    if (!this._layoutInfo) {
                        this._layoutInfo = new view_2.LayoutInfo(0, 0, 0, 0, this.padding, 0);
                    }
                    return this._layoutInfo;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "gravity", {
                get: function () {
                    return this._gravity;
                },
                set: function (gravity) {
                    this._gravity = gravity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(View.prototype, "clip", {
                get: function () {
                    return this._clip;
                },
                set: function (value) {
                    this._clip = value;
                },
                enumerable: true,
                configurable: true
            });
            return View;
        }());
        view_2.View = View;
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
/// <reference path="../../graphics/Util.ts" />
/// <reference path="../interface/IViewGroup.ts" />
/// <reference path="View.ts" />
var android;
(function (android) {
    var view;
    (function (view_3) {
        var Size = android.graphics.Size;
        var MotionEvent = android.view.event.MotionEvent;
        var Util = android.graphics.Util;
        var AnimationState = android.view.animation.AnimationState;
        var ViewGroup = (function (_super) {
            __extends(ViewGroup, _super);
            function ViewGroup() {
                var _this = _super.apply(this, arguments) || this;
                _this.children = new Array();
                _this._mCurrentTouchTarget = null;
                _this._isIntercept = false;
                _this.lastInterceptEvent = [];
                return _this;
                // public dispatchMouseEvent(event: MotionEvent): boolean {
                //     if (!this._mCurrentTouchTarget || this._mCurrentTouchTarget instanceof ViewGroup) {
                //         let result: boolean = false;
                //         switch (event.action) {
                //             case MotionEvent.ACTION_MOUSE_DOWN:
                //                 if (!this._mCurrentTouchTarget) {
                //                     for (let i = 0; this.children && i < this.children.length; ++i) {
                //                         let child: View = this.children[i];
                //                         if (child) {
                //                             if (child.layoutInfo.outterrect.contains(event.x, event.y)) {
                //                                 this._mCurrentTouchTarget = child;
                //                             }
                //                         }
                //                     }
                //                 }
                //                 if (!this._mCurrentTouchTarget) {
                //                     return true;
                //                 }
                //                 if (!(this._mCurrentTouchTarget instanceof ViewGroup)) {
                //                     result = true;
                //                 } else {
                //                     result = this._mCurrentTouchTarget.onInterceptMouseEvent(event);
                //                 }
                //                 if (result) {
                //                     this._mCurrentTouchTarget.onMouseEvent(event);
                //                     this._isIntercept = result;
                //                     return true;
                //                 } else {
                //                     this.lastInterceptEvent.push(event.clone());//记录down时候的event
                //                     return false;
                //                 }
                //             case MotionEvent.ACTION_MOUSE_MOVE:
                //                 if (this._mCurrentTouchTarget) {
                //                     if (this._isIntercept) {
                //                         this._mCurrentTouchTarget.onMouseEvent(event);
                //                         return true;
                //                     }
                //                     if (!(this._mCurrentTouchTarget instanceof ViewGroup)) {
                //                         result = true;
                //                     } else {
                //                         result = this._mCurrentTouchTarget.onInterceptMouseEvent(event);
                //                     }
                //                     if (result) {
                //                         this._isIntercept = result;
                //                         this.lastInterceptEvent.forEach(e => {
                //                             this._mCurrentTouchTarget.onMouseEvent(e);
                //                         });
                //                         this.lastInterceptEvent.length = 0;
                //                         this._mCurrentTouchTarget.onMouseEvent(event);
                //                         return true;
                //                     } else {
                //                         this.lastInterceptEvent.forEach(e => {
                //                             if (this._mCurrentTouchTarget instanceof ViewGroup) {
                //                                 this._mCurrentTouchTarget.dispatchMouseEvent(e);
                //                             }
                //                         });
                //                         this.lastInterceptEvent.length = 0;
                //                         if (this._mCurrentTouchTarget instanceof ViewGroup) {
                //                             return this._mCurrentTouchTarget.dispatchMouseEvent(event);
                //                         } else {
                //                             return false;
                //                         }
                //                     }
                //                 }
                //             case MotionEvent.ACTION_MOUSE_OUT:
                //             case MotionEvent.ACTION_MOUSE_UP:
                //                 if (this._mCurrentTouchTarget) {
                //                     this.lastInterceptEvent.forEach(e => {
                //                         if (this._isIntercept) {
                //                             this._mCurrentTouchTarget.onMouseEvent(e);
                //                         } else {
                //                             this._mCurrentTouchTarget.dispatchMouseEvent(e);
                //                         }
                //                     });
                //                     if (this._isIntercept) {
                //                         this._mCurrentTouchTarget.onMouseEvent(event);
                //                         result = true;
                //                     } else {
                //                         result = this._mCurrentTouchTarget.dispatchMouseEvent(event);
                //                     }
                //                     this._mCurrentTouchTarget = null;
                //                     this.lastInterceptEvent.length = 0;
                //                     this._isIntercept = false;
                //                     return result;
                //                 }
                //         }
                //     }
                //     return false;
                // }
            }
            ViewGroup.prototype.dispatchDraw = function (canvas) {
                var item;
                for (var i = 0; i < this.children.length; ++i) {
                    item = this.children[i];
                    item.setDrawingTime(this.getDrawingTime());
                    if (item.visiable != view_3.ViewState.Visiable) {
                        continue;
                    }
                    if (item.clip === undefined) {
                        item.clip = this.clip;
                    }
                    if (item.clip === true || item.clip === undefined) {
                        canvas.save();
                        canvas.clip(item.layoutInfo.outterrect);
                        this.drawChild(canvas, item);
                        canvas.restore();
                    }
                    else {
                        this.drawChild(canvas, item);
                    }
                }
            };
            ViewGroup.prototype.drawChild = function (canvas, view) {
                // if (Util.isMixed(view.layoutInfo.innerrect, this.layoutInfo.innerrect)) {
                if (view.animation != null && !view.animation.isAniamtionEnd) {
                    canvas.save();
                    if (view.animation.state === AnimationState.BeforeStart) {
                        view._layoutInfo = view._oldLayoutInfo.clone();
                        view.animation.onStartAniamtion(canvas, view);
                        view.animation.state = AnimationState.Animating;
                    }
                    view.animation.applyTransformation(view.animation.scale(this.getDrawingTime()), canvas, view);
                    view.onDraw(canvas);
                    if (view instanceof ViewGroup) {
                        view.dispatchDraw(canvas);
                    }
                    canvas.restore();
                }
                else {
                    if (view.animation != null && view.animation.isAniamtionEnd && view.animation.state != AnimationState.End) {
                        view.animation.state = AnimationState.End;
                        view.animation.onEndAnimation(canvas, view);
                        view.animation.__onInneranimationEnd(canvas, view);
                        if (!view.animation.fillAfter) {
                            view._layoutInfo = view._oldLayoutInfo.clone();
                        }
                    }
                    view.onDraw(canvas);
                    if (view instanceof ViewGroup) {
                        view.dispatchDraw(canvas);
                    }
                }
                // }
            };
            ViewGroup.prototype.cleanAnimation = function () {
                _super.prototype.cleanAnimation.call(this);
                for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                    var view_4 = _a[_i];
                    view_4.cleanAnimation();
                }
            };
            ViewGroup.prototype.oninvalidate = function () {
                for (var i = 0; i < this.children.length; ++i) {
                    this.children[i].oninvalidate();
                }
            };
            ViewGroup.prototype.invalidateChild = function (child, dirty) {
                if (Util.containsRect(this.layoutInfo.outterrect, dirty)) {
                    var newdirty = Util.union(dirty, this.layoutInfo.outterrect);
                    this.parent.invalidateChild(this, newdirty);
                    this.oninvalidate();
                }
                else {
                    this.dispatchDraw(this._canvas);
                }
            };
            ViewGroup.prototype.getChildCount = function () {
                return this.children.length;
            };
            ViewGroup.prototype.getChildAt = function (index) {
                return this.children[index];
            };
            ViewGroup.prototype.getSortViews = function () {
                return this.children;
            };
            ViewGroup.prototype.onLayout = function (l, t, r, b, canvas) {
                _super.prototype.onLayout.call(this, l, t, r, b, canvas);
            };
            ViewGroup.prototype.onMeasure = function (width, height, canvas) {
                var maxSize;
                // return super.onMeasure(width,height,canvas);
                for (var i = 0; i < this.children.length; ++i) {
                    var item = this.children[i];
                    var lp = item.layoutParams;
                    var w = lp.width;
                    var h = lp.height;
                    //TO DO...
                    if (lp.heightMode === view_3.LayoutParams.MATCH_PARENT) {
                        h = height.value - item.layoutParams.margin.marginTop - item.layoutParams.margin.marginBottom - this.padding.topPadding - this.padding.bottomPadding;
                    }
                    if (lp.widthMode === view_3.LayoutParams.MATCH_PARENT) {
                        w = width.value - item.layoutParams.margin.marginLeft - item.layoutParams.margin.marginRight - this.padding.leftPadding - this.padding.rightPadding;
                    }
                    var size = item.onMeasure(new view_3.MeasureSpec(w, lp.widthMode), new view_3.MeasureSpec(h, lp.heightMode), canvas);
                    if (item.visiable === view_3.ViewState.Gone) {
                        size = new Size(0, 0);
                    }
                    if (maxSize) {
                        if (maxSize.width < size.width) {
                            maxSize.width = size.width;
                        }
                        if (maxSize.height < size.height) {
                            maxSize.height = size.height;
                        }
                    }
                    else {
                        maxSize = size;
                    }
                }
                if (!maxSize) {
                    maxSize = new Size(0, 0);
                }
                if (this.layoutParams.widthMode === view_3.LayoutParams.EXACTLY) {
                    maxSize.width = this.layoutParams.width;
                }
                else if (this.layoutParams.widthMode === view_3.LayoutParams.MATCH_PARENT) {
                    maxSize.width = width.getMeasureValue();
                }
                if (this.layoutParams.heightMode === view_3.LayoutParams.EXACTLY) {
                    maxSize.height = this.layoutParams.height;
                }
                else if (this.layoutParams.heightMode === view_3.LayoutParams.MATCH_PARENT) {
                    maxSize.height = height.getMeasureValue();
                }
                this.setMeasuredDimension(new view_3.MeasureSpec(maxSize.width, view_3.LayoutParams.EXACTLY), new view_3.MeasureSpec(maxSize.height, view_3.LayoutParams.EXACTLY));
                return maxSize;
            };
            ViewGroup.prototype.addView = function (view, index, layoutParams) {
                if (index === void 0) { index = 0; }
                if (layoutParams === void 0) { layoutParams = null; }
                this.addViewWithOutReLayout(view, index, layoutParams);
                this.requestLayout();
                return index;
            };
            ViewGroup.prototype.notifyDrawOrderChanged = function () {
                this.children.sort(function (a, b) {
                    return a.priority - b.priority;
                });
            };
            ViewGroup.prototype.addViewWithOutReLayout = function (view, index, layoutParams) {
                if (index === void 0) { index = 0; }
                if (layoutParams === void 0) { layoutParams = null; }
                this.children.push(view);
                // this.children.sort((a: View, b: View) => {
                //     return a.priority - b.priority;
                // });
                this.notifyDrawOrderChanged();
                if (index !== undefined && index !== null && index >= 0) {
                    view.layoutInfo.drawindex = index;
                }
                else {
                    view.layoutInfo.drawindex = this.children.length - 1;
                }
                if (layoutParams != null) {
                    view.layoutParams = layoutParams;
                }
                view.setParent(this);
                return index;
            };
            ViewGroup.prototype.removeAllViews = function () {
                this.children.length = 0;
            };
            ViewGroup.prototype.removeView = function (view) {
                var index = this.children.indexOf(view);
                this.children.splice(index, 1);
                view.setParent(null);
            };
            ViewGroup.prototype.onInterceptTouchEvent = function (event) {
                return false;
            };
            ViewGroup.prototype.dispatchTouchEvent = function (event) {
                var _this = this;
                if (!this._mCurrentTouchTarget || this._mCurrentTouchTarget instanceof ViewGroup) {
                    var result = false;
                    switch (event.action) {
                        case MotionEvent.ACTION_DOWN:
                            if (!this._mCurrentTouchTarget) {
                                for (var i = 0; this.children && i < this.children.length; ++i) {
                                    var child = this.children[i];
                                    if (child) {
                                        if (child.layoutInfo.outterrect.contains(event.x, event.y)) {
                                            this._mCurrentTouchTarget = child;
                                        }
                                    }
                                }
                            }
                            if (!this._mCurrentTouchTarget) {
                                return true;
                            }
                            if (!(this._mCurrentTouchTarget instanceof ViewGroup)) {
                                result = true;
                            }
                            else {
                                result = this._mCurrentTouchTarget.onInterceptTouchEvent(event);
                            }
                            if (result) {
                                this._mCurrentTouchTarget.onTouchEvent(event);
                                this._isIntercept = result;
                                return true;
                            }
                            else {
                                this.lastInterceptEvent.push(event.clone()); //记录down时候的event
                                return false;
                            }
                        case MotionEvent.ACTION_MOVE:
                            if (this._mCurrentTouchTarget) {
                                if (this._isIntercept) {
                                    this._mCurrentTouchTarget.onTouchEvent(event);
                                    return true;
                                }
                                if (!(this._mCurrentTouchTarget instanceof ViewGroup)) {
                                    result = true;
                                }
                                else {
                                    result = this._mCurrentTouchTarget.onInterceptTouchEvent(event);
                                }
                                if (result) {
                                    this._isIntercept = result;
                                    this.lastInterceptEvent.forEach(function (e) {
                                        _this._mCurrentTouchTarget.onTouchEvent(e);
                                    });
                                    this.lastInterceptEvent.length = 0;
                                    this._mCurrentTouchTarget.onTouchEvent(event);
                                    return true;
                                }
                                else {
                                    this.lastInterceptEvent.forEach(function (e) {
                                        if (_this._mCurrentTouchTarget instanceof ViewGroup) {
                                            _this._mCurrentTouchTarget.dispatchTouchEvent(e);
                                        }
                                    });
                                    this.lastInterceptEvent.length = 0;
                                    if (this._mCurrentTouchTarget instanceof ViewGroup) {
                                        return this._mCurrentTouchTarget.dispatchTouchEvent(event);
                                    }
                                    else {
                                        return false;
                                    }
                                }
                            }
                        case MotionEvent.ACTION_UP:
                        case MotionEvent.ACTION_CANCEL:
                            if (this._mCurrentTouchTarget) {
                                this.lastInterceptEvent.forEach(function (e) {
                                    if (_this._isIntercept) {
                                        _this._mCurrentTouchTarget.onTouchEvent(e);
                                    }
                                    else {
                                        _this._mCurrentTouchTarget.dispatchTouchEvent(e);
                                    }
                                });
                                if (this._isIntercept) {
                                    this._mCurrentTouchTarget.onTouchEvent(event);
                                    result = true;
                                }
                                else {
                                    result = this._mCurrentTouchTarget.dispatchTouchEvent(event);
                                }
                                this._mCurrentTouchTarget = null;
                                this.lastInterceptEvent.length = 0;
                                this._isIntercept = false;
                                return result;
                            }
                    }
                }
                return false;
            };
            ViewGroup.prototype.onInterceptMouseEvent = function (event) {
                return false;
            };
            ViewGroup.prototype.onMouseEvent = function (event) {
                return false;
            };
            ViewGroup.prototype.dispatchMouseEvent = function (event) {
                if (event.action === MotionEvent.ACTION_MOUSE_OUT || event.action === MotionEvent.ACTION_MOUSE_UP) {
                    if (this._mCurrentTouchTarget != null) {
                        var out_event = event.clone();
                        out_event.action = MotionEvent.ACTION_MOUSE_OUT;
                        if (this._mCurrentTouchTarget instanceof ViewGroup) {
                            if (this._mCurrentTouchTarget.onInterceptMouseEvent(out_event)) {
                                this._mCurrentTouchTarget.onMouseEvent(out_event);
                            }
                            else {
                                this._mCurrentTouchTarget.dispatchMouseEvent(out_event);
                            }
                        }
                        else {
                            this._mCurrentTouchTarget.onMouseEvent(out_event);
                        }
                        this._isIntercept = false;
                    }
                    this._mCurrentTouchTarget = null;
                }
                if (this._mCurrentTouchTarget == null) {
                    this._isIntercept = false;
                    for (var i = 0; this.children && i < this.children.length; ++i) {
                        var child = this.children[i];
                        if (child) {
                            if (child.layoutInfo.outterrect.contains(event.x, event.y)) {
                                this._mCurrentTouchTarget = child;
                            }
                        }
                    }
                    if (this._mCurrentTouchTarget != null) {
                        var on_event = event.clone();
                        on_event.action = MotionEvent.ACTION_MOUSE_ON;
                        if (!(this._mCurrentTouchTarget instanceof ViewGroup)) {
                            return this._mCurrentTouchTarget.onMouseEvent(on_event);
                        }
                        if (this._mCurrentTouchTarget.onInterceptMouseEvent(on_event)) {
                            return this._mCurrentTouchTarget.onMouseEvent(on_event);
                        }
                        else {
                            return this._mCurrentTouchTarget.dispatchMouseEvent(on_event);
                        }
                    }
                }
                else {
                    if (!this._mCurrentTouchTarget.layoutInfo.outterrect.contains(event.x, event.y)) {
                        var out_event = event.clone();
                        out_event.action = MotionEvent.ACTION_MOUSE_OUT;
                        var flg = false; // this._mCurrentTouchTarget.onMouseEvent(out_event);
                        if (this._mCurrentTouchTarget instanceof ViewGroup) {
                            if (this._mCurrentTouchTarget.onInterceptMouseEvent(out_event)) {
                                flg = this._mCurrentTouchTarget.onMouseEvent(out_event);
                            }
                            else {
                                flg = this._mCurrentTouchTarget.dispatchMouseEvent(out_event);
                            }
                        }
                        else {
                            flg = this._mCurrentTouchTarget.onMouseEvent(out_event);
                        }
                        this._mCurrentTouchTarget = null;
                        return flg;
                    }
                }
                if (this._mCurrentTouchTarget == null) {
                    return this.onMouseEvent(event);
                }
                if (!(this._mCurrentTouchTarget instanceof ViewGroup)) {
                    return this._mCurrentTouchTarget.onMouseEvent(event);
                }
                if (this._mCurrentTouchTarget.onInterceptMouseEvent(event)) {
                    return this._mCurrentTouchTarget.onMouseEvent(event);
                }
                else {
                    return this._mCurrentTouchTarget.dispatchMouseEvent(event);
                }
            };
            return ViewGroup;
        }(view_3.View));
        view_3.ViewGroup = ViewGroup;
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
/// <reference path="../view/implemention/ViewGroup.ts" />
/// <reference path="../graphics/Util.ts" />
var android;
(function (android) {
    var widget;
    (function (widget) {
        var Gravity = android.graphics.Gravity;
        var ViewGroup = android.view.ViewGroup;
        var Point = android.graphics.Point;
        var FrameLayout = (function (_super) {
            __extends(FrameLayout, _super);
            function FrameLayout() {
                return _super.apply(this, arguments) || this;
            }
            FrameLayout.prototype.onMeasure = function (width, height, canvas) {
                return _super.prototype.onMeasure.call(this, width, height, canvas);
            };
            FrameLayout.prototype.onLayout = function (l, t, r, b, canvas) {
                this.layoutInfo.reset(l, t, r, b, this.padding, 0);
                var viewItem;
                var length = this.children.length;
                for (var i = 0; i < length; ++i) {
                    viewItem = this.children[i];
                    this.layoutItem(viewItem, l, t, r, b, canvas);
                }
            };
            FrameLayout.prototype.layoutItem = function (viewItem, l, t, r, b, canvas) {
                var point = new Point(this.layoutInfo.innerrect.left, this.layoutInfo.innerrect.top);
                var innerrect = this.layoutInfo.innerrect;
                var length = this.children.length;
                var m = viewItem.layoutParams.margin;
                switch (viewItem.gravity) {
                    case Gravity.Left:
                        point.set(innerrect.left, innerrect.top);
                        point.offset(m.marginLeft, m.marginTop);
                        break;
                    case Gravity.Auto:
                        point.set(innerrect.left, innerrect.top);
                        break;
                    case Gravity.Right:
                        point.set(innerrect.right - viewItem.width, innerrect.top);
                        point.offset(-m.marginRight, m.marginTop);
                        break;
                    case Gravity.Top:
                        point.set(innerrect.left, innerrect.top);
                        point.offset(m.marginLeft, m.marginTop);
                        break;
                    case Gravity.Bottom:
                        point.set(innerrect.left, innerrect.bottom - viewItem.height);
                        point.offset(m.marginLeft, -m.marginBottom);
                        break;
                    case Gravity.Center:
                        var tmpl = innerrect.left + (this.layoutInfo.innerrect.width - viewItem.width) / 2;
                        var tmpt = innerrect.top + (this.layoutInfo.innerrect.height - viewItem.height) / 2;
                        if (tmpl < 0) {
                            tmpl = 0;
                        }
                        if (tmpt < 0) {
                            tmpt = 0;
                        }
                        point.set(tmpl, tmpt);
                        break;
                }
                // point.offset(m.getStartXMargin(), m.getStartYMargin());
                // point.offset(m.marginLeft,m.marginRight)
                viewItem.onLayout(point.x, point.y, point.x + viewItem.width, point.y + viewItem.height, canvas);
            };
            return FrameLayout;
        }(ViewGroup));
        widget.FrameLayout = FrameLayout;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
/// <reference path="Context.ts" />
/// <reference path="../widget/FrameLayout.ts" />
/// <reference path="../util/Log.ts" />
var android;
(function (android) {
    var app;
    (function (app) {
        var LayoutParams = android.view.LayoutParams;
        var FrameLayout = android.widget.FrameLayout;
        var Log = android.util.Log;
        var Activity = (function (_super) {
            __extends(Activity, _super);
            function Activity(am) {
                var _this = _super.call(this) || this;
                if (am instanceof app.ActivityManager) {
                    _this.activityManager = am;
                }
                else {
                    throw "can't create Activity new ";
                }
                _this.rootView = new FrameLayout(_this);
                var lp = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT, null);
                _this.rootView.layoutParams = lp;
                return _this;
                // this.rootView.background = 'lightblue';
            }
            Activity.prototype.attatchRootView = function (view) {
                view.addView(this.rootView, 0);
            };
            Activity.prototype.onCreate = function (bundle) {
                Log.d("oncreate");
            };
            Activity.prototype.onPause = function () {
                Log.d("onPause");
            };
            Activity.prototype.onResume = function () {
                Log.d('onResume');
            };
            Activity.prototype.onDestory = function () {
                Log.d('onDestory');
            };
            Activity.prototype.setContentView = function (view) {
                this.rootView.addView(view, 0);
            };
            Activity.prototype.startActivityForResult = function (intent, bundle, requestCode, resultCode) {
                this.activityManager.sendStartActivity(intent, bundle, requestCode, resultCode);
            };
            return Activity;
        }(app.Context));
        app.Activity = Activity;
    })(app = android.app || (android.app = {}));
})(android || (android = {}));
/// <reference path="../view/implemention/ViewGroup.ts" />
/// <reference path="./FrameLayout.ts" />
var android;
(function (android) {
    var widget;
    (function (widget) {
        var Padding = android.graphics.Padding;
        var Canvas = android.graphics.Canvas;
        var MeasureSpec = android.view.MeasureSpec;
        var LayoutParams = android.view.LayoutParams;
        var MotionEvent = android.view.event.MotionEvent;
        var Device = android.device.Device;
        var RootView = (function (_super) {
            __extends(RootView, _super);
            function RootView() {
                var _this = _super.apply(this, arguments) || this;
                _this.throttle = true;
                return _this;
            }
            RootView.prototype.setInfo = function (left, top, width, height) {
                this._l = left;
                this._t = top;
                this._w = width;
                this._h = height;
                this.layoutParams.width = width;
                this.layoutParams.height = height;
                this.padding = new Padding(0);
            };
            RootView.prototype.dispatchDraw = function (canvas) {
                _super.prototype.dispatchDraw.call(this, canvas);
                var rect = this.layoutInfo.outterrect;
                canvas.drawRect(rect.startPoint, rect.endPoint, false, this.background);
            };
            RootView.prototype.onLayout = function (l, t, r, b, canvas) {
                _super.prototype.onLayout.call(this, l, t, r, b, canvas);
            };
            RootView.prototype.oninvalidate = function () {
                _super.prototype.oninvalidate.call(this);
                this._canvas.begin();
                this.dispatchDraw(this._canvas);
                this._canvas.end();
            };
            RootView.prototype.requestLayout = function () {
                var width = new MeasureSpec(this._w, LayoutParams.MATCH_PARENT);
                var height = new MeasureSpec(this._h, LayoutParams.MATCH_PARENT);
                this._canvas.begin();
                var size = this.onMeasure(width, height, this._canvas);
                this.onLayout(this._l, this._t, this._l + size.width, this._t + size.height, this._canvas);
                this._canvas.end();
                this.oninvalidate();
            };
            Object.defineProperty(RootView.prototype, "left", {
                get: function () {
                    return this._l;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(RootView.prototype, "top", {
                get: function () {
                    return this._t;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(RootView.prototype, "width", {
                get: function () {
                    return this._w;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(RootView.prototype, "height", {
                get: function () {
                    return this._h;
                },
                enumerable: true,
                configurable: true
            });
            RootView.prototype.startAnimation = function (animation) {
                this.animation = animation;
                // setTimeout(this._startAnimation());
                this._startAnimation();
            };
            RootView.prototype._startAnimation = function () {
                this.animation.start = Date.now();
                if (this._rootAniamtion != null && !this._rootAniamtion.isAniamtionEnd) {
                    if (this._rootAniamtion.duration + this._rootAniamtion.start < this.animation.duration + this.animation.start) {
                        this._rootAniamtion.duration = this.animation.start + this.animation.duration - this._rootAniamtion.start;
                    }
                }
                else {
                    this._rootAniamtion = this.animation;
                    window.requestAnimationFrame(this._animate.bind(this));
                    console.log("requestAnimationFrame ====== >>>>>  ");
                }
            };
            RootView.prototype._animate = function () {
                console.log("_animating ========= >");
                if (this._rootAniamtion != null && !this._rootAniamtion.isAniamtionEnd) {
                    this.invalidate(false);
                    // console.log("requestAnimationFrame " + this._rootAniamtion.isAniamtionEnd );
                    // console.log("start "+ this._rootAniamtion.start +" , duration " + this._rootAniamtion.duration +" , now "+Date.now());
                    window.requestAnimationFrame(this._animate.bind(this));
                }
                else {
                    this._rootAniamtion = null;
                    this.invalidate(false);
                }
            };
            RootView.prototype.addView = function (view, index) {
                _super.prototype.addView.call(this, view, index);
                return index;
            };
            RootView.prototype.attachRender = function (r) {
                this._canvas = r;
            };
            RootView.prototype.attachElement = function (element, renderType) {
                this.element = element;
                // this.element.onariarequest = this.ontouch.bind(this);
                // this.element.oncommand = this.ontouch.bind(this);
                // this.element.ongotpointercapture = this.ontouch.bind(this);
                // this.element.onlostpointercapture = this.ontouch.bind(this);
                // this.element.onmsgesturechange = this.ontouch.bind(this);
                // this.element.onmsgesturedoubletap = this.ontouch.bind(this);
                // this.element.onmsgestureend = this.ontouch.bind(this);
                // this.element.onmsgesturehold = this.ontouch.bind(this);
                // this.element.onmsgesturestart = this.ontouch.bind(this);
                // this.element.onmsgesturetap = this.ontouch.bind(this);
                // this.element.onmsgotpointercapture = this.ontouch.bind(this);
                // this.element.onmsinertiastart = this.ontouch.bind(this);
                // this.element.onmslostpointercapture = this.ontouch.bind(this);
                // this.element.onmspointercancel = this.ontouch.bind(this);
                // this.element.onmspointerdown = this.ontouch.bind(this);
                // this.element.onmspointerenter = this.ontouch.bind(this);
                // this.element.onmspointerleave = this.ontouch.bind(this);
                // this.element.onmspointermove = this.ontouch.bind(this);
                // this.element.onmspointerout = this.ontouch.bind(this);
                // this.element.onmspointerover = this.ontouch.bind(this);
                // this.element.onmspointerup = this.ontouch.bind(this);
                // this.element.onwaiting = this.ontouch.bind(this);
                // this.element.onvolumechange = this.ontouch.bind(this);
                // this.element.ontimeupdate = this.ontouch.bind(this);
                // this.element.onsuspend = this.ontouch.bind(this);
                // this.element.onsubmit = this.ontouch.bind(this);
                // this.element.onstalled = this.ontouch.bind(this);
                // this.element.onselectstart = this.ontouch.bind(this);
                // this.element.onselect = this.ontouch.bind(this);
                // this.element.onseeking = this.ontouch.bind(this);
                // this.element.onseeked = this.ontouch.bind(this);
                // this.element.onscroll = this.ontouch.bind(this);
                // this.element.onreset = this.ontouch.bind(this);
                // this.element.onratechange = this.ontouch.bind(this);
                // this.element.onprogress = this.ontouch.bind(this);
                // this.element.onplaying = this.ontouch.bind(this);
                // this.element.onplay = this.ontouch.bind(this);
                // this.element.onpause = this.ontouch.bind(this);
                // this.element.onpaste = this.ontouch.bind(this);
                // this.element.onmsmanipulationstatechanged = this.ontouch.bind(this);
                // this.element.onmscontentzoom = this.ontouch.bind(this);
                this.element.ontouchstart = this.ontouch.bind(this);
                this.element.ontouchmove = this.ontouch.bind(this);
                this.element.ontouchend = this.ontouch.bind(this);
                this.element.ontouchcancel = this.ontouch.bind(this);
                this.element.onmousedown = this.ontouch.bind(this);
                this.element.onmousemove = this.ontouch.bind(this);
                this.element.onmouseup = this.ontouch.bind(this);
                this.element.onmouseout = this.ontouch.bind(this);
                this.element.onmouseover = this.ontouch.bind(this);
                this.element.onmousewheel = this.ontouch.bind(this);
                this.element.onclick = this.ontouch.bind(this);
                this.element.onscroll = this.ontouch.bind(this);
                this.layoutParams.width = element.clientWidth;
                this.layoutParams.height = element.clientHeight;
                Device.width = element.clientWidth;
                Device.height = element.clientHeight;
                this.attachRender(new Canvas(element, renderType));
                this.setInfo(0, 0, element.clientWidth, element.clientHeight);
            };
            RootView.prototype.ontouch = function (event) {
                // console.log(event);
                // event.preventDefault();
                // event.stopPropagation();
                var event = event || window.event;
                var str = '';
                var mevent = new MotionEvent(0, 0, 0);
                switch (event.type) {
                    case "touchstart":
                        mevent = new MotionEvent(event.touches[0].clientX, event.touches[0].clientY, MotionEvent.ACTION_DOWN);
                        break;
                    case "touchend":
                        mevent = new MotionEvent(event.changedTouches[0].clientX, event.changedTouches[0].clientY, MotionEvent.ACTION_UP);
                        break;
                    case "touchcancel":
                        mevent = new MotionEvent(event.changedTouches[0].clientX, event.changedTouches[0].clientY, MotionEvent.ACTION_CANCEL);
                        break;
                    case "touchmove":
                        mevent = new MotionEvent(event.touches[0].clientX, event.touches[0].clientY, MotionEvent.ACTION_MOVE);
                        break;
                    case 'mousedown':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_DOWN);
                        break;
                    case 'mousemove':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_MOVE);
                        break;
                    case 'mouseup':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_UP);
                        break;
                    case 'mouseout':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_OUT);
                        break;
                    case 'mouseover':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_OVER);
                        break;
                    case 'click':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_CLICK);
                        break;
                    case 'scroll':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_SCROLL);
                        break;
                    case 'mousewheel':
                        mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_WHEEL);
                        mevent.deltaX = event.deltaX;
                        mevent.deltaY = event.deltaY;
                        break;
                }
                mevent.element = this.element;
                var elementrect = this.element.getBoundingClientRect();
                mevent.x = mevent.x - elementrect.left;
                mevent.y = mevent.y - elementrect.top;
                // if(this.throttle != null){
                //     clearTimeout(this.throttle);
                // }
                // this.throttle =
                // if (this.throttle) {
                // this.throttle = false;
                // setTimeout(() => {
                this.sendEvent(mevent);
                // this.throttle = true;
                // }, 10);
                // }
                // this.sendEvent(mevent);
            };
            RootView.prototype.sendEvent = function (event) {
                if (event.action >= MotionEvent.ACTION_MOUSE_DOWN) {
                    this.dispatchMouseEvent(event);
                }
                else {
                    this.dispatchTouchEvent(event);
                }
            };
            return RootView;
        }(widget.FrameLayout));
        widget.RootView = RootView;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
/// <reference path="Activity.ts" />
/// <reference path="../widget/RootView.ts" />
/// <reference path="../device/Device.ts" />
/// <reference path="../view/event/MotionEvent.ts" />
var android;
(function (android) {
    var app;
    (function (app) {
        var RootView = android.widget.RootView;
        var ActivityManager = (function () {
            function ActivityManager(rendertype, element) {
                this.stack = new Array();
                this.rootView = new RootView(null); // need to be application context
                // this.rootView.attachRender(canvas);
                this.rootView.attachElement(element, rendertype);
            }
            ActivityManager.prototype.sendStartActivity = function (intent, bundle, requestCode, resultCode) {
                var targetActivity = this.createActivity(intent.getClass());
                var currentActivity = this.stack[this.stack.length - 1];
                if (currentActivity) {
                    currentActivity['onPause'].call(currentActivity);
                }
                this.rootView.removeAllViews();
                this.stack.push(targetActivity);
                targetActivity['attatchRootView'].call(targetActivity, this.rootView);
                targetActivity['onResume'].call(targetActivity);
                // TO DO ...  lanch mode
                targetActivity['onCreate'].call(targetActivity, bundle);
                // this.rootView.background ='white';
                this.rootView.invalidate(true);
            };
            ActivityManager.prototype.createActivity = function (activityClass) {
                var activity = new activityClass(this);
                return activity;
            };
            ActivityManager.prototype.getCurrentActivity = function () {
                return this.stack[this.stack.length - 1];
            };
            return ActivityManager;
        }());
        app.ActivityManager = ActivityManager;
    })(app = android.app || (android.app = {}));
})(android || (android = {}));
/// <reference path="./app/Intent.ts" />
/// <reference path="graphics/Canvas.ts" />
/// <reference path="./app/ActivityManager.ts" />
/// <reference path="./util/Log.ts" />
/// <reference path="./view/event/MotionEvent.ts" />
var android;
(function (android) {
    var ActivityManager = android.app.ActivityManager;
    var RenderType = android.graphics.RenderType;
    var Intent = android.app.Intent;
    var Device = android.device.Device;
    var MotionEvent = android.view.event.MotionEvent;
    var StartUp = (function () {
        function StartUp() {
            this.loadConfig();
            this.element = document.getElementById(this.getRootElement());
            this.element.innerHTML = '';
            if (this.getFill() === 'parent') {
                Device.width = this.element.clientWidth;
                Device.height = this.element.clientHeight;
            }
            var type = RenderType.Canvas;
            if (this.getRenderType() == 'canvas') {
                type = RenderType.Canvas;
            }
            else {
                type = RenderType.Svg;
            }
            this.activityManager = new ActivityManager(type, this.element);
        }
        StartUp.prototype.ontouch = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var event = event || window.event;
            var str = '';
            var mevent = new MotionEvent(0, 0, 0);
            switch (event.type) {
                case "touchstart":
                    // str= "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                    mevent = new MotionEvent(event.touches[0].clientX, event.touches[0].clientY, MotionEvent.ACTION_DOWN);
                    break;
                case "touchend":
                    mevent = new MotionEvent(event.changedTouches[0].clientX, event.changedTouches[0].clientY, MotionEvent.ACTION_UP);
                    break;
                case "touchcancel":
                    mevent = new MotionEvent(event.changedTouches[0].clientX, event.changedTouches[0].clientY, MotionEvent.ACTION_CANCEL);
                    break;
                case "touchmove":
                    mevent = new MotionEvent(event.touches[0].clientX, event.touches[0].clientY, MotionEvent.ACTION_MOVE);
                    break;
                case 'mousedown':
                    mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_DOWN);
                    break;
                case 'mousemove':
                    mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_MOVE);
                    break;
                case 'mouseup':
                    mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_UP);
                    break;
                case 'mouseout':
                    mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_OUT);
                    break;
                case 'mouseover':
                    mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_MOUSE_OVER);
                    break;
                case 'click':
                    mevent = new MotionEvent(event.clientX, event.clientY, MotionEvent.ACTION_CLICK);
                    break;
            }
            mevent.element = this.element;
            var elementrect = this.element.getClientRects();
            mevent.x = mevent.x - elementrect[0].left;
            mevent.y = mevent.y - elementrect[0].top;
        };
        StartUp.prototype.start = function () {
            var intent = new Intent();
            intent.setClass(null, this.getLaunchActivity());
            var bundle = new android.app.Bundle();
            bundle.putDefault(this.getLaunchParams());
            this.activityManager.sendStartActivity(intent, bundle, 0, 0);
        };
        StartUp.prototype.getLaunchActivity = function () {
            return this.config.launchActivity.target;
        };
        StartUp.prototype.getLaunchParams = function () {
            return this.config.launchActivity.params;
        };
        StartUp.prototype.getRootElement = function () {
            return this.config.rootcontainer.target;
        };
        StartUp.prototype.getRenderType = function () {
            return this.config.rendertype ? this.config.rendertype.target : 'svg';
        };
        StartUp.prototype.getFill = function () {
            return this.config.fill;
        };
        StartUp.prototype.loadConfig = function () {
            this.config = window['mainfest'].config;
        };
        StartUp.prototype.getCurrentActivity = function () {
            return this.activityManager.getCurrentActivity();
        };
        return StartUp;
    }());
    android.StartUp = StartUp;
})(android || (android = {}));
var android;
(function (android) {
    var database;
    (function (database) {
        var DataSetObserver = (function () {
            function DataSetObserver() {
            }
            DataSetObserver.prototype.onChanged = function () {
                // Do nothing
            };
            DataSetObserver.prototype.onInvalidated = function () {
                // Do nothing
            };
            return DataSetObserver;
        }());
        database.DataSetObserver = DataSetObserver;
    })(database = android.database || (android.database = {}));
})(android || (android = {}));
/// <reference path="DataSetObserver.ts" />
var android;
(function (android) {
    var database;
    (function (database) {
        var Observable = (function () {
            function Observable() {
                this.mObservers = new Array();
            }
            Observable.prototype.registerObserver = function (observer) {
                if (!observer) {
                    throw "The observer is null or undefine";
                }
                if (this.mObservers.indexOf(observer) > -1) {
                    throw "Observer " + observer + " is already registered ";
                }
                this.mObservers.push(observer);
            };
            Observable.prototype.unregisterObserver = function (observer) {
                if (!observer) {
                    throw "The observer is null or undefine";
                }
                var index = this.mObservers.indexOf(observer);
                if (index === -1) {
                    throw "Observer " + observer + " was not registered ";
                }
                this.mObservers.splice(index, 1);
            };
            Observable.prototype.unregisterAll = function () {
                this.mObservers.length = 0;
            };
            return Observable;
        }());
        database.Observable = Observable;
        var DataSetObservable = (function (_super) {
            __extends(DataSetObservable, _super);
            function DataSetObservable() {
                return _super.apply(this, arguments) || this;
            }
            DataSetObservable.prototype.notifyChanged = function () {
                for (var i = this.mObservers.length - 1; i >= 0; i--) {
                    this.mObservers[i].onChanged();
                }
            };
            DataSetObservable.prototype.notifyInvalidated = function () {
                for (var i = this.mObservers.length - 1; i >= 0; i--) {
                    this.mObservers[i].onInvalidated();
                }
            };
            return DataSetObservable;
        }(Observable));
        database.DataSetObservable = DataSetObservable;
    })(database = android.database || (android.database = {}));
})(android || (android = {}));
/// <reference path="../database/DataSetObservable.ts" />
var android;
(function (android) {
    var adapter;
    (function (adapter) {
        var Adapter = (function () {
            function Adapter() {
            }
            return Adapter;
        }());
        adapter.Adapter = Adapter;
    })(adapter = android.adapter || (android.adapter = {}));
})(android || (android = {}));
/// <reference path="../database/DataSetObservable.ts" />
var android;
(function (android) {
    var adapter;
    (function (adapter) {
        var DataSetObservable = android.database.DataSetObservable;
        var ViewPageAdapter = (function () {
            function ViewPageAdapter() {
                this.mDataSetObservable = new DataSetObservable();
                this.mViewCache = new Array();
                this.mShouldCache = false;
            }
            ViewPageAdapter.prototype.XBaseAdapter = function () {
            };
            /************************************* don't use this  **********************************************/
            ViewPageAdapter.prototype.registerDataSetObserver = function (observer) {
                this.mDataSetObservable.registerObserver(observer);
            };
            ViewPageAdapter.prototype.unregisterDataSetObserver = function (observer) {
                this.mDataSetObservable.unregisterObserver(observer);
            };
            /**********************************************************************************************/
            ViewPageAdapter.prototype.notifyDataSetChanged = function () {
                this.mDataSetObservable.notifyChanged();
            };
            ViewPageAdapter.prototype.notifyDataSetInvalidated = function () {
                this.mDataSetObservable.notifyInvalidated();
            };
            /***
             * set cache
             *
             * @param enable
             */
            ViewPageAdapter.prototype.setCacheEnable = function (enable) {
                this.mShouldCache = enable;
                if (!this.mShouldCache) {
                    this.mViewCache.length = 0;
                }
            };
            ViewPageAdapter.prototype.initItem = function (position, container) {
                var view = null;
                if (this.mShouldCache) {
                    for (var i = 0; i < this.mViewCache.length; ++i) {
                        var info = this.mViewCache[i];
                        if (info != null && info.position == position) {
                            view = info.view;
                            if (view != null) {
                                return this.instantiateItem(position, container, view);
                            }
                        }
                    }
                    if (view == null) {
                        view = this.instantiateItem(position, container, null);
                    }
                    this.mViewCache.push(new ViewInfo(view, position));
                }
                if (view == null) {
                    view = this.instantiateItem(position, container, null);
                }
                return view;
            };
            /**
             * unuseful methods currently
             */
            ViewPageAdapter.prototype.beginUpdata = function () { };
            /**
             * unuseful methods currently
             */
            ViewPageAdapter.prototype.finishUpdata = function () { };
            return ViewPageAdapter;
        }());
        adapter.ViewPageAdapter = ViewPageAdapter;
        var ViewInfo = (function () {
            function ViewInfo(v, pos) {
                this.view = v;
                this.position = pos;
            }
            return ViewInfo;
        }());
        adapter.ViewInfo = ViewInfo;
    })(adapter = android.adapter || (android.adapter = {}));
})(android || (android = {}));
var android;
(function (android) {
    var app;
    (function (app) {
        var Bundle = (function () {
            function Bundle() {
                this.map = {};
            }
            Bundle.prototype.put = function (key, value) {
                this.map[key] = value;
            };
            Bundle.prototype.putDefault = function (value) {
                this.map['default'] = value;
            };
            Bundle.prototype.getDefault = function () {
                return this.map['default'];
            };
            return Bundle;
        }());
        app.Bundle = Bundle;
    })(app = android.app || (android.app = {}));
})(android || (android = {}));
var android;
(function (android) {
    var Debug = (function () {
        function Debug() {
        }
        Debug.assert = function (flg, log) {
            if (flg === void 0) { flg = false; }
            if (!flg) {
                var err = new Error();
                throw log + "\n" + err.stack;
            }
        };
        Debug.log = function (log) {
            console.log(log);
        };
        return Debug;
    }());
    android.Debug = Debug;
})(android || (android = {}));
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var Align;
        (function (Align) {
            Align[Align["LEFT"] = 0] = "LEFT";
            /**
             * The text is drawn centered horizontally on the x,y origin
             */
            Align[Align["CENTER"] = 1] = "CENTER";
            /**
             * The text is drawn to the left of the x,y origin
             */
            Align[Align["RIGHT"] = 2] = "RIGHT";
        })(Align = graphics.Align || (graphics.Align = {}));
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var AlignElment = (function () {
            function AlignElment(position, element) {
                this.position = position;
                this.element = element;
            }
            return AlignElment;
        }());
        graphics.AlignElment = AlignElment;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
/// <reference path="Rect.ts" />
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        'use strict';
        var Size = android.graphics.Size;
        var Point = android.graphics.Point;
        /**
         * Render to canvas.
         */
        var CanvasRenderEngine = (function () {
            function CanvasRenderEngine(element) {
                this._element = element;
                this._create();
            }
            Object.defineProperty(CanvasRenderEngine.prototype, "canvas", {
                get: function () {
                    return this._canvas2d;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CanvasRenderEngine.prototype, "alpha", {
                set: function (value) {
                    this._canvas2d.globalAlpha = value;
                },
                enumerable: true,
                configurable: true
            });
            CanvasRenderEngine.prototype.clearRect = function (left, top, width, height) {
                this._canvas2d.clearRect(left, top, width, height);
            };
            CanvasRenderEngine.prototype.beginRender = function () {
                this._canvas2d.clearRect(0, 0, this._canvas.width, this._canvas.height);
            };
            CanvasRenderEngine.prototype.endRender = function () {
            };
            CanvasRenderEngine.prototype.save = function () {
                this._canvas2d.save();
            };
            CanvasRenderEngine.prototype.restore = function () {
                this._canvas2d.restore();
            };
            CanvasRenderEngine.prototype.getImageData = function (sx, sy, sw, sh) {
                return this._canvas2d.getImageData(sx, sy, sw, sh);
            };
            CanvasRenderEngine.prototype.putImageData = function (imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
                this._canvas2d.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
            };
            CanvasRenderEngine.prototype.clip = function (rect) {
                this._canvas2d.beginPath();
                this._canvas2d.rect(rect.left, rect.top, rect.width, rect.height);
                ;
                this._canvas2d.clip();
            };
            CanvasRenderEngine.prototype.setViewportSize = function (w, h) {
                var _devicePixelRatio = 2;
                this._canvas.width = w * _devicePixelRatio;
                this._canvas.height = h * _devicePixelRatio;
                this._canvas.style.width = w + "px";
                this._canvas.style.height = h + "px";
                this._canvas2d.scale(_devicePixelRatio, _devicePixelRatio);
            };
            Object.defineProperty(CanvasRenderEngine.prototype, "element", {
                get: function () {
                    return this._canvas;
                },
                enumerable: true,
                configurable: true
            });
            CanvasRenderEngine.prototype.drawEllipse = function (cx, cy, rx, ry, style) {
            };
            CanvasRenderEngine.prototype._applyStyle = function (style) {
                if (style != null) {
                    if (style.background instanceof graphics.Gradient) {
                    }
                    else if (typeof (style.background) == 'string') {
                        this._canvas2d.fillStyle = style.background;
                    }
                    this._applyStrokeStyle(style.strokeStyle);
                }
            };
            CanvasRenderEngine.prototype._applyStrokeStyle = function (strokeStyle) {
                if (strokeStyle != null) {
                    if (strokeStyle.strokeColor != null) {
                        this._canvas2d.strokeStyle = strokeStyle.strokeColor;
                    }
                    if (strokeStyle.strokeWidth != null && !isNaN(strokeStyle.strokeWidth)) {
                        this._canvas2d.lineWidth = strokeStyle.strokeWidth;
                    }
                    if (strokeStyle.dash != null) {
                        this._canvas2d.setLineDash(strokeStyle.dash);
                    }
                    if (strokeStyle.dashOffset != null) {
                        this._canvas2d.lineDashOffset = strokeStyle.dashOffset;
                    }
                }
            };
            CanvasRenderEngine.prototype._applyFont = function (font) {
                if (font != null) {
                    if (font.fontColor != null) {
                        this._canvas2d.fillStyle = font.fontColor;
                    }
                    if (font.fontSize != null) {
                        this._canvas2d.font = font.fontSize + 'px ';
                    }
                    if (font.fontFamily != null) {
                        this._canvas2d.font += font.fontFamily;
                    }
                }
            };
            CanvasRenderEngine.prototype.drawRect = function (x, y, w, h, style, fill) {
                this._canvas2d.save();
                this._applyStyle(style);
                if (fill) {
                    this._canvas2d.fillRect(x, y, w, h);
                }
                else {
                    this._canvas2d.strokeRect(x, y, w, h);
                }
                if (style.strokeStyle != null) {
                }
                this._canvas2d.restore();
            };
            CanvasRenderEngine.prototype.drawLine = function (x1, y1, x2, y2, strokestyle) {
                this._canvas2d.beginPath();
                this._canvas2d.moveTo(x1, y1);
                this._canvas2d.lineTo(x2, y2);
                this._canvas2d.strokeStyle = strokestyle.strokeColor;
                this._canvas2d.lineWidth = strokestyle.strokeWidth;
                this._canvas2d.stroke();
            };
            CanvasRenderEngine.prototype.drawLines = function (xs, ys, strokestyle) {
                if (xs !== null && ys !== null && xs.length === ys.length && xs.length > 0) {
                    this._canvas2d.save();
                    this._canvas2d.beginPath();
                    this._applyStrokeStyle(strokestyle);
                    this._canvas2d.moveTo(xs[0], ys[0]);
                    for (var i = 1; i < xs.length; ++i) {
                        this._canvas2d.lineTo(xs[i], ys[i]);
                    }
                    this._canvas2d.stroke();
                    this._canvas2d.closePath();
                    this._canvas2d.restore();
                }
            };
            CanvasRenderEngine.prototype.drawPolygon = function (xs, ys, style) {
                this._canvas2d.save();
                this._applyStyle(style);
                this._canvas2d.beginPath();
                this._canvas2d.moveTo(xs[0], ys[0]);
                for (var i = 1; i < xs.length; ++i) {
                    this._canvas2d.lineTo(xs[i], ys[i]);
                }
                this._canvas2d.closePath();
                this._canvas2d.fill();
                if (style.strokeStyle != null) {
                    this._canvas2d.stroke();
                }
                this._canvas2d.restore();
            };
            CanvasRenderEngine.prototype.drawPie = function (cx, cy, r, startAngle, sweepAngle, style) {
                this._canvas2d.save();
                this._applyStyle(style);
                this._canvas2d.beginPath();
                this._canvas2d.moveTo(cx, cy);
                this._canvas2d.arc(cx, cy, r, startAngle, startAngle + sweepAngle);
                this._canvas2d.lineTo(cx, cy);
                this._canvas2d.closePath();
                this._canvas2d.fill();
                this._canvas2d.rotate(startAngle);
                this._canvas2d.restore();
            };
            CanvasRenderEngine.prototype.drawDonut = function (cx, cy, radius, innerRadius, startAngle, sweepAngle, style) {
                var endAngle = startAngle + sweepAngle;
                var p1 = new Point(cx, cy);
                p1.x += innerRadius * Math.cos(startAngle);
                p1.y += innerRadius * Math.sin(startAngle);
                var p2 = new Point(cx, cy);
                p2.x += innerRadius * Math.cos(endAngle);
                p2.y += innerRadius * Math.sin(endAngle);
                this._canvas2d.save();
                this._canvas2d.beginPath();
                this._applyStyle(style);
                this._canvas2d.moveTo(p1.x, p1.y);
                this._canvas2d.arc(cx, cy, radius, startAngle, endAngle, false);
                this._canvas2d.lineTo(p2.x, p2.y);
                this._canvas2d.arc(cx, cy, innerRadius, endAngle, startAngle, true);
                this._canvas2d.fill();
                this._canvas2d.restore();
            };
            CanvasRenderEngine.prototype.drawString = function (s, pt, font) {
                // if (font) {
                //     this._canvas2d.font = font.fontSize + 'px ' + font.fontFamily;
                //     var gradient = this._canvas2d.createLinearGradient(0, 0, this._canvas.width, 0);
                //     if (font.fontColor) {
                //         gradient.addColorStop(1.0, font.fontColor);
                //         this._canvas2d.fillStyle = gradient;
                //     }
                // }
                this._canvas2d.save();
                this._applyFont(font);
                this._canvas2d.fillText(s, pt.x, pt.y);
                this._canvas2d.restore();
            };
            CanvasRenderEngine.prototype.drawStringRotated = function (s, pt, center, angle, font) {
                this._canvas2d.save();
                this._canvas2d.textBaseline = 'bottom';
                this._canvas2d.translate(center.x, center.y);
                this._canvas2d.rotate(Math.PI / 180 * angle);
                this._canvas2d.translate(-center.x, -center.y);
                this._applyFont(font);
                this._canvas2d.fillText(s, pt.x, pt.y);
                this._canvas2d.restore();
            };
            CanvasRenderEngine.prototype.measureString = function (s, font, maxSize) {
                if (maxSize === void 0) { maxSize = 0; }
                var sz = new Size(0, 0);
                this._canvas2d.font = font.fontSize + "px" + " " + font.fontFamily;
                var tm = this._canvas2d.measureText(s);
                sz.width = tm.width;
                sz.height = font.fontSize;
                return sz;
            };
            CanvasRenderEngine.prototype.drawImage = function (image, x, y, w, h) {
            };
            CanvasRenderEngine.prototype._create = function () {
                this._canvas = document.createElement('canvas');
                this._element.appendChild(this._canvas);
                this._canvas2d = this._canvas.getContext("2d");
            };
            CanvasRenderEngine.prototype.moveTo = function (x, y) {
                this._canvas2d.moveTo(x, y);
            };
            CanvasRenderEngine.prototype.scale = function (sx, sy) {
                this._canvas2d.scale(sx, sy);
            };
            CanvasRenderEngine.prototype.rotate = function (degree) {
                this._canvas2d.rotate(degree);
            };
            CanvasRenderEngine.prototype.translate = function (x, y) {
                this._canvas2d.translate(x, y);
            };
            return CanvasRenderEngine;
        }());
        graphics.CanvasRenderEngine = CanvasRenderEngine;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
/// <reference path="Rect.ts" />
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        'use strict';
        var Size = android.graphics.Size;
        var Point = android.graphics.Point;
        /**
         * Render to svg.
         */
        var SvgRenderEngine = (function () {
            function SvgRenderEngine(element) {
                this._strokeWidth = 1;
                this._fontSize = null;
                this._fontFamily = null;
                this.alpha = 1;
                this._element = element;
                this._create();
                this._element.appendChild(this._svg);
                if (SvgRenderEngine._isff === undefined) {
                    SvgRenderEngine._isff = navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
                }
            }
            SvgRenderEngine.prototype.save = function () {
            };
            SvgRenderEngine.prototype.restore = function () {
            };
            SvgRenderEngine.prototype.clip = function () { };
            SvgRenderEngine.prototype.beginRender = function () {
                while (this._svg.firstChild) {
                    this._svg.removeChild(this._svg.firstChild);
                }
                this._svg.appendChild(this._textGroup);
            };
            SvgRenderEngine.prototype.endRender = function () {
                if (this._textGroup.parentNode) {
                    this._svg.removeChild(this._textGroup);
                }
            };
            SvgRenderEngine.prototype.setViewportSize = function (w, h) {
                this._svg.setAttribute('width', w.toString());
                this._svg.setAttribute('height', h.toString());
            };
            Object.defineProperty(SvgRenderEngine.prototype, "element", {
                get: function () {
                    return this._svg;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SvgRenderEngine.prototype, "fill", {
                get: function () {
                    return this._fill;
                },
                set: function (value) {
                    this._fill = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SvgRenderEngine.prototype, "fontSize", {
                get: function () {
                    return this._fontSize;
                },
                set: function (value) {
                    this._fontSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SvgRenderEngine.prototype, "fontFamily", {
                get: function () {
                    return this._fontFamily;
                },
                set: function (value) {
                    this._fontFamily = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SvgRenderEngine.prototype, "stroke", {
                get: function () {
                    return this._stroke;
                },
                set: function (value) {
                    this._stroke = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SvgRenderEngine.prototype, "strokeWidth", {
                get: function () {
                    return this._strokeWidth;
                },
                set: function (value) {
                    this._strokeWidth = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SvgRenderEngine.prototype, "textFill", {
                get: function () {
                    return this._textFill;
                },
                set: function (value) {
                    this._textFill = value;
                },
                enumerable: true,
                configurable: true
            });
            SvgRenderEngine.prototype.addClipRect = function (clipRect, id) {
                if (clipRect && id) {
                    var clipPath = document.createElementNS(SvgRenderEngine.svgNS, 'clipPath');
                    var rect = document.createElementNS(SvgRenderEngine.svgNS, 'rect');
                    rect.setAttribute('x', (clipRect.left - 1).toFixed());
                    rect.setAttribute('y', (clipRect.top - 1).toFixed());
                    rect.setAttribute('width', (clipRect.width + 2).toFixed());
                    rect.setAttribute('height', (clipRect.height + 2).toFixed());
                    clipPath.appendChild(rect);
                    clipPath.setAttribute('id', id);
                    this._svg.appendChild(clipPath);
                }
            };
            SvgRenderEngine.prototype.drawEllipse = function (cx, cy, rx, ry, className, style) {
                var ell = document.createElementNS(SvgRenderEngine.svgNS, 'ellipse');
                ell.setAttribute('stroke', this._stroke);
                if (this._strokeWidth !== null) {
                    ell.setAttribute('stroke-width', this._strokeWidth.toString());
                }
                ell.setAttribute('fill', this._fill);
                ell.setAttribute('cx', cx.toFixed(1));
                ell.setAttribute('cy', cy.toFixed(1));
                ell.setAttribute('rx', rx.toFixed(1));
                ell.setAttribute('ry', ry.toFixed(1));
                //ell.setAttribute('cx', cx.toString());
                //ell.setAttribute('cy', cy.toString());
                //ell.setAttribute('rx', rx.toString());
                //ell.setAttribute('ry', ry.toString());
                if (className) {
                    ell.setAttribute('class', className);
                }
                this._applyStyle(ell, style);
                //this._svg.appendChild(ell);
                this._appendChild(ell);
                return ell;
            };
            SvgRenderEngine.prototype.drawRect = function (x, y, w, h, className, style, clipPath) {
                var rect = document.createElementNS(SvgRenderEngine.svgNS, 'rect');
                rect.setAttribute('fill', this._fill);
                rect.setAttribute('stroke', this._stroke);
                if (this._strokeWidth !== null) {
                    rect.setAttribute('stroke-width', this._strokeWidth.toString());
                }
                rect.setAttribute('x', x.toFixed(1));
                rect.setAttribute('y', y.toFixed(1));
                if (w > 0 && w < 0.05) {
                    rect.setAttribute('width', '0.1');
                }
                else {
                    rect.setAttribute('width', w.toFixed(1));
                }
                if (h > 0 && h < 0.05) {
                    rect.setAttribute('height', '0.1');
                }
                else {
                    rect.setAttribute('height', h.toFixed(1));
                }
                if (clipPath) {
                    rect.setAttribute('clip-path', 'url(#' + clipPath + ')');
                }
                if (className) {
                    rect.setAttribute('class', className);
                }
                this._applyStyle(rect, style);
                this._appendChild(rect);
                return rect;
            };
            // this._render.drawLine(startpoint.x, startpoint.y, endpoint.x, endpoint.y,stroke);
            SvgRenderEngine.prototype.drawLine = function (x1, y1, x2, y2, stroke) {
                this._drawLine(x1, y1, x2, y2, null, { 'stroke': stroke.strokeColor, 'stroke-width': stroke.strokeWidth });
            };
            SvgRenderEngine.prototype._drawLine = function (x1, y1, x2, y2, className, style) {
                var line = document.createElementNS(SvgRenderEngine.svgNS, 'line');
                line.setAttribute('stroke', this._stroke);
                if (this._strokeWidth !== null) {
                    line.setAttribute('stroke-width', this._strokeWidth.toString());
                }
                line.setAttribute('x1', x1.toFixed(1));
                line.setAttribute('x2', x2.toFixed(1));
                line.setAttribute('y1', y1.toFixed(1));
                line.setAttribute('y2', y2.toFixed(1));
                //line.setAttribute('x1', x1.toString());
                //line.setAttribute('x2', x2.toString());
                //line.setAttribute('y1', y1.toString());
                //line.setAttribute('y2', y2.toString());
                if (className) {
                    line.setAttribute('class', className);
                }
                this._applyStyle(line, style);
                this._appendChild(line);
                return line;
            };
            SvgRenderEngine.prototype.drawLines = function (xs, ys, className, style, clipPath) {
                if (xs && ys) {
                    var len = Math.min(xs.length, ys.length);
                    if (len > 0) {
                        var pline = document.createElementNS(SvgRenderEngine.svgNS, 'polyline');
                        pline.setAttribute('stroke', this._stroke);
                        if (this._strokeWidth !== null) {
                            pline.setAttribute('stroke-width', this._strokeWidth.toString());
                        }
                        pline.setAttribute('fill', 'none');
                        var spts = '';
                        for (var i = 0; i < len; i++) {
                            spts += xs[i].toFixed(1) + ',' + ys[i].toFixed(1) + ' ';
                        }
                        pline.setAttribute('points', spts);
                        if (className) {
                            pline.setAttribute('class', className);
                        }
                        if (clipPath) {
                            pline.setAttribute('clip-path', 'url(#' + clipPath + ')');
                        }
                        this._applyStyle(pline, style);
                        this._appendChild(pline);
                        return pline;
                    }
                }
                return null;
            };
            SvgRenderEngine.prototype.drawPolygon = function (xs, ys, className, style, clipPath) {
                if (xs && ys) {
                    var len = Math.min(xs.length, ys.length);
                    if (len > 0) {
                        var poly = document.createElementNS(SvgRenderEngine.svgNS, 'polygon');
                        poly.setAttribute('stroke', this._stroke);
                        if (this._strokeWidth !== null) {
                            poly.setAttribute('stroke-width', this._strokeWidth.toString());
                        }
                        poly.setAttribute('fill', this._fill);
                        poly.setAttribute('opacity', this.alpha + "");
                        var spts = '';
                        for (var i = 0; i < len; i++) {
                            //spts += xs[i].toString() + ',' + ys[i].toString() + ' ';
                            spts += xs[i].toFixed(1) + ',' + ys[i].toFixed(1) + ' ';
                        }
                        poly.setAttribute('points', spts);
                        if (className) {
                            poly.setAttribute('class', className);
                        }
                        if (clipPath) {
                            poly.setAttribute('clip-path', 'url(#' + clipPath + ')');
                        }
                        this._applyStyle(poly, style);
                        this._appendChild(poly);
                        return poly;
                    }
                }
                return null;
            };
            SvgRenderEngine.prototype.drawPie = function (cx, cy, r, startAngle, sweepAngle, className, style, clipPath) {
                if (sweepAngle >= Math.PI * 2) {
                    return this.drawEllipse(cx, cy, r, r, className, style);
                }
                var path = document.createElementNS(SvgRenderEngine.svgNS, 'path');
                path.setAttribute('fill', this._fill);
                path.setAttribute('stroke', this._stroke);
                if (this._strokeWidth !== null) {
                    path.setAttribute('stroke-width', this._strokeWidth.toString());
                }
                var p1 = new Point(cx, cy);
                p1.x += r * Math.cos(startAngle);
                p1.y += r * Math.sin(startAngle);
                var a2 = startAngle + sweepAngle;
                var p2 = new Point(cx, cy);
                p2.x += r * Math.cos(a2);
                p2.y += r * Math.sin(a2);
                var opt = ' 0 0,1 ';
                if (Math.abs(sweepAngle) > Math.PI) {
                    opt = ' 0 1,1 ';
                }
                //var d = 'M ' + cx.toFixed(1) + ',' + cy.toFixed(1);
                //d += ' L ' + p1.x.toFixed(1) + ',' + p1.y.toFixed(1);
                //d += ' A ' + r.toFixed(1) + ',' + r.toFixed(1) + opt;
                //d += p2.x.toFixed(1) + ',' + p2.y.toFixed(1) + ' z';
                var d = 'M ' + p1.x.toFixed(1) + ',' + p1.y.toFixed(1);
                d += ' A ' + r.toFixed(1) + ',' + r.toFixed(1) + opt;
                d += p2.x.toFixed(1) + ',' + p2.y.toFixed(1);
                d += ' L ' + cx.toFixed(1) + ',' + cy.toFixed(1) + ' z';
                path.setAttribute('d', d);
                if (clipPath) {
                    path.setAttribute('clip-path', 'url(#' + clipPath + ')');
                }
                if (className) {
                    path.setAttribute('class', className);
                }
                this._applyStyle(path, style);
                this._appendChild(path);
                return path;
            };
            SvgRenderEngine.prototype.drawDonut = function (cx, cy, radius, innerRadius, startAngle, sweepAngle, className, style, clipPath) {
                var isFull = false;
                if (startAngle + sweepAngle >= Math.PI * 2) {
                    isFull = true;
                    sweepAngle = Math.PI * 2 - startAngle - 0.01;
                }
                var path = document.createElementNS(SvgRenderEngine.svgNS, 'path');
                path.setAttribute('fill', this._fill);
                path.setAttribute('stroke', this._stroke);
                if (this._strokeWidth !== null) {
                    path.setAttribute('stroke-width', this._strokeWidth.toString());
                }
                var p1 = new Point(cx, cy);
                p1.x += radius * Math.cos(startAngle);
                p1.y += radius * Math.sin(startAngle);
                var a2 = startAngle + sweepAngle;
                var p2 = new Point(cx, cy);
                p2.x += radius * Math.cos(a2);
                p2.y += radius * Math.sin(a2);
                var p3 = new Point(cx, cy);
                p3.x += innerRadius * Math.cos(a2);
                p3.y += innerRadius * Math.sin(a2);
                var p4 = new Point(cx, cy);
                p4.x += innerRadius * Math.cos(startAngle);
                p4.y += innerRadius * Math.sin(startAngle);
                var opt1 = ' 0 0,1 ', opt2 = ' 0 0,0 ';
                if (Math.abs(sweepAngle) > Math.PI) {
                    opt1 = ' 0 1,1 ';
                    opt2 = ' 0 1,0 ';
                }
                var d = 'M ' + p1.x.toFixed(3) + ',' + p1.y.toFixed(3);
                d += ' A ' + radius.toFixed(3) + ',' + radius.toFixed(3) + opt1;
                d += p2.x.toFixed(3) + ',' + p2.y.toFixed(3);
                if (isFull) {
                    d += ' M ' + p3.x.toFixed(3) + ',' + p3.y.toFixed(3);
                }
                else {
                    d += ' L ' + p3.x.toFixed(3) + ',' + p3.y.toFixed(3);
                }
                d += ' A ' + innerRadius.toFixed(3) + ',' + innerRadius.toFixed(3) + opt2;
                d += p4.x.toFixed(3) + ',' + p4.y.toFixed(3);
                if (!isFull) {
                    d += ' z';
                }
                path.setAttribute('d', d);
                if (clipPath) {
                    path.setAttribute('clip-path', 'url(#' + clipPath + ')');
                }
                if (className) {
                    path.setAttribute('class', className);
                }
                this._applyStyle(path, style);
                this._appendChild(path);
                return path;
            };
            SvgRenderEngine.prototype.drawString = function (s, pt, className, style) {
                var text = this._createText(pt, s);
                if (className) {
                    text.setAttribute('class', className);
                }
                this._applyStyle(text, style);
                this._appendChild(text);
                var bb = this._getBBox(text); // text.getBBox();
                text.setAttribute('y', (pt.y - (bb.y + bb.height - pt.y)).toFixed(1));
                return text;
            };
            SvgRenderEngine.prototype.drawStringRotated = function (s, pt, center, angle, className, style) {
                var text = this._createText(pt, s);
                if (className) {
                    text.setAttribute('class', className);
                }
                this._applyStyle(text, style);
                var g = document.createElementNS(SvgRenderEngine.svgNS, 'g');
                g.setAttribute('transform', 'rotate(' + angle.toFixed(1) + ',' + center.x.toFixed(1) + ',' + center.y.toFixed(1) + ')');
                //g.setAttribute('transform', 'rotate(' + angle.toString() + ',' + center.x.toString() + ',' + center.y.toString() + ')');
                g.appendChild(text);
                //this._svg.appendChild(g);
                this._appendChild(g);
                var bb = this._getBBox(text); // text.getBBox();
                text.setAttribute('y', (pt.y - (bb.y + bb.height - pt.y)).toFixed(1));
                return text;
            };
            SvgRenderEngine.prototype.measureString = function (s, font) {
                return this._measureString(s, null, null, { 'font-size': font.fontSize, 'font-family': font.fontFamily });
            };
            SvgRenderEngine.prototype._measureString = function (s, className, groupName, style) {
                var sz = new Size(0, 0);
                if (this._fontSize) {
                    this._text.setAttribute('font-size', this._fontSize);
                }
                if (this._fontFamily) {
                    this._text.setAttribute('font-family', this._fontFamily);
                }
                if (className) {
                    this._text.setAttribute('class', className);
                }
                if (groupName) {
                    this._textGroup.setAttribute('class', groupName);
                }
                this._applyStyle(this._text, style);
                this._setText(this._text, s);
                var rect = this._getBBox(this._text); // this._text.getBBox();
                sz.width = rect.width;
                sz.height = rect.height - 2;
                this._text.removeAttribute('font-size');
                this._text.removeAttribute('font-family');
                this._text.removeAttribute('class');
                if (style) {
                    for (var key in style) {
                        this._text.removeAttribute(this._deCase(key));
                    }
                }
                this._textGroup.removeAttribute('class');
                this._text.textContent = null;
                return sz;
            };
            SvgRenderEngine.prototype.startGroup = function (className, clipPath, createTransform) {
                if (createTransform === void 0) { createTransform = false; }
                var group = document.createElementNS(SvgRenderEngine.svgNS, 'g');
                if (className) {
                    group.setAttribute('class', className);
                }
                if (clipPath) {
                    group.setAttribute('clip-path', 'url(#' + clipPath + ')');
                }
                this._appendChild(group);
                if (createTransform) {
                    group.transform.baseVal.appendItem(this._svg.createSVGTransform());
                }
                this._group = group;
                return group;
            };
            SvgRenderEngine.prototype.endGroup = function () {
                if (this._group) {
                    var parent = this._group.parentNode;
                    if (parent == this._svg) {
                        this._group = null;
                    }
                    else {
                        this._group = parent;
                    }
                }
            };
            SvgRenderEngine.prototype.drawImage = function (imageHref, x, y, w, h) {
                var img = document.createElementNS(SvgRenderEngine.svgNS, 'image');
                img.setAttributeNS(SvgRenderEngine.xlinkNS, 'href', imageHref);
                img.setAttribute('x', x.toFixed(1));
                img.setAttribute('y', y.toFixed(1));
                img.setAttribute('width', w.toFixed(1));
                img.setAttribute('height', h.toFixed(1));
                this._appendChild(img);
                return img;
            };
            SvgRenderEngine.prototype._appendChild = function (element) {
                var group = this._group;
                if (!group) {
                    group = this._svg;
                }
                group.appendChild(element);
            };
            SvgRenderEngine.prototype._create = function () {
                this._svg = document.createElementNS(SvgRenderEngine.svgNS, 'svg');
                this._defs = document.createElementNS(SvgRenderEngine.svgNS, 'defs');
                this._svg.appendChild(this._defs);
                this._text = this._createText(new Point(-1000, -1000), '');
                this._textGroup = document.createElementNS(SvgRenderEngine.svgNS, 'g');
                this._textGroup.appendChild(this._text);
                this._svg.appendChild(this._textGroup);
            };
            SvgRenderEngine.prototype._setText = function (element, s) {
                var text = s ? s.toString() : null;
                if (text && text.indexOf('tspan') >= 0) {
                    try {
                        element.textContent = null;
                        // Parse the markup into valid nodes.
                        var dXML = new DOMParser();
                        //dXML.async = false;
                        // Wrap the markup into a SVG node to ensure parsing works.
                        var sXML = '<svg xmlns="http://www.w3.org/2000/svg\">' + text + '</svg>';
                        var svgDocElement = dXML.parseFromString(sXML, 'text/xml').documentElement;
                        // Now take each node, import it and append to this element.
                        var childNode = svgDocElement.firstChild;
                        while (childNode) {
                            element.appendChild(element.ownerDocument.importNode(childNode, true));
                            childNode = childNode.nextSibling;
                        }
                    }
                    catch (e) {
                        throw new Error('Error parsing XML string.');
                    }
                    ;
                }
                else {
                    element.textContent = text;
                }
            };
            SvgRenderEngine.prototype._createText = function (pos, text) {
                var textel = document.createElementNS(SvgRenderEngine.svgNS, 'text');
                this._setText(textel, text);
                textel.setAttribute('fill', this._textFill);
                textel.setAttribute('x', pos.x.toFixed(1));
                textel.setAttribute('y', pos.y.toFixed(1));
                //textel.setAttribute('x', pos.x.toString());
                //textel.setAttribute('y', pos.y.toString());
                if (this._fontSize) {
                    textel.setAttribute('font-size', this._fontSize);
                }
                if (this._fontFamily) {
                    textel.setAttribute('font-family', this._fontFamily);
                }
                return textel;
            };
            SvgRenderEngine.prototype._applyStyle = function (el, style) {
                if (style) {
                    for (var key in style) {
                        el.setAttribute(this._deCase(key), style[key]);
                    }
                }
            };
            SvgRenderEngine.prototype._deCase = function (s) {
                return s.replace(/[A-Z]/g, function (a) { return '-' + a.toLowerCase(); });
            };
            SvgRenderEngine.prototype._getBBox = function (text) {
                if (SvgRenderEngine._isff) {
                    try {
                        return text.getBBox();
                    }
                    catch (e) {
                        return { x: 0, y: 0, width: 0, height: 0 };
                    }
                }
                else {
                    return text.getBBox();
                }
            };
            return SvgRenderEngine;
        }());
        SvgRenderEngine.svgNS = 'http://www.w3.org/2000/svg';
        SvgRenderEngine.xlinkNS = 'http://www.w3.org/1999/xlink';
        graphics.SvgRenderEngine = SvgRenderEngine;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
/// <reference path="Util.ts" />
/// <reference path="Canvas.ts" />
var android;
(function (android) {
    var graphics;
    (function (graphics) {
        var TextPaint = (function () {
            function TextPaint(canvas, font) {
                this.canvas = canvas;
                this.font = font;
            }
            TextPaint.prototype.measureString = function (str) {
                return this.canvas.measureString(str, this.font);
            };
            return TextPaint;
        }());
        graphics.TextPaint = TextPaint;
    })(graphics = android.graphics || (android.graphics = {}));
})(android || (android = {}));
var android;
(function (android) {
    var util;
    (function (util) {
        var ArrayList = (function () {
            function ArrayList() {
                this._array = [];
            }
            ArrayList.prototype.add = function (value) {
                this._array.push(value);
            };
            ArrayList.prototype.remove = function (value) {
                if (typeof (value) === 'number') {
                    this._array.splice(value);
                }
                else {
                    var index = this._array.indexOf(value);
                    if (index > 0) {
                        this._array.splice(index, 1);
                    }
                }
            };
            ArrayList.prototype.clear = function () {
                this._array.length = 0;
            };
            ArrayList.prototype.size = function () {
                return this._array.length;
            };
            ArrayList.prototype.get = function (index) {
                return this._array[index];
            };
            return ArrayList;
        }());
        util.ArrayList = ArrayList;
    })(util = android.util || (android.util = {}));
})(android || (android = {}));
var android;
(function (android) {
    var util;
    (function (util) {
        var Message = (function () {
            function Message(what) {
                this.what = 0;
                this.what = what;
            }
            Message.obtain = function (what) {
                return new Message(what);
            };
            return Message;
        }());
        util.Message = Message;
    })(util = android.util || (android.util = {}));
})(android || (android = {}));
/// <reference path="Message.ts" />
/// <reference path="Log.ts" />
var android;
(function (android) {
    var util;
    (function (util) {
        var Handler = (function () {
            function Handler() {
                this._hanlderMap = {};
                this._queue = [];
            }
            Handler.prototype.handleMessage = function (msg) {
                // do nothing   
            };
            Handler.prototype.sendMessage = function (msg) {
                return this.sendMessageDelayed(msg, 0);
            };
            Handler.prototype.sendMessageDelayed = function (msg, delay) {
                // Log.d('sendMessageDelayed delay = ' + delay + "   now =" + Date.now());
                return this.sendMessageAtTime(msg, Date.now() + delay);
            };
            Handler.prototype.sendMessageAtTime = function (msg, uptimeMillis) {
                var self = this;
                this._hanlderMap[msg.what] = setTimeout(function () {
                    self.handleMessage(msg);
                }, uptimeMillis - Date.now());
                return true;
            };
            Handler.prototype.removeMessages = function (what) {
                clearTimeout(this._hanlderMap[what]);
            };
            Handler.prototype.obtainMessage = function (what) {
                return util.Message.obtain(what);
            };
            return Handler;
        }());
        util.Handler = Handler;
    })(util = android.util || (android.util = {}));
})(android || (android = {}));
var android;
(function (android) {
    var widget;
    (function (widget) {
        var View = android.view.View;
        var MeasureSpec = android.view.MeasureSpec;
        var ScaleType;
        (function (ScaleType) {
            ScaleType[ScaleType["MATRIX"] = 0] = "MATRIX";
            ScaleType[ScaleType["FIT_XY"] = 1] = "FIT_XY";
            ScaleType[ScaleType["FIT_START"] = 2] = "FIT_START";
            ScaleType[ScaleType["FIT_CENTER"] = 3] = "FIT_CENTER";
            ScaleType[ScaleType["FIT_END"] = 4] = "FIT_END";
            ScaleType[ScaleType["CENTER"] = 5] = "CENTER";
            ScaleType[ScaleType["CENTER_CROP"] = 6] = "CENTER_CROP";
            ScaleType[ScaleType["CENTER_INSIDE"] = 7] = "CENTER_INSIDE";
        })(ScaleType = widget.ScaleType || (widget.ScaleType = {}));
        var ImageView = (function (_super) {
            __extends(ImageView, _super);
            function ImageView() {
                return _super.apply(this, arguments) || this;
            }
            ImageView.prototype.onMeasure = function (width, height, canvas) {
                this.setMeasuredDimension(new MeasureSpec(), new MeasureSpec());
                return null;
            };
            ImageView.prototype.onDraw = function (canvas) {
            };
            return ImageView;
        }(View));
        widget.ImageView = ImageView;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
/// <reference path="../view/implemention/ViewGroup.ts" />
var android;
(function (android) {
    var widget;
    (function (widget) {
        var Gravity = android.graphics.Gravity;
        var ViewGroup = android.view.ViewGroup;
        var Point = android.graphics.Point;
        var MeasureSpec = android.view.MeasureSpec;
        var Orientation = android.graphics.Orientation;
        var LayoutParams = android.view.LayoutParams;
        var LinearLayout = (function (_super) {
            __extends(LinearLayout, _super);
            function LinearLayout() {
                var _this = _super.apply(this, arguments) || this;
                _this._orientation = Orientation.Horizontal;
                return _this;
            }
            LinearLayout.prototype.setOrientation = function (orientation) {
                this._orientation = orientation;
            };
            LinearLayout.prototype.getOrientation = function () {
                return this._orientation;
            };
            LinearLayout.prototype.onMeasure = function (width, height, canvas) {
                if (this._orientation === Orientation.Horizontal) {
                    return this.measureHorizontal(width, height, canvas);
                }
                else {
                    return this.measureVertical(width, height, canvas);
                }
            };
            LinearLayout.prototype.measureHorizontal = function (width, height, canvas) {
                var size;
                for (var i = 0; i < this.children.length; ++i) {
                    var item = this.children[i];
                    var lp = item.layoutParams;
                    var w = lp.width;
                    var h = lp.height;
                    if (lp.heightMode === LayoutParams.MATCH_PARENT) {
                        h = height.value;
                    }
                    if (lp.widthMode === LayoutParams.MATCH_PARENT) {
                        w = width.value;
                    }
                    var s = item.onMeasure(new MeasureSpec(w, lp.widthMode), new MeasureSpec(h, lp.heightMode), canvas);
                    if (size) {
                        size.width += s.width;
                        if (size.height < s.height) {
                            size.height = s.height;
                        }
                    }
                    else {
                        size = s.clone();
                    }
                }
                // if (size.width > width.value) {
                //     size.width = width.value;
                // }
                // if (size.height > height.value) {
                //     size.height = height.value;
                // }
                if (this.layoutParams.widthMode === LayoutParams.EXACTLY) {
                    size.width = this.layoutParams.width;
                }
                else if (this.layoutParams.widthMode === LayoutParams.MATCH_PARENT) {
                    size.width = width.getMeasureValue();
                }
                if (this.layoutParams.heightMode === LayoutParams.EXACTLY) {
                    size.height = this.layoutParams.height;
                }
                else if (this.layoutParams.heightMode === LayoutParams.MATCH_PARENT) {
                    size.height = height.getMeasureValue();
                }
                this.setMeasuredDimension(new MeasureSpec(size.width, LayoutParams.EXACTLY), new MeasureSpec(size.height, LayoutParams.EXACTLY));
                return size;
            };
            LinearLayout.prototype.measureVertical = function (width, height, canvas) {
                var size;
                for (var i = 0; i < this.children.length; ++i) {
                    var item = this.children[i];
                    var lp = item.layoutParams;
                    var w = lp.width;
                    var h = lp.height;
                    if (lp.heightMode === LayoutParams.MATCH_PARENT) {
                        h = height.value;
                    }
                    if (lp.widthMode === LayoutParams.MATCH_PARENT) {
                        w = width.value;
                    }
                    var s = item.onMeasure(new MeasureSpec(w, lp.widthMode), new MeasureSpec(h, lp.heightMode), canvas);
                    if (size) {
                        size.height += s.height;
                        if (size.width < s.width) {
                            size.width = s.width;
                        }
                    }
                    else {
                        size = s.clone();
                    }
                }
                // if (size.width > width.value) {
                //     size.width = width.value;
                // }
                // if (size.height > height.value) {
                //     size.height = height.value;
                // }
                if (this.layoutParams.widthMode === LayoutParams.EXACTLY) {
                    size.width = this.layoutParams.width;
                }
                else if (this.layoutParams.widthMode === LayoutParams.MATCH_PARENT) {
                    size.width = width.getMeasureValue();
                }
                if (this.layoutParams.heightMode === LayoutParams.EXACTLY) {
                    size.height = this.layoutParams.height;
                }
                else if (this.layoutParams.heightMode === LayoutParams.MATCH_PARENT) {
                    size.height = height.getMeasureValue();
                }
                this.setMeasuredDimension(new MeasureSpec(size.width, LayoutParams.EXACTLY), new MeasureSpec(size.height, LayoutParams.EXACTLY));
                return size;
            };
            LinearLayout.prototype.onLayout = function (l, t, r, b, canvas) {
                // this.layoutInfo.reset(l, t, r, b, this.padding, 0);
                _super.prototype.onLayout.call(this, l, t, r, b, canvas);
                var innerrect = this.layoutInfo.innerrect;
                if (this._orientation === Orientation.Horizontal) {
                    this.layoutHorizontal(innerrect.left, innerrect.top, innerrect.right, innerrect.bottom, canvas);
                }
                else {
                    this.layoutVertical(innerrect.left, innerrect.top, innerrect.right, innerrect.bottom, canvas);
                }
            };
            LinearLayout.prototype.layoutHorizontal = function (l, t, r, b, canvas) {
                var viewItem;
                var m;
                var startpoint = new Point(l, t);
                var length = this.children.length;
                var childWidth = 0;
                for (var i = 0; i < length; ++i) {
                    viewItem = this.children[i];
                    m = viewItem.layoutParams.margin;
                    childWidth += viewItem.width + (m.marginLeft + m.marginRight);
                }
                viewItem = null;
                m = null;
                var startOffset = 0;
                if (childWidth < (r - l)) {
                    startOffset = ((r - l) - childWidth) / 2;
                }
                for (i = 0; i < length; ++i) {
                    viewItem = this.children[i];
                    m = viewItem.layoutParams.margin;
                    switch (viewItem.gravity) {
                        case Gravity.Left:
                        case Gravity.Auto:
                            break;
                        case Gravity.Right:
                            break;
                        case Gravity.Top:
                            startpoint.y = t;
                            break;
                        case Gravity.Bottom:
                            startpoint.y = b - viewItem.height - m.marginBottom;
                            break;
                        case Gravity.Center:
                            startpoint.y = t + ((b - t - viewItem.height) > 0 ? b - t - viewItem.height : 0) / 2;
                            break;
                    }
                    startpoint.offset(m.marginLeft > 0 ? m.marginLeft : 0, m.marginTop > 0 ? m.marginTop : 0);
                    viewItem.onLayout(startpoint.x, startpoint.y, startpoint.x + viewItem.width, startpoint.y + viewItem.height, canvas);
                    startpoint.offset(viewItem.width + (m.marginRight > 0 ? m.marginRight : 0), 0);
                }
            };
            LinearLayout.prototype.layoutVertical = function (l, t, r, b, canvas) {
                var viewItem;
                var m;
                var startpoint = new Point(l, t);
                var length = this.children.length;
                var childHeight = 0;
                for (var i = 0; i < length; ++i) {
                    viewItem = this.children[i];
                    m = viewItem.layoutParams.margin;
                    childHeight += viewItem.height + (m.marginTop + m.marginBottom);
                }
                viewItem = null;
                m = null;
                var startOffset = 0;
                if (childHeight < (b - t)) {
                    startOffset = ((b - t) - childHeight) / 2;
                }
                for (i = 0; i < length; ++i) {
                    viewItem = this.children[i];
                    m = viewItem.layoutParams.margin;
                    switch (viewItem.gravity) {
                        case Gravity.Left:
                        case Gravity.Auto:
                            startpoint.x = l;
                            break;
                        case Gravity.Right:
                            startpoint.x = r - viewItem.width - m.marginRight;
                            break;
                        case Gravity.Top:
                            // startpoint.y = t;
                            break;
                        case Gravity.Bottom:
                            // startpoint.y = b-viewItem.height-m.marginBottom;
                            break;
                        case Gravity.Center:
                            // startpoint.y = t+((b-t-viewItem.height)>0?b-t-viewItem.height:0)/2;
                            startpoint.x = l + ((r - l - viewItem.width) > 0 ? r - l - viewItem.width : 0) / 2;
                            break;
                    }
                    startpoint.offset(m.marginLeft > 0 ? m.marginLeft : 0, m.marginTop > 0 ? m.marginTop : 0);
                    viewItem.onLayout(startpoint.x, startpoint.y, startpoint.x + viewItem.width, startpoint.y + viewItem.height, canvas);
                    // startpoint.translate(viewItem.width + (m.marginRight>0? m.marginRight:0),0);
                    startpoint.offset(0, viewItem.height + (m.marginBottom > 0 ? m.marginBottom : 0));
                }
            };
            return LinearLayout;
        }(ViewGroup));
        widget.LinearLayout = LinearLayout;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
/// <reference path="../view/implemention/ViewGroup.ts" />
var android;
(function (android) {
    var widget;
    (function (widget) {
        var ViewGroup = android.view.ViewGroup;
        var ListView = (function (_super) {
            __extends(ListView, _super);
            function ListView(context) {
                return _super.call(this, context) || this;
            }
            ListView.prototype.setAdapter = function (adapter) {
            };
            return ListView;
        }(ViewGroup));
        widget.ListView = ListView;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
/// <reference path="../view/implemention/ViewGroup.ts" />
var android;
(function (android) {
    var widget;
    (function (widget) {
        var Point = android.graphics.Point;
        var MotionEvent = android.view.event.MotionEvent;
        var ScrollLayout = (function (_super) {
            __extends(ScrollLayout, _super);
            function ScrollLayout(context) {
                return _super.call(this, context) || this;
            }
            ScrollLayout.prototype.onMeasure = function (width, height, canvas) {
                android.Debug.assert(this.children.length === 1, "There is only one view that can be added to the scroll layout ");
                return _super.prototype.onMeasure.call(this, width, height, canvas);
            };
            ScrollLayout.prototype.onLayout = function (l, t, r, b, canvas) {
                _super.prototype.onLayout.call(this, l, t, r, b, canvas);
            };
            ScrollLayout.prototype.onInterceptMouseEvent = function (event) {
                // console.log("===================================  onInterceptMouseEvent " + event.toString());
                // // return super.onInterceptMouseEvent(event);
                // let result: boolean = false;
                // switch (event.action) {
                //     case MotionEvent.ACTION_MOUSE_ON:
                //         result = true;
                //         this.lastPt = new Point(event.x, event.y);
                //     case MotionEvent.ACTION_MOUSE_MOVE:
                //         if (Math.abs(event.y - this.lastPt.y) > Math.abs(event.x - this.lastPt.x)) {
                //             result = true;
                //         } else {
                //             result = false;
                //         }
                //         this.lastPt = new Point(event.x, event.y);
                //         break;
                // }
                // console.log("Intercept Result  " + result);
                // return result;
                return true;
            };
            ScrollLayout.prototype.onMouseEvent = function (event) {
                console.log("onMouseEvent " + event.toString());
                var currentPt = new Point(event.x, event.y);
                switch (event.action) {
                    case MotionEvent.ACTION_MOUSE_WHEEL:
                        if (this.startPt != null) {
                            if (this.children[0].height > this.width) {
                                if (event.deltaY != null && event.deltaY != 0) {
                                    // let offset=(currentPt.y-this.startPt.y);
                                    var offset = -event.deltaY;
                                    if (offset > 0 && this.children[0].top >= this.top) {
                                        return;
                                    }
                                    if (offset < 0 && this.children[0].bottom <= this.bottom) {
                                        return;
                                    }
                                    this.children[0].offset(0, offset);
                                    // this.invalidate(true);
                                    this.requestLayout();
                                    // this.invalidate(true);
                                    console.log('top' + this.children[0].top + " , bottom  " + this.children[0].bottom);
                                }
                            }
                        }
                        this.startPt = currentPt.clone();
                        break;
                    case MotionEvent.ACTION_MOUSE_OUT:
                        this.startPt = null;
                        break;
                }
                return true;
            };
            return ScrollLayout;
        }(widget.FrameLayout));
        widget.ScrollLayout = ScrollLayout;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
var android;
(function (android) {
    var widget;
    (function (widget) {
        'use strict';
        var Scroller = (function () {
            function Scroller() {
            }
            return Scroller;
        }());
        widget.Scroller = Scroller;
        var FastScroller = (function () {
            function FastScroller() {
            }
            return FastScroller;
        }());
        widget.FastScroller = FastScroller;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
var android;
(function (android) {
    var widget;
    (function (widget) {
        var Size = android.graphics.Size;
        var View = android.view.View;
        var MeasureSpec = android.view.MeasureSpec;
        var Font = android.graphics.Font;
        var LayoutInfo = android.view.LayoutInfo;
        var LayoutParams = android.view.LayoutParams;
        var Ellipsize;
        (function (Ellipsize) {
        })(Ellipsize = widget.Ellipsize || (widget.Ellipsize = {}));
        var TextView = (function (_super) {
            __extends(TextView, _super);
            function TextView() {
                return _super.apply(this, arguments) || this;
            }
            TextView.prototype.onDraw = function (canvas) {
                _super.prototype.onDraw.call(this, canvas);
                canvas.drawText(this.text, this.layoutInfo.innerrect.startPoint, this.font);
            };
            TextView.prototype.setText = function (text) {
                this.text = text;
                this.invalidate(false);
            };
            TextView.prototype.setFont = function (font) {
                this.font = font;
            };
            Object.defineProperty(TextView.prototype, "ellipsize", {
                get: function () {
                    return this._ellipsize;
                },
                set: function (ellipsize) {
                    this._ellipsize = ellipsize;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextView.prototype, "maxWidth", {
                get: function () {
                    return this._maxWidth;
                },
                set: function (maxWidth) {
                    this._maxWidth = maxWidth;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextView.prototype, "linespace", {
                get: function () {
                    return this._linespace;
                },
                set: function (linespace) {
                    this._linespace = linespace;
                },
                enumerable: true,
                configurable: true
            });
            // private _measureString(width:number):Size{
            //     return
            // }
            TextView.prototype.onMeasure = function (width, height, canvas) {
                if (!this.font) {
                    this.font = new Font(16, "", 'white');
                }
                this._layoutInfo = new LayoutInfo(0, 0, 0, 0, this.padding, 0);
                var w = this.layoutParams.width;
                var h = this.layoutParams.height;
                var size = new Size(w, h);
                var widthmode = this.layoutParams.widthMode;
                var heightmode = this.layoutParams.heightMode;
                var textsize = canvas.measureString(this.text, this.font);
                if (widthmode === LayoutParams.MATCH_PARENT) {
                    size.width = width.value;
                }
                else if (widthmode === LayoutParams.WRAP_CONTENT) {
                    size.width = textsize.width > this._maxWidth ? this._maxWidth : textsize.width;
                }
                if (heightmode === LayoutParams.MATCH_PARENT) {
                    size.height = height.value;
                }
                else if (heightmode === LayoutParams.WRAP_CONTENT) {
                    size.height = textsize.height;
                }
                this.setMeasuredDimension(new MeasureSpec(size.width, LayoutParams.EXACTLY), new MeasureSpec(size.height, LayoutParams.EXACTLY));
                return size;
            };
            return TextView;
        }(View));
        widget.TextView = TextView;
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
/// <reference path="../database/DataSetObservable.ts" />
/// <reference path="../adapter/ViewPagerAdapter.ts" />
/// <reference path="../util/ArrayList.ts" />
/// <reference path="../util/Handler.ts" />
/// <reference path="../device/Device.ts" />
var android;
(function (android) {
    var widget;
    (function (widget) {
        var Size = android.graphics.Size;
        var ViewGroup = android.view.ViewGroup;
        var MeasureSpec = android.view.MeasureSpec;
        var LayoutParams = android.view.LayoutParams;
        var ArrayList = android.util.ArrayList;
        var DataSetObserver = android.database.DataSetObserver;
        var Handler = android.util.Handler;
        var Log = android.util.Log;
        var MotionEvent = android.view.event.MotionEvent;
        var Device = android.device.Device;
        var TAG = "ScaleViewPager";
        var ANIMATION_FRAME_DURATION = 1000 / 80;
        var MIN_SPEED = 10.0;
        var MIN_TOUCH = 12;
        var MOVE_LEFT = 10001;
        var MOVE_RIGHT = 10002;
        var MOVE_BACK = 10003;
        var SCALE_CONSTANT = 100;
        var STATE_MOVE_LEFT = 11001;
        var STATE_MOVE_RIGHT = 11002;
        var ViewPager = (function (_super) {
            __extends(ViewPager, _super);
            function ViewPager(context) {
                var _this = _super.call(this, context) || this;
                _this.mPosition = 0;
                _this.mViewStack = new ArrayList();
                _this.mIndex = 0;
                _this.mSize = 0;
                _this.mAnimationState = 0;
                _this.mScale = 0;
                _this.mIsScaled = false;
                _this.mMin_speed = MIN_SPEED;
                _this.min_touch = MIN_TOUCH;
                _this.mLastAnimationTime = 0;
                _this.mCurrentAnimationTime = 0;
                _this.mSpeed = 130;
                _this.mAnimationEnd = true;
                _this.mCenterX = 0;
                _this.mCenterY = 0;
                _this.direction = 1;
                _this.init();
                return _this;
            }
            ViewPager.prototype.init = function () {
                var _this = this;
                var context = this.getContext();
                this.mMin_speed = MIN_SPEED * Device.density;
                this.mLayoutParams = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
                this.min_touch = 3;
                this.mHandler = new Handler();
                this.mHandler.handleMessage = function (msg) {
                    switch (msg.what) {
                        case MOVE_LEFT:
                            _this.doLeftOrBounceAnimation();
                            break;
                        case MOVE_RIGHT:
                            _this.doRightOrBounceAnimation();
                            break;
                    }
                };
            };
            ViewPager.prototype.setAreaTouchListener = function (l) {
                this.mAreaTouchListener = l;
            };
            ViewPager.prototype.onInterceptTouchEvent = function (evnt) {
                var action = evnt.action;
                var x = evnt.x;
                var y = evnt.y;
                switch (action) {
                    case MotionEvent.ACTION_DOWN:
                        this.oldx = x;
                        this.oldy = y;
                        this.downX = x;
                        if (this.mAreaTouchListener) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    case MotionEvent.ACTION_MOVE:
                        if (y - this.oldy != 0) {
                            if (Math.abs(x - this.oldx) / Math.abs(y - this.oldy) > 2 && Math.abs(x - this.downX) > this.min_touch) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                }
                return true;
            };
            ViewPager.prototype.onTouchEvent = function (event) {
                if (!this.mAnimationEnd) {
                    return true;
                }
                var action = event.action;
                var x = event.x;
                var y = event.y;
                if (this.mCurrentView == null)
                    return false;
                switch (action) {
                    case MotionEvent.ACTION_MOVE: {
                        Log.d("event", "move ");
                        this.direction = x - this.oldx > 0 ? 1 : -1;
                        this.move(x - this.oldx);
                        this.oldx = x;
                        break;
                    }
                    case MotionEvent.ACTION_UP:
                    case MotionEvent.ACTION_CANCEL:
                        {
                            this.oldx = -1;
                            this.oldy = -1;
                            if (Math.abs(this.downX - x) == 0) {
                                if (x >= this.width / 4 * 3) {
                                    if (this.mAreaTouchListener != null) {
                                        this.mAreaTouchListener.onLeftTouch();
                                    }
                                }
                                else if (x <= this.width / 4) {
                                    if (this.mAreaTouchListener != null) {
                                        this.mAreaTouchListener.onRightTouch();
                                    }
                                }
                                else {
                                    if (this.mAreaTouchListener != null) {
                                        this.mAreaTouchListener.onMiddleTouch();
                                    }
                                }
                            }
                            else {
                                this.prepareToAnimation(this.direction * this.mMin_speed);
                            }
                            break;
                        }
                }
                return true;
            };
            ViewPager.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec, canvas) {
                var width = widthMeasureSpec.getMeasureValue();
                var height = heightMeasureSpec.getMeasureValue();
                this.mCenterX = width / 2;
                this.mCenterY = height / 2;
                for (var i = 0; i < this.mViewStack.size(); ++i) {
                    var child = this.mViewStack.get(i).view;
                    var lp = child.layoutParams;
                    var w = lp.width;
                    var h = lp.height;
                    if (lp.heightMode === LayoutParams.MATCH_PARENT) {
                        h = height;
                    }
                    if (lp.widthMode === LayoutParams.MATCH_PARENT) {
                        w = width;
                    }
                    child.onMeasure(new MeasureSpec(w, lp.widthMode), new MeasureSpec(h, lp.heightMode), canvas);
                }
                var size = new Size(width, height);
                this.setMeasuredDimension(new MeasureSpec(size.width, LayoutParams.EXACTLY), new MeasureSpec(size.height, LayoutParams.EXACTLY));
                return size;
            };
            ViewPager.prototype.onLayout = function (l, t, r, b, canvas) {
                this.layoutInfo.reset(l, t, r, b, this.padding, 0);
                var innerrect = this.layoutInfo.innerrect;
                var width = r - l;
                var height = b - t;
                for (var i = 0; i < this.mViewStack.size(); ++i) {
                    var view_5 = this.mViewStack.get(i).view;
                    var pos = this.mViewStack.get(i).index;
                    var gap = pos - this.mIndex;
                    var viewleft = view_5.padding.leftPadding + (width - view_5.width) / 2;
                    var viewtop = view_5.padding.topPadding + (height - view_5.height) / 2;
                    gap = gap > 0 ? 0 : gap;
                    view_5.onLayout(viewleft + gap * width, viewtop, viewleft + gap * width + view_5.width, viewtop + view_5.height, canvas);
                }
            };
            ViewPager.prototype.dispatchDraw = function (canvas) {
                // super.dispatchDraw(canvas);
                // Log.d('dispatchDraw ' + this.mPosition);
                if (this.mAnimationState === STATE_MOVE_LEFT) {
                    this.drawChild(canvas, this.mNextView);
                    canvas.save();
                    canvas.translate(this.mPosition, 0);
                    this.drawChild(canvas, this.mCurrentView);
                    canvas.restore();
                }
                else if (this.mAnimationState === STATE_MOVE_RIGHT) {
                    this.drawChild(canvas, this.mCurrentView);
                    canvas.save();
                    canvas.translate(this.mPosition, 0);
                    this.drawChild(canvas, this.mPreView);
                    canvas.restore();
                }
                else {
                    this.drawChild(canvas, this.mCurrentView);
                }
            };
            ViewPager.prototype.setAdapter = function (adapter) {
                this.mOldAdapter = this.mAdapter;
                this.mAdapter = adapter;
                if (this.mAdapter != null) {
                    this.mDataSetObserver = new DataSetObserver();
                    var self = this;
                    this.mDataSetObserver.onChanged = function () {
                        self.mSize = self.mAdapter.getCount();
                    };
                    this.mDataSetObserver.onInvalidated = function () {
                        self.invalidate(false);
                    };
                    this.mAdapter.registerDataSetObserver(this.mDataSetObserver);
                    this.mSize = adapter.getCount();
                    this.refreshNormal();
                }
            };
            ViewPager.prototype.setCurrentItem = function (index) {
                Log.d('setCurrentItem ' + index);
                this.mIndex = index;
                this.refreshNormal();
                this.pagerMovingEnd(this.mIndex);
            };
            ViewPager.prototype.getCurrentItem = function () {
                return this.mIndex;
            };
            ViewPager.prototype.setPagerChangedListener = function (listen) {
                this.listener = listen;
            };
            ViewPager.prototype.refreshNormal = function () {
                if (this.mAdapter) {
                    if (this.mIndex >= 0 && this.mIndex < this.mAdapter.getCount()) {
                        this.preRemove();
                        this.preLoad(this.mIndex);
                        for (var i = 0; i < this.mViewStack.size(); ++i) {
                            var view_6 = this.mViewStack.get(i).view;
                            var index = this.mViewStack.get(i).index;
                            if (index === this.mIndex) {
                                this.mCurrentView = view_6;
                                this.addView(view_6, 1, this.mLayoutParams);
                            }
                            if (index === this.mIndex - 1) {
                                this.mPreView = view_6;
                                this.addView(view_6, 0, this.mLayoutParams);
                            }
                            if (index === this.mIndex + 1) {
                                this.mNextView = view_6;
                                this.addView(view_6, 1, this.mLayoutParams);
                            }
                        }
                    }
                    else if (this.mAdapter.getCount() === 0 && this.mIndex === 0) {
                        return;
                    }
                    else {
                        throw 'current index is ' + this.mIndex + ' size is ' + this.mAdapter.getCount();
                    }
                }
            };
            ViewPager.prototype.preRemove = function () {
                for (var i = 0; i < this.mViewStack.size(); ++i) {
                    var view_7 = this.mViewStack.get(i).view;
                    var position = this.mViewStack.get(i).index;
                    this.removeView(view_7);
                    this.mAdapter.destoryItem(position, this);
                }
            };
            ViewPager.prototype.preLoad = function (position) {
                if (this.mAdapter !== null) {
                    this.mViewStack.clear();
                    this.mViewStack.add(this.preLoadPreView(position));
                    this.mViewStack.add(this.loadView(position));
                    this.mViewStack.add(this.preLoadNextView(position));
                }
            };
            ViewPager.prototype.preLoadPreView = function (position) {
                var pos = position - 1;
                return this.loadView(pos);
            };
            ViewPager.prototype.preLoadNextView = function (position) {
                var pos = position + 1;
                return this.loadView(pos);
            };
            ViewPager.prototype.loadView = function (index) {
                if (this.mAdapter === null) {
                    throw 'Null point Exception adapter is null';
                }
                var pos = index;
                if (pos >= this.mSize) {
                    pos = 0;
                }
                if (pos < 0) {
                    pos += this.mSize;
                }
                var view = this.mAdapter.initItem(pos, this);
                return new ItemInfo(view, index, pos);
            };
            ViewPager.prototype.move = function (dis) {
                Log.d("move " + dis);
                if (this.mPosition === 0 && dis !== 0) {
                    this.pagerChanged(this.mIndex, dis > 0 ? this.mIndex + 1 : this.mIndex - 1);
                }
                this.mPosition += dis;
                if (this.mPosition >= 0) {
                    this.mAnimationState = STATE_MOVE_RIGHT;
                }
                if (this.mPosition < 0) {
                    this.mAnimationState = STATE_MOVE_LEFT;
                }
                var movedegreepreView = this.mPosition / this.width;
                var movedegree = this.mPosition * (this.mIndex + 1) / this.width * this.mAdapter.getCount();
                this.pagerMoving(movedegreepreView, movedegree);
                this.invalidate(false);
            };
            ViewPager.prototype.prepareToAnimation = function (speed) {
                var now = Date.now();
                this.mAnimationEnd = false;
                this.mLastAnimationTime = now;
                this.mCurrentAnimationTime = now;
                this.mSpeed = speed;
                if (this.mSpeed === 0) {
                    this.mSpeed = this.mMin_speed;
                }
                if (speed > 0) {
                    this.mSpeed = Math.abs(this.mSpeed);
                    this.doRightOrBounceAnimation();
                }
                else {
                    this.mSpeed = -1 * Math.abs(this.mSpeed);
                    this.doLeftOrBounceAnimation();
                }
            };
            ViewPager.prototype.flipLeft = function () {
                Log.d("flipLeft " + this.mAnimationEnd);
                if (!this.mAnimationEnd)
                    return;
                this.mPosition = this.mCurrentView.left;
                this.move(-1);
                var now = Date.now();
                this.mAnimationEnd = false;
                this.mLastAnimationTime = now;
                this.mCurrentAnimationTime = now;
                this.mSpeed = -this.mMin_speed;
                this.doLeftOrBounceAnimation();
            };
            ViewPager.prototype.flipRight = function () {
                Log.d("filpRight " + this.mAnimationEnd);
                if (!this.mAnimationEnd)
                    return;
                this.mPosition = this.mCurrentView.left;
                this.move(1);
                var now = Date.now();
                this.mAnimationEnd = false;
                this.mLastAnimationTime = now;
                this.mCurrentAnimationTime = now;
                this.mSpeed = this.mMin_speed;
                this.doRightOrBounceAnimation();
            };
            ViewPager.prototype.doRightOrBounceAnimation = function () {
                var now = Date.now();
                var t = 1;
                var s = this.mSpeed * t;
                if (this.mPosition > 0) {
                    if (this.mPosition === this.width) {
                        this.mHandler.removeMessages(MOVE_RIGHT);
                        this.endRightanimation();
                        return;
                    }
                    if (s + this.mPosition > this.width) {
                        s = this.width - this.mPosition;
                    }
                }
                else {
                    if (this.mPosition === 0) {
                        this.mHandler.removeMessages(MOVE_RIGHT);
                        this.endBounceanimtion();
                        return;
                    }
                    if (s + this.mPosition > 0) {
                        s = -this.mPosition;
                    }
                }
                this.move(s);
                this.mCurrentAnimationTime += ANIMATION_FRAME_DURATION;
                this.mHandler.removeMessages(MOVE_LEFT);
                this.mHandler.removeMessages(MOVE_RIGHT);
                this.mHandler.sendMessageDelayed(this.mHandler.obtainMessage(MOVE_RIGHT), ANIMATION_FRAME_DURATION);
            };
            ViewPager.prototype.doLeftOrBounceAnimation = function () {
                // Log.d(TAG, "doleftAnimation  ");
                var now = Date.now();
                var t = 1; //(now - mLastAnimationTime)/1000;
                var s = (this.mSpeed * t);
                if (this.mPosition < 0) {
                    if (this.mPosition + this.width == 0) {
                        this.mHandler.removeMessages(MOVE_LEFT);
                        this.endLeftAnimation();
                        return;
                    }
                    if (s + this.mPosition + this.width < 0) {
                        s = -(this.mPosition + this.width);
                    }
                }
                else {
                    if (this.mPosition == 0) {
                        this.mHandler.removeMessages(MOVE_LEFT);
                        this.endBounceanimtion();
                        return;
                    }
                    if (s + this.mPosition < 0) {
                        s = -this.mPosition;
                    }
                }
                this.move(s);
                this.mCurrentAnimationTime += ANIMATION_FRAME_DURATION;
                this.mHandler.removeMessages(MOVE_LEFT);
                this.mHandler.removeMessages(MOVE_RIGHT);
                this.mHandler.sendMessageDelayed(this.mHandler.obtainMessage(MOVE_LEFT), ANIMATION_FRAME_DURATION);
            };
            ViewPager.prototype.endBounceanimtion = function () {
                Log.d("endBounceanimtion  ");
                this.mAnimationEnd = true;
                this.mScale = 0;
                this.mPosition = 0;
                this.mAnimationState = 0;
                this.pagerMovingEnd(this.mIndex);
            };
            ViewPager.prototype.endRightanimation = function () {
                Log.d("endRightanimation   ");
                var index = this.mIndex - 1;
                if (index < 0) {
                    index = this.mAdapter.getCount() + index;
                }
                this.mPosition = 0;
                this.mScale = 0;
                this.mAnimationState = 0;
                this.setCurrentItem(index);
                this.mAnimationEnd = true;
                this.pagerMovingEnd(this.mIndex);
            };
            ViewPager.prototype.endLeftAnimation = function () {
                Log.d("endLeftAnimation   ");
                var index = this.mIndex + 1;
                this.mPosition = 0;
                this.mScale = 0;
                index = index % this.mAdapter.getCount();
                this.mAnimationState = 0;
                this.setCurrentItem(index);
                this.mAnimationEnd = true;
                this.pagerMovingEnd(this.mIndex);
            };
            ViewPager.prototype.pagerChanged = function (position, targetPosition) {
                if (this.listener != null) {
                    this.listener.onPagerChanged(position, targetPosition);
                }
            };
            ViewPager.prototype.pagerMoving = function (movedegreepreView, movedegree) {
                if (this.listener != null) {
                    this.listener.onPagerMoving(-1 * movedegreepreView, -1 * movedegree);
                }
            };
            ViewPager.prototype.pagerMovingEnd = function (position) {
                if (this.listener != null) {
                    this.listener.onPagerMovingEnd(position);
                }
            };
            return ViewPager;
        }(ViewGroup));
        widget.ViewPager = ViewPager;
        var ItemInfo = (function () {
            function ItemInfo(v, i, pos) {
                this.view = v;
                this.index = i;
                this.position = pos;
            }
            return ItemInfo;
        }());
    })(widget = android.widget || (android.widget = {}));
})(android || (android = {}));
var android;
(function (android) {
    var view;
    (function (view) {
        var animation;
        (function (animation) {
            var AnimationType;
            (function (AnimationType) {
                AnimationType[AnimationType["Alpha"] = 0] = "Alpha";
                AnimationType[AnimationType["Translate"] = 1] = "Translate";
                AnimationType[AnimationType["Scale"] = 2] = "Scale";
                AnimationType[AnimationType["Rotate"] = 3] = "Rotate";
            })(AnimationType = animation.AnimationType || (animation.AnimationType = {}));
        })(animation = view.animation || (view.animation = {}));
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
var android;
(function (android) {
    var view;
    (function (view_8) {
        var animation;
        (function (animation) {
            var ScaleAnimation = (function (_super) {
                __extends(ScaleAnimation, _super);
                function ScaleAnimation() {
                    var _this = _super.call(this) || this;
                    _this.duration = 0;
                    return _this;
                }
                Object.defineProperty(ScaleAnimation.prototype, "isAniamtionEnd", {
                    get: function () {
                        return this.start + this.duration < Date.now();
                    },
                    enumerable: true,
                    configurable: true
                });
                ScaleAnimation.prototype.scale = function (now) {
                    console.log("ease " + ((now - this.start) / this.duration));
                    return this.ease.ease((now - this.start) / this.duration);
                };
                ScaleAnimation.prototype.applyTransformation = function (interpolatedTime, canvas, view) {
                    // canvas.moveto(view.left+view.width/2,view.top +view.height/2);
                    canvas.scale(this.from + (this.to - this.from) * interpolatedTime, this.from + (this.to - this.from) * interpolatedTime);
                };
                return ScaleAnimation;
            }(animation.Animation));
            animation.ScaleAnimation = ScaleAnimation;
        })(animation = view_8.animation || (view_8.animation = {}));
    })(view = android.view || (android.view = {}));
})(android || (android = {}));
var android;
(function (android) {
    var view;
    (function (view) {
        var RenderState = (function () {
            function RenderState(rect, index) {
                this.currentRect = rect;
                this.index = index;
            }
            return RenderState;
        }());
        view.RenderState = RenderState;
    })(view = android.view || (android.view = {}));
})(android || (android = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZHJvaWQvYXBwL0ludGVudC50cyIsImFuZHJvaWQvZ3JhcGhpY3MvUG9pbnQudHMiLCJhbmRyb2lkL2dyYXBoaWNzL1V0aWwudHMiLCJhbmRyb2lkL2RldmljZS9EZXZpY2UudHMiLCJhbmRyb2lkL3V0aWwvTG9nLnRzIiwiYW5kcm9pZC9kZXZpY2UvRGVmYXVsdC50cyIsImFuZHJvaWQvZ3JhcGhpY3MvQ2FudmFzLnRzIiwiYW5kcm9pZC9hcHAvQ29udGV4dC50cyIsImFuZHJvaWQvdmlldy9pbnRlcmZhY2UvSVZpZXcudHMiLCJhbmRyb2lkL3ZpZXcvaW50ZXJmYWNlL0lWaWV3R3JvdXAudHMiLCJhbmRyb2lkL2dyYXBoaWNzL1NpemUudHMiLCJhbmRyb2lkL2dyYXBoaWNzL01hcmdpbnMudHMiLCJhbmRyb2lkL2dyYXBoaWNzL1JlY3QudHMiLCJhbmRyb2lkL3ZpZXcvaW1wbGVtZW50aW9uL0xheW91dEluZm8udHMiLCJhbmRyb2lkL3ZpZXcvZXZlbnQvTW90aW9uRXZlbnQudHMiLCJhbmRyb2lkL3ZpZXcvYW5pbWF0aW9uL0FuaW1hdGlvbi50cyIsImFuZHJvaWQvdmlldy9hbmltYXRpb24vQW5pbWF0aW9uRWFzZS50cyIsImFuZHJvaWQvdmlldy9pbXBsZW1lbnRpb24vVmlldy50cyIsImFuZHJvaWQvdmlldy9pbXBsZW1lbnRpb24vVmlld0dyb3VwLnRzIiwiYW5kcm9pZC93aWRnZXQvRnJhbWVMYXlvdXQudHMiLCJhbmRyb2lkL2FwcC9BY3Rpdml0eS50cyIsImFuZHJvaWQvd2lkZ2V0L1Jvb3RWaWV3LnRzIiwiYW5kcm9pZC9hcHAvQWN0aXZpdHlNYW5hZ2VyLnRzIiwiYW5kcm9pZC9zdGFydHVwLnRzIiwiYW5kcm9pZC9kYXRhYmFzZS9EYXRhU2V0T2JzZXJ2ZXIudHMiLCJhbmRyb2lkL2RhdGFiYXNlL0RhdGFTZXRPYnNlcnZhYmxlLnRzIiwiYW5kcm9pZC9hZGFwdGVyL0FkYXB0ZXIudHMiLCJhbmRyb2lkL2FkYXB0ZXIvVmlld1BhZ2VyQWRhcHRlci50cyIsImFuZHJvaWQvYXBwL0J1bmRsZS50cyIsImFuZHJvaWQvZGVidWcvRGVidWcudHMiLCJhbmRyb2lkL2dyYXBoaWNzL0FsaWduLnRzIiwiYW5kcm9pZC9ncmFwaGljcy9BbGlnbkVsZW1lbnQudHMiLCJhbmRyb2lkL2dyYXBoaWNzL1JlbmRlckNhbnZhcy50cyIsImFuZHJvaWQvZ3JhcGhpY3MvUmVuZGVyU3ZnLnRzIiwiYW5kcm9pZC9ncmFwaGljcy9UZXh0UGFpbnQudHMiLCJhbmRyb2lkL3V0aWwvQXJyYXlMaXN0LnRzIiwiYW5kcm9pZC91dGlsL01lc3NhZ2UudHMiLCJhbmRyb2lkL3V0aWwvSGFuZGxlci50cyIsImFuZHJvaWQvd2lkZ2V0L0ltYWdlVmlldy50cyIsImFuZHJvaWQvd2lkZ2V0L0xpbmVhckxheW91dC50cyIsImFuZHJvaWQvd2lkZ2V0L0xpc3RWaWV3LnRzIiwiYW5kcm9pZC93aWRnZXQvU2Nyb2xsTGF5b3V0LnRzIiwiYW5kcm9pZC93aWRnZXQvU2Nyb2xsZXIudHMiLCJhbmRyb2lkL3dpZGdldC9UZXh0Vmlldy50cyIsImFuZHJvaWQvd2lkZ2V0L1ZpZXdQYWdlci50cyIsImFuZHJvaWQvdmlldy9hbmltYXRpb24vQW5pbWF0aW9uVHlwZS50cyIsImFuZHJvaWQvdmlldy9hbmltYXRpb24vU2NhbGVBbmltYXRpb24udHMiLCJhbmRyb2lkL3ZpZXcvaW1wbGVtZW50aW9uL1JlbmRlclN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBVSxPQUFPLENBZWhCO0FBZkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxHQUFHLENBZXBCO0lBZmlCLFdBQUEsR0FBRztRQUNqQjtZQUFBO1lBYUEsQ0FBQztZQVZXLHlCQUFRLEdBQWYsVUFBZ0IsQ0FBUyxFQUFFLGFBQWlCO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFFLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztZQUM1QyxDQUFDO1lBQ00seUJB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SUFBSSxRQUFRLEdBQVcsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxXQUFX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QUssR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQztZQUNMLGtCQUFDO1FBQUQsQ0FQQSxBQU9DLElBQUE7UUFQWSxnQkFBVyxjQU92QixDQUFBO0lBQ0wsQ0FBQyxFQVZpQixJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFVckI7QUFBRCxDQUFDLEVBVlMsT0FBTyxLQUFQLE9BQU8sUUFVaEIiLCJmaWxlIjoiYW5kcm9pZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhbmRyb2lkLmFwcHtcbiAgICBleHBvcnQgY2xhc3MgSW50ZW50e1xuICAgICAgICAgcHJpdmF0ZSBjb250ZXh0OkNvbnRleHQ7XG4gICAgICAgICBwcml2YXRlIHRhcmdldEFjdGl2aXR5Q2xhc3M6YW55O1xuICAgICAgICAgcHVibGljIHNldENsYXNzKGM6Q29udGV4dCwgYWN0aXZpdHlDbGFzczphbnkpOnZvaWR7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPWM7XG4gICAgICAgICAgICB0aGlzLnRhcmdldEFjdGl2aXR5Q2xhc3MgPSBhY3Rpdml0eUNsYXNzO1xuICAgICAgICAgfVxuICAgICAgICAgcHVibGljIGdldENsYXNzKCl7XG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0QWN0aXZpdHlDbGFzcztcbiAgICAgICAgIH1cbiAgICAgICAgIHB1YmxpYyBnZXRDb250ZXh0KCl7XG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICAgICAgIH1cbiAgICB9XG59IiwibmFtZXNwYWNlIGFuZHJvaWQuZ3JhcGhpY3Mge1xuXG4gICAgLyoqXG4gICAgICogUG9pbnQgaG9sZHMgdHdvIGludGVnZXIgY29vcmRpbmF0ZXNcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgUG9pbnQge1xuICAgICAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgICAgICBwdWJsaWMgeTogbnVtYmVyO1xuXG5cblxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgICAgICAgICAgaWYoIWlzTmFOKHgpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFpc05hTih5KSl7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBwb2ludCdzIHggYW5kIHkgY29vcmRpbmF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lZ2F0ZSB0aGUgcG9pbnQncyBjb29yZGluYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5lZ2F0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9mZnNldCB0aGUgcG9pbnQncyBjb29yZGluYXRlcyBieSBkeCwgZHlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBvZmZzZXQoZHg6IG51bWJlciwgZHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICAgICAgdGhpcy55ICs9IGR5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9pbnQncyBjb29yZGluYXRlcyBlcXVhbCAoeCx5KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueCA9PSB4ICYmIHRoaXMueSA9PSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGVxdWFsUG9pbnQocHQ6UG9pbnQpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXF1YWxzKHB0LngscHQueSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHB1YmxpYyBoYXNoQ29kZSgpOiBudW1iZXIge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyID0gdGhpcy54O1xuICAgICAgICAgICAgcmVzdWx0ID0gMzEgKiByZXN1bHQgKyB0aGlzLnk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cblxuICAgICAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiBcIlBvaW50KFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIpXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyY2VsYWJsZSBpbnRlcmZhY2UgbWV0aG9kc1xuICAgICAgICAgKi9cblxuICAgICAgICBwdWJsaWMgZGVzY3JpYmVDb250ZW50cygpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgY2xvbmUoKXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LHRoaXMueSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSIsIlxuXG5uYW1lc3BhY2UgYW5kcm9pZC5ncmFwaGljcyB7XG5cbiAgICBpbXBvcnQgUmVjdCA9IGFuZHJvaWQuZ3JhcGhpY3MuUmVjdDtcblxuICAgIGV4cG9ydCBlbnVtIEdyYXZpdHkge1xuICAgICAgICBMZWZ0LFxuICAgICAgICBDZW50ZXIsXG4gICAgICAgIFJpZ2h0LFxuICAgICAgICBUb3AsXG4gICAgICAgIEJvdHRvbSxcbiAgICAgICAgQXV0byxcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUGFkZGluZyB7XG4gICAgICAgIGxlZnRQYWRkaW5nOiBudW1iZXI7XG4gICAgICAgIHJpZ2h0UGFkZGluZzogbnVtYmVyO1xuICAgICAgICB0b3BQYWRkaW5nOiBudW1iZXI7XG4gICAgICAgIGJvdHRvbVBhZGRpbmc6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IocGFkZGluZz86IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKHBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldCBwYWRkaW5nKHBhZGRpbmc6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UGFkZGluZyA9IHRoaXMucmlnaHRQYWRkaW5nID0gdGhpcy50b3BQYWRkaW5nID0gdGhpcy5ib3R0b21QYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBlbnVtIFBvc2l0aW9uIHtcbiAgICAgICAgTGVmdCxcbiAgICAgICAgVG9wLFxuICAgICAgICBSaWdodCxcbiAgICAgICAgQm90dG9tXG4gICAgfVxuXG4gICAgZXhwb3J0IGVudW0gT3JpZW50YXRpb24ge1xuICAgICAgICBIb3Jpem9udGFsLFxuICAgICAgICBWZXJ0aWNhbFxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTdHJva2VTdHlsZSB7XG5cbiAgICAgICAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgICAgICAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgICAgICAgZGFzaDpudW1iZXJbXTtcbiAgICAgICAgZGFzaE9mZnNldDpudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKHN0cm9rZXdpZHRoOiBudW1iZXIsIHN0cm9rZWNvbG9yOiBzdHJpbmcsZGFzaD86bnVtYmVyW10sZGFzaG9mZnNldD86bnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZVdpZHRoID0gc3Ryb2tld2lkdGg7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gc3Ryb2tlY29sb3I7XG4gICAgICAgICAgICBpZihkYXNoICE9IG51bGwgJiYgZGFzaCBpbnN0YW5jZW9mIEFycmF5ICYmIGRhc2gubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXNoID0gZGFzaDtcbiAgICAgICAgICAgICAgICBpZihkYXNob2Zmc2V0ICE9IG51bGwgJiYgIWlzTmFOKGRhc2hvZmZzZXQpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoT2Zmc2V0ID0gZGFzaG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q3NzU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdzdHJva2Utd2lkdGgnOiB0aGlzLnN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgICAgICdzdHJva2UnOiB0aGlzLnN0cm9rZUNvbG9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xvbmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cm9rZVN0eWxlKHRoaXMuc3Ryb2tlV2lkdGgsIHRoaXMuc3Ryb2tlQ29sb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgRm9udCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGZ6OiBudW1iZXIsIGZtOiBzdHJpbmcsIGZjOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZm9udFNpemUgPSBmejtcbiAgICAgICAgICAgIHRoaXMuZm9udEZhbWlseSA9IGZtO1xuICAgICAgICAgICAgdGhpcy5mb250Q29sb3IgPSBmYztcbiAgICAgICAgICAgIGlmICghdGhpcy5mb250RmFtaWx5IHx8IHRoaXMuZm9udEZhbWlseSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9udEZhbWlseSA9ICdBcmlhbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9udFNpemU6IG51bWJlcjtcbiAgICAgICAgZm9udEZhbWlseTogc3RyaW5nO1xuICAgICAgICBmb250Q29sb3I6IHN0cmluZztcbiAgICAgICAgdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIgZm9udFNpemUgPSBcIiArIHRoaXMuZm9udFNpemUgKyBcIiwgZm9udEZhbWlseSA9IFwiICsgdGhpcy5mb250RmFtaWx5ICsgXCIsIGZvbnRDb2xvciA9IFwiICsgdGhpcy5mb250RmFtaWx5O1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBjbG9uZSgpOiBGb250IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9udCh0aGlzLmZvbnRTaXplLCB0aGlzLmZvbnRGYW1pbHksIHRoaXMuZm9udENvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTdHlsZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGJnOiBzdHJpbmcgfCBGaWxsU3R5bGUsIHN0cm9rZTogU3Ryb2tlU3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGJnO1xuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSA9IHN0cm9rZTtcbiAgICAgICAgfVxuICAgICAgICBiYWNrZ3JvdW5kOiBzdHJpbmcgfCBGaWxsU3R5bGU7XG4gICAgICAgIHN0cm9rZVN0eWxlOiBTdHJva2VTdHlsZTtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgR3JhZGllbnQge1xuICAgICAgICBwdWJsaWMgY29sb3JzOntvZmZzZXQ6bnVtYmVyLGNvbG9yOnN0cmluZ31bXSA9W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbG9yczp7b2Zmc2V0Om51bWJlcixjb2xvcjpzdHJpbmd9W10pe1xuICAgICAgICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgTGluZWFyR3JhZGllbnQgZXh0ZW5kcyBHcmFkaWVudCB7XG4gICAgICAgIHB1YmxpYyBzdGFydHg6IG51bWJlcjtcbiAgICAgICAgcHVibGljIHN0YXJ0eTogbnVtYmVyO1xuICAgICAgICBwdWJsaWMgZW5keDpudW1iZXI7XG4gICAgICAgIHB1YmxpYyBlbmR5Om51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3Ioc3g6bnVtYmVyLHN5Om51bWJlcixleDpudW1iZXIsZXk6bnVtYmVyLGNvbG9yczp7b2Zmc2V0Om51bWJlcixjb2xvcjpzdHJpbmd9W10pe1xuICAgICAgICAgICAgc3VwZXIoY29sb3JzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnR4ID1zeDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnR5ID1zeTtcbiAgICAgICAgICAgIHRoaXMuZW5keCA9IGV4O1xuICAgICAgICAgICAgdGhpcy5lbmR5ID0gZXk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSYWRpYWxHcmFkaWVudCBleHRlbmRzIEdyYWRpZW50IHtcbiAgICAgICAgcHVibGljIGNlbnRlcng6bnVtYmVyO1xuICAgICAgICBwdWJsaWMgY2VudGVyeTpudW1iZXI7XG4gICAgICAgIHB1YmxpYyBlbmQ6bnVtYmVyXG5cbiAgICAgICAgY29uc3RydWN0b3IoY3g6bnVtYmVyLGN5Om51bWJlcixlbmQ6bnVtYmVyLGNvbG9yczp7b2Zmc2V0Om51bWJlcixjb2xvcjpzdHJpbmd9W10pe1xuICAgICAgICAgICAgc3VwZXIoY29sb3JzKTtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyeCA9Y3g7XG4gICAgICAgICAgICB0aGlzLmNlbnRlcnkgPSBjeTtcbiAgICAgICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNoYWRvdyB7XG4gICAgICAgIG9mZnNldHg6IG51bWJlcjtcbiAgICAgICAgb2Zmc2V0eTogbnVtYmVyO1xuICAgICAgICBjb2xvcjogc3RyaW5nO1xuICAgICAgICBibHVyOiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIEZpbGxTdHlsZSB7XG4gICAgICAgIHByaXZhdGUgZmlsbDogR3JhZGllbnQgfCBzdHJpbmc7XG4gICAgICAgIHByaXZhdGUgc2hhZG93OiBTaGFkb3c7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5maWxsID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICAgICAgc3RhdGljIGNsb25lRGVlcChvYmplY3Q6IGFueSk6IGFueSB7XG4gICAgICAgICAgICBpZiAoKG9iamVjdCA9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgICh0eXBlb2Ygb2JqZWN0ID09PSAnbnVtYmVyJykgfHxcbiAgICAgICAgICAgICAgICAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycpIHx8XG4gICAgICAgICAgICAgICAgKHR5cGVvZiBvYmplY3QgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKFV0aWwuY2xvbmVEZWVwKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob2JqZWN0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShvYmplY3QuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsb25lT2JqZWN0OiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVPYmplY3Rba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVPYmplY3Rba2V5XSA9IFV0aWwuY2xvbmVEZWVwKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgY29udGFpbnMocmVjdDogUmVjdCwgcHQ6IFBvaW50KTogYm9vbGVhbiB7XG4gICAgICAgICAgICBpZiAocHQueCA8PSByZWN0LnJpZ2h0ICYmIHB0LnggPj0gcmVjdC5sZWZ0ICYmIHB0LnkgPD0gcmVjdC5ib3R0b20gJiYgcHQueSA+PSByZWN0LnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBnZXRSZWN0KHN0YXJ0OiBQb2ludCwgc2l6ZTogU2l6ZSk6IFJlY3Qge1xuICAgICAgICAgICAgbGV0IHJlY3Q6IFJlY3QgPSBuZXcgUmVjdChzdGFydC54LCBzdGFydC55LCBzdGFydC54ICsgc2l6ZS53aWR0aCwgc3RhcnQueSArIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiByZWN0O1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBnZXRTdHlsZUNzcyhzdHlsZTogU3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgICAgICBcImZpbGxcIjogc3R5bGUuYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICBcInN0cm9rZVwiOiBzdHlsZS5zdHJva2VTdHlsZSA/IHN0eWxlLnN0cm9rZVN0eWxlLnN0cm9rZUNvbG9yIDogXCJcIixcbiAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBzdHlsZS5zdHJva2VTdHlsZSA/IHN0eWxlLnN0cm9rZVN0eWxlLnN0cm9rZVdpZHRoIDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyB1bmlvbiguLi5yZWN0czogUmVjdFtdKTogUmVjdCB7XG4gICAgICAgICAgICBsZXQgcmVjdDogUmVjdCA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLlJlY3QoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICByZWN0LmxlZnQgPSBNYXRoLm1pbi5hcHBseSh0aGlzLCByZWN0cy5tYXAoZSA9PiBlLmxlZnQpKTtcbiAgICAgICAgICAgIHJlY3QudG9wID0gTWF0aC5taW4uYXBwbHkodGhpcywgcmVjdHMubWFwKGUgPT4gZS50b3ApKTtcbiAgICAgICAgICAgIHJlY3QucmlnaHQgPSBNYXRoLm1heC5hcHBseSh0aGlzLCByZWN0cy5tYXAoZSA9PiBlLnJpZ2h0KSk7XG4gICAgICAgICAgICByZWN0LmJvdHRvbSA9IE1hdGgubWF4LmFwcGx5KHRoaXMsIHJlY3RzLm1hcChlID0+IGUuYm90dG9tKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBoZXhUb1JnYihoZXgpIHtcblxuICAgICAgICAgICAgdmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgICAgICAgICAgIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgICAgICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgcmdiVG9IZXgociwgZywgYikge1xuICAgICAgICAgICAgcmV0dXJuIFwiI1wiICsgVXRpbC5jb21wb25lbnRUb0hleChyKSArIFV0aWwuY29tcG9uZW50VG9IZXgoZykgKyBVdGlsLmNvbXBvbmVudFRvSGV4KGIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb21wb25lbnRUb0hleChjKSB7XG4gICAgICAgICAgICB2YXIgaGV4ID0gYy50b1N0cmluZygxNik7XG4gICAgICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGFzRW51bSh2YWx1ZTogbnVtYmVyLCBlbnVtVHlwZTogYW55LCBudWxsT0sgPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiBudWxsT0spIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdmFyIGUgPSBlbnVtVHlwZVt2YWx1ZV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIChlKSA9PT0gJ251bWJlcicgPyBlIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGlzTWl4ZWQocjE6IFJlY3QsIHIyOiBSZWN0KTogYm9vbGVhbiB7XG4gICAgICAgICAgICB2YXIgaXNtaXhlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKChyMS5sZWZ0ICsgcjEucmlnaHQpIC8gMiAtIChyMi5sZWZ0ICsgcjIucmlnaHQpIC8gMilcbiAgICAgICAgICAgICAgICA8ICgocjEucmlnaHQgKyByMi5yaWdodCAtIHIxLmxlZnQgLSByMi5sZWZ0KSAvIDIpICYmIE1hdGguYWJzKChyMS50b3AgKyByMS5ib3R0b20pIC8gMlxuICAgICAgICAgICAgICAgICAgICAtIChyMi50b3AgKyByMi5ib3R0b20pIC8gMikgPCAoKHIxLmJvdHRvbSArIHIyLmJvdHRvbSAtIHIxLnRvcCAtIHIyLnRvcCkgLyAyKSkge1xuICAgICAgICAgICAgICAgIGlzbWl4ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzbWl4ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgY29udGFpbnNSZWN0KHIxOiBSZWN0LCByMjogUmVjdCk6IGJvb2xlYW4ge1xuICAgICAgICAgICAgbGV0IGZsZzogYm9vbGVhbiA9IHIxLmxlZnQgPD0gcjIubGVmdCAmJlxuICAgICAgICAgICAgICAgIHIxLnRvcCA8PSByMi50b3AgJiZcbiAgICAgICAgICAgICAgICByMS5yaWdodCA+PSByMi5yaWdodCAmJlxuICAgICAgICAgICAgICAgIHIxLmJvdHRvbSA+PSByMi5ib3R0b207XG4gICAgICAgICAgICByZXR1cm4gZmxnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IGZsZzE6Ym9vbGVhbiA9IHIxLmxlZnQgPD1yMi5sZWZ0ICYmXG4gICAgICAgIC8vIHIxLnRvcCA8PSByMi50b3AgJiZcbiAgICAgICAgLy8gcjEucmlnaHQgPj1yMi5yaWdodCAmJlxuICAgICAgICAvLyByMS5ib3R0b20gPj0gcjIuYm90dG9tO1xuXG4gICAgfVxufVxuIiwibmFtZXNwYWNlIGFuZHJvaWQuZGV2aWNlIHtcbiAgICBleHBvcnQgY2xhc3MgRGV2aWNlIHtcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2RlbnNpdHk6IG51bWJlciA9IDA7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIF93aWR0aDogbnVtYmVyID0gMDtcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2hlaWdodDogbnVtYmVyID0gMDtcbiAgICAgICAgXG4gICAgICAgIHN0YXRpYyBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgRGV2aWNlLl93aWR0aCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzdGF0aWMgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBEZXZpY2UuX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiAzNDA7XG4gICAgICAgICAgICBpZiAoRGV2aWNlLl93aWR0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgRGV2aWNlLl93aWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA+IDApID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLl93aWR0aCA7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiA2MjA7XG4gICAgICAgICAgICBpZiAoRGV2aWNlLl9oZWlnaHQgPT0gMCkge1xuICAgICAgICAgICAgICAgIERldmljZS5faGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCA+IDApID9cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuX2hlaWdodCA7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0IGRlbnNpdHkoKSB7XG4gICAgICAgICAgICBpZiAoRGV2aWNlLl9kZW5zaXR5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgRGV2aWNlLl9kZW5zaXR5ID0gTWF0aC5zcXJ0KERldmljZS53aWR0aCAqIERldmljZS53aWR0aCArIERldmljZS5oZWlnaHQgKiBEZXZpY2UuaGVpZ2h0KSAvIDE2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiBEZXZpY2UuX2RlbnNpdHk7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIm5hbWVzcGFjZSBhbmRyb2lkLnV0aWx7XG4gICAgIGV4cG9ydCBjbGFzcyBMb2d7XG4gICAgICAgICBzdGF0aWMgZChtZXNzYWdlOnN0cmluZyx0YWc/OnN0cmluZyl7XG4gICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgICB9XG4gICAgICAgICBzdGF0aWMgdyhtZXNzYWdlOnN0cmluZyx0YWc/OnN0cmluZyl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgICB9XG4gICAgICAgICBzdGF0aWMgZShtZXNzYWdlOnN0cmluZyx0YWc/OnN0cmluZyl7XG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgIH1cbiAgICAgfSAgIFxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ncmFwaGljcy9VdGlsLnRzXCIgLz5cblxubmFtZXNwYWNlIGFuZHJvaWQuZGV2aWNle1xuICAgIGltcG9ydCBGb250ID0gYW5kcm9pZC5ncmFwaGljcy5Gb250O1xuICAgIGltcG9ydCBTdHJva2VTdHlsZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU3Ryb2tlU3R5bGU7XG4gICAgaW1wb3J0IFN0eWxlID0gYW5kcm9pZC5ncmFwaGljcy5TdHlsZTtcbiAgICBleHBvcnQgY2xhc3MgRGVmYXVsdHtcbiAgICAgICAgc3RhdGljIGdldCBmb250KCl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvbnQoMTAsXCJcIixcIndoaXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBnZXQgc3Ryb2tlc3R5bGUoKXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3Ryb2tlU3R5bGUoMSwnYmxhY2snKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZ2V0IHN0eWxlKCl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0eWxlKCdncmF5JyxEZWZhdWx0LnN0cm9rZXN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiUG9pbnQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlV0aWwudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2RldmljZS9EZXZpY2UudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWwvTG9nLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9kZXZpY2UvRGVmYXVsdC50c1wiIC8+XG5cblxubmFtZXNwYWNlIGFuZHJvaWQuZ3JhcGhpY3Mge1xuICAgIGltcG9ydCBSZWN0ID0gYW5kcm9pZC5ncmFwaGljcy5SZWN0O1xuICAgIGltcG9ydCBQb2ludCA9IGFuZHJvaWQuZ3JhcGhpY3MuUG9pbnQ7XG4gICAgaW1wb3J0IEZvbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkZvbnQ7XG4gICAgaW1wb3J0IFNpemUgPSBhbmRyb2lkLmdyYXBoaWNzLlNpemU7XG4gICAgaW1wb3J0IERldmljZSA9IGFuZHJvaWQuZGV2aWNlLkRldmljZTtcbiAgICBpbXBvcnQgRGVmYXVsdCA9IGFuZHJvaWQuZGV2aWNlLkRlZmF1bHQ7XG4gICAgaW1wb3J0IExvZyA9IGFuZHJvaWQudXRpbC5Mb2c7XG4gICAgaW1wb3J0IEZpbGxTdHlsZSA9IGFuZHJvaWQuZ3JhcGhpY3MuRmlsbFN0eWxlO1xuICAgIGltcG9ydCBHcmFkaWVudCA9IGFuZHJvaWQuZ3JhcGhpY3MuR3JhZGllbnQ7XG4gICAgaW1wb3J0IExpbmVhckdyYWRpZW50ID0gYW5kcm9pZC5ncmFwaGljcy5MaW5lYXJHcmFkaWVudDtcbiAgICBpbXBvcnQgUmFkaWFsR3JhZGllbnQgPSBhbmRyb2lkLmdyYXBoaWNzLlJhZGlhbEdyYWRpZW50O1xuICAgIGV4cG9ydCBlbnVtIFJlbmRlclR5cGUge1xuICAgICAgICBDYW52YXMsXG4gICAgICAgIFN2Z1xuICAgIH1cbiAgICBjbGFzcyBDYW52YXNTdGF0ZSB7XG4gICAgICAgIHhPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgICAgIHlPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgICAgIHRoaXMueE9mZnNldCA9IHg7XG4gICAgICAgICAgICB0aGlzLnlPZmZzZXQgPSB5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRmxvb3IgPSB2YWx1ZSA9PiBNYXRoLmZsb29yKDEwMDAgKiB2YWx1ZSkgLyAxMDAwO1xuICAgIGV4cG9ydCBjbGFzcyBDYW52YXMge1xuICAgICAgICBwcml2YXRlIF9yZW5kZXI6IENhbnZhc1JlbmRlckVuZ2luZXxTdmdSZW5kZXJFbmdpbmU7XG4gICAgICAgIHByaXZhdGUgX3JlbmRlclR5cGU6IFJlbmRlclR5cGU7XG4gICAgICAgIHByaXZhdGUgX2hvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICAgICAgcHJpdmF0ZSB4T2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgICAgICBwcml2YXRlIHlPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgICAgIHByaXZhdGUgc2F2ZVN0YXRlczogQ2FudmFzU3RhdGVbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBSZW5kZXJUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9ob3N0RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBSZW5kZXJUeXBlLkNhbnZhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlciA9IG5ldyBDYW52YXNSZW5kZXJFbmdpbmUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IERldmljZS53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBEZXZpY2UuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlci5zZXRWaWV3cG9ydFNpemUoRGV2aWNlLndpZHRoLCBEZXZpY2UuaGVpZ2h0KTs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFJlbmRlclR5cGUuU3ZnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyID0gbmV3IFN2Z1JlbmRlckVuZ2luZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gRGV2aWNlLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IERldmljZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLnNldFZpZXdwb3J0U2l6ZShEZXZpY2Uud2lkdGgsIERldmljZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJSZWN0KGxlZnQ6bnVtYmVyLHRvcDpudW1iZXIsd2lkdGg6bnVtYmVyLGhlaWdodDpudW1iZXIpOnZvaWR7XG5cbiAgICAgICAgfVxuICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgbGV0IHN0YXRlID0gbmV3IENhbnZhc1N0YXRlKHRoaXMueE9mZnNldCwgdGhpcy55T2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlci5zYXZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGlwKHJlY3Q6IFJlY3QpIHtcbiAgICAgICAgICAgIHZhciByID0gcmVjdC5jbG9uZSgpO1xuICAgICAgICAgICAgci50cmFuc2xhdGUodGhpcy54T2Zmc2V0LCB0aGlzLnlPZmZzZXQpO1xuICAgICAgICAgICAgaWYodGhpcy5fcmVuZGVyIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyRW5naW5lKXtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuY2xpcChyZWN0KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlci5jbGlwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgcmVzdG9yZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlcy5wb3AoKTtcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc2F2ZVN0YXRlc1t0aGlzLnNhdmVTdGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhPZmZzZXQgPSBzdGF0ZS54T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHRoaXMueU9mZnNldCA9IHN0YXRlLnlPZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueE9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy55T2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuX3JlbmRlciBpbnN0YW5jZW9mIENhbnZhc1JlbmRlckVuZ2luZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldFZpZXdwb3J0U2l6ZSh3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyLnNldFZpZXdwb3J0U2l6ZSh3LCBoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lYXN1cmVTdHJpbmcoc3RyOiBzdHJpbmcsIGZvbnQ6IEZvbnQsIG1heFNpemU/OiBudW1iZXIpOiBTaXplIHtcbiAgICAgICAgICAgIGlmICghZm9udCkge1xuICAgICAgICAgICAgICAgIGZvbnQgPSBEZWZhdWx0LmZvbnQuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmID0gZm9udC5jbG9uZSgpO1xuICAgICAgICAgICAgZi5mb250U2l6ZSAqPSBEZXZpY2UuZGVuc2l0eTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIubWVhc3VyZVN0cmluZyhzdHIsIGYpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVhc3VyZVN0cmluZ1dpdGhXaWR0aChzdHI6IHN0cmluZywgZm9udDogRm9udCkge1xuXG4gICAgICAgIH1cblxuICAgICAgICBkcmF3VGV4dChzdHI6IHN0cmluZywgcHQ6IFBvaW50LCBmOiBGb250LCBjZW50ZXI/OiBQb2ludCwgYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghZikge1xuICAgICAgICAgICAgICAgIGYgPSBEZWZhdWx0LmZvbnQuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5tZWFzdXJlU3RyaW5nKHN0ciwgZik7XG4gICAgICAgICAgICB2YXIgZm9udDogRm9udCA9IGYuY2xvbmUoKTtcbiAgICAgICAgICAgIGZvbnQuZm9udFNpemUgKj0gRGV2aWNlLmRlbnNpdHk7XG4gICAgICAgICAgICBsZXQgc3RhcnRwdDogUG9pbnQgPSBuZXcgUG9pbnQocHQueCwgcHQueSArIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIGxldCB0cHQgPSBwdC5jbG9uZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlbmRlciBpbnN0YW5jZW9mIENhbnZhc1JlbmRlckVuZ2luZSkge1xuICAgICAgICAgICAgICAgIGlmIChhbmdsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlci5kcmF3U3RyaW5nUm90YXRlZChzdHIsIHN0YXJ0cHQsIGNlbnRlciwgYW5nbGUsIGZvbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlci5kcmF3U3RyaW5nKHN0ciwgc3RhcnRwdCwgZm9udCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3JlbmRlciBpbnN0YW5jZW9mIFN2Z1JlbmRlckVuZ2luZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0cHQub2Zmc2V0KHRoaXMueE9mZnNldCwgdGhpcy55T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoYW5nbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuZHJhd1N0cmluZ1JvdGF0ZWQoc3RyLCBzdGFydHB0LCBjZW50ZXIsIGFuZ2xlLCBudWxsLCB7ICdmb250LXNpemUnOiBmb250LmZvbnRTaXplLCAnZm9udC1mYW1pbHknOiBmb250LmZvbnRGYW1pbHkgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLmRyYXdTdHJpbmcoc3RyLCBzdGFydHB0LCBudWxsLCB7ICdmb250LXNpemUnOiBmb250LmZvbnRTaXplLCAnZm9udC1mYW1pbHknOiBmb250LmZvbnRGYW1pbHkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1Bvc1RleHQodGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcltdLCBmb250OiBGb250KSB7XG4gICAgICAgICAgICBpZiAodGV4dC5sZW5ndGggKiAyID4gcG9zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IFwiSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb250KSB7XG4gICAgICAgICAgICAgICAgZm9udCA9IERlZmF1bHQuZm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXJUeXBlID09PSBSZW5kZXJUeXBlLkNhbnZhcykge1xuICAgICAgICAgICAgICAgIGxldCBwdDogUG9pbnQgPSBuZXcgUG9pbnQoMCwgMCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHQuc2V0KHBvc1tpXSwgcG9zW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX3JlbmRlci5kcmF3U3RyaW5nKHRleHRbaV0scHQsZm9udCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1RleHQodGV4dFtpIC8gMl0sIHB0LCBmb250KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIGRyYXdQb3NUZXh0IFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdMaW5lKHB0MTogUG9pbnQsIHB0MjogUG9pbnQsIHN0cm9rZXN0eWxlOiBTdHJva2VTdHlsZSkge1xuICAgICAgICAgICAgdmFyIHN0cm9rZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBzdHJva2UgPSBzdHJva2VzdHlsZS5jbG9uZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJva2UgPSBEZWZhdWx0LnN0cm9rZXN0eWxlLmNsb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnRwb2ludCA9IHB0MS5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIGVuZHBvaW50ID0gcHQyLmNsb25lKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXJUeXBlID09PSBSZW5kZXJUeXBlLkNhbnZhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlci5kcmF3TGluZShzdGFydHBvaW50LngsIHN0YXJ0cG9pbnQueSwgZW5kcG9pbnQueCwgZW5kcG9pbnQueSwgc3Ryb2tlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRwb2ludC5vZmZzZXQodGhpcy54T2Zmc2V0LCB0aGlzLnlPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGVuZHBvaW50Lm9mZnNldCh0aGlzLnhPZmZzZXQsIHRoaXMueU9mZnNldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLmRyYXdMaW5lKHN0YXJ0cG9pbnQueCwgc3RhcnRwb2ludC55LCBlbmRwb2ludC54LCBlbmRwb2ludC55LCBzdHJva2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0xpbmVzKHhzOiBudW1iZXJbXSwgeXM6IG51bWJlcltdLCBzdHJva2VzdHlsZTogU3Ryb2tlU3R5bGUpIHtcbiAgICAgICAgICAgIC8vIGRyYXdMaW5lcyh4czogbnVtYmVyW10sIHlzOiBudW1iZXJbXSwgc3Ryb2tlc3R5bGU6IFN0cm9rZVN0eWxlKSB7XG4gICAgICAgICAgICB2YXIgc3Ryb2tlID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzdHJva2VzdHlsZSkge1xuICAgICAgICAgICAgICAgIHN0cm9rZSA9IHN0cm9rZXN0eWxlLmNsb25lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cm9rZSA9IERlZmF1bHQuc3Ryb2tlc3R5bGUuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJFbmdpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuZHJhd0xpbmVzKHhzLCB5cywgc3Ryb2tlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBTdmdSZW5kZXJFbmdpbmUpe1xuICAgICAgICAgICAgICAgIHN0cm9rZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIHRoaXMueE9mZnNldCArIFwiLFwiICsgdGhpcy55T2Zmc2V0ICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLmRyYXdMaW5lcyh4cywgeXMsIG51bGwsIHN0cm9rZS5nZXRDc3NTdHlsZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmF3UmVjdChwdDE6IFBvaW50LCBwdDI6IFBvaW50LCBmaWxsOiBib29sZWFuLCBzdHlsZTpTdHlsZSwpIHtcbiAgICAgICAgICAgIHZhciBzdGFydHBvaW50ID0gcHQxLmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgZW5kcG9pbnQgPSBwdDIuY2xvbmUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlbmRlciBpbnN0YW5jZW9mIENhbnZhc1JlbmRlckVuZ2luZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlci5kcmF3UmVjdChzdGFydHBvaW50LngsIHN0YXJ0cG9pbnQueSwgZW5kcG9pbnQueCAtIHN0YXJ0cG9pbnQueCwgZW5kcG9pbnQueSAtIHN0YXJ0cG9pbnQueSwgc3R5bGUsIGZpbGwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3JlbmRlciBpbnN0YW5jZW9mIFN2Z1JlbmRlckVuZ2luZSl7XG4gICAgICAgICAgICAgICAgc3RhcnRwb2ludC5vZmZzZXQodGhpcy54T2Zmc2V0LCB0aGlzLnlPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGVuZHBvaW50Lm9mZnNldCh0aGlzLnhPZmZzZXQsIHRoaXMueU9mZnNldCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLmRyYXdSZWN0KHN0YXJ0cG9pbnQueCwgc3RhcnRwb2ludC55LCBlbmRwb2ludC54IC0gc3RhcnRwb2ludC54LCBlbmRwb2ludC55IC0gc3RhcnRwb2ludC55LCBudWxsLCB7ICdmaWxsJzogdHlwZW9mKHN0eWxlLmJhY2tncm91bmQpPT0nc3RyaW5nJz9zdHlsZS5iYWNrZ3JvdW5kOm51bGwgfSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLmRyYXdSZWN0KHN0YXJ0cG9pbnQueCwgc3RhcnRwb2ludC55LCBlbmRwb2ludC54IC0gc3RhcnRwb2ludC54LCBlbmRwb2ludC55IC0gc3RhcnRwb2ludC55LCBudWxsLCB7ICdmaWxsJzogJ3RyYW5zcGFyZW50JywgJ3N0cm9rZSc6IHR5cGVvZihzdHlsZS5iYWNrZ3JvdW5kKT09J3N0cmluZyc/c3R5bGUuYmFja2dyb3VuZDpudWxsIH0sIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmF3QXJjKHJlY3Q6IFJlY3QsIHN0YXJ0QW5nbGU6IG51bWJlciwgc3dlZXBBbmdlbDogbnVtYmVyLCBzdHlsZTogU3R5bGUpIHtcbiAgICAgICAgICAgIHZhciBjeDogbnVtYmVyID0gKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpIC8gMiArIHJlY3QubGVmdCArIHRoaXMueE9mZnNldDtcbiAgICAgICAgICAgIHZhciBjeTogbnVtYmVyID0gKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApIC8gMiArIHJlY3QudG9wICsgdGhpcy55T2Zmc2V0O1xuICAgICAgICAgICAgdmFyIHI6IG51bWJlciA9IChyZWN0LndpZHRoIDwgcmVjdC5oZWlnaHQgPyByZWN0LndpZHRoIDogcmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBTdmdSZW5kZXJFbmdpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuZHJhd1BpZShjeCwgY3ksIHIsIEZsb29yKHN0YXJ0QW5nbGUpLCBGbG9vcihzd2VlcEFuZ2VsKSwgbnVsbCwgeyAnZmlsbCc6IHR5cGVvZihzdHlsZS5iYWNrZ3JvdW5kKSA9PSdzdHJpbmcnID9zdHlsZS5iYWNrZ3JvdW5kOm51bGwgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5fcmVuZGVyIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyRW5naW5lKXtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuZHJhd1BpZShjeCwgY3ksIHIsIEZsb29yKHN0YXJ0QW5nbGUpLCBGbG9vcihzd2VlcEFuZ2VsKSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBkcmF3RG9udXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGlubmVyUmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgc3dlZXBBbmdsZTogbnVtYmVyLCBzdHlsZTpTdHlsZSkge1xuICAgICAgICAgICAgdmFyIF9jeDogbnVtYmVyID0gY3ggKyB0aGlzLnhPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgX2N5OiBudW1iZXIgPSBjeSArIHRoaXMueU9mZnNldDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBTdmdSZW5kZXJFbmdpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuZHJhd0RvbnV0KF9jeCwgX2N5LCByYWRpdXMsIGlubmVyUmFkaXVzLCBGbG9vcihzdGFydEFuZ2xlKSwgRmxvb3Ioc3dlZXBBbmdsZSksIG51bGwsIHsgJ2ZpbGwnOnR5cGVvZihzdHlsZS5iYWNrZ3JvdW5kKSA9PSdzdHJpbmcnID9zdHlsZS5iYWNrZ3JvdW5kOm51bGwgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5fcmVuZGVyIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyRW5naW5lKXtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuZHJhd0RvbnV0KF9jeCwgX2N5LCByYWRpdXMsIGlubmVyUmFkaXVzLCAoc3RhcnRBbmdsZSksIChzd2VlcEFuZ2xlKSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZHJhd092YWwocmVjdDogUmVjdCwgY29sb3I6IHN0cmluZykge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBwdWJsaWMgYWxwaGEgOm51bWJlciA9MDtcbiAgICAgICAgcHVibGljIHNldCBhbHBoYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXIuYWxwaGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkcmF3UG9seWdvbih4czogbnVtYmVyW10sIHlzOiBudW1iZXJbXSwgc3R5bGU6U3R5bGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBTdmdSZW5kZXJFbmdpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuZHJhd1BvbHlnb24oeHMsIHlzLCBudWxsLCB7ICdmaWxsJzogdHlwZW9mKHN0eWxlLmJhY2tncm91bmQpID09J3N0cmluZyc/c3R5bGUuYmFja2dyb3VuZDpudWxsIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3JlbmRlciBpbnN0YW5jZW9mIENhbnZhc1JlbmRlckVuZ2luZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLmRyYXdQb2x5Z29uKHhzLCB5cywgc3R5bGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBkcmF3SW1hZ2UoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9yZW5kZXIuZHJhd0ltYWdlKHgsIHksIHcsIGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0Q2FjaGUoc3g6IG51bWJlciwgc3k6IG51bWJlciwgc3c6IG51bWJlciwgc2g6IG51bWJlcik6IEltYWdlRGF0YSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5fcmVuZGVyLmdldEltYWdlRGF0YShzeCwgc3ksIHN3LCBzaCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldENhY2hlKGltYWdlZGF0YTogSW1hZ2VEYXRhLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCBkaXJ0eVg/OiBudW1iZXIsIGRpcnR5WT86IG51bWJlciwgZGlydHlXaWR0aD86IG51bWJlciwgZGlydHlIZWlnaHQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlbmRlci5wdXRJbWFnZURhdGEoaW1hZ2VkYXRhLCBkeCwgZHksIGRpcnR5WCwgZGlydHlZLCBkaXJ0eVdpZHRoLCBkaXJ0eUhlaWdodCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGJlZ2luKCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyLmJlZ2luUmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXIuZW5kUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgbW92ZVRvKHg6bnVtYmVyLHk6bnVtYmVyKXtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJFbmdpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIubW92ZVRvKHgseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZShzeDogbnVtYmVyLCBzeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbnZhc1NjYWxlIFwiICsgc3grXCIgLCBcIiArIHN5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJFbmdpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIuc2NhbGUoc3gsc3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvdGF0ZShkZWdyZWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlbmRlciBpbnN0YW5jZW9mIENhbnZhc1JlbmRlckVuZ2luZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlci5yb3RhdGUoZGVncmVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy54T2Zmc2V0ID0geDtcbiAgICAgICAgICAgIHRoaXMueU9mZnNldCA9IHk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcmVuZGVyIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyRW5naW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdldCBjYW52YXMoKTpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR7XG4gICAgICAgICAgICBpZih0aGlzLl9yZW5kZXIgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJFbmdpbmUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIuY2FudmFzO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxufVxuIiwibmFtZXNwYWNlIGFuZHJvaWQuYXBwe1xuICAgIGV4cG9ydCBjbGFzcyBDb250ZXh0e1xuICAgICAgICBcbiAgICB9XG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2dyYXBoaWNzL3V0aWwudHNcIiAvPlxuXG5uYW1lc3BhY2UgYW5kcm9pZC52aWV3IHtcbiAgICBpbXBvcnQgUGFkZGluZyA9IGFuZHJvaWQuZ3JhcGhpY3MuUGFkZGluZztcbiAgICBpbXBvcnQgQWxpZ24gPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduO1xuICAgIGltcG9ydCBBbGlnbkVsbWVudCA9IGFuZHJvaWQuZ3JhcGhpY3MuQWxpZ25FbG1lbnQ7XG4gICAgaW1wb3J0IFNpemUgPSBhbmRyb2lkLmdyYXBoaWNzLlNpemU7XG4gICAgaW1wb3J0IENhbnZhcyA9IGFuZHJvaWQuZ3JhcGhpY3MuQ2FudmFzO1xuICAgIGltcG9ydCBHcmF2aXR5ID0gYW5kcm9pZC5ncmFwaGljcy5HcmF2aXR5O1xuICAgIGltcG9ydCBTdHlsZT0gYW5kcm9pZC5ncmFwaGljcy5TdHlsZTtcblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVZpZXcge1xuICAgICAgICBvbk1lYXN1cmUod2lkdGg6IE1lYXN1cmVTcGVjLCBoZWlnaHQ6IE1lYXN1cmVTcGVjLCBjYW52YXM6IENhbnZhcyk6IFNpemU7XG4gICAgICAgIG9uTGF5b3V0KGw6IG51bWJlciwgdDogbnVtYmVyLCByOiBudW1iZXIsIGI6IG51bWJlcixjYW52YXM6Q2FudmFzKTogdm9pZDtcbiAgICAgICAgb25EcmF3KGNhbnZhczogQ2FudmFzKTogdm9pZDtcbiAgICAgICAgaW52YWxpZGF0ZShmbGc6Ym9vbGVhbik6IHZvaWQ7XG4gICAgICAgIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBsZWZ0OiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHRvcDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSByaWdodDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBib3R0b206IG51bWJlcjtcbiAgICAgICAgZ3Jhdml0eTogR3Jhdml0eTtcbiAgICAgICAgbGF5b3V0UGFyYW1zOiBMYXlvdXRQYXJhbXNcbiAgICAgICAgYmFja2dyb3VuZDogU3R5bGU7XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ncmFwaGljcy91dGlsLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJVmlldy50c1wiIC8+XG5cbm5hbWVzcGFjZSBhbmRyb2lkLnZpZXcge1xuICAgIGltcG9ydCBQYWRkaW5nID0gYW5kcm9pZC5ncmFwaGljcy5QYWRkaW5nO1xuICAgIGltcG9ydCBBbGlnbiA9IGFuZHJvaWQuZ3JhcGhpY3MuQWxpZ247XG4gICAgaW1wb3J0IEFsaWduRWxtZW50ID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbkVsbWVudDtcbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgQ2FudmFzID0gYW5kcm9pZC5ncmFwaGljcy5DYW52YXM7XG4gICAgaW1wb3J0IFJlY3QgPSBhbmRyb2lkLmdyYXBoaWNzLlJlY3Q7XG4gICAgZXhwb3J0IGludGVyZmFjZSBJVmlld0dyb3VwIGV4dGVuZHMgSVZpZXcge1xuICAgICAgICBkaXNwYXRjaERyYXcoY2FudmFzOiBDYW52YXMpOiB2b2lkO1xuICAgICAgICBhZGRWaWV3KFZpZXc6IFZpZXcsIGluZGV4OiBudW1iZXIpOiBudW1iZXI7XG4gICAgICAgIGludmFsaWRhdGVDaGlsZChjaGlsZDogVmlldywgZGlydHk6IFJlY3QpOiB2b2lkO1xuXG4gICAgfVxufSIsIm5hbWVzcGFjZSBhbmRyb2lkLmdyYXBoaWNzIHtcbiAgICBleHBvcnQgY2xhc3MgU2l6ZSB7XG4gICAgICAgIHdpZHRoOiBudW1iZXI7XG4gICAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3Rvcih3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgICAgIH1cbiAgICAgICAgY2xvbmUoKTogU2l6ZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBoYXNoQ29kZSgpOm51bWJlcntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoKiAzNzIxMyArIHRoaXMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufSIsIm5hbWVzcGFjZSBhbmRyb2lkLmdyYXBoaWNzIHtcblxuICAgIGV4cG9ydCBjbGFzcyBNYXJnaW4ge1xuICAgICAgICBtYXJnaW5MZWZ0OiBudW1iZXI7XG4gICAgICAgIG1hcmdpblJpZ2h0OiBudW1iZXI7XG4gICAgICAgIG1hcmdpblRvcDogbnVtYmVyO1xuICAgICAgICBtYXJnaW5Cb3R0b206IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IobWFyZ2luTGVmdDogbnVtYmVyLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IG51bWJlcixcbiAgICAgICAgICAgIG1hcmdpblRvcDogbnVtYmVyLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XG4gICAgICAgICAgICB0aGlzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luUmlnaHQgPSBtYXJnaW5SaWdodDtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tXG4gICAgICAgIH1cbiAgICAgICAgZ2V0U3RhcnRYTWFyZ2luKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWFyZ2luUmlnaHQgPiAwICYmICF0aGlzLm1hcmdpbkxlZnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLXRoaXMubWFyZ2luUmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXJnaW5MZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGdldFN0YXJ0WU1hcmdpbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmdpbkJvdHRvbSA+IDAgJiYgIXRoaXMubWFyZ2luVG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC10aGlzLm1hcmdpbkJvdHRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcmdpblRvcDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlBvaW50LnRzXCIgLz5cblxubmFtZXNwYWNlIGFuZHJvaWQuZ3JhcGhpY3Mge1xuXG4gICAgaW1wb3J0IFBvaW50ID0gYW5kcm9pZC5ncmFwaGljcy5Qb2ludDtcbiAgICBleHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgICAgIGxlZnQ6IG51bWJlcjtcbiAgICAgICAgdG9wOiBudW1iZXI7XG4gICAgICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgICAgIGJvdHRvbTogbnVtYmVyO1xuICAgICAgICBwcml2YXRlIF9zdGFydHBvaW50OiBQb2ludDtcbiAgICAgICAgcHJpdmF0ZSBfZW5kcG9pbnQ6IFBvaW50O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICAgICAgdGhpcy50b3AgPSB0b3A7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICByZXNldChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gdG9wO1xuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICAgICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgY29ycmVjdCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnQgPiB0aGlzLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGw6IG51bWJlciA9IHRoaXMubGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudG9wID4gdGhpcy5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5ib3R0b207XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b20gPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCArPSB4O1xuICAgICAgICAgICAgdGhpcy5yaWdodCArPSB4O1xuICAgICAgICAgICAgdGhpcy50b3AgKz0geTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tICs9IHk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWCh4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHgsIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVkoeTogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSgwLCB5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBzY2FsZShyOiBudW1iZXIpIHtcbiAgICAgICAgICAgIC8vIGlmIChyIDwgMSAmJiByID4gMCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciB3ID0gdGhpcy5yaWdodCAtIHRoaXMubGVmdDtcbiAgICAgICAgICAgIC8vICAgICB2YXIgaCA9IHRoaXMuYm90dG9tIC0gdGhpcy50b3A7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5sZWZ0ICs9IHIgKiB3IC8gMjtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvcCArPSByICogaCAvIDI7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yaWdodCAtPSByICogdyAvIDI7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ib3R0b20gLT0gciAqIGggLyAyO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxlZnQgKz0gcjtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvcCArPSByO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMucmlnaHQgLT0gcjtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmJvdHRvbSAtPSByO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYociA+IDApe1xuICAgICAgICAgICAgICAgIGxldCBkdzpudW1iZXIgPSB0aGlzLndpZHRoICpyLXRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGRoOm51bWJlciA9IHRoaXMuaGVpZ2h0ICogciAtIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCAtPSBkdy8yO1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgKz0gZHcvMjtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcCAtPSBkaC8yO1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tICs9IGRoLzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGdldCBpc05pbCgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5yaWdodCAtIHRoaXMubGVmdCA8PSAwLjAxKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wIDw9IDAuMDEpO1xuICAgICAgICB9XG4gICAgICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gKCh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuICgodGhpcy5yaWdodCAtIHRoaXMubGVmdCkpO1xuICAgICAgICB9XG4gICAgICAgIHNldCB3aWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgd2lkdGg7XG5cbiAgICAgICAgfVxuICAgICAgICBzZXQgaGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgaGVpZ2h0O1xuXG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHN0YXJ0UG9pbnQoKTogUG9pbnQge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9zdGFydHBvaW50KSB7IHRoaXMuX3N0YXJ0cG9pbnQgPSBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7IH1cbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0cG9pbnQueCA9IHRoaXMubGVmdDtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0cG9pbnQueSA9IHRoaXMudG9wO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0cG9pbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGVuZFBvaW50KCk6IFBvaW50IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZW5kcG9pbnQpIHsgdGhpcy5fZW5kcG9pbnQgPSBuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pOyB9XG4gICAgICAgICAgICB0aGlzLl9lbmRwb2ludC54ID0gdGhpcy5yaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2VuZHBvaW50LnkgPSB0aGlzLmJvdHRvbTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbmRwb2ludDtcbiAgICAgICAgfVxuICAgICAgICBjb250YWlucyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKHggPD0gdGhpcy5yaWdodCAmJiB4ID49IHRoaXMubGVmdCAmJiB5IDw9IHRoaXMuYm90dG9tICYmIHkgPj0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjbG9uZSgpOiBSZWN0IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVjdCh0aGlzLmxlZnQsIHRoaXMudG9wLCB0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZXF1YWwocmVjdDpSZWN0KTpib29sZWFue1xuICAgICAgICAgICAgaWYocmVjdCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdC5sZWZ0ID09PSB0aGlzLmxlZnQgJiYgcmVjdC50b3AgPT09IHRoaXMudG9wICYmIHJlY3QuYm90dG9tID09PSB0aGlzLmJvdHRvbSAmJiByZWN0LnJpZ2h0ID09PSB0aGlzLnJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRvU3RyaW5nKCk6c3RyaW5ne1xuICAgICAgICAgICAgcmV0dXJuIFwiPCBsZWZ0OlwiK3RoaXMubGVmdCtcIiAsdG9wOlwiK3RoaXMudG9wK1wiICwgd2lkdGg6XCIrdGhpcy53aWR0aCtcIiAsaGVpZ2h0OlwiK3RoaXMuaGVpZ2h0K1wiID5cIjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2dyYXBoaWNzL01hcmdpbnMudHNcIiAvPlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZ3JhcGhpY3MvUmVjdC50c1wiIC8+XG5cbm5hbWVzcGFjZSBhbmRyb2lkLnZpZXcge1xuXG4gICAgaW1wb3J0IFJlY3QgPSBhbmRyb2lkLmdyYXBoaWNzLlJlY3Q7XG4gICAgaW1wb3J0IFBhZGRpbmcgPSBhbmRyb2lkLmdyYXBoaWNzLlBhZGRpbmc7XG4gICAgaW1wb3J0IE1hcmdpbiA9IGFuZHJvaWQuZ3JhcGhpY3MuTWFyZ2luO1xuICAgIGltcG9ydCBVdGlsID0gYW5kcm9pZC5ncmFwaGljcy5VdGlsO1xuICAgIC8qKipcbiAgICAgKiDmoLnmja5tZWFzdXJlIOiuoeeul+WHuueahOe7k+aenFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBMYXlvdXRJbmZvIHtcbiAgICAgICAgaW5uZXJyZWN0OiBSZWN0O1xuICAgICAgICBvdXR0ZXJyZWN0OiBSZWN0O1xuICAgICAgICBkcmF3aW5kZXg6IG51bWJlcjsvL3JlbmRlciBvcmRlciBpbiB2aWV3Z3JvdXBcbiAgICAgICAgcGFkZGluZzpQYWRkaW5nO1xuICAgICAgICBjb25zdHJ1Y3RvcihsOiBudW1iZXIsIHQ6IG51bWJlciwgcjogbnVtYmVyLCBiOiBudW1iZXIsIHBhZGRpbmc6IFBhZGRpbmcsIGRyYXdpbmRleD86IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5vdXR0ZXJyZWN0ID0gbmV3IFJlY3QobCwgdCwgciwgYik7XG4gICAgICAgICAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgdGhpcy5pbm5lcnJlY3QgPSBuZXcgUmVjdCh0aGlzLm91dHRlcnJlY3QubGVmdCArIHBhZGRpbmcubGVmdFBhZGRpbmcsXG4gICAgICAgICAgICAgICAgdGhpcy5vdXR0ZXJyZWN0LnRvcCArIHBhZGRpbmcudG9wUGFkZGluZyxcbiAgICAgICAgICAgICAgICB0aGlzLm91dHRlcnJlY3QucmlnaHQgLSBwYWRkaW5nLnJpZ2h0UGFkZGluZyxcbiAgICAgICAgICAgICAgICB0aGlzLm91dHRlcnJlY3QuYm90dG9tIC0gcGFkZGluZy5ib3R0b21QYWRkaW5nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoZHJhd2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5kZXggPSBkcmF3aW5kZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXNldChsOiBudW1iZXIsIHQ6IG51bWJlciwgcjogbnVtYmVyLCBiOiBudW1iZXIsIHBhZGRpbmc6IFBhZGRpbmcsIGRyYXdpbmRleD86IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5vdXR0ZXJyZWN0ID0gbmV3IFJlY3QobCwgdCwgciwgYik7XG4gICAgICAgICAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgdGhpcy5pbm5lcnJlY3QgPSBuZXcgUmVjdCh0aGlzLm91dHRlcnJlY3QubGVmdCArIHBhZGRpbmcubGVmdFBhZGRpbmcsXG4gICAgICAgICAgICAgICAgdGhpcy5vdXR0ZXJyZWN0LnRvcCArIHBhZGRpbmcudG9wUGFkZGluZyxcbiAgICAgICAgICAgICAgICB0aGlzLm91dHRlcnJlY3QucmlnaHQgLSBwYWRkaW5nLnJpZ2h0UGFkZGluZyxcbiAgICAgICAgICAgICAgICB0aGlzLm91dHRlcnJlY3QuYm90dG9tIC0gcGFkZGluZy5ib3R0b21QYWRkaW5nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoZHJhd2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5kZXggPSBkcmF3aW5kZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQoeDpudW1iZXIseTpudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5pbm5lcnJlY3QudHJhbnNsYXRlKHgseSk7XG4gICAgICAgICAgICB0aGlzLm91dHRlcnJlY3QudHJhbnNsYXRlKHgseSk7XG4gICAgICAgIH1cbiAgICAgICAgY2xvbmUoKXtcbiAgICAgICAgICAgIGxldCBpbmZvPSBuZXcgTGF5b3V0SW5mbygwLDAsMCwwLG5ldyBQYWRkaW5nKDApKTtcbiAgICAgICAgICAgIGluZm8uZHJhd2luZGV4ID10aGlzLmRyYXdpbmRleDtcbiAgICAgICAgICAgIGluZm8uaW5uZXJyZWN0ID0gdGhpcy5pbm5lcnJlY3QuY2xvbmUoKTtcbiAgICAgICAgICAgIGluZm8ub3V0dGVycmVjdCA9IHRoaXMub3V0dGVycmVjdC5jbG9uZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgIH1cbiAgICAgICAgZXF1YWwoaW5mbzpMYXlvdXRJbmZvKTpib29sZWFue1xuICAgICAgICAgICAgaWYoaW5mbyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5mby5kcmF3aW5kZXggPT09IHRoaXMuZHJhd2luZGV4ICYmIHRoaXMuaW5uZXJyZWN0LmVxdWFsKGluZm8uaW5uZXJyZWN0KSAmJiB0aGlzLm91dHRlcnJlY3QuZXF1YWwoaW5mby5vdXR0ZXJyZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKioqXG4gICAgICog6L6T5YWl55qE5Y+C5pWwXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIExheW91dFBhcmFtcyB7XG4gICAgICAgIF93aWR0aDogbnVtYmVyO1xuICAgICAgICBfaGVpZ2h0OiBudW1iZXI7XG4gICAgICAgIG1hcmdpbjogTWFyZ2luID0gbmV3IE1hcmdpbigwLCAwLCAwLCAwKTsvLyB7ICdtYXJnaW5MZWZ0JzogMCwgJ21hcmdpblJpZ2h0JzogMCwgJ21hcmdpblRvcCc6IDAsICdtYXJnaW5Cb3R0b20nOiAwIH07XG4gICAgICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtYXJnaW4/OiBNYXJnaW4pIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKG1hcmdpbikge1xuICAgICAgICAgICAgICAgIHRoaXMubWFyZ2luID0gbWFyZ2luO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldCB3aWR0aCh3OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdztcbiAgICAgICAgfVxuICAgICAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl93aWR0aCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldCB3aWR0aE1vZGUoKSB7XG4gICAgICAgICAgICB2YXIgbW9kZSA9IExheW91dFBhcmFtcy5FWEFDVExZO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl93aWR0aCkge1xuICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0UGFyYW1zLldSQVBfQ09OVEVOVDpcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9IExheW91dFBhcmFtcy5XUkFQX0NPTlRFTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVDpcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0UGFyYW1zLkVYQUNUTFk6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9IExheW91dFBhcmFtcy5FWEFDVExZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0IGhlaWdodE1vZGUoKSB7XG4gICAgICAgICAgICB2YXIgbW9kZSA9IExheW91dFBhcmFtcy5FWEFDVExZO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIExheW91dFBhcmFtcy5XUkFQX0NPTlRFTlQ6XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSBMYXlvdXRQYXJhbXMuV1JBUF9DT05URU5UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQ6XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSBMYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExheW91dFBhcmFtcy5FWEFDVExZOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSBMYXlvdXRQYXJhbXMuRVhBQ1RMWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldCBoZWlnaHQoaDogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBoO1xuICAgICAgICB9XG4gICAgICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIE1BVENIX1BBUkVOVDogbnVtYmVyID0gLTE7XG4gICAgICAgIHN0YXRpYyBXUkFQX0NPTlRFTlQ6IG51bWJlciA9IC0yO1xuICAgICAgICBzdGF0aWMgRVhBQ1RMWTogbnVtYmVyID0gLTM7XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBNZWFzdXJlU3BlYyB7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICAgIG1vZGU6IG51bWJlciA9IExheW91dFBhcmFtcy5FWEFDVExZO1xuICAgICAgICBjb25zdHJ1Y3Rvcih2PzogbnVtYmVyLCBtPzogbnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRNZWFzdXJlVmFsdWUoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVDpcbiAgICAgICAgICAgICAgICBjYXNlIExheW91dFBhcmFtcy5FWEFDVExZOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICBjYXNlIExheW91dFBhcmFtcy5XUkFQX0NPTlRFTlQ6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMYXlvdXRQYXJhbXMuV1JBUF9DT05URU5UO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwibmFtZXNwYWNlIGFuZHJvaWQudmlldy5ldmVudCB7XG4gICAgZXhwb3J0IGNsYXNzIE1vdGlvbkV2ZW50IHtcblxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQUNUSU9OX0RPV04gPSAwO1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFDVElPTl9VUCA9IDE7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQUNUSU9OX01PVkUgPSAyO1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFDVElPTl9DQU5DRUwgPSAzO1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFDVElPTl9PVVRTSURFID0gNDtcblxuICAgICAgICBwdWJsaWMgc3RhdGljIEFDVElPTl9NT1VTRV9ET1dOID01O1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFDVElPTl9NT1VTRV9NT1ZFID0gNjtcbiAgICAgICAgcHVibGljIHN0YXRpYyBBQ1RJT05fTU9VU0VfVVA9NztcbiAgICAgICAgcHVibGljIHN0YXRpYyBBQ1RJT05fTU9VU0VfT1ZFUj04O1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFDVElPTl9NT1VTRV9PVVQgPSA5O1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFDVElPTl9NT1VTRV9PTiA9MTE7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQUNUSU9OX0NMSUNLID0gMTA7XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBBQ1RJT05fU0NST0xMID0gMTE7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQUNUSU9OX01PVVNFX1dIRUVMID0gMTI7XG4gICAgICAgIFxuICAgICAgICBwcml2YXRlIF94OiBudW1iZXI7XG4gICAgICAgIHByaXZhdGUgX3k6IG51bWJlcjtcbiAgICAgICAgcHJpdmF0ZSBfZGVsdGFZOm51bWJlcjtcbiAgICAgICAgcHJpdmF0ZSBfZGVsdGFYOm51bWJlcjtcblxuICAgICAgICBwcml2YXRlIF9hY3Rpb246IG51bWJlcjtcbiAgICAgICAgXG4gICAgICAgIHB1YmxpYyBzY3JlZW5YOm51bWJlcjtcbiAgICAgICAgcHVibGljIHNjcmVlblk6bnVtYmVyO1xuICAgICAgICBcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6SFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgZ2V0IHgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICAgICAgfVxuICAgICAgICBzZXQgeCh2Om51bWJlcil7XG4gICAgICAgICAgICB0aGlzLl94ID0gdjtcbiAgICAgICAgfVxuICAgICAgICBzZXQgeSh2Om51bWJlcil7XG4gICAgICAgICAgICB0aGlzLl95ID0gdjtcbiAgICAgICAgfVxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXQgZGVsdGFYKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlbHRhWDtcbiAgICAgICAgfVxuICAgICAgICBzZXQgZGVsdGFYKHY6bnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuX2RlbHRhWCA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgc2V0IGRlbHRhWSh2Om51bWJlcil7XG4gICAgICAgICAgICB0aGlzLl9kZWx0YVkgPSB2O1xuICAgICAgICB9XG4gICAgICAgIGdldCBkZWx0YVkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVsdGFZO1xuICAgICAgICB9XG4gICAgICAgIGdldCBhY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHNldCBhY3Rpb24odmFsdWU6bnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBjbG9uZSgpOk1vdGlvbkV2ZW50e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3Rpb25FdmVudCh0aGlzLl94LHRoaXMuX3ksdGhpcy5fYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3Rvcih4Om51bWJlciwgeTpudW1iZXIsIGFjdGlvbjpudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgICAgICB0aGlzLnNjcmVlblggPSB4O1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5ZID0geTtcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9mZnNldCh4Om51bWJlcix5Om51bWJlcik6dm9pZHtcbiAgICAgICAgICAgIHRoaXMuX3grPXg7XG4gICAgICAgICAgICB0aGlzLl95Kz15O1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5YKz14O1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5ZKz15O1xuICAgICAgICB9XG5cbiAgICAgICAgdG9TdHJpbmcoKTpzdHJpbmd7XG4gICAgICAgICAgICBsZXQgZGVsdGE6c3RyaW5nID0gKHRoaXMuZGVsdGFYPT0gbnVsbD9cIlwiOlwiICwgZGVsdGFYID0gXCIrdGhpcy5kZWx0YVgpKyh0aGlzLmRlbHRhWSA9PSBudWxsID8gXCJcIjpcIiAsIGRlbHRhWSA9IFwiK3RoaXMuZGVsdGFZKTtcbiAgICAgICAgICAgIHJldHVybiBcIiB4ID0gXCIrdGhpcy5feCtcIiAsIHkgPSBcIit0aGlzLl95ICtkZWx0YSArXCIgLCBhY3Rpb24gPSBcIiArIHRoaXMuX2dldGFjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIF9nZXRhY3Rpb24oKTpzdHJpbmd7XG4gICAgICAgICAgICBzd2l0Y2godGhpcy5fYWN0aW9uKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUNUSU9OX09VVFNJREVcIjtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuICBcIkFDVElPTl9VUFwiIDtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICBcIkFDVElPTl9NT1ZFXCIgO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBQ1RJT05fQ0FOQ0VMXCI7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFDVElPTl9PVVRTSURFXCI7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFDVElPTl9NT1VTRV9ET1dOXCI7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFDVElPTl9NT1VTRV9NT1ZFXCI7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFDVElPTl9NT1VTRV9VUFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBQ1RJT05fTU9VU0VfT1ZFUlwiO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBQ1RJT05fTU9VU0VfT1VUXCI7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBQ1RJT05fQ0xJQ0tcIjtcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFDVElPTl9NT1VTRV9PTlwiO1xuICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUNUSU9OX01PVVNFX1dIRUVMXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5uYW1lc3BhY2UgYW5kcm9pZC52aWV3LmFuaW1hdGlvbiB7XG4gICAgaW1wb3J0IENhbnZhcyA9IGFuZHJvaWQuZ3JhcGhpY3MuQ2FudmFzO1xuICAgIGV4cG9ydCBlbnVtIEFuaW1hdGlvblN0YXRlIHtcbiAgICAgICAgQmVmb3JlU3RhcnQsXG4gICAgICAgIEFuaW1hdGluZyxcbiAgICAgICAgRW5kXG4gICAgfVxuICAgIGNvbnN0IEFuaW1hdGluZ19Qcm9wcml0eTogbnVtYmVyID0gOTk5OTk5OTtcbiAgICBleHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcblxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgZWFzZTogQW5pbWF0aW9uRWFzZTtcbiAgICAgICAgdHlwZTogQW5pbWF0aW9uVHlwZTtcbiAgICAgICAgZnJvbTogbnVtYmVyO1xuICAgICAgICB0bzogbnVtYmVyO1xuICAgICAgICBmaWxsQWZ0ZXI6IGJvb2xlYW47XG4gICAgICAgIHN0YXRlOiBBbmltYXRpb25TdGF0ZTtcbiAgICAgICAgcmVwZWF0ZTogYm9vbGVhbjtcbiAgICAgICAgX3N0YXJ0Q2FsbEJhY2s6ICh2aWV3OiBWaWV3KSA9PiB2b2lkO1xuICAgICAgICBfZW5kQ2FsbEJhY2s6ICh2aWV3OiBWaWV3KSA9PiB2b2lkO1xuICAgICAgICBwcml2YXRlIF9fb2xkUHJvcHJpdHk6IG51bWJlciA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5lYXNlID0gbmV3IEFuaW1hdGlvbkVhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBBbmltYXRpb25UeXBlLkFscGhhO1xuICAgICAgICAgICAgdGhpcy5mcm9tID0gMTtcbiAgICAgICAgICAgIHRoaXMudG8gPSAxO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IEFuaW1hdGlvblN0YXRlLkJlZm9yZVN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5maWxsQWZ0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldEFuaW1hdGlvbkNhbGxCYWNrKG9uQW5pbWF0aW9uU3RhcnQ6ICh2aWV3OiBWaWV3KSA9PiB2b2lkLCBvbkFuaW1hdGlvbkVuZDogKHZpZXc6IFZpZXcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0Q2FsbEJhY2sgPSBvbkFuaW1hdGlvblN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5fZW5kQ2FsbEJhY2sgPSBvbkFuaW1hdGlvbkVuZDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgaXNBbmlhbXRpb25FbmQoKTogYm9vbGVhbiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IFwiICsgdGhpcy5zdGFydCArXCIgLCBkdXJhdGlvbiBcIit0aGlzLmR1cmF0aW9uICtcIiAsIG5vdyBcIitEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb24gPCBEYXRlLm5vdygpKSB8fCB0aGlzLnN0YXRlID09IEFuaW1hdGlvblN0YXRlLkVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjYWxlKG5vdzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWFzZSBcIiArKCAobm93IC0gdGhpcy5zdGFydCkvdGhpcy5kdXJhdGlvbikpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFzZS5lYXNlKChub3cgLSB0aGlzLnN0YXJ0KSAvIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oaW50ZXJwb2xhdGVkVGltZTogbnVtYmVyLCBjYW52YXM6IENhbnZhcywgdmlldzogVmlldykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcHBseVRyYW5zZm9ybWF0aW9uIFwiK2ludGVycG9sYXRlZFRpbWUgKyBcIiBjYW52YXMgXCIgKyBjYW52YXMgKyBcIiBWaWV3IFwiICsgdmlldyk7XG4gICAgICAgIH1cbiAgICAgICAgb25TdGFydEFuaWFtdGlvbihjYW52YXM6IENhbnZhcywgdmlldzogVmlldykge1xuICAgICAgICAgICAgdGhpcy5fX29sZFByb3ByaXR5ID0gdmlldy5wcmlvcml0eTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25TdGFydEFuaWFtdGlvbiBcIit2aWV3LmlkKTtcbiAgICAgICAgICAgIHZpZXcucHJpb3JpdHkgPSBBbmltYXRpbmdfUHJvcHJpdHk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhcnRDYWxsQmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0Q2FsbEJhY2sodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25FbmRBbmltYXRpb24oY2FudmFzOiBDYW52YXMsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgICAgIHZpZXcucHJpb3JpdHkgPSB0aGlzLl9fb2xkUHJvcHJpdHk7XG4gICAgICAgICAgICBpZiAodGhpcy5fZW5kQ2FsbEJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRDYWxsQmFjayh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfX29uSW5uZXJhbmltYXRpb25FbmQoY2FudmFzOkNhbnZhcyx2aWV3OlZpZXcpe31cbiAgICB9XG59IiwibmFtZXNwYWNlIGFuZHJvaWQudmlldy5hbmltYXRpb24ge1xuICAgIFxuXG4gICAgZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkVhc2Uge1xuICAgICAgICBwdWJsaWMgZWFzZSh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIEJvdW5jZUFuaW1hdGlvbkVhc2UgZXh0ZW5kcyBBbmltYXRpb25FYXNlIHtcblxuICAgICAgICBwdWJsaWMgZWFzZSh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiMSA9IDQgLyAxMSxcbiAgICAgICAgICAgICAgICBiMiA9IDYgLyAxMSxcbiAgICAgICAgICAgICAgICBiMyA9IDggLyAxMSxcbiAgICAgICAgICAgICAgICBiNCA9IDMgLyA0LFxuICAgICAgICAgICAgICAgIGI1ID0gOSAvIDExLFxuICAgICAgICAgICAgICAgIGI2ID0gMTAgLyAxMSxcbiAgICAgICAgICAgICAgICBiNyA9IDE1IC8gMTYsXG4gICAgICAgICAgICAgICAgYjggPSAyMSAvIDIyLFxuICAgICAgICAgICAgICAgIGI5ID0gNjMgLyA2NCxcbiAgICAgICAgICAgICAgICBiMCA9IDEgLyBiMSAvIGIxO1xuICAgICAgICAgICAgcmV0dXJuICh0ID0gK3QpIDwgYjEgPyBiMCAqIHQgKiB0IDogdCA8IGIzID8gYjAgKiAodCAtPSBiMikgKiB0ICsgYjQgOiB0IDwgYjYgPyBiMCAqICh0IC09IGI1KSAqIHQgKyBiNyA6IGIwICogKHQgLT0gYjgpICogdCArIGI5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNpbkFuaW1hdGlvbkVhc2UgZXh0ZW5kcyBBbmltYXRpb25FYXNlIHtcbiAgICAgICAgcHVibGljIGVhc2UodDogbnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcGkgPSBNYXRoLlBJLFxuICAgICAgICAgICAgICAgIGhhbGZQaSA9IHBpIC8gMjtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNpbih0ICogaGFsZlBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUXVhZEFuaW1hdGlvbkVhc2UgZXh0ZW5kcyBBbmltYXRpb25FYXNlIHtcbiAgICAgICAgcHVibGljIGVhc2UodDogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyB0ICogdCA6IC0tdCAqICgyIC0gdCkgKyAxKSAvIDI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2dyYXBoaWNzL1NpemUudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZS9JVmlldy50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9MYXlvdXRJbmZvLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ldmVudC9Nb3Rpb25FdmVudC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdXRpbC9Mb2cudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FuaW1hdGlvbi9BbmltYXRpb24udHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FuaW1hdGlvbi9BbmltYXRpb25FYXNlLnRzXCIgLz5cblxuXG5uYW1lc3BhY2UgYW5kcm9pZC52aWV3IHtcbiAgICBpbXBvcnQgUGFkZGluZyA9IGFuZHJvaWQuZ3JhcGhpY3MuUGFkZGluZztcbiAgICBpbXBvcnQgQWxpZ24gPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduO1xuICAgIGltcG9ydCBBbGlnbkVsbWVudCA9IGFuZHJvaWQuZ3JhcGhpY3MuQWxpZ25FbG1lbnQ7XG4gICAgaW1wb3J0IFNpemUgPSBhbmRyb2lkLmdyYXBoaWNzLlNpemU7XG4gICAgaW1wb3J0IENhbnZhcyA9IGFuZHJvaWQuZ3JhcGhpY3MuQ2FudmFzO1xuICAgIGltcG9ydCBHcmF2aXR5ID0gYW5kcm9pZC5ncmFwaGljcy5HcmF2aXR5O1xuICAgIGltcG9ydCBDb250ZXh0ID0gYW5kcm9pZC5hcHAuQ29udGV4dDtcbiAgICBpbXBvcnQgTW90aW9uRXZlbnQgPSBhbmRyb2lkLnZpZXcuZXZlbnQuTW90aW9uRXZlbnQ7XG4gICAgaW1wb3J0IExvZyA9IGFuZHJvaWQudXRpbC5Mb2c7XG4gICAgaW1wb3J0IEFuaW1hdGlvbiA9IGFuZHJvaWQudmlldy5hbmltYXRpb24uQW5pbWF0aW9uO1xuICAgIGltcG9ydCBBbmltYXRpb25FYXNlID0gYW5kcm9pZC52aWV3LmFuaW1hdGlvbi5BbmltYXRpb25FYXNlO1xuICAgIGltcG9ydCBTdHlsZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU3R5bGU7XG4gICAgaW1wb3J0IERlZmF1bHQgPSBhbmRyb2lkLmRldmljZS5EZWZhdWx0O1xuICAgIGltcG9ydCBBbmltYXRpb25TdGF0ZSA9YW5kcm9pZC52aWV3LmFuaW1hdGlvbi5BbmltYXRpb25TdGF0ZTtcblxuICAgIC8vIHB1YmxpYyBzdGF0aWMgIFZJU0lBQkxFIDpudW1iZXI9IDE7IFxuICAgIC8vIHB1YmxpYyBzdGF0aWMgIElOVklTSUFCTEUgOm51bWJlciA9IC0xO1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgIEdPTkUgOm51bWJlciA9IDA7XG4gICAgZXhwb3J0IGVudW0gVmlld1N0YXRlIHtcbiAgICAgICAgVmlzaWFibGUsXG4gICAgICAgIEluVmlzaWFibGUsXG4gICAgICAgIEdvbmVcbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFZpZXcgaW1wbGVtZW50cyBJVmlldyB7XG4gICAgICAgIHB1YmxpYyBpZDpzdHJpbmc9XCJcIjtcbiAgICAgICAgcHJvdGVjdGVkIF93aWR0aDogTWVhc3VyZVNwZWM7XG4gICAgICAgIHByb3RlY3RlZCBfaGVpZ2h0OiBNZWFzdXJlU3BlYztcbiAgICAgICAgcHJvdGVjdGVkIF9iYWNrZ3JvdW5kOiBTdHlsZTtcbiAgICAgICAgcHJvdGVjdGVkIF9wYWRkaW5nOiBQYWRkaW5nID0gbmV3IFBhZGRpbmcoKTtcbiAgICAgICAgcHVibGljIF9sYXlvdXRJbmZvOiBMYXlvdXRJbmZvO1xuICAgICAgICBwdWJsaWMgX29sZExheW91dEluZm86IExheW91dEluZm87XG4gICAgICAgIHB1YmxpYyBwcmlvcml0eTpudW1iZXI9MDtcbiAgICAgICAgcHJvdGVjdGVkIF9ncmF2aXR5OiBHcmF2aXR5O1xuICAgICAgICBwcm90ZWN0ZWQgYWxpZ25WaWV3OiBBbGlnbkVsbWVudDtcbiAgICAgICAgbGF5b3V0UGFyYW1zOiBMYXlvdXRQYXJhbXMgPSBuZXcgTGF5b3V0UGFyYW1zKDAsIDAsIG51bGwpO1xuICAgICAgICBwcml2YXRlIF9wYXJlbnQ6IFZpZXdHcm91cCA9IG51bGw7XG4gICAgICAgIHByaXZhdGUgX2NvbnRleHQ6IENvbnRleHQ7XG4gICAgICAgIHByb3RlY3RlZCBfY2FudmFzOiBDYW52YXM7XG4gICAgICAgIHByb3RlY3RlZCBfY2xpcCA6Ym9vbGVhbjtcbiAgICAgICAgcHVibGljIGFuaW1hdGlvbjpBbmltYXRpb247XG4gICAgICAgIHByaXZhdGUgX2FuaW1hdGlvbkxpc3Q6QW5pbWF0aW9uW107XG4gICAgICAgIHByaXZhdGUgX2RyYXdpbmdUaW1lOm51bWJlciA9MDtcblxuICAgICAgICBvZmZzZXRsZWZ0OiBudW1iZXI9MDtcbiAgICAgICAgb2Zmc2V0dG9wOiBudW1iZXI9MDtcbiAgICAgICAgcHVibGljIHZpc2lhYmxlOiBWaWV3U3RhdGUgPSBWaWV3U3RhdGUuVmlzaWFibGU7XG5cbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLl9ncmF2aXR5ID0gR3Jhdml0eS5MZWZ0O1xuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IERlZmF1bHQuc3R5bGU7XG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLmJhY2tncm91bmQ9J3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmQuc3Ryb2tlU3R5bGUuc3Ryb2tlQ29sb3I9J3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmQuc3Ryb2tlU3R5bGUuc3Ryb2tlV2lkdGggPSAwO1xuICAgICAgICAgICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkqMTAwMDAwMDArXCJcIjtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbkxpc3QgPVtdO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBnZXRDb250ZXh0KCk6IENvbnRleHQge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogbWF5IGJlIGNhbGxlZCBmb3Igc2VydmFsIHRpbWVzXG4gICAgICAgICAqL1xuICAgICAgICBvbk1lYXN1cmUod2lkdGg6IE1lYXN1cmVTcGVjLCBoZWlnaHQ6IE1lYXN1cmVTcGVjLCBjYW52YXM6IENhbnZhcyk6IFNpemUge1xuICAgICAgICAgICAgdGhpcy5fbGF5b3V0SW5mbyA9IG5ldyBMYXlvdXRJbmZvKDAsIDAsIDAsIDAsIHRoaXMucGFkZGluZywgMCk7XG4gICAgICAgICAgICB2YXIgdzogbnVtYmVyID0gdGhpcy5sYXlvdXRQYXJhbXMud2lkdGg7XG4gICAgICAgICAgICB2YXIgaDogbnVtYmVyID0gdGhpcy5sYXlvdXRQYXJhbXMuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHNpemU6IFNpemUgPSBuZXcgU2l6ZSh3LCBoKTtcbiAgICAgICAgICAgIHZhciB3aWR0aG1vZGUgPSB0aGlzLmxheW91dFBhcmFtcy53aWR0aE1vZGU7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0bW9kZSA9IHRoaXMubGF5b3V0UGFyYW1zLmhlaWdodE1vZGU7XG4gICAgICAgICAgICBpZiAod2lkdGhtb2RlID09PSBMYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5UKSB7XG4gICAgICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHdpZHRoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhlaWdodG1vZGUgPT09IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpIHtcbiAgICAgICAgICAgICAgICBzaXplLmhlaWdodCA9IGhlaWdodC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TWVhc3VyZWREaW1lbnNpb24obmV3IE1lYXN1cmVTcGVjKHNpemUud2lkdGgsIExheW91dFBhcmFtcy5FWEFDVExZKSwgbmV3IE1lYXN1cmVTcGVjKHNpemUuaGVpZ2h0LCBMYXlvdXRQYXJhbXMuRVhBQ1RMWSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2luZ1RpbWUoKTpudW1iZXJ7XG4gICAgICAgICAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2luZ1RpbWU7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgc2V0RHJhd2luZ1RpbWUodmFsdWU6bnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdpbmdUaW1lPXZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgb25MYXlvdXQobDogbnVtYmVyLCB0OiBudW1iZXIsIHI6IG51bWJlciwgYjogbnVtYmVyLCBjYW52YXM6IENhbnZhcyk6IHZvaWQge1xuICAgICAgICAgICAgaWYodGhpcy5sYXlvdXRJbmZvICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuX29sZExheW91dEluZm89IHRoaXMubGF5b3V0SW5mby5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXlvdXRJbmZvLnJlc2V0KGwrdGhpcy5vZmZzZXRsZWZ0LCB0K3RoaXMub2Zmc2V0dG9wLCByK3RoaXMub2Zmc2V0bGVmdCwgYit0aGlzLm9mZnNldHRvcCwgdGhpcy5wYWRkaW5nLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBwcm90ZWN0ZWQgaXNsYXlvdXRDaGFuZ2VkKCk6Ym9vbGVhbntcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5sYXlvdXRJbmZvLmVxdWFsKHRoaXMuX29sZExheW91dEluZm8pO1xuICAgICAgICB9XG4gICAgICAgIG9uRHJhdyhjYW52YXM6IENhbnZhcyk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlzaWFibGUgIT0gVmlld1N0YXRlLlZpc2lhYmxlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5kcmF3UmVjdCh0aGlzLl9sYXlvdXRJbmZvLm91dHRlcnJlY3Quc3RhcnRQb2ludCwgdGhpcy5fbGF5b3V0SW5mby5vdXR0ZXJyZWN0LmVuZFBvaW50LCB0cnVlLCB0aGlzLmJhY2tncm91bmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldE1lYXN1cmVkRGltZW5zaW9uKHdpZHRoOiBNZWFzdXJlU3BlYywgaGVpZ2h0OiBNZWFzdXJlU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBvblRvdWNoRXZlbnQoZXZlbnQ6IE1vdGlvbkV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIG9uTW91c2VFdmVudChldmVudDogTW90aW9uRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBpbnZhbGlkYXRlKGZvcmNlOmJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgICAgIGZvcmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKGZvcmNlKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuaW52YWxpZGF0ZShmb3JjZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmludmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5pbnZhbGlkYXRlQ2hpbGQodGhpcyx0aGlzLmxheW91dEluZm8ub3V0dGVycmVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmludmFsaWRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHVibGljIGdldFJvb3RWaWV3KCk6IFZpZXcge1xuICAgICAgICAgICAgaWYodGhpcy5wYXJlbnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChwYXJlbnQucGFyZW50ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIG9uaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyByZXF1ZXN0TGF5b3V0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVxdWVzdExheW91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBwdWJsaWMgc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uOkFuaW1hdGlvbil7XG4gICAgICAgICAgICBpZih0aGlzLmFuaW1hdGlvbiA9PSBudWxsIHx8dGhpcy5hbmltYXRpb24uaXNBbmlhbXRpb25FbmQpe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWRkQW5pbWF0aW9uIFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFuaW1hdGlvbiAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRSb290VmlldygpLnN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLl9fb25Jbm5lcmFuaW1hdGlvbkVuZD0gKGNhbnZhczpDYW52YXMsdmlldzpWaWV3KT0+e1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFuaW1hdGlvbi5yZXBlYXRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0YXRlID0gQW5pbWF0aW9uU3RhdGUuQmVmb3JlU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbkxpc3QucHVzaChhbmltYXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLl9fb25Jbm5lcmFuaW1hdGlvbkVuZD0gKGNhbnZhczpDYW52YXMsdmlldzpWaWV3KT0+e1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9hbmltYXRpb25MaXN0Lmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uTGlzdC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oY3VycmFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwdWJsaWMgY2xlYW5BbmltYXRpb24oKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYW5pbWF0aW9uICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnJlcGVhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdGF0ZSA9IEFuaW1hdGlvblN0YXRlLkVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbkxpc3QubGVuZ3RoPTA7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIHNldFBhcmVudChwOiBWaWV3R3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIG9mZnNldChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldGxlZnQgKz0gbGVmdDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0dG9wICs9IHRvcDtcbiAgICAgICAgICAgIGlmKGlzTmFOKGxlZnQpIHx8IGlzTmFOKHRoaXMub2Zmc2V0bGVmdCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2Zmc2V0IGVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IFwib2Zmc2V0IGVycm9yIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvZmZzZXQgXCIgKyB0b3ApO1xuICAgICAgICAgICAgLy8gdGhpcy5sYXlvdXRJbmZvLm9mZnNldChsZWZ0LHRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgcGFyZW50KCk6IFZpZXdHcm91cCB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aC5nZXRNZWFzdXJlVmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodC5nZXRNZWFzdXJlVmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldCBwYWRkaW5nKHBhZGRpbmc6IFBhZGRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICB9XG4gICAgICAgIGdldCBwYWRkaW5nKCk6IFBhZGRpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhZGRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGxlZnQoKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRJbmZvLm91dHRlcnJlY3QubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldCB0b3AoKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRJbmZvLm91dHRlcnJlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0IHJpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0SW5mby5vdXR0ZXJyZWN0LnJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0IGJvdHRvbSgpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xheW91dEluZm8ub3V0dGVycmVjdC5ib3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBzZXQgYmFja2dyb3VuZChiYWNrZ3JvdW5kOiBTdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGJhY2tncm91bmQoKTogU3R5bGUge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGxheW91dEluZm8oKTogTGF5b3V0SW5mbyB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2xheW91dEluZm8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXlvdXRJbmZvID0gbmV3IExheW91dEluZm8oMCwgMCwgMCwgMCwgdGhpcy5wYWRkaW5nLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRJbmZvO1xuICAgICAgICB9XG5cblxuICAgICAgICBzZXQgZ3Jhdml0eShncmF2aXR5OiBHcmF2aXR5KSB7XG4gICAgICAgICAgICB0aGlzLl9ncmF2aXR5ID0gZ3Jhdml0eTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgZ3Jhdml0eSgpOiBHcmF2aXR5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ncmF2aXR5O1xuICAgICAgICB9XG4gICAgICAgIHNldCBjbGlwKHZhbHVlOmJvb2xlYW4pe1xuICAgICAgICAgICAgdGhpcy5fY2xpcCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGdldCBjbGlwKCk6Ym9vbGVhbntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGlwO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ncmFwaGljcy9VdGlsLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9pbnRlcmZhY2UvSVZpZXdHcm91cC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVmlldy50c1wiIC8+XG5cbm5hbWVzcGFjZSBhbmRyb2lkLnZpZXcge1xuXG4gICAgaW1wb3J0IFBhZGRpbmcgPSBhbmRyb2lkLmdyYXBoaWNzLlBhZGRpbmc7XG4gICAgaW1wb3J0IEFsaWduID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbjtcbiAgICBpbXBvcnQgQWxpZ25FbG1lbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduRWxtZW50O1xuICAgIGltcG9ydCBTaXplID0gYW5kcm9pZC5ncmFwaGljcy5TaXplO1xuICAgIGltcG9ydCBDYW52YXMgPSBhbmRyb2lkLmdyYXBoaWNzLkNhbnZhcztcbiAgICBpbXBvcnQgTW90aW9uRXZlbnQgPSBhbmRyb2lkLnZpZXcuZXZlbnQuTW90aW9uRXZlbnQ7XG4gICAgaW1wb3J0IExvZyA9IGFuZHJvaWQudXRpbC5Mb2c7XG4gICAgaW1wb3J0IFJlY3QgPSBhbmRyb2lkLmdyYXBoaWNzLlJlY3Q7XG4gICAgaW1wb3J0IFV0aWwgPSBhbmRyb2lkLmdyYXBoaWNzLlV0aWw7XG4gICAgaW1wb3J0IEFuaW1hdGlvblN0YXRlID0gYW5kcm9pZC52aWV3LmFuaW1hdGlvbi5BbmltYXRpb25TdGF0ZTtcbiAgICBleHBvcnQgY2xhc3MgVmlld0dyb3VwIGV4dGVuZHMgVmlldyBpbXBsZW1lbnRzIElWaWV3R3JvdXAge1xuXG4gICAgICAgIHByb3RlY3RlZCBjaGlsZHJlbjogQXJyYXk8Vmlldz4gPSBuZXcgQXJyYXk8Vmlldz4oKTtcblxuICAgICAgICBwcml2YXRlIF9tQ3VycmVudFRvdWNoVGFyZ2V0OiBhbnkgPSBudWxsO1xuXG4gICAgICAgIHByaXZhdGUgX2lzSW50ZXJjZXB0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgcHJpdmF0ZSBsYXN0SW50ZXJjZXB0RXZlbnQ6IE1vdGlvbkV2ZW50W10gPSBbXTtcblxuICAgICAgICBwdWJsaWMgZGlzcGF0Y2hEcmF3KGNhbnZhczogQ2FudmFzKTogdm9pZCB7XG5cbiAgICAgICAgICAgIHZhciBpdGVtOiBWaWV3O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREcmF3aW5nVGltZSh0aGlzLmdldERyYXdpbmdUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZpc2lhYmxlICE9IFZpZXdTdGF0ZS5WaXNpYWJsZSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsaXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsaXAgPSB0aGlzLmNsaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsaXAgPT09IHRydWUgfHwgaXRlbS5jbGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmNsaXAoaXRlbS5sYXlvdXRJbmZvLm91dHRlcnJlY3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaGlsZChjYW52YXMsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NoaWxkKGNhbnZhcywgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0NoaWxkKGNhbnZhczogQ2FudmFzLCB2aWV3OiBWaWV3KSB7XG4gICAgICAgICAgICAvLyBpZiAoVXRpbC5pc01peGVkKHZpZXcubGF5b3V0SW5mby5pbm5lcnJlY3QsIHRoaXMubGF5b3V0SW5mby5pbm5lcnJlY3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuYW5pbWF0aW9uICE9IG51bGwgJiYgIXZpZXcuYW5pbWF0aW9uLmlzQW5pYW10aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3LmFuaW1hdGlvbi5zdGF0ZSA9PT0gQW5pbWF0aW9uU3RhdGUuQmVmb3JlU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuX2xheW91dEluZm8gPSB2aWV3Ll9vbGRMYXlvdXRJbmZvLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3LmFuaW1hdGlvbi5vblN0YXJ0QW5pYW10aW9uKGNhbnZhcywgdmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3LmFuaW1hdGlvbi5zdGF0ZSA9IEFuaW1hdGlvblN0YXRlLkFuaW1hdGluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2aWV3LmFuaW1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKHZpZXcuYW5pbWF0aW9uLnNjYWxlKHRoaXMuZ2V0RHJhd2luZ1RpbWUoKSksIGNhbnZhcywgdmlldyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmlldy5vbkRyYXcoY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXcgaW5zdGFuY2VvZiBWaWV3R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuZGlzcGF0Y2hEcmF3KGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Ugey8vIG5vcm1hbCBkcmF3aW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlldy5hbmltYXRpb24gIT0gbnVsbCAmJiB2aWV3LmFuaW1hdGlvbi5pc0FuaWFtdGlvbkVuZCAmJiB2aWV3LmFuaW1hdGlvbi5zdGF0ZSAhPSBBbmltYXRpb25TdGF0ZS5FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuYW5pbWF0aW9uLnN0YXRlID0gQW5pbWF0aW9uU3RhdGUuRW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5hbmltYXRpb24ub25FbmRBbmltYXRpb24oY2FudmFzLCB2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuYW5pbWF0aW9uLl9fb25Jbm5lcmFuaW1hdGlvbkVuZChjYW52YXMsdmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZpZXcuYW5pbWF0aW9uLmZpbGxBZnRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuX2xheW91dEluZm8gPSB2aWV3Ll9vbGRMYXlvdXRJbmZvLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmlldy5vbkRyYXcoY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXcgaW5zdGFuY2VvZiBWaWV3R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuZGlzcGF0Y2hEcmF3KGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIGNsZWFuQW5pbWF0aW9uKCl7XG4gICAgICAgICAgICBzdXBlci5jbGVhbkFuaW1hdGlvbigpO1xuICAgICAgICAgICAgZm9yKGxldCB2aWV3IG9mIHRoaXMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIHZpZXcuY2xlYW5BbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0ub25pbnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgaW52YWxpZGF0ZUNoaWxkKGNoaWxkOiBWaWV3LCBkaXJ0eTogUmVjdCk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKFV0aWwuY29udGFpbnNSZWN0KHRoaXMubGF5b3V0SW5mby5vdXR0ZXJyZWN0LCBkaXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3ZGlydHkgPSBVdGlsLnVuaW9uKGRpcnR5LCB0aGlzLmxheW91dEluZm8ub3V0dGVycmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5pbnZhbGlkYXRlQ2hpbGQodGhpcywgbmV3ZGlydHkpO1xuICAgICAgICAgICAgICAgIHRoaXMub25pbnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hEcmF3KHRoaXMuX2NhbnZhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZ2V0Q2hpbGRDb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBnZXRDaGlsZEF0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgZ2V0U29ydFZpZXdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBvbkxheW91dChsOiBudW1iZXIsIHQ6IG51bWJlciwgcjogbnVtYmVyLCBiOiBudW1iZXIsIGNhbnZhczogQ2FudmFzKTogdm9pZCB7XG4gICAgICAgICAgICBzdXBlci5vbkxheW91dChsLCB0LCByLCBiLCBjYW52YXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25NZWFzdXJlKHdpZHRoOiBNZWFzdXJlU3BlYywgaGVpZ2h0OiBNZWFzdXJlU3BlYywgY2FudmFzOiBDYW52YXMpOiBTaXplIHtcbiAgICAgICAgICAgIHZhciBtYXhTaXplOiBTaXplO1xuICAgICAgICAgICAgLy8gcmV0dXJuIHN1cGVyLm9uTWVhc3VyZSh3aWR0aCxoZWlnaHQsY2FudmFzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtOiBWaWV3ID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB2YXIgbHA6IExheW91dFBhcmFtcyA9IGl0ZW0ubGF5b3V0UGFyYW1zO1xuICAgICAgICAgICAgICAgIHZhciB3OiBudW1iZXIgPSBscC53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaDogbnVtYmVyID0gbHAuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vVE8gRE8uLi5cbiAgICAgICAgICAgICAgICBpZiAobHAuaGVpZ2h0TW9kZSA9PT0gTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCkge1xuICAgICAgICAgICAgICAgICAgICBoID0gaGVpZ2h0LnZhbHVlIC0gaXRlbS5sYXlvdXRQYXJhbXMubWFyZ2luLm1hcmdpblRvcCAtIGl0ZW0ubGF5b3V0UGFyYW1zLm1hcmdpbi5tYXJnaW5Cb3R0b20gLSB0aGlzLnBhZGRpbmcudG9wUGFkZGluZyAtIHRoaXMucGFkZGluZy5ib3R0b21QYWRkaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobHAud2lkdGhNb2RlID09PSBMYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5UKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSB3aWR0aC52YWx1ZSAtIGl0ZW0ubGF5b3V0UGFyYW1zLm1hcmdpbi5tYXJnaW5MZWZ0IC0gaXRlbS5sYXlvdXRQYXJhbXMubWFyZ2luLm1hcmdpblJpZ2h0IC0gdGhpcy5wYWRkaW5nLmxlZnRQYWRkaW5nIC0gdGhpcy5wYWRkaW5nLnJpZ2h0UGFkZGluZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IGl0ZW0ub25NZWFzdXJlKG5ldyBNZWFzdXJlU3BlYyh3LCBscC53aWR0aE1vZGUpLCBuZXcgTWVhc3VyZVNwZWMoaCwgbHAuaGVpZ2h0TW9kZSksIGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmlzaWFibGUgPT09IFZpZXdTdGF0ZS5Hb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBuZXcgU2l6ZSgwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heFNpemUud2lkdGggPCBzaXplLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTaXplLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U2l6ZS5oZWlnaHQgPCBzaXplLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U2l6ZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbWF4U2l6ZSkge1xuICAgICAgICAgICAgICAgIG1heFNpemUgPSBuZXcgU2l6ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dFBhcmFtcy53aWR0aE1vZGUgPT09IExheW91dFBhcmFtcy5FWEFDVExZKSB7XG4gICAgICAgICAgICAgICAgbWF4U2l6ZS53aWR0aCA9IHRoaXMubGF5b3V0UGFyYW1zLndpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxheW91dFBhcmFtcy53aWR0aE1vZGUgPT09IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpIHtcbiAgICAgICAgICAgICAgICBtYXhTaXplLndpZHRoID0gd2lkdGguZ2V0TWVhc3VyZVZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXRQYXJhbXMuaGVpZ2h0TW9kZSA9PT0gTGF5b3V0UGFyYW1zLkVYQUNUTFkpIHtcbiAgICAgICAgICAgICAgICBtYXhTaXplLmhlaWdodCA9IHRoaXMubGF5b3V0UGFyYW1zLmhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXRQYXJhbXMuaGVpZ2h0TW9kZSA9PT0gTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCkge1xuICAgICAgICAgICAgICAgIG1heFNpemUuaGVpZ2h0ID0gaGVpZ2h0LmdldE1lYXN1cmVWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRNZWFzdXJlZERpbWVuc2lvbihuZXcgTWVhc3VyZVNwZWMobWF4U2l6ZS53aWR0aCwgTGF5b3V0UGFyYW1zLkVYQUNUTFkpLCBuZXcgTWVhc3VyZVNwZWMobWF4U2l6ZS5oZWlnaHQsIExheW91dFBhcmFtcy5FWEFDVExZKSk7XG4gICAgICAgICAgICByZXR1cm4gbWF4U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBhZGRWaWV3KHZpZXc6IFZpZXcsIGluZGV4OiBudW1iZXIgPSAwLCBsYXlvdXRQYXJhbXM6IExheW91dFBhcmFtcyA9IG51bGwpOiBudW1iZXIge1xuICAgICAgICAgICAgdGhpcy5hZGRWaWV3V2l0aE91dFJlTGF5b3V0KHZpZXcsIGluZGV4LCBsYXlvdXRQYXJhbXMpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0TGF5b3V0KCk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIG5vdGlmeURyYXdPcmRlckNoYW5nZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNvcnQoKGE6IFZpZXcsIGI6IFZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgYWRkVmlld1dpdGhPdXRSZUxheW91dCh2aWV3OiBWaWV3LCBpbmRleDogbnVtYmVyID0gMCwgbGF5b3V0UGFyYW1zOiBMYXlvdXRQYXJhbXMgPSBudWxsKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh2aWV3KTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2hpbGRyZW4uc29ydCgoYTogVmlldywgYjogVmlldykgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlEcmF3T3JkZXJDaGFuZ2VkKCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmlldy5sYXlvdXRJbmZvLmRyYXdpbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3LmxheW91dEluZm8uZHJhd2luZGV4ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxheW91dFBhcmFtcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmlldy5sYXlvdXRQYXJhbXMgPSBsYXlvdXRQYXJhbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3LnNldFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyByZW1vdmVBbGxWaWV3cygpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyByZW1vdmVWaWV3KHZpZXc6IFZpZXcpIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKHZpZXcpO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdmlldy5zZXRQYXJlbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIG9uSW50ZXJjZXB0VG91Y2hFdmVudChldmVudDogTW90aW9uRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBkaXNwYXRjaFRvdWNoRXZlbnQoZXZlbnQ6IE1vdGlvbkV2ZW50KTogYm9vbGVhbiB7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCB8fCB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0IGluc3RhbmNlb2YgVmlld0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNb3Rpb25FdmVudC5BQ1RJT05fRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyB0aGlzLmNoaWxkcmVuICYmIGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZDogVmlldyA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmxheW91dEluZm8ub3V0dGVycmVjdC5jb250YWlucyhldmVudC54LCBldmVudC55KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCBpbnN0YW5jZW9mIFZpZXdHcm91cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uSW50ZXJjZXB0VG91Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vblRvdWNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW50ZXJjZXB0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbnRlcmNlcHRFdmVudC5wdXNoKGV2ZW50LmNsb25lKCkpOy8v6K6w5b2VZG93buaXtuWAmeeahGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTW90aW9uRXZlbnQuQUNUSU9OX01PVkU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0ludGVyY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uVG91Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgaW5zdGFuY2VvZiBWaWV3R3JvdXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbkludGVyY2VwdFRvdWNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW50ZXJjZXB0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbnRlcmNlcHRFdmVudC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vblRvdWNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbnRlcmNlcHRFdmVudC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uVG91Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyY2VwdEV2ZW50LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCBpbnN0YW5jZW9mIFZpZXdHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQuZGlzcGF0Y2hUb3VjaEV2ZW50KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0SW50ZXJjZXB0RXZlbnQubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgaW5zdGFuY2VvZiBWaWV3R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0LmRpc3BhdGNoVG91Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTW90aW9uRXZlbnQuQUNUSU9OX1VQOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIE1vdGlvbkV2ZW50LkFDVElPTl9DQU5DRUw6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyY2VwdEV2ZW50LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0ludGVyY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vblRvdWNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0LmRpc3BhdGNoVG91Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0ludGVyY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uVG91Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5kaXNwYXRjaFRvdWNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0SW50ZXJjZXB0RXZlbnQubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0ludGVyY2VwdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICBwdWJsaWMgb25JbnRlcmNlcHRNb3VzZUV2ZW50KGV2ZW50OiBNb3Rpb25FdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBvbk1vdXNlRXZlbnQoZXZlbnQ6IE1vdGlvbkV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIGRpc3BhdGNoTW91c2VFdmVudChldmVudDogTW90aW9uRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIGlmIChldmVudC5hY3Rpb24gPT09IE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9PVVQgfHwgZXZlbnQuYWN0aW9uID09PSBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfVVApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdXRfZXZlbnQ6IE1vdGlvbkV2ZW50ID0gZXZlbnQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgb3V0X2V2ZW50LmFjdGlvbiA9IE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9PVVQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0IGluc3RhbmNlb2YgVmlld0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbkludGVyY2VwdE1vdXNlRXZlbnQob3V0X2V2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQub25Nb3VzZUV2ZW50KG91dF9ldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQuZGlzcGF0Y2hNb3VzZUV2ZW50KG91dF9ldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uTW91c2VFdmVudChvdXRfZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW50ZXJjZXB0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzSW50ZXJjZXB0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IHRoaXMuY2hpbGRyZW4gJiYgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkOiBWaWV3ID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubGF5b3V0SW5mby5vdXR0ZXJyZWN0LmNvbnRhaW5zKGV2ZW50LngsIGV2ZW50LnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCA9IGNoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9uX2V2ZW50OiBNb3Rpb25FdmVudCA9IGV2ZW50LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIG9uX2V2ZW50LmFjdGlvbiA9IE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9PTjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCBpbnN0YW5jZW9mIFZpZXdHcm91cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uTW91c2VFdmVudChvbl9ldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbkludGVyY2VwdE1vdXNlRXZlbnQob25fZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbk1vdXNlRXZlbnQob25fZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQuZGlzcGF0Y2hNb3VzZUV2ZW50KG9uX2V2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQubGF5b3V0SW5mby5vdXR0ZXJyZWN0LmNvbnRhaW5zKGV2ZW50LngsIGV2ZW50LnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdXRfZXZlbnQ6IE1vdGlvbkV2ZW50ID0gZXZlbnQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgb3V0X2V2ZW50LmFjdGlvbiA9IE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9PVVQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGc6IGJvb2xlYW4gPSBmYWxzZTsvLyB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uTW91c2VFdmVudChvdXRfZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCBpbnN0YW5jZW9mIFZpZXdHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQub25JbnRlcmNlcHRNb3VzZUV2ZW50KG91dF9ldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGcgPSB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uTW91c2VFdmVudChvdXRfZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGcgPSB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0LmRpc3BhdGNoTW91c2VFdmVudChvdXRfZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxnID0gdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbk1vdXNlRXZlbnQob3V0X2V2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsZztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbk1vdXNlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCBpbnN0YW5jZW9mIFZpZXdHcm91cCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbk1vdXNlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQub25JbnRlcmNlcHRNb3VzZUV2ZW50KGV2ZW50KSkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQub25Nb3VzZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQuZGlzcGF0Y2hNb3VzZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vIHB1YmxpYyBkaXNwYXRjaE1vdXNlRXZlbnQoZXZlbnQ6IE1vdGlvbkV2ZW50KTogYm9vbGVhbiB7XG5cbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCB8fCB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0IGluc3RhbmNlb2YgVmlld0dyb3VwKSB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIC8vICAgICAgICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfRE9XTjpcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyB0aGlzLmNoaWxkcmVuICYmIGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZDogVmlldyA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmxheW91dEluZm8ub3V0dGVycmVjdC5jb250YWlucyhldmVudC54LCBldmVudC55KSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgPSBjaGlsZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCBpbnN0YW5jZW9mIFZpZXdHcm91cCkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uSW50ZXJjZXB0TW91c2VFdmVudChldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbk1vdXNlRXZlbnQoZXZlbnQpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW50ZXJjZXB0ID0gcmVzdWx0O1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbnRlcmNlcHRFdmVudC5wdXNoKGV2ZW50LmNsb25lKCkpOy8v6K6w5b2VZG93buaXtuWAmeeahGV2ZW50XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgTW90aW9uRXZlbnQuQUNUSU9OX01PVVNFX01PVkU6XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0ludGVyY2VwdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uTW91c2VFdmVudChldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgaW5zdGFuY2VvZiBWaWV3R3JvdXApKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbkludGVyY2VwdE1vdXNlRXZlbnQoZXZlbnQpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW50ZXJjZXB0ID0gcmVzdWx0O1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbnRlcmNlcHRFdmVudC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbk1vdXNlRXZlbnQoZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbnRlcmNlcHRFdmVudC5sZW5ndGggPSAwO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uTW91c2VFdmVudChldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyY2VwdEV2ZW50LmZvckVhY2goZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCBpbnN0YW5jZW9mIFZpZXdHcm91cCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQuZGlzcGF0Y2hNb3VzZUV2ZW50KGUpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0SW50ZXJjZXB0RXZlbnQubGVuZ3RoID0gMDtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21DdXJyZW50VG91Y2hUYXJnZXQgaW5zdGFuY2VvZiBWaWV3R3JvdXApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0LmRpc3BhdGNoTW91c2VFdmVudChldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgTW90aW9uRXZlbnQuQUNUSU9OX01PVVNFX09VVDpcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfVVA6XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyY2VwdEV2ZW50LmZvckVhY2goZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0ludGVyY2VwdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5vbk1vdXNlRXZlbnQoZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0LmRpc3BhdGNoTW91c2VFdmVudChlKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0ludGVyY2VwdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tQ3VycmVudFRvdWNoVGFyZ2V0Lm9uTW91c2VFdmVudChldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldC5kaXNwYXRjaE1vdXNlRXZlbnQoZXZlbnQpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbUN1cnJlbnRUb3VjaFRhcmdldCA9IG51bGw7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0SW50ZXJjZXB0RXZlbnQubGVuZ3RoID0gMDtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0ludGVyY2VwdCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyB9XG4gICAgfVxufSIsIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3ZpZXcvaW1wbGVtZW50aW9uL1ZpZXdHcm91cC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZ3JhcGhpY3MvVXRpbC50c1wiIC8+XG5cbm5hbWVzcGFjZSBhbmRyb2lkLndpZGdldCB7XG4gICAgaW1wb3J0IFBhZGRpbmcgPSBhbmRyb2lkLmdyYXBoaWNzLlBhZGRpbmc7XG4gICAgaW1wb3J0IEFsaWduID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbjtcbiAgICBpbXBvcnQgR3Jhdml0eSA9IGFuZHJvaWQuZ3JhcGhpY3MuR3Jhdml0eTtcblxuXG4gICAgaW1wb3J0IEFsaWduRWxtZW50ID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbkVsbWVudDtcbiAgICBpbXBvcnQgTWFyZ2luID0gYW5kcm9pZC5ncmFwaGljcy5NYXJnaW47XG5cbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgQ2FudmFzID0gYW5kcm9pZC5ncmFwaGljcy5DYW52YXM7XG4gICAgaW1wb3J0IFZpZXdHcm91cCA9IGFuZHJvaWQudmlldy5WaWV3R3JvdXA7XG4gICAgaW1wb3J0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcblxuICAgIGltcG9ydCBQb2ludCA9IGFuZHJvaWQuZ3JhcGhpY3MuUG9pbnQ7XG4gICAgaW1wb3J0IE1lYXN1cmVTcGVjID0gYW5kcm9pZC52aWV3Lk1lYXN1cmVTcGVjO1xuICAgIGV4cG9ydCBjbGFzcyBGcmFtZUxheW91dCBleHRlbmRzIFZpZXdHcm91cCB7XG5cbiAgICAgICAgb25NZWFzdXJlKHdpZHRoOiBNZWFzdXJlU3BlYywgaGVpZ2h0OiBNZWFzdXJlU3BlYywgY2FudmFzOiBDYW52YXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vbk1lYXN1cmUod2lkdGgsIGhlaWdodCwgY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb25MYXlvdXQobDogbnVtYmVyLCB0OiBudW1iZXIsIHI6IG51bWJlciwgYjogbnVtYmVyLCBjYW52YXM6IENhbnZhcyk6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXRJbmZvLnJlc2V0KGwsIHQsIHIsIGIsIHRoaXMucGFkZGluZywgMCk7XG4gICAgICAgICAgICBsZXQgdmlld0l0ZW06IFZpZXc7XG5cbiAgICAgICAgICAgIGxldCBsZW5ndGg6IG51bWJlciA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZpZXdJdGVtID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dEl0ZW0odmlld0l0ZW0sbCx0LHIsYixjYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgICBcbiAgICAgICAgcHVibGljIGxheW91dEl0ZW0odmlld0l0ZW06VmlldyxsOiBudW1iZXIsIHQ6IG51bWJlciwgcjogbnVtYmVyLCBiOiBudW1iZXIsIGNhbnZhczogQ2FudmFzKTogdm9pZCB7XG5cbiAgICAgICAgICAgIGxldCBwb2ludDogUG9pbnQgPSBuZXcgUG9pbnQodGhpcy5sYXlvdXRJbmZvLmlubmVycmVjdC5sZWZ0LCB0aGlzLmxheW91dEluZm8uaW5uZXJyZWN0LnRvcCk7XG4gICAgICAgICAgICBsZXQgaW5uZXJyZWN0ID0gdGhpcy5sYXlvdXRJbmZvLmlubmVycmVjdDtcbiAgICAgICAgICAgIGxldCBsZW5ndGg6IG51bWJlciA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IG06IE1hcmdpbiA9IHZpZXdJdGVtLmxheW91dFBhcmFtcy5tYXJnaW47XG4gICAgICAgICAgICBzd2l0Y2ggKHZpZXdJdGVtLmdyYXZpdHkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQuc2V0KGlubmVycmVjdC5sZWZ0LGlubmVycmVjdC50b3ApO1xuICAgICAgICAgICAgICAgICAgICBwb2ludC5vZmZzZXQobS5tYXJnaW5MZWZ0LG0ubWFyZ2luVG9wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBHcmF2aXR5LkF1dG86XG4gICAgICAgICAgICAgICAgICAgIHBvaW50LnNldChpbm5lcnJlY3QubGVmdCxpbm5lcnJlY3QudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBHcmF2aXR5LlJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICBwb2ludC5zZXQoaW5uZXJyZWN0LnJpZ2h0IC0gdmlld0l0ZW0ud2lkdGgsIGlubmVycmVjdC50b3ApO1xuICAgICAgICAgICAgICAgICAgICBwb2ludC5vZmZzZXQoLW0ubWFyZ2luUmlnaHQsbS5tYXJnaW5Ub3ApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuVG9wOlxuICAgICAgICAgICAgICAgICAgICBwb2ludC5zZXQoaW5uZXJyZWN0LmxlZnQsaW5uZXJyZWN0LnRvcCk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50Lm9mZnNldChtLm1hcmdpbkxlZnQsbS5tYXJnaW5Ub3ApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuQm90dG9tOlxuICAgICAgICAgICAgICAgICAgICBwb2ludC5zZXQoaW5uZXJyZWN0LmxlZnQsIGlubmVycmVjdC5ib3R0b20gLSB2aWV3SXRlbS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBwb2ludC5vZmZzZXQobS5tYXJnaW5MZWZ0LC1tLm1hcmdpbkJvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgR3Jhdml0eS5DZW50ZXI6XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBsID0gaW5uZXJyZWN0LmxlZnQrKHRoaXMubGF5b3V0SW5mby5pbm5lcnJlY3Qud2lkdGgtdmlld0l0ZW0ud2lkdGgpLzI7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXB0ID0gaW5uZXJyZWN0LnRvcCAgKyAodGhpcy5sYXlvdXRJbmZvLmlubmVycmVjdC5oZWlnaHQtdmlld0l0ZW0uaGVpZ2h0KS8yO1xuICAgICAgICAgICAgICAgICAgICBpZih0bXBsIDwgMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih0bXB0IDwgMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXB0ID0wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBvaW50LnNldCh0bXBsLHRtcHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcG9pbnQub2Zmc2V0KG0uZ2V0U3RhcnRYTWFyZ2luKCksIG0uZ2V0U3RhcnRZTWFyZ2luKCkpO1xuICAgICAgICAgICAgICAgIC8vIHBvaW50Lm9mZnNldChtLm1hcmdpbkxlZnQsbS5tYXJnaW5SaWdodClcbiAgICAgICAgICAgICAgICB2aWV3SXRlbS5vbkxheW91dChwb2ludC54LCBwb2ludC55LCBwb2ludC54ICsgdmlld0l0ZW0ud2lkdGgsIHBvaW50LnkgKyB2aWV3SXRlbS5oZWlnaHQsY2FudmFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJDb250ZXh0LnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi93aWRnZXQvRnJhbWVMYXlvdXQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWwvTG9nLnRzXCIgLz5cblxubmFtZXNwYWNlIGFuZHJvaWQuYXBwe1xuXG4gICAgaW1wb3J0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICBpbXBvcnQgUGFkZGluZyA9IGFuZHJvaWQuZ3JhcGhpY3MuUGFkZGluZztcbiAgICBpbXBvcnQgR3Jhdml0eSA9IGFuZHJvaWQuZ3JhcGhpY3MuR3Jhdml0eTtcbiAgICBpbXBvcnQgUmVjdCA9IGFuZHJvaWQuZ3JhcGhpY3MuUmVjdDtcbiAgICBpbXBvcnQgQWxpZ25FbG1lbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduRWxtZW50O1xuICAgIGltcG9ydCBNYXJnaW4gPSBhbmRyb2lkLmdyYXBoaWNzLk1hcmdpbjtcbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgQ2FudmFzID0gYW5kcm9pZC5ncmFwaGljcy5DYW52YXM7XG4gICAgaW1wb3J0IFZpZXdHcm91cCA9IGFuZHJvaWQudmlldy5WaWV3R3JvdXA7XG4gICAgaW1wb3J0IFBvaW50ID0gYW5kcm9pZC5ncmFwaGljcy5Qb2ludDtcbiAgICBpbXBvcnQgTWVhc3VyZVNwZWMgPSBhbmRyb2lkLnZpZXcuTWVhc3VyZVNwZWM7XG4gICAgaW1wb3J0IE9yaWVudGF0aW9uID0gYW5kcm9pZC5ncmFwaGljcy5PcmllbnRhdGlvbjtcbiAgICBpbXBvcnQgTGF5b3V0UGFyYW1zID0gYW5kcm9pZC52aWV3LkxheW91dFBhcmFtcztcbiAgICBpbXBvcnQgUmVuZGVyVHlwZSA9IGFuZHJvaWQuZ3JhcGhpY3MuUmVuZGVyVHlwZTtcbiAgICBpbXBvcnQgUm9vdFZpZXcgPSBhbmRyb2lkLndpZGdldC5Sb290VmlldztcbiAgICBpbXBvcnQgTGluZWFyTGF5b3V0ID0gYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0O1xuICAgIGltcG9ydCBGcmFtZUxheW91dCA9IGFuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0O1xuICAgIGltcG9ydCBMb2cgPSBhbmRyb2lkLnV0aWwuTG9nO1xuXG4gICAgZXhwb3J0IGNsYXNzIEFjdGl2aXR5IGV4dGVuZHMgQ29udGV4dHtcbiAgICAgICAgcHJpdmF0ZSByb290VmlldyA6RnJhbWVMYXlvdXQgO1xuICAgICAgICBwcml2YXRlIGFjdGl2aXR5TWFuYWdlciA6QWN0aXZpdHlNYW5hZ2VyO1xuICAgICAgICBjb25zdHJ1Y3RvcihhbTpBY3Rpdml0eU1hbmFnZXIpe1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIGlmKGFtIGluc3RhbmNlb2YgQWN0aXZpdHlNYW5hZ2VyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5TWFuYWdlciA9IGFtO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJjYW4ndCBjcmVhdGUgQWN0aXZpdHkgbmV3IFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb290VmlldyA9IG5ldyBGcmFtZUxheW91dCh0aGlzKTtcbiAgICAgICAgICAgIGxldCBscCA6IExheW91dFBhcmFtcyA9IG5ldyBMYXlvdXRQYXJhbXMoTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCxMYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5ULG51bGwpO1xuICAgICAgICAgICAgdGhpcy5yb290Vmlldy5sYXlvdXRQYXJhbXMgPSBscDtcbiAgICAgICAgICAgIC8vIHRoaXMucm9vdFZpZXcuYmFja2dyb3VuZCA9ICdsaWdodGJsdWUnO1xuICAgICAgICB9XG4gICAgICAgIHByaXZhdGUgYXR0YXRjaFJvb3RWaWV3KHZpZXc6Um9vdFZpZXcpe1xuICAgICAgICAgICAgdmlldy5hZGRWaWV3KHRoaXMucm9vdFZpZXcsMCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdGVjdGVkIG9uQ3JlYXRlKGJ1bmRsZTpCdW5kbGUpe1xuICAgICAgICAgICAgTG9nLmQoXCJvbmNyZWF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwcm90ZWN0ZWQgb25QYXVzZSgpe1xuICAgICAgICAgICAgTG9nLmQoXCJvblBhdXNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHByb3RlY3RlZCBvblJlc3VtZSgpe1xuICAgICAgICAgICAgTG9nLmQoJ29uUmVzdW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdGVjdGVkIG9uRGVzdG9yeSgpe1xuICAgICAgICAgICAgTG9nLmQoJ29uRGVzdG9yeScpO1xuICAgICAgICB9XG4gICAgICAgIHByb3RlY3RlZCBzZXRDb250ZW50Vmlldyh2aWV3OlZpZXcpe1xuICAgICAgICAgICAgdGhpcy5yb290Vmlldy5hZGRWaWV3KHZpZXcsMCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdGVjdGVkIHN0YXJ0QWN0aXZpdHlGb3JSZXN1bHQoaW50ZW50OkludGVudCxidW5kbGU6QnVuZGxlLHJlcXVlc3RDb2RlOm51bWJlcixyZXN1bHRDb2RlOm51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5TWFuYWdlci5zZW5kU3RhcnRBY3Rpdml0eShpbnRlbnQsYnVuZGxlLHJlcXVlc3RDb2RlLHJlc3VsdENvZGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdmlldy9pbXBsZW1lbnRpb24vVmlld0dyb3VwLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0ZyYW1lTGF5b3V0LnRzXCIgLz5cblxuXG5cbm5hbWVzcGFjZSBhbmRyb2lkLndpZGdldCB7XG4gICAgaW1wb3J0IFBhZGRpbmcgPSBhbmRyb2lkLmdyYXBoaWNzLlBhZGRpbmc7XG4gICAgaW1wb3J0IEFsaWduID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbjtcbiAgICBpbXBvcnQgR3Jhdml0eSA9IGFuZHJvaWQuZ3JhcGhpY3MuR3Jhdml0eTtcblxuXG4gICAgaW1wb3J0IEFsaWduRWxtZW50ID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbkVsbWVudDtcbiAgICBpbXBvcnQgTWFyZ2luID0gYW5kcm9pZC5ncmFwaGljcy5NYXJnaW47XG5cbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgQ2FudmFzID0gYW5kcm9pZC5ncmFwaGljcy5DYW52YXM7XG4gICAgaW1wb3J0IFZpZXdHcm91cCA9IGFuZHJvaWQudmlldy5WaWV3R3JvdXA7XG4gICAgaW1wb3J0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcblxuICAgIGltcG9ydCBQb2ludCA9IGFuZHJvaWQuZ3JhcGhpY3MuUG9pbnQ7XG4gICAgaW1wb3J0IE1lYXN1cmVTcGVjID0gYW5kcm9pZC52aWV3Lk1lYXN1cmVTcGVjO1xuICAgIGltcG9ydCBMYXlvdXRQYXJhbXMgPSBhbmRyb2lkLnZpZXcuTGF5b3V0UGFyYW1zO1xuICAgIGltcG9ydCBNb3Rpb25FdmVudCA9IGFuZHJvaWQudmlldy5ldmVudC5Nb3Rpb25FdmVudDtcbiAgICBpbXBvcnQgQW5pbWF0aW9uID0gYW5kcm9pZC52aWV3LmFuaW1hdGlvbi5BbmltYXRpb247XG4gICAgaW1wb3J0IERldmljZSA9IGFuZHJvaWQuZGV2aWNlLkRldmljZTtcbiAgICBpbXBvcnQgUmVuZGVyVHlwZSA9IGFuZHJvaWQuZ3JhcGhpY3MuUmVuZGVyVHlwZTtcbiAgICBleHBvcnQgY2xhc3MgUm9vdFZpZXcgZXh0ZW5kcyBGcmFtZUxheW91dCB7XG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgICAgIHByaXZhdGUgdGhyb3R0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBwcml2YXRlIF93OiBudW1iZXI7XG4gICAgICAgIHByaXZhdGUgX2g6IG51bWJlcjtcbiAgICAgICAgcHJpdmF0ZSBfbDogbnVtYmVyO1xuICAgICAgICBwcml2YXRlIF90OiBudW1iZXI7XG4gICAgICAgIHByaXZhdGUgX3Jvb3RBbmlhbXRpb246IEFuaW1hdGlvbjtcbiAgICAgICAgc2V0SW5mbyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5fbCA9IGxlZnQ7XG4gICAgICAgICAgICB0aGlzLl90ID0gdG9wO1xuICAgICAgICAgICAgdGhpcy5fdyA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5faCA9IGhlaWdodDtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0UGFyYW1zLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmxheW91dFBhcmFtcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnBhZGRpbmcgPSBuZXcgUGFkZGluZygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBkaXNwYXRjaERyYXcoY2FudmFzOiBDYW52YXMpOiB2b2lkIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc3BhdGNoRHJhdyhjYW52YXMpO1xuICAgICAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmxheW91dEluZm8ub3V0dGVycmVjdDtcbiAgICAgICAgICAgIGNhbnZhcy5kcmF3UmVjdChyZWN0LnN0YXJ0UG9pbnQsIHJlY3QuZW5kUG9pbnQsIGZhbHNlLCB0aGlzLmJhY2tncm91bmQpO1xuICAgICAgICB9XG4gICAgICAgIG9uTGF5b3V0KGw6IG51bWJlciwgdDogbnVtYmVyLCByOiBudW1iZXIsIGI6IG51bWJlciwgY2FudmFzOiBDYW52YXMpOiB2b2lkIHtcbiAgICAgICAgICAgIHN1cGVyLm9uTGF5b3V0KGwsIHQsIHIsIGIsIGNhbnZhcyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIG9uaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uaW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmJlZ2luKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRHJhdyh0aGlzLl9jYW52YXMpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHJlcXVlc3RMYXlvdXQoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGg6IE1lYXN1cmVTcGVjID0gbmV3IE1lYXN1cmVTcGVjKHRoaXMuX3csIExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpO1xuICAgICAgICAgICAgdmFyIGhlaWdodDogTWVhc3VyZVNwZWMgPSBuZXcgTWVhc3VyZVNwZWModGhpcy5faCwgTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuYmVnaW4oKTtcbiAgICAgICAgICAgIHZhciBzaXplOiBTaXplID0gdGhpcy5vbk1lYXN1cmUod2lkdGgsIGhlaWdodCwgdGhpcy5fY2FudmFzKTtcbiAgICAgICAgICAgIHRoaXMub25MYXlvdXQodGhpcy5fbCwgdGhpcy5fdCwgdGhpcy5fbCArIHNpemUud2lkdGgsIHRoaXMuX3QgKyBzaXplLmhlaWdodCwgdGhpcy5fY2FudmFzKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5lbmQoKTtcbiAgICAgICAgICAgIHRoaXMub25pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgfVxuICAgICAgICBnZXQgbGVmdCgpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2w7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Q7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdztcbiAgICAgICAgfVxuICAgICAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faDtcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgc3RhcnRBbmltYXRpb24oYW5pbWF0aW9uOiBBbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dCh0aGlzLl9zdGFydEFuaW1hdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHByaXZhdGUgX3N0YXJ0QW5pbWF0aW9uKCk6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvb3RBbmlhbXRpb24gIT0gbnVsbCAmJiAhdGhpcy5fcm9vdEFuaWFtdGlvbi5pc0FuaWFtdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yb290QW5pYW10aW9uLmR1cmF0aW9uICsgdGhpcy5fcm9vdEFuaWFtdGlvbi5zdGFydCA8IHRoaXMuYW5pbWF0aW9uLmR1cmF0aW9uICsgdGhpcy5hbmltYXRpb24uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9vdEFuaWFtdGlvbi5kdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uLnN0YXJ0ICsgdGhpcy5hbmltYXRpb24uZHVyYXRpb24gLSB0aGlzLl9yb290QW5pYW10aW9uLnN0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdEFuaWFtdGlvbiA9IHRoaXMuYW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT09PT0gPj4+Pj4gIFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHByaXZhdGUgX2FuaW1hdGUoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9hbmltYXRpbmcgPT09PT09PT09ID5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm9vdEFuaWFtdGlvbiAhPSBudWxsICYmICF0aGlzLl9yb290QW5pYW10aW9uLmlzQW5pYW10aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlcXVlc3RBbmltYXRpb25GcmFtZSBcIiArIHRoaXMuX3Jvb3RBbmlhbXRpb24uaXNBbmlhbXRpb25FbmQgKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IFwiKyB0aGlzLl9yb290QW5pYW10aW9uLnN0YXJ0ICtcIiAsIGR1cmF0aW9uIFwiICsgdGhpcy5fcm9vdEFuaWFtdGlvbi5kdXJhdGlvbiArXCIgLCBub3cgXCIrRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290QW5pYW10aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRhdGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGFkZFZpZXcodmlldzogVmlldywgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICBzdXBlci5hZGRWaWV3KHZpZXcsIGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBhdHRhY2hSZW5kZXIocjogQ2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSByO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0YWNoRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgcmVuZGVyVHlwZTogUmVuZGVyVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuXG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25hcmlhcmVxdWVzdCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9uY29tbWFuZCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9uZ290cG9pbnRlcmNhcHR1cmUgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbmxvc3Rwb2ludGVyY2FwdHVyZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNnZXN0dXJlY2hhbmdlID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25tc2dlc3R1cmVkb3VibGV0YXAgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbm1zZ2VzdHVyZWVuZCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNnZXN0dXJlaG9sZCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNnZXN0dXJlc3RhcnQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbm1zZ2VzdHVyZXRhcCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNnb3Rwb2ludGVyY2FwdHVyZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNpbmVydGlhc3RhcnQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbm1zbG9zdHBvaW50ZXJjYXB0dXJlID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25tc3BvaW50ZXJjYW5jZWwgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbm1zcG9pbnRlcmRvd24gPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbm1zcG9pbnRlcmVudGVyID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25tc3BvaW50ZXJsZWF2ZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNwb2ludGVybW92ZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNwb2ludGVyb3V0ID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25tc3BvaW50ZXJvdmVyID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25tc3BvaW50ZXJ1cCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ud2FpdGluZyA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9udm9sdW1lY2hhbmdlID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub250aW1ldXBkYXRlID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25zdXNwZW5kID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25zdWJtaXQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbnN0YWxsZWQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbnNlbGVjdHN0YXJ0ID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25zZWxlY3QgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbnNlZWtpbmcgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbnNlZWtlZCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9uc2Nyb2xsID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25yZXNldCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ucmF0ZWNoYW5nZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ucHJvZ3Jlc3MgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbnBsYXlpbmcgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbnBsYXkgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbnBhdXNlID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQub25wYXN0ZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50Lm9ubXNtYW5pcHVsYXRpb25zdGF0ZWNoYW5nZWQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5vbm1zY29udGVudHpvb20gPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbnRvdWNoc3RhcnQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbnRvdWNobW92ZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9udG91Y2hlbmQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbnRvdWNoY2FuY2VsID0gdGhpcy5vbnRvdWNoLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub25tb3VzZWRvd24gPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbm1vdXNlbW92ZSA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9ubW91c2V1cCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9ubW91c2VvdXQgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbm1vdXNlb3ZlciA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uY2xpY2sgPSB0aGlzLm9udG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbnNjcm9sbCA9IHRoaXMub250b3VjaC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmxheW91dFBhcmFtcy53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmxheW91dFBhcmFtcy5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIERldmljZS53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBEZXZpY2UuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFJlbmRlcihuZXcgQ2FudmFzKGVsZW1lbnQsIHJlbmRlclR5cGUpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5mbygwLCAwLCBlbGVtZW50LmNsaWVudFdpZHRoLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIG9udG91Y2goZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgICAgIGxldCBtZXZlbnQ6IE1vdGlvbkV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KDAsIDAsIDApO1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoc3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBtZXZlbnQgPSBuZXcgTW90aW9uRXZlbnQoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSwgTW90aW9uRXZlbnQuQUNUSU9OX1VQKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoY2FuY2VsXCI6XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudCA9IG5ldyBNb3Rpb25FdmVudChldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fQ0FOQ0VMKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICBtZXZlbnQgPSBuZXcgTW90aW9uRXZlbnQoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFksIE1vdGlvbkV2ZW50LkFDVElPTl9NT1ZFKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFksIE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9ET1dOKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFksIE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9NT1ZFKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudCA9IG5ldyBNb3Rpb25FdmVudChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfVVApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudCA9IG5ldyBNb3Rpb25FdmVudChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfT1VUKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFksIE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9PVkVSKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgICAgICBtZXZlbnQgPSBuZXcgTW90aW9uRXZlbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSwgTW90aW9uRXZlbnQuQUNUSU9OX0NMSUNLKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LmNsaWVudFgsZXZlbnQuY2xpZW50WSxNb3Rpb25FdmVudC5BQ1RJT05fU0NST0xMKTtcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNld2hlZWwnOlxuICAgICAgICAgICAgICAgICAgICBtZXZlbnQgPSBuZXcgTW90aW9uRXZlbnQoZXZlbnQuY2xpZW50WCxldmVudC5jbGllbnRZLE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9XSEVFTCk7XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudC5kZWx0YVggPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudC5kZWx0YVkgPSBldmVudC5kZWx0YVk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWV2ZW50LmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBtZXZlbnQueCA9IG1ldmVudC54IC0gZWxlbWVudHJlY3QubGVmdDtcbiAgICAgICAgICAgIG1ldmVudC55ID0gbWV2ZW50LnkgLSBlbGVtZW50cmVjdC50b3A7XG4gICAgICAgICAgICAvLyBpZih0aGlzLnRocm90dGxlICE9IG51bGwpe1xuICAgICAgICAgICAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnRocm90dGxlKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIHRoaXMudGhyb3R0bGUgPVxuXG4gICAgICAgICAgICAvLyBpZiAodGhpcy50aHJvdHRsZSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudGhyb3R0bGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kRXZlbnQobWV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50aHJvdHRsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyB9LCAxMCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB0aGlzLnNlbmRFdmVudChtZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBzZW5kRXZlbnQoZXZlbnQ6IE1vdGlvbkV2ZW50KSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5hY3Rpb24gPj0gTW90aW9uRXZlbnQuQUNUSU9OX01PVVNFX0RPV04pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoTW91c2VFdmVudChldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hUb3VjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiQWN0aXZpdHkudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3dpZGdldC9Sb290Vmlldy50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZGV2aWNlL0RldmljZS50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdmlldy9ldmVudC9Nb3Rpb25FdmVudC50c1wiIC8+XG5cblxubmFtZXNwYWNlIGFuZHJvaWQuYXBwIHtcbiAgICBpbXBvcnQgUGFkZGluZyA9IGFuZHJvaWQuZ3JhcGhpY3MuUGFkZGluZztcbiAgICBpbXBvcnQgR3Jhdml0eSA9IGFuZHJvaWQuZ3JhcGhpY3MuR3Jhdml0eTtcbiAgICBpbXBvcnQgUmVjdCA9IGFuZHJvaWQuZ3JhcGhpY3MuUmVjdDtcbiAgICBpbXBvcnQgQWxpZ25FbG1lbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduRWxtZW50O1xuICAgIGltcG9ydCBNYXJnaW4gPSBhbmRyb2lkLmdyYXBoaWNzLk1hcmdpbjtcbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgQ2FudmFzID0gYW5kcm9pZC5ncmFwaGljcy5DYW52YXM7XG4gICAgaW1wb3J0IFZpZXdHcm91cCA9IGFuZHJvaWQudmlldy5WaWV3R3JvdXA7XG4gICAgaW1wb3J0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICBpbXBvcnQgUG9pbnQgPSBhbmRyb2lkLmdyYXBoaWNzLlBvaW50O1xuICAgIGltcG9ydCBNZWFzdXJlU3BlYyA9IGFuZHJvaWQudmlldy5NZWFzdXJlU3BlYztcbiAgICBpbXBvcnQgT3JpZW50YXRpb24gPSBhbmRyb2lkLmdyYXBoaWNzLk9yaWVudGF0aW9uO1xuICAgIGltcG9ydCBMYXlvdXRQYXJhbXMgPSBhbmRyb2lkLnZpZXcuTGF5b3V0UGFyYW1zO1xuICAgIGltcG9ydCBSZW5kZXJUeXBlID0gYW5kcm9pZC5ncmFwaGljcy5SZW5kZXJUeXBlO1xuICAgIGltcG9ydCBSb290VmlldyA9IGFuZHJvaWQud2lkZ2V0LlJvb3RWaWV3O1xuICAgIGltcG9ydCBMaW5lYXJMYXlvdXQgPSBhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQ7XG4gICAgaW1wb3J0IEZyYW1lTGF5b3V0ID0gYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQ7XG4gICAgaW1wb3J0IERldmljZSA9IGFuZHJvaWQuZGV2aWNlLkRldmljZTtcbiAgICBpbXBvcnQgTW90aW9uRXZlbnQgPSBhbmRyb2lkLnZpZXcuZXZlbnQuTW90aW9uRXZlbnQ7XG5cbiAgICBleHBvcnQgY2xhc3MgQWN0aXZpdHlNYW5hZ2VyIHtcbiAgICAgICAgcHJpdmF0ZSBzdGFjazogQWN0aXZpdHlbXSA9IG5ldyBBcnJheSgpO1xuICAgICAgICBwcml2YXRlIHJvb3RWaWV3OiBSb290VmlldztcblxuICAgICAgICBjb25zdHJ1Y3RvcihyZW5kZXJ0eXBlOlJlbmRlclR5cGUsZWxlbWVudDpIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yb290VmlldyA9IG5ldyBSb290VmlldyhudWxsKTsvLyBuZWVkIHRvIGJlIGFwcGxpY2F0aW9uIGNvbnRleHRcbiAgICAgICAgICAgIC8vIHRoaXMucm9vdFZpZXcuYXR0YWNoUmVuZGVyKGNhbnZhcyk7XG4gICAgICAgICAgICB0aGlzLnJvb3RWaWV3LmF0dGFjaEVsZW1lbnQoZWxlbWVudCxyZW5kZXJ0eXBlKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgcHVibGljIHNlbmRTdGFydEFjdGl2aXR5KGludGVudDogSW50ZW50LGJ1bmRsZTogQnVuZGxlLCByZXF1ZXN0Q29kZTogbnVtYmVyLCByZXN1bHRDb2RlOm51bWJlcikge1xuICAgICAgICAgICAgdmFyIHRhcmdldEFjdGl2aXR5ID0gdGhpcy5jcmVhdGVBY3Rpdml0eShpbnRlbnQuZ2V0Q2xhc3MoKSk7XG4gICAgICAgICAgICB2YXIgY3VycmVudEFjdGl2aXR5OiBBY3Rpdml0eSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aXZpdHkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZpdHlbJ29uUGF1c2UnXS5jYWxsKGN1cnJlbnRBY3Rpdml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvb3RWaWV3LnJlbW92ZUFsbFZpZXdzKCk7XG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2godGFyZ2V0QWN0aXZpdHkpO1xuICAgICAgICAgICAgdGFyZ2V0QWN0aXZpdHlbJ2F0dGF0Y2hSb290VmlldyddLmNhbGwodGFyZ2V0QWN0aXZpdHksIHRoaXMucm9vdFZpZXcpO1xuICAgICAgICAgICAgdGFyZ2V0QWN0aXZpdHlbJ29uUmVzdW1lJ10uY2FsbCh0YXJnZXRBY3Rpdml0eSk7XG4gICAgICAgICAgICAvLyBUTyBETyAuLi4gIGxhbmNoIG1vZGVcbiAgICAgICAgICAgIHRhcmdldEFjdGl2aXR5WydvbkNyZWF0ZSddLmNhbGwodGFyZ2V0QWN0aXZpdHksYnVuZGxlKTtcbiAgICAgICAgICAgIC8vIHRoaXMucm9vdFZpZXcuYmFja2dyb3VuZCA9J3doaXRlJztcbiAgICAgICAgICAgIHRoaXMucm9vdFZpZXcuaW52YWxpZGF0ZSh0cnVlKTtcblxuICAgICAgICB9XG4gICAgICAgIHByaXZhdGUgY3JlYXRlQWN0aXZpdHkoYWN0aXZpdHlDbGFzczogYW55KTogQWN0aXZpdHkge1xuICAgICAgICAgICAgdmFyIGFjdGl2aXR5OiBBY3Rpdml0eSA9IG5ldyBhY3Rpdml0eUNsYXNzKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBnZXRDdXJyZW50QWN0aXZpdHkoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoLTFdO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2FwcC9JbnRlbnQudHNcIiAvPlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZ3JhcGhpY3MvQ2FudmFzLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2FwcC9BY3Rpdml0eU1hbmFnZXIudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdXRpbC9Mb2cudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdmlldy9ldmVudC9Nb3Rpb25FdmVudC50c1wiIC8+XG5cblxubmFtZXNwYWNlIGFuZHJvaWQge1xuICAgIGltcG9ydCBBY3Rpdml0eU1hbmFnZXIgPSBhbmRyb2lkLmFwcC5BY3Rpdml0eU1hbmFnZXI7XG4gICAgaW1wb3J0IENhbnZhcyA9IGFuZHJvaWQuZ3JhcGhpY3MuQ2FudmFzO1xuICAgIGltcG9ydCBSZW5kZXJUeXBlID0gYW5kcm9pZC5ncmFwaGljcy5SZW5kZXJUeXBlO1xuICAgIGltcG9ydCBJbnRlbnQgPSBhbmRyb2lkLmFwcC5JbnRlbnQ7XG4gICAgaW1wb3J0IExvZyA9IGFuZHJvaWQudXRpbC5Mb2c7XG4gICAgaW1wb3J0IERldmljZSA9IGFuZHJvaWQuZGV2aWNlLkRldmljZTtcbiAgICBpbXBvcnQgTW90aW9uRXZlbnQgPSBhbmRyb2lkLnZpZXcuZXZlbnQuTW90aW9uRXZlbnQ7XG4gICAgaW1wb3J0IEJ1bmRsZSA9IGFuZHJvaWQuYXBwLkJ1bmRsZTtcbiAgICBpbXBvcnQgQWN0aXZpdHkgPSBhbmRyb2lkLmFwcC5BY3Rpdml0eTtcbiAgICBleHBvcnQgY2xhc3MgU3RhcnRVcCB7XG4gICAgICAgIHByaXZhdGUgYWN0aXZpdHlNYW5hZ2VyOiBBY3Rpdml0eU1hbmFnZXI7XG4gICAgICAgIHByaXZhdGUgY2FudmFzOiBDYW52YXM7XG4gICAgICAgIHByaXZhdGUgY29uZmlnOiBhbnk7XG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ29uZmlnKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmdldFJvb3RFbGVtZW50KCkpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RmlsbCgpID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgICAgIERldmljZS53aWR0aCA9IHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICBEZXZpY2UuaGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0eXBlOlJlbmRlclR5cGUgPSBSZW5kZXJUeXBlLkNhbnZhcztcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFJlbmRlclR5cGUoKSA9PSAnY2FudmFzJykge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBSZW5kZXJUeXBlLkNhbnZhcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IFJlbmRlclR5cGUuU3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eU1hbmFnZXIgPSBuZXcgQWN0aXZpdHlNYW5hZ2VyKHR5cGUsdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcHJpdmF0ZSBvbnRvdWNoKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgICAgICBsZXQgbWV2ZW50OiBNb3Rpb25FdmVudCA9IG5ldyBNb3Rpb25FdmVudCgwLCAwLCAwKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0cj0gXCJUb3VjaCBzdGFydGVkIChcIiArIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCArIFwiLFwiICsgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudCA9IG5ldyBNb3Rpb25FdmVudChldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSwgTW90aW9uRXZlbnQuQUNUSU9OX0RPV04pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksIE1vdGlvbkV2ZW50LkFDVElPTl9VUCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGNhbmNlbFwiOlxuICAgICAgICAgICAgICAgICAgICBtZXZlbnQgPSBuZXcgTW90aW9uRXZlbnQoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSwgTW90aW9uRXZlbnQuQUNUSU9OX0NBTkNFTCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fTU9WRSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudCA9IG5ldyBNb3Rpb25FdmVudChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNlbW92ZSc6XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudCA9IG5ldyBNb3Rpb25FdmVudChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfTU9WRSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgICAgICAgICAgICBtZXZlbnQgPSBuZXcgTW90aW9uRXZlbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSwgTW90aW9uRXZlbnQuQUNUSU9OX01PVVNFX1VQKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW91c2VvdXQnOlxuICAgICAgICAgICAgICAgICAgICBtZXZlbnQgPSBuZXcgTW90aW9uRXZlbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSwgTW90aW9uRXZlbnQuQUNUSU9OX01PVVNFX09VVCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgICAgICAgICAgICAgIG1ldmVudCA9IG5ldyBNb3Rpb25FdmVudChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZLCBNb3Rpb25FdmVudC5BQ1RJT05fTU9VU0VfT1ZFUik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgICAgICAgICAgbWV2ZW50ID0gbmV3IE1vdGlvbkV2ZW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFksTW90aW9uRXZlbnQuQUNUSU9OX0NMSUNLKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldmVudC5lbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRyZWN0ID0gdGhpcy5lbGVtZW50LmdldENsaWVudFJlY3RzKCk7XG4gICAgICAgICAgICBtZXZlbnQueCA9IG1ldmVudC54IC0gZWxlbWVudHJlY3RbMF0ubGVmdDtcbiAgICAgICAgICAgIG1ldmVudC55ID0gbWV2ZW50LnkgLSBlbGVtZW50cmVjdFswXS50b3A7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICAgICAgdmFyIGludGVudDogSW50ZW50ID0gbmV3IEludGVudCgpO1xuICAgICAgICAgICAgaW50ZW50LnNldENsYXNzKG51bGwsIHRoaXMuZ2V0TGF1bmNoQWN0aXZpdHkoKSk7XG4gICAgICAgICAgICB2YXIgYnVuZGxlID0gbmV3IGFuZHJvaWQuYXBwLkJ1bmRsZSgpO1xuICAgICAgICAgICAgYnVuZGxlLnB1dERlZmF1bHQodGhpcy5nZXRMYXVuY2hQYXJhbXMoKSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5TWFuYWdlci5zZW5kU3RhcnRBY3Rpdml0eShpbnRlbnQsIGJ1bmRsZSwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJpdmF0ZSBnZXRMYXVuY2hBY3Rpdml0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5sYXVuY2hBY3Rpdml0eS50YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcHJpdmF0ZSBnZXRMYXVuY2hQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcubGF1bmNoQWN0aXZpdHkucGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIHByaXZhdGUgZ2V0Um9vdEVsZW1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucm9vdGNvbnRhaW5lci50YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcHJpdmF0ZSBnZXRSZW5kZXJUeXBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnJlbmRlcnR5cGUgPyB0aGlzLmNvbmZpZy5yZW5kZXJ0eXBlLnRhcmdldCA6ICdzdmcnO1xuICAgICAgICB9XG4gICAgICAgIHByaXZhdGUgZ2V0RmlsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWxsO1xuICAgICAgICB9XG4gICAgICAgIHByaXZhdGUgbG9hZENvbmZpZygpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gd2luZG93WydtYWluZmVzdCddLmNvbmZpZztcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgZ2V0Q3VycmVudEFjdGl2aXR5KCk6QWN0aXZpdHl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3Rpdml0eU1hbmFnZXIuZ2V0Q3VycmVudEFjdGl2aXR5KCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuIiwibmFtZXNwYWNlIGFuZHJvaWQuZGF0YWJhc2Uge1xuXG4gICAgZXhwb3J0ICBjbGFzcyBEYXRhU2V0T2JzZXJ2ZXIge1xuXG4gICAgICAgIHB1YmxpYyBvbkNoYW5nZWQoKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgb25JbnZhbGlkYXRlZCgpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiRGF0YVNldE9ic2VydmVyLnRzXCIgLz5cblxubmFtZXNwYWNlIGFuZHJvaWQuZGF0YWJhc2Uge1xuICAgIGV4cG9ydCAgY2xhc3MgT2JzZXJ2YWJsZTxUPntcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1PYnNlcnZlcnM6IEFycmF5PFQ+ID0gbmV3IEFycmF5PFQ+KCk7XG4gICAgICAgIHB1YmxpYyByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBUKTogdm9pZCB7XG4gICAgICAgICAgICBpZiAoIW9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJUaGUgb2JzZXJ2ZXIgaXMgbnVsbCBvciB1bmRlZmluZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubU9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJPYnNlcnZlciBcIiArIG9ic2VydmVyICsgXCIgaXMgYWxyZWFkeSByZWdpc3RlcmVkIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tT2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyB1bnJlZ2lzdGVyT2JzZXJ2ZXIob2JzZXJ2ZXI6IFQpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmICghb2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIlRoZSBvYnNlcnZlciBpcyBudWxsIG9yIHVuZGVmaW5lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMubU9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIk9ic2VydmVyIFwiICsgb2JzZXJ2ZXIgKyBcIiB3YXMgbm90IHJlZ2lzdGVyZWQgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1PYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgdW5yZWdpc3RlckFsbCgpIHtcbiAgICAgICAgICAgIHRoaXMubU9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBEYXRhU2V0T2JzZXJ2YWJsZSBleHRlbmRzIE9ic2VydmFibGU8RGF0YVNldE9ic2VydmVyPntcbiAgICAgICAgcHVibGljIG5vdGlmeUNoYW5nZWQoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB0aGlzLm1PYnNlcnZlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1PYnNlcnZlcnNbaV0ub25DaGFuZ2VkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBub3RpZnlJbnZhbGlkYXRlZCgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMubU9ic2VydmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHRoaXMubU9ic2VydmVyc1tpXS5vbkludmFsaWRhdGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZGF0YWJhc2UvRGF0YVNldE9ic2VydmFibGUudHNcIiAvPlxuXG5uYW1lc3BhY2UgYW5kcm9pZC5hZGFwdGVyIHtcbiAgICBpbXBvcnQgRGF0YVNldE9ic2VydmFibGUgPSBhbmRyb2lkLmRhdGFiYXNlLkRhdGFTZXRPYnNlcnZhYmxlO1xuICAgIGltcG9ydCBEYXRhU2V0T2JzZXJ2ZXIgPSBhbmRyb2lkLmRhdGFiYXNlLkRhdGFTZXRPYnNlcnZlcjtcbiAgICBpbXBvcnQgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgIGV4cG9ydCAgY2xhc3MgQWRhcHRlciB7XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9kYXRhYmFzZS9EYXRhU2V0T2JzZXJ2YWJsZS50c1wiIC8+XG5cbm5hbWVzcGFjZSBhbmRyb2lkLmFkYXB0ZXIge1xuICAgIGltcG9ydCBEYXRhU2V0T2JzZXJ2YWJsZSAgPSBhbmRyb2lkLmRhdGFiYXNlLkRhdGFTZXRPYnNlcnZhYmxlO1xuICAgIGltcG9ydCBEYXRhU2V0T2JzZXJ2ZXIgPSBhbmRyb2lkLmRhdGFiYXNlLkRhdGFTZXRPYnNlcnZlcjtcbiAgICBpbXBvcnQgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWaWV3UGFnZUFkYXB0ZXIge1xuICAgIHByaXZhdGUgbURhdGFTZXRPYnNlcnZhYmxlIDpEYXRhU2V0T2JzZXJ2YWJsZSA9bmV3IERhdGFTZXRPYnNlcnZhYmxlKCk7XG5cdHByaXZhdGUgbVZpZXdDYWNoZSA6QXJyYXk8Vmlld0luZm8+ICA9IG5ldyBBcnJheTxWaWV3SW5mbz4oKTtcblx0cHJpdmF0ZSAgbVNob3VsZENhY2hlIDpib29sZWFuPSBmYWxzZTtcblxuXHRwdWJsaWMgWEJhc2VBZGFwdGVyKCkge1xuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogZG9uJ3QgdXNlIHRoaXMgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0IHJlZ2lzdGVyRGF0YVNldE9ic2VydmVyKG9ic2VydmVyOkRhdGFTZXRPYnNlcnZlciApIHtcblx0XHR0aGlzLm1EYXRhU2V0T2JzZXJ2YWJsZS5yZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyKTtcblx0fVxuXG5cdCB1bnJlZ2lzdGVyRGF0YVNldE9ic2VydmVyKG9ic2VydmVyOkRhdGFTZXRPYnNlcnZlciApIHtcblx0XHR0aGlzLm1EYXRhU2V0T2JzZXJ2YWJsZS51bnJlZ2lzdGVyT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0cHVibGljIG5vdGlmeURhdGFTZXRDaGFuZ2VkKCkge1xuXHRcdHRoaXMubURhdGFTZXRPYnNlcnZhYmxlLm5vdGlmeUNoYW5nZWQoKTtcblx0fVxuXHRcblx0cHVibGljICBub3RpZnlEYXRhU2V0SW52YWxpZGF0ZWQoKSB7XG5cdFx0dGhpcy5tRGF0YVNldE9ic2VydmFibGUubm90aWZ5SW52YWxpZGF0ZWQoKTtcblx0fVxuXHQvKioqXG5cdCAqIHNldCBjYWNoZVxuXHQgKiBcblx0ICogQHBhcmFtIGVuYWJsZVxuXHQgKi9cblx0cHVibGljICBzZXRDYWNoZUVuYWJsZSggZW5hYmxlOmJvb2xlYW4pIHtcblx0XHR0aGlzLm1TaG91bGRDYWNoZSA9IGVuYWJsZTtcblx0XHRpZiAoIXRoaXMubVNob3VsZENhY2hlKSB7XG5cdFx0XHR0aGlzLm1WaWV3Q2FjaGUubGVuZ3RoID0wO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhYnN0cmFjdCAgZ2V0Q291bnQoKTpudW1iZXI7XG5cblxuXHRwdWJsaWMgYWJzdHJhY3QgIGdldEl0ZW0oIHBvc2l0aW9uOm51bWJlcik6YW55O1xuXG5cdHB1YmxpYyBhYnN0cmFjdCAgZGVzdG9yeUl0ZW0ocG9zaXRpb246bnVtYmVyLCAgY29udGFpbmVyOlZpZXcpO1xuXG5cdHB1YmxpYyBhYnN0cmFjdCAgaW5zdGFudGlhdGVJdGVtKCBwb3NpdGlvbjpudW1iZXIsXG5cdFx0XHRjb250YWluZXI6VmlldywgY29udGVudFZpZXc6Vmlldyk6VmlldztcblxuXHQgaW5pdEl0ZW0ocG9zaXRpb246bnVtYmVyLCAgY29udGFpbmVyOlZpZXcpOlZpZXcge1xuXHRcdGxldCB2aWV3OlZpZXcgPSBudWxsO1xuXHRcdGlmICh0aGlzLm1TaG91bGRDYWNoZSkge1xuXHRcdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5tVmlld0NhY2hlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZm86Vmlld0luZm8gID0gdGhpcy5tVmlld0NhY2hlW2ldO1xuXHRcdFx0XHRpZiAoaW5mbyAhPSBudWxsICYmIGluZm8ucG9zaXRpb24gPT0gcG9zaXRpb24pIHtcblx0XHRcdFx0XHR2aWV3ID0gaW5mby52aWV3O1xuXHRcdFx0XHRcdGlmICh2aWV3ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmluc3RhbnRpYXRlSXRlbShwb3NpdGlvbiwgY29udGFpbmVyLCB2aWV3KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh2aWV3ID09IG51bGwpIHtcblx0XHRcdFx0dmlldyA9IHRoaXMuaW5zdGFudGlhdGVJdGVtKHBvc2l0aW9uLCBjb250YWluZXIsIG51bGwpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5tVmlld0NhY2hlLnB1c2gobmV3IFZpZXdJbmZvKHZpZXcsIHBvc2l0aW9uKSk7XG5cdFx0fVxuXHRcdGlmICh2aWV3ID09IG51bGwpIHtcblx0XHRcdHZpZXcgPSB0aGlzLmluc3RhbnRpYXRlSXRlbShwb3NpdGlvbiwgY29udGFpbmVyLCBudWxsKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZpZXc7XG5cdH1cblx0LyoqXG5cdCAqIHVudXNlZnVsIG1ldGhvZHMgY3VycmVudGx5XG5cdCAqL1xuXG5cdHB1YmxpYyAgIGJlZ2luVXBkYXRhKCl7fVxuXG5cdC8qKlxuXHQgKiB1bnVzZWZ1bCBtZXRob2RzIGN1cnJlbnRseVxuXHQgKi9cblxuXHRwdWJsaWMgICBmaW5pc2hVcGRhdGEoKXt9XG5cblx0XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBWaWV3SW5mbyB7XG5cdFx0dmlldzpWaWV3O1xuXHRcdHBvc2l0aW9uOm51bWJlcjtcblxuXHRcdGNvbnN0cnVjdG9yKCB2OlZpZXcsICBwb3M6bnVtYmVyKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSB2O1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IHBvcztcblx0XHR9XG5cdH1cbn0iLCJuYW1lc3BhY2UgYW5kcm9pZC5hcHB7XG4gICAgZXhwb3J0IGNsYXNzIEJ1bmRsZXtcbiAgICAgICAgcHJpdmF0ZSBtYXA6YW55ID0ge307XG4gICAgICAgIHB1YmxpYyBwdXQoa2V5OnN0cmluZyx2YWx1ZTphbnkpe1xuICAgICAgICAgICAgdGhpcy5tYXBba2V5XT0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIHB1dERlZmF1bHQodmFsdWU6YW55KXtcbiAgICAgICAgICAgIHRoaXMubWFwWydkZWZhdWx0J109dmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIGdldERlZmF1bHQoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcFsnZGVmYXVsdCddO1xuICAgICAgICB9XG4gICAgfVxufSIsIm5hbWVzcGFjZSBhbmRyb2lke1xuICAgIGV4cG9ydCBjbGFzcyBEZWJ1Z3tcbiAgICAgICAgc3RhdGljIGFzc2VydChmbGc6Ym9vbGVhbj1mYWxzZSxsb2c/OnN0cmluZyl7XG4gICAgICAgICAgICBpZighZmxnKXtcbiAgICAgICAgICAgICAgICBsZXQgZXJyOkVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbG9nK1wiXFxuXCIrZXJyLnN0YWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBsb2cobG9nOmFueSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgICAgICB9XG4gICAgfVxufSIsIm5hbWVzcGFjZSBhbmRyb2lkLmdyYXBoaWNzIHtcbiAgICBleHBvcnQgZW51bSBBbGlnbiB7XG4gICAgICAgIExFRlQgPSAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgaXMgZHJhd24gY2VudGVyZWQgaG9yaXpvbnRhbGx5IG9uIHRoZSB4LHkgb3JpZ2luXG4gICAgICAgICAqL1xuICAgICAgICBDRU5URVIgPSAxLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgaXMgZHJhd24gdG8gdGhlIGxlZnQgb2YgdGhlIHgseSBvcmlnaW5cbiAgICAgICAgICovXG4gICAgICAgIFJJR0hUID0gMlxuXG4gICAgfVxufSIsIm5hbWVzcGFjZSBhbmRyb2lkLmdyYXBoaWNzIHtcblxuICAgICAgZXhwb3J0IGNsYXNzIEFsaWduRWxtZW50e1xuICAgICAgICBwb3NpdGlvbjpQb3NpdGlvbjtcbiAgICAgICAgZWxlbWVudDpFbGVtZW50O1xuICAgICAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjpQb3NpdGlvbixlbGVtZW50OkVsZW1lbnQpe1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9cG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlJlY3QudHNcIiAvPlxuXG5tb2R1bGUgYW5kcm9pZC5ncmFwaGljcyB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGltcG9ydCBSZWN0ID0gYW5kcm9pZC5ncmFwaGljcy5SZWN0O1xuICAgIGltcG9ydCBTaXplID0gYW5kcm9pZC5ncmFwaGljcy5TaXplO1xuICAgIGltcG9ydCBQb2ludCA9IGFuZHJvaWQuZ3JhcGhpY3MuUG9pbnQ7XG4gICAgaW1wb3J0IEZvbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkZvbnQ7XG4gICAgaW1wb3J0IFN0cm9rZVN0eWxlID0gYW5kcm9pZC5ncmFwaGljcy5TdHJva2VTdHlsZTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdG8gY2FudmFzLlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDYW52YXNSZW5kZXJFbmdpbmUge1xuXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgICAgICBwcml2YXRlIF9jYW52YXM6IGFueTtcbiAgICAgICAgcHJpdmF0ZSBfY2FudmFzMmQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgICAgICBwcml2YXRlIF9jbGlwUmVjdDogUmVjdDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGUoKTtcblxuICAgICAgICB9XG4gICAgICAgIGdldCBjYW52YXMoKTpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzMmQ7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2V0IGFscGhhKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmdsb2JhbEFscGhhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJSZWN0KGxlZnQ6bnVtYmVyLHRvcDpudW1iZXIsd2lkdGg6bnVtYmVyLGhlaWdodDpudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuY2xlYXJSZWN0KGxlZnQsdG9wLHdpZHRoLGhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBiZWdpblJlbmRlcigpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbmRSZW5kZXIoKSB7XG4gICAgICAgIH1cblxuICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuc2F2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdG9yZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldEltYWdlRGF0YShzeDogbnVtYmVyLCBzeTogbnVtYmVyLCBzdzogbnVtYmVyLCBzaDogbnVtYmVyKTogSW1hZ2VEYXRhIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYW52YXMyZC5nZXRJbWFnZURhdGEoc3gsIHN5LCBzdywgc2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHV0SW1hZ2VEYXRhKGltYWdlZGF0YTogSW1hZ2VEYXRhLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCBkaXJ0eVg/OiBudW1iZXIsIGRpcnR5WT86IG51bWJlciwgZGlydHlXaWR0aD86IG51bWJlciwgZGlydHlIZWlnaHQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnB1dEltYWdlRGF0YShpbWFnZWRhdGEsIGR4LCBkeSwgZGlydHlYLCBkaXJ0eVksIGRpcnR5V2lkdGgsIGRpcnR5SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaXAocmVjdDogUmVjdCkge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5yZWN0KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTs7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5jbGlwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRWaWV3cG9ydFNpemUodzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGxldCBfZGV2aWNlUGl4ZWxSYXRpbzogbnVtYmVyID0gMjtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHcgKiBfZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBoICogX2RldmljZVBpeGVsUmF0aW87XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyBcInB4XCI7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zY2FsZShfZGV2aWNlUGl4ZWxSYXRpbywgX2RldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0IGVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICAgICAgICB9XG5cblxuICAgICAgICBkcmF3RWxsaXBzZShjeDogbnVtYmVyLCBjeTogbnVtYmVyLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBzdHlsZT86IFN0eWxlKSB7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHByaXZhdGUgX2FwcGx5U3R5bGUoc3R5bGU6IFN0eWxlKSB7XG4gICAgICAgICAgICBpZiAoc3R5bGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZS5iYWNrZ3JvdW5kIGluc3RhbmNlb2YgR3JhZGllbnQpIHtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChzdHlsZS5iYWNrZ3JvdW5kKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5maWxsU3R5bGUgPSBzdHlsZS5iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBseVN0cm9rZVN0eWxlKHN0eWxlLnN0cm9rZVN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcml2YXRlIF9hcHBseVN0cm9rZVN0eWxlKHN0cm9rZVN0eWxlOiBTdHJva2VTdHlsZSkge1xuICAgICAgICAgICAgaWYgKHN0cm9rZVN0eWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlU3R5bGUuc3Ryb2tlQ29sb3IgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlLnN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlU3R5bGUuc3Ryb2tlV2lkdGggIT0gbnVsbCAmJiAhaXNOYU4oc3Ryb2tlU3R5bGUuc3Ryb2tlV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmxpbmVXaWR0aCA9IHN0cm9rZVN0eWxlLnN0cm9rZVdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlU3R5bGUuZGFzaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnNldExpbmVEYXNoKHN0cm9rZVN0eWxlLmRhc2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlU3R5bGUuZGFzaE9mZnNldCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmxpbmVEYXNoT2Zmc2V0ID0gc3Ryb2tlU3R5bGUuZGFzaE9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9hcHBseUZvbnQoZm9udDogRm9udCkge1xuICAgICAgICAgICAgaWYgKGZvbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChmb250LmZvbnRDb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZpbGxTdHlsZSA9IGZvbnQuZm9udENvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm9udC5mb250U2l6ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZvbnQgPSBmb250LmZvbnRTaXplICsgJ3B4ICc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb250LmZvbnRGYW1pbHkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5mb250ICs9IGZvbnQuZm9udEZhbWlseTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3UmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIHN0eWxlOiBTdHlsZSwgZmlsbDogYm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5fYXBwbHlTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZpbGxSZWN0KHgsIHksIHcsIGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc3R5bGUuc3Ryb2tlU3R5bGUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzMmQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgc3Ryb2tlc3R5bGU6IFN0cm9rZVN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLm1vdmVUbyh4MSwgeTEpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQubGluZVRvKHgyLCB5Mik7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zdHJva2VTdHlsZSA9IHN0cm9rZXN0eWxlLnN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQubGluZVdpZHRoID0gc3Ryb2tlc3R5bGUuc3Ryb2tlV2lkdGg7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdMaW5lcyh4czogbnVtYmVyW10sIHlzOiBudW1iZXJbXSwgc3Ryb2tlc3R5bGU6IFN0cm9rZVN0eWxlKSB7XG4gICAgICAgICAgICBpZiAoeHMgIT09IG51bGwgJiYgeXMgIT09IG51bGwgJiYgeHMubGVuZ3RoID09PSB5cy5sZW5ndGggJiYgeHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnNhdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBseVN0cm9rZVN0eWxlKHN0cm9rZXN0eWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5tb3ZlVG8oeHNbMF0sIHlzWzBdKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHhzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmxpbmVUbyh4c1tpXSwgeXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3UG9seWdvbih4czogbnVtYmVyW10sIHlzOiBudW1iZXJbXSwgc3R5bGU6IFN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLl9hcHBseVN0eWxlKHN0eWxlKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQubW92ZVRvKHhzWzBdLCB5c1swXSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHhzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQubGluZVRvKHhzW2ldLCB5c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZpbGwoKTtcbiAgICAgICAgICAgIGlmKHN0eWxlLnN0cm9rZVN0eWxlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1BpZShjeDogbnVtYmVyLCBjeTogbnVtYmVyLCByOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgc3dlZXBBbmdsZTogbnVtYmVyLCBzdHlsZTogU3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5tb3ZlVG8oY3gsIGN5KTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmFyYyhjeCwgY3ksIHIsIHN0YXJ0QW5nbGUsIHN0YXJ0QW5nbGUgKyBzd2VlcEFuZ2xlKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmxpbmVUbyhjeCwgY3kpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5yb3RhdGUoc3RhcnRBbmdsZSk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5yZXN0b3JlKCk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgZHJhd0RvbnV0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBpbm5lclJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIHN3ZWVwQW5nbGU6IG51bWJlciwgc3R5bGU6U3R5bGUpIHtcbiAgICAgICAgICAgIGxldCBlbmRBbmdsZTogbnVtYmVyID0gc3RhcnRBbmdsZSArIHN3ZWVwQW5nbGU7XG4gICAgICAgICAgICBsZXQgcDEgPSBuZXcgUG9pbnQoY3gsIGN5KTtcbiAgICAgICAgICAgIHAxLnggKz0gaW5uZXJSYWRpdXMgKiBNYXRoLmNvcyhzdGFydEFuZ2xlKTtcbiAgICAgICAgICAgIHAxLnkgKz0gaW5uZXJSYWRpdXMgKiBNYXRoLnNpbihzdGFydEFuZ2xlKTtcbiAgICAgICAgICAgIGxldCBwMiA9IG5ldyBQb2ludChjeCwgY3kpO1xuICAgICAgICAgICAgcDIueCArPSBpbm5lclJhZGl1cyAqIE1hdGguY29zKGVuZEFuZ2xlKTtcbiAgICAgICAgICAgIHAyLnkgKz0gaW5uZXJSYWRpdXMgKiBNYXRoLnNpbihlbmRBbmdsZSk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuYXJjKGN4LCBjeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQuYXJjKGN4LCBjeSwgaW5uZXJSYWRpdXMsIGVuZEFuZ2xlLCBzdGFydEFuZ2xlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdTdHJpbmcoczogc3RyaW5nLCBwdDogUG9pbnQsIGZvbnQ6IEZvbnQpIHtcbiAgICAgICAgICAgIC8vIGlmIChmb250KSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fY2FudmFzMmQuZm9udCA9IGZvbnQuZm9udFNpemUgKyAncHggJyArIGZvbnQuZm9udEZhbWlseTtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZ3JhZGllbnQgPSB0aGlzLl9jYW52YXMyZC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIDApO1xuICAgICAgICAgICAgLy8gICAgIGlmIChmb250LmZvbnRDb2xvcikge1xuICAgICAgICAgICAgLy8gICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMS4wLCBmb250LmZvbnRDb2xvcik7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5Rm9udChmb250KTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZpbGxUZXh0KHMsIHB0LngsIHB0LnkpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1N0cmluZ1JvdGF0ZWQoczogc3RyaW5nLCBwdDogUG9pbnQsIGNlbnRlcjogUG9pbnQsIGFuZ2xlOiBudW1iZXIsIGZvbnQ6IEZvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnRleHRCYXNlbGluZSA9ICdib3R0b20nO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQudHJhbnNsYXRlKGNlbnRlci54LCBjZW50ZXIueSk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5yb3RhdGUoTWF0aC5QSSAvIDE4MCAqIGFuZ2xlKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnRyYW5zbGF0ZSgtY2VudGVyLngsIC1jZW50ZXIueSk7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvbnQoZm9udCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5maWxsVGV4dChzLCBwdC54LCBwdC55KTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lYXN1cmVTdHJpbmcoczogc3RyaW5nLCBmb250OiBGb250LCBtYXhTaXplOiBudW1iZXIgPSAwKTogU2l6ZSB7XG4gICAgICAgICAgICB2YXIgc3ogPSBuZXcgU2l6ZSgwLCAwKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkLmZvbnQgPSBmb250LmZvbnRTaXplICsgXCJweFwiICsgXCIgXCIgKyBmb250LmZvbnRGYW1pbHk7XG4gICAgICAgICAgICB2YXIgdG06IFRleHRNZXRyaWNzID0gdGhpcy5fY2FudmFzMmQubWVhc3VyZVRleHQocyk7XG4gICAgICAgICAgICBzei53aWR0aCA9IHRtLndpZHRoO1xuICAgICAgICAgICAgc3ouaGVpZ2h0ID0gZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiBzejtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdJbWFnZShpbWFnZTogYW55LCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9jcmVhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhczJkID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZShzeDogbnVtYmVyLCBzeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5zY2FsZShzeCwgc3kpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm90YXRlKGRlZ3JlZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMyZC5yb3RhdGUoZGVncmVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzMmQudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJSZWN0LnRzXCIgLz5cblxubW9kdWxlIGFuZHJvaWQuZ3JhcGhpY3Mge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpbXBvcnQgUmVjdCA9IGFuZHJvaWQuZ3JhcGhpY3MuUmVjdDtcbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgUG9pbnQgPSBhbmRyb2lkLmdyYXBoaWNzLlBvaW50O1xuICAgIGltcG9ydCBGb250ID0gYW5kcm9pZC5ncmFwaGljcy5Gb250O1xuICAgIGltcG9ydCBTdHJva2VTdHlsZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU3Ryb2tlU3R5bGU7XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRvIHN2Zy5cbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgU3ZnUmVuZGVyRW5naW5lIHtcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3ZnTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgICAgICBwcml2YXRlIF9zdmc6IEVsZW1lbnQ7XG4gICAgICAgIHByaXZhdGUgX3RleHQ6IFNWR1RleHRFbGVtZW50O1xuICAgICAgICBwcml2YXRlIF90ZXh0R3JvdXA6IFNWR0dFbGVtZW50O1xuICAgICAgICBwcml2YXRlIF9kZWZzOiBTVkdEZWZzRWxlbWVudDtcblxuICAgICAgICAvLyBcbiAgICAgICAgcHJpdmF0ZSBfZmlsbDogc3RyaW5nO1xuICAgICAgICBwcml2YXRlIF9zdHJva2U6IHN0cmluZztcbiAgICAgICAgcHJpdmF0ZSBfdGV4dEZpbGw6IHN0cmluZztcblxuICAgICAgICBwcml2YXRlIF9zdHJva2VXaWR0aDogbnVtYmVyID0gMTtcblxuICAgICAgICBwcml2YXRlIF9mb250U2l6ZTogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgcHJpdmF0ZSBfZm9udEZhbWlseTogc3RyaW5nID0gbnVsbDtcblxuICAgICAgICBwcml2YXRlIF9ncm91cDogRWxlbWVudDtcbiAgICAgICAgcHJpdmF0ZSBfY2xpcFJlY3Q6IFJlY3Q7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9pc2ZmOiBib29sZWFuO1xuXG4gICAgICAgIHB1YmxpYyBhbHBoYTpudW1iZXIgPSAxO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9zdmcpO1xuXG4gICAgICAgICAgICBpZiAoU3ZnUmVuZGVyRW5naW5lLl9pc2ZmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBTdmdSZW5kZXJFbmdpbmUuX2lzZmYgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID49IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzYXZlKCl7XG5cbiAgICAgICAgfVxuICAgICAgICByZXN0b3JlKCl7XG5cbiAgICAgICAgfVxuICAgICAgICBjbGlwKCl7fVxuXG4gICAgICAgIGJlZ2luUmVuZGVyKCkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3N2Zy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ZnLnJlbW92ZUNoaWxkKHRoaXMuX3N2Zy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3N2Zy5hcHBlbmRDaGlsZCh0aGlzLl90ZXh0R3JvdXApO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRHcm91cC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ZnLnJlbW92ZUNoaWxkKHRoaXMuX3RleHRHcm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRWaWV3cG9ydFNpemUodzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuX3N2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGgudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgZWxlbWVudCgpOiBFbGVtZW50IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdmc7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgZmlsbCgpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGxcbiAgICAgICAgfVxuICAgICAgICBzZXQgZmlsbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9maWxsID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgZm9udFNpemUoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb250U2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgZm9udFNpemUodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5fZm9udFNpemUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldCBmb250RmFtaWx5KCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9udEZhbWlseTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgZm9udEZhbWlseSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9mb250RmFtaWx5ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgc3Ryb2tlKCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Ryb2tlO1xuICAgICAgICB9XG4gICAgICAgIHNldCBzdHJva2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5fc3Ryb2tlID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc3Ryb2tlV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldCB0ZXh0RmlsbCgpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRGaWxsO1xuICAgICAgICB9XG4gICAgICAgIHNldCB0ZXh0RmlsbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0RmlsbCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkQ2xpcFJlY3QoY2xpcFJlY3Q6IFJlY3QsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGlmIChjbGlwUmVjdCAmJiBpZCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGlwUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdSZW5kZXJFbmdpbmUuc3ZnTlMsICdjbGlwUGF0aCcpO1xuICAgICAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1JlbmRlckVuZ2luZS5zdmdOUywgJ3JlY3QnKTtcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgneCcsIChjbGlwUmVjdC5sZWZ0IC0gMSkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgneScsIChjbGlwUmVjdC50b3AgLSAxKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKCd3aWR0aCcsIChjbGlwUmVjdC53aWR0aCArIDIpLnRvRml4ZWQoKSk7XG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIChjbGlwUmVjdC5oZWlnaHQgKyAyKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgICAgIGNsaXBQYXRoLmFwcGVuZENoaWxkKHJlY3QpO1xuXG4gICAgICAgICAgICAgICAgY2xpcFBhdGguc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3N2Zy5hcHBlbmRDaGlsZChjbGlwUGF0aCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLl9kZWZzLmFwcGVuZENoaWxkKGNsaXBQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdFbGxpcHNlKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIGNsYXNzTmFtZT86IHN0cmluZywgc3R5bGU/OiBhbnkpOiBTVkdFbGVtZW50IHtcbiAgICAgICAgICAgIHZhciBlbGwgPSA8U1ZHRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnUmVuZGVyRW5naW5lLnN2Z05TLCAnZWxsaXBzZScpO1xuICAgICAgICAgICAgZWxsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5fc3Ryb2tlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdHJva2VXaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMuX3N0cm9rZVdpZHRoLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxsLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX2ZpbGwpO1xuICAgICAgICAgICAgZWxsLnNldEF0dHJpYnV0ZSgnY3gnLCBjeC50b0ZpeGVkKDEpKTtcbiAgICAgICAgICAgIGVsbC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICBlbGwuc2V0QXR0cmlidXRlKCdyeCcsIHJ4LnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgZWxsLnNldEF0dHJpYnV0ZSgncnknLCByeS50b0ZpeGVkKDEpKTtcbiAgICAgICAgICAgIC8vZWxsLnNldEF0dHJpYnV0ZSgnY3gnLCBjeC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIC8vZWxsLnNldEF0dHJpYnV0ZSgnY3knLCBjeS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIC8vZWxsLnNldEF0dHJpYnV0ZSgncngnLCByeC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIC8vZWxsLnNldEF0dHJpYnV0ZSgncnknLCByeS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGVsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUoZWxsLCBzdHlsZSk7XG5cbiAgICAgICAgICAgIC8vdGhpcy5fc3ZnLmFwcGVuZENoaWxkKGVsbCk7XG4gICAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChlbGwpO1xuXG4gICAgICAgICAgICByZXR1cm4gZWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1JlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjbGFzc05hbWU/OiBzdHJpbmcsIHN0eWxlPzogYW55LCBjbGlwUGF0aD86IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSA8U1ZHRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnUmVuZGVyRW5naW5lLnN2Z05TLCAncmVjdCcpO1xuXG4gICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX2ZpbGwpO1xuICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuX3N0cm9rZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3Ryb2tlV2lkdGggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5fc3Ryb2tlV2lkdGgudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgneCcsIHgudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgneScsIHkudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICBpZiAodyA+IDAgJiYgdyA8IDAuMDUpIHtcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMC4xJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKCd3aWR0aCcsIHcudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaCA+IDAgJiYgaCA8IDAuMDUpIHtcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAuMScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaC50b0ZpeGVkKDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbGlwUGF0aCkge1xuICAgICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcFBhdGggKyAnKScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUocmVjdCwgc3R5bGUpO1xuXG4gICAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChyZWN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9yZW5kZXIuZHJhd0xpbmUoc3RhcnRwb2ludC54LCBzdGFydHBvaW50LnksIGVuZHBvaW50LngsIGVuZHBvaW50Lnksc3Ryb2tlKTtcbiAgICAgICAgXG4gICAgICAgIGRyYXdMaW5lKHgxOm51bWJlciwgeTE6bnVtYmVyLCB4MjpudW1iZXIsIHkyOm51bWJlciwgc3Ryb2tlOlN0cm9rZVN0eWxlKXtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdMaW5lKHgxLHkxLHgyLHkyLG51bGwseydzdHJva2UnOnN0cm9rZS5zdHJva2VDb2xvciwnc3Ryb2tlLXdpZHRoJzpzdHJva2Uuc3Ryb2tlV2lkdGh9KTtcbiAgICAgICAgfVxuICAgICAgICBfZHJhd0xpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgY2xhc3NOYW1lPzogc3RyaW5nLCBzdHlsZT86IGFueSk6IFNWR0VsZW1lbnQge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSA8U1ZHQUVsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1JlbmRlckVuZ2luZS5zdmdOUywgJ2xpbmUnKTtcbiAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLl9zdHJva2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0cm9rZVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMuX3N0cm9rZVdpZHRoLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3gxJywgeDEudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgneDInLCB4Mi50b0ZpeGVkKDEpKTtcbiAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKCd5MScsIHkxLnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3kyJywgeTIudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICAvL2xpbmUuc2V0QXR0cmlidXRlKCd4MScsIHgxLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy9saW5lLnNldEF0dHJpYnV0ZSgneDInLCB4Mi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIC8vbGluZS5zZXRBdHRyaWJ1dGUoJ3kxJywgeTEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAvL2xpbmUuc2V0QXR0cmlidXRlKCd5MicsIHkyLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUobGluZSwgc3R5bGUpO1xuXG4gICAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChsaW5lKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3TGluZXMoeHM6IG51bWJlcltdLCB5czogbnVtYmVyW10sIGNsYXNzTmFtZT86IHN0cmluZywgc3R5bGU/OiBhbnksIGNsaXBQYXRoPzogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgICAgICAgICBpZiAoeHMgJiYgeXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gTWF0aC5taW4oeHMubGVuZ3RoLCB5cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGluZSA9IDxTVkdFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdSZW5kZXJFbmdpbmUuc3ZnTlMsICdwb2x5bGluZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBsaW5lLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5fc3Ryb2tlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0cm9rZVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMuX3N0cm9rZVdpZHRoLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGxpbmUuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwdHMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3B0cyArPSB4c1tpXS50b0ZpeGVkKDEpICsgJywnICsgeXNbaV0udG9GaXhlZCgxKSArICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3B0cyArPSB4c1tpXS50b1N0cmluZygpICsgJywnICsgeXNbaV0udG9TdHJpbmcoKSArICcgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGluZS5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHNwdHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsaW5lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlwUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxpbmUuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcFBhdGggKyAnKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUocGxpbmUsIHN0eWxlKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChwbGluZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgZHJhd1BvbHlnb24oeHM6IG51bWJlcltdLCB5czogbnVtYmVyW10sIGNsYXNzTmFtZT86IHN0cmluZywgc3R5bGU/OiBhbnksIGNsaXBQYXRoPzogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgICAgICAgICBpZiAoeHMgJiYgeXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gTWF0aC5taW4oeHMubGVuZ3RoLCB5cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2x5ID0gPFNWR0VsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1JlbmRlckVuZ2luZS5zdmdOUywgJ3BvbHlnb24nKTtcblxuICAgICAgICAgICAgICAgICAgICBwb2x5LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5fc3Ryb2tlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0cm9rZVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5fc3Ryb2tlV2lkdGgudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcG9seS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9maWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcG9seS5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLHRoaXMuYWxwaGErXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwdHMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zcHRzICs9IHhzW2ldLnRvU3RyaW5nKCkgKyAnLCcgKyB5c1tpXS50b1N0cmluZygpICsgJyAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3B0cyArPSB4c1tpXS50b0ZpeGVkKDEpICsgJywnICsgeXNbaV0udG9GaXhlZCgxKSArICcgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwb2x5LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgc3B0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9seS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpcFBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHkuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcFBhdGggKyAnKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUocG9seSwgc3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHBvbHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2x5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3UGllKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHI6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBzd2VlcEFuZ2xlOiBudW1iZXIsXG4gICAgICAgICAgICBjbGFzc05hbWU/OiBzdHJpbmcsIHN0eWxlPzogYW55LCBjbGlwUGF0aD86IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuXG4gICAgICAgICAgICBpZiAoc3dlZXBBbmdsZSA+PSBNYXRoLlBJICogMikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyYXdFbGxpcHNlKGN4LCBjeSwgciwgciwgY2xhc3NOYW1lLCBzdHlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXRoID0gPFNWR0VsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1JlbmRlckVuZ2luZS5zdmdOUywgJ3BhdGgnKTtcblxuICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLl9maWxsKTtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLl9zdHJva2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0cm9rZVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMuX3N0cm9rZVdpZHRoLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcDEgPSBuZXcgUG9pbnQoY3gsIGN5KTtcbiAgICAgICAgICAgIHAxLnggKz0gciAqIE1hdGguY29zKHN0YXJ0QW5nbGUpO1xuICAgICAgICAgICAgcDEueSArPSByICogTWF0aC5zaW4oc3RhcnRBbmdsZSk7XG5cbiAgICAgICAgICAgIHZhciBhMiA9IHN0YXJ0QW5nbGUgKyBzd2VlcEFuZ2xlO1xuICAgICAgICAgICAgdmFyIHAyID0gbmV3IFBvaW50KGN4LCBjeSk7XG4gICAgICAgICAgICBwMi54ICs9IHIgKiBNYXRoLmNvcyhhMik7XG4gICAgICAgICAgICBwMi55ICs9IHIgKiBNYXRoLnNpbihhMik7XG5cbiAgICAgICAgICAgIHZhciBvcHQgPSAnIDAgMCwxICc7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3dlZXBBbmdsZSkgPiBNYXRoLlBJKSB7XG4gICAgICAgICAgICAgICAgb3B0ID0gJyAwIDEsMSAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3ZhciBkID0gJ00gJyArIGN4LnRvRml4ZWQoMSkgKyAnLCcgKyBjeS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgLy9kICs9ICcgTCAnICsgcDEueC50b0ZpeGVkKDEpICsgJywnICsgcDEueS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgLy9kICs9ICcgQSAnICsgci50b0ZpeGVkKDEpICsgJywnICsgci50b0ZpeGVkKDEpICsgb3B0O1xuICAgICAgICAgICAgLy9kICs9IHAyLngudG9GaXhlZCgxKSArICcsJyArIHAyLnkudG9GaXhlZCgxKSArICcgeic7XG4gICAgICAgICAgICB2YXIgZCA9ICdNICcgKyBwMS54LnRvRml4ZWQoMSkgKyAnLCcgKyBwMS55LnRvRml4ZWQoMSk7XG4gICAgICAgICAgICBkICs9ICcgQSAnICsgci50b0ZpeGVkKDEpICsgJywnICsgci50b0ZpeGVkKDEpICsgb3B0O1xuICAgICAgICAgICAgZCArPSBwMi54LnRvRml4ZWQoMSkgKyAnLCcgKyBwMi55LnRvRml4ZWQoMSk7XG4gICAgICAgICAgICBkICs9ICcgTCAnICsgY3gudG9GaXhlZCgxKSArICcsJyArIGN5LnRvRml4ZWQoMSkgKyAnIHonO1xuXG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuXG5cbiAgICAgICAgICAgIGlmIChjbGlwUGF0aCkge1xuICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcFBhdGggKyAnKScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUocGF0aCwgc3R5bGUpO1xuXG4gICAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3RG9udXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGlubmVyUmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgc3dlZXBBbmdsZTogbnVtYmVyLFxuICAgICAgICAgICAgY2xhc3NOYW1lPzogc3RyaW5nLCBzdHlsZT86IGFueSwgY2xpcFBhdGg/OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcblxuICAgICAgICAgICAgdmFyIGlzRnVsbCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN0YXJ0QW5nbGUrc3dlZXBBbmdsZSA+PSBNYXRoLlBJICogMikge1xuICAgICAgICAgICAgICAgIGlzRnVsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3dlZXBBbmdsZT1NYXRoLlBJICogMiAtc3RhcnRBbmdsZS0wLjAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhdGggPSA8U1ZHRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnUmVuZGVyRW5naW5lLnN2Z05TLCAncGF0aCcpO1xuXG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX2ZpbGwpO1xuICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuX3N0cm9rZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3Ryb2tlV2lkdGggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5fc3Ryb2tlV2lkdGgudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwMSA9IG5ldyBQb2ludChjeCwgY3kpO1xuICAgICAgICAgICAgcDEueCArPSByYWRpdXMgKiBNYXRoLmNvcyhzdGFydEFuZ2xlKTtcbiAgICAgICAgICAgIHAxLnkgKz0gcmFkaXVzICogTWF0aC5zaW4oc3RhcnRBbmdsZSk7XG5cbiAgICAgICAgICAgIHZhciBhMiA9IHN0YXJ0QW5nbGUgKyBzd2VlcEFuZ2xlO1xuICAgICAgICAgICAgdmFyIHAyID0gbmV3IFBvaW50KGN4LCBjeSk7XG4gICAgICAgICAgICBwMi54ICs9IHJhZGl1cyAqIE1hdGguY29zKGEyKTtcbiAgICAgICAgICAgIHAyLnkgKz0gcmFkaXVzICogTWF0aC5zaW4oYTIpO1xuXG4gICAgICAgICAgICB2YXIgcDMgPSBuZXcgUG9pbnQoY3gsIGN5KTtcbiAgICAgICAgICAgIHAzLnggKz0gaW5uZXJSYWRpdXMgKiBNYXRoLmNvcyhhMik7XG4gICAgICAgICAgICBwMy55ICs9IGlubmVyUmFkaXVzICogTWF0aC5zaW4oYTIpO1xuXG4gICAgICAgICAgICB2YXIgcDQgPSBuZXcgUG9pbnQoY3gsIGN5KTtcbiAgICAgICAgICAgIHA0LnggKz0gaW5uZXJSYWRpdXMgKiBNYXRoLmNvcyhzdGFydEFuZ2xlKTtcbiAgICAgICAgICAgIHA0LnkgKz0gaW5uZXJSYWRpdXMgKiBNYXRoLnNpbihzdGFydEFuZ2xlKTtcblxuICAgICAgICAgICAgdmFyIG9wdDEgPSAnIDAgMCwxICcsXG4gICAgICAgICAgICAgICAgb3B0MiA9ICcgMCAwLDAgJztcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzd2VlcEFuZ2xlKSA+IE1hdGguUEkpIHtcbiAgICAgICAgICAgICAgICBvcHQxID0gJyAwIDEsMSAnO1xuICAgICAgICAgICAgICAgIG9wdDIgPSAnIDAgMSwwICc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkID0gJ00gJyArIHAxLngudG9GaXhlZCgzKSArICcsJyArIHAxLnkudG9GaXhlZCgzKTtcblxuICAgICAgICAgICAgZCArPSAnIEEgJyArIHJhZGl1cy50b0ZpeGVkKDMpICsgJywnICsgcmFkaXVzLnRvRml4ZWQoMykgKyBvcHQxO1xuICAgICAgICAgICAgZCArPSBwMi54LnRvRml4ZWQoMykgKyAnLCcgKyBwMi55LnRvRml4ZWQoMyk7XG4gICAgICAgICAgICBpZiAoaXNGdWxsKSB7XG4gICAgICAgICAgICAgICAgZCArPSAnIE0gJyArIHAzLngudG9GaXhlZCgzKSArICcsJyArIHAzLnkudG9GaXhlZCgzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZCArPSAnIEwgJyArIHAzLngudG9GaXhlZCgzKSArICcsJyArIHAzLnkudG9GaXhlZCgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQgKz0gJyBBICcgKyBpbm5lclJhZGl1cy50b0ZpeGVkKDMpICsgJywnICsgaW5uZXJSYWRpdXMudG9GaXhlZCgzKSArIG9wdDI7XG4gICAgICAgICAgICBkICs9IHA0LngudG9GaXhlZCgzKSArICcsJyArIHA0LnkudG9GaXhlZCgzKTtcbiAgICAgICAgICAgIGlmICghaXNGdWxsKSB7XG4gICAgICAgICAgICAgICAgZCArPSAnIHonO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuXG4gICAgICAgICAgICBpZiAoY2xpcFBhdGgpIHtcbiAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBQYXRoICsgJyknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hcHBseVN0eWxlKHBhdGgsIHN0eWxlKTtcblxuICAgICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1N0cmluZyhzOiBzdHJpbmcsIHB0OiBQb2ludCwgY2xhc3NOYW1lPzogc3RyaW5nLCBzdHlsZT86IGFueSk6IFNWR0VsZW1lbnQge1xuICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLl9jcmVhdGVUZXh0KHB0LCBzKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9hcHBseVN0eWxlKHRleHQsIHN0eWxlKTtcblxuICAgICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgICAgIHZhciBiYiA9IHRoaXMuX2dldEJCb3godGV4dCk7Ly8gdGV4dC5nZXRCQm94KCk7XG4gICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneScsIChwdC55IC0gKGJiLnkgKyBiYi5oZWlnaHQgLSBwdC55KSkudG9GaXhlZCgxKSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1N0cmluZ1JvdGF0ZWQoczogc3RyaW5nLCBwdDogUG9pbnQsIGNlbnRlcjogUG9pbnQsIGFuZ2xlOiBudW1iZXIsIGNsYXNzTmFtZT86IHN0cmluZywgc3R5bGU/OiBhbnkpOiBTVkdFbGVtZW50IHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdGhpcy5fY3JlYXRlVGV4dChwdCwgcyk7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUodGV4dCwgc3R5bGUpO1xuXG4gICAgICAgICAgICB2YXIgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdSZW5kZXJFbmdpbmUuc3ZnTlMsICdnJyk7XG4gICAgICAgICAgICBnLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgYW5nbGUudG9GaXhlZCgxKSArICcsJyArIGNlbnRlci54LnRvRml4ZWQoMSkgKyAnLCcgKyBjZW50ZXIueS50b0ZpeGVkKDEpICsgJyknKTtcbiAgICAgICAgICAgIC8vZy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICdyb3RhdGUoJyArIGFuZ2xlLnRvU3RyaW5nKCkgKyAnLCcgKyBjZW50ZXIueC50b1N0cmluZygpICsgJywnICsgY2VudGVyLnkudG9TdHJpbmcoKSArICcpJyk7XG4gICAgICAgICAgICBnLmFwcGVuZENoaWxkKHRleHQpO1xuXG5cbiAgICAgICAgICAgIC8vdGhpcy5fc3ZnLmFwcGVuZENoaWxkKGcpO1xuICAgICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoZyk7XG4gICAgICAgICAgICB2YXIgYmIgPSB0aGlzLl9nZXRCQm94KHRleHQpOy8vIHRleHQuZ2V0QkJveCgpO1xuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3knLCAocHQueSAtIChiYi55ICsgYmIuaGVpZ2h0IC0gcHQueSkpLnRvRml4ZWQoMSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbWVhc3VyZVN0cmluZyhzOnN0cmluZyxmb250OkZvbnQpOlNpemV7XG4gICAgICAgICAgIHJldHVybiB0aGlzLl9tZWFzdXJlU3RyaW5nKHMsIG51bGwsIG51bGwsIHsgJ2ZvbnQtc2l6ZSc6IGZvbnQuZm9udFNpemUsICdmb250LWZhbWlseSc6IGZvbnQuZm9udEZhbWlseSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9tZWFzdXJlU3RyaW5nKHM6IHN0cmluZywgY2xhc3NOYW1lPzogc3RyaW5nLCBncm91cE5hbWU/OiBzdHJpbmcsIHN0eWxlPzogYW55KTogU2l6ZSB7XG4gICAgICAgICAgICB2YXIgc3ogPSBuZXcgU2l6ZSgwLCAwKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIHRoaXMuX2ZvbnRTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9mb250RmFtaWx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5fZm9udEZhbWlseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncm91cE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0R3JvdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsIGdyb3VwTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUodGhpcy5fdGV4dCwgc3R5bGUpO1xuXG4gICAgICAgICAgICB0aGlzLl9zZXRUZXh0KHRoaXMuX3RleHQsIHMpO1xuXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHRoaXMuX2dldEJCb3godGhpcy5fdGV4dCk7IC8vIHRoaXMuX3RleHQuZ2V0QkJveCgpO1xuICAgICAgICAgICAgc3oud2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgICAgICAgc3ouaGVpZ2h0ID0gcmVjdC5oZWlnaHQtMjtcblxuICAgICAgICAgICAgdGhpcy5fdGV4dC5yZW1vdmVBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dC5yZW1vdmVBdHRyaWJ1dGUoJ2ZvbnQtZmFtaWx5Jyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcblxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHQucmVtb3ZlQXR0cmlidXRlKHRoaXMuX2RlQ2FzZShrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3RleHRHcm91cC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnRleHRDb250ZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBzejtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0R3JvdXAoY2xhc3NOYW1lPzogc3RyaW5nLCBjbGlwUGF0aD86IHN0cmluZywgY3JlYXRlVHJhbnNmb3JtOiBib29sZWFuID0gZmFsc2UpOiBTVkdFbGVtZW50IHtcbiAgICAgICAgICAgIHZhciBncm91cCA9IDxTVkdHRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnUmVuZGVyRW5naW5lLnN2Z05TLCAnZycpO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsaXBQYXRoKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcFBhdGggKyAnKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgICAgICAgaWYgKGNyZWF0ZVRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnRyYW5zZm9ybS5iYXNlVmFsLmFwcGVuZEl0ZW0oKDxTVkdTVkdFbGVtZW50PnRoaXMuX3N2ZykuY3JlYXRlU1ZHVHJhbnNmb3JtKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZ3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgIHJldHVybiBncm91cDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZEdyb3VwKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2dyb3VwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IDxFbGVtZW50PnRoaXMuX2dyb3VwLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCA9PSB0aGlzLl9zdmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dyb3VwID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdJbWFnZShpbWFnZUhyZWY6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKTogU1ZHRWxlbWVudCB7XG4gICAgICAgICAgICB2YXIgaW1nID0gPFNWR0dFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdSZW5kZXJFbmdpbmUuc3ZnTlMsICdpbWFnZScpO1xuXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlTlMoU3ZnUmVuZGVyRW5naW5lLnhsaW5rTlMsICdocmVmJywgaW1hZ2VIcmVmKTtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3gnLCB4LnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgneScsIHkudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHcudG9GaXhlZCgxKSk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoLnRvRml4ZWQoMSkpO1xuXG4gICAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW1nO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfYXBwZW5kQ2hpbGQoZWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGdyb3VwID0gdGhpcy5fZ3JvdXA7XG4gICAgICAgICAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAgPSB0aGlzLl9zdmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2NyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX3N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdSZW5kZXJFbmdpbmUuc3ZnTlMsICdzdmcnKTtcbiAgICAgICAgICAgIHRoaXMuX2RlZnMgPSA8U1ZHRGVmc0VsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1JlbmRlckVuZ2luZS5zdmdOUywgJ2RlZnMnKTtcbiAgICAgICAgICAgIHRoaXMuX3N2Zy5hcHBlbmRDaGlsZCh0aGlzLl9kZWZzKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9jcmVhdGVUZXh0KG5ldyBQb2ludCgtMTAwMCwgLTEwMDApLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0R3JvdXAgPSA8U1ZHR0VsZW1lbnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1JlbmRlckVuZ2luZS5zdmdOUywgJ2cnKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHRHcm91cC5hcHBlbmRDaGlsZCh0aGlzLl90ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX3N2Zy5hcHBlbmRDaGlsZCh0aGlzLl90ZXh0R3JvdXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfc2V0VGV4dChlbGVtZW50OiBFbGVtZW50LCBzOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gcyA/IHMudG9TdHJpbmcoKSA6IG51bGw7XG4gICAgICAgICAgICBpZiAodGV4dCAmJiB0ZXh0LmluZGV4T2YoJ3RzcGFuJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBtYXJrdXAgaW50byB2YWxpZCBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRYTUwgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9kWE1MLmFzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdyYXAgdGhlIG1hcmt1cCBpbnRvIGEgU1ZHIG5vZGUgdG8gZW5zdXJlIHBhcnNpbmcgd29ya3MuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzWE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+JyArIHRleHQgKyAnPC9zdmc+JztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2Z0RvY0VsZW1lbnQgPSBkWE1MLnBhcnNlRnJvbVN0cmluZyhzWE1MLCAndGV4dC94bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm93IHRha2UgZWFjaCBub2RlLCBpbXBvcnQgaXQgYW5kIGFwcGVuZCB0byB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBzdmdEb2NFbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShjaGlsZE5vZGUsIHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHBhcnNpbmcgWE1MIHN0cmluZy4nKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9jcmVhdGVUZXh0KHBvczogUG9pbnQsIHRleHQ6IHN0cmluZyk6IFNWR1RleHRFbGVtZW50IHtcbiAgICAgICAgICAgIHZhciB0ZXh0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnUmVuZGVyRW5naW5lLnN2Z05TLCAndGV4dCcpO1xuXG4gICAgICAgICAgICB0aGlzLl9zZXRUZXh0KHRleHRlbCwgdGV4dCk7XG4gICAgICAgICAgICB0ZXh0ZWwuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fdGV4dEZpbGwpO1xuICAgICAgICAgICAgdGV4dGVsLnNldEF0dHJpYnV0ZSgneCcsIHBvcy54LnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgdGV4dGVsLnNldEF0dHJpYnV0ZSgneScsIHBvcy55LnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgLy90ZXh0ZWwuc2V0QXR0cmlidXRlKCd4JywgcG9zLngudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAvL3RleHRlbC5zZXRBdHRyaWJ1dGUoJ3knLCBwb3MueS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgdGV4dGVsLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgdGhpcy5fZm9udFNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZvbnRGYW1pbHkpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ZWwuc2V0QXR0cmlidXRlKCdmb250LWZhbWlseScsIHRoaXMuX2ZvbnRGYW1pbHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDxTVkdUZXh0RWxlbWVudD50ZXh0ZWw7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9hcHBseVN0eWxlKGVsOiBTVkdFbGVtZW50LCBzdHlsZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHRoaXMuX2RlQ2FzZShrZXkpLCBzdHlsZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9kZUNhc2Uoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChhKSB7IHJldHVybiAnLScgKyBhLnRvTG93ZXJDYXNlKCkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9nZXRCQm94KHRleHQ6IFNWR1RleHRFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoU3ZnUmVuZGVyRW5naW5lLl9pc2ZmKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQuZ2V0QkJveCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQuZ2V0QkJveCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiVXRpbC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQ2FudmFzLnRzXCIgLz5cblxubmFtZXNwYWNlIGFuZHJvaWQuZ3JhcGhpY3N7XG5cblxuICAgIGV4cG9ydCBjbGFzcyBUZXh0UGFpbnR7XG4gICAgICAgIHByaXZhdGUgY2FudmFzOkNhbnZhcztcbiAgICAgICAgcHJpdmF0ZSBmb250OkZvbnQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNhbnZhczpDYW52YXMsIGZvbnQ6Rm9udCl7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgICAgIH1cbiAgICAgICAgbWVhc3VyZVN0cmluZyhzdHI6c3RyaW5nKTpTaXple1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLm1lYXN1cmVTdHJpbmcoc3RyLHRoaXMuZm9udCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJuYW1lc3BhY2UgYW5kcm9pZC51dGlse1xuICAgIGV4cG9ydCBjbGFzcyBBcnJheUxpc3Q8VD4ge1xuICAgICAgICBwcml2YXRlIF9hcnJheTpUW10gPSBbXTtcbiAgICAgICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBhZGQodmFsdWU6VCk6dm9pZHtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyByZW1vdmU8VD4odmFsdWU6YW55KTp2b2lke1xuICAgICAgICAgICAgaWYodHlwZW9mKHZhbHVlKSA9PT0gJ251bWJlcicpe1xuICAgICAgICAgICAgICAgIHRoaXMuX2FycmF5LnNwbGljZSh2YWx1ZSk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fYXJyYXkuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPjApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcnJheS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBjbGVhcigpe1xuICAgICAgICAgICAgdGhpcy5fYXJyYXkubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgc2l6ZSgpOm51bWJlcntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIGdldChpbmRleDpudW1iZXIpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5W2luZGV4XTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJuYW1lc3BhY2UgYW5kcm9pZC51dGlse1xuICAgIGV4cG9ydCBjbGFzcyBNZXNzYWdle1xuICAgICAgICBwdWJsaWMgd2hhdCA6bnVtYmVyID0wO1xuICAgICAgICBjb25zdHJ1Y3Rvcih3aGF0PzpudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy53aGF0ID13aGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBvYnRhaW4od2hhdD86bnVtYmVyKTpNZXNzYWdle1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXNzYWdlKHdoYXQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIk1lc3NhZ2UudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkxvZy50c1wiIC8+XG5cbm5hbWVzcGFjZSBhbmRyb2lkLnV0aWwge1xuICAgIGV4cG9ydCBjbGFzcyBIYW5kbGVyIHtcbiAgICAgICAgcHJpdmF0ZSBfaGFubGRlck1hcCA9IHt9O1xuICAgICAgICBwcml2YXRlIF9xdWV1ZTphbnlbXT1bXTtcbiAgICAgICAgcHVibGljIGhhbmRsZU1lc3NhZ2UobXNnOiBNZXNzYWdlKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nICAgXG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2VuZE1lc3NhZ2UobXNnOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZURlbGF5ZWQobXNnLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzZW5kTWVzc2FnZURlbGF5ZWQobXNnOiBNZXNzYWdlLCBkZWxheTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgICAgICAvLyBMb2cuZCgnc2VuZE1lc3NhZ2VEZWxheWVkIGRlbGF5ID0gJyArIGRlbGF5ICsgXCIgICBub3cgPVwiICsgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZUF0VGltZShtc2csIERhdGUubm93KCkgKyBkZWxheSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2VuZE1lc3NhZ2VBdFRpbWUobXNnOiBNZXNzYWdlLCB1cHRpbWVNaWxsaXM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5faGFubGRlck1hcFttc2cud2hhdF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZU1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgIH0sIHVwdGltZU1pbGxpcyAtIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgcmVtb3ZlTWVzc2FnZXMod2hhdDogbnVtYmVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faGFubGRlck1hcFt3aGF0XSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHB1YmxpYyBvYnRhaW5NZXNzYWdlKHdoYXQ6IG51bWJlcik6IE1lc3NhZ2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1lc3NhZ2Uub2J0YWluKHdoYXQpO1xuXG4gICAgICAgIH1cblxuXG4gICAgfVxufSIsIm5hbWVzcGFjZSBhbmRyb2lkLndpZGdldCB7XG4gICAgaW1wb3J0IFBhZGRpbmcgPSBhbmRyb2lkLmdyYXBoaWNzLlBhZGRpbmc7XG4gICAgaW1wb3J0IEFsaWduID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbjtcbiAgICBpbXBvcnQgR3Jhdml0eSA9IGFuZHJvaWQuZ3JhcGhpY3MuR3Jhdml0eTtcblxuXG4gICAgaW1wb3J0IEFsaWduRWxtZW50ID0gYW5kcm9pZC5ncmFwaGljcy5BbGlnbkVsbWVudDtcbiAgICBpbXBvcnQgTWFyZ2luID0gYW5kcm9pZC5ncmFwaGljcy5NYXJnaW47XG5cbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgQ2FudmFzID0gYW5kcm9pZC5ncmFwaGljcy5DYW52YXM7XG4gICAgaW1wb3J0IFZpZXdHcm91cCA9IGFuZHJvaWQudmlldy5WaWV3R3JvdXA7XG4gICAgaW1wb3J0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcblxuICAgIGltcG9ydCBQb2ludCA9IGFuZHJvaWQuZ3JhcGhpY3MuUG9pbnQ7XG4gICAgaW1wb3J0IE1lYXN1cmVTcGVjID0gYW5kcm9pZC52aWV3Lk1lYXN1cmVTcGVjO1xuICAgIGltcG9ydCBGb250ID0gYW5kcm9pZC5ncmFwaGljcy5Gb250O1xuICAgIGltcG9ydCBMYXlvdXRJbmZvID0gYW5kcm9pZC52aWV3LkxheW91dEluZm87XG4gICAgaW1wb3J0IExheW91dFBhcmFtcyA9IGFuZHJvaWQudmlldy5MYXlvdXRQYXJhbXM7XG5cbiAgICBleHBvcnQgZW51bSBTY2FsZVR5cGUge1xuICAgICAgICBNQVRSSVgsXG4gICAgICAgIEZJVF9YWSxcbiAgICAgICAgRklUX1NUQVJULFxuICAgICAgICBGSVRfQ0VOVEVSLFxuICAgICAgICBGSVRfRU5ELFxuICAgICAgICBDRU5URVIsXG4gICAgICAgIENFTlRFUl9DUk9QLFxuICAgICAgICBDRU5URVJfSU5TSURFXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgZXhwb3J0IGNsYXNzIEltYWdlVmlldyBleHRlbmRzIFZpZXcge1xuXG5cblxuXG4gICAgICAgIHByaXZhdGUgYml0bWFwOiBJbWFnZURhdGE7XG5cbiAgICAgICAgb25NZWFzdXJlKHdpZHRoOiBNZWFzdXJlU3BlYywgaGVpZ2h0OiBNZWFzdXJlU3BlYywgY2FudmFzOiBDYW52YXMpOiBTaXplIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRNZWFzdXJlZERpbWVuc2lvbihuZXcgTWVhc3VyZVNwZWMoKSxuZXcgTWVhc3VyZVNwZWMoKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBvbkRyYXcoY2FudmFzOkNhbnZhcyk6dm9pZHtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdmlldy9pbXBsZW1lbnRpb24vVmlld0dyb3VwLnRzXCIgLz5cblxuXG5cbm5hbWVzcGFjZSBhbmRyb2lkLndpZGdldCB7XG4gICAgaW1wb3J0IFBhZGRpbmcgPSBhbmRyb2lkLmdyYXBoaWNzLlBhZGRpbmc7XG4gICAgaW1wb3J0IEdyYXZpdHkgPSBhbmRyb2lkLmdyYXBoaWNzLkdyYXZpdHk7XG4gICAgaW1wb3J0IFJlY3QgPSBhbmRyb2lkLmdyYXBoaWNzLlJlY3Q7XG5cblxuICAgIGltcG9ydCBBbGlnbkVsbWVudCA9IGFuZHJvaWQuZ3JhcGhpY3MuQWxpZ25FbG1lbnQ7XG4gICAgaW1wb3J0IE1hcmdpbiA9IGFuZHJvaWQuZ3JhcGhpY3MuTWFyZ2luO1xuXG4gICAgaW1wb3J0IFNpemUgPSBhbmRyb2lkLmdyYXBoaWNzLlNpemU7XG4gICAgaW1wb3J0IENhbnZhcyA9IGFuZHJvaWQuZ3JhcGhpY3MuQ2FudmFzO1xuICAgIGltcG9ydCBWaWV3R3JvdXAgPSBhbmRyb2lkLnZpZXcuVmlld0dyb3VwO1xuICAgIGltcG9ydCBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG5cbiAgICBpbXBvcnQgUG9pbnQgPSBhbmRyb2lkLmdyYXBoaWNzLlBvaW50O1xuICAgIGltcG9ydCBNZWFzdXJlU3BlYyA9IGFuZHJvaWQudmlldy5NZWFzdXJlU3BlYztcblxuICAgIGltcG9ydCBPcmllbnRhdGlvbiA9IGFuZHJvaWQuZ3JhcGhpY3MuT3JpZW50YXRpb247XG4gICAgaW1wb3J0IExheW91dFBhcmFtcyA9IGFuZHJvaWQudmlldy5MYXlvdXRQYXJhbXM7XG5cbiAgICBleHBvcnQgY2xhc3MgTGluZWFyTGF5b3V0IGV4dGVuZHMgVmlld0dyb3VwIHtcbiAgICAgICAgcHJpdmF0ZSBfb3JpZW50YXRpb246IE9yaWVudGF0aW9uID0gT3JpZW50YXRpb24uSG9yaXpvbnRhbDtcbiAgICAgICAgcHVibGljIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uOiBPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBnZXRPcmllbnRhdGlvbigpOiBPcmllbnRhdGlvbiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XG4gICAgICAgIH1cblxuXG4gICAgICAgIG9uTWVhc3VyZSh3aWR0aDogTWVhc3VyZVNwZWMsIGhlaWdodDogTWVhc3VyZVNwZWMsIGNhbnZhczogQ2FudmFzKTogU2l6ZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLkhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZWFzdXJlSG9yaXpvbnRhbCh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZWFzdXJlVmVydGljYWwod2lkdGgsIGhlaWdodCwgY2FudmFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lYXN1cmVIb3Jpem9udGFsKHdpZHRoOiBNZWFzdXJlU3BlYywgaGVpZ2h0OiBNZWFzdXJlU3BlYywgY2FudmFzOiBDYW52YXMpOiBTaXplIHtcbiAgICAgICAgICAgIHZhciBzaXplOiBTaXplO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW06IFZpZXcgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHZhciBscDogTGF5b3V0UGFyYW1zID0gaXRlbS5sYXlvdXRQYXJhbXM7XG4gICAgICAgICAgICAgICAgdmFyIHc6IG51bWJlciA9IGxwLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoOiBudW1iZXIgPSBscC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKGxwLmhlaWdodE1vZGUgPT09IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGhlaWdodC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxwLndpZHRoTW9kZSA9PT0gTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCkge1xuICAgICAgICAgICAgICAgICAgICB3ID0gd2lkdGgudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzID0gaXRlbS5vbk1lYXN1cmUobmV3IE1lYXN1cmVTcGVjKHcsIGxwLndpZHRoTW9kZSksIG5ldyBNZWFzdXJlU3BlYyhoLCBscC5oZWlnaHRNb2RlKSwgY2FudmFzKTtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBzaXplLndpZHRoICs9IHMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaXplLmhlaWdodCA8IHMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplLmhlaWdodCA9IHMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHMuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoc2l6ZS53aWR0aCA+IHdpZHRoLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyAgICAgc2l6ZS53aWR0aCA9IHdpZHRoLnZhbHVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKHNpemUuaGVpZ2h0ID4gaGVpZ2h0LnZhbHVlKSB7XG4gICAgICAgICAgICAvLyAgICAgc2l6ZS5oZWlnaHQgPSBoZWlnaHQudmFsdWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXRQYXJhbXMud2lkdGhNb2RlID09PSBMYXlvdXRQYXJhbXMuRVhBQ1RMWSkge1xuICAgICAgICAgICAgICAgIHNpemUud2lkdGggPSB0aGlzLmxheW91dFBhcmFtcy53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXRQYXJhbXMud2lkdGhNb2RlID09PSBMYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5UKSB7XG4gICAgICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHdpZHRoLmdldE1lYXN1cmVWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0UGFyYW1zLmhlaWdodE1vZGUgPT09IExheW91dFBhcmFtcy5FWEFDVExZKSB7XG4gICAgICAgICAgICAgICAgc2l6ZS5oZWlnaHQgPSB0aGlzLmxheW91dFBhcmFtcy5oZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0UGFyYW1zLmhlaWdodE1vZGUgPT09IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpIHtcbiAgICAgICAgICAgICAgICBzaXplLmhlaWdodCA9IGhlaWdodC5nZXRNZWFzdXJlVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TWVhc3VyZWREaW1lbnNpb24obmV3IE1lYXN1cmVTcGVjKHNpemUud2lkdGgsIExheW91dFBhcmFtcy5FWEFDVExZKSwgbmV3IE1lYXN1cmVTcGVjKHNpemUuaGVpZ2h0LCBMYXlvdXRQYXJhbXMuRVhBQ1RMWSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBtZWFzdXJlVmVydGljYWwod2lkdGg6IE1lYXN1cmVTcGVjLCBoZWlnaHQ6IE1lYXN1cmVTcGVjLCBjYW52YXM6IENhbnZhcyk6IFNpemUge1xuICAgICAgICAgICAgdmFyIHNpemU6IFNpemU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbTogVmlldyA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgdmFyIGxwOiBMYXlvdXRQYXJhbXMgPSBpdGVtLmxheW91dFBhcmFtcztcbiAgICAgICAgICAgICAgICB2YXIgdzogbnVtYmVyID0gbHAud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGg6IG51bWJlciA9IGxwLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAobHAuaGVpZ2h0TW9kZSA9PT0gTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCkge1xuICAgICAgICAgICAgICAgICAgICBoID0gaGVpZ2h0LnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobHAud2lkdGhNb2RlID09PSBMYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5UKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSB3aWR0aC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBpdGVtLm9uTWVhc3VyZShuZXcgTWVhc3VyZVNwZWModywgbHAud2lkdGhNb2RlKSwgbmV3IE1lYXN1cmVTcGVjKGgsIGxwLmhlaWdodE1vZGUpLCBjYW52YXMpO1xuICAgICAgICAgICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpemUuaGVpZ2h0ICs9IHMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZS53aWR0aCA8IHMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUud2lkdGggPSBzLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHMuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoc2l6ZS53aWR0aCA+IHdpZHRoLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyAgICAgc2l6ZS53aWR0aCA9IHdpZHRoLnZhbHVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKHNpemUuaGVpZ2h0ID4gaGVpZ2h0LnZhbHVlKSB7XG4gICAgICAgICAgICAvLyAgICAgc2l6ZS5oZWlnaHQgPSBoZWlnaHQudmFsdWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXRQYXJhbXMud2lkdGhNb2RlID09PSBMYXlvdXRQYXJhbXMuRVhBQ1RMWSkge1xuICAgICAgICAgICAgICAgIHNpemUud2lkdGggPSB0aGlzLmxheW91dFBhcmFtcy53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXRQYXJhbXMud2lkdGhNb2RlID09PSBMYXlvdXRQYXJhbXMuTUFUQ0hfUEFSRU5UKSB7XG4gICAgICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHdpZHRoLmdldE1lYXN1cmVWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0UGFyYW1zLmhlaWdodE1vZGUgPT09IExheW91dFBhcmFtcy5FWEFDVExZKSB7XG4gICAgICAgICAgICAgICAgc2l6ZS5oZWlnaHQgPSB0aGlzLmxheW91dFBhcmFtcy5oZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0UGFyYW1zLmhlaWdodE1vZGUgPT09IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpIHtcbiAgICAgICAgICAgICAgICBzaXplLmhlaWdodCA9IGhlaWdodC5nZXRNZWFzdXJlVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TWVhc3VyZWREaW1lbnNpb24obmV3IE1lYXN1cmVTcGVjKHNpemUud2lkdGgsIExheW91dFBhcmFtcy5FWEFDVExZKSwgbmV3IE1lYXN1cmVTcGVjKHNpemUuaGVpZ2h0LCBMYXlvdXRQYXJhbXMuRVhBQ1RMWSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgb25MYXlvdXQobDogbnVtYmVyLCB0OiBudW1iZXIsIHI6IG51bWJlciwgYjogbnVtYmVyLCBjYW52YXM6IENhbnZhcyk6IHZvaWQge1xuICAgICAgICAgICAgLy8gdGhpcy5sYXlvdXRJbmZvLnJlc2V0KGwsIHQsIHIsIGIsIHRoaXMucGFkZGluZywgMCk7XG4gICAgICAgICAgICBzdXBlci5vbkxheW91dChsLHQscixiLGNhbnZhcyk7XG4gICAgICAgICAgICB2YXIgaW5uZXJyZWN0OiBSZWN0ID0gdGhpcy5sYXlvdXRJbmZvLmlubmVycmVjdDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0SG9yaXpvbnRhbChpbm5lcnJlY3QubGVmdCwgaW5uZXJyZWN0LnRvcCwgaW5uZXJyZWN0LnJpZ2h0LCBpbm5lcnJlY3QuYm90dG9tLGNhbnZhcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0VmVydGljYWwoaW5uZXJyZWN0LmxlZnQsIGlubmVycmVjdC50b3AsIGlubmVycmVjdC5yaWdodCwgaW5uZXJyZWN0LmJvdHRvbSxjYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGF5b3V0SG9yaXpvbnRhbChsOiBudW1iZXIsIHQ6IG51bWJlciwgcjogbnVtYmVyLCBiOiBudW1iZXIsIGNhbnZhczogQ2FudmFzKTogdm9pZCB7XG4gICAgICAgICAgICBsZXQgdmlld0l0ZW06IFZpZXc7XG4gICAgICAgICAgICBsZXQgbTogTWFyZ2luO1xuICAgICAgICAgICAgbGV0IHN0YXJ0cG9pbnQ6IFBvaW50ID0gbmV3IFBvaW50KGwsIHQpO1xuICAgICAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgY2hpbGRXaWR0aDogbnVtYmVyID0gMDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZpZXdJdGVtID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBtID0gdmlld0l0ZW0ubGF5b3V0UGFyYW1zLm1hcmdpbjtcbiAgICAgICAgICAgICAgICBjaGlsZFdpZHRoICs9IHZpZXdJdGVtLndpZHRoICsgKG0ubWFyZ2luTGVmdCArIG0ubWFyZ2luUmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlld0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgbSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgc3RhcnRPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgICBpZiAoY2hpbGRXaWR0aCA8IChyIC0gbCkpIHtcbiAgICAgICAgICAgICAgICBzdGFydE9mZnNldCA9ICgociAtIGwpIC0gY2hpbGRXaWR0aCkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmlld0l0ZW0gPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIG0gPSB2aWV3SXRlbS5sYXlvdXRQYXJhbXMubWFyZ2luO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodmlld0l0ZW0uZ3Jhdml0eSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHcmF2aXR5LkF1dG86XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHcmF2aXR5LlRvcDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cG9pbnQueSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHcmF2aXR5LkJvdHRvbTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cG9pbnQueSA9IGIgLSB2aWV3SXRlbS5oZWlnaHQgLSBtLm1hcmdpbkJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuQ2VudGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRwb2ludC55ID0gdCArICgoYiAtIHQgLSB2aWV3SXRlbS5oZWlnaHQpID4gMCA/IGIgLSB0IC0gdmlld0l0ZW0uaGVpZ2h0IDogMCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0cG9pbnQub2Zmc2V0KG0ubWFyZ2luTGVmdCA+IDAgPyBtLm1hcmdpbkxlZnQgOiAwLCBtLm1hcmdpblRvcCA+IDAgPyBtLm1hcmdpblRvcCA6IDApO1xuICAgICAgICAgICAgICAgIHZpZXdJdGVtLm9uTGF5b3V0KHN0YXJ0cG9pbnQueCwgc3RhcnRwb2ludC55LCBzdGFydHBvaW50LnggKyB2aWV3SXRlbS53aWR0aCwgc3RhcnRwb2ludC55ICsgdmlld0l0ZW0uaGVpZ2h0LGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgc3RhcnRwb2ludC5vZmZzZXQodmlld0l0ZW0ud2lkdGggKyAobS5tYXJnaW5SaWdodCA+IDAgPyBtLm1hcmdpblJpZ2h0IDogMCksIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBsYXlvdXRWZXJ0aWNhbChsOiBudW1iZXIsIHQ6IG51bWJlciwgcjogbnVtYmVyLCBiOiBudW1iZXIsIGNhbnZhczogQ2FudmFzKTogdm9pZCB7XG4gICAgICAgICAgICBsZXQgdmlld0l0ZW06IFZpZXc7XG4gICAgICAgICAgICBsZXQgbTogTWFyZ2luO1xuICAgICAgICAgICAgbGV0IHN0YXJ0cG9pbnQ6IFBvaW50ID0gbmV3IFBvaW50KGwsIHQpO1xuICAgICAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgY2hpbGRIZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2aWV3SXRlbSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbSA9IHZpZXdJdGVtLmxheW91dFBhcmFtcy5tYXJnaW47XG4gICAgICAgICAgICAgICAgY2hpbGRIZWlnaHQgKz0gdmlld0l0ZW0uaGVpZ2h0ICsgKG0ubWFyZ2luVG9wICsgbS5tYXJnaW5Cb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlld0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgbSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgc3RhcnRPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgICBpZiAoY2hpbGRIZWlnaHQgPCAoYiAtIHQpKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQgPSAoKGIgLSB0KSAtIGNoaWxkSGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2aWV3SXRlbSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbSA9IHZpZXdJdGVtLmxheW91dFBhcmFtcy5tYXJnaW47XG4gICAgICAgICAgICAgICAgc3dpdGNoICh2aWV3SXRlbS5ncmF2aXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgR3Jhdml0eS5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuQXV0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cG9pbnQueCA9IGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHcmF2aXR5LlJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRwb2ludC54ID0gciAtIHZpZXdJdGVtLndpZHRoIC0gbS5tYXJnaW5SaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuVG9wOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnRwb2ludC55ID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXZpdHkuQm90dG9tOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnRwb2ludC55ID0gYi12aWV3SXRlbS5oZWlnaHQtbS5tYXJnaW5Cb3R0b207XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHcmF2aXR5LkNlbnRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0cG9pbnQueSA9IHQrKChiLXQtdmlld0l0ZW0uaGVpZ2h0KT4wP2ItdC12aWV3SXRlbS5oZWlnaHQ6MCkvMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cG9pbnQueCA9IGwgKyAoKHIgLSBsIC0gdmlld0l0ZW0ud2lkdGgpID4gMCA/IHIgLSBsIC0gdmlld0l0ZW0ud2lkdGggOiAwKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnRwb2ludC5vZmZzZXQobS5tYXJnaW5MZWZ0ID4gMCA/IG0ubWFyZ2luTGVmdCA6IDAsIG0ubWFyZ2luVG9wID4gMCA/IG0ubWFyZ2luVG9wIDogMCk7XG4gICAgICAgICAgICAgICAgdmlld0l0ZW0ub25MYXlvdXQoc3RhcnRwb2ludC54LCBzdGFydHBvaW50LnksIHN0YXJ0cG9pbnQueCArIHZpZXdJdGVtLndpZHRoLCBzdGFydHBvaW50LnkgKyB2aWV3SXRlbS5oZWlnaHQsY2FudmFzKTtcbiAgICAgICAgICAgICAgICAvLyBzdGFydHBvaW50LnRyYW5zbGF0ZSh2aWV3SXRlbS53aWR0aCArIChtLm1hcmdpblJpZ2h0PjA/IG0ubWFyZ2luUmlnaHQ6MCksMCk7XG4gICAgICAgICAgICAgICAgc3RhcnRwb2ludC5vZmZzZXQoMCwgdmlld0l0ZW0uaGVpZ2h0ICsgKG0ubWFyZ2luQm90dG9tID4gMCA/IG0ubWFyZ2luQm90dG9tIDogMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi92aWV3L2ltcGxlbWVudGlvbi9WaWV3R3JvdXAudHNcIiAvPlxuXG5cblxubmFtZXNwYWNlIGFuZHJvaWQud2lkZ2V0IHtcblxuICAgIGltcG9ydCBQYWRkaW5nID0gYW5kcm9pZC5ncmFwaGljcy5QYWRkaW5nO1xuICAgIGltcG9ydCBHcmF2aXR5ID0gYW5kcm9pZC5ncmFwaGljcy5HcmF2aXR5O1xuICAgIGltcG9ydCBSZWN0ID0gYW5kcm9pZC5ncmFwaGljcy5SZWN0O1xuICAgIGltcG9ydCBBbGlnbkVsbWVudCA9IGFuZHJvaWQuZ3JhcGhpY3MuQWxpZ25FbG1lbnQ7XG4gICAgaW1wb3J0IE1hcmdpbiA9IGFuZHJvaWQuZ3JhcGhpY3MuTWFyZ2luO1xuICAgIGltcG9ydCBTaXplID0gYW5kcm9pZC5ncmFwaGljcy5TaXplO1xuICAgIGltcG9ydCBDYW52YXMgPSBhbmRyb2lkLmdyYXBoaWNzLkNhbnZhcztcbiAgICBpbXBvcnQgVmlld0dyb3VwID0gYW5kcm9pZC52aWV3LlZpZXdHcm91cDtcbiAgICBpbXBvcnQgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgIGltcG9ydCBQb2ludCA9IGFuZHJvaWQuZ3JhcGhpY3MuUG9pbnQ7XG4gICAgaW1wb3J0IE1lYXN1cmVTcGVjID0gYW5kcm9pZC52aWV3Lk1lYXN1cmVTcGVjO1xuICAgIGltcG9ydCBPcmllbnRhdGlvbiA9IGFuZHJvaWQuZ3JhcGhpY3MuT3JpZW50YXRpb247XG4gICAgaW1wb3J0IExheW91dFBhcmFtcyA9IGFuZHJvaWQudmlldy5MYXlvdXRQYXJhbXM7XG4gICAgaW1wb3J0IENvbnRleHQgPSBhbmRyb2lkLmFwcC5Db250ZXh0O1xuICAgIGltcG9ydCBEYXRhU2V0T2JzZXJ2ZXIgPSBhbmRyb2lkLmRhdGFiYXNlLkRhdGFTZXRPYnNlcnZlcjtcbiAgICBpbXBvcnQgQWRhcHRlciA9IGFuZHJvaWQuYWRhcHRlci5BZGFwdGVyO1xuICAgIGV4cG9ydCBjbGFzcyBMaXN0VmlldyBleHRlbmRzIFZpZXdHcm91cHtcbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dDpDb250ZXh0KXtcbiAgICAgICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QWRhcHRlcihhZGFwdGVyOkFkYXB0ZXIpe1xuXG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3ZpZXcvaW1wbGVtZW50aW9uL1ZpZXdHcm91cC50c1wiIC8+XG5cblxuXG5uYW1lc3BhY2UgYW5kcm9pZC53aWRnZXQge1xuICAgIGltcG9ydCBQYWRkaW5nID0gYW5kcm9pZC5ncmFwaGljcy5QYWRkaW5nO1xuICAgIGltcG9ydCBHcmF2aXR5ID0gYW5kcm9pZC5ncmFwaGljcy5HcmF2aXR5O1xuICAgIGltcG9ydCBSZWN0ID0gYW5kcm9pZC5ncmFwaGljcy5SZWN0O1xuICAgIGltcG9ydCBBbGlnbkVsbWVudCA9IGFuZHJvaWQuZ3JhcGhpY3MuQWxpZ25FbG1lbnQ7XG4gICAgaW1wb3J0IE1hcmdpbiA9IGFuZHJvaWQuZ3JhcGhpY3MuTWFyZ2luO1xuICAgIGltcG9ydCBTaXplID0gYW5kcm9pZC5ncmFwaGljcy5TaXplO1xuICAgIGltcG9ydCBDYW52YXMgPSBhbmRyb2lkLmdyYXBoaWNzLkNhbnZhcztcbiAgICBpbXBvcnQgVmlld0dyb3VwID0gYW5kcm9pZC52aWV3LlZpZXdHcm91cDtcbiAgICBpbXBvcnQgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgIGltcG9ydCBQb2ludCA9IGFuZHJvaWQuZ3JhcGhpY3MuUG9pbnQ7XG4gICAgaW1wb3J0IE1lYXN1cmVTcGVjID0gYW5kcm9pZC52aWV3Lk1lYXN1cmVTcGVjO1xuICAgIGltcG9ydCBPcmllbnRhdGlvbiA9IGFuZHJvaWQuZ3JhcGhpY3MuT3JpZW50YXRpb247XG4gICAgaW1wb3J0IExheW91dFBhcmFtcyA9IGFuZHJvaWQudmlldy5MYXlvdXRQYXJhbXM7XG4gICAgaW1wb3J0IExheW91dEluZm8gPSBhbmRyb2lkLnZpZXcuTGF5b3V0SW5mbztcbiAgICBpbXBvcnQgQ29udGV4dCA9IGFuZHJvaWQuYXBwLkNvbnRleHQ7XG4gICAgaW1wb3J0IE1vdGlvbkV2ZW50ID0gYW5kcm9pZC52aWV3LmV2ZW50Lk1vdGlvbkV2ZW50O1xuXG5cblxuICAgIGV4cG9ydCBjbGFzcyBTY3JvbGxMYXlvdXQgZXh0ZW5kcyBGcmFtZUxheW91dCB7XG5cbiAgICAgICAgcHJpdmF0ZSBfcmVhbExheW91dEluZm86IExheW91dEluZm87XG5cbiAgICAgICAgY29uc3RydWN0b3IoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1lYXN1cmUod2lkdGg6IE1lYXN1cmVTcGVjLCBoZWlnaHQ6IE1lYXN1cmVTcGVjLCBjYW52YXM6IENhbnZhcyk6IFNpemUge1xuICAgICAgICAgICAgRGVidWcuYXNzZXJ0KHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAxLCBcIlRoZXJlIGlzIG9ubHkgb25lIHZpZXcgdGhhdCBjYW4gYmUgYWRkZWQgdG8gdGhlIHNjcm9sbCBsYXlvdXQgXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uTWVhc3VyZSh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25MYXlvdXQobDogbnVtYmVyLCB0OiBudW1iZXIsIHI6IG51bWJlciwgYjogbnVtYmVyLCBjYW52YXM6IENhbnZhcyk6IHZvaWQge1xuICAgICAgICAgICAgc3VwZXIub25MYXlvdXQobCwgdCwgciwgYiwgY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgbGFzdFB0OiBQb2ludDtcbiAgICAgICAgcHVibGljIG9uSW50ZXJjZXB0TW91c2VFdmVudChldmVudDogTW90aW9uRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIG9uSW50ZXJjZXB0TW91c2VFdmVudCBcIiArIGV2ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy8gLy8gcmV0dXJuIHN1cGVyLm9uSW50ZXJjZXB0TW91c2VFdmVudChldmVudCk7XG4gICAgICAgICAgICAvLyBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xuICAgICAgICAgICAgLy8gICAgIGNhc2UgTW90aW9uRXZlbnQuQUNUSU9OX01PVVNFX09OOlxuICAgICAgICAgICAgLy8gICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmxhc3RQdCA9IG5ldyBQb2ludChldmVudC54LCBldmVudC55KTtcbiAgICAgICAgICAgIC8vICAgICBjYXNlIE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9NT1ZFOlxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoTWF0aC5hYnMoZXZlbnQueSAtIHRoaXMubGFzdFB0LnkpID4gTWF0aC5hYnMoZXZlbnQueCAtIHRoaXMubGFzdFB0LngpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5sYXN0UHQgPSBuZXcgUG9pbnQoZXZlbnQueCwgZXZlbnQueSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkludGVyY2VwdCBSZXN1bHQgIFwiICsgcmVzdWx0KTtcbiAgICAgICAgICAgIC8vIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwcml2YXRlIHN0YXJ0UHQ6IFBvaW50O1xuICAgICAgICBwdWJsaWMgb25Nb3VzZUV2ZW50KGV2ZW50OiBNb3Rpb25FdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk1vdXNlRXZlbnQgXCIgKyBldmVudC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UHQ6IFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LngsIGV2ZW50LnkpO1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9XSEVFTDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRQdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlblswXS5oZWlnaHQgPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSAhPSBudWxsICYmIGV2ZW50LmRlbHRhWSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBvZmZzZXQ9KGN1cnJlbnRQdC55LXRoaXMuc3RhcnRQdC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IC1ldmVudC5kZWx0YVk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2Zmc2V0ID4gMCAgJiYgdGhpcy5jaGlsZHJlblswXS50b3AgPj10aGlzLnRvcCl7cmV0dXJuO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2Zmc2V0IDwgMCAgJiYgdGhpcy5jaGlsZHJlblswXS5ib3R0b20gPD0gdGhpcy5ib3R0b20pe3JldHVybjt9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlblswXS5vZmZzZXQoMCxvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmludmFsaWRhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdExheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmludmFsaWRhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3AnICsgdGhpcy5jaGlsZHJlblswXS50b3AgK1wiICwgYm90dG9tICBcIiArIHRoaXMuY2hpbGRyZW5bMF0uYm90dG9tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFB0ID0gY3VycmVudFB0LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIE1vdGlvbkV2ZW50LkFDVElPTl9NT1VTRV9PVVQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UHQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG59IiwibmFtZXNwYWNlIGFuZHJvaWQud2lkZ2V0e1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGV4cG9ydCBjbGFzcyBTY3JvbGxlcntcbiAgICAgICAgXG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBGYXN0U2Nyb2xsZXJ7XG5cbiAgICB9XG59IiwibmFtZXNwYWNlIGFuZHJvaWQud2lkZ2V0IHtcbiAgICBpbXBvcnQgUGFkZGluZyA9IGFuZHJvaWQuZ3JhcGhpY3MuUGFkZGluZztcbiAgICBpbXBvcnQgQWxpZ24gPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduO1xuICAgIGltcG9ydCBHcmF2aXR5ID0gYW5kcm9pZC5ncmFwaGljcy5HcmF2aXR5O1xuXG5cbiAgICBpbXBvcnQgQWxpZ25FbG1lbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduRWxtZW50O1xuICAgIGltcG9ydCBNYXJnaW4gPSBhbmRyb2lkLmdyYXBoaWNzLk1hcmdpbjtcblxuICAgIGltcG9ydCBTaXplID0gYW5kcm9pZC5ncmFwaGljcy5TaXplO1xuICAgIGltcG9ydCBDYW52YXMgPSBhbmRyb2lkLmdyYXBoaWNzLkNhbnZhcztcbiAgICBpbXBvcnQgVmlld0dyb3VwID0gYW5kcm9pZC52aWV3LlZpZXdHcm91cDtcbiAgICBpbXBvcnQgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuXG4gICAgaW1wb3J0IFBvaW50ID0gYW5kcm9pZC5ncmFwaGljcy5Qb2ludDtcbiAgICBpbXBvcnQgTWVhc3VyZVNwZWMgPSBhbmRyb2lkLnZpZXcuTWVhc3VyZVNwZWM7XG4gICAgaW1wb3J0IEZvbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkZvbnQ7XG4gICAgaW1wb3J0IExheW91dEluZm8gID0gYW5kcm9pZC52aWV3LkxheW91dEluZm87XG4gICAgaW1wb3J0IExheW91dFBhcmFtcyA9IGFuZHJvaWQudmlldy5MYXlvdXRQYXJhbXM7XG4gICAgZXhwb3J0IGVudW0gRWxsaXBzaXple1xuXG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBUZXh0VmlldyBleHRlbmRzIFZpZXd7XG4gICAgICAgIHByaXZhdGUgdGV4dCA6c3RyaW5nO1xuICAgICAgICBwcml2YXRlIGZvbnQgOkZvbnQ7XG4gICAgICAgIHByaXZhdGUgX2VsbGlwc2l6ZTpFbGxpcHNpemU7XG4gICAgICAgIHByaXZhdGUgX21heFdpZHRoOm51bWJlcjtcbiAgICAgICAgcHJpdmF0ZSBfbGluZXNwYWNlOm51bWJlcjtcbiAgICAgICAgb25EcmF3KGNhbnZhczpDYW52YXMpOnZvaWR7ICAgICAgICAgICAgXG4gICAgICAgICAgICBzdXBlci5vbkRyYXcoY2FudmFzKTtcbiAgICAgICAgICAgIGNhbnZhcy5kcmF3VGV4dCh0aGlzLnRleHQsdGhpcy5sYXlvdXRJbmZvLmlubmVycmVjdC5zdGFydFBvaW50LHRoaXMuZm9udCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6c3RyaW5nKTp2b2lke1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2V0Rm9udChmb250OkZvbnQpOnZvaWR7XG4gICAgICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0IGVsbGlwc2l6ZShlbGxpcHNpemU6RWxsaXBzaXplKXtcbiAgICAgICAgICAgIHRoaXMuX2VsbGlwc2l6ZSA9IGVsbGlwc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldCBlbGxpcHNpemUoKTpFbGxpcHNpemV7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWxsaXBzaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0IG1heFdpZHRoKG1heFdpZHRoOm51bWJlcil7XG4gICAgICAgICAgICB0aGlzLl9tYXhXaWR0aCA9IG1heFdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0IG1heFdpZHRoKCk6bnVtYmVye1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21heFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXQgbGluZXNwYWNlKCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGluZXNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0IGxpbmVzcGFjZShsaW5lc3BhY2U6bnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuX2xpbmVzcGFjZSA9IGxpbmVzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByaXZhdGUgX21lYXN1cmVTdHJpbmcod2lkdGg6bnVtYmVyKTpTaXple1xuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuICAgICAgICBvbk1lYXN1cmUod2lkdGg6IE1lYXN1cmVTcGVjLCBoZWlnaHQ6IE1lYXN1cmVTcGVjLCBjYW52YXM6IENhbnZhcyk6IFNpemUge1xuICAgICAgICAgICAgaWYoIXRoaXMuZm9udCl7XG4gICAgICAgICAgICAgICAgdGhpcy5mb250ID0gIG5ldyBGb250KDE2LFwiXCIsJ3doaXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9sYXlvdXRJbmZvID0gbmV3IExheW91dEluZm8oMCwwLDAsMCx0aGlzLnBhZGRpbmcsMCk7XG4gICAgICAgICAgICB2YXIgdzpudW1iZXIgPSB0aGlzLmxheW91dFBhcmFtcy53aWR0aDtcbiAgICAgICAgICAgIHZhciBoOm51bWJlciA9IHRoaXMubGF5b3V0UGFyYW1zLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBzaXplIDpTaXplID0gbmV3IFNpemUodywgaCk7XG4gICAgICAgICAgICB2YXIgd2lkdGhtb2RlID0gdGhpcy5sYXlvdXRQYXJhbXMud2lkdGhNb2RlO1xuICAgICAgICAgICAgdmFyIGhlaWdodG1vZGUgPSB0aGlzLmxheW91dFBhcmFtcy5oZWlnaHRNb2RlO1xuICAgICAgICAgICAgdmFyIHRleHRzaXplID0gY2FudmFzLm1lYXN1cmVTdHJpbmcodGhpcy50ZXh0LHRoaXMuZm9udCk7XG4gICAgICAgICAgICBpZih3aWR0aG1vZGUgPT09IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpe1xuICAgICAgICAgICAgICAgIHNpemUud2lkdGggPSB3aWR0aC52YWx1ZTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHdpZHRobW9kZSA9PT0gTGF5b3V0UGFyYW1zLldSQVBfQ09OVEVOVCl7XG4gICAgICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHRleHRzaXplLndpZHRoPnRoaXMuX21heFdpZHRoP3RoaXMuX21heFdpZHRoOnRleHRzaXplLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaGVpZ2h0bW9kZSA9PT0gTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCl7XG4gICAgICAgICAgICAgICAgc2l6ZS5oZWlnaHQgPSBoZWlnaHQudmFsdWU7XG4gICAgICAgICAgICB9ZWxzZSBpZihoZWlnaHRtb2RlID09PSBMYXlvdXRQYXJhbXMuV1JBUF9DT05URU5UKXtcbiAgICAgICAgICAgICAgICBzaXplLmhlaWdodCA9IHRleHRzaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TWVhc3VyZWREaW1lbnNpb24obmV3IE1lYXN1cmVTcGVjKHNpemUud2lkdGgsTGF5b3V0UGFyYW1zLkVYQUNUTFkpLG5ldyBNZWFzdXJlU3BlYyhzaXplLmhlaWdodCxMYXlvdXRQYXJhbXMuRVhBQ1RMWSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZGF0YWJhc2UvRGF0YVNldE9ic2VydmFibGUudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FkYXB0ZXIvVmlld1BhZ2VyQWRhcHRlci50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbC9BcnJheUxpc3QudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWwvSGFuZGxlci50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZGV2aWNlL0RldmljZS50c1wiIC8+XG5cbm5hbWVzcGFjZSBhbmRyb2lkLndpZGdldCB7XG5cbiAgICBpbXBvcnQgUGFkZGluZyA9IGFuZHJvaWQuZ3JhcGhpY3MuUGFkZGluZztcbiAgICBpbXBvcnQgR3Jhdml0eSA9IGFuZHJvaWQuZ3JhcGhpY3MuR3Jhdml0eTtcbiAgICBpbXBvcnQgUmVjdCA9IGFuZHJvaWQuZ3JhcGhpY3MuUmVjdDtcbiAgICBpbXBvcnQgQWxpZ25FbG1lbnQgPSBhbmRyb2lkLmdyYXBoaWNzLkFsaWduRWxtZW50O1xuICAgIGltcG9ydCBNYXJnaW4gPSBhbmRyb2lkLmdyYXBoaWNzLk1hcmdpbjtcbiAgICBpbXBvcnQgU2l6ZSA9IGFuZHJvaWQuZ3JhcGhpY3MuU2l6ZTtcbiAgICBpbXBvcnQgQ2FudmFzID0gYW5kcm9pZC5ncmFwaGljcy5DYW52YXM7XG4gICAgaW1wb3J0IFZpZXdHcm91cCA9IGFuZHJvaWQudmlldy5WaWV3R3JvdXA7XG4gICAgaW1wb3J0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICBpbXBvcnQgUG9pbnQgPSBhbmRyb2lkLmdyYXBoaWNzLlBvaW50O1xuICAgIGltcG9ydCBNZWFzdXJlU3BlYyA9IGFuZHJvaWQudmlldy5NZWFzdXJlU3BlYztcbiAgICBpbXBvcnQgT3JpZW50YXRpb24gPSBhbmRyb2lkLmdyYXBoaWNzLk9yaWVudGF0aW9uO1xuICAgIGltcG9ydCBMYXlvdXRQYXJhbXMgPSBhbmRyb2lkLnZpZXcuTGF5b3V0UGFyYW1zO1xuICAgIGltcG9ydCBWaWV3UGFnZUFkYXB0ZXIgPSBhbmRyb2lkLmFkYXB0ZXIuVmlld1BhZ2VBZGFwdGVyO1xuICAgIGltcG9ydCBBcnJheUxpc3QgPSBhbmRyb2lkLnV0aWwuQXJyYXlMaXN0O1xuICAgIGltcG9ydCBEYXRhU2V0T2JzZXJ2ZXIgPSBhbmRyb2lkLmRhdGFiYXNlLkRhdGFTZXRPYnNlcnZlcjtcbiAgICBpbXBvcnQgSGFuZGxlciA9IGFuZHJvaWQudXRpbC5IYW5kbGVyO1xuICAgIGltcG9ydCBNZXNzYWdlID0gYW5kcm9pZC51dGlsLk1lc3NhZ2U7XG4gICAgaW1wb3J0IExvZyA9IGFuZHJvaWQudXRpbC5Mb2c7XG4gICAgaW1wb3J0IENvbnRleHQgPSBhbmRyb2lkLmFwcC5Db250ZXh0O1xuICAgIGltcG9ydCBNb3Rpb25FdmVudCA9IGFuZHJvaWQudmlldy5ldmVudC5Nb3Rpb25FdmVudDtcbiAgICBpbXBvcnQgRGV2aWNlID0gYW5kcm9pZC5kZXZpY2UuRGV2aWNlO1xuICAgIGxldCBUQUc6IHN0cmluZyA9IFwiU2NhbGVWaWV3UGFnZXJcIjtcbiAgICBjb25zdCBBTklNQVRJT05fRlJBTUVfRFVSQVRJT046IG51bWJlciA9IDEwMDAgLyA4MDtcbiAgICBjb25zdCBNSU5fU1BFRUQ6IG51bWJlciA9IDEwLjA7XG4gICAgY29uc3QgTUlOX1RPVUNIOiBudW1iZXIgPSAxMjtcblxuICAgIGNvbnN0IE1PVkVfTEVGVDogbnVtYmVyID0gMTAwMDE7XG4gICAgY29uc3QgTU9WRV9SSUdIVDogbnVtYmVyID0gMTAwMDI7XG4gICAgY29uc3QgTU9WRV9CQUNLOiBudW1iZXIgPSAxMDAwMztcbiAgICBjb25zdCBTQ0FMRV9DT05TVEFOVDogbnVtYmVyID0gMTAwO1xuICAgIGNvbnN0IFNUQVRFX01PVkVfTEVGVDogbnVtYmVyID0gMTEwMDE7XG4gICAgY29uc3QgU1RBVEVfTU9WRV9SSUdIVDogbnVtYmVyID0gMTEwMDI7XG4gICAgZXhwb3J0IGNsYXNzIFZpZXdQYWdlciBleHRlbmRzIFZpZXdHcm91cCB7XG5cbiAgICAgICAgcHJpdmF0ZSBtUG9zaXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIHByaXZhdGUgbUFkYXB0ZXI6IFZpZXdQYWdlQWRhcHRlcjtcbiAgICAgICAgcHJpdmF0ZSBtT2xkQWRhcHRlcjogVmlld1BhZ2VBZGFwdGVyO1xuICAgICAgICBwcml2YXRlIG1WaWV3U3RhY2s6IEFycmF5TGlzdDxJdGVtSW5mbz4gPSBuZXcgQXJyYXlMaXN0PEl0ZW1JbmZvPigpO1xuICAgICAgICBwcml2YXRlIG1JbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgcHJpdmF0ZSBtU2l6ZTogbnVtYmVyID0gMDtcbiAgICAgICAgcHJpdmF0ZSBtQW5pbWF0aW9uU3RhdGU6IG51bWJlciA9IDA7XG4gICAgICAgIHByaXZhdGUgbVNjYWxlOiBudW1iZXIgPSAwO1xuICAgICAgICBwcml2YXRlIG1Jc1NjYWxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBwcml2YXRlIG1NaW5fc3BlZWQ6IG51bWJlciA9IE1JTl9TUEVFRDtcbiAgICAgICAgcHJpdmF0ZSBtaW5fdG91Y2g6IG51bWJlciA9IE1JTl9UT1VDSDtcbiAgICAgICAgcHJpdmF0ZSBtTGF5b3V0UGFyYW1zOiBMYXlvdXRQYXJhbXM7XG4gICAgICAgIHByaXZhdGUgbUxhc3RBbmltYXRpb25UaW1lOiBudW1iZXIgPSAwO1xuICAgICAgICBwcml2YXRlIG1DdXJyZW50QW5pbWF0aW9uVGltZTogbnVtYmVyID0gMDtcbiAgICAgICAgcHJpdmF0ZSBtU3BlZWQ6IG51bWJlciA9IDEzMDtcbiAgICAgICAgcHJpdmF0ZSBtQ3VycmVudFZpZXc6IFZpZXc7XG4gICAgICAgIHByaXZhdGUgbU5leHRWaWV3OiBWaWV3O1xuICAgICAgICBwcml2YXRlIG1QcmVWaWV3OiBWaWV3O1xuICAgICAgICBwcml2YXRlIG1BbmltYXRpb25FbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBwcml2YXRlIG1DZW50ZXJYOiBudW1iZXIgPSAwO1xuICAgICAgICBwcml2YXRlIG1DZW50ZXJZOiBudW1iZXIgPSAwO1xuICAgICAgICBwcml2YXRlIGxpc3RlbmVyOiBQYWdlckNoYW5nZWRMaXN0ZW5lcjtcbiAgICAgICAgcHJpdmF0ZSBtRGF0YVNldE9ic2VydmVyOiBEYXRhU2V0T2JzZXJ2ZXI7XG4gICAgICAgIHByaXZhdGUgbUhhbmRsZXI6IEhhbmRsZXI7XG4gICAgICAgIHByaXZhdGUgbUFyZWFUb3VjaExpc3RlbmVyOiBBcmVhVG91Y2hMaXN0ZW5lcjtcbiAgICAgICAgcHJpdmF0ZSBkaXJlY3Rpb24gPSAxO1xuICAgICAgICBwcml2YXRlIG9sZHg7XG4gICAgICAgIHByaXZhdGUgb2xkeTtcbiAgICAgICAgcHJpdmF0ZSBkb3duWDtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICAgICAgbGV0IGNvbnRleHQ6IENvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHRoaXMubU1pbl9zcGVlZCA9IE1JTl9TUEVFRCAqRGV2aWNlLmRlbnNpdHk7XG4gICAgICAgICAgICB0aGlzLm1MYXlvdXRQYXJhbXMgPSBuZXcgTGF5b3V0UGFyYW1zKExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQsIExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpO1xuICAgICAgICAgICAgdGhpcy5taW5fdG91Y2ggPSAzO1xuICAgICAgICAgICAgdGhpcy5tSGFuZGxlciA9IG5ldyBIYW5kbGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMubUhhbmRsZXIuaGFuZGxlTWVzc2FnZSA9IChtc2c6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1zZy53aGF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTU9WRV9MRUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xlZnRPckJvdW5jZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTU9WRV9SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9SaWdodE9yQm91bmNlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNldEFyZWFUb3VjaExpc3RlbmVyKGw6IEFyZWFUb3VjaExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lciA9IGw7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgb25JbnRlcmNlcHRUb3VjaEV2ZW50KGV2bnQ6IE1vdGlvbkV2ZW50KTogYm9vbGVhbiB7XG5cbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBldm50LmFjdGlvbjtcbiAgICAgICAgICAgIGxldCB4ID0gZXZudC54O1xuICAgICAgICAgICAgbGV0IHkgPSBldm50Lnk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBNb3Rpb25FdmVudC5BQ1RJT05fRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbGR4ID0geDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbGR5ID0geTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3duWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIE1vdGlvbkV2ZW50LkFDVElPTl9NT1ZFOlxuICAgICAgICAgICAgICAgICAgICBpZiAoeSAtIHRoaXMub2xkeSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoeCAtIHRoaXMub2xkeCkgLyBNYXRoLmFicyh5IC0gdGhpcy5vbGR5KSA+IDIgJiYgTWF0aC5hYnMoeCAtIHRoaXMuZG93blgpID4gdGhpcy5taW5fdG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIG9uVG91Y2hFdmVudChldmVudDogTW90aW9uRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tQW5pbWF0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gZXZlbnQuYWN0aW9uXG4gICAgICAgICAgICBsZXQgeCA9IGV2ZW50Lng7XG4gICAgICAgICAgICBsZXQgeSA9IGV2ZW50Lnk7XG4gICAgICAgICAgICBpZiAodGhpcy5tQ3VycmVudFZpZXcgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIE1vdGlvbkV2ZW50LkFDVElPTl9NT1ZFOiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kKFwiZXZlbnRcIiwgXCJtb3ZlIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB4IC0gdGhpcy5vbGR4ID4gMCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHggLSB0aGlzLm9sZHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9sZHggPSB4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBNb3Rpb25FdmVudC5BQ1RJT05fVVA6XG4gICAgICAgICAgICAgICAgY2FzZSBNb3Rpb25FdmVudC5BQ1RJT05fQ0FOQ0VMOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9sZHggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2xkeSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuZG93blggLSB4KSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPj0gdGhpcy53aWR0aCAvIDQgKiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lci5vbkxlZnRUb3VjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4IDw9IHRoaXMud2lkdGggLyA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lci5vblJpZ2h0VG91Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1BcmVhVG91Y2hMaXN0ZW5lci5vbk1pZGRsZVRvdWNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVRvQW5pbWF0aW9uKHRoaXMuZGlyZWN0aW9uICogdGhpcy5tTWluX3NwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgb25NZWFzdXJlKHdpZHRoTWVhc3VyZVNwZWM6IE1lYXN1cmVTcGVjLCBoZWlnaHRNZWFzdXJlU3BlYzogTWVhc3VyZVNwZWMsIGNhbnZhczogQ2FudmFzKTogU2l6ZSB7XG4gICAgICAgICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHdpZHRoTWVhc3VyZVNwZWMuZ2V0TWVhc3VyZVZhbHVlKCk7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSBoZWlnaHRNZWFzdXJlU3BlYy5nZXRNZWFzdXJlVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMubUNlbnRlclggPSB3aWR0aCAvIDI7XG4gICAgICAgICAgICB0aGlzLm1DZW50ZXJZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tVmlld1N0YWNrLnNpemUoKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkOiBWaWV3ID0gdGhpcy5tVmlld1N0YWNrLmdldChpKS52aWV3O1xuICAgICAgICAgICAgICAgIGxldCBscDogTGF5b3V0UGFyYW1zID0gY2hpbGQubGF5b3V0UGFyYW1zO1xuICAgICAgICAgICAgICAgIGxldCB3ID0gbHAud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGggPSBscC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKGxwLmhlaWdodE1vZGUgPT09IExheW91dFBhcmFtcy5NQVRDSF9QQVJFTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxwLndpZHRoTW9kZSA9PT0gTGF5b3V0UGFyYW1zLk1BVENIX1BBUkVOVCkge1xuICAgICAgICAgICAgICAgICAgICB3ID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkLm9uTWVhc3VyZShuZXcgTWVhc3VyZVNwZWModywgbHAud2lkdGhNb2RlKSwgbmV3IE1lYXN1cmVTcGVjKGgsIGxwLmhlaWdodE1vZGUpLCBjYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpemU6IFNpemUgPSBuZXcgU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWVhc3VyZWREaW1lbnNpb24obmV3IE1lYXN1cmVTcGVjKHNpemUud2lkdGgsIExheW91dFBhcmFtcy5FWEFDVExZKSwgbmV3IE1lYXN1cmVTcGVjKHNpemUuaGVpZ2h0LCBMYXlvdXRQYXJhbXMuRVhBQ1RMWSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBvbkxheW91dChsOiBudW1iZXIsIHQ6IG51bWJlciwgcjogbnVtYmVyLCBiOiBudW1iZXIsIGNhbnZhczogQ2FudmFzKTogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLmxheW91dEluZm8ucmVzZXQobCwgdCwgciwgYiwgdGhpcy5wYWRkaW5nLCAwKTtcbiAgICAgICAgICAgIHZhciBpbm5lcnJlY3Q6IFJlY3QgPSB0aGlzLmxheW91dEluZm8uaW5uZXJyZWN0O1xuICAgICAgICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSByIC0gbDtcbiAgICAgICAgICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IGIgLSB0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1WaWV3U3RhY2suc2l6ZSgpOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmlldzogVmlldyA9IHRoaXMubVZpZXdTdGFjay5nZXQoaSkudmlldztcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tVmlld1N0YWNrLmdldChpKS5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgZ2FwID0gcG9zIC0gdGhpcy5tSW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHZpZXdsZWZ0ID0gdmlldy5wYWRkaW5nLmxlZnRQYWRkaW5nICsgKHdpZHRoIC0gdmlldy53aWR0aCkgLyAyO1xuICAgICAgICAgICAgICAgIGxldCB2aWV3dG9wID0gdmlldy5wYWRkaW5nLnRvcFBhZGRpbmcgKyAoaGVpZ2h0IC0gdmlldy5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgICAgICBnYXAgPSBnYXAgPiAwID8gMCA6IGdhcDtcbiAgICAgICAgICAgICAgICB2aWV3Lm9uTGF5b3V0KHZpZXdsZWZ0ICsgZ2FwICogd2lkdGgsIHZpZXd0b3AsIHZpZXdsZWZ0ICsgZ2FwICogd2lkdGggKyB2aWV3LndpZHRoLCB2aWV3dG9wICsgdmlldy5oZWlnaHQsY2FudmFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBkaXNwYXRjaERyYXcoY2FudmFzOiBDYW52YXMpOiB2b2lkIHtcbiAgICAgICAgICAgIC8vIHN1cGVyLmRpc3BhdGNoRHJhdyhjYW52YXMpO1xuICAgICAgICAgICAgLy8gTG9nLmQoJ2Rpc3BhdGNoRHJhdyAnICsgdGhpcy5tUG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKHRoaXMubUFuaW1hdGlvblN0YXRlID09PSBTVEFURV9NT1ZFX0xFRlQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaGlsZChjYW52YXMsIHRoaXMubU5leHRWaWV3KTtcbiAgICAgICAgICAgICAgICBjYW52YXMuc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy50cmFuc2xhdGUodGhpcy5tUG9zaXRpb24sIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NoaWxkKGNhbnZhcywgdGhpcy5tQ3VycmVudFZpZXcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm1BbmltYXRpb25TdGF0ZSA9PT0gU1RBVEVfTU9WRV9SSUdIVCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2hpbGQoY2FudmFzLCB0aGlzLm1DdXJyZW50Vmlldyk7XG4gICAgICAgICAgICAgICAgY2FudmFzLnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjYW52YXMudHJhbnNsYXRlKHRoaXMubVBvc2l0aW9uLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaGlsZChjYW52YXMsIHRoaXMubVByZVZpZXcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaGlsZChjYW52YXMsIHRoaXMubUN1cnJlbnRWaWV3KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNldEFkYXB0ZXIoYWRhcHRlcjogVmlld1BhZ2VBZGFwdGVyKSB7XG4gICAgICAgICAgICB0aGlzLm1PbGRBZGFwdGVyID0gdGhpcy5tQWRhcHRlcjtcbiAgICAgICAgICAgIHRoaXMubUFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgICAgICAgICAgaWYgKHRoaXMubUFkYXB0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubURhdGFTZXRPYnNlcnZlciA9IG5ldyBEYXRhU2V0T2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5tRGF0YVNldE9ic2VydmVyLm9uQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tU2l6ZSA9IHNlbGYubUFkYXB0ZXIuZ2V0Q291bnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tRGF0YVNldE9ic2VydmVyLm9uSW52YWxpZGF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW52YWxpZGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubUFkYXB0ZXIucmVnaXN0ZXJEYXRhU2V0T2JzZXJ2ZXIodGhpcy5tRGF0YVNldE9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1TaXplID0gYWRhcHRlci5nZXRDb3VudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaE5vcm1hbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNldEN1cnJlbnRJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIExvZy5kKCdzZXRDdXJyZW50SXRlbSAnICsgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5tSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaE5vcm1hbCgpO1xuICAgICAgICAgICAgdGhpcy5wYWdlck1vdmluZ0VuZCh0aGlzLm1JbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZ2V0Q3VycmVudEl0ZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2V0UGFnZXJDaGFuZ2VkTGlzdGVuZXIobGlzdGVuOiBQYWdlckNoYW5nZWRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9IGxpc3RlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgcmVmcmVzaE5vcm1hbCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1BZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubUluZGV4ID49IDAgJiYgdGhpcy5tSW5kZXggPCB0aGlzLm1BZGFwdGVyLmdldENvdW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVSZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVMb2FkKHRoaXMubUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1WaWV3U3RhY2suc2l6ZSgpOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWV3OiBWaWV3ID0gdGhpcy5tVmlld1N0YWNrLmdldChpKS52aWV3O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLm1WaWV3U3RhY2suZ2V0KGkpLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLm1JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubUN1cnJlbnRWaWV3ID0gdmlldztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFZpZXcodmlldywgMSwgdGhpcy5tTGF5b3V0UGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5tSW5kZXggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tUHJlVmlldyA9IHZpZXc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWaWV3KHZpZXcsIDAsIHRoaXMubUxheW91dFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMubUluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubU5leHRWaWV3ID0gdmlldztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFZpZXcodmlldywgMSwgdGhpcy5tTGF5b3V0UGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tQWRhcHRlci5nZXRDb3VudCgpID09PSAwICYmIHRoaXMubUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnY3VycmVudCBpbmRleCBpcyAnICsgdGhpcy5tSW5kZXggKyAnIHNpemUgaXMgJyArIHRoaXMubUFkYXB0ZXIuZ2V0Q291bnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByaXZhdGUgcHJlUmVtb3ZlKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1WaWV3U3RhY2suc2l6ZSgpOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmlldzogVmlldyA9IHRoaXMubVZpZXdTdGFjay5nZXQoaSkudmlldztcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IHRoaXMubVZpZXdTdGFjay5nZXQoaSkuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWaWV3KHZpZXcpO1xuICAgICAgICAgICAgICAgIHRoaXMubUFkYXB0ZXIuZGVzdG9yeUl0ZW0ocG9zaXRpb24sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIHByaXZhdGUgcHJlTG9hZChwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tQWRhcHRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubVZpZXdTdGFjay5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMubVZpZXdTdGFjay5hZGQodGhpcy5wcmVMb2FkUHJlVmlldyhwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIHRoaXMubVZpZXdTdGFjay5hZGQodGhpcy5sb2FkVmlldyhwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIHRoaXMubVZpZXdTdGFjay5hZGQodGhpcy5wcmVMb2FkTmV4dFZpZXcocG9zaXRpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHJpdmF0ZSBwcmVMb2FkUHJlVmlldyhwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gcG9zaXRpb24gLSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZFZpZXcocG9zKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHJpdmF0ZSBwcmVMb2FkTmV4dFZpZXcocG9zaXRpb246IG51bWJlcikge1xuICAgICAgICAgICAgbGV0IHBvcyA9IHBvc2l0aW9uICsgMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRWaWV3KHBvcyk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGxvYWRWaWV3KGluZGV4OiBudW1iZXIpOiBJdGVtSW5mbyB7XG4gICAgICAgICAgICBpZiAodGhpcy5tQWRhcHRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdOdWxsIHBvaW50IEV4Y2VwdGlvbiBhZGFwdGVyIGlzIG51bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHBvcyA9IGluZGV4O1xuICAgICAgICAgICAgaWYgKHBvcyA+PSB0aGlzLm1TaXplKSB7XG4gICAgICAgICAgICAgICAgcG9zID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgcG9zICs9IHRoaXMubVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmlldzogVmlldyA9IHRoaXMubUFkYXB0ZXIuaW5pdEl0ZW0ocG9zLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSXRlbUluZm8odmlldywgaW5kZXgsIHBvcyk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIG1vdmUoZGlzOiBudW1iZXIpIHtcbiAgICAgICAgICAgIExvZy5kKFwibW92ZSBcIiArIGRpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5tUG9zaXRpb24gPT09IDAgJiYgZGlzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlckNoYW5nZWQodGhpcy5tSW5kZXgsIGRpcyA+IDAgPyB0aGlzLm1JbmRleCArIDEgOiB0aGlzLm1JbmRleCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tUG9zaXRpb24gKz0gZGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMubVBvc2l0aW9uID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1BbmltYXRpb25TdGF0ZSA9IFNUQVRFX01PVkVfUklHSFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tUG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tQW5pbWF0aW9uU3RhdGUgPSBTVEFURV9NT1ZFX0xFRlQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbW92ZWRlZ3JlZXByZVZpZXcgPSB0aGlzLm1Qb3NpdGlvbiAvIHRoaXMud2lkdGg7XG4gICAgICAgICAgICBsZXQgbW92ZWRlZ3JlZSA9IHRoaXMubVBvc2l0aW9uICogKHRoaXMubUluZGV4ICsgMSkgLyB0aGlzLndpZHRoICogdGhpcy5tQWRhcHRlci5nZXRDb3VudCgpO1xuICAgICAgICAgICAgdGhpcy5wYWdlck1vdmluZyhtb3ZlZGVncmVlcHJlVmlldywgbW92ZWRlZ3JlZSk7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRhdGUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBwcmVwYXJlVG9BbmltYXRpb24oc3BlZWQ6IG51bWJlcikge1xuICAgICAgICAgICAgbGV0IG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMubUFuaW1hdGlvbkVuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tTGFzdEFuaW1hdGlvblRpbWUgPSBub3c7XG4gICAgICAgICAgICB0aGlzLm1DdXJyZW50QW5pbWF0aW9uVGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMubVNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5tU3BlZWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1TcGVlZCA9IHRoaXMubU1pbl9zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzcGVlZCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1TcGVlZCA9IE1hdGguYWJzKHRoaXMubVNwZWVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvUmlnaHRPckJvdW5jZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1TcGVlZCA9IC0xICogTWF0aC5hYnModGhpcy5tU3BlZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9MZWZ0T3JCb3VuY2VBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBmbGlwTGVmdCgpIHtcbiAgICAgICAgICAgIExvZy5kKFwiZmxpcExlZnQgXCIgKyB0aGlzLm1BbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1BbmltYXRpb25FbmQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMubVBvc2l0aW9uID0gdGhpcy5tQ3VycmVudFZpZXcubGVmdDtcbiAgICAgICAgICAgIHRoaXMubW92ZSgtMSk7XG4gICAgICAgICAgICBsZXQgbm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5tQW5pbWF0aW9uRW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1MYXN0QW5pbWF0aW9uVGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMubUN1cnJlbnRBbmltYXRpb25UaW1lID0gbm93O1xuICAgICAgICAgICAgdGhpcy5tU3BlZWQgPSAtdGhpcy5tTWluX3NwZWVkO1xuICAgICAgICAgICAgdGhpcy5kb0xlZnRPckJvdW5jZUFuaW1hdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGZsaXBSaWdodCgpIHtcbiAgICAgICAgICAgIExvZy5kKFwiZmlscFJpZ2h0IFwiICsgdGhpcy5tQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5tQW5pbWF0aW9uRW5kKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLm1Qb3NpdGlvbiA9IHRoaXMubUN1cnJlbnRWaWV3LmxlZnQ7XG4gICAgICAgICAgICB0aGlzLm1vdmUoMSk7XG4gICAgICAgICAgICBsZXQgbm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5tQW5pbWF0aW9uRW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1MYXN0QW5pbWF0aW9uVGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMubUN1cnJlbnRBbmltYXRpb25UaW1lID0gbm93O1xuICAgICAgICAgICAgdGhpcy5tU3BlZWQgPSB0aGlzLm1NaW5fc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmRvUmlnaHRPckJvdW5jZUFuaW1hdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBkb1JpZ2h0T3JCb3VuY2VBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBsZXQgbm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgbGV0IHQgPSAxO1xuICAgICAgICAgICAgbGV0IHM6IG51bWJlciA9IHRoaXMubVNwZWVkICogdDtcbiAgICAgICAgICAgIGlmICh0aGlzLm1Qb3NpdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tUG9zaXRpb24gPT09IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tSGFuZGxlci5yZW1vdmVNZXNzYWdlcyhNT1ZFX1JJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRSaWdodGFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzICsgdGhpcy5tUG9zaXRpb24gPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSB0aGlzLndpZHRoIC0gdGhpcy5tUG9zaXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tUG9zaXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tSGFuZGxlci5yZW1vdmVNZXNzYWdlcyhNT1ZFX1JJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRCb3VuY2VhbmltdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzICsgdGhpcy5tUG9zaXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAtdGhpcy5tUG9zaXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlKHMpO1xuICAgICAgICAgICAgdGhpcy5tQ3VycmVudEFuaW1hdGlvblRpbWUgKz0gQU5JTUFUSU9OX0ZSQU1FX0RVUkFUSU9OO1xuICAgICAgICAgICAgdGhpcy5tSGFuZGxlci5yZW1vdmVNZXNzYWdlcyhNT1ZFX0xFRlQpO1xuICAgICAgICAgICAgdGhpcy5tSGFuZGxlci5yZW1vdmVNZXNzYWdlcyhNT1ZFX1JJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubUhhbmRsZXIuc2VuZE1lc3NhZ2VEZWxheWVkKHRoaXMubUhhbmRsZXIub2J0YWluTWVzc2FnZShNT1ZFX1JJR0hUKSwgQU5JTUFUSU9OX0ZSQU1FX0RVUkFUSU9OKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgZG9MZWZ0T3JCb3VuY2VBbmltYXRpb24oKSB7XG4gICAgICAgICAgICAvLyBMb2cuZChUQUcsIFwiZG9sZWZ0QW5pbWF0aW9uICBcIik7XG4gICAgICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGxldCB0ID0gMTsvLyhub3cgLSBtTGFzdEFuaW1hdGlvblRpbWUpLzEwMDA7XG4gICAgICAgICAgICBsZXQgcyA9ICh0aGlzLm1TcGVlZCAqIHQpO1xuICAgICAgICAgICAgaWYgKHRoaXMubVBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1Qb3NpdGlvbiArIHRoaXMud2lkdGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1IYW5kbGVyLnJlbW92ZU1lc3NhZ2VzKE1PVkVfTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kTGVmdEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzICsgdGhpcy5tUG9zaXRpb24gKyB0aGlzLndpZHRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gLSh0aGlzLm1Qb3NpdGlvbiArIHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubVBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tSGFuZGxlci5yZW1vdmVNZXNzYWdlcyhNT1ZFX0xFRlQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEJvdW5jZWFuaW10aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocyArIHRoaXMubVBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gLXRoaXMubVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlKHMpO1xuICAgICAgICAgICAgdGhpcy5tQ3VycmVudEFuaW1hdGlvblRpbWUgKz0gQU5JTUFUSU9OX0ZSQU1FX0RVUkFUSU9OO1xuICAgICAgICAgICAgdGhpcy5tSGFuZGxlci5yZW1vdmVNZXNzYWdlcyhNT1ZFX0xFRlQpO1xuICAgICAgICAgICAgdGhpcy5tSGFuZGxlci5yZW1vdmVNZXNzYWdlcyhNT1ZFX1JJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubUhhbmRsZXIuc2VuZE1lc3NhZ2VEZWxheWVkKHRoaXMubUhhbmRsZXIub2J0YWluTWVzc2FnZShNT1ZFX0xFRlQpLCBBTklNQVRJT05fRlJBTUVfRFVSQVRJT04pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBlbmRCb3VuY2VhbmltdGlvbigpIHtcbiAgICAgICAgICAgIExvZy5kKFwiZW5kQm91bmNlYW5pbXRpb24gIFwiKTtcbiAgICAgICAgICAgIHRoaXMubUFuaW1hdGlvbkVuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1TY2FsZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1Qb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLm1BbmltYXRpb25TdGF0ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VyTW92aW5nRW5kKHRoaXMubUluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgZW5kUmlnaHRhbmltYXRpb24oKSB7XG4gICAgICAgICAgICBMb2cuZChcImVuZFJpZ2h0YW5pbWF0aW9uICAgXCIpO1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLm1JbmRleCAtIDE7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLm1BZGFwdGVyLmdldENvdW50KCkgKyBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMubVNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMubUFuaW1hdGlvblN0YXRlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5tQW5pbWF0aW9uRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGFnZXJNb3ZpbmdFbmQodGhpcy5tSW5kZXgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGVuZExlZnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBMb2cuZChcImVuZExlZnRBbmltYXRpb24gICBcIik7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1JbmRleCArIDE7XG4gICAgICAgICAgICB0aGlzLm1Qb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLm1TY2FsZSA9IDA7XG4gICAgICAgICAgICBpbmRleCA9IGluZGV4ICUgdGhpcy5tQWRhcHRlci5nZXRDb3VudCgpO1xuICAgICAgICAgICAgdGhpcy5tQW5pbWF0aW9uU3RhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50SXRlbShpbmRleCk7XG4gICAgICAgICAgICB0aGlzLm1BbmltYXRpb25FbmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlck1vdmluZ0VuZCh0aGlzLm1JbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIHBhZ2VyQ2hhbmdlZChwb3NpdGlvbjogbnVtYmVyLCB0YXJnZXRQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lci5vblBhZ2VyQ2hhbmdlZChwb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBwYWdlck1vdmluZyhtb3ZlZGVncmVlcHJlVmlldzogbnVtYmVyLCBtb3ZlZGVncmVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyLm9uUGFnZXJNb3ZpbmcoLTEgKiBtb3ZlZGVncmVlcHJlVmlldywgLTEgKiBtb3ZlZGVncmVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgcGFnZXJNb3ZpbmdFbmQocG9zaXRpb246IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXIub25QYWdlck1vdmluZ0VuZChwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGFnZXJDaGFuZ2VkTGlzdGVuZXIge1xuICAgICAgICBvblBhZ2VyQ2hhbmdlZChwb3NpdGlvbjogbnVtYmVyLCB0YXJnZXRQb3NpdGlvbjogbnVtYmVyKTtcbiAgICAgICAgb25QYWdlck1vdmluZyhtb3ZlZGVncmVlcHJlVmlldzogbnVtYmVyLCBtb3ZlZGVncmVlOiBudW1iZXIpO1xuICAgICAgICBvblBhZ2VyTW92aW5nRW5kKHBvc2l0aW9uOiBudW1iZXIpO1xuICAgIH1cblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXJlYVRvdWNoTGlzdGVuZXIge1xuICAgICAgICBvbkxlZnRUb3VjaCgpO1xuICAgICAgICBvblJpZ2h0VG91Y2goKTtcbiAgICAgICAgb25NaWRkbGVUb3VjaCgpO1xuICAgIH1cblxuICAgIGNsYXNzIEl0ZW1JbmZvIHtcbiAgICAgICAgdmlldzogVmlldztcbiAgICAgICAgaW5kZXg6IG51bWJlcjtcbiAgICAgICAgcG9zaXRpb246IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IodjogVmlldywgaTogbnVtYmVyLCBwb3M6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gdjtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgfVxuICAgIH1cblxufSIsIlxubmFtZXNwYWNlIGFuZHJvaWQudmlldy5hbmltYXRpb24ge1xuICAgIGV4cG9ydCBlbnVtIEFuaW1hdGlvblR5cGUge1xuICAgICAgIEFscGhhLFxuICAgICAgIFRyYW5zbGF0ZSxcbiAgICAgICBTY2FsZSxcbiAgICAgICBSb3RhdGVcbiAgICB9XG59IiwiXG5uYW1lc3BhY2UgYW5kcm9pZC52aWV3LmFuaW1hdGlvbiB7XG4gICAgaW1wb3J0IENhbnZhcyA9IGFuZHJvaWQuZ3JhcGhpY3MuQ2FudmFzO1xuICAgIGV4cG9ydCBjbGFzcyBTY2FsZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBzdGFydDogbnVtYmVyO1xuICAgICAgICBlYXNlOkFuaW1hdGlvbkVhc2U7XG4gICAgICAgIHR5cGU6QW5pbWF0aW9uVHlwZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGdldCBpc0FuaWFtdGlvbkVuZCgpOmJvb2xlYW57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb24gPCBEYXRlLm5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NhbGUobm93OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlYXNlIFwiICsoIChub3cgLSB0aGlzLnN0YXJ0KS90aGlzLmR1cmF0aW9uKSk7XG4gICAgICAgICAgICByZXR1cm4gIHRoaXMuZWFzZS5lYXNlKChub3cgLSB0aGlzLnN0YXJ0KSAvIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oaW50ZXJwb2xhdGVkVGltZTpudW1iZXIsIGNhbnZhczpDYW52YXMsdmlldzpWaWV3KSB7XG4gICAgICAgICAgICAvLyBjYW52YXMubW92ZXRvKHZpZXcubGVmdCt2aWV3LndpZHRoLzIsdmlldy50b3AgK3ZpZXcuaGVpZ2h0LzIpO1xuICAgICAgICAgICAgY2FudmFzLnNjYWxlKHRoaXMuZnJvbSArICh0aGlzLnRvLXRoaXMuZnJvbSkgKiBpbnRlcnBvbGF0ZWRUaW1lLHRoaXMuZnJvbSArICh0aGlzLnRvLXRoaXMuZnJvbSkgKiBpbnRlcnBvbGF0ZWRUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxufSIsIm5hbWVzcGFjZSBhbmRyb2lkLnZpZXd7XG4gICAgaW1wb3J0IFJlY3QgPSBhbmRyb2lkLmdyYXBoaWNzLlJlY3Q7XG4gICAgZXhwb3J0IGNsYXNzIFJlbmRlclN0YXRle1xuICAgICAgICBjdXJyZW50UmVjdDpSZWN0O1xuICAgICAgICBpbmRleDpudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJlY3Q6UmVjdCxpbmRleDpudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVjdCA9IHJlY3Q7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG59Il19


