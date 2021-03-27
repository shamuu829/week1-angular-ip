import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  Quote: never[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.Quote =[
    
    ]
  }

}
