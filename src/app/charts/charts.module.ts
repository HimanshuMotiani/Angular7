import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts.routing';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [
        CommonModule,
        ChartsRoutingModule
    ],
    declarations: [
        ChartsComponent
    ],
    exports: [
        ChartsComponent
    ],
    providers: [
    ]
})
export class ChartsModule{
}