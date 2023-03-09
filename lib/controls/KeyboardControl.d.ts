export interface KeyboardControlProps {
    pan?: boolean;
    zoom?: boolean;
}
declare const KeyboardControl: {
    (props: KeyboardControlProps): null;
    defaultProps: {
        pan: boolean;
        zoom: boolean;
    };
};
export default KeyboardControl;
