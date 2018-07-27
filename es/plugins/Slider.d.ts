import { PluginComponent } from './Plugin';
declare class Slider extends PluginComponent {
    xAxis: any;
    yAxis: any;
    data: any;
    width?: number | string;
    height?: number | string;
    padding?: number | number[];
    start?: string;
    end?: string;
    minSpan?: number;
    maxSpan?: number;
    scales?: any;
    backgroundChart?: any;
    onChange?: any;
}
export { Slider };
