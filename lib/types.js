"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineStyle = exports.isMarkerRender = exports.isMarkerCardRender = void 0;
var isMarkerCardRender = function (p) { return typeof p === 'function'; };
exports.isMarkerCardRender = isMarkerCardRender;
var isMarkerRender = function (url) { return typeof url === 'function'; };
exports.isMarkerRender = isMarkerRender;
var LineStyle;
(function (LineStyle) {
    LineStyle[LineStyle["solid"] = 0] = "solid";
    LineStyle[LineStyle["dash"] = 1] = "dash";
    LineStyle[LineStyle["dot"] = 2] = "dot";
    LineStyle[LineStyle["dashDot"] = 3] = "dashDot";
})(LineStyle = exports.LineStyle || (exports.LineStyle = {}));
//# sourceMappingURL=types.js.map