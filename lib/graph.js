'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Util = exports.Layouts = exports.registerGuide = exports.registerEdge = exports.registerNode = exports.ViserGraph = undefined;

var _g = require('@antv/g6');

var G6 = _interopRequireWildcard(_g);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var ViserGraph = function () {
    function ViserGraph(config) {
        this.config = config;
    }
    ViserGraph.prototype.reRender = function (config) {
        this.config = config;
        this.setData();
        this.setZoom();
    };
    ViserGraph.prototype.render = function () {
        this.setGraph();
        this.setNode();
        this.setEdge();
        this.setEvent();
        this.setData();
        this.setZoom();
    };
    ViserGraph.prototype.setGraph = function () {
        if (!this.config.graph.container) {
            console.error('please set container');
            return;
        }
        var graphConfig = {};
        if (this.config.graph) {
            graphConfig = __assign({}, graphConfig, this.config.graph);
        }
        if (this.config.zoom) {
            graphConfig = __assign({}, graphConfig, { minZoom: this.config.zoom.min, maxZoom: this.config.zoom.max });
        }
        switch (this.config.graph.type) {
            case 'tree':
                this.graph = new G6.Tree(graphConfig);
                break;
            case 'graph':
                this.graph = new G6.Graph(graphConfig);
                break;
            default:
                this.graph = new G6.Graph(graphConfig);
        }
    };
    ViserGraph.prototype.setData = function () {
        if (!this.config.data) {
            console.error('please set data');
            return;
        }
        this.graph.read(this.config.data);
    };
    ViserGraph.prototype.setNode = function () {
        if (!this.config.node) {
            return;
        }
        delete this.config.node.componentId;
        var nodes = this.graph.node(this.config.node);
        if (this.config.node.label) {
            nodes.label(function (obj) {
                return obj.name;
            });
        }
    };
    ViserGraph.prototype.setEdge = function () {
        if (!this.config.edge) {
            return;
        }
        delete this.config.edge.componentId;
        this.graph.edge(this.config.edge);
    };
    ViserGraph.prototype.setZoom = function () {
        if (!this.config.zoom || !this.config.zoom.current) {
            return;
        }
        this.graph.zoom(this.config.zoom.current);
    };
    ViserGraph.prototype.setEvent = function () {
        var _this = this;
        Object.keys(this.config.events || []).forEach(function (k) {
            var eventName = k.replace('on', '').toLocaleLowerCase();
            _this.graph.on(eventName, function (ev) {
                _this.config.events[k](ev, _this.graph);
            });
        });
    };
    return ViserGraph;
}();
exports.ViserGraph = ViserGraph;
var registerNode = exports.registerNode = G6.registerNode;
var registerEdge = exports.registerEdge = G6.registerEdge;
var registerGuide = exports.registerGuide = G6.registerGuide;
var Layouts = exports.Layouts = G6.Layouts;
var Util = exports.Util = G6.Util;
//# sourceMappingURL=graph.js.map