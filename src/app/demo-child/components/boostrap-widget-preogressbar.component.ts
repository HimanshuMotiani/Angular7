import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';




@Component({ selector: 'widget-progressbar', templateUrl: 'boostrap-widget-progressbar.component.html' ,
styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]})
export class BootstrapWidgetProgressbarComponent implements OnInit {
    percentageData: number[];
    ngOnInit(){
      debugger;
       this.percentageData= this.appser.getPercentages();
       console.log(this.percentageData);
    }
    constructor(private appser:AppService){

    }

}