'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FacetView = exports.View = undefined;

var _core = require('@angular/core');

var _Chart = require('../Chart');

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var View = function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.decorators = [{ type: _core.Component, args: [{
            selector: 'v-view',
            template: "<div #chartDom></div>"
        }] }];
    View.propDecorators = {
        data: [{ type: _core.Input }],
        dataPre: [{ type: _core.Input }],
        scale: [{ type: _core.Input }],
        dataView: [{ type: _core.Input }],
        start: [{ type: _core.Input }],
        end: [{ type: _core.Input }]
    };
    return View;
}(_Chart.Chart);
var FacetView = function (_super) {
    __extends(FacetView, _super);
    function FacetView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetView.decorators = [{ type: _core.Component, args: [{
            selector: 'v-facet-view',
            template: "<div #chartDom></div>"
        }] }];
    FacetView.propDecorators = {
        dataPre: [{ type: _core.Input }],
        dataView: [{ type: _core.Input }],
        scale: [{ type: _core.Input }]
    };
    return FacetView;
}(_Chart.Chart);
exports.View = View;
exports.FacetView = FacetView;
//# sourceMappingURL=View.js.map