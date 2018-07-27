'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brush = undefined;

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

var Brush = function (_super) {
    __extends(Brush, _super);
    function Brush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brush.decorators = [{ type: _core.Component, args: [{
            selector: 'v-brush',
            template: "<div #chartDom></div>"
        }] }];
    Brush.propDecorators = {
        canvas: [{ type: _core.Input }],
        startPoint: [{ type: _core.Input }],
        brushing: [{ type: _core.Input }],
        dragging: [{ type: _core.Input }],
        brushShape: [{ type: _core.Input }],
        container: [{ type: _core.Input }],
        polygonPath: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        type: [{ type: _core.Input }],
        dragable: [{ type: _core.Input }],
        dragoffX: [{ type: _core.Input }],
        dragoffY: [{ type: _core.Input }],
        inPlot: [{ type: _core.Input }],
        xField: [{ type: _core.Input }],
        yField: [{ type: _core.Input }],
        filter: [{ type: _core.Input }],
        onBrushstart: [{ type: _core.Input }],
        onBrushmove: [{ type: _core.Input }],
        onBrushend: [{ type: _core.Input }],
        onDragstart: [{ type: _core.Input }],
        onDragmove: [{ type: _core.Input }],
        onDragend: [{ type: _core.Input }]
    };
    return Brush;
}(_Chart.Chart);
exports.Brush = Brush;
//# sourceMappingURL=Brush.js.map