import { Injectable } from '@angular/core';
import { WISH_LIST_KEY } from '../constants/local-storage-keys.const';
import { LocalStorageService } from '../core/services/api/local-storage.service';
import { IMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class WishlistApiService {

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public getMovieFromWishlist(id: number): IMovie {
    const allWishlist = this.localStorageService.getItem(WISH_LIST_KEY);
    return allWishlist && allWishlist.find((m: IMovie) => m.id === id);
  }

  public setMovieToWishlist(movie: IMovie): void {
    const allWishlist = this.localStorageService.getItem(WISH_LIST_KEY) || [];
    allWishlist.push({...movie, date: new Date()});
    this.localStorageService.setItem(WISH_LIST_KEY, allWishlist);
  }

  public removeMovieFromWishlist(id: number): void {
    const allWishlist = this.localStorageService.getItem(WISH_LIST_KEY) || [];
    const idx = allWishlist.findIndex((m: IMovie) => m.id === id)
    if (idx > -1) {
      allWishlist.splice(idx, 1);
      this.localStorageService.setItem(WISH_LIST_KEY, allWishlist);
    }
  }
  
  public checkMovieInWishlist(id: number): boolean {
    return this.getMovieFromWishlist(id)?.id === id;
  }
}
