'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChartContext = undefined;

var _core = require('@angular/core');

function generateRandomNum() {
    return Math.floor(new Date().getTime() + Math.random() * 10000).toString();
}
var ChartContext = function () {
    function ChartContext() {
        this.lastFacetId = '';
        this.config = {};
        this.views = {};
        this.facetviews = {};
        this.viewId = generateRandomNum();
    }
    ChartContext.decorators = [{ type: _core.Injectable }];
    ChartContext.ctorParameters = function () {
        return [];
    };
    return ChartContext;
}();
exports.ChartContext = ChartContext;
//# sourceMappingURL=chartService.js.map