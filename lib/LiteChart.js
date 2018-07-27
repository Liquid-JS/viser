'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LiteChart = undefined;

var _core = require('@angular/core');

var _viser = require('viser');

var _viser2 = _interopRequireDefault(_viser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

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
var LiteChart = function () {
    function LiteChart() {
        this.config = {};
        this.views = {};
        this.chart = null;
    }
    LiteChart.prototype.combineViewConfig = function (props, config) {
        if (props.data) {
            config.data = props.data;
        }
        if (props.scale) {
            config.scale = props.scale;
        }
        if (props.guide) {
            config.guide = props.guide;
        }
        config.tooltip = props.tooltip ? props.tooltip : true;
        config.legend = props.legend ? props.legend : true;
        config.axis = props.axis ? props.axis : true;
        return config;
    };
    LiteChart.prototype.combineChartConfig = function (props, config) {
        var chartRetain = ['height', 'width', 'animate', 'forceFit', 'background', 'plotBackground', 'padding'];
        config.chart = retain(props, chartRetain);
        return config;
    };
    LiteChart.prototype.combineSeriesConfig = function (props, config) {
        var regSeries = ['pie', 'sector', 'line', 'smoothLine', 'dashLine', 'area', 'stackArea', 'smoothArea', 'bar', 'stackBar', 'dodgeBar', 'interval', 'stackInterval', 'dodgeInterval', 'point', 'funnel', 'pyramid', 'schema', 'box', 'candle', 'polygon', 'contour', 'heatmap', 'edge', 'sankey', 'errobBar', 'jitterPoint'];
        for (var _i = 0, regSeries_1 = regSeries; _i < regSeries_1.length; _i++) {
            var res = regSeries_1[_i];
            if (props[res]) {
                config.series = __assign({}, config.series, { quickType: res });
                break;
            }
        }
        return config;
    };
    LiteChart.prototype.ngAfterViewInit = function () {
        if (this.chart) {
            this.chart.destroy();
        }
        this.initChart();
    };
    LiteChart.prototype.getProps = function (allProps) {
        var strippingProperties = ['chart', 'chartDiv', 'config', 'context', 'constructor', 'combineViewConfig', 'combineChartConfig', 'combineContentConfig', 'ngAfterViewInit', 'getProps', 'combineSeriesConfig', 'getViewChartConfig', 'initChart', 'ngOnChanges', 'renderChart'];
        if (allProps) {
            var properties = {};
            for (var key in allProps) {
                if (strippingProperties.indexOf(key) === -1) {
                    properties[key] = allProps[key];
                }
            }
            return properties;
        }
        return allProps;
    };
    LiteChart.prototype.getViewChartConfig = function (config) {
        var chartProperties = ['forceFit', 'height', 'width', 'container'];
        var chart = {};
        if (config.chart) {
            for (var key in config.chart) {
                if (chartProperties.indexOf(key) > -1) {
                    chart[key] = config.chart[key];
                }
            }
        }
        return chart;
    };
    LiteChart.prototype.initChart = function (rerender) {
        var props = this.getProps(this);
        this.combineChartConfig(props, this.config);
        this.combineViewConfig(props, this.config);
        this.combineSeriesConfig(props, this.config);
        this.config.chart = this.getViewChartConfig(this.config);
        this.renderChart(rerender);
    };
    LiteChart.prototype.ngOnChanges = function (changes) {
        if (!this.chart) {
            return;
        }
        this.initChart(true);
    };
    LiteChart.prototype.renderChart = function (rerender) {
        this.config.chart.container = this.chartDiv.nativeElement;
        if (rerender) {
            this.chart.repaint(this.config);
        } else {
            this.chart = (0, _viser2.default)(this.config);
        }
    };
    LiteChart.decorators = [{ type: _core.Component, args: [{
            providers: [],
            selector: 'v-liteChart',
            template: "<div #chartDom></div>"
        }] }];
    LiteChart.propDecorators = {
        data: [{ type: _core.Input }],
        width: [{ type: _core.Input }],
        height: [{ type: _core.Input }],
        gemo: [{ type: _core.Input }],
        color: [{ type: _core.Input }],
        label: [{ type: _core.Input }],
        radius: [{ type: _core.Input }],
        innerRadius: [{ type: _core.Input }],
        forceFit: [{ type: _core.Input }],
        fields: [{ type: _core.Input }],
        type: [{ type: _core.Input }],
        opacity: [{ type: _core.Input }],
        size: [{ type: _core.Input }],
        coord: [{ type: _core.Input }],
        scale: [{ type: _core.Input }],
        axis: [{ type: _core.Input }],
        guide: [{ type: _core.Input }],
        series: [{ type: _core.Input }],
        tooltip: [{ type: _core.Input }],
        facet: [{ type: _core.Input }],
        legend: [{ type: _core.Input }],
        pie: [{ type: _core.Input }],
        sector: [{ type: _core.Input }],
        line: [{ type: _core.Input }],
        smoothLine: [{ type: _core.Input }],
        dashLine: [{ type: _core.Input }],
        area: [{ type: _core.Input }],
        stackArea: [{ type: _core.Input }],
        smoothArea: [{ type: _core.Input }],
        bar: [{ type: _core.Input }],
        stackBar: [{ type: _core.Input }],
        dodgeBar: [{ type: _core.Input }],
        point: [{ type: _core.Input }],
        funnel: [{ type: _core.Input }],
        pyramid: [{ type: _core.Input }],
        schema: [{ type: _core.Input }],
        box: [{ type: _core.Input }],
        candle: [{ type: _core.Input }],
        polygon: [{ type: _core.Input }],
        contour: [{ type: _core.Input }],
        heatmap: [{ type: _core.Input }],
        edge: [{ type: _core.Input }],
        sankey: [{ type: _core.Input }],
        errorBar: [{ type: _core.Input }],
        chartDiv: [{ type: _core.ViewChild, args: ['chartDom'] }]
    };
    return LiteChart;
}();
exports.LiteChart = LiteChart;
//# sourceMappingURL=LiteChart.js.map