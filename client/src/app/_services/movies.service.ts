import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootObject } from '../_models/rootobject';
import { MovieObject } from '../_models/movieobject';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/';
  baseMovieUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/';
  private currentRootSource = new ReplaySubject<RootObject>(1);
  currentRoot$ = this.currentRootSource.asObservable();
  
  private currentMovieSource = new ReplaySubject<MovieObject>(1);
  currentMovie$ = this.currentMovieSource.asObservable();

  
  movies: RootObject;
  movie: MovieObject;

  authkey = '4f108354ddmsh85de9442603ef09p143fddjsn5d07f93e6c12';

  constructor(private http:HttpClient) { }

  getMovies(moviename: string) {
    const headers = new HttpHeaders()
            .set('X-RapidAPI-Key', this.authkey);
    return this.http.get<RootObject>(this.baseUrl + moviename, {headers}).pipe(
      map(movies => {
        this.movies = movies;
        console.log(movies);
        return movies;
      })
    );
  }

  getMovieById(movieid: string) {
    const headers = new HttpHeaders()
            .set('X-RapidAPI-Key', this.authkey);
    return this.http.get<MovieObject>(this.baseMovieUrl + movieid, {headers}).pipe(
      map(movie =>{
        this.movie = movie;
        console.log(movie);
        return this.movie;
      })
    )
  }

}
