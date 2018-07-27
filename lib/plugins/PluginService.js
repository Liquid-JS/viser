'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PluginContext = undefined;

var _core = require('@angular/core');

function generateRandomNum() {
    return Math.floor(new Date().getTime() + Math.random() * 10000).toString();
}
var PluginContext = function () {
    function PluginContext() {
        this.config = {};
        this.container = 'viser-slider-' + generateRandomNum();
    }
    PluginContext.decorators = [{ type: _core.Injectable }];
    return PluginContext;
}();
exports.PluginContext = PluginContext;
//# sourceMappingURL=PluginService.js.map