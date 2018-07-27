import { IScale } from 'viser';
import { Chart } from '../Chart';
declare class View extends Chart {
    data?: any;
    dataPre?: {
        connector?: string;
        source?: any;
        transform?: object[] | object;
    };
    scale?: object[];
    dataView?: any;
    start?: any;
    end?: any;
}
declare class FacetView extends Chart {
    dataPre?: {
        connector?: string;
        source?: any;
        transform?: object[] | object;
    };
    dataView?: any;
    scale?: IScale;
}
export { View, FacetView };
