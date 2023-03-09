interface RouteProps {
    geometry?: boolean;
    itinerary?: boolean;
    altitude?: boolean;
    criterion: 'fast' | 'short' | 'bike1' | 'bike2' | 'bike3' | 'turist1' | 'turist2';
}
export declare type RouteInfoResultProps = {
    altitude: number[];
    ascent: number;
    descent: number;
    geometry: any[];
    id: string;
    inEurope: boolean;
    points: object[];
    length: number;
    time: number;
    url: string;
};
export declare const getRouteInfo: (coords: Array<{
    lng: number;
    lat: number;
}>, params: RouteProps) => Promise<any>;
export {};
