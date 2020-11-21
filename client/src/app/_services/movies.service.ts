import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootObject } from '../_models/rootobject';
import { MovieObject } from '../_models/movieobject';
import { MovieDb } from '../_models/movieDb';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/search/movie?language=en-US';
  baseMovieUrl = 'https://api.themoviedb.org/3/movie/';


  private currentRootSource = new ReplaySubject<RootObject>(1);
  currentRoot$ = this.currentRootSource.asObservable();
  
  private currentMovieSource = new ReplaySubject<MovieObject>(1);
  currentMovie$ = this.currentMovieSource.asObservable();


  
  movies: RootObject;
  movie: MovieObject;

  authkey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzZlM2ZkNTM4ZjljYzliZGI0MTVjMGVmOWMxMjVhMiIsInN1YiI6IjVmYjFiZDAxMTJjNjA0MDA0MmI2MjBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y25P_8fFEuTyXpqLl97DBWs5PIpIhfm719xB8G6lzVQ';

  constructor(private http:HttpClient) { }

  getMovies(moviename: string) {
    const headers = new HttpHeaders()
            .set('Authorization', this.authkey);
    return this.http.get<RootObject>(this.baseUrl + "&query=" + moviename, {headers}).pipe(
      map(movies => {
        this.movies = movies;
        console.log(movies);
        return movies;
      })
    );
  }

  getMovieById(movieid: string) {
    const headers = new HttpHeaders()
            .set('Authorization', this.authkey);
    return this.http.get<MovieObject>(this.baseMovieUrl + movieid, {headers}).pipe(
      map(movie =>{
        this.movie = movie;
        console.log(movie);
        return this.movie;
      })
    )
  }



}
