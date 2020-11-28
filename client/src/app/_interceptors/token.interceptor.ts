import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesService } from '../_services/movies.service';
import { take } from 'rxjs/operators';
import { RootObject } from '../_models/rootobject';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  apiToken: '4f108354ddmsh85de9442603ef09p143fddjsn5d07f93e6c12';

  constructor(private moviesService: MoviesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentRoot: RootObject;

    this.moviesService.currentRoot$.pipe(take(1)).subscribe(movie => currentRoot = movie);
    if (currentRoot) {
      request = request.clone({
        setHeaders: {
          'X-RapidAPI-Key': '4f108354ddmsh85de9442603ef09p143fddjsn5d07f93e6c12'
        }
      })
    }
    return next.handle(request);
  }
}
