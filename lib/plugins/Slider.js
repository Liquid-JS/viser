'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slider = undefined;

var _core = require('@angular/core');

var _Plugin = require('./Plugin');

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

var Slider = function (_super) {
    __extends(Slider, _super);
    function Slider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slider.decorators = [{ type: _core.Component, args: [{
            selector: 'v-slider',
            template: "<div id=\"{{context.container}}\"></div>"
        }] }];
    Slider.propDecorators = {
        xAxis: [{ type: _core.Input }],
        yAxis: [{ type: _core.Input }],
        data: [{ type: _core.Input }],
        width: [{ type: _core.Input }],
        height: [{ type: _core.Input }],
        padding: [{ type: _core.Input }],
        start: [{ type: _core.Input }],
        end: [{ type: _core.Input }],
        minSpan: [{ type: _core.Input }],
        maxSpan: [{ type: _core.Input }],
        scales: [{ type: _core.Input }],
        backgroundChart: [{ type: _core.Input }],
        onChange: [{ type: _core.Input }]
    };
    return Slider;
}(_Plugin.PluginComponent);
exports.Slider = Slider;
//# sourceMappingURL=Slider.js.map