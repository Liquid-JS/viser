import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as viser from 'viser';
import { Chart } from './Chart';
import { Area, Axis, Bar, Box, Brush, Candle, Contour, Coord, DashLine, DodgeBar, DodgeInterval, Edge, ErrorBar, Facet, FacetView, Funnel, Guide, Heatmap, Interval, JitterPoint, Legend, Line, Path, Pie, Point, Polygon, Pyramid, Sankey, Schema, Sector, Series, SmoothArea, SmoothLine, StackArea, StackBar, StackInterval, Tooltip, View } from './components/index';
import { LiteChart } from './LiteChart';
import { PluginComponent } from './plugins/Plugin';
import { Slider } from './plugins/Slider';
var ViserModule = (function () {
    function ViserModule() {
    }
    ViserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        Chart,
                        LiteChart,
                        Axis,
                        Brush,
                        Coord,
                        Facet,
                        Guide,
                        Legend,
                        Tooltip,
                        View,
                        FacetView,
                        Series,
                        Pie,
                        Sector,
                        Line,
                        SmoothLine,
                        DashLine,
                        Area,
                        StackArea,
                        SmoothArea,
                        Bar,
                        StackBar,
                        DodgeBar,
                        Point,
                        Funnel,
                        Pyramid,
                        Schema,
                        Box,
                        Candle,
                        Polygon,
                        Contour,
                        Heatmap,
                        Edge,
                        Sankey,
                        ErrorBar,
                        JitterPoint,
                        StackInterval,
                        DodgeInterval,
                        Interval,
                        Path,
                        PluginComponent,
                        Slider,
                    ],
                    exports: [
                        Chart,
                        LiteChart,
                        Axis,
                        Brush,
                        Coord,
                        Facet,
                        Guide,
                        Legend,
                        Tooltip,
                        View,
                        FacetView,
                        Series,
                        Pie,
                        Sector,
                        Line,
                        SmoothLine,
                        DashLine,
                        Area,
                        StackArea,
                        SmoothArea,
                        Bar,
                        StackBar,
                        DodgeBar,
                        Point,
                        Funnel,
                        Pyramid,
                        Schema,
                        Box,
                        Candle,
                        Polygon,
                        Contour,
                        Heatmap,
                        Edge,
                        Sankey,
                        ErrorBar,
                        JitterPoint,
                        StackInterval,
                        DodgeInterval,
                        Interval,
                        Path,
                        PluginComponent,
                        Slider,
                    ],
                },] },
    ];
    return ViserModule;
}());
export { ViserModule };
export var registerAnimation = viser.registerAnimation;
export var registerShape = viser.registerShape;
export var Global = viser.Global;
//# sourceMappingURL=module.js.map