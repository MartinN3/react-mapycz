declare type MapSignal = 'map-redraw' | 'map-lock' | 'map-unlock' | 'map-click' | 'map-contextmenu' | 'map-focus' | 'map-blur' | 'zoom-start' | 'zoom-range-change' | 'zoom-step' | 'zoom-stop' | 'rotation-start' | 'rotation-step' | 'rotation-stop' | 'map-pan' | 'center-start' | 'center-stop' | 'port-sync';
declare type MapLayerSignal = 'layer-enable' | 'layer-disable' | 'tileset-load';
declare type MapKeyboardSignal = 'control-keyboard-move' | 'control-keyboard-zoom';
declare type MapControlLayerSignal = 'control-layer-click';
declare type MapControlMouseSignal = 'control-mouse-move' | 'control-mouse-zoom';
declare type MapControlPointerSignal = 'pointer-click';
declare type MapControlSelectionSignal = 'control-selection-centerzoom';
declare type MapControlSyncSignal = 'map-resize';
declare type MapControlZoomSignal = 'zoom-start' | 'zoom-step' | 'zoom-stop' | 'control-zoom-zoom';
declare type MapMarkerSignal = 'marker-click';
declare type MapMarkerFeatureDraggableSignal = 'marker-drag-start' | 'marker-drag-move' | 'marker-drag-stop';
declare type MapMarkerPOISignal = 'marker-poi-click' | 'marker-poi-enter' | 'marker-poi-leave';
declare type MapGeometrySignal = 'geometry-click';
declare type MapCardSignal = 'card-open' | 'card-close' | 'card-close-click';
export declare type MapEventType = MapSignal | MapLayerSignal | MapKeyboardSignal | MapControlLayerSignal | MapControlMouseSignal | MapControlPointerSignal | MapControlSelectionSignal | MapControlSyncSignal | MapControlZoomSignal | MapMarkerSignal | MapMarkerFeatureDraggableSignal | MapMarkerPOISignal | MapGeometrySignal | MapCardSignal;
export declare type MapEvent = {
    data: {
        event: {
            altKey: false;
            altitudeAngle: number;
            azimuthAngle: number;
            bubbles: boolean;
            button: number;
            buttons: number;
            cancelBubble: boolean;
            cancelable: boolean;
            clientX: number;
            clientY: number;
            composed: boolean;
            ctrlKey: boolean;
            defaultPrevented: boolean;
            detail: number;
            eventPhase: number;
            height: number;
            isPrimary: boolean;
            isTrusted: boolean;
            layerX: number;
            layerY: number;
            metaKey: boolean;
            movementX: number;
            movementY: number;
            offsetX: number;
            offsetY: number;
            pageX: number;
            pageY: number;
            pointerId: number;
            pointerType: string;
            pressure: number;
            returnValue: boolean;
            screenX: number;
            screenY: number;
            shiftKey: boolean;
            tangentialPressure: number;
            tiltX: number;
            tiltY: number;
            timeStamp: number;
            twist: number;
            type: string;
            which: number;
            width: number;
            x: number;
            y: number;
        };
    };
    target: any;
    timeStamp: number;
    type: MapEventType;
};
export declare type Coordinates = {
    x: number;
    y: number;
};
export declare type SMapPixel = {
    x: number;
    y: number;
};
export declare type CardPadding = 'top' | 'right' | 'bottom' | 'left';
/**
 * @desc left bottom and right top in WGS84
 */
export declare type SMapViewport = {
    lbx: number;
    lby: number;
    rtx: number;
    rty: number;
};
export declare type SMap = {
    lock(): void;
    unlock(): void;
    getSignals(): any;
    getZoomRange(): [number, number];
    setZoomRange(minZoom: number, maxZoom: number): void;
    redraw(): void;
    getOrientation(): number;
    setOrientation(o: number, animate?: boolean): void;
    setProjection(projection: any): void;
    getContainer(): HTMLDivElement;
    getContent(): HTMLDivElement;
    getSize(): SMapPixel;
    getProjection(): any;
    getOffset(): SMapPixel;
    getGeometryCanvas(): any;
    setCursor(cursor: string | null, x?: number, y?: number): void;
    setCenter(center: Coordinates | SMapPixel, animate?: boolean): void;
    zoomChange(z: number | string): boolean;
    setZoom(z: number | string, fixedPoint?: Coordinates | SMapPixel, animate?: boolean): void;
    setCenterZoom(center: Coordinates, zoom: number | string, animate?: boolean): void;
    getCenter(): Coordinates;
    getZoom(): number;
    computeCenterZoom(arr: Coordinates[], usePadding?: boolean): [Coordinates, number];
    addLayer(l: any, before?: boolean): any;
    removeLayer(l: any): void;
    getLayer(id: string | number): any;
    getLayerContainer(): any;
    addControl(c: any): void;
    getControls(): any[];
    removeControl(c: any): void;
    addCard(card: any, coords: Coordinates, noPan: boolean): void;
    removeCard(): void;
    getCard(): any;
    syncPort(): void;
    setPadding(which: CardPadding, value: number): void;
    getPadding(which: CardPadding): number;
    getMap(): SMap;
    addDefaultLayer(id: string | number): any;
    addDefaultContextMenu(): void;
    addDefaultControls(): void;
    /**
     * @desc replaces placeholders {placeholder} with current values
     * placeholders: cx, cy, lbx, lby, rtx, rty, lx, rx, by, ty, zoom, zoom[+-][12], orientation
     */
    formatString(template: string, customValues?: Record<string, string | number>): string;
    getCopyrightControl(): any;
    getViewport(): SMapViewport;
};
export declare type MarkerCoords = {
    lng: number;
    lat: number;
};
export declare type MarkerCardRender = ((coords: MarkerCoords) => JSX.Element);
export declare const isMarkerCardRender: (p?: string | MarkerCardRender | undefined) => p is MarkerCardRender;
export declare type MarkerCardConfiguration = {
    header?: string | MarkerCardRender;
    body?: string | MarkerCardRender;
    footer?: string | MarkerCardRender;
    options?: {
        width: number;
        height: number;
    };
};
export interface MarkerProps {
    coords: MarkerCoords;
    id?: string;
    options?: MarkerOptions;
    card?: MarkerCardConfiguration;
}
export declare type MarkerRender = (marker: MarkerProps) => JSX.Element;
export declare const isMarkerRender: (url?: string | Element | MarkerRender | undefined) => url is MarkerRender;
export declare type MarkerAnchor = {
    top: number;
    left: number;
} | {
    top: number;
    right: number;
} | {
    bottom: number;
    right: number;
} | {
    bottom: number;
    left: number;
};
export declare type MarkerOptions = {
    title?: string;
    anchor?: MarkerAnchor;
    url?: string | Element | MarkerRender;
};
export interface MarkerLayerOptions {
    prefetch?: number;
    supportsAnimation?: boolean;
    poiTooltip?: boolean;
}
export declare enum LineStyle {
    solid = 0,
    dash = 1,
    dot = 2,
    dashDot = 3
}
export declare type GeometryOptions = {
    title?: string;
    minDist?: number;
    color?: string;
    opacity?: number;
    width?: number;
    style?: LineStyle;
    outlineColor?: string;
    outlineOpacity?: number;
    outlineWidth?: number;
    outlineStyle?: LineStyle;
};
export declare type ClusterConfig = {
    maxDistance?: number;
    clusterCtor?: Function;
};
export interface LoaderApiConfig {
    jak?: boolean;
    poi?: boolean;
    pano?: boolean;
    suggest?: boolean;
    api?: "full" | "simple";
}
export {};
