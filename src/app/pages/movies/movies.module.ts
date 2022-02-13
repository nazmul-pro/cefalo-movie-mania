import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { GenreListSliderComponent } from './components/genre-list-slider/genre-list-slider.component';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';

@NgModule({
  declarations: [
    MoviesComponent,
    GenreListSliderComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    SharedUiModule,
  ]
})
export class MoviesModule { }
