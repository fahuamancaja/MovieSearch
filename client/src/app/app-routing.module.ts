import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {path: 'movie', component: MoviesListComponent},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: '**', component: AppComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
