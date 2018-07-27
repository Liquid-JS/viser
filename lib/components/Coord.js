'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Coord = undefined;

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

var Coord = function (_super) {
    __extends(Coord, _super);
    function Coord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coord.decorators = [{ type: _core.Component, args: [{
            selector: 'v-coord',
            template: "<div #chartDom></div>"
        }] }];
    Coord.propDecorators = {
        type: [{ type: _core.Input }],
        direction: [{ type: _core.Input }],
        radius: [{ type: _core.Input }],
        innerRadius: [{ type: _core.Input }],
        startAngle: [{ type: _core.Input }],
        endAngle: [{ type: _core.Input }]
    };
    return Coord;
}(_Chart.Chart);
exports.Coord = Coord;
//# sourceMappingURL=Coord.js.map