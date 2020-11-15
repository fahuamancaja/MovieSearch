import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/_models/rootobject';
import { Title } from 'src/app/_models/title';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  @Input() title: Title;

  constructor() { }

  ngOnInit(): void {
    //console.log("These are the titels " + this.title);
  }

}
