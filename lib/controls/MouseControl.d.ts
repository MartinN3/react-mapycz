export interface MouseControlProps {
    pan?: boolean;
    wheel?: boolean;
    zoom?: boolean;
    disabled?: boolean;
}
declare const MouseControl: {
    (props: MouseControlProps): null;
    defaultProps: {
        pan: boolean;
        wheel: boolean;
        zoom: boolean;
        disabled: boolean;
    };
};
export default MouseControl;
