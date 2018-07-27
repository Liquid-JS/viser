'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Facet = undefined;

var _core = require('@angular/core');

var _Chart = require('../Chart');

var _Style = require('./Style');

var IStyle = _interopRequireWildcard(_Style);

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

var Facet = function (_super) {
    __extends(Facet, _super);
    function Facet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Facet.decorators = [{ type: _core.Component, args: [{
            selector: 'v-facet',
            template: "<div #chartDom></div>"
        }] }];
    Facet.propDecorators = {
        type: [{ type: _core.Input }],
        fields: [{ type: _core.Input }],
        cols: [{ type: _core.Input }],
        rows: [{ type: _core.Input }],
        colField: [{ type: _core.Input }],
        rowField: [{ type: _core.Input }],
        colValue: [{ type: _core.Input }],
        rowValue: [{ type: _core.Input }],
        colIndex: [{ type: _core.Input }],
        rowIndex: [{ type: _core.Input }],
        showTitle: [{ type: _core.Input }],
        colTitle: [{ type: _core.Input }],
        rowTitle: [{ type: _core.Input }],
        autoSetAxis: [{ type: _core.Input }],
        padding: [{ type: _core.Input }],
        transpose: [{ type: _core.Input }],
        lineSmooth: [{ type: _core.Input }],
        line: [{ type: _core.Input }],
        views: [{ type: _core.Input }],
        eachView: [{ type: _core.Input }]
    };
    return Facet;
}(_Chart.Chart);
exports.Facet = Facet;
//# sourceMappingURL=Facet.js.map