import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';



@Component({ selector: 'widget-timer', templateUrl: 'boostrap-widget-timepicker.component.html' })
export class BootstrapWidgetTimepickerComponent {
    timerData= {};
    ngOnInit(){
       this.timerData= this.appser.getTimeValues();
    }
    constructor(private appser:AppService){

    }
}