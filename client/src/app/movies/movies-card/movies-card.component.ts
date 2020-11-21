import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/_models/rootobject';
import { Result } from 'src/app/_models/result';
import { PointService } from 'src/app/_services/point.service';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  @Input() result: Result;

  constructor(public pointService: PointService) { }

  ngOnInit(): void {
    //console.log("These are the titels " + this.title);
  }

  posterShow() {
    let poster = 'https://image.tmdb.org/t/p/w500'+ this.result.poster_path;
    if(poster == 'https://image.tmdb.org/t/p/w500null') return null;
    else{
    return poster}
  }

  public getCount() {
    return this.pointService.likes;
  }
  public incCount(){
    this.pointService.likes += 1;
  }

}
