import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  point: MovieDb;

  public likes = 0;
  public dislikes = 0;

  constructor(private movieService: MoviesService, private route: ActivatedRoute, public pointService: PointService) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    this.movieService.getMovieById(this.route.snapshot.paramMap.get('id')).subscribe(movie => {
      this.movie = movie;
      const movieToUpdate: MovieDb = <MovieDb>{};
      movieToUpdate.moviename = this.movie?.title;
      movieToUpdate.like = 0;
      movieToUpdate.dislike = 0;
      this.pointService.updateMovie(movieToUpdate);
      console.log(movieToUpdate);
      console.log(this.movie);
      this.pointService.getMoviePoints(this.movie?.title).subscribe(movie => {
        this.point = movie;
        this.likes = movie?.like;
        this.dislikes = movie?.dislike;
      });
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

  public getCount() {
    return this.pointService.likes;
  }
  public incCount(pointresult: boolean){
    const movieToUpdate: MovieDb = <MovieDb>{};
    movieToUpdate.moviename = this.movie.title;
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

    this.pointService.updateMovie(movieToUpdate);
  }

}
