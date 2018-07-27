import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IAxis, IBrush, ICoord, IGuide, ILegend, ISeries, ITooltip } from 'viser';
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
export declare class Coord extends SubComponent<ICoord> {
    displayName: string;
}
export declare class Tooltip extends SubComponent<ITooltip> {
    displayName: string;
}
export declare class Legend extends SubComponent<ILegend> {
    displayName: string;
}
export declare class Guide extends SubComponent<IGuide> {
    displayName: string;
}
export declare class Axis extends SubComponent<IAxis> {
    displayName: string;
}
export declare class Brush extends SubComponent<IBrush> {
    displayName: string;
}
export declare class Series extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Line extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Pie extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Sector extends SubComponent<ISeries> {
    displayName: string;
}
export declare class SmoothLine extends SubComponent<ISeries> {
    displayName: string;
}
export declare class DashLine extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Area extends SubComponent<ISeries> {
    displayName: string;
}
export declare class StackArea extends SubComponent<ISeries> {
    displayName: string;
}
export declare class SmoothArea extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Bar extends SubComponent<ISeries> {
    displayName: string;
}
export declare class StackBar extends SubComponent<ISeries> {
    displayName: string;
}
export declare class DodgeBar extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Interval extends SubComponent<ISeries> {
    displayName: string;
}
export declare class StackInterval extends SubComponent<ISeries> {
    displayName: string;
}
export declare class DodgeInterval extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Point extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Funnel extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Pyramid extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Schema extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Box extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Candle extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Polygon extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Contour extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Heatmap extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Edge extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Sankey extends SubComponent<ISeries> {
    displayName: string;
}
export declare class ErrorBar extends SubComponent<ISeries> {
    displayName: string;
}
export declare class JitterPoint extends SubComponent<ISeries> {
    displayName: string;
}
export declare class Path extends SubComponent<ISeries> {
    displayName: string;
}
export {};
