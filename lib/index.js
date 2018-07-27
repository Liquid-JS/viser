'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Util = exports.Layouts = exports.registerGuide = exports.registerEdge = exports.registerNode = undefined;

var _viserGraph = require('viser-graph');

var _utils = require('./utils');

var _typed = require('./typed');

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var rootCharts = ['v-graph'];
var baseChartComponent = {
    data: function data() {
        return {
            isViser: true,
            jsonForD2: {}
        };
    },
    props: _typed.props,
    methods: {
        checkIsContainer: function checkIsContainer(componentInstance) {
            if (componentInstance.isViser && rootCharts.indexOf(componentInstance.$options._componentTag) > -1) {
                return true;
            } else {
                return false;
            }
        },
        findNearestRootComponent: function findNearestRootComponent(componentInstance) {
            if (this.checkIsContainer(componentInstance)) {
                return componentInstance;
            }
            if (componentInstance.$parent) {
                return this.findNearestRootComponent(componentInstance.$parent);
            }
            return null;
        },
        createRootD2Json: function createRootD2Json() {
            var d2Json = __assign({ graph: __assign({ container: this.$el }, (0, _utils.cleanUndefined)((0, _utils.normalizeProps)(this._props, _typed.graphProps))), events: (0, _utils.cleanUndefined)((0, _utils.normalizeProps)(this._props, _typed.eventProps)), data: this._props.data }, this.jsonForD2);
            return d2Json;
        },
        freshChart: function freshChart(isUpdate) {
            if (rootCharts.indexOf(this.$options._componentTag) > -1) {
                var d2Json = this.createRootD2Json();
                if (!isUpdate || !this.chart) {
                    this.chart = new _viserGraph.ViserGraph(d2Json);
                    this.chart.render();
                } else {
                    this.chart.reRender(d2Json);
                }
            } else {
                var nearestRootComponent = this.findNearestRootComponent(this.$parent);
                if (!nearestRootComponent) {
                    throw Error(this.$options._componentTag + " must be wrapped into v-chart");
                }
                var rechartName = this.$options._componentTag.replace(/-/g, '').slice(1);
                if ((0, _utils.isAllUndefined)(this._props)) {
                    nearestRootComponent.jsonForD2[rechartName] = true;
                } else {
                    (0, _utils.oneObjectMoreArray)(nearestRootComponent.jsonForD2, rechartName, __assign({}, (0, _utils.cleanUndefined)((0, _utils.normalizeProps)(this._props)), { componentId: this._uid }));
                }
            }
        }
    },
    created: function created() {},
    mounted: function mounted() {
        this.freshChart(false);
    },
    updated: function updated() {
        this.freshChart(true);
    },
    render: function render(createElement) {
        var isContainer = this.checkIsContainer(this);
        if (isContainer) {
            return createElement('div', null, this.$slots["default"]);
        }
        var props = (0, _utils.cleanUndefined)((0, _utils.normalizeProps)(this._props));
        return createElement('div', { style: { display: 'none' } }, Object.keys(props).map(function (key) {
            return '' + key + ':' + JSON.stringify(props[key]);
        }));
    }
};
exports.default = {
    install: function install(Vue, options) {
        Vue.component('v-graph', baseChartComponent);
        Vue.component('v-zoom', baseChartComponent);
        Vue.component('v-node', baseChartComponent);
        Vue.component('v-edge', baseChartComponent);
    }
};
exports.registerNode = _viserGraph.registerNode;
exports.registerEdge = _viserGraph.registerEdge;
exports.registerGuide = _viserGraph.registerGuide;
exports.Layouts = _viserGraph.Layouts;
exports.Util = _viserGraph.Util;
//# sourceMappingURL=index.js.map