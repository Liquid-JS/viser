import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IFacet } from 'viser';
export default class Facet extends React.Component<IFacet, any> {
    static contextTypes: {
        centralizedUpdates: PropTypes.Requireable<any>;
        hasInViews: PropTypes.Requireable<any>;
        viewId: PropTypes.Requireable<any>;
    };
    displayName: string;
    constructor(props: IFacet);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactElement<any> | null;
}
