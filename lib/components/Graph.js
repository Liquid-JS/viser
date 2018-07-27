'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _viserGraph = require('viser-graph');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

function firstLowerCase(str) {
    return str.replace(/^\S/, function (s) {
        return s.toLowerCase();
    });
}
function retain(obj, attr) {
    var newObj = Object.create(null);
    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            var arrAttr = Array.isArray(attr) ? attr : [attr];
            if (arrAttr.indexOf(item) >= 0) {
                newObj[item] = obj[item];
            }
        }
    }
    return newObj;
}
function isOwnEmpty(obj) {
    for (var name_1 in obj) {
        if (obj.hasOwnProperty(name_1)) {
            return false;
        }
    }
    return true;
}
var Graph = function (_super) {
    __extends(Graph, _super);
    function Graph(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {};
        _this.centralizedUpdates = function (unit) {
            var config = _this.config;
            var props = unit.props;
            var displayName = unit.displayName;
            _this.combineContentConfig(displayName, props, config);
        };
        _this.portalRef = function (container) {
            if (!_this.container) {
                _this.container = container;
            }
        };
        _this.config.data = props.data;
        return _this;
    }
    Graph.prototype.getChildContext = function () {
        return {
            centralizedUpdates: this.centralizedUpdates
        };
    };
    Graph.prototype.combineChartConfig = function (props) {
        var chartRetain = ['height', 'width', 'animate', 'fitView', 'fitViewPadding', 'type', 'layout'];
        this.config.graph = retain(props, chartRetain);
        var eventRetain = ['onMouseDown', 'onMouseMove', 'onMouseUp', 'onClick', 'onDbClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onPlotEnter', 'onPlotMove', 'onPlotLeave', 'onPlotClick', 'onPlotDbClick', 'onAfterchange', 'onDragstart', 'onDrag', 'onDragend'];
        this.config.events = retain(props, eventRetain);
        this.config.data = props.data;
    };
    Graph.prototype.combineContentConfig = function (displayName, props, config) {
        var realName = firstLowerCase(displayName);
        var nameLowerCase = displayName.toLowerCase();
        var regSeries = ['zoom', 'node', 'edge'];
        if (regSeries.indexOf(realName) < 0 && isOwnEmpty(props)) {
            config[nameLowerCase] = true;
        } else {
            config[nameLowerCase] = props;
        }
        return config;
    };
    Graph.prototype.createChartInstance = function () {
        if (this.chart) {
            this.chart.destroy();
        }
        this.combineChartConfig(this.props);
        this.config.graph.container = this.container;
        this.chart = new _viserGraph.ViserGraph(this.config);
        this.chart.render();
    };
    Graph.prototype.repaintChartInstance = function () {
        this.combineChartConfig(this.props);
        if (this.chart) {
            this.chart.reRender(this.config);
        } else {
            this.config.graph.container = this.container;
            this.chart = new _viserGraph.ViserGraph(this.config);
            this.chart.render();
        }
    };
    Graph.prototype.clearConfigData = function () {
        this.config = {};
    };
    Graph.prototype.componentDidMount = function () {
        this.createChartInstance();
        this.clearConfigData();
    };
    Graph.prototype.componentDidUpdate = function (props) {
        this.repaintChartInstance();
        this.clearConfigData();
    };
    Graph.prototype.componentWillUnmount = function () {
        if (this.chart) {
            this.chart.graph.destroy();
            this.chart = null;
        }
        this.container = null;
    };
    Graph.prototype.render = function () {
        return React.createElement("div", { ref: this.portalRef }, this.props.children);
    };
    Graph.childContextTypes = {
        centralizedUpdates: PropTypes.func
    };
    return Graph;
}(React.Component);
exports.default = Graph;
//# sourceMappingURL=Graph.js.map