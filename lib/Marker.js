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
var MarkerLayer_1 = require("./MarkerLayer");
var types_1 = require("./types");
var server_1 = require("react-dom/server");
var Marker = function (props) {
    var markerLayer = (0, react_1.useContext)(MarkerLayer_1.MarkerLayerContext);
    var renderMarkerUrl = function (url) {
        if ((0, types_1.isMarkerRender)(url)) {
            var marker = document.createElement('div');
            marker.innerHTML = (0, server_1.renderToStaticMarkup)(url(props));
            return marker;
        }
        return url;
    };
    var resolveOptions = function () {
        var options = props.options;
        if (!options) {
            return undefined;
        }
        if (!options.url) {
            return options;
        }
        return __assign(__assign({}, options), { url: renderMarkerUrl(options.url) });
    };
    var renderCardPart = function (container, content) {
        if (content) {
            container.innerHTML = (0, types_1.isMarkerCardRender)(content)
                ? (0, server_1.renderToStaticMarkup)(content(props.coords))
                : content;
        }
    };
    var renderCard = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var card = new window.SMap.Card();
        var cardWidth = (_b = (_a = props.card) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.width;
        var cardHeight = (_d = (_c = props.card) === null || _c === void 0 ? void 0 : _c.options) === null || _d === void 0 ? void 0 : _d.height;
        if (cardWidth && cardHeight) {
            card.setSize(cardWidth, cardHeight);
        }
        renderCardPart(card.getHeader(), (_e = props.card) === null || _e === void 0 ? void 0 : _e.header);
        renderCardPart(card.getBody(), (_f = props.card) === null || _f === void 0 ? void 0 : _f.body);
        renderCardPart(card.getFooter(), (_g = props.card) === null || _g === void 0 ? void 0 : _g.footer);
        sMarker.decorate(window.SMap.Marker.Feature.Card, card);
    };
    var _a = props.coords, lng = _a.lng, lat = _a.lat;
    var coords = window.SMap.Coords.fromWGS84(lng, lat);
    var options = resolveOptions();
    var sMarker = new window.SMap.Marker(coords, props.id, options);
    //   console.log(sMarker)
    (0, react_1.useEffect)(function () {
        markerLayer === null || markerLayer === void 0 ? void 0 : markerLayer.addMarker(sMarker);
        if (props.card) {
            renderCard();
        }
        return function () {
            markerLayer.removeMarker(sMarker, true);
        };
    }, [markerLayer, props.card, sMarker]);
    // }, [])
    return null;
};
Marker.defaultProps = {
    id: false,
};
exports.default = Marker;
//# sourceMappingURL=Marker.js.map