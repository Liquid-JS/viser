'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var process = exports.process = function process(chart, config) {
    var cLegend = (0, _cloneDeep3.default)(config.legend);
    var isArr = Array.isArray(cLegend);
    if ((0, _isNil3.default)(cLegend) || cLegend === false || isArr && cLegend.length === 0) {
        return chart.legend(false);
    }
    if (cLegend === true) {
        return chart.legend(true);
    }
    var arrLegend = isArr ? cLegend : [cLegend];
    for (var _i = 0, arrLegend_1 = arrLegend; _i < arrLegend_1.length; _i++) {
        var res = arrLegend_1[_i];
        var _loop_1 = function _loop_1(item) {
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
            } else {
                var option = (0, _omit3.default)(res, ['dataKey', 'show']);
                chart.legend(res.dataKey, option);
            }
        } else {
            chart.legend(res);
        }
    }
    return chart;
};
//# sourceMappingURL=setLegendConfig.js.map