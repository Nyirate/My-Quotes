import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  yesLikes=0
  noLikes=0
  
  upLikes(){
    this.yesLikes=this.yesLikes+1
  }

  downLikes(){
    this.noLikes=this.noLikes+1
  }
  constructor() { }

  ngOnInit() {
  }

}
