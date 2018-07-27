var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, Input } from '@angular/core';
import { Chart } from '../Chart';
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.decorators = [
        { type: Component, args: [{
                    selector: 'v-tooltip',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Tooltip.propDecorators = {
        x: [{ type: Input }],
        y: [{ type: Input }],
        items: [{ type: Input }],
        show: [{ type: Input }],
        triggerOn: [{ type: Input }],
        showTitle: [{ type: Input }],
        title: [{ type: Input }],
        crosshairs: [{ type: Input }],
        offset: [{ type: Input }],
        inPlot: [{ type: Input }],
        follow: [{ type: Input }],
        shared: [{ type: Input }],
        enterable: [{ type: Input }],
        position: [{ type: Input }],
        hideMarkers: [{ type: Input }],
        containerTpl: [{ type: Input }],
        itemTpl: [{ type: Input }],
        g2Tooltip: [{ type: Input }],
        g2TooltipTitle: [{ type: Input }],
        g2TooltipList: [{ type: Input }],
        g2TooltipListItem: [{ type: Input }],
        g2TooltipMarker: [{ type: Input }],
        onShow: [{ type: Input }],
        onHide: [{ type: Input }],
        onChange: [{ type: Input }],
        defaultPoint: [{ type: Input }],
        timeStamp: [{ type: Input }],
        plotRange: [{ type: Input }]
    };
    return Tooltip;
}(Chart));
export { Tooltip };
//# sourceMappingURL=Tooltip.js.map