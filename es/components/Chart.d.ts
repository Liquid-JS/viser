import * as PropTypes from 'prop-types';
import * as React from 'react';
import IRChart from '../typed/IRChart';
export default class Chart extends React.Component<IRChart, any> {
    static childContextTypes: {
        centralizedUpdates: PropTypes.Requireable<any>;
        hasInViews: PropTypes.Requireable<any>;
        viewType: PropTypes.Requireable<any>;
    };
    chart: any;
    container: any;
    config: any;
    views: any;
    facetviews: any;
    constructor(props: IRChart);
    getChildContext(): {
        centralizedUpdates: (unit: any) => void;
        hasInViews: boolean;
        viewType: string;
    };
    combineChartConfig(props: IRChart, config: any): void;
    combineViewConfig(props: IRChart, config: any): void;
    combineContentConfig(displayName: string, props: IRChart, config: any): any;
    centralizedUpdates: (unit: any) => void;
    changeViewConfig(): void;
    createChartInstance(config: any): void;
    repaintChartInstance(config: any): void;
    clearConfigData(): void;
    componentDidMount(): void;
    componentDidUpdate(props: IRChart): void;
    componentWillUnmount(): void;
    portalRef: (container: any) => void;
    render(): JSX.Element;
}
