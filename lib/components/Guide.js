'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Guide = undefined;

var _core = require('@angular/core');

var _Chart = require('../Chart');

var _Style = require('./Style');

var Style = _interopRequireWildcard(_Style);

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

var Guide = function (_super) {
    __extends(Guide, _super);
    function Guide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guide.decorators = [{ type: _core.Component, args: [{
            selector: 'v-guide',
            template: "<div #chartDom></div>"
        }] }];
    Guide.propDecorators = {
        type: [{ type: _core.Input }],
        top: [{ type: _core.Input }],
        zIndex: [{ type: _core.Input }],
        start: [{ type: _core.Input }],
        end: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        lineStyle: [{ type: _core.Input }],
        content: [{ type: _core.Input }],
        style: [{ type: _core.Input }],
        text: [{ type: _core.Input }],
        src: [{ type: _core.Input }],
        width: [{ type: _core.Input }],
        height: [{ type: _core.Input }],
        offsetX: [{ type: _core.Input }],
        offsetY: [{ type: _core.Input }],
        alignX: [{ type: _core.Input }],
        alignY: [{ type: _core.Input }],
        html: [{ type: _core.Input }],
        onMouseDown: [{ type: _core.Input }],
        onMouseMove: [{ type: _core.Input }],
        onMouseLeave: [{ type: _core.Input }],
        onMouseUp: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onDbClick: [{ type: _core.Input }],
        onTouchStart: [{ type: _core.Input }],
        onTouchMove: [{ type: _core.Input }],
        onTouchEnd: [{ type: _core.Input }]
    };
    return Guide;
}(_Chart.Chart);
exports.Guide = Guide;
//# sourceMappingURL=Guide.js.map