import { Component, Input } from '@angular/core';
import { BasePluginComponent } from './BasePlugin';

@Component({
  selector: 'v-slider',
  template: `<div id="{{context.container}}"></div>`,
})
class Slider extends BasePluginComponent {
  @Input() public xAxis: any;
  @Input() public yAxis: any;
  @Input() public data: any;
  @Input() public container: any;
  @Input() public width?: number | string;
  @Input() public height?: number | string;
  @Input() public padding?: number | number[];
  @Input() public start?: string;
  @Input() public end?: string;
  @Input() public minSpan?: number;
  @Input() public maxSpan?: number;
  @Input() public scales?: any;
  @Input() public fillerStyle?: any;
  @Input() public backgroundStyle?: any;
  @Input() public textStyle?: any;
  @Input() public handleStyle?: any;
  @Input() public backgroundChart?: any;
  @Input() public onChange?: any;
}

export { Slider };
