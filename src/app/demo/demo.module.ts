import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutes } from './demo.routes';
import { DemoComponent } from './demo.component';


console.log('`demo` bundle loaded asynchronously');
@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutes
  ]
})
export class DemoModule { }