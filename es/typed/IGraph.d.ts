declare type voidFunc = () => void;
declare type calFunc = (nodes: any[], edges: any[]) => {};
interface ILayoutObject {
    auto: boolean;
    processer: voidFunc | any;
}
declare type func = (ev: any, graph: any) => void;
export default interface IGraph {
    data: any;
    container: any;
    width?: number | string;
    height?: number | string;
    fitView?: 'tl' | 'lc' | 'bl' | 'cc' | 'tc' | 'tr' | 'rc' | 'br' | 'bc' | 'autoZoom';
    fitViewPadding?: boolean | number | number[];
    animate?: boolean;
    minZoom?: number;
    maxZoom?: number;
    type?: 'tree' | 'graph';
    modes?: any;
    mode?: string;
    plugins?: any[];
    layout?: ILayoutObject | calFunc;
    onClick?: func;
    onAfterchange?: func;
    onMousedown?: func;
    onMousemove?: func;
    onMouseleave?: func;
    onMouseup?: func;
    onDblclick?: func;
    onTouchstart?: func;
    onTouchmove?: func;
    onTouchend?: func;
    onPlotenter?: func;
    onPlotmove?: func;
    onPlotleave?: func;
    onPlotclick?: func;
    onPlotdblclick?: func;
    onDragstart?: func;
    onDrag?: func;
    onDragend?: func;
}
export {};
