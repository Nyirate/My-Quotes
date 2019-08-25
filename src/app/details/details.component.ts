import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ Emma} from '../emma'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   @Input() coco: Emma;
   @Output() isComplete = new EventEmitter<boolean>();

   deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }

  //  like=0;
  //  upvote(){
  //    this.like++;
  //  }

  //  dislike=0;
  //  downvote(){
  //    this.dislike++;
  //  }

  //  Delete(complete:boolean){
  //    this.isComplete.emit(complete);
  //  }
  constructor() { }

  ngOnInit() {
  }

}
