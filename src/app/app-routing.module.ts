import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
};

const routes: Routes = [
  {
    path: 'movies',
    data: { breadcrumb: 'Movies' },
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'movies/genres/:genreId',
    data: { breadcrumb: 'Movie Genre' },
    loadChildren: () => import('./pages/movie-genre/movie-genre.module').then(m => m.MovieGenreModule)
  },
  {
    path: 'movies/:movieId',
    data: { breadcrumb: 'Movie Detail' },
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailModule)
  },
  {
    path: 'wishlist',
    data: { breadcrumb: 'Movie Wish List' },
    loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule)
  },
  {
    path: 'recently-viewed',
    data: { breadcrumb: 'Recently Viewed Movie List' },
    loadChildren: () => import('./pages/recently-viewed/recently-viewed.module').then(m => m.RecentlyViewedModule)
  },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
