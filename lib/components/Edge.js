'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Edge = undefined;

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

var Edge = function (_super) {
    __extends(Edge, _super);
    function Edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edge.decorators = [{ type: _core.Component, args: [{
            selector: 'v-edge',
            template: "<div #graphDom></div>"
        }] }];
    Edge.propDecorators = {
        shape: [{ type: _core.Input }]
    };
    return Edge;
}(_Graph.Graph);
exports.Edge = Edge;
//# sourceMappingURL=Edge.js.map