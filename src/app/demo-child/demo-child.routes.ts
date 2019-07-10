import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoChildComponent } from './demo-child.component';
import { BootstrapWidgetTimepickerComponent } from './components/boostrap-widget-timepicker.component';
import { BootstrapWidgetRatingComponent } from './components/boostrap-widget-rating.component';
import { BootstrapWidgetProgressbarComponent } from './components/boostrap-widget-preogressbar.component';



const routes: Routes = [
    { path: '', component: DemoChildComponent },

    { path: 'progress', component: BootstrapWidgetProgressbarComponent},
    { path: 'rating', component:BootstrapWidgetRatingComponent},
    { path: 'timer', component: BootstrapWidgetTimepickerComponent}
        

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DemoChildRoutes { }