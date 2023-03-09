import { GeometryOptions } from './types';
export interface PathProps {
    /**
     * @deprecated use options.color
     */
    color?: string;
    /**
     * @deprecated use options.width
     */
    width?: number;
    coords: Array<{
        lng: number;
        lat: number;
    }>;
    criterion?: 'fast' | 'short' | 'bike1' | 'bike2' | 'bike3' | 'turist1' | 'turist2';
    dynamicRoute?: boolean;
    options?: GeometryOptions;
    id?: string;
}
declare const Path: {
    ({ coords, color, width, criterion, dynamicRoute, options, id }: PathProps): null;
    defaultProps: {
        color: string;
        width: number;
        criterion: string;
        dynamicRoute: boolean;
        options: {
            color: string;
            width: number;
        };
    };
};
export default Path;
