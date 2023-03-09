"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Map_1 = require("../Map");
var SyncControl = function (props) {
    var map = (0, react_1.useContext)(Map_1.MapContext);
    (0, react_1.useEffect)(function () {
        var sync = new window.SMap.Control.Sync(props.options);
        map.addControl(sync);
    });
    return null;
};
exports.default = SyncControl;
//# sourceMappingURL=SyncControl.js.map