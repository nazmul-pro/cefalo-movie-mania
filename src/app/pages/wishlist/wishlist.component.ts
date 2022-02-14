import { Component, OnInit } from '@angular/core';
import { IMovie, IWishListMovie } from 'src/app/interfaces/movie.interface';
import { WishlistApiService } from 'src/app/services/wishlist-api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  public movies: IWishListMovie[] = this.wishListApiService.getAllMoviesFromWishlist();

  constructor(
    private wishListApiService: WishlistApiService,
  ) { }


}
