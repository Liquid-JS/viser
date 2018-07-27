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
import { PluginComponent } from './Plugin';
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slider.decorators = [
        { type: Component, args: [{
                    selector: 'v-slider',
                    template: "<div id=\"{{context.container}}\"></div>",
                },] },
    ];
    Slider.propDecorators = {
        xAxis: [{ type: Input }],
        yAxis: [{ type: Input }],
        data: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        minSpan: [{ type: Input }],
        maxSpan: [{ type: Input }],
        scales: [{ type: Input }],
        backgroundChart: [{ type: Input }],
        onChange: [{ type: Input }]
    };
    return Slider;
}(PluginComponent));
export { Slider };
//# sourceMappingURL=Slider.js.map