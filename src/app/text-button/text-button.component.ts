import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fictizia-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent implements OnInit {

  @Output() public actionClick = new EventEmitter();
  @Input() public buttonLabel:string = "";
  public value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    this.actionClick.emit(this.value);
    this.value = "";
  }

}
