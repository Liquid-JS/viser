"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var firstLowerCase = exports.firstLowerCase = function firstLowerCase(str) {
    return str.replace(/^\S/, function (s) {
        return s.toLowerCase();
    });
};
var generateRandomNum = exports.generateRandomNum = function generateRandomNum() {
    return Math.floor(new Date().getTime() + Math.random() * 10000).toString();
};
var isOwnEmpty = exports.isOwnEmpty = function isOwnEmpty(obj) {
    for (var name_1 in obj) {
        if (obj.hasOwnProperty(name_1)) {
            return false;
        }
    }
    return true;
};
var retain = exports.retain = function retain(obj, attr) {
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
};
var omit = exports.omit = function omit(obj, attr) {
    var newObj = Object.create(null);
    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            var arrAttr = Array.isArray(attr) ? attr : [attr];
            if (arrAttr.indexOf(item) < 0) {
                newObj[item] = obj[item];
            }
        }
    }
    return newObj;
};
var uniqComponentIdArray = exports.uniqComponentIdArray = function uniqComponentIdArray(configs) {
    var componentIds = {};
    var newConfigs = [];
    for (var i = configs.length - 1; i >= 0; i--) {
        var config = configs[i];
        if (!componentIds[config.componentId]) {
            newConfigs.push(config);
            componentIds[config.componentId] = true;
        }
    }
    newConfigs.sort(function (ca, cb) {
        return parseInt(ca.componentId, 10) - parseInt(cb.componentId, 10);
    });
    return newConfigs;
};
//# sourceMappingURL=utils.js.map