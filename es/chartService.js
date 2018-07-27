import { Injectable } from '@angular/core';
function generateRandomNum() {
    return (Math.floor(new Date().getTime() + Math.random() * 10000)).toString();
}
var ChartContext = (function () {
    function ChartContext() {
        this.lastFacetId = '';
        this.config = {};
        this.views = {};
        this.facetviews = {};
        this.viewId = generateRandomNum();
    }
    ChartContext.decorators = [
        { type: Injectable },
    ];
    ChartContext.ctorParameters = function () { return []; };
    return ChartContext;
}());
export { ChartContext };
//# sourceMappingURL=chartService.js.map