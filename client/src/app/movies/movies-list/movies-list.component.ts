import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/app/_models/rootobject';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  rootObject: RootObject;
  model: any = {};

  resultList: any [];
  selected: string;

  constructor(private moviesService: MoviesService) { }

ngOnInit(): void {
  }

  LoadMovies(movietitle: string) {
    this.moviesService.getMovies(movietitle).subscribe(movie => {
      this.rootObject = movie;
      this.resultList = this.rootObject.results;
      });
  }
}
