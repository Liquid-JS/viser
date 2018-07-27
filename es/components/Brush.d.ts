import { Chart } from '../Chart';
declare type eventFunc = (ev: any, chart: any) => void;
declare class Brush extends Chart {
    canvas: any;
    startPoint?: object;
    brushing?: boolean;
    dragging?: boolean;
    brushShape?: any;
    container?: any;
    polygonPath?: string;
    style?: object;
    type?: string;
    dragable?: boolean;
    dragoffX?: number;
    dragoffY?: number;
    inPlot?: boolean;
    xField?: string;
    yField?: string;
    filter?: boolean;
    onBrushstart?: eventFunc;
    onBrushmove?: eventFunc;
    onBrushend?: eventFunc;
    onDragstart?: eventFunc;
    onDragmove?: eventFunc;
    onDragend?: eventFunc;
}
export { Brush };
