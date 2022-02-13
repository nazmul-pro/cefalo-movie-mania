import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGenreComponent } from './movie-genre.component';


const routes: Routes = [
  {
    path: '',
    component: MovieGenreComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieGenreRoutingModule { }
