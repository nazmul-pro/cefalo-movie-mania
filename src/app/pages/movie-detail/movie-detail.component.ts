import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, Subject, takeUntil } from 'rxjs';
import { UrlParamsProps } from 'src/app/enums/url-params.enum';
import { IMovie, IMovieDetail } from 'src/app/interfaces/movie.interface';
import { MovieDetailApiService } from 'src/app/services/movie-detail-api.service';
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

  constructor(
    private movieDetailApiService: MovieDetailApiService,
    private activatedRoute: ActivatedRoute,    
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.movieId = Number(this.activatedRoute.snapshot.paramMap.get(UrlParamsProps.MOVIE_ID));

      this.movieId && this.getMovieDetailById();
      this.movieId && this.getRelatedMovie();

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
    this.router.navigate(['movies/genres', id]);
  }

  public gotoImdb(): void {
    window.open(`https://www.imdb.com/title/${this.movie.imdb_id}`, '_blank');
  }

  private getMovieDetailById(): void {
      const movieDetailApi = this.movieDetailApiService.getMovieDetailById(this.movieId);
      const movieCreditsApi = this.movieDetailApiService.getMovieCreditsById(this.movieId);
  
      forkJoin([movieDetailApi, movieCreditsApi])
        .pipe(takeUntil(this.clearSubs$))
        .subscribe(results => {
          this.movie = results[0];
          this.movie.credits = results[1];
        });
  }

}
