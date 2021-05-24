import { Component } from '@angular/core';
import { BasePluginComponent } from './BasePlugin';

@Component({
  template: `<div>
    <v-slider></v-slider>
  </div>`
})
export class PluginComponent extends BasePluginComponent { }