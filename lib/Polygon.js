"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var PathLayer_1 = require("./PathLayer");
var Polygon = function (_a) {
    var coords = _a.coords, options = _a.options, id = _a.id;
    var PolygonLayer = (0, react_1.useContext)(PathLayer_1.PathLayerContext);
    var points = coords.map(function (p) { return window.SMap.Coords.fromWGS84(p.lng, p.lat); });
    var polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYGON, id, points, options);
    PolygonLayer === null || PolygonLayer === void 0 ? void 0 : PolygonLayer.addGeometry(polyline);
    return null;
};
Polygon.defaultProps = {
    options: {
        color: '#0000FF',
        width: 5,
    }
};
exports.default = Polygon;
//# sourceMappingURL=Polygon.js.map