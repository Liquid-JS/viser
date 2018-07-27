import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ISlider } from 'viser';
declare class Props {
}
declare class SubPlugin<T = {}> extends React.Component<Props & T, any> {
    static childContextTypes: {
        containerId: PropTypes.Requireable<any>;
    };
    static contextTypes: {
        centralizedUpdates: PropTypes.Requireable<any>;
    };
    displayName: string;
    constructor(props: Props & T);
    getChildContext(): {
        containerId: any;
    };
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactElement<any>;
}
export declare class Slider extends SubPlugin<ISlider> {
    displayName: string;
}
export {};
