import React from 'react';
import BaseLayers from './BaseLayers';
import { Coordinates, MapEvent, SMap } from './types';
export declare const MapContext: React.Context<null>;
export declare type MapEventListener = (e: MapEvent, coordinates: Coordinates) => void;
export interface MapProps {
    center?: {
        lat: number;
        lng: number;
    };
    width?: string;
    height?: string;
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    baseLayer?: BaseLayers;
    children?: React.ReactNode;
    onEvent?: MapEventListener;
    eventNameListener?: string;
    animateCenterZoom?: boolean;
    mapRef?: React.RefObject<SMap>;
}
declare const _default: (props: import("./SMapProvider").SMapProviderProps<MapProps>) => JSX.Element;
export default _default;
