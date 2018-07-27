'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _setCustomFormatter = require('./setCustomFormatter');

var setCustomFormatter = _interopRequireWildcard(_setCustomFormatter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var process = exports.process = function process(chart, config) {
    var cAxis = (0, _cloneDeep3.default)(config.axis);
    var isArr = (0, _isArray3.default)(cAxis);
    if ((0, _isNil3.default)(cAxis) || cAxis === false || isArr && cAxis.length === 0) {
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
            } else {
                var options = (0, _omit3.default)(res, ['show', 'dataKey']);
                chart.axis(res.dataKey, options);
            }
        } else {
            chart.axis(res);
        }
    }
    return chart;
};
//# sourceMappingURL=setAxisConfig.js.map