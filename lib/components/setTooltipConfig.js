'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var process = exports.process = function process(chart, config) {
    var cTooltip = (0, _cloneDeep3.default)(config.tooltip);
    if ((0, _isNil3.default)(cTooltip) || cTooltip === false || cTooltip.show === false) {
        return chart.tooltip(false);
    }
    var _loop_1 = function _loop_1(item) {
        if (item === 'onShow' || item === 'onHide' || item === 'onChange') {
            var content_1 = cTooltip[item];
            cTooltip[item] = function (ev) {
                content_1(ev, chart);
            };
        }
    };
    for (var item in cTooltip) {
        _loop_1(item);
    }
    return chart.tooltip(cTooltip);
};
//# sourceMappingURL=setTooltipConfig.js.map