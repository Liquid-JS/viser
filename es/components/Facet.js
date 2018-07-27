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
var Facet = (function (_super) {
    __extends(Facet, _super);
    function Facet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Facet.decorators = [
        { type: Component, args: [{
                    selector: 'v-facet',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Facet.propDecorators = {
        type: [{ type: Input }],
        fields: [{ type: Input }],
        cols: [{ type: Input }],
        rows: [{ type: Input }],
        colField: [{ type: Input }],
        rowField: [{ type: Input }],
        colValue: [{ type: Input }],
        rowValue: [{ type: Input }],
        colIndex: [{ type: Input }],
        rowIndex: [{ type: Input }],
        showTitle: [{ type: Input }],
        colTitle: [{ type: Input }],
        rowTitle: [{ type: Input }],
        autoSetAxis: [{ type: Input }],
        padding: [{ type: Input }],
        transpose: [{ type: Input }],
        lineSmooth: [{ type: Input }],
        line: [{ type: Input }],
        views: [{ type: Input }],
        eachView: [{ type: Input }]
    };
    return Facet;
}(Chart));
export { Facet };
//# sourceMappingURL=Facet.js.map