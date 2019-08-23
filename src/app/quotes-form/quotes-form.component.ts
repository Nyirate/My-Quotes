import { Component, OnInit, Output, EventEmitter } from'@angular/core';
// import { Emma } from '../emma'
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  

  //   newEmma = new Emma(0,"","", newDate());
  // @Output() addGoal = new EventEmitter<Emma>();
  
  //   submitQuote(){
  // this.addGoal.emit(this.newEmma);
  //   }

  constructor() { }

  ngOnInit() {
  }

}
