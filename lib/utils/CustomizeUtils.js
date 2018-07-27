'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var F2 = require('@antv/f2');
var registerShape = exports.registerShape = function registerShape(geoName, shapeName, shapeFun) {
    F2.Shape.registerShape(geoName, shapeName, shapeFun);
};
var registerAnimation = exports.registerAnimation = function registerAnimation(animationName, animationFun) {
    F2.Animate.registerAnimation(animationName, animationFun);
};
var registerGesture = exports.registerGesture = function registerGesture(gestureFun) {
    F2.Chart.plugins.register(gestureFun);
};
//# sourceMappingURL=CustomizeUtils.js.map