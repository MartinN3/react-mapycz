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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var PathLayer_1 = require("./PathLayer");
var Path = function (_a) {
    var coords = _a.coords, color = _a.color, width = _a.width, criterion = _a.criterion, dynamicRoute = _a.dynamicRoute, options = _a.options, id = _a.id;
    var pathLayer = (0, react_1.useContext)(PathLayer_1.PathLayerContext);
    var points = coords.map(function (p) { return window.SMap.Coords.fromWGS84(p.lng, p.lat); });
    var geometryOptions = __assign({ color: color, width: width }, options);
    var getDynamicPath = function (results) {
        var newPoints = results && results.getResults().geometry;
        var polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYLINE, id, newPoints, geometryOptions);
        pathLayer === null || pathLayer === void 0 ? void 0 : pathLayer.addGeometry(polyline);
    };
    if (dynamicRoute) {
        new window.SMap.Route(points, getDynamicPath, { criterion: criterion });
    }
    else {
        var polyline = new window.SMap.Geometry(window.SMap.GEOMETRY_POLYLINE, id, points, geometryOptions);
        pathLayer === null || pathLayer === void 0 ? void 0 : pathLayer.addGeometry(polyline);
    }
    return null;
};
Path.defaultProps = {
    color: '#f00',
    width: 3,
    criterion: 'fast',
    dynamicRoute: false,
    options: {
        color: '#f00',
        width: 3,
    }
};
exports.default = Path;
//# sourceMappingURL=Path.js.map