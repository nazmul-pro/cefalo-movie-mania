import { Injectable } from '@angular/core';
import { WISH_LIST_KEY } from '../constants/local-storage-keys.const';
import { LocalStorageService } from '../core/services/api/local-storage.service';
import { IMovie, IWishListMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class WishlistApiService {

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public getAllMoviesFromWishlist(): IWishListMovie[] {
    const allWishlist = this.localStorageService.getItem(WISH_LIST_KEY) || [];
    allWishlist.sort((a: IWishListMovie, b: IWishListMovie) => {
      return +new Date(b.date) - +new Date(a.date);
    });
    return allWishlist;
  }

  public getMovieFromWishlist(id: number): IMovie {
    const allWishlist = this.localStorageService.getItem(WISH_LIST_KEY);
    return allWishlist && allWishlist.find((m: IMovie) => m.id === id);
  }

  public addOrRemoveMovieToWishlist(movie: IMovie): void {
    const allWishlist = this.localStorageService.getItem(WISH_LIST_KEY) || [];
    const idx = allWishlist.findIndex((m: IMovie) => m.id === movie.id)
    if (idx > -1) {
      allWishlist.splice(idx, 1);
    } else {
      allWishlist.push({...movie, date: new Date()});
    }
    this.localStorageService.setItem(WISH_LIST_KEY, allWishlist);
  }
  
  public checkMovieInWishlist(id: number): boolean {
    return this.getMovieFromWishlist(id)?.id === id;
  }
}
