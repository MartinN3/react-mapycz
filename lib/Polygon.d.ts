import { GeometryOptions, MarkerCoords } from './types';
export interface PolygonProps {
    coords: MarkerCoords[];
    id?: string;
    options?: GeometryOptions;
}
declare const Polygon: {
    ({ coords, options, id }: PolygonProps): null;
    defaultProps: {
        options: {
            color: string;
            width: number;
        };
    };
};
export default Polygon;
