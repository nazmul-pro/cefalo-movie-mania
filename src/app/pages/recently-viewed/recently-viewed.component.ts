import { Component, OnInit } from '@angular/core';
import { IRecentlyViewedMovie } from 'src/app/interfaces/movie.interface';
import { RecentlyViewedApiService } from 'src/app/services/recently-viewed-api.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.css']
})
export class RecentlyViewedComponent implements OnInit {
  public movies!: IRecentlyViewedMovie[];

  constructor(
    private recentlyViewedApiService: RecentlyViewedApiService,
  ) { }

  public ngOnInit(): void {
    this.getRecentlyViewedMovies();
  }

  public getRecentlyViewedMovies(): void {
    this.movies = this.recentlyViewedApiService.getAllMoviesFromRecentlyViewed();
  }

}
