import { Component, OnInit } from '@angular/core';
import { Emma } from '../emma';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  cars: Emma[] = [
    new Emma("Chelsea","Live as if you were to die tomorrow. Learn as if you were to live forever.","Mahatma Gandhi",new Date(12/12/2016)),
    new Emma("Raissa","Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","Martin Luther King Jr",new Date(12/12/2016)),
    new Emma("Wendy","Without music, life would be a mistake.","Friedrich Nietzsche",new Date(12/12/2016)),
    new Emma("Claudine","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson",new Date(12/12/2016)),
    new Emma("Grace","We accept the love we think we deserve.","Stephen Chbosky",new Date(12/12/2016))
  ];

  constructor() { }

  ngOnInit() {
  }

}
