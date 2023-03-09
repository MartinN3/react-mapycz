"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Map_1 = require("../Map");
var MouseControl = function (props) {
    var pan = props.pan, wheel = props.wheel, zoom = props.zoom, disabled = props.disabled;
    var map = (0, react_1.useContext)(Map_1.MapContext);
    var mouseControlRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var setup = function () {
            if (mouseControlRef.current) {
                map.removeControl(mouseControlRef.current);
            }
            var mode = 0;
            if (!disabled) {
                mode |= pan && window.SMap.MOUSE_PAN;
                mode |= zoom && window.SMap.MOUSE_ZOOM;
                mode |= wheel && window.SMap.MOUSE_WHEEL;
            }
            var newMouseControl = new window.SMap.Control.Mouse(mode);
            map.addControl(newMouseControl);
            mouseControlRef.current = newMouseControl;
        };
        setup();
        return function () {
            map.removeControl(mouseControlRef.current);
        };
    });
    return null;
};
MouseControl.defaultProps = {
    pan: false,
    wheel: false,
    zoom: false,
    disabled: false,
};
exports.default = MouseControl;
//# sourceMappingURL=MouseControl.js.map