'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Path = exports.JitterPoint = exports.ErrorBar = exports.Sankey = exports.Edge = exports.Heatmap = exports.Contour = exports.Polygon = exports.Candle = exports.Box = exports.Schema = exports.Pyramid = exports.Funnel = exports.Point = exports.DodgeInterval = exports.StackInterval = exports.Interval = exports.DodgeBar = exports.StackBar = exports.Bar = exports.SmoothArea = exports.StackArea = exports.Area = exports.DashLine = exports.SmoothLine = exports.Line = exports.Sector = exports.Pie = exports.Series = undefined;

var _core = require('@angular/core');

var _Chart = require('../Chart');

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Series = function (_super) {
    __extends(Series, _super);
    function Series() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Series.decorators = [{ type: _core.Component, args: [{
            selector: 'v-series',
            template: "<div #chartDom></div>"
        }] }];
    Series.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }],
        onLabelMouseDown: [{ type: _core.Input }],
        onLabelMouseMove: [{ type: _core.Input }],
        onLabelMouseLeave: [{ type: _core.Input }],
        onLabelMouseUp: [{ type: _core.Input }],
        onLabelClick: [{ type: _core.Input }],
        onLabelDbClick: [{ type: _core.Input }],
        onLabelTouchStart: [{ type: _core.Input }],
        onLabelTouchMove: [{ type: _core.Input }],
        onLabelTouchEnd: [{ type: _core.Input }]
    };
    return Series;
}(_Chart.Chart);
var Pie = function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pie.decorators = [{ type: _core.Component, args: [{
            selector: 'v-pie',
            template: "<div #chartDom></div>"
        }] }];
    Pie.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Pie;
}(_Chart.Chart);
var Sector = function (_super) {
    __extends(Sector, _super);
    function Sector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sector.decorators = [{ type: _core.Component, args: [{
            selector: 'v-sector',
            template: "<div #chartDom></div>"
        }] }];
    Sector.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Sector;
}(_Chart.Chart);
var Line = function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.decorators = [{ type: _core.Component, args: [{
            selector: 'v-line',
            template: "<div #chartDom></div>"
        }] }];
    Line.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Line;
}(_Chart.Chart);
var SmoothLine = function (_super) {
    __extends(SmoothLine, _super);
    function SmoothLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmoothLine.decorators = [{ type: _core.Component, args: [{
            selector: 'v-smooth-line',
            template: "<div #chartDom></div>"
        }] }];
    SmoothLine.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return SmoothLine;
}(_Chart.Chart);
var DashLine = function (_super) {
    __extends(DashLine, _super);
    function DashLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashLine.decorators = [{ type: _core.Component, args: [{
            selector: 'v-dash-line',
            template: "<div #chartDom></div>"
        }] }];
    DashLine.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return DashLine;
}(_Chart.Chart);
var Area = function (_super) {
    __extends(Area, _super);
    function Area() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Area.decorators = [{ type: _core.Component, args: [{
            selector: 'v-area',
            template: "<div #chartDom></div>"
        }] }];
    Area.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Area;
}(_Chart.Chart);
var StackArea = function (_super) {
    __extends(StackArea, _super);
    function StackArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackArea.decorators = [{ type: _core.Component, args: [{
            selector: 'v-stack-area',
            template: "<div #chartDom></div>"
        }] }];
    StackArea.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return StackArea;
}(_Chart.Chart);
var SmoothArea = function (_super) {
    __extends(SmoothArea, _super);
    function SmoothArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmoothArea.decorators = [{ type: _core.Component, args: [{
            selector: 'v-smooth-area',
            template: "<div #chartDom></div>"
        }] }];
    SmoothArea.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return SmoothArea;
}(_Chart.Chart);
var Bar = function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.decorators = [{ type: _core.Component, args: [{
            selector: 'v-bar',
            template: "<div #chartDom></div>"
        }] }];
    Bar.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Bar;
}(_Chart.Chart);
var StackBar = function (_super) {
    __extends(StackBar, _super);
    function StackBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackBar.decorators = [{ type: _core.Component, args: [{
            selector: 'v-stack-bar',
            template: "<div #chartDom></div>"
        }] }];
    StackBar.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return StackBar;
}(_Chart.Chart);
var DodgeBar = function (_super) {
    __extends(DodgeBar, _super);
    function DodgeBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DodgeBar.decorators = [{ type: _core.Component, args: [{
            selector: 'v-dodge-bar',
            template: "<div #chartDom></div>"
        }] }];
    DodgeBar.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return DodgeBar;
}(_Chart.Chart);
var Interval = function (_super) {
    __extends(Interval, _super);
    function Interval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Interval.decorators = [{ type: _core.Component, args: [{
            selector: 'v-interval',
            template: "<div #chartDom></div>"
        }] }];
    Interval.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Interval;
}(_Chart.Chart);
var StackInterval = function (_super) {
    __extends(StackInterval, _super);
    function StackInterval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackInterval.decorators = [{ type: _core.Component, args: [{
            selector: 'v-stack-interval',
            template: "<div #chartDom></div>"
        }] }];
    StackInterval.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return StackInterval;
}(_Chart.Chart);
var DodgeInterval = function (_super) {
    __extends(DodgeInterval, _super);
    function DodgeInterval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DodgeInterval.decorators = [{ type: _core.Component, args: [{
            selector: 'v-dodge-interval',
            template: "<div #chartDom></div>"
        }] }];
    DodgeInterval.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return DodgeInterval;
}(_Chart.Chart);
var Point = function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Point.decorators = [{ type: _core.Component, args: [{
            selector: 'v-point',
            template: "<div #chartDom></div>"
        }] }];
    Point.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Point;
}(_Chart.Chart);
var Funnel = function (_super) {
    __extends(Funnel, _super);
    function Funnel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Funnel.decorators = [{ type: _core.Component, args: [{
            selector: 'v-funnel',
            template: "<div #chartDom></div>"
        }] }];
    Funnel.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Funnel;
}(_Chart.Chart);
var Pyramid = function (_super) {
    __extends(Pyramid, _super);
    function Pyramid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pyramid.decorators = [{ type: _core.Component, args: [{
            selector: 'v-pyramid',
            template: "<div #chartDom></div>"
        }] }];
    Pyramid.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Pyramid;
}(_Chart.Chart);
var Schema = function (_super) {
    __extends(Schema, _super);
    function Schema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Schema.decorators = [{ type: _core.Component, args: [{
            selector: 'v-schema',
            template: "<div #chartDom></div>"
        }] }];
    Schema.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Schema;
}(_Chart.Chart);
var Box = function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.decorators = [{ type: _core.Component, args: [{
            selector: 'v-box',
            template: "<div #chartDom></div>"
        }] }];
    Box.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Box;
}(_Chart.Chart);
var Candle = function (_super) {
    __extends(Candle, _super);
    function Candle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Candle.decorators = [{ type: _core.Component, args: [{
            selector: 'v-candle',
            template: "<div #chartDom></div>"
        }] }];
    Candle.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Candle;
}(_Chart.Chart);
var Polygon = function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polygon.decorators = [{ type: _core.Component, args: [{
            selector: 'v-polygon',
            template: "<div #chartDom></div>"
        }] }];
    Polygon.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Polygon;
}(_Chart.Chart);
var Contour = function (_super) {
    __extends(Contour, _super);
    function Contour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contour.decorators = [{ type: _core.Component, args: [{
            selector: 'v-contour',
            template: "<div #chartDom></div>"
        }] }];
    Contour.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Contour;
}(_Chart.Chart);
var Heatmap = function (_super) {
    __extends(Heatmap, _super);
    function Heatmap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heatmap.decorators = [{ type: _core.Component, args: [{
            selector: 'v-heatmap',
            template: "<div #chartDom></div>"
        }] }];
    Heatmap.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Heatmap;
}(_Chart.Chart);
var Edge = function (_super) {
    __extends(Edge, _super);
    function Edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edge.decorators = [{ type: _core.Component, args: [{
            selector: 'v-edge',
            template: "<div #chartDom></div>"
        }] }];
    Edge.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Edge;
}(_Chart.Chart);
var Sankey = function (_super) {
    __extends(Sankey, _super);
    function Sankey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sankey.decorators = [{ type: _core.Component, args: [{
            selector: 'v-sankey',
            template: "<div #chartDom></div>"
        }] }];
    Sankey.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Sankey;
}(_Chart.Chart);
var ErrorBar = function (_super) {
    __extends(ErrorBar, _super);
    function ErrorBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorBar.decorators = [{ type: _core.Component, args: [{
            selector: 'v-error-bar',
            template: "<div #chartDom></div>"
        }] }];
    ErrorBar.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return ErrorBar;
}(_Chart.Chart);
var JitterPoint = function (_super) {
    __extends(JitterPoint, _super);
    function JitterPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JitterPoint.decorators = [{ type: _core.Component, args: [{
            selector: 'v-jitter-point',
            template: "<div #chartDom></div>"
        }] }];
    JitterPoint.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return JitterPoint;
}(_Chart.Chart);
var Path = function (_super) {
    __extends(Path, _super);
    function Path() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Path.decorators = [{ type: _core.Component, args: [{
            selector: 'v-path',
            template: "<div #chartDom></div>"
        }] }];
    Path.propDecorators = {
        quickType: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        adjust: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        select: [{ type: _core.Input }],
        active: [{ type: _core.Input }],
        animate: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Path;
}(_Chart.Chart);
exports.Series = Series;
exports.Pie = Pie;
exports.Sector = Sector;
exports.Line = Line;
exports.SmoothLine = SmoothLine;
exports.DashLine = DashLine;
exports.Area = Area;
exports.StackArea = StackArea;
exports.SmoothArea = SmoothArea;
exports.Bar = Bar;
exports.StackBar = StackBar;
exports.DodgeBar = DodgeBar;
exports.Interval = Interval;
exports.StackInterval = StackInterval;
exports.DodgeInterval = DodgeInterval;
exports.Point = Point;
exports.Funnel = Funnel;
exports.Pyramid = Pyramid;
exports.Schema = Schema;
exports.Box = Box;
exports.Candle = Candle;
exports.Polygon = Polygon;
exports.Contour = Contour;
exports.Heatmap = Heatmap;
exports.Edge = Edge;
exports.Sankey = Sankey;
exports.ErrorBar = ErrorBar;
exports.JitterPoint = JitterPoint;
exports.Path = Path;
//# sourceMappingURL=Series.js.map