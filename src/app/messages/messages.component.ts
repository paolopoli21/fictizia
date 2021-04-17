import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fictizia-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() public messages:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  
}
