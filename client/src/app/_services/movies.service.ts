import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RootObject } from '../_models/rootobject';
import { MovieObject } from '../_models/movieobject';
import { CastObject } from '../_models/castObject';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/search/movie?language=en-US';
  baseMovieUrl = 'https://api.themoviedb.org/3/movie/';
  
  movies: RootObject;
  movie: MovieObject;
  cast: CastObject;

  authkey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzZlM2ZkNTM4ZjljYzliZGI0MTVjMGVmOWMxMjVhMiIsInN1YiI6IjVmYjFiZDAxMTJjNjA0MDA0MmI2MjBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y25P_8fFEuTyXpqLl97DBWs5PIpIhfm719xB8G6lzVQ';

  constructor(private http:HttpClient) { }

  getMovies(moviename: string) {
    const headers = new HttpHeaders()
            .set('Authorization', this.authkey);
    return this.http.get<RootObject>(this.baseUrl + "&query=" + moviename, {headers}).pipe(
      map(movies => {
        this.movies = movies;
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
        return this.movie;
      })
    )
  }

  getCredits(movieid: number) {
    const headers = new HttpHeaders()
      .set('Authorization', this.authkey);
    return this.http.get<CastObject>(this.baseMovieUrl + movieid + '/credits', {headers}).pipe(
      map(cast => {
        this.cast = cast;
        return this.cast;
      })
    )
  }
}
