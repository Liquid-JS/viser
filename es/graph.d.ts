import { IConfig } from './typed';
export declare class ViserGraph {
    config: any;
    graph: any;
    constructor(config: IConfig);
    reRender(config: any): void;
    render(): void;
    setGraph(): void;
    setData(): void;
    setNode(): void;
    setEdge(): void;
    setZoom(): void;
    setEvent(): void;
}
export declare const registerNode: any;
export declare const registerEdge: any;
export declare const registerGuide: any;
export declare const Layouts: any;
export declare const Util: any;
