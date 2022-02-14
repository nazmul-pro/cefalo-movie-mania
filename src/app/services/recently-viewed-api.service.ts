import { Injectable } from '@angular/core';
import { MAX_MOVIES_IN_LOCAL, RECENTLY_VIEWED_KEY } from '../constants/local-storage-keys.const';
import { LocalStorageService } from '../core/services/api/local-storage.service';
import { IMovie, IRecentlyViewedMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class RecentlyViewedApiService {

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public getAllMoviesFromRecentlyViewed(): IRecentlyViewedMovie[] {
    const all = this.localStorageService.getItem(RECENTLY_VIEWED_KEY) || [];
    all.sort((a: IRecentlyViewedMovie, b: IRecentlyViewedMovie) => {
      return +new Date(b.visitedDate) - +new Date(a.visitedDate);
    });
    return all;
  }

  public addMovieToRecentlyViewed(movie: IMovie): void {
    const allMovies = this.localStorageService.getItem(RECENTLY_VIEWED_KEY) || [];
    const idx = allMovies.findIndex((m: IMovie) => m.id === movie.id)
    if (idx > -1) {
      allMovies[idx].visitedDate = new Date();
    } else {
      allMovies.length >= MAX_MOVIES_IN_LOCAL && allMovies.shift();
      allMovies.push({...movie, visitedDate: new Date()});
    }
    this.localStorageService.setItem(RECENTLY_VIEWED_KEY, allMovies);
  }
}
