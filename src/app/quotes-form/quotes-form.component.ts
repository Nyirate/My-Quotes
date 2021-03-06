import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Emma } from '../emma';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  

    newEmma = new Emma(0,"","","", new Date());
  @Output() addEmma = new EventEmitter<Emma>();
  
    submitQuote(){
  this.addEmma.emit(this.newEmma);
  console.log(this.newEmma)
  this.newEmma=new Emma(0,"","","",new Date())
    }

  constructor() { }

  ngOnInit() {
  }

}
