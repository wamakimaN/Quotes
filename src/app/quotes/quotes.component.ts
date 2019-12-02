import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
   new Quote('Audrey Hepburn','For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.',new Date(2019,10,29))
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

  if (quote.name === '' || quote.sentence === '' || quote.published ==='') {
    return false;  
  } else {
    this.quotes.push(quote)
  }

}


  constructor() { }

  ngOnInit() {
  }

}
