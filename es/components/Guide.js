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
import * as Style from './Style';
var Guide = (function (_super) {
    __extends(Guide, _super);
    function Guide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guide.decorators = [
        { type: Component, args: [{
                    selector: 'v-guide',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Guide.propDecorators = {
        type: [{ type: Input }],
        top: [{ type: Input }],
        zIndex: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }],
        position: [{ type: Input }],
        lineStyle: [{ type: Input }],
        content: [{ type: Input }],
        style: [{ type: Input }],
        text: [{ type: Input }],
        src: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        offsetX: [{ type: Input }],
        offsetY: [{ type: Input }],
        alignX: [{ type: Input }],
        alignY: [{ type: Input }],
        html: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseLeave: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }]
    };
    return Guide;
}(Chart));
export { Guide };
//# sourceMappingURL=Guide.js.map