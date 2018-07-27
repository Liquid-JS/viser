'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PluginComponent = undefined;

var _core = require('@angular/core');

var _viser = require('viser');

var viser = _interopRequireWildcard(_viser);

var _PluginService = require('./PluginService');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PluginComponent = function () {
    function PluginComponent(context, vcRef) {
        this.config = {};
        this.context = context;
        this.vcRef = vcRef;
    }
    PluginComponent.prototype.ngAfterViewInit = function () {
        this.initPlugin();
    };
    PluginComponent.prototype.ngOnChanges = function (changes) {
        this.initPlugin();
    };
    PluginComponent.prototype.combineContentConfig = function (displayName, props, config) {
        var nameLowerCase = displayName.toLowerCase();
        config[nameLowerCase] = props;
    };
    PluginComponent.prototype.getProps = function (allProps) {
        var strippingProperties = ['chartDiv', 'combineContentConfig', 'config', 'constructor', 'context', 'vcRef', 'getProps', 'initPlugin', 'renderPlugin', 'ngOnInit', 'ngAfterViewInit', 'ngOnChanges'];
        if (allProps) {
            var properties = {};
            for (var key in allProps) {
                if (strippingProperties.indexOf(key) === -1) {
                    properties[key] = allProps[key];
                }
            }
            return properties;
        }
        return allProps;
    };
    PluginComponent.prototype.initPlugin = function () {
        var name = this.constructor.name;
        var props = this.getProps(this);
        this.config = this.context.config;
        if (name === 'PluginComponent') {
            this.renderPlugin(true);
        } else if (name === 'Slider') {
            props.container = this.context.container;
            this.combineContentConfig(name, props, this.config);
        }
    };
    PluginComponent.prototype.renderPlugin = function (rerender) {
        viser.Plugin(this.config);
    };
    PluginComponent.decorators = [{ type: _core.Component, args: [{
            providers: [_PluginService.PluginContext],
            selector: 'v-plugin',
            template: "<div>\n    <v-slider></v-slider>\n  </div>"
        }] }];
    PluginComponent.ctorParameters = function () {
        return [{ type: _PluginService.PluginContext }, { type: _core.ViewContainerRef }];
    };
    return PluginComponent;
}();
exports.PluginComponent = PluginComponent;
//# sourceMappingURL=Plugin.js.map