import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form :{distance:number,duration:number,date:Date}
  
  constructor(private data:DataService) { }

  ngOnInit() {
  }
  submit( data:NgForm )
  {
    console.log(data);
     this.form = data.value;
    data.reset();
    this.form.date = new Date(this.form.date);
    this.data.update(this.form);
    console.log(typeof(this.form.date));
  }
}
