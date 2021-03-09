import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MovieDb } from '../_models/movieDb';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  dbUrl = 'https://localhost:5001/api/movie/';
  movieDb: MovieDb;

  constructor(private http:HttpClient) { }

  updateMovie(movieDb: MovieDb) {
    return this.http.post<MovieDb>(this.dbUrl + 'moviesearch', movieDb).pipe(
      map(movieDb => {
        this.movieDb = movieDb;
        return movieDb;
      })
    );
  }
}
