import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDate'
})
export class CountDatePipe implements PipeTransform {

  transform(value: any): number {
      let day:Date = new Date();
      let dayWithNoTime:any = new Date(day.getFullYear(), day.getMonth(), day.getDate())
      var Difference = Math.abs(value - dayWithNoTime) 
      const secondsInDay = 86400; 
      var Seconds = Difference*0.001;
      var dateCounting = Seconds/secondsInDay;
  
      if (dateCounting >= 1 && value > dayWithNoTime){
        return dateCounting;
      }else{
        return dateCounting;
      }
    }

}
