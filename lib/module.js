'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Global = exports.registerShape = exports.registerAnimation = exports.ViserModule = undefined;

var _common = require('@angular/common');

var _core = require('@angular/core');

var _viser = require('viser');

var viser = _interopRequireWildcard(_viser);

var _Chart = require('./Chart');

var _index = require('./components/index');

var _LiteChart = require('./LiteChart');

var _Plugin = require('./plugins/Plugin');

var _Slider = require('./plugins/Slider');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ViserModule = function () {
    function ViserModule() {}
    ViserModule.decorators = [{ type: _core.NgModule, args: [{
            imports: [_common.CommonModule],
            declarations: [_Chart.Chart, _LiteChart.LiteChart, _index.Axis, _index.Brush, _index.Coord, _index.Facet, _index.Guide, _index.Legend, _index.Tooltip, _index.View, _index.FacetView, _index.Series, _index.Pie, _index.Sector, _index.Line, _index.SmoothLine, _index.DashLine, _index.Area, _index.StackArea, _index.SmoothArea, _index.Bar, _index.StackBar, _index.DodgeBar, _index.Point, _index.Funnel, _index.Pyramid, _index.Schema, _index.Box, _index.Candle, _index.Polygon, _index.Contour, _index.Heatmap, _index.Edge, _index.Sankey, _index.ErrorBar, _index.JitterPoint, _index.StackInterval, _index.DodgeInterval, _index.Interval, _index.Path, _Plugin.PluginComponent, _Slider.Slider],
            exports: [_Chart.Chart, _LiteChart.LiteChart, _index.Axis, _index.Brush, _index.Coord, _index.Facet, _index.Guide, _index.Legend, _index.Tooltip, _index.View, _index.FacetView, _index.Series, _index.Pie, _index.Sector, _index.Line, _index.SmoothLine, _index.DashLine, _index.Area, _index.StackArea, _index.SmoothArea, _index.Bar, _index.StackBar, _index.DodgeBar, _index.Point, _index.Funnel, _index.Pyramid, _index.Schema, _index.Box, _index.Candle, _index.Polygon, _index.Contour, _index.Heatmap, _index.Edge, _index.Sankey, _index.ErrorBar, _index.JitterPoint, _index.StackInterval, _index.DodgeInterval, _index.Interval, _index.Path, _Plugin.PluginComponent, _Slider.Slider]
        }] }];
    return ViserModule;
}();
exports.ViserModule = ViserModule;
var registerAnimation = exports.registerAnimation = viser.registerAnimation;
var registerShape = exports.registerShape = viser.registerShape;
var Global = exports.Global = viser.Global;
//# sourceMappingURL=module.js.map