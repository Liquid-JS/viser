import { Injectable } from '@angular/core';
function generateRandomNum() {
    return (Math.floor(new Date().getTime() + Math.random() * 10000)).toString();
}
var PluginContext = (function () {
    function PluginContext() {
        this.config = {};
        this.container = 'viser-slider-' + generateRandomNum();
    }
    PluginContext.decorators = [
        { type: Injectable },
    ];
    return PluginContext;
}());
export { PluginContext };
//# sourceMappingURL=PluginService.js.map