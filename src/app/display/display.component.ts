import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  board= false;
  stat = true;
  constructor() { }

  ngOnInit() {
  }
  B_button()
  {
    this.board= true;
  this.stat = false;
  }
  S_button()
  {
    this.board=false;
    this.stat = true;
  }
  

}
