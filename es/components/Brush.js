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
var Brush = (function (_super) {
    __extends(Brush, _super);
    function Brush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brush.decorators = [
        { type: Component, args: [{
                    selector: 'v-brush',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Brush.propDecorators = {
        canvas: [{ type: Input }],
        startPoint: [{ type: Input }],
        brushing: [{ type: Input }],
        dragging: [{ type: Input }],
        brushShape: [{ type: Input }],
        container: [{ type: Input }],
        polygonPath: [{ type: Input }],
        style: [{ type: Input }],
        type: [{ type: Input }],
        dragable: [{ type: Input }],
        dragoffX: [{ type: Input }],
        dragoffY: [{ type: Input }],
        inPlot: [{ type: Input }],
        xField: [{ type: Input }],
        yField: [{ type: Input }],
        filter: [{ type: Input }],
        onBrushstart: [{ type: Input }],
        onBrushmove: [{ type: Input }],
        onBrushend: [{ type: Input }],
        onDragstart: [{ type: Input }],
        onDragmove: [{ type: Input }],
        onDragend: [{ type: Input }]
    };
    return Brush;
}(Chart));
export { Brush };
//# sourceMappingURL=Brush.js.map