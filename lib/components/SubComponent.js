'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Edge = exports.Node = exports.Zoom = undefined;

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = require('react');

var React = _interopRequireWildcard(_react);

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

var Props = function () {
    function Props() {}
    return Props;
}();
var SubComponent = function (_super) {
    __extends(SubComponent, _super);
    function SubComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.displayName = 'SubComponent';
        return _this;
    }
    SubComponent.prototype.componentDidUpdate = function () {
        this.context.centralizedUpdates(this);
    };
    SubComponent.prototype.componentDidMount = function () {
        this.context.centralizedUpdates(this);
    };
    SubComponent.prototype.render = function () {
        return null;
    };
    SubComponent.contextTypes = {
        centralizedUpdates: PropTypes.func,
        hasInViews: PropTypes.bool,
        viewId: PropTypes.string,
        viewType: PropTypes.string
    };
    return SubComponent;
}(React.Component);
var Zoom = function (_super) {
    __extends(Zoom, _super);
    function Zoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Zoom';
        return _this;
    }
    return Zoom;
}(SubComponent);
exports.Zoom = Zoom;

var Node = function (_super) {
    __extends(Node, _super);
    function Node() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Node';
        return _this;
    }
    return Node;
}(SubComponent);
exports.Node = Node;

var Edge = function (_super) {
    __extends(Edge, _super);
    function Edge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Edge';
        return _this;
    }
    return Edge;
}(SubComponent);
exports.Edge = Edge;
//# sourceMappingURL=SubComponent.js.map