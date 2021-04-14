import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fictizia-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public updateMessage(value: string) {
    this.message = value;
  }

  cleanMessage(){
    this.message = "";
  }

}
