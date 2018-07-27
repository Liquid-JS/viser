import * as _ from 'lodash';
export var process = function (chart, config) {
    var cLegend = _.cloneDeep(config.legend);
    var isArr = Array.isArray(cLegend);
    if (_.isNil(cLegend) || cLegend === false ||
        (isArr && cLegend.length === 0)) {
        return chart.legend(false);
    }
    if (cLegend === true) {
        return chart.legend(true);
    }
    var arrLegend = isArr ? cLegend : [cLegend];
    for (var _i = 0, arrLegend_1 = arrLegend; _i < arrLegend_1.length; _i++) {
        var res = arrLegend_1[_i];
        var _loop_1 = function (item) {
            if (item === 'onClick') {
                var content_1 = res.onClick;
                res.onClick = function (ev) {
                    content_1(ev, chart);
                };
            }
        };
        for (var item in res) {
            _loop_1(item);
        }
        if (res.dataKey) {
            if (res.show === false) {
                chart.legend(res.dataKey, false);
            }
            else {
                var option = _.omit(res, ['dataKey', 'show']);
                chart.legend(res.dataKey, option);
            }
        }
        else {
            chart.legend(res);
        }
    }
    return chart;
};
//# sourceMappingURL=setLegendConfig.js.map