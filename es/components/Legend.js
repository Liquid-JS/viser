var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, Input } from '@angular/core';
import { Chart } from '../Chart';
import * as IStyle from './Style';
var Legend = (function (_super) {
    __extends(Legend, _super);
    function Legend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Legend.decorators = [
        { type: Component, args: [{
                    selector: 'v-legend',
                    template: "<div #chartDom></div>",
                },] },
    ];
    Legend.propDecorators = {
        dataKey: [{ type: Input }],
        show: [{ type: Input }],
        position: [{ type: Input }],
        title: [{ type: Input }],
        custom: [{ type: Input }],
        offset: [{ type: Input }],
        offsetX: [{ type: Input }],
        offsetY: [{ type: Input }],
        items: [{ type: Input }],
        itemGap: [{ type: Input }],
        titleGap: [{ type: Input }],
        itemMarginBottom: [{ type: Input }],
        itemsGroup: [{ type: Input }],
        layout: [{ type: Input }],
        allowAllCanceled: [{ type: Input }],
        backPadding: [{ type: Input }],
        itemWidth: [{ type: Input }],
        unCheckColor: [{ type: Input }],
        background: [{ type: Input }],
        itemFormatter: [{ type: Input }],
        marker: [{ type: Input }],
        textStyle: [{ type: Input }],
        checkable: [{ type: Input }],
        clickable: [{ type: Input }],
        hoverable: [{ type: Input }],
        useHtml: [{ type: Input }],
        autoWrap: [{ type: Input }],
        autoPosition: [{ type: Input }],
        container: [{ type: Input }],
        containerTpl: [{ type: Input }],
        itemTpl: [{ type: Input }],
        selectedMode: [{ type: Input }],
        reversed: [{ type: Input }],
        slidable: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        legendMarker: [{ type: Input }],
        legendListItem: [{ type: Input }],
        onHover: [{ type: Input }],
        onClick: [{ type: Input }],
        onTitleMouseDown: [{ type: Input }],
        onTitleMouseMove: [{ type: Input }],
        onTitleMouseLeave: [{ type: Input }],
        onTitleMouseUp: [{ type: Input }],
        onTitleClick: [{ type: Input }],
        onTitleDbClick: [{ type: Input }],
        onTitleTouchStart: [{ type: Input }],
        onTitleTouchMove: [{ type: Input }],
        onTitleTouchEnd: [{ type: Input }],
        onItemMouseDown: [{ type: Input }],
        onItemMouseMove: [{ type: Input }],
        onItemMouseLeave: [{ type: Input }],
        onItemMouseUp: [{ type: Input }],
        onItemClick: [{ type: Input }],
        onItemDbClick: [{ type: Input }],
        onItemTouchStart: [{ type: Input }],
        onItemTouchMove: [{ type: Input }],
        onItemTouchEnd: [{ type: Input }],
        onMarkerMouseDown: [{ type: Input }],
        onMarkerMouseMove: [{ type: Input }],
        onMarkerMouseLeave: [{ type: Input }],
        onMarkerMouseUp: [{ type: Input }],
        onMarkerClick: [{ type: Input }],
        onMarkerDbClick: [{ type: Input }],
        onMarkerTouchStart: [{ type: Input }],
        onMarkerTouchMove: [{ type: Input }],
        onMarkerTouchEnd: [{ type: Input }],
        onTextMouseDown: [{ type: Input }],
        onTextMouseMove: [{ type: Input }],
        onTextMouseLeave: [{ type: Input }],
        onTextMouseUp: [{ type: Input }],
        onTextClick: [{ type: Input }],
        onTextDbClick: [{ type: Input }],
        onTextTouchStart: [{ type: Input }],
        onTextTouchMove: [{ type: Input }],
        onTextTouchEnd: [{ type: Input }]
    };
    return Legend;
}(Chart));
export { Legend };
//# sourceMappingURL=Legend.js.map