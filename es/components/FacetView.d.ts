import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IView } from 'viser';
export default class FacetView extends React.Component<IView, any> {
    static childContextTypes: {
        hasInViews: PropTypes.Requireable<any>;
        viewId: PropTypes.Requireable<any>;
        viewType: PropTypes.Requireable<any>;
    };
    static contextTypes: {
        centralizedUpdates: PropTypes.Requireable<any>;
        hasInViews: PropTypes.Requireable<any>;
        viewType: PropTypes.Requireable<any>;
    };
    displayName: string;
    constructor(props: IView);
    getChildContext(): {
        hasInViews: any;
        viewId: any;
        viewType: any;
    };
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactElement<any>;
}
