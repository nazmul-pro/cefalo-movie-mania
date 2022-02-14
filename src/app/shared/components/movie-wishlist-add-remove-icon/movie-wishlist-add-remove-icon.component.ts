import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { WishlistApiService } from 'src/app/services/wishlist-api.service';

@Component({
  selector: 'app-movie-wishlist-add-remove-icon',
  templateUrl: './movie-wishlist-add-remove-icon.component.html',
  styleUrls: ['./movie-wishlist-add-remove-icon.component.css']
})
export class MovieWishlistAddRemoveIconComponent {
  @Input() public movie!: IMovie;
  @Input() public size!: string;
  constructor(
    private wishlistApiService: WishlistApiService,
  ) { }

  public addOrRemove(): void {
    this.wishlistApiService.addOrRemoveMovieToWishlist(this.movie);
  }

  public checkInWishList(): boolean {
    return this.wishlistApiService.checkMovieInWishlist(this.movie.id);
  }

}
