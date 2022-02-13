import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieCastCrewCardComponent } from '../components/movie-cast-crew-card/movie-cast-crew-card.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCastCrewCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MovieCardComponent,
    MovieCastCrewCardComponent,
  ]
})
export class SharedUiModule { }
