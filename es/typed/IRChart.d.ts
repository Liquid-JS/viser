import { IChart, ICoord, IScale } from 'viser';
interface ISChartProps {
    data?: any;
    viewId?: string;
    coord?: ICoord;
    scale?: IScale;
    start?: any;
    end?: any;
}
declare type IRChart = IChart & ISChartProps;
export { IRChart };
