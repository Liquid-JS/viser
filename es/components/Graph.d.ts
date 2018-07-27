import * as PropTypes from 'prop-types';
import * as React from 'react';
import IGraph from '../typed/IGraph';
export default class Graph extends React.Component<any, any> {
    static childContextTypes: {
        centralizedUpdates: PropTypes.Requireable<any>;
    };
    chart: any;
    container: any;
    config: any;
    constructor(props: IGraph);
    getChildContext(): {
        centralizedUpdates: (unit: any) => void;
    };
    combineChartConfig(props: any): void;
    combineContentConfig(displayName: string, props: any, config: any): any;
    centralizedUpdates: (unit: any) => void;
    createChartInstance(): void;
    repaintChartInstance(): void;
    clearConfigData(): void;
    componentDidMount(): void;
    componentDidUpdate(props: any): void;
    componentWillUnmount(): void;
    portalRef: (container: any) => void;
    render(): JSX.Element;
}
