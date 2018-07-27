'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var props = ['dataKey', 'show', 'position', 'grid', 'label', 'line', 'tickLine', 'labelOffset', 'id', 'el', 'height', 'width', 'padding', 'pixelRatio', 'animate', 'padding', 'type', 'transposed', 'start', 'end', 'isRect', 'radius', 'innerRadius', 'startAngle', 'endAngle', 'isPolar', 'center', 'circleRadius', 'type', 'position', 'vStyle', 'content', 'offsetX', 'offsetY', 'top', 'start', 'end', 'alignX', 'alignY', 'html', 'direct', 'side', 'background', 'textStyle', 'withPoint', 'pointStyle', 'dataKey', 'show', 'showTitle', 'align', 'verticalAlign', 'position', 'titleGap', 'custom', 'offsetX', 'offsetY', 'itemGap', 'itemMarginBottom', 'itemWidth', 'unCheckColor', 'itemFormatter', 'marker', 'textStyle', 'onClick', 'nameStyle', 'valueStyle', 'wordSpace', 'data', 'scale', 'quickType', 'position', 'gemo', 'adjust', 'color', 'shape', 'size', 'vStyle', 'animate', 'items', 'show', 'triggerOn', 'triggerOff', 'showTitle', 'showCrosshairs', 'crosshairsStyle', 'items', 'showTooltipMarker', 'background', 'titleStyle', 'nameStyle', 'valueStyle', 'showItemMarker', 'itemMarkerStyle', 'custom', 'onShow', 'onHide', 'onChange', 'pie', 'sector', 'line', 'smoothLine', 'dashLine', 'area', 'stackArea', 'smoothArea', 'bar', 'stackBar', 'dodgeBar', 'interval', 'stackInterval', 'dodgeInterval', 'point', 'schema', 'box', 'candle', 'polygon'];
function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current);
        }
    }
    return res;
}
function changeObj(array) {
    var uniqueProps = unique(array);
    var propsObject = {};
    for (var _i = 0, uniqueProps_1 = uniqueProps; _i < uniqueProps_1.length; _i++) {
        var res = uniqueProps_1[_i];
        propsObject[res] = null;
    }
    return propsObject;
}
exports.default = changeObj(props);
//# sourceMappingURL=typed.js.map