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
var Edge = (function (_super) {
    __extends(Edge, _super);
    function Edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edge.decorators = [
        { type: Component, args: [{
                    selector: 'v-edge',
                    template: "<div #graphDom></div>",
                },] },
    ];
    Edge.propDecorators = {
        shape: [{ type: Input }]
    };
    return Edge;
}(Graph));
export { Edge };
//# sourceMappingURL=Edge.js.map