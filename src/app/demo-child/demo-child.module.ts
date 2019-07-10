import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoChildComponent } from './demo-child.component';

import { BootstrapWidgetTimepickerComponent } from './components/boostrap-widget-timepicker.component';
import { BootstrapWidgetRatingComponent } from './components/boostrap-widget-rating.component';
import { BootstrapWidgetProgressbarComponent } from './components/boostrap-widget-preogressbar.component';
import { DemoChildRoutes } from './demo-child.routes';
import { RouterModule } from '@angular/router';
import {NgbProgressbarModule, NgbTimepickerModule,NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
console.log('demo-child` bundle loaded asynchronously');
@NgModule({
  declarations: [DemoChildComponent,BootstrapWidgetTimepickerComponent,BootstrapWidgetRatingComponent,BootstrapWidgetProgressbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DemoChildRoutes, 
    NgbProgressbarModule,
    NgbTimepickerModule,
    NgbRatingModule,

  ]
})
export class DemoChildModule { }