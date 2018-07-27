import * as _ from 'lodash';
export var process = function (chart, config) {
    var cTooltip = _.cloneDeep(config.tooltip);
    if (_.isNil(cTooltip) || cTooltip === false || cTooltip.show === false) {
        return chart.tooltip(false);
    }
    var _loop_1 = function (item) {
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