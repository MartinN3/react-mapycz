export interface ZoomControlProps {
    showZoomMenu?: boolean;
    labels?: object;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}
declare const ZoomControl: {
    ({ labels, showZoomMenu, top, bottom, left, right }: ZoomControlProps): null;
    defaultProps: {
        showZoomMenu: boolean;
        labels: {};
    };
};
export default ZoomControl;
