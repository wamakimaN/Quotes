import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
   new Quote('Lonyangapou','Kama hukuna kaa na mama yako',0,0,0)
  ]

  constructor() { }

  ngOnInit() {
  }

}
