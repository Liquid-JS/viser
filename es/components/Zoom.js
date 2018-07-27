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
import { Graph } from './Graph';
var Zoom = (function (_super) {
    __extends(Zoom, _super);
    function Zoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zoom.decorators = [
        { type: Component, args: [{
                    selector: 'v-zoom',
                    template: "<div #graphDom></div>",
                },] },
    ];
    Zoom.propDecorators = {
        max: [{ type: Input }],
        min: [{ type: Input }],
        current: [{ type: Input }]
    };
    return Zoom;
}(Graph));
export { Zoom };
//# sourceMappingURL=Zoom.js.map