import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/_models/rootobject';
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
    //console.log("These are the titels " + this.title);
  }

}
