var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import typedProps from './typed';
import * as viser from 'viser-cell';
var regSeries = [
    'pie',
    'sector',
    'line',
    'smoothline',
    'dashline',
    'area',
    'point',
    'stackarea',
    'smootharea',
    'bar',
    'stackbar',
    'dodgebar',
    'interval',
    'stackinterval',
    'dodgeinterval',
    'schema',
    'box',
    'candle',
    'polygon',
    'path',
];
var rootCharts = ['v-chart', 'v-lite-chart'];
var rootChartProps = ['data', 'scale'];
var seriesProps = [
    'position',
    'quickType',
    'gemo',
    'adjust',
    'color',
    'shape',
    'size',
    'style',
    'animate',
];
var camelCase = (function () {
    var DEFAULT_REGEX = /[-_]+(.)?/g;
    function toUpper(match, group1) {
        return group1 ? group1.toUpperCase() : '';
    }
    return function (str, delimiters) {
        return str.replace(delimiters ? new RegExp('[' + delimiters + ']+(.)?', 'g') : DEFAULT_REGEX, toUpper);
    };
})();
var baseChartComponent = {
    data: function () {
        return {
            isViser: true,
            jsonForD2: {}
        };
    },
    props: typedProps,
    methods: {
        checkIsContainer: function (componentInstance) {
            if (componentInstance.isViser &&
                rootCharts.indexOf(componentInstance.$options._componentTag) > -1) {
                return true;
            }
            else {
                return false;
            }
        },
        findNearestRootComponent: function (componentInstance) {
            if (this.checkIsContainer(componentInstance)) {
                if (componentInstance.$options._componentTag === 'v-lite-chart') {
                    throw Error('v-lite-chart should be no child elements.');
                }
                return componentInstance;
            }
            if (componentInstance.$parent) {
                return this.findNearestRootComponent(componentInstance.$parent);
            }
            return null;
        },
        createRootD2Json: function () {
            var d2Json = __assign({}, cleanUndefined(normalizeProps(this._props, rootChartProps)), { chart: __assign({ el: this.$el }, cleanUndefined(normalizeProps(this._props, null, rootChartProps))) }, this.jsonForD2);
            if (this.$options._componentTag === 'v-lite-chart') {
                var existProps_1 = cleanUndefined(this._props);
                Object.keys(existProps_1).forEach(function (propsKey) {
                    var lowerCasePropsKey = propsKey.toLowerCase();
                    if (regSeries.indexOf(lowerCasePropsKey) > -1) {
                        safePush(d2Json, 'series', __assign({ quickType: propsKey }, normalizeProps(existProps_1, seriesProps)));
                    }
                });
                setIfNotExist(d2Json, 'axis', true);
                setIfNotExist(d2Json, 'legend', true);
                setIfNotExist(d2Json, 'tooltip', true);
            }
            return d2Json;
        },
        freshChart: function (isUpdate) {
            if (rootCharts.indexOf(this.$options._componentTag) > -1) {
                var d2Json = this.createRootD2Json();
                if (!isUpdate || !this.chart) {
                    this.chart = viser["default"](d2Json);
                }
                else {
                    this.chart.repaint(d2Json);
                }
            }
            else {
                var nearestRootComponent = this.findNearestRootComponent(this.$parent);
                if (!nearestRootComponent) {
                    throw Error(this.$options._componentTag + " must be wrapped into v-chart");
                }
                var rechartName = this.$options._componentTag
                    .replace(/-/g, '')
                    .slice(1);
                var rechartNameCamelCase = camelCase(this.$options._componentTag.slice(2));
                if (isAllUndefined(this._props)) {
                    nearestRootComponent.jsonForD2[rechartName] = true;
                }
                else if (regSeries.indexOf(rechartName) > -1) {
                    safePush(nearestRootComponent.jsonForD2, 'series', __assign({ quickType: rechartNameCamelCase }, cleanUndefined(normalizeProps(this._props))));
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
            return createElement('canvas', undefined, this.$slots["default"]);
        }
        var props = cleanUndefined(normalizeProps(this._props));
        return createElement('canvas', { style: { display: 'none' } }, Object.keys(props).map(function (key) {
            return '' + key + ':' + JSON.stringify(props[key]);
        }));
    }
};
export default {
    install: function (Vue, options) {
        Vue.component('v-chart', baseChartComponent);
        Vue.component('v-tooltip', baseChartComponent);
        Vue.component('v-legend', baseChartComponent);
        Vue.component('v-axis', baseChartComponent);
        Vue.component('v-coord', baseChartComponent);
        Vue.component('v-series', baseChartComponent);
        Vue.component('v-lite-chart', baseChartComponent);
        Vue.component('v-guide', baseChartComponent);
        Vue.component('v-point', baseChartComponent);
        Vue.component('v-pie', baseChartComponent);
        Vue.component('v-bar', baseChartComponent);
        Vue.component('v-stack-bar', baseChartComponent);
        Vue.component('v-dodge-bar', baseChartComponent);
        Vue.component('v-interval', baseChartComponent);
        Vue.component('v-stack-interval', baseChartComponent);
        Vue.component('v-dodge-interval', baseChartComponent);
        Vue.component('v-schema', baseChartComponent);
        Vue.component('v-line', baseChartComponent);
        Vue.component('v-smooth-line', baseChartComponent);
        Vue.component('v-dash-line', baseChartComponent);
        Vue.component('v-sector', baseChartComponent);
        Vue.component('v-area', baseChartComponent);
        Vue.component('v-stack-area', baseChartComponent);
        Vue.component('v-smooth-area', baseChartComponent);
        Vue.component('v-polygon', baseChartComponent);
        Vue.component('v-candle', baseChartComponent);
        Vue.component('v-box', baseChartComponent);
        Vue.component('v-path', baseChartComponent);
    }
};
function safePush(obj, key, value) {
    if (!obj[key]) {
        obj[key] = [];
    }
    cleanUndefined(value);
    obj[key].push(value);
}
function oneObjectMoreArray(obj, key, value) {
    if (!obj[key]) {
        obj[key] = value;
        return;
    }
    if (obj[key] && obj[key].constructor.name === 'Object') {
        obj[key] = [obj[key]];
    }
    var indexOfSameObject = -1;
    if (value && value.viewId) {
        obj[key].forEach(function (o, i) {
            if (o && o.viewId && o.viewId === value.viewId) {
                indexOfSameObject = i;
            }
        });
    }
    else if (value && value.componentId) {
        obj[key].forEach(function (o, i) {
            if (o && o.componentId && o.componentId === value.componentId) {
                indexOfSameObject = i;
            }
        });
    }
    if (indexOfSameObject === -1) {
        obj[key].push(value);
    }
    else {
        obj[key][indexOfSameObject] = __assign({}, obj[key][indexOfSameObject], value);
    }
}
function cleanUndefined(value) {
    var newValue = __assign({}, value);
    for (var key in newValue) {
        if (newValue[key] === undefined) {
            delete newValue[key];
        }
    }
    return newValue;
}
function isAllUndefined(value) {
    return Object.keys(value).every(function (key) { return value[key] === undefined; });
}
function normalizeProps(props, include, expect) {
    if (include === void 0) { include = null; }
    if (expect === void 0) { expect = null; }
    var newProps = __assign({}, props);
    if (newProps.vStyle) {
        newProps.style = newProps.vStyle;
        delete newProps.vStyle;
    }
    if (expect !== null) {
        expect.forEach(function (propsKey) {
            delete newProps[propsKey];
        });
    }
    if (include !== null) {
        Object.keys(newProps).forEach(function (propsKey) {
            if (include.indexOf(propsKey) === -1) {
                delete newProps[propsKey];
            }
        });
    }
    return newProps;
}
function setIfNotExist(obj, key, value) {
    if (!obj[key]) {
        obj[key] = value;
    }
}
export var registerAnimation = viser.registerAnimation;
export var registerShape = viser.registerShape;
export var Global = viser.Global;
//# sourceMappingURL=index.js.map