var F2 = require('@antv/f2');
export var registerShape = function (geoName, shapeName, shapeFun) {
    F2.Shape.registerShape(geoName, shapeName, shapeFun);
};
export var registerAnimation = function (animationName, animationFun) {
    F2.Animate.registerAnimation(animationName, animationFun);
};
export var registerGesture = function (gestureFun) {
    F2.Chart.plugins.register(gestureFun);
};
//# sourceMappingURL=CustomizeUtils.js.map