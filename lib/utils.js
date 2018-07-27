'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var camelCase = exports.camelCase = function () {
    var DEFAULT_REGEX = /[-_]+(.)?/g;
    function toUpper(match, group1) {
        return group1 ? group1.toUpperCase() : '';
    }
    return function (str, delimiters) {
        return str.replace(delimiters ? new RegExp('[' + delimiters + ']+(.)?', 'g') : DEFAULT_REGEX, toUpper);
    };
}();
var safePush = exports.safePush = function safePush(obj, key, value) {
    if (!obj[key]) {
        obj[key] = [];
    }
    cleanUndefined(value);
    obj[key].push(value);
};
var oneObjectMoreArray = exports.oneObjectMoreArray = function oneObjectMoreArray(obj, key, value) {
    if (!obj[key]) {
        obj[key] = value;
        return;
    }
    if (obj[key] && obj[key].constructor.name === 'Object') {
        obj[key] = [obj[key]];
    }
    var indexOfSameObject = -1;
    if (value && value.viewId) {
        obj[key].forEach(function (o, i) {
            if (o && o.viewId && o.viewId === value.viewId) {
                indexOfSameObject = i;
            }
        });
    } else if (value && value.componentId) {
        obj[key].forEach(function (o, i) {
            if (o && o.componentId && o.componentId === value.componentId) {
                indexOfSameObject = i;
            }
        });
    }
    if (indexOfSameObject === -1) {
        obj[key].push(value);
    } else {
        obj[key][indexOfSameObject] = __assign({}, obj[key][indexOfSameObject], value);
    }
};
var cleanUndefined = exports.cleanUndefined = function cleanUndefined(value) {
    var newValue = __assign({}, value);
    for (var key in newValue) {
        if (newValue[key] === undefined) {
            delete newValue[key];
        }
    }
    return newValue;
};
var isAllUndefined = exports.isAllUndefined = function isAllUndefined(value) {
    return Object.keys(value).every(function (key) {
        return value[key] === undefined;
    });
};
var camelize = exports.camelize = function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};
var normalizeProps = exports.normalizeProps = function normalizeProps(props, include, exclude) {
    if (include === void 0) {
        include = [];
    }
    if (exclude === void 0) {
        exclude = [];
    }
    var newProps = __assign({}, props);
    if (newProps.vStyle) {
        newProps.style = newProps.vStyle;
        delete newProps.vStyle;
    }
    if (exclude.length) {
        exclude.forEach(function (propsKey) {
            delete newProps[propsKey];
        });
    }
    if (include.length) {
        Object.keys(newProps).forEach(function (propsKey) {
            if (include.indexOf(propsKey) === -1) {
                delete newProps[propsKey];
            }
        });
    }
    return newProps;
};
var generateRandomNum = exports.generateRandomNum = function generateRandomNum() {
    return Math.floor(new Date().getTime() + Math.random() * 10000).toString();
};
//# sourceMappingURL=utils.js.map