import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieGenreRoutingModule } from './movie-genre-routing.module';
import { MovieGenreComponent } from './movie-genre.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';


@NgModule({
  declarations: [
    MovieGenreComponent,
  ],
  imports: [
    CommonModule,
    MovieGenreRoutingModule,
    MaterialModule,
    SharedUiModule,
  ]
})
export class MovieGenreModule { }
