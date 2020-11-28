import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, Validators  } from '@angular/forms';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/_models/rootobject';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  rootObject: RootObject;
  registerForm: FormGroup;
  model: any = {};

  resultList: any [];
  selected: string;

  constructor(private moviesService: MoviesService, private fb: FormBuilder) { }

ngOnInit(): void {
  }

  LoadMovies(movietitle: string) {
    this.moviesService.getMovies(movietitle).subscribe(movie => {
      this.rootObject = movie;
      // console.log(this.rootObject);
      this.resultList = this.rootObject.results;

      // console.log(this.resultList);
      });
  }
  DisplayArray() {
    // console.log(this.resultList);
  }

  testMovie() {
    // console.log(this.model);
  }
}
