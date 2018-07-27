var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Layouts, registerEdge, registerGuide, registerNode, Util, ViserGraph } from 'viser-graph';
import { cleanUndefined, isAllUndefined, normalizeProps, oneObjectMoreArray } from './utils';
import { eventProps, graphProps, props } from './typed';
var rootCharts = ['v-graph'];
var baseChartComponent = {
    data: function () {
        return {
            isViser: true,
            jsonForD2: {}
        };
    },
    props: props,
    methods: {
        checkIsContainer: function (componentInstance) {
            if (componentInstance.isViser
                &&
                    rootCharts
                        .indexOf(componentInstance.$options._componentTag) > -1) {
                return true;
            }
            else {
                return false;
            }
        },
        findNearestRootComponent: function (componentInstance) {
            if (this.checkIsContainer(componentInstance)) {
                return componentInstance;
            }
            if (componentInstance.$parent) {
                return this.findNearestRootComponent(componentInstance.$parent);
            }
            return null;
        },
        createRootD2Json: function () {
            var d2Json = __assign({ graph: __assign({ container: this.$el }, cleanUndefined(normalizeProps(this._props, graphProps))), events: cleanUndefined(normalizeProps(this._props, eventProps)), data: this._props.data }, this.jsonForD2);
            return d2Json;
        },
        freshChart: function (isUpdate) {
            if (rootCharts.indexOf(this.$options._componentTag) > -1) {
                var d2Json = this.createRootD2Json();
                if (!isUpdate || !this.chart) {
                    this.chart = new ViserGraph(d2Json);
                    this.chart.render();
                }
                else {
                    this.chart.reRender(d2Json);
                }
            }
            else {
                var nearestRootComponent = this.findNearestRootComponent(this.$parent);
                if (!nearestRootComponent) {
                    throw Error(this.$options._componentTag + " must be wrapped into v-chart");
                }
                var rechartName = this.$options._componentTag.replace(/-/g, '').slice(1);
                if (isAllUndefined(this._props)) {
                    nearestRootComponent.jsonForD2[rechartName] = true;
                }
                else {
                    oneObjectMoreArray(nearestRootComponent.jsonForD2, rechartName, __assign({}, cleanUndefined(normalizeProps(this._props)), { componentId: this._uid }));
                }
            }
        }
    },
    created: function () {
    },
    mounted: function () {
        this.freshChart(false);
    },
    updated: function () {
        this.freshChart(true);
    },
    render: function (createElement) {
        var isContainer = this.checkIsContainer(this);
        if (isContainer) {
            return createElement('div', null, this.$slots["default"]);
        }
        var props = cleanUndefined(normalizeProps(this._props));
        return createElement('div', { style: { display: 'none' } }, Object.keys(props).map(function (key) {
            return '' + key + ':' + JSON.stringify(props[key]);
        }));
    }
};
export default {
    install: function (Vue, options) {
        Vue.component('v-graph', baseChartComponent);
        Vue.component('v-zoom', baseChartComponent);
        Vue.component('v-node', baseChartComponent);
        Vue.component('v-edge', baseChartComponent);
    }
};
export { registerNode, registerEdge, registerGuide, Layouts, Util, };
//# sourceMappingURL=index.js.map