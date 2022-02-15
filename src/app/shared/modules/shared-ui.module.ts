import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieCastCrewCardComponent } from '../components/movie-cast-crew-card/movie-cast-crew-card.component';
import { MaterialModule } from './material.module';
import { MovieWishlistAddRemoveIconComponent } from '../components/movie-wishlist-add-remove-icon/movie-wishlist-add-remove-icon.component';
import { MoviesHolderWithGroupTitleComponent } from '../components/movies-holder-with-group-title/movies-holder-with-group-title.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCastCrewCardComponent,
    MovieWishlistAddRemoveIconComponent,
    MoviesHolderWithGroupTitleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MovieCardComponent,
    MovieCastCrewCardComponent,
    MovieWishlistAddRemoveIconComponent,
    MoviesHolderWithGroupTitleComponent,
  ]
})
export class SharedUiModule { }
