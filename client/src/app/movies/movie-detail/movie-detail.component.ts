import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastObject } from 'src/app/_models/castObject';
import { MovieDb } from 'src/app/_models/movieDb';
import { MovieObject } from 'src/app/_models/movieobject';
import { MoviesService } from 'src/app/_services/movies.service';
import { PointService } from 'src/app/_services/point.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieObject;
  movieId: number;
  point: MovieDb;
  cast: CastObject;

  public likes = 0;
  public dislikes = 0;

  public director: string;

  constructor(private movieService: MoviesService, private route: ActivatedRoute, public pointService: PointService) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    this.movieService.getMovieById(this.route.snapshot.paramMap.get('id')).subscribe(movie => {
      this.movie = movie;
      this.movieId = movie.id;
      const movieToUpdate: MovieDb = <MovieDb>{};
      movieToUpdate.moviename = this.movie?.title;
      movieToUpdate.movieId = this.movie?.id;
      movieToUpdate.like = 0;
      movieToUpdate.dislike = 0;

      var results = this.pointService.updateMovie(movieToUpdate).subscribe(movie => {
        this.point = movie;
        this.movie.id = movie.id;
        this.likes = movie.like;
        this.dislikes = movie.dislike;

      });

      var cast = this.movieService.getCredits(movie.id).subscribe(cast => {
        let direct: string;

        this.cast = cast;
        this.cast.crew.forEach(function (crewMember) {
          if (crewMember.job == 'Director')
          {
            direct = crewMember.name;
          }
        });
        this.director = direct;
      })
    })
  }

  posterShow() {
    const poster = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
    if (poster === 'https://image.tmdb.org/t/p/w500null')
    {
      return null;
    }
    else{
    return poster; }
  }


  public incCount(pointresult: boolean){
    const movieToUpdate: MovieDb = <MovieDb>{};
    movieToUpdate.moviename = this.movie.title;
    movieToUpdate.movieId = this.movieId;
    if(pointresult == true)
    {
      movieToUpdate.like = 1;
      movieToUpdate.dislike = 0;
      this.point.like = this.point.like + 1;
    }
    if(pointresult == false)
    {
      movieToUpdate.like = 0;
      movieToUpdate.dislike = 1;
      this.point.dislike = this.point.dislike + 1;
    }
    this.pointService.updateMovie(movieToUpdate).subscribe();

  }

}
