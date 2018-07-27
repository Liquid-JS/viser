'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Legend = undefined;

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

var Legend = function (_super) {
    __extends(Legend, _super);
    function Legend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Legend.decorators = [{ type: _core.Component, args: [{
            selector: 'v-legend',
            template: "<div #chartDom></div>"
        }] }];
    Legend.propDecorators = {
        dataKey: [{ type: _core.Input }],
        show: [{ type: _core.Input }],
        position: [{ type: _core.Input }],
        title: [{ type: _core.Input }],
        custom: [{ type: _core.Input }],
        offset: [{ type: _core.Input }],
        offsetX: [{ type: _core.Input }],
        offsetY: [{ type: _core.Input }],
        items: [{ type: _core.Input }],
        itemGap: [{ type: _core.Input }],
        titleGap: [{ type: _core.Input }],
        itemMarginBottom: [{ type: _core.Input }],
        itemsGroup: [{ type: _core.Input }],
        layout: [{ type: _core.Input }],
        allowAllCanceled: [{ type: _core.Input }],
        backPadding: [{ type: _core.Input }],
        itemWidth: [{ type: _core.Input }],
        unCheckColor: [{ type: _core.Input }],
        background: [{ type: _core.Input }],
        itemFormatter: [{ type: _core.Input }],
        marker: [{ type: _core.Input }],
        textStyle: [{ type: _core.Input }],
        checkable: [{ type: _core.Input }],
        clickable: [{ type: _core.Input }],
        hoverable: [{ type: _core.Input }],
        useHtml: [{ type: _core.Input }],
        autoWrap: [{ type: _core.Input }],
        autoPosition: [{ type: _core.Input }],
        container: [{ type: _core.Input }],
        containerTpl: [{ type: _core.Input }],
        itemTpl: [{ type: _core.Input }],
        selectedMode: [{ type: _core.Input }],
        reversed: [{ type: _core.Input }],
        slidable: [{ type: _core.Input }],
        width: [{ type: _core.Input }],
        height: [{ type: _core.Input }],
        legendMarker: [{ type: _core.Input }],
        legendListItem: [{ type: _core.Input }],
        onHover: [{ type: _core.Input }],
        onClick: [{ type: _core.Input }],
        onTitleMouseDown: [{ type: _core.Input }],
        onTitleMouseMove: [{ type: _core.Input }],
        onTitleMouseLeave: [{ type: _core.Input }],
        onTitleMouseUp: [{ type: _core.Input }],
        onTitleClick: [{ type: _core.Input }],
        onTitleDbClick: [{ type: _core.Input }],
        onTitleTouchStart: [{ type: _core.Input }],
        onTitleTouchMove: [{ type: _core.Input }],
        onTitleTouchEnd: [{ type: _core.Input }],
        onItemMouseDown: [{ type: _core.Input }],
        onItemMouseMove: [{ type: _core.Input }],
        onItemMouseLeave: [{ type: _core.Input }],
        onItemMouseUp: [{ type: _core.Input }],
        onItemClick: [{ type: _core.Input }],
        onItemDbClick: [{ type: _core.Input }],
        onItemTouchStart: [{ type: _core.Input }],
        onItemTouchMove: [{ type: _core.Input }],
        onItemTouchEnd: [{ type: _core.Input }],
        onMarkerMouseDown: [{ type: _core.Input }],
        onMarkerMouseMove: [{ type: _core.Input }],
        onMarkerMouseLeave: [{ type: _core.Input }],
        onMarkerMouseUp: [{ type: _core.Input }],
        onMarkerClick: [{ type: _core.Input }],
        onMarkerDbClick: [{ type: _core.Input }],
        onMarkerTouchStart: [{ type: _core.Input }],
        onMarkerTouchMove: [{ type: _core.Input }],
        onMarkerTouchEnd: [{ type: _core.Input }],
        onTextMouseDown: [{ type: _core.Input }],
        onTextMouseMove: [{ type: _core.Input }],
        onTextMouseLeave: [{ type: _core.Input }],
        onTextMouseUp: [{ type: _core.Input }],
        onTextClick: [{ type: _core.Input }],
        onTextDbClick: [{ type: _core.Input }],
        onTextTouchStart: [{ type: _core.Input }],
        onTextTouchMove: [{ type: _core.Input }],
        onTextTouchEnd: [{ type: _core.Input }]
    };
    return Legend;
}(_Chart.Chart);
exports.Legend = Legend;
//# sourceMappingURL=Legend.js.map