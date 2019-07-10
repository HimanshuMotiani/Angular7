import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';

const routes: Routes = [
    
        {path: '', component: DemoComponent},
            { path: 'demo-child',loadChildren: () => new Promise(resolve => {
                return (require as any).ensure([], (require: any) => {
                    return resolve(require('../demo-child/demo-child.module').DemoChildModule);
                });
            })},
        
    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DemoRoutes { }