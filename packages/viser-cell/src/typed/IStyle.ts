export interface ITextStyle {
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: number | string;
  textAlign?: string;
  fill?: string;
  lineHeight?: number;
  textBaseline?: string;
  rotate?: number;
  shadowBlur?: number;
  shadowColor?: string;
}

export interface ILineStyle {
  stroke?: string;
  strokeOpacity?: number;
  lineWidth?: number;
  lineHeight?: number;
  lineDash?: number[];
  length?: number;
  textAlign?: string;
}

export interface IPointStyle {
  fill: string;
  r: number;
  lineWidth: number;
  stroke: string;
}
