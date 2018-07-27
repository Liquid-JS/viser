import * as _ from 'lodash';
import CommonChart from './core/CommonChart';
import * as CustomizeUtils from './utils/CustomizeUtils';
var F2 = require('@antv/f2');
export var registerAnimation = CustomizeUtils.registerAnimation;
export var registerShape = CustomizeUtils.registerShape;
export var registerGesture = CustomizeUtils.registerGesture;
export var Global = F2.Global;
function hasDataCondition(config) {
    var hasData = false;
    if (!_.isEmpty(config.data)) {
        hasData = true;
    }
    if (!_.isNil(config.views)) {
        if (_.isPlainObject(config.views) && !_.isEmpty(config.views.data)) {
            hasData = true;
        }
        if (_.isArray(config.views)) {
            for (var _i = 0, _a = config.views; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!_.isEmpty(item.data)) {
                    hasData = true;
                }
            }
        }
    }
    return hasData;
}
export default function (config) {
    if (_.isNil(config) || _.isEmpty(config)) {
        return;
    }
    var hasData = hasDataCondition(config);
    if (!hasData) {
        return;
    }
    var commonChart = new CommonChart(config);
    commonChart.render();
    return commonChart;
}
//# sourceMappingURL=index.js.map