import * as PropTypes from 'prop-types';
import * as React from 'react';
export default class PluginComponent extends React.Component<any, any> {
    static childContextTypes: {
        centralizedUpdates: PropTypes.Requireable<any>;
    };
    container: any;
    config: any;
    constructor(props: any);
    getChildContext(): {
        centralizedUpdates: (unit: any) => void;
    };
    combineContentConfig(displayName: string, props: any, config: any): void;
    centralizedUpdates: (unit: any) => void;
    createSliderInstance(config: any): void;
    clearConfigData(): void;
    componentDidMount(): void;
    portalRef: (container: any) => void;
    render(): JSX.Element;
}
