'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Axis = undefined;

var _core = require('@angular/core');

var _Chart = require('../Chart');

var _Style = require('./Style');

var IStyle = _interopRequireWildcard(_Style);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var Axis = function (_super) {
    __extends(Axis, _super);
    function Axis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Axis.decorators = [{ type: _core.Component, args: [{
            selector: 'v-axis',
            template: "<div #chartDom></div>"
        }] }];
    Axis.propDecorators = {
        dataKey: [{ type: _core.Input }],
        show: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        title: [{ type: _core.Input }],
        tick: [{ type: _core.Input }],
        subTick: [{ type: _core.Input }],
        grid: [{ type: _core.Input }],
        zIndex: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        line: [{ type: _core.Input }],
        tickLine: [{ type: _core.Input }],
        subTickCount: [{ type: _core.Input }],
        subTickLine: [{ type: _core.Input }],
        autoPaint: [{ type: _core.Input }],
        onTitleMouseDown: [{ type: _core.Input }],
        onTitleMouseMove: [{ type: _core.Input }],
        onTitleMouseLeave: [{ type: _core.Input }],
        onTitleMouseUp: [{ type: _core.Input }],
        onTitleClick: [{ type: _core.Input }],
        onTitleDbClick: [{ type: _core.Input }],
        onTitleTouchStart: [{ type: _core.Input }],
        onTitleTouchMove: [{ type: _core.Input }],
        onTitleTouchEnd: [{ type: _core.Input }],
        onLabelMouseDown: [{ type: _core.Input }],
        onLabelMouseMove: [{ type: _core.Input }],
        onLabelMouseLeave: [{ type: _core.Input }],
        onLabelMouseUp: [{ type: _core.Input }],
        onLabelClick: [{ type: _core.Input }],
        onLabelDbClick: [{ type: _core.Input }],
        onLabelTouchStart: [{ type: _core.Input }],
        onLabelTouchMove: [{ type: _core.Input }],
        onLabelTouchEnd: [{ type: _core.Input }],
        onTicksMouseDown: [{ type: _core.Input }],
        onTicksMouseMove: [{ type: _core.Input }],
        onTicksMouseLeave: [{ type: _core.Input }],
        onTicksMouseUp: [{ type: _core.Input }],
        onTicksClick: [{ type: _core.Input }],
        onTicksDbClick: [{ type: _core.Input }],
        onTicksTouchStart: [{ type: _core.Input }],
        onTicksTouchMove: [{ type: _core.Input }],
        onTicksTouchEnd: [{ type: _core.Input }],
        onLineMouseDown: [{ type: _core.Input }],
        onLineMouseMove: [{ type: _core.Input }],
        onLineMouseLeave: [{ type: _core.Input }],
        onLineMouseUp: [{ type: _core.Input }],
        onLineClick: [{ type: _core.Input }],
        onLineDbClick: [{ type: _core.Input }],
        onLineTouchStart: [{ type: _core.Input }],
        onLineTouchMove: [{ type: _core.Input }],
        onLineTouchEnd: [{ type: _core.Input }],
        onGridMouseDown: [{ type: _core.Input }],
        onGridMouseMove: [{ type: _core.Input }],
        onGridMouseLeave: [{ type: _core.Input }],
        onGridMouseUp: [{ type: _core.Input }],
        onGridClick: [{ type: _core.Input }],
        onGridDbClick: [{ type: _core.Input }],
        onGridTouchStart: [{ type: _core.Input }],
        onGridTouchMove: [{ type: _core.Input }],
        onGridTouchEnd: [{ type: _core.Input }]
    };
    return Axis;
}(_Chart.Chart);
exports.Axis = Axis;
//# sourceMappingURL=Axis.js.map