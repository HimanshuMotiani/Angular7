import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';




@Component({ selector: 'widget-rating', templateUrl: 'boostrap-widget-rating.component.html' })
export class BootstrapWidgetRatingComponent {
    ratingData: number;
    ngOnInit(){
       this.ratingData= this.appser.getRatings();
    }
    constructor(private appser:AppService){

    }

}
