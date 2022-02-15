import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IRecentlyViewedMovie } from 'src/app/interfaces/movie.interface';
import { RecentlyViewedApiService } from 'src/app/services/recently-viewed-api.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentlyViewedComponent implements OnInit {
  public movies!: IRecentlyViewedMovie[];

  constructor(
    private recentlyViewedApiService: RecentlyViewedApiService,
    private cd: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.getRecentlyViewedMovies();
  }

  public getRecentlyViewedMovies(): void {
    this.movies = this.recentlyViewedApiService.getAllMoviesFromRecentlyViewed();
    this.cd.detectChanges();
  }

}
