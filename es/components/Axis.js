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
import * as IStyle from './Style';
var Axis = (function (_super) {
    __extends(Axis, _super);
    function Axis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Axis.decorators = [
        { type: Component, args: [{
                    selector: 'v-axis',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Axis.propDecorators = {
        dataKey: [{ type: Input }],
        show: [{ type: Input }],
        position: [{ type: Input }],
        title: [{ type: Input }],
        tick: [{ type: Input }],
        subTick: [{ type: Input }],
        grid: [{ type: Input }],
        zIndex: [{ type: Input }],
        label: [{ type: Input }],
        line: [{ type: Input }],
        tickLine: [{ type: Input }],
        subTickCount: [{ type: Input }],
        subTickLine: [{ type: Input }],
        autoPaint: [{ type: Input }],
        onTitleMouseDown: [{ type: Input }],
        onTitleMouseMove: [{ type: Input }],
        onTitleMouseLeave: [{ type: Input }],
        onTitleMouseUp: [{ type: Input }],
        onTitleClick: [{ type: Input }],
        onTitleDbClick: [{ type: Input }],
        onTitleTouchStart: [{ type: Input }],
        onTitleTouchMove: [{ type: Input }],
        onTitleTouchEnd: [{ type: Input }],
        onLabelMouseDown: [{ type: Input }],
        onLabelMouseMove: [{ type: Input }],
        onLabelMouseLeave: [{ type: Input }],
        onLabelMouseUp: [{ type: Input }],
        onLabelClick: [{ type: Input }],
        onLabelDbClick: [{ type: Input }],
        onLabelTouchStart: [{ type: Input }],
        onLabelTouchMove: [{ type: Input }],
        onLabelTouchEnd: [{ type: Input }],
        onTicksMouseDown: [{ type: Input }],
        onTicksMouseMove: [{ type: Input }],
        onTicksMouseLeave: [{ type: Input }],
        onTicksMouseUp: [{ type: Input }],
        onTicksClick: [{ type: Input }],
        onTicksDbClick: [{ type: Input }],
        onTicksTouchStart: [{ type: Input }],
        onTicksTouchMove: [{ type: Input }],
        onTicksTouchEnd: [{ type: Input }],
        onLineMouseDown: [{ type: Input }],
        onLineMouseMove: [{ type: Input }],
        onLineMouseLeave: [{ type: Input }],
        onLineMouseUp: [{ type: Input }],
        onLineClick: [{ type: Input }],
        onLineDbClick: [{ type: Input }],
        onLineTouchStart: [{ type: Input }],
        onLineTouchMove: [{ type: Input }],
        onLineTouchEnd: [{ type: Input }],
        onGridMouseDown: [{ type: Input }],
        onGridMouseMove: [{ type: Input }],
        onGridMouseLeave: [{ type: Input }],
        onGridMouseUp: [{ type: Input }],
        onGridClick: [{ type: Input }],
        onGridDbClick: [{ type: Input }],
        onGridTouchStart: [{ type: Input }],
        onGridTouchMove: [{ type: Input }],
        onGridTouchEnd: [{ type: Input }]
    };
    return Axis;
}(Chart));
export { Axis };
//# sourceMappingURL=Axis.js.map