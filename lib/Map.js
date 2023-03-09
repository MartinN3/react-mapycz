"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapContext = void 0;
var react_1 = __importStar(require("react"));
var BaseLayers_1 = __importDefault(require("./BaseLayers"));
var SMapProvider_1 = __importDefault(require("./SMapProvider"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.MapContext = (0, react_1.createContext)(null);
// Override PreflightCSS presets
var StyledMap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  img {\n    max-width: initial !important;\n  }\n"], ["\n  img {\n    max-width: initial !important;\n  }\n"])));
var handleEventListener = function (e, sMap, onEvent) {
    var _a;
    var coordinates = ((_a = e === null || e === void 0 ? void 0 : e.data) === null || _a === void 0 ? void 0 : _a.event)
        ? window.SMap.Coords.fromEvent(e.data.event, sMap)
        : null;
    onEvent(e, coordinates);
};
var Map = function (props) {
    var mapNode = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(null), map = _a[0], setMap = _a[1];
    var width = props.width, height = props.height, children = props.children, onEvent = props.onEvent, _b = props.eventNameListener, eventNameListener = _b === void 0 ? "*" : _b, zoom = props.zoom, center = props.center, animateCenterZoom = props.animateCenterZoom;
    (0, react_1.useEffect)(function () {
        var _a;
        if (!map && mapNode) {
            var centerCoords = center ? window.SMap.Coords.fromWGS84(center.lng, center.lat) : undefined;
            var sMap_1 = new window.SMap(mapNode.current, centerCoords, zoom);
            var l = sMap_1.addDefaultLayer((_a = props.baseLayer) !== null && _a !== void 0 ? _a : BaseLayers_1.default.TURIST_NEW);
            l.enable();
            setMap(sMap_1);
            if (onEvent) {
                var signals_1 = sMap_1.getSignals();
                var eventListener_1 = signals_1.addListener(window, eventNameListener, function (e) { return handleEventListener(e, sMap_1, onEvent); });
                return function () {
                    signals_1.removeListener(window, eventNameListener, eventListener_1);
                };
            }
        }
        return;
    }, []);
    (0, react_1.useEffect)(function () {
        if (map && center) {
            var centerCoords = window.SMap.Coords.fromWGS84(center.lng, center.lat);
            map.setCenter(centerCoords, animateCenterZoom);
        }
    }, [center]);
    (0, react_1.useImperativeHandle)(props.mapRef, function () { return map; });
    return (react_1.default.createElement(exports.MapContext.Provider, { value: map },
        react_1.default.createElement(StyledMap, { style: { width: width, height: height }, ref: mapNode }, map && children)));
};
Map.defaultProps = {
    width: '100%',
    height: '300px',
    zoom: 13,
    minZoom: 1,
    maxZoom: 21,
    animateCenterZoom: false,
};
exports.default = (0, SMapProvider_1.default)(Map);
var templateObject_1;
//# sourceMappingURL=Map.js.map