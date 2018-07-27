var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, Input, ViewChild } from '@angular/core';
import viser from 'viser';
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
var LiteChart = (function () {
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
        var chartRetain = [
            'height', 'width', 'animate', 'forceFit',
            'background', 'plotBackground', 'padding',
        ];
        config.chart = retain(props, chartRetain);
        return config;
    };
    LiteChart.prototype.combineSeriesConfig = function (props, config) {
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
            'errobBar',
            'jitterPoint',
        ];
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
        var strippingProperties = ['chart', 'chartDiv', 'config', 'context', 'constructor',
            'combineViewConfig', 'combineChartConfig', 'combineContentConfig', 'ngAfterViewInit', 'getProps',
            'combineSeriesConfig', 'getViewChartConfig', 'initChart', 'ngOnChanges', 'renderChart'];
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
        }
        else {
            this.chart = viser(this.config);
        }
    };
    LiteChart.decorators = [
        { type: Component, args: [{
                    providers: [],
                    selector: 'v-liteChart',
                    template: "<div #chartDom></div>",
                },] },
    ];
    LiteChart.propDecorators = {
        data: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        gemo: [{ type: Input }],
        color: [{ type: Input }],
        label: [{ type: Input }],
        radius: [{ type: Input }],
        innerRadius: [{ type: Input }],
        forceFit: [{ type: Input }],
        fields: [{ type: Input }],
        type: [{ type: Input }],
        opacity: [{ type: Input }],
        size: [{ type: Input }],
        coord: [{ type: Input }],
        scale: [{ type: Input }],
        axis: [{ type: Input }],
        guide: [{ type: Input }],
        series: [{ type: Input }],
        tooltip: [{ type: Input }],
        facet: [{ type: Input }],
        legend: [{ type: Input }],
        pie: [{ type: Input }],
        sector: [{ type: Input }],
        line: [{ type: Input }],
        smoothLine: [{ type: Input }],
        dashLine: [{ type: Input }],
        area: [{ type: Input }],
        stackArea: [{ type: Input }],
        smoothArea: [{ type: Input }],
        bar: [{ type: Input }],
        stackBar: [{ type: Input }],
        dodgeBar: [{ type: Input }],
        point: [{ type: Input }],
        funnel: [{ type: Input }],
        pyramid: [{ type: Input }],
        schema: [{ type: Input }],
        box: [{ type: Input }],
        candle: [{ type: Input }],
        polygon: [{ type: Input }],
        contour: [{ type: Input }],
        heatmap: [{ type: Input }],
        edge: [{ type: Input }],
        sankey: [{ type: Input }],
        errorBar: [{ type: Input }],
        chartDiv: [{ type: ViewChild, args: ['chartDom',] }]
    };
    return LiteChart;
}());
export { LiteChart };
//# sourceMappingURL=LiteChart.js.map