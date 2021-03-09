import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RootObject } from '../_models/rootobject';
import { MovieObject } from '../_models/movieobject';
import { CastObject } from '../_models/castObject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = environment.baseUrl;
  baseMovieUrl = environment.baseMovieUrl;
  
  movies: RootObject;
  movie: MovieObject;
  cast: CastObject;

  authkey = environment.authkey;

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
