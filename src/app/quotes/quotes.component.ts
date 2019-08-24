import { Component, OnInit } from '@angular/core';
import { Emma } from '../emma';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  cars: Emma[] = [
    new Emma(1,"Chelsea","Live as if you were to die tomorrow,Learn as if you were to live forever.","Mahatma Gandhi",new Date(2019,8,24)),
    new Emma(2,"Raissa","Darkness cannot drive out darkness: only light can do that,Hate cannot drive out hate: only love can do that.","Martin Luther King Jr",new Date(2015,3,17)),
    new Emma(3,"Wendy","Without music, life would be a mistake.","Friedrich Nietzsche",new Date(2005,10,23)),
    new Emma(4,"Claudine","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson",new Date(2019,5,20)),
    new Emma(5,"Grace","We accept the love we think we deserve.","Stephen Chbosky",new Date(2013,9,11))
  ];
  Details(index){
    this.cars[index].showDate = !this.cars[index].showDate
  }
  addNewEmma(car){
    let carlength=this.cars.length;
    car.id=carlength+1;
    this.cars.push(car)
    console.log(car)
  }

  constructor() { }

  ngOnInit() {
  }

}
