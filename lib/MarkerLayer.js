"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerLayerContext = void 0;
var react_1 = __importStar(require("react"));
var Map_1 = require("./Map");
exports.MarkerLayerContext = (0, react_1.createContext)(null);
var MarkerLayer = function (_a) {
    var children = _a.children, enableClustering = _a.enableClustering, clusterConfig = _a.clusterConfig, id = _a.id;
    var map = (0, react_1.useContext)(Map_1.MapContext);
    var markerLayer = new window.SMap.Layer.Marker(id);
    if (enableClustering) {
        var clusterer = new window.SMap.Marker.Clusterer(map, clusterConfig === null || clusterConfig === void 0 ? void 0 : clusterConfig.maxDistance, clusterConfig === null || clusterConfig === void 0 ? void 0 : clusterConfig.clusterCtor);
        markerLayer.setClusterer(clusterer);
    }
    map === null || map === void 0 ? void 0 : map.addLayer(markerLayer);
    markerLayer.enable();
    (0, react_1.useEffect)(function () {
        return function () {
            map.removeLayer(markerLayer);
        };
    });
    return (react_1.default.createElement(exports.MarkerLayerContext.Provider, { value: markerLayer }, children));
};
exports.default = MarkerLayer;
//# sourceMappingURL=MarkerLayer.js.map