var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, Input } from '@angular/core';
import { Chart } from '../Chart';
var Series = (function (_super) {
    __extends(Series, _super);
    function Series() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Series.decorators = [
        { type: Component, args: [{
                    selector: 'v-series',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Series.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }],
        onLabelMouseDown: [{ type: Input }],
        onLabelMouseMove: [{ type: Input }],
        onLabelMouseLeave: [{ type: Input }],
        onLabelMouseUp: [{ type: Input }],
        onLabelClick: [{ type: Input }],
        onLabelDbClick: [{ type: Input }],
        onLabelTouchStart: [{ type: Input }],
        onLabelTouchMove: [{ type: Input }],
        onLabelTouchEnd: [{ type: Input }]
    };
    return Series;
}(Chart));
var Pie = (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pie.decorators = [
        { type: Component, args: [{
                    selector: 'v-pie',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Pie.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Pie;
}(Chart));
var Sector = (function (_super) {
    __extends(Sector, _super);
    function Sector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sector.decorators = [
        { type: Component, args: [{
                    selector: 'v-sector',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Sector.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Sector;
}(Chart));
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.decorators = [
        { type: Component, args: [{
                    selector: 'v-line',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Line.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Line;
}(Chart));
var SmoothLine = (function (_super) {
    __extends(SmoothLine, _super);
    function SmoothLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmoothLine.decorators = [
        { type: Component, args: [{
                    selector: 'v-smooth-line',
                    template: "<div #chartDom></div>",
                },] },
    ];
    SmoothLine.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return SmoothLine;
}(Chart));
var DashLine = (function (_super) {
    __extends(DashLine, _super);
    function DashLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashLine.decorators = [
        { type: Component, args: [{
                    selector: 'v-dash-line',
                    template: "<div #chartDom></div>",
                },] },
    ];
    DashLine.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return DashLine;
}(Chart));
var Area = (function (_super) {
    __extends(Area, _super);
    function Area() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Area.decorators = [
        { type: Component, args: [{
                    selector: 'v-area',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Area.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Area;
}(Chart));
var StackArea = (function (_super) {
    __extends(StackArea, _super);
    function StackArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackArea.decorators = [
        { type: Component, args: [{
                    selector: 'v-stack-area',
                    template: "<div #chartDom></div>",
                },] },
    ];
    StackArea.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return StackArea;
}(Chart));
var SmoothArea = (function (_super) {
    __extends(SmoothArea, _super);
    function SmoothArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmoothArea.decorators = [
        { type: Component, args: [{
                    selector: 'v-smooth-area',
                    template: "<div #chartDom></div>",
                },] },
    ];
    SmoothArea.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return SmoothArea;
}(Chart));
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.decorators = [
        { type: Component, args: [{
                    selector: 'v-bar',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Bar.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Bar;
}(Chart));
var StackBar = (function (_super) {
    __extends(StackBar, _super);
    function StackBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackBar.decorators = [
        { type: Component, args: [{
                    selector: 'v-stack-bar',
                    template: "<div #chartDom></div>",
                },] },
    ];
    StackBar.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return StackBar;
}(Chart));
var DodgeBar = (function (_super) {
    __extends(DodgeBar, _super);
    function DodgeBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DodgeBar.decorators = [
        { type: Component, args: [{
                    selector: 'v-dodge-bar',
                    template: "<div #chartDom></div>",
                },] },
    ];
    DodgeBar.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return DodgeBar;
}(Chart));
var Interval = (function (_super) {
    __extends(Interval, _super);
    function Interval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Interval.decorators = [
        { type: Component, args: [{
                    selector: 'v-interval',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Interval.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Interval;
}(Chart));
var StackInterval = (function (_super) {
    __extends(StackInterval, _super);
    function StackInterval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackInterval.decorators = [
        { type: Component, args: [{
                    selector: 'v-stack-interval',
                    template: "<div #chartDom></div>",
                },] },
    ];
    StackInterval.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return StackInterval;
}(Chart));
var DodgeInterval = (function (_super) {
    __extends(DodgeInterval, _super);
    function DodgeInterval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DodgeInterval.decorators = [
        { type: Component, args: [{
                    selector: 'v-dodge-interval',
                    template: "<div #chartDom></div>",
                },] },
    ];
    DodgeInterval.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return DodgeInterval;
}(Chart));
var Point = (function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Point.decorators = [
        { type: Component, args: [{
                    selector: 'v-point',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Point.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Point;
}(Chart));
var Funnel = (function (_super) {
    __extends(Funnel, _super);
    function Funnel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Funnel.decorators = [
        { type: Component, args: [{
                    selector: 'v-funnel',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Funnel.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Funnel;
}(Chart));
var Pyramid = (function (_super) {
    __extends(Pyramid, _super);
    function Pyramid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pyramid.decorators = [
        { type: Component, args: [{
                    selector: 'v-pyramid',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Pyramid.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Pyramid;
}(Chart));
var Schema = (function (_super) {
    __extends(Schema, _super);
    function Schema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Schema.decorators = [
        { type: Component, args: [{
                    selector: 'v-schema',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Schema.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Schema;
}(Chart));
var Box = (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.decorators = [
        { type: Component, args: [{
                    selector: 'v-box',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Box.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Box;
}(Chart));
var Candle = (function (_super) {
    __extends(Candle, _super);
    function Candle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Candle.decorators = [
        { type: Component, args: [{
                    selector: 'v-candle',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Candle.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Candle;
}(Chart));
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polygon.decorators = [
        { type: Component, args: [{
                    selector: 'v-polygon',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Polygon.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Polygon;
}(Chart));
var Contour = (function (_super) {
    __extends(Contour, _super);
    function Contour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contour.decorators = [
        { type: Component, args: [{
                    selector: 'v-contour',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Contour.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Contour;
}(Chart));
var Heatmap = (function (_super) {
    __extends(Heatmap, _super);
    function Heatmap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heatmap.decorators = [
        { type: Component, args: [{
                    selector: 'v-heatmap',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Heatmap.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Heatmap;
}(Chart));
var Edge = (function (_super) {
    __extends(Edge, _super);
    function Edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edge.decorators = [
        { type: Component, args: [{
                    selector: 'v-edge',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Edge.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Edge;
}(Chart));
var Sankey = (function (_super) {
    __extends(Sankey, _super);
    function Sankey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sankey.decorators = [
        { type: Component, args: [{
                    selector: 'v-sankey',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Sankey.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Sankey;
}(Chart));
var ErrorBar = (function (_super) {
    __extends(ErrorBar, _super);
    function ErrorBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorBar.decorators = [
        { type: Component, args: [{
                    selector: 'v-error-bar',
                    template: "<div #chartDom></div>",
                },] },
    ];
    ErrorBar.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return ErrorBar;
}(Chart));
var JitterPoint = (function (_super) {
    __extends(JitterPoint, _super);
    function JitterPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JitterPoint.decorators = [
        { type: Component, args: [{
                    selector: 'v-jitter-point',
                    template: "<div #chartDom></div>",
                },] },
    ];
    JitterPoint.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return JitterPoint;
}(Chart));
var Path = (function (_super) {
    __extends(Path, _super);
    function Path() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Path.decorators = [
        { type: Component, args: [{
                    selector: 'v-path',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Path.propDecorators = {
        quickType: [{ type: Input }],
        position: [{ type: Input }],
        gemo: [{ type: Input }],
        adjust: [{ type: Input }],
        color: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        opacity: [{ type: Input }],
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        style: [{ type: Input }],
        select: [{ type: Input }],
        active: [{ type: Input }],
        animate: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Path;
}(Chart));
export { Series, Pie, Sector, Line, SmoothLine, DashLine, Area, StackArea, SmoothArea, Bar, StackBar, DodgeBar, Interval, StackInterval, DodgeInterval, Point, Funnel, Pyramid, Schema, Box, Candle, Polygon, Contour, Heatmap, Edge, Sankey, ErrorBar, JitterPoint, Path, };
//# sourceMappingURL=Series.js.map