import Vue from 'vue';
declare module 'vue/types/vue' {
    interface Vue {
        chart: any;
        _props?: object;
        _uid?: string;
    }
}
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        _componentTag?: any;
    }
}
declare const _default: {
    install: (Vue: any, options: any) => void;
};
export default _default;
export declare const registerAnimation: (animationName: string, animationFun: any) => void;
export declare const registerShape: (geoName: string, shapeName: string, shapeFun: any) => void;
export declare const Global: any;
