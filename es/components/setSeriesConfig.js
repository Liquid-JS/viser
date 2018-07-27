import * as _ from 'lodash';
import * as setQuickType from './setQuickType';
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
    if (!_.isNil(position)) {
        return chart.position(position);
    }
    return chart;
}
function setSeriesAdjust(chart, currSeries) {
    var adjust = currSeries.adjust;
    if (!_.isNil(adjust)) {
        return chart.adjust(adjust);
    }
    return chart;
}
function setSeriesShape(chart, currSeries) {
    var shape = currSeries.shape;
    if (_.isString(shape)) {
        return chart.shape(shape);
    }
    if (_.isArray(shape) && shape.length >= 1) {
        if (shape[1]) {
            return chart.shape(shape[0], shape[1]);
        }
        return chart.shape(shape[0]);
    }
    return chart;
}
function setSeriesColor(chart, currSeries) {
    var color = currSeries.color;
    if (_.isString(color)) {
        return chart.color(color);
    }
    if (_.isArray(color) && color.length >= 1) {
        if (color[1]) {
            return chart.color(color[0], color[1]);
        }
        return chart.color(color[0]);
    }
    return chart;
}
function setSeriesSize(chart, currSeries) {
    var size = currSeries.size;
    if (_.isNumber(size) || _.isString(size)) {
        return chart.size(size);
    }
    if (_.isArray(size) && size.length >= 1) {
        if (size[1]) {
            return chart.size(size[0], size[1]);
        }
        return chart.size(size[0]);
    }
    return chart;
}
function setSeriesStyle(chart, currSeries) {
    var style = currSeries.style;
    if (_.isArray(style) && style.length >= 1) {
        if (style[1]) {
            return chart.style(style[0], style[1]);
        }
        return chart.style(style[0]);
    }
    if (_.isPlainObject(style)) {
        return chart.style(style);
    }
    return chart;
}
function setSeriesAnimate(chart, currSeries) {
    var animate = currSeries.animate;
    if (!_.isEmpty(animate)) {
        return chart.animate(animate);
    }
    return chart;
}
export var process = function (chart, config) {
    var cSeries = _.cloneDeep(config.series);
    var isArr = _.isArray(cSeries);
    if (_.isNil(cSeries) || _.isEmpty(cSeries)) {
        return chart;
    }
    var arrSeries = isArr ? cSeries : [cSeries];
    arrSeries = setQuickType.process(arrSeries, config.coord);
    arrSeries = _.sortBy(arrSeries, 'zIndex');
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