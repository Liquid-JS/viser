var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as _ from 'lodash';
import * as setAxisConfig from '../components/setAxisConfig';
import * as setCoordConfig from '../components/setCoordConfig';
import * as setGuideConfig from '../components/setGuideConfig';
import * as setLegendConfig from '../components/setLegendConfig';
import * as setScaleConfig from '../components/setScaleConfig';
import * as setSeriesConfig from '../components/setSeriesConfig';
import * as setTooltipConfig from '../components/setTooltipConfig';
import loadShapes from '../shapes/loadShapes';
import * as EventUtils from '../utils/EventUtils';
var G2 = require('@antv/g2');
var Brush = require('@antv/g2-brush');
G2.track(false);
function firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) { return L.toUpperCase(); });
}
var CommonChart = (function () {
    function CommonChart(config) {
        this.viewInstance = {};
        this.config = _.cloneDeep(config);
        this.checkChartConfig(this.config);
        this.chartInstance = new G2.Chart(this.config.chart);
    }
    CommonChart.prototype.getWidth = function () {
        return this.chartInstance.get('width');
    };
    CommonChart.prototype.getHeight = function () {
        return this.chartInstance.get('height');
    };
    CommonChart.prototype.render = function () {
        var config = this.config;
        var chart = this.chartInstance;
        loadShapes();
        this.setEvents(chart, config);
        this.setDataSource(chart, config.data);
        this.setCoord(chart, config);
        this.setTooltip(chart, config);
        this.setAxis(chart, config);
        this.setContent(chart, config);
        this.setLegend(chart, config);
        this.setViews(chart, config);
        this.setFacet(chart, config);
        chart.render();
        this.setDefaultTooltip(chart, config);
        this.setBrush(chart, config);
    };
    CommonChart.prototype.repaint = function (config) {
        var newConfig = _.cloneDeep(config);
        this.checkChartConfig(newConfig);
        this.renderDiffConfig(newConfig);
    };
    CommonChart.prototype.destroy = function (chart) {
        if (chart) {
            chart.destroy();
        }
    };
    CommonChart.prototype.clear = function (chart) {
        if (chart) {
            chart.clear();
        }
    };
    CommonChart.prototype.checkChartConfig = function (config) {
        var chart = config.chart;
        if (!chart || !chart.height) {
            throw new Error('please set correct chart option');
        }
    };
    CommonChart.prototype.createView = function (chart, config) {
        var opts = {};
        if (config.start) {
            opts.start = config.start;
        }
        if (config.end) {
            opts.end = config.end;
        }
        var view = chart.view(opts);
        if (!config.viewId) {
            throw new Error('you must set viewId');
        }
        this.viewInstance[config.viewId] = view;
        return view;
    };
    CommonChart.prototype.setEvents = function (chart, config) {
        EventUtils.setEvent(chart, '', config.chart);
    };
    CommonChart.prototype.setDataSource = function (chart, data) {
        if (!_.isNil(data) && !_.isEmpty(data)) {
            chart.source(data);
        }
    };
    CommonChart.prototype.setScale = function (chart, config) {
        return setScaleConfig.process(chart, config);
    };
    CommonChart.prototype.setCoord = function (chart, config) {
        return setCoordConfig.process(chart, config);
    };
    CommonChart.prototype.setSeries = function (chart, config) {
        return setSeriesConfig.process(chart, config);
    };
    CommonChart.prototype.setAxis = function (chart, config) {
        return setAxisConfig.process(chart, config);
    };
    CommonChart.prototype.setTooltip = function (chart, config) {
        return setTooltipConfig.process(chart, config);
    };
    CommonChart.prototype.setDefaultTooltip = function (chart, config) {
        return setTooltipConfig.setDefaultPoint(chart, config);
    };
    CommonChart.prototype.setGuide = function (chart, config) {
        return setGuideConfig.process(chart, config);
    };
    CommonChart.prototype.setLegend = function (chart, config) {
        return setLegendConfig.process(chart, config);
    };
    CommonChart.prototype.setContent = function (chart, config) {
        this.setScale(chart, config);
        this.setSeries(chart, config);
        this.setGuide(chart, config);
    };
    CommonChart.prototype.setView = function (item, chart, config) {
        var view = this.createView(chart, item);
        var viewData = item.data ? item.data : config.data;
        this.setDataSource(view, viewData);
        if (!_.isNil(item.coord)) {
            this.setCoord(view, item);
        }
        if (!_.isNil(item.tooltip)) {
            this.setTooltip(view, item);
        }
        if (!_.isNil(item.axis)) {
            this.setAxis(view, item);
        }
        if (!_.isNil(item.guide)) {
            this.setGuide(view, item);
        }
        this.setContent(view, item);
        return view;
    };
    CommonChart.prototype.setViews = function (chart, config) {
        var cViews = _.cloneDeep(config.views);
        var isArr = Array.isArray(cViews);
        if (_.isNil(cViews) || _.isEmpty(cViews)) {
            return;
        }
        var arrViews = isArr ? cViews : [cViews];
        for (var _i = 0, arrViews_1 = arrViews; _i < arrViews_1.length; _i++) {
            var item = arrViews_1[_i];
            this.setView(item, chart, config);
        }
    };
    CommonChart.prototype.setFacetViews = function (chart, facet, views) {
        this.setDataSource(chart, views.data);
        if (!_.isNil(views.coord)) {
            this.setCoord(chart, views);
        }
        if (!_.isNil(views.tooltip)) {
            this.setTooltip(chart, views);
        }
        if (!_.isNil(views.axis)) {
            this.setAxis(chart, views);
        }
        if (!_.isNil(views.guide)) {
            this.setGuide(chart, views);
        }
        this.setContent(chart, views);
    };
    CommonChart.prototype.setFacet = function (chart, config) {
        var _this = this;
        var cFacet = _.cloneDeep(config.facet);
        if (_.isNil(cFacet) || _.isEmpty(cFacet)) {
            return;
        }
        var options = _.omit(cFacet, ['type', 'views']);
        if (_.isEmpty(cFacet.views) && !_.isFunction(cFacet.views)) {
            return chart.facet(cFacet.type, options);
        }
        if (_.isFunction(cFacet.views)) {
            options.eachView = function (v, f) {
                _this.setFacetViews(v, f, cFacet.views(v, f));
            };
        }
        else {
            cFacet.views = Array.isArray(cFacet.views) ? cFacet.views : [cFacet.views];
            options.eachView = function (v, f) {
                _this.setFacetViews(v, f, cFacet.views[0]);
            };
        }
        return chart.facet(cFacet.type, options);
    };
    CommonChart.prototype.setBrush = function (chart, config) {
        if (_.isNil(config.brush) || _.isEmpty(config.brush)) {
            return;
        }
        var brush = config.brush;
        var brushConfig = __assign({}, config.brush, { canvas: chart.get('canvas'), chart: chart });
        var regEvents = /on(BrushStart|BrushMove|BrushEnd|DragStart|DragMove|DragEnd)/;
        var events = Object.keys(brush).filter(function (entry) { return regEvents.test(entry); });
        events.forEach(function (entry) {
            var item = regEvents.exec(entry);
            if (item && item.length) {
                var oriEventName = 'on' + firstUpperCase(item[0]);
                brushConfig[oriEventName] = function (ev) {
                    brush[entry](ev, chart);
                };
            }
        });
        new Brush(brushConfig);
    };
    CommonChart.prototype.repaintWidthHeight = function (chart, config) {
        var width = _.get(config, 'chart.width');
        if (width) {
            chart.changeWidth(width);
        }
        var height = _.get(config, 'chart.height');
        if (height) {
            chart.changeHeight(height);
        }
    };
    CommonChart.prototype.renderDiffConfig = function (config) {
        var chart = this.chartInstance;
        this.clear(chart);
        this.setScale(chart, config);
        this.setCoord(chart, config);
        this.setAxis(chart, config);
        this.setSeries(chart, config);
        this.setTooltip(chart, config);
        this.setGuide(chart, config);
        this.setViews(chart, config);
        this.setLegend(chart, config);
        this.setFacet(chart, config);
        this.repaintWidthHeight(chart, config);
        if (config.data) {
            chart.changeData(config.data);
        }
        chart.repaint();
        this.setBrush(chart, config);
    };
    return CommonChart;
}());
export default CommonChart;
//# sourceMappingURL=CommonChart.js.map