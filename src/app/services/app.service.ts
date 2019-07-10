import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  
percentage = [25,50];
time = {hour: 13, minute: 30};
currentRate = 8;
  constructor() {}

  getPercentages() {

           return this.percentage;
      }
     
      getTimeValues(){

       return this.time;

      }
      getRatings(){
          return this.currentRate;
      }
}