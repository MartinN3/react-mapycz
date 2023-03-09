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
exports.PathLayerContext = void 0;
var react_1 = __importStar(require("react"));
var Map_1 = require("./Map");
exports.PathLayerContext = (0, react_1.createContext)(null);
var PathLayer = function (_a) {
    var children = _a.children;
    var map = (0, react_1.useContext)(Map_1.MapContext);
    var pathLayer = new window.SMap.Layer.Geometry();
    map.addLayer(pathLayer);
    pathLayer.enable();
    (0, react_1.useEffect)(function () {
        return function () { map.removeLayer(pathLayer); };
    });
    return react_1.default.createElement(exports.PathLayerContext.Provider, { value: pathLayer }, children);
};
exports.default = PathLayer;
//# sourceMappingURL=PathLayer.js.map