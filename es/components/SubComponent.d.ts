import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IEdge, INode, IZoom } from 'viser-graph';
declare class Props {
}
declare class SubComponent<T = {}> extends React.Component<Props & T, any> {
    static contextTypes: {
        centralizedUpdates: PropTypes.Requireable<any>;
        hasInViews: PropTypes.Requireable<any>;
        viewId: PropTypes.Requireable<any>;
        viewType: PropTypes.Requireable<any>;
    };
    displayName: string;
    constructor(props: Props & T);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): null;
}
export declare class Zoom extends SubComponent<IZoom> {
    displayName: string;
}
export declare class Node extends SubComponent<INode> {
    displayName: string;
}
export declare class Edge extends SubComponent<IEdge> {
    displayName: string;
}
export {};
