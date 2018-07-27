declare type formatterFunc = (val: number) => string | number;
interface ICommonScale {
    dataKey: string;
    type?: string;
    formatter?: string | formatterFunc;
    range?: number[];
    alias?: string;
    tickCount?: number;
    ticks?: number[];
}
interface ILinearCommonScale {
    nice?: boolean;
    min?: number;
    max?: number;
    tickInterval?: number;
}
export declare type ILinearScale = ICommonScale & ILinearCommonScale;
interface ISCatScale {
    values?: string;
}
export declare type ICatScale = ILinearCommonScale & ISCatScale;
interface ISTimeCatScale {
    nice?: boolean;
    mask?: string;
    values?: string;
}
export declare type ITimeCatScale = ILinearCommonScale & ISTimeCatScale;
export declare type IScale = ILinearScale | ICatScale | ITimeCatScale;
declare type IScaleConfig = IScale | IScale[];
export default IScaleConfig;
