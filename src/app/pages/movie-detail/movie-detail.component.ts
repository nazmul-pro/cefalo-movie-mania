import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, Observable, Subject, takeUntil } from 'rxjs';
import { UrlParamsProps } from 'src/app/enums/url-params.enum';
import { UrlPaths } from 'src/app/enums/url-paths.enum';
import { IMovie, IMovieDetail, IMovieVideos } from 'src/app/interfaces/movie.interface';
import { MovieDetailApiService } from 'src/app/services/movie-detail-api.service';
import { RecentlyViewedApiService } from 'src/app/services/recently-viewed-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  public movieId: number = Number(this.activatedRoute.snapshot.paramMap.get(UrlParamsProps.MOVIE_ID));
  public movie!: IMovieDetail;
  public recomMovies!: IMovie[];
  public posterImageHostUrl: string = environment.posterImageHostUrl + '/w500';
  @ViewChild("top") top!: ElementRef;

  private clearSubs$ = new Subject();
  public safeVideoURL!: SafeResourceUrl;

  constructor(
    private movieDetailApiService: MovieDetailApiService,
    private recentlyViewedApiService: RecentlyViewedApiService,
    private activatedRoute: ActivatedRoute,    
    private router: Router,
    private _sanitizer: DomSanitizer
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.movieId = Number(this.activatedRoute.snapshot.paramMap.get(UrlParamsProps.MOVIE_ID));
      if (this.movieId) {
        this.getMovieDetailById();
        this.getRelatedMovie();
        this.getVideosById();
      }
    });
  }

  public ngAfterViewInit(): void {
    
    if (this.top !== null) {
      this.top.nativeElement.scrollIntoView();
    }
  }
  private getRelatedMovie(): void {    
    this.movieDetailApiService.getRecommendedById(this.movieId)
    .pipe(takeUntil(this.clearSubs$), map(d => d.results))
    .subscribe(r => this.recomMovies = r);
  }
  
  public ngOnDestroy(): void {
    this.clearSubs$.next(true);
    this.clearSubs$.complete();
  }

  public gotoGenre(id: number): void {
    this.router.navigate([`${UrlPaths.MOVIES}/${UrlPaths.GENRES}`, id]);
  }

  public gotoImdb(): void {
    window.open(`${environment.imdbMovieBaseUrl}/${this.movie.imdb_id}`, '_blank');
  }

  private getMovieDetailById(): void {
      const movieDetailApi = this.movieDetailApiService.getMovieDetailById(this.movieId);
      const movieCreditsApi = this.movieDetailApiService.getMovieCreditsById(this.movieId);
  
      forkJoin([movieDetailApi, movieCreditsApi])
        .pipe(takeUntil(this.clearSubs$))
        .subscribe(results => {
          this.movie = results[0];
          this.movie.id = this.movieId;
          this.movie.credits = results[1];
          this.recentlyViewedApiService.addMovieToRecentlyViewed(this.movie);
        });
  }

  private getVideosById(): void {
    this.movieDetailApiService.getVideosById(this.movieId)
      .pipe(takeUntil(this.clearSubs$), map(v => v.results))
      .subscribe(v => {
        this.safeVideoURL = this._sanitizer.bypassSecurityTrustResourceUrl(`${environment.youtubeVideoBaseUrl}/${v[0].key}`);
      });
  }

}
