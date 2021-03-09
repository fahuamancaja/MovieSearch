import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MovieDb } from '../_models/movieDb';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  apiUrl = environment.apiUrl + "movie/";
  movieDb: MovieDb;

  constructor(private http:HttpClient) { }

  updateMovie(movieDb: MovieDb) {
    return this.http.post<MovieDb>(this.apiUrl + 'moviesearch', movieDb).pipe(
      map(movieDb => {
        this.movieDb = movieDb;
        return movieDb;
      })
    );
  }
}
