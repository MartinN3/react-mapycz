"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Map_1 = require("./Map");
var BaseLayers_1 = __importDefault(require("./BaseLayers"));
var POILayer = function (props) {
    var map = (0, react_1.useContext)(Map_1.MapContext);
    var options = resolveOptions(props.options);
    var poiLayer = new window.SMap.Layer.Marker(props.id, options);
    map.addLayer(poiLayer).enable();
    try {
        var dataProvider = map.createDefaultDataProvider();
        dataProvider.setOwner(map);
        dataProvider.addLayer(poiLayer);
        dataProvider.setMapSet(BaseLayers_1.default.TURIST_NEW);
        dataProvider.enable();
    }
    catch (e) {
        console.error("You are trying to use a POI layer without setting up the POI api."
            + " You need to pass 'loaderApiConfig' with poi set to 'true' to the Map component to enable it.");
    }
    return null;
};
function resolveOptions(options) {
    return __assign({ poiTooltip: true }, options);
}
exports.default = POILayer;
//# sourceMappingURL=POILayer.js.map