"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Marker_1 = __importDefault(require("./Marker"));
var PathMarker = function (_a) {
    var coords = _a.coords;
    return (react_1.default.createElement(react_1.default.Fragment, null, coords.map(function (coords) { return (react_1.default.createElement(Marker_1.default, { coords: coords })); })));
};
exports.default = PathMarker;
//# sourceMappingURL=PathMarker.js.map