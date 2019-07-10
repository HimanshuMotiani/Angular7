import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
// import {load} from './ng-module-loader';

export const appRoutes: Routes=[
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
       },
      {
        path: 'home',
        component: HomeComponent
      },
     
        { path: 'demo',loadChildren: () => new Promise(resolve => {
          return (require as any).ensure([], (require: any) => {
              return resolve(require('./demo/demo.module').DemoModule);
          });
      })},
   
];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]

})
export class AppRoutingModule {

}