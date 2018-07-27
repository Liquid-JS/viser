'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Util = exports.Layouts = exports.registerGuide = exports.registerEdge = exports.registerNode = exports.ViserGraphModule = undefined;

var _common = require('@angular/common');

var _core = require('@angular/core');

var _viserGraph = require('viser-graph');

var _index = require('./components/index');

var ViserGraphModule = function () {
    function ViserGraphModule() {}
    ViserGraphModule.decorators = [{ type: _core.NgModule, args: [{
            imports: [_common.CommonModule],
            declarations: [_index.Graph, _index.Zoom, _index.Node, _index.Edge],
            exports: [_index.Graph, _index.Zoom, _index.Node, _index.Edge]
        }] }];
    return ViserGraphModule;
}();
exports.ViserGraphModule = ViserGraphModule;
exports.registerNode = _viserGraph.registerNode;
exports.registerEdge = _viserGraph.registerEdge;
exports.registerGuide = _viserGraph.registerGuide;
exports.Layouts = _viserGraph.Layouts;
exports.Util = _viserGraph.Util;
//# sourceMappingURL=index.js.map