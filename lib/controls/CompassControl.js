"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Map_1 = require("../Map");
var CompassControl = function (_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    var map = (0, react_1.useContext)(Map_1.MapContext);
    var compassControl = new window.SMap.Control.Compass();
    map === null || map === void 0 ? void 0 : map.addControl(compassControl);
    var controlStyles = compassControl._dom['container'].style;
    // Set position
    controlStyles['top'] = top + "px";
    controlStyles['right'] = right + "px";
    controlStyles['bottom'] = bottom + "px";
    controlStyles['left'] = left + "px";
    (0, react_1.useEffect)(function () {
        return function () { map.removeControl(compassControl); };
    });
    return null;
};
exports.default = CompassControl;
//# sourceMappingURL=CompassControl.js.map