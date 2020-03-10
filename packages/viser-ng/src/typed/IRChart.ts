import { IChart, ICoord, IFilter, IScale } from '@lq-viser/viser';

interface ISChartProps {
  data?: any;
  viewId?: string;
  coord?: ICoord;
  filter?: IFilter;
  scale?: IScale;
  start?: any;
  end?: any;
}

type IRChart = IChart & ISChartProps;

export { IRChart };
