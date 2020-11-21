import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MovieDb } from '../_models/movieDb';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  dbUrl = 'https://localhost:5001/api/movie/';

  public likes = 0;
  public dislikes = 0;
  movieDb: MovieDb;

  constructor(private http:HttpClient) { }

  updateMovie(movieDb: MovieDb) {

    return this.http.post(this.dbUrl + 'moviesearch', movieDb);
  }
  
  getMoviePoints(movieDb: MovieDb) {
    return this.http.post<MovieDb>(this.dbUrl + 'moviesearch', movieDb).pipe(
      map(movieDb => {
        this.movieDb = movieDb;
        this.likes = movieDb.like;
        this.dislikes = movieDb.dislike;
        return movieDb;
      })
    )
  }
}
