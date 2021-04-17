import { Component } from '@angular/core';

@Component({
  selector: 'fictizia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messages: string[] = [];
  public value: string = "";

  public updateMessage(message: string) {
    this.messages = [...this.messages, message];
  }
}
