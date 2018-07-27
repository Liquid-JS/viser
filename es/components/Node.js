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
var Node = (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Node.decorators = [
        { type: Component, args: [{
                    selector: 'v-node',
                    template: "<div #graphDom></div>",
                },] },
    ];
    Node.propDecorators = {
        shape: [{ type: Input }],
        size: [{ type: Input }],
        label: [{ type: Input }]
    };
    return Node;
}(Graph));
export { Node };
//# sourceMappingURL=Node.js.map