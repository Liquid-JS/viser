var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ViserGraph } from 'viser-graph';
import { GraphContext } from './GraphService';
import { generateRandomNum, retain } from './utils';
var Graph = (function () {
    function Graph(context, elem, vcRef) {
        this.context = context;
        this.componentId = generateRandomNum();
        this.context = context;
        this.elem = elem;
    }
    Graph.prototype.ngAfterViewInit = function () {
        if (this.context.graph) {
            this.context.graph.destroy();
        }
        this.initGraph();
    };
    Graph.prototype.ngOnChanges = function (changes) {
        this.initGraph(true);
    };
    Graph.prototype.combineViewConfig = function (props, config) {
        if (props.data) {
            config.data = props.data;
        }
        if (props.scale) {
            config.scale = props.scale;
        }
        if (props.start) {
            config.start = props.start;
        }
        if (props.end) {
            config.end = props.end;
        }
    };
    Graph.prototype.combineGraphConfig = function (props, config) {
        var GraphRetain = [
            'height', 'width', 'fitView', 'fitViewPadding',
            'animate', 'type', 'data', 'layout',
        ];
        config.graph = retain(props, GraphRetain);
        var eventRetain = [
            'onMouseDown', 'onMouseMove', 'onMouseUp',
            'onClick', 'onDbClick',
            'onTouchStart', 'onTouchMove', 'onTouchEnd',
            'onPlotEnter', 'onPlotMove', 'onPlotLeave',
            'onPlotClick', 'onPlotDbClick',
            'onAfterchange',
            'onDragstart', 'onDrag', 'onDragend',
        ];
        config.events = retain(props, eventRetain);
        config.data = props.data;
    };
    Graph.prototype.convertValueToNum = function (props) {
        var numberProps = {};
        var numberKeys = ['radius', 'innerRadius', 'size', 'offsetX', 'offsetY', 'cols', 'padding',
            'opacity', 'startAngle', 'endAngle'];
        Object.keys(props).forEach(function (propKey) {
            if (numberKeys.indexOf(propKey) > -1) {
                if (typeof props[propKey] === 'string') {
                    var value = parseFloat(props[propKey]);
                    value = isNaN(value) ? props[propKey] : value;
                    numberProps[propKey] = value;
                }
            }
        });
        return numberProps;
    };
    Graph.prototype.combineContentConfig = function (displayName, props, config) {
        var nameLowerCase = displayName.toLowerCase();
        if (nameLowerCase === 'zoom') {
            config.zoom = __assign({}, props, { componentId: this.componentId });
        }
        else {
            config[nameLowerCase] = props;
        }
        return config;
    };
    Graph.prototype.getProps = function (allProps) {
        var strippingProperties = [
            'Graph', 'graphDiv', 'config', 'context',
            'componentId', 'elem', 'vcRef', 'constructor', 'combineViewConfig', 'convertValueToNum',
            'combineGraphConfig', 'combineContentConfig', 'ngOnInit', 'ngAfterViewInit', 'getProps',
            'changeViewConfig', 'getViewType', 'getViewGraphConfig', 'initGraph', 'ngOnChanges', 'renderGraph',
            'getComponentName',
        ];
        if (allProps) {
            var properties = {};
            for (var key in allProps) {
                if (strippingProperties.indexOf(key) === -1) {
                    properties[key] = allProps[key];
                }
            }
            var numberProps = this.convertValueToNum(properties);
            return __assign({}, properties, numberProps);
        }
        return allProps;
    };
    Graph.prototype.getComponentName = function () {
        var viewName = this.elem.nativeElement.tagName.toLowerCase();
        var names = viewName.split('-');
        names.shift();
        var upperCaseNames = names.map(function (name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        });
        return upperCaseNames.join('');
    };
    Graph.prototype.initGraph = function (rerender) {
        var name = this.getComponentName();
        var props = this.getProps(this);
        var config = this.context.config;
        if (name === 'Graph') {
            this.combineGraphConfig(props, this.context.config);
            this.combineViewConfig(props, this.context.config);
            this.renderGraph(rerender);
        }
        else {
            this.combineContentConfig(name, props, config);
        }
        if (rerender) {
            this.renderGraph(true);
        }
    };
    Graph.prototype.renderGraph = function (rerender) {
        var _this = this;
        var name = this.getComponentName();
        if (rerender) {
            if (this.context.timer) {
                window.clearTimeout(this.context.timer);
                this.context.timer = null;
            }
            this.context.timer = setTimeout(function () {
                if (_this.context.graph) {
                    _this.context.graph.reRender(_this.context.config);
                }
                else {
                    _this.context.config.graph.container = _this.context.graphDivElement;
                    _this.context.graph = new ViserGraph(_this.context.config);
                    _this.context.graph.render();
                }
            }, 90);
        }
        else if (!this.context.graph && name === 'Graph') {
            this.context.config.graph.container = this.graphDiv.nativeElement;
            this.context.graphDivElement = this.graphDiv.nativeElement;
            this.context.graph = new ViserGraph(this.context.config);
            this.context.graph.render();
        }
    };
    Graph.decorators = [
        { type: Component, args: [{
                    providers: [GraphContext],
                    selector: 'v-graph',
                    template: "<div #GraphDom></div>",
                },] },
    ];
    Graph.ctorParameters = function () { return [
        { type: GraphContext },
        { type: ElementRef },
        { type: ViewContainerRef }
    ]; };
    Graph.propDecorators = {
        data: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        animate: [{ type: Input }],
        fitView: [{ type: Input }],
        fitViewPadding: [{ type: Input }],
        type: [{ type: Input }],
        layout: [{ type: Input }],
        onMouseDown: [{ type: Input }],
        onMouseMove: [{ type: Input }],
        onMouseUp: [{ type: Input }],
        onClick: [{ type: Input }],
        onDbClick: [{ type: Input }],
        onTouchStart: [{ type: Input }],
        onTouchMove: [{ type: Input }],
        onTouchEnd: [{ type: Input }],
        onPlotEnter: [{ type: Input }],
        onPlotMove: [{ type: Input }],
        onPlotLeave: [{ type: Input }],
        onPlotClick: [{ type: Input }],
        onPlotDbClick: [{ type: Input }],
        onAfterchange: [{ type: Input }],
        onDragstart: [{ type: Input }],
        onDrag: [{ type: Input }],
        onDragend: [{ type: Input }],
        graphDiv: [{ type: ViewChild, args: ['GraphDom',] }]
    };
    return Graph;
}());
export { Graph };
//# sourceMappingURL=Graph.js.map