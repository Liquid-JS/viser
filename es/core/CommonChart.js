import * as _ from 'lodash';
import * as setAxisConfig from '../components/setAxisConfig';
import * as setCoordConfig from '../components/setCoordConfig';
import * as setGuideConfig from '../components/setGuideConfig';
import * as setLegendConfig from '../components/setLegendConfig';
import * as setScaleConfig from '../components/setScaleConfig';
import * as setSeriesConfig from '../components/setSeriesConfig';
import * as setTooltipConfig from '../components/setTooltipConfig';
var F2 = require('@antv/f2');
var CommonChart = (function () {
    function CommonChart(config) {
        this.config = _.cloneDeep(config);
        this.checkChartConfig(this.config);
        this.chartInstance = new F2.Chart(this.config.chart);
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
        this.setDataSource(chart, config.data);
        this.setCoord(chart, config);
        this.setTooltip(chart, config);
        this.setAxis(chart, config);
        this.setContent(chart, config);
        this.setLegend(chart, config);
        chart.render();
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
    CommonChart.prototype.repaintWidthHeight = function (chart, config) {
        var width = _.get(config, 'chart.width');
        var height = _.get(config, 'chart.height');
        chart.changeSize(width, height);
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
        this.setLegend(chart, config);
        this.repaintWidthHeight(chart, config);
        if (config.data) {
            chart.changeData(config.data);
        }
        chart.repaint();
    };
    return CommonChart;
}());
export default CommonChart;
//# sourceMappingURL=CommonChart.js.map