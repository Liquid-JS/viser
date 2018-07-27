'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _setAxisConfig = require('../components/setAxisConfig');

var setAxisConfig = _interopRequireWildcard(_setAxisConfig);

var _setCoordConfig = require('../components/setCoordConfig');

var setCoordConfig = _interopRequireWildcard(_setCoordConfig);

var _setGuideConfig = require('../components/setGuideConfig');

var setGuideConfig = _interopRequireWildcard(_setGuideConfig);

var _setLegendConfig = require('../components/setLegendConfig');

var setLegendConfig = _interopRequireWildcard(_setLegendConfig);

var _setScaleConfig = require('../components/setScaleConfig');

var setScaleConfig = _interopRequireWildcard(_setScaleConfig);

var _setSeriesConfig = require('../components/setSeriesConfig');

var setSeriesConfig = _interopRequireWildcard(_setSeriesConfig);

var _setTooltipConfig = require('../components/setTooltipConfig');

var setTooltipConfig = _interopRequireWildcard(_setTooltipConfig);

var _loadShapes = require('../shapes/loadShapes');

var _loadShapes2 = _interopRequireDefault(_loadShapes);

var _EventUtils = require('../utils/EventUtils');

var EventUtils = _interopRequireWildcard(_EventUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var G2 = require('@antv/g2');
var Brush = require('@antv/g2-brush');
G2.track(false);
function firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
        return L.toUpperCase();
    });
}
var CommonChart = function () {
    function CommonChart(config) {
        this.viewInstance = {};
        this.config = (0, _cloneDeep3.default)(config);
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
        (0, _loadShapes2.default)();
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
        var newConfig = (0, _cloneDeep3.default)(config);
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
        if (!(0, _isNil3.default)(data) && !(0, _isEmpty3.default)(data)) {
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
        if (!(0, _isNil3.default)(item.coord)) {
            this.setCoord(view, item);
        }
        if (!(0, _isNil3.default)(item.tooltip)) {
            this.setTooltip(view, item);
        }
        if (!(0, _isNil3.default)(item.axis)) {
            this.setAxis(view, item);
        }
        if (!(0, _isNil3.default)(item.guide)) {
            this.setGuide(view, item);
        }
        this.setContent(view, item);
        return view;
    };
    CommonChart.prototype.setViews = function (chart, config) {
        var cViews = (0, _cloneDeep3.default)(config.views);
        var isArr = Array.isArray(cViews);
        if ((0, _isNil3.default)(cViews) || (0, _isEmpty3.default)(cViews)) {
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
        if (!(0, _isNil3.default)(views.coord)) {
            this.setCoord(chart, views);
        }
        if (!(0, _isNil3.default)(views.tooltip)) {
            this.setTooltip(chart, views);
        }
        if (!(0, _isNil3.default)(views.axis)) {
            this.setAxis(chart, views);
        }
        if (!(0, _isNil3.default)(views.guide)) {
            this.setGuide(chart, views);
        }
        this.setContent(chart, views);
    };
    CommonChart.prototype.setFacet = function (chart, config) {
        var _this = this;
        var cFacet = (0, _cloneDeep3.default)(config.facet);
        if ((0, _isNil3.default)(cFacet) || (0, _isEmpty3.default)(cFacet)) {
            return;
        }
        var options = (0, _omit3.default)(cFacet, ['type', 'views']);
        if ((0, _isEmpty3.default)(cFacet.views) && !(0, _isFunction3.default)(cFacet.views)) {
            return chart.facet(cFacet.type, options);
        }
        if ((0, _isFunction3.default)(cFacet.views)) {
            options.eachView = function (v, f) {
                _this.setFacetViews(v, f, cFacet.views(v, f));
            };
        } else {
            cFacet.views = Array.isArray(cFacet.views) ? cFacet.views : [cFacet.views];
            options.eachView = function (v, f) {
                _this.setFacetViews(v, f, cFacet.views[0]);
            };
        }
        return chart.facet(cFacet.type, options);
    };
    CommonChart.prototype.setBrush = function (chart, config) {
        if ((0, _isNil3.default)(config.brush) || (0, _isEmpty3.default)(config.brush)) {
            return;
        }
        var brush = config.brush;
        var brushConfig = __assign({}, config.brush, { canvas: chart.get('canvas'), chart: chart });
        var regEvents = /on(BrushStart|BrushMove|BrushEnd|DragStart|DragMove|DragEnd)/;
        var events = Object.keys(brush).filter(function (entry) {
            return regEvents.test(entry);
        });
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
        var width = (0, _get3.default)(config, 'chart.width');
        if (width) {
            chart.changeWidth(width);
        }
        var height = (0, _get3.default)(config, 'chart.height');
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
}();
exports.default = CommonChart;
//# sourceMappingURL=CommonChart.js.map