import IMainConfig from '../typed/IMain';
declare class CommonChart {
    chartInstance: any;
    config: any;
    constructor(config: IMainConfig);
    getWidth(): any;
    getHeight(): any;
    render(): void;
    repaint(config: IMainConfig): void;
    destroy(chart: any): void;
    clear(chart: any): void;
    private checkChartConfig;
    private setDataSource;
    private setScale;
    private setCoord;
    private setSeries;
    private setAxis;
    private setTooltip;
    private setGuide;
    private setLegend;
    private setContent;
    private repaintWidthHeight;
    private renderDiffConfig;
}
export default CommonChart;
