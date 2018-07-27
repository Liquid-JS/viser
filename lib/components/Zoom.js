'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Zoom = undefined;

var _core = require('@angular/core');

var _Graph = require('./Graph');

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

var Zoom = function (_super) {
    __extends(Zoom, _super);
    function Zoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zoom.decorators = [{ type: _core.Component, args: [{
            selector: 'v-zoom',
            template: "<div #graphDom></div>"
        }] }];
    Zoom.propDecorators = {
        max: [{ type: _core.Input }],
        min: [{ type: _core.Input }],
        current: [{ type: _core.Input }]
    };
    return Zoom;
}(_Graph.Graph);
exports.Zoom = Zoom;
//# sourceMappingURL=Zoom.js.map