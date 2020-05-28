import { Component, OnInit } from '@angular/core';
import{ DataService} from '../service/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  jog_data:{ distance: number; duration: number; date: Date; }[];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.jog_data =  this.data.getdata();
  }

}
