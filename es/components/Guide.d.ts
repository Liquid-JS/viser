import { Chart } from '../Chart';
import * as Style from './Style';
declare type func = () => void;
declare type eventFunc = (ev: any, chart: any) => void;
interface ILineText {
    position?: string | number;
    autoRotate?: number;
    style?: Style.ILineStyle;
    content?: string;
    offsetX?: number;
    offsetY?: number;
}
interface IRegionStyle {
    lineWidth?: number;
    fill?: string;
    fillOpacity?: number;
    stroke?: string;
}
declare class Guide extends Chart {
    type?: 'line' | 'text' | 'image' | 'region' | 'arc';
    top?: boolean;
    zIndex?: number;
    start?: object | Array<number | string> | func;
    end?: object | Array<number | string> | func;
    position?: object | Array<number | string> | func;
    lineStyle?: Style.ILineStyle;
    content?: string;
    style?: object | Style.ITextStyle | IRegionStyle;
    text?: ILineText;
    src?: string;
    width?: number;
    height?: number;
    offsetX?: number;
    offsetY?: number;
    alignX?: string;
    alignY?: string;
    html?: string;
    onMouseDown?: eventFunc;
    onMouseMove?: eventFunc;
    onMouseLeave?: eventFunc;
    onMouseUp?: eventFunc;
    onClick?: eventFunc;
    onDbClick?: eventFunc;
    onTouchStart?: eventFunc;
    onTouchMove?: eventFunc;
    onTouchEnd?: eventFunc;
}
export { Guide };
