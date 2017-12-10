/// <reference path="../view/implemention/ViewGroup.ts" />
/// <reference path="./FrameLayout.ts" />



namespace android.widget {
    import Padding = android.graphics.Padding;
    import Align = android.graphics.Align;
    import Gravity = android.graphics.Gravity;


    import AlignElment = android.graphics.AlignElment;
    import Margin = android.graphics.Margin;

    import Size = android.graphics.Size;
    import Canvas = android.graphics.Canvas;
    import ViewGroup = android.view.ViewGroup;
    import View = android.view.View;

    import Point = android.graphics.Point;
    import MeasureSpec = android.view.MeasureSpec;
    import LayoutParams = android.view.LayoutParams;
    import MotionEvent = android.view.event.MotionEvent;
    import Animation = android.view.animation.Animation;
    import Device = android.device.Device;
    import RenderType = android.graphics.RenderType;
    export class RootView extends FrameLayout {
        private element: HTMLElement;
        private throttle: boolean = true;
        private _w: number;
        private _h: number;
        private _l: number;
        private _t: number;
        private _rootAniamtion: Animation;
        setInfo(left: number, top: number, width: number, height: number) {
            this._l = left;
            this._t = top;
            this._w = width;
            this._h = height;
            this.layoutParams.width = width;
            this.layoutParams.height = height;
            this.padding = new Padding(0);
        }

        public dispatchDraw(canvas: Canvas): void {
            super.dispatchDraw(canvas);
            var rect = this.layoutInfo.outterrect;
            canvas.drawRect(rect.startPoint, rect.endPoint, false, this.background);
        }
        
        onLayout(l: number, t: number, r: number, b: number, canvas: Canvas): void {
            super.onLayout(l, t, r, b, canvas);
        }

        oninvalidate() {
            super.oninvalidate();
            this._canvas.begin();
            this.dispatchDraw(this._canvas);
            this._canvas.end();
        }

        public requestLayout() {
            var width: MeasureSpec = new MeasureSpec(this._w, LayoutParams.MATCH_PARENT);
            var height: MeasureSpec = new MeasureSpec(this._h, LayoutParams.MATCH_PARENT);
            this._canvas.begin();
            var size: Size = this.onMeasure(width, height, this._canvas);
            this.onLayout(this._l, this._t, this._l + size.width, this._t + size.height, this._canvas);
            this._canvas.end();
            this.oninvalidate();

        }
        get left(): number {
            return this._l;
        }
        get top(): number {
            return this._t;
        }
        get width(): number {
            return this._w;
        }
        get height(): number {
            return this._h;
        }
        public startAnimation(animation: Animation) {
            this.animation = animation;
            // setTimeout(this._startAnimation());
            this._startAnimation();
        }


        private _startAnimation(): void {
            this.animation.start = Date.now();
            if (this._rootAniamtion != null && !this._rootAniamtion.isAniamtionEnd) {
                if (this._rootAniamtion.duration + this._rootAniamtion.start < this.animation.duration + this.animation.start) {
                    this._rootAniamtion.duration = this.animation.start + this.animation.duration - this._rootAniamtion.start;
                }
            } else {
                this._rootAniamtion = this.animation;
                window.requestAnimationFrame(this._animate.bind(this));
                console.log("requestAnimationFrame ====== >>>>>  ");
            }

        }
        private _animate() {
            console.log("_animating ========= >");
            if (this._rootAniamtion != null && !this._rootAniamtion.isAniamtionEnd) {
                this.invalidate(false);
                // console.log("requestAnimationFrame " + this._rootAniamtion.isAniamtionEnd );
                // console.log("start "+ this._rootAniamtion.start +" , duration " + this._rootAniamtion.duration +" , now "+Date.now());
                window.requestAnimationFrame(this._animate.bind(this));
            } else {
                this._rootAniamtion = null;
                this.invalidate(false);
            }
        }

        public addView(view: View, index: number): number {
            super.addView(view, index);
            return index;
        }

        public attachRender(r: Canvas) {
            this._canvas = r;
        }

        attachElement(element: HTMLElement, renderType: RenderType) {
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
        }

        private ontouch(event) {
            // console.log(event);
            // event.preventDefault();
            // event.stopPropagation();
            var event = event || window.event;
            var str = '';
            let mevent: MotionEvent = new MotionEvent(0, 0, 0);
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
                    mevent = new MotionEvent(event.clientX,event.clientY,MotionEvent.ACTION_SCROLL);
                     break;
                case 'mousewheel':
                    mevent = new MotionEvent(event.clientX,event.clientY,MotionEvent.ACTION_MOUSE_WHEEL);
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
        }
        public sendEvent(event: MotionEvent) {

            if (event.action >= MotionEvent.ACTION_MOUSE_DOWN) {
                this.dispatchMouseEvent(event);
            } else {
                this.dispatchTouchEvent(event);
            }
        }
    }
}