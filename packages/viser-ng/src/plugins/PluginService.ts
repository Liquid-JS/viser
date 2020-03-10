import { Injectable } from '@angular/core';

function generateRandomNum() {
  return (Math.floor(new Date().getTime() + Math.random() * 10000)).toString();
}

@Injectable()
export class PluginContext {
  public config: any = {};
  public container: string = '@lq-viser/viser-slider-' + generateRandomNum();
}
