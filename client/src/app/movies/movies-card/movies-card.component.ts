import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/_models/result';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  @Input() result: Result;

  constructor() { }

  ngOnInit(): void {
  }

  posterShow() {
    let poster = 'https://image.tmdb.org/t/p/w500'+ this.result.poster_path;
    if(poster == 'https://image.tmdb.org/t/p/w500null') return null;
    else{
    return poster}
  }


}
