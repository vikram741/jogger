import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  temp = new Date();
  n=16;
  jog_data = [
    {distance: 1000, duration:2,date:new Date('2020-05-26')},
    {distance:4000 , duration:9 , date:new Date('2020-05-25')},
    {distance: 1000, duration:4,date:new Date('2020-05-24')},
    {distance: 1300, duration:4 , date:new Date('2020-05-23')},
    {distance: 1900, duration:4,date:new Date('2020-05-22')},
    {distance:2000,duration:5 , date:new Date('2020-05-21')},
    {distance: 1000, duration:3,date:new Date('2020-05-20')},
    {distance:2000,duration:5 , date:new Date('2020-05-19')},
    {distance: 1000, duration:2,date:new Date('2020-05-18')},
    {distance:2000,duration:6 , date:new Date('2020-05-17')},
    {distance: 1000, duration:4,date:new Date('2020-05-16')},
    {distance:2000,duration:7 , date:new Date('2020-05-15')},
    {distance: 1000, duration:4,date:new Date('2020-05-14')},
    {distance:2000,duration:5 , date:new Date('2020-05-13')},
    {distance: 100, duration:1,date:new Date('2020-05-12')},
    {distance:2000,duration:6 , date:new Date('2020-05-11')},
    
  ]
  constructor() { }
  update(info : {distance:number,duration:number,date:Date} )
  {
    this.jog_data.unshift(info);
    this.n++;
    this.jog_data.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      if( new Date(b.date) > new Date(a.date)) {return 1};
      if( new Date(b.date) < new Date(a.date)) {return -1};
      if( new Date(b.date) == new Date(a.date)) {return 0};
    });
  }
  getdata()
  {
    this.jog_data.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      if( new Date(b.date) > new Date(a.date)) {return 1};
      if( new Date(b.date) < new Date(a.date)) {return -1};
      if( new Date(b.date) == new Date(a.date)) {return 0};
    });
    return this.jog_data;
  }
  averageSpeed()
  {
    let dist=0,dur=0;
    for(  let i=0;i<this.n;i++)
    {
      dist+=this.jog_data[i].distance;
      dur+= this.jog_data[i].duration;
    }
    return dist/dur;
  }
}
