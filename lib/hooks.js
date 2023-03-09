"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSMap = void 0;
var react_1 = require("react");
var useSMap = function (cb, loaderApiConfig) {
    (0, react_1.useEffect)(function () {
        var onload = function () {
            // @ts-ignore
            window.Loader.async = true;
            // @ts-ignore
            window.Loader.load(null, loaderApiConfig, cb);
        };
        var script = document.createElement('script');
        script.src = 'https://api.mapy.cz/loader.js';
        script.async = true;
        script.onload = onload;
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, []);
};
exports.useSMap = useSMap;
//# sourceMappingURL=hooks.js.map