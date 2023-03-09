"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Map_1 = require("../Map");
var KeyboardControl = function (props) {
    var pan = props.pan, zoom = props.zoom;
    var mode = 0;
    mode |= pan && window.SMap.KB_PAN;
    mode |= zoom && window.SMap.KB_ZOOM;
    var map = (0, react_1.useContext)(Map_1.MapContext);
    var mouseControl = new window.SMap.Control.Keyboard(mode);
    map.addControl(mouseControl);
    return null;
};
KeyboardControl.defaultProps = {
    pan: true,
    zoom: true,
};
exports.default = KeyboardControl;
//# sourceMappingURL=KeyboardControl.js.map