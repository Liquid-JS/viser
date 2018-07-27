'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tooltip = undefined;

var _core = require('@angular/core');

var _Chart = require('../Chart');

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Tooltip = function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.decorators = [{ type: _core.Component, args: [{
            selector: 'v-tooltip',
            template: "<div #chartDom></div>"
        }] }];
    Tooltip.propDecorators = {
        x: [{ type: _core.Input }],
        y: [{ type: _core.Input }],
        items: [{ type: _core.Input }],
        show: [{ type: _core.Input }],
        triggerOn: [{ type: _core.Input }],
        showTitle: [{ type: _core.Input }],
        title: [{ type: _core.Input }],
        crosshairs: [{ type: _core.Input }],
        offset: [{ type: _core.Input }],
        inPlot: [{ type: _core.Input }],
        follow: [{ type: _core.Input }],
        shared: [{ type: _core.Input }],
        enterable: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        hideMarkers: [{ type: _core.Input }],
        containerTpl: [{ type: _core.Input }],
        itemTpl: [{ type: _core.Input }],
        g2Tooltip: [{ type: _core.Input }],
        g2TooltipTitle: [{ type: _core.Input }],
        g2TooltipList: [{ type: _core.Input }],
        g2TooltipListItem: [{ type: _core.Input }],
        g2TooltipMarker: [{ type: _core.Input }],
        onShow: [{ type: _core.Input }],
        onHide: [{ type: _core.Input }],
        onChange: [{ type: _core.Input }],
        defaultPoint: [{ type: _core.Input }],
        timeStamp: [{ type: _core.Input }],
        plotRange: [{ type: _core.Input }]
    };
    return Tooltip;
}(_Chart.Chart);
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map