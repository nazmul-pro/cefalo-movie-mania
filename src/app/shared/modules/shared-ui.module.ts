import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieCastCrewCardComponent } from '../components/movie-cast-crew-card/movie-cast-crew-card.component';
import { MaterialModule } from './material.module';
import { MovieWishlistAddRemoveIconComponent } from '../components/movie-wishlist-add-remove-icon/movie-wishlist-add-remove-icon.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCastCrewCardComponent,
    MovieWishlistAddRemoveIconComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MovieCardComponent,
    MovieCastCrewCardComponent,
    MovieWishlistAddRemoveIconComponent,
  ]
})
export class SharedUiModule { }
