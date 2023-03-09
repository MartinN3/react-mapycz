"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Map_1 = require("../Map");
var ZoomControl = function (_a) {
    var labels = _a.labels, showZoomMenu = _a.showZoomMenu, top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right;
    var map = (0, react_1.useContext)(Map_1.MapContext);
    var zoomControl = new window.SMap.Control.Zoom(labels, { showZoomMenu: showZoomMenu });
    map.addControl(zoomControl);
    // TODO: set position
    var controlStyles = zoomControl._dom['container'].style;
    // Set position
    controlStyles['top'] = top + "px";
    controlStyles['right'] = right + "px";
    controlStyles['bottom'] = bottom + "px";
    controlStyles['left'] = left + "px";
    return null;
};
ZoomControl.defaultProps = {
    showZoomMenu: false,
    labels: {},
};
exports.default = ZoomControl;
//# sourceMappingURL=ZoomControl.js.map