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
var Coord = (function (_super) {
    __extends(Coord, _super);
    function Coord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coord.decorators = [
        { type: Component, args: [{
                    selector: 'v-coord',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Coord.propDecorators = {
        type: [{ type: Input }],
        direction: [{ type: Input }],
        radius: [{ type: Input }],
        innerRadius: [{ type: Input }],
        startAngle: [{ type: Input }],
        endAngle: [{ type: Input }]
    };
    return Coord;
}(Chart));
export { Coord };
//# sourceMappingURL=Coord.js.map