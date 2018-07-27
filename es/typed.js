var graphProps = [
    'id', 'container', 'height', 'width', 'animate', 'fitView', 'fitViewPadding',
    'type', 'data', 'layout',
];
var zoomProps = ['min', 'max', 'current'];
var nodePros = ['shape', 'size', 'label'];
var edgeProps = ['shape'];
var eventProps = [
    'onMouseDown', 'onMouseMove', 'onMouseUp',
    'onClick', 'onDbClick',
    'onTouchStart', 'onTouchMove', 'onTouchEnd',
    'onPlotEnter', 'onPlotMove', 'onPlotLeave',
    'onPlotClick', 'onPlotDbClick',
    'onAfterchange',
    'onDragstart', 'onDrag', 'onDragend',
];
var props = graphProps.concat(zoomProps).concat(eventProps).concat(nodePros).concat(edgeProps);
var unique = function (array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current);
        }
    }
    return res;
};
var changeObj = function (array) {
    var uniqueProps = unique(array);
    var propsObject = {};
    for (var _i = 0, uniqueProps_1 = uniqueProps; _i < uniqueProps_1.length; _i++) {
        var res = uniqueProps_1[_i];
        propsObject[res] = null;
    }
    return propsObject;
};
export { changeObj, unique, props, graphProps, zoomProps, nodePros, edgeProps, eventProps, };
//# sourceMappingURL=typed.js.map