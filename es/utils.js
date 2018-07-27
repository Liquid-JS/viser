var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export var camelCase = (function () {
    var DEFAULT_REGEX = /[-_]+(.)?/g;
    function toUpper(match, group1) {
        return group1 ? group1.toUpperCase() : '';
    }
    return function (str, delimiters) {
        return str.replace(delimiters ? new RegExp('[' + delimiters + ']+(.)?', 'g') : DEFAULT_REGEX, toUpper);
    };
})();
export var safePush = function (obj, key, value) {
    if (!obj[key]) {
        obj[key] = [];
    }
    cleanUndefined(value);
    obj[key].push(value);
};
export var oneObjectMoreArray = function (obj, key, value) {
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
    }
    else if (value && value.componentId) {
        obj[key].forEach(function (o, i) {
            if (o && o.componentId && o.componentId === value.componentId) {
                indexOfSameObject = i;
            }
        });
    }
    if (indexOfSameObject === -1) {
        obj[key].push(value);
    }
    else {
        obj[key][indexOfSameObject] = __assign({}, obj[key][indexOfSameObject], value);
    }
};
export var cleanUndefined = function (value) {
    var newValue = __assign({}, value);
    for (var key in newValue) {
        if (newValue[key] === undefined) {
            delete newValue[key];
        }
    }
    return newValue;
};
export var isAllUndefined = function (value) {
    return Object.keys(value).every(function (key) { return value[key] === undefined; });
};
export var camelize = function (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};
export var normalizeProps = function (props, include, exclude) {
    if (include === void 0) { include = []; }
    if (exclude === void 0) { exclude = []; }
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
export var generateRandomNum = function () {
    return (Math.floor(new Date().getTime() + Math.random() * 10000)).toString();
};
//# sourceMappingURL=utils.js.map