var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import viser from 'viser';
import { ChartContext } from './chartService';
function firstLowerCase(str) {
    return str.replace(/^\S/, function (s) {
        return s.toLowerCase();
    });
}
function generateRandomNum() {
    return (Math.floor(new Date().getTime() + Math.random() * 10000)).toString();
}
function isOwnEmpty(obj) {
    for (var name_1 in obj) {
        if (obj.hasOwnProperty(name_1)) {
            return false;
        }
    }
    return true;
}
function retain(obj, attr) {
    var newObj = Object.create(null);
    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            var arrAttr = Array.isArray(attr) ? attr : [attr];
            if (arrAttr.indexOf(item) >= 0) {
                newObj[item] = obj[item];
            }
        }
    }
    return newObj;
}
function omit(obj, attr) {
    var newObj = Object.create(null);
    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            var arrAttr = Array.isArray(attr) ? attr : [attr];
            if (arrAttr.indexOf(item) < 0) {
                newObj[item] = obj[item];
            }
        }
    }
    return newObj;
}
function uniqComponentIdArray(configs) {
    var componentIds = {};
    var newConfigs = [];
    for (var i = (configs.length - 1); i >= 0; i--) {
        var config = configs[i];
        if (!componentIds[config.componentId]) {
            newConfigs.push(config);
            componentIds[config.componentId] = true;
        }
    }
    newConfigs.sort(function (ca, cb) {
        return parseInt(ca.componentId, 10) - parseInt(cb.componentId, 10);
    });
    return newConfigs;
}
var Chart = (function () {
    function Chart(context, elem, vcRef) {
        this.context = context;
        this.viewId = generateRandomNum();
        this.componentId = generateRandomNum();
        this.context = context;
        this.elem = elem;
        this.vcRef = vcRef;
        var name = this.getComponentName();
        var viewType = this.getViewType();
        var hasInViews = ['v-facet-view', 'v-view'].indexOf(viewType) !== -1;
        if (['FacetView', 'View'].indexOf(name) > -1) {
            this.context.lastFacetId = this.viewId || this.componentId;
        }
        else if (hasInViews) {
            this.viewId = this.context.lastFacetId;
        }
    }
    Chart.prototype.ngAfterViewInit = function () {
        if (this.context.chart) {
            this.context.chart.destroy();
        }
        this.initChart();
    };
    Chart.prototype.ngOnChanges = function (changes) {
        this.initChart(true);
    };
    Chart.prototype.combineViewConfig = function (props, config) {
        if (props.data) {
            config.data = props.data;
        }
        if (props.scale) {
            config.scale = props.scale;
        }
        if (props.start) {
            config.start = props.start;
        }
        if (props.end) {
            config.end = props.end;
        }
    };
    Chart.prototype.combineChartConfig = function (props, config) {
        var chartRetain = [
            'height', 'width', 'animate', 'forceFit',
            'background', 'plotBackground', 'padding',
            'onMouseDown', 'onMouseMove', 'onMouseUp',
            'onClick', 'onDbClick',
            'onTouchStart', 'onTouchMove', 'onTouchEnd',
            'onPlotEnter', 'onPlotMove', 'onPlotLeave',
            'onPlotClick', 'onPlotDbClick',
        ];
        config.chart = retain(props, chartRetain);
    };
    Chart.prototype.convertValueToNum = function (props) {
        var numberProps = {};
        var numberKeys = ['radius', 'innerRadius', 'size', 'offsetX', 'offsetY', 'cols', 'padding',
            'opacity', 'startAngle', 'endAngle'];
        Object.keys(props).forEach(function (propKey) {
            if (numberKeys.indexOf(propKey) > -1) {
                if (typeof props[propKey] === 'string') {
                    var value = parseFloat(props[propKey]);
                    value = isNaN(value) ? props[propKey] : value;
                    numberProps[propKey] = value;
                }
            }
        });
        return numberProps;
    };
    Chart.prototype.combineContentConfig = function (displayName, props, config) {
        var realName = firstLowerCase(displayName);
        var nameLowerCase = displayName.toLowerCase();
        var regSeries = [
            'pie',
            'sector',
            'line',
            'smoothLine',
            'dashLine',
            'area',
            'stackArea',
            'smoothArea',
            'bar',
            'stackBar',
            'dodgeBar',
            'interval',
            'stackInterval',
            'dodgeInterval',
            'point',
            'funnel',
            'pyramid',
            'schema',
            'box',
            'candle',
            'polygon',
            'contour',
            'heatmap',
            'edge',
            'sankey',
            'errorBar',
            'jitterPoint',
            'path',
        ];
        if (regSeries.indexOf(realName) < 0 && isOwnEmpty(props)) {
            config[nameLowerCase] = true;
        }
        else if (regSeries.indexOf(realName) >= 0) {
            if (!config.series) {
                config.series = [];
            }
            config.series.push(__assign({ quickType: realName }, props, { componentId: this.componentId }));
            config.series = uniqComponentIdArray(config.series);
        }
        else if (nameLowerCase === 'axis') {
            if (!config.axis) {
                config.axis = [];
            }
            config.axis.push(__assign({}, props, { componentId: this.componentId }));
            config.axis = uniqComponentIdArray(config.axis);
        }
        else if (nameLowerCase === 'series') {
            if (!config.series) {
                config.series = [];
            }
            config.series.push(__assign({}, props, { componentId: this.componentId }));
            config.series = uniqComponentIdArray(config.series);
        }
        else if (nameLowerCase === 'guide') {
            if (!config.guide) {
                config.guide = [];
            }
            config.guide.push(__assign({}, props, { componentId: this.componentId }));
            config.guide = uniqComponentIdArray(config.guide);
        }
        else if (nameLowerCase === 'legend') {
            if (!config.legend) {
                config.legend = [];
            }
            config.legend.push(__assign({}, props, { componentId: this.componentId }));
            config.legend = uniqComponentIdArray(config.legend);
        }
        else {
            config[nameLowerCase] = props;
        }
        return config;
    };
    Chart.prototype.changeViewConfig = function () {
        var views = this.context.views;
        var facetviews = this.context.facetviews;
        var config = this.context.config;
        if (!isOwnEmpty(views)) {
            config.views = [];
            for (var item in views) {
                if (views.hasOwnProperty(item)) {
                    config.views.push(views[item]);
                }
            }
        }
        if (!isOwnEmpty(facetviews)) {
            config.facet.views = [];
            for (var item in facetviews) {
                if (facetviews.hasOwnProperty(item)) {
                    config.facet.views.push(facetviews[item]);
                }
            }
        }
    };
    Chart.prototype.getProps = function (allProps) {
        var strippingProperties = ['chart', 'chartDiv', 'config', 'context', 'viewId', 'facetviews',
            'componentId', 'elem', 'vcRef', 'constructor', 'combineViewConfig', 'convertValueToNum',
            'combineChartConfig', 'combineContentConfig', 'ngOnInit', 'ngAfterViewInit', 'getProps',
            'changeViewConfig', 'getViewType', 'getViewChartConfig', 'initChart', 'ngOnChanges', 'renderChart'];
        if (['FacetView', 'View'].indexOf(this.getComponentName()) < 0) {
            strippingProperties.push('viewId');
        }
        if (allProps) {
            var properties = {};
            for (var key in allProps) {
                if (strippingProperties.indexOf(key) === -1) {
                    properties[key] = allProps[key];
                }
            }
            var numberProps = this.convertValueToNum(properties);
            return __assign({}, properties, numberProps);
        }
        return allProps;
    };
    Chart.prototype.getViewType = function () {
        return this.vcRef.parentInjector.elDef.element.name;
    };
    Chart.prototype.getComponentName = function () {
        var viewName = this.elem.nativeElement.tagName.toLowerCase();
        var names = viewName.split('-');
        names.shift();
        var upperCaseNames = names.map(function (name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        });
        return upperCaseNames.join('');
    };
    Chart.prototype.initChart = function (rerender) {
        var name = this.getComponentName();
        var props = this.getProps(this);
        var config = this.context.config;
        var viewType = this.getViewType();
        var hasInViews = ['v-facet-view', 'v-view'].indexOf(viewType) !== -1;
        var viewId = this.viewId || this.componentId;
        if (name === 'Chart') {
            this.combineChartConfig(props, this.context.config);
            this.combineViewConfig(props, this.context.config);
            this.renderChart(rerender);
        }
        else if (name === 'Facet') {
            var options = omit(props, 'children');
            config.facet = options;
        }
        else if (name === 'FacetView') {
            if (!this.context.facetviews[viewId]) {
                this.context.facetviews[viewId] = { viewId: viewId };
            }
            this.combineViewConfig(props, this.context.facetviews[viewId]);
        }
        else if (name === 'View') {
            if (!this.context.views[viewId]) {
                this.context.views[viewId] = { viewId: viewId };
            }
            this.combineViewConfig(props, this.context.views[viewId]);
        }
        else {
            if (!hasInViews) {
                this.combineContentConfig(name, props, config);
            }
            else {
                if (viewType === 'v-view') {
                    if (!this.context.views[viewId]) {
                        this.context.views[viewId] = { viewId: viewId };
                    }
                    this.combineContentConfig(name, props, this.context.views[viewId]);
                }
                else if (viewType === 'v-facet-view') {
                    if (!this.context.facetviews[viewId]) {
                        this.context.facetviews[viewId] = { viewId: viewId };
                    }
                    this.combineContentConfig(name, props, this.context.facetviews[viewId]);
                }
            }
        }
        if (rerender) {
            this.renderChart(true);
        }
    };
    Chart.prototype.renderChart = function (rerender) {
        var _this = this;
        this.changeViewConfig();
        var name = this.getComponentName();
        if (rerender) {
            if (this.context.timer) {
                window.clearTimeout(this.context.timer);
                this.context.timer = null;
            }
            this.context.timer = setTimeout(function () {
                if (_this.context.chart) {
                    _this.context.chart.repaint(_this.context.config);
                }
                else {
                    _this.context.config.chart.container = _this.context.chartDivElement;
                    _this.context.chart = viser(_this.context.config);
                }
            }, 90);
        }
        else if (!this.context.chart && name === 'Chart') {
            this.context.config.chart.container = this.chartDiv.nativeElement;
            this.context.chartDivElement = this.chartDiv.nativeElement;
            this.context.chart = viser(this.context.config);
        }
    };
    Chart.decorators = [
        { type: Component, args: [{
                    providers: [ChartContext],
                    selector: 'v-chart',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Chart.ctorParameters = function () { return [
        { type: ChartContext },
        { type: ElementRef },
        { type: ViewContainerRef }
    ]; };
    Chart.propDecorators = {
        data: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        animate: [{ type: Input }],
        forceFit: [{ type: Input }],
        background: [{ type: Input }],
        plotBackground: [{ type: Input }],
        padding: [{ type: Input }],
        scale: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }],
        onPlotEnter: [{ type: Input }],
        onPlotMove: [{ type: Input }],
        onPlotLeave: [{ type: Input }],
        onPlotClick: [{ type: Input }],
        onPlotDbClick: [{ type: Input }],
        chartDiv: [{ type: ViewChild, args: ['chartDom',] }]
    };
    return Chart;
}());
export { Chart };
//# sourceMappingURL=Chart.js.map