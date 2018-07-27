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
var View = (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.decorators = [
        { type: Component, args: [{
                    selector: 'v-view',
                    template: "<div #chartDom></div>",
                },] },
    ];
    View.propDecorators = {
        data: [{ type: Input }],
        dataPre: [{ type: Input }],
        scale: [{ type: Input }],
        dataView: [{ type: Input }],
        start: [{ type: Input }],
        end: [{ type: Input }]
    };
    return View;
}(Chart));
var FacetView = (function (_super) {
    __extends(FacetView, _super);
    function FacetView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetView.decorators = [
        { type: Component, args: [{
                    selector: 'v-facet-view',
                    template: "<div #chartDom></div>",
                },] },
    ];
    FacetView.propDecorators = {
        dataPre: [{ type: Input }],
        dataView: [{ type: Input }],
        scale: [{ type: Input }]
    };
    return FacetView;
}(Chart));
export { View, FacetView };
//# sourceMappingURL=View.js.map