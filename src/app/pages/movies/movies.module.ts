import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { GenreListSliderComponent } from './components/genre-list-slider/genre-list-slider.component';
import { MovieCardComponent } from 'src/app/shared/components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    MoviesComponent,
    GenreListSliderComponent,
    MovieCardComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
  ]
})
export class MoviesModule { }
