import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { GenreListSliderComponent } from './components/genre-list-slider/genre-list-slider.component';

@NgModule({
  declarations: [
    MoviesComponent,
    GenreListSliderComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
  ]
})
export class MoviesModule { }
