import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
   new Quote('Lonyangapou','Kama hukuna kaa na mama yako',new Date(2019,10,29))
  ];

  showMore(index){
    this.quotes[index].showDetails  = !this.quotes[index].showDetails;
  }
 
  deleteQuote(isDelete, index){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

      if (toDelete){
      this.quotes.splice(index,1)
      }
    }
  }

addNewQuote(quote){
  quote.published = new Date(quote.published)
this.quotes.push(quote)
}


  constructor() { }

  ngOnInit() {
  }

}
