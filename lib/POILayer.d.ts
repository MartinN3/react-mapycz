import { MarkerLayerOptions } from "./types";
export interface POILayerProps {
    id?: string | null;
    options?: MarkerLayerOptions;
}
declare const POILayer: (props: POILayerProps) => null;
export default POILayer;
