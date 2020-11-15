import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieObject } from 'src/app/_models/movieobject';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieObject;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    this.movieService.getMovieById(this.route.snapshot.paramMap.get('id')).subscribe(movie => {
      this.movie = movie;
    })
  }
}
