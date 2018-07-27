import { Chart } from '../Chart';
declare class Coord extends Chart {
    type?: 'polar' | 'theta' | 'helix' | 'rect';
    direction?: string;
    radius?: number;
    innerRadius?: number;
    startAngle?: number;
    endAngle?: number;
}
export { Coord };
