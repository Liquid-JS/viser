import * as _ from 'lodash';
import * as setCustomFormatter from './setCustomFormatter';
export var process = function (chart, config) {
    var cAxis = _.cloneDeep(config.axis);
    var isArr = _.isArray(cAxis);
    if (_.isNil(cAxis) || cAxis === false ||
        (isArr && cAxis.length === 0)) {
        return chart.axis(false);
    }
    if (cAxis === true) {
        return chart.axis(true);
    }
    var arrAxis = isArr ? cAxis : [cAxis];
    for (var _i = 0, arrAxis_1 = arrAxis; _i < arrAxis_1.length; _i++) {
        var res = arrAxis_1[_i];
        if (res.label) {
            res.label = setCustomFormatter.supportD3Formatter(res.label);
        }
        if (res.dataKey) {
            if (res.show === false) {
                chart.axis(res.dataKey, false);
            }
            else {
                var options = _.omit(res, ['show', 'dataKey']);
                chart.axis(res.dataKey, options);
            }
        }
        else {
            chart.axis(res);
        }
    }
    return chart;
};
//# sourceMappingURL=setAxisConfig.js.map