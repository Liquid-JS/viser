'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _setQuickType = require('./setQuickType');

var setQuickType = _interopRequireWildcard(_setQuickType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setSeriesGemo(chart, currSeries) {
    var gemo = currSeries.gemo;
    switch (gemo) {
        case 'line':
            chart = chart.line();
            break;
        case 'area':
            chart = chart.area();
            break;
        case 'bar':
        case 'interval':
            chart = chart.interval();
            break;
        case 'point':
            chart = chart.point();
            break;
        case 'schema':
            chart = chart.schema();
            break;
        case 'polygon':
            chart = chart.polygon();
            break;
        case 'path':
            chart = chart.path();
            break;
        default:
            chart = chart.line();
    }
    return chart;
}
function setSeriesPosition(chart, currSeries) {
    var position = currSeries.position;
    if (!(0, _isNil3.default)(position)) {
        return chart.position(position);
    }
    return chart;
}
function setSeriesAdjust(chart, currSeries) {
    var adjust = currSeries.adjust;
    if (!(0, _isNil3.default)(adjust)) {
        return chart.adjust(adjust);
    }
    return chart;
}
function setSeriesShape(chart, currSeries) {
    var shape = currSeries.shape;
    if ((0, _isString3.default)(shape)) {
        return chart.shape(shape);
    }
    if ((0, _isArray3.default)(shape) && shape.length >= 1) {
        if (shape[1]) {
            return chart.shape(shape[0], shape[1]);
        }
        return chart.shape(shape[0]);
    }
    return chart;
}
function setSeriesColor(chart, currSeries) {
    var color = currSeries.color;
    if ((0, _isString3.default)(color)) {
        return chart.color(color);
    }
    if ((0, _isArray3.default)(color) && color.length >= 1) {
        if (color[1]) {
            return chart.color(color[0], color[1]);
        }
        return chart.color(color[0]);
    }
    return chart;
}
function setSeriesSize(chart, currSeries) {
    var size = currSeries.size;
    if ((0, _isNumber3.default)(size) || (0, _isString3.default)(size)) {
        return chart.size(size);
    }
    if ((0, _isArray3.default)(size) && size.length >= 1) {
        if (size[1]) {
            return chart.size(size[0], size[1]);
        }
        return chart.size(size[0]);
    }
    return chart;
}
function setSeriesStyle(chart, currSeries) {
    var style = currSeries.style;
    if ((0, _isArray3.default)(style) && style.length >= 1) {
        if (style[1]) {
            return chart.style(style[0], style[1]);
        }
        return chart.style(style[0]);
    }
    if ((0, _isPlainObject3.default)(style)) {
        return chart.style(style);
    }
    return chart;
}
function setSeriesAnimate(chart, currSeries) {
    var animate = currSeries.animate;
    if (!(0, _isEmpty3.default)(animate)) {
        return chart.animate(animate);
    }
    return chart;
}
var process = exports.process = function process(chart, config) {
    var cSeries = (0, _cloneDeep3.default)(config.series);
    var isArr = (0, _isArray3.default)(cSeries);
    if ((0, _isNil3.default)(cSeries) || (0, _isEmpty3.default)(cSeries)) {
        return chart;
    }
    var arrSeries = isArr ? cSeries : [cSeries];
    arrSeries = setQuickType.process(arrSeries, config.coord);
    arrSeries = (0, _sortBy3.default)(arrSeries, 'zIndex');
    var chartInstance;
    arrSeries.forEach(function (currSeries) {
        chartInstance = setSeriesGemo(chart, currSeries);
        chartInstance = setSeriesPosition(chartInstance, currSeries);
        chartInstance = setSeriesAdjust(chartInstance, currSeries);
        chartInstance = setSeriesShape(chartInstance, currSeries);
        chartInstance = setSeriesColor(chartInstance, currSeries);
        chartInstance = setSeriesSize(chartInstance, currSeries);
        chartInstance = setSeriesStyle(chartInstance, currSeries);
        chartInstance = setSeriesAnimate(chartInstance, currSeries);
    });
    return chartInstance;
};
//# sourceMappingURL=setSeriesConfig.js.map