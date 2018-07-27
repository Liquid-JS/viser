'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Node = undefined;

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

var Node = function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Node.decorators = [{ type: _core.Component, args: [{
            selector: 'v-node',
            template: "<div #graphDom></div>"
        }] }];
    Node.propDecorators = {
        shape: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        label: [{ type: _core.Input }]
    };
    return Node;
}(_Graph.Graph);
exports.Node = Node;
//# sourceMappingURL=Node.js.map