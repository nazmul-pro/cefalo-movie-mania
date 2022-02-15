import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { from, map, mergeMap, Subject, takeUntil } from 'rxjs';
import { RANDOM_MOVIE_NUMBERS, RANDOM_NUMBER_FACTOR } from 'src/app/constants/api-params.const';
import { UtilService } from 'src/app/core/utils/util.service';
import { IGenre } from 'src/app/interfaces/genre.interface';
import { GenreApiService } from 'src/app/services/genre-api.service';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit, OnDestroy {
  public genres!: IGenre[];
  private clearSubs$ = new Subject();

  constructor(
    private genreApiService: GenreApiService,
    private movieApiService: MovieApiService,
    private cd: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.getGenreList();
  }

  
  public ngOnDestroy(): void {
    this.clearSubs$.next(true);
    this.clearSubs$.complete();
  }

  public trackByFn(index: number, item: any): number {
    return item.id;
  }

  private getGenreList(): void {
    this.genreApiService.getGenreList()
    .pipe(takeUntil(this.clearSubs$), map(d => d.genres))
    .subscribe((d: IGenre[]) => {
      this.genres = d;
      this.getMoviesByGenre();
    },
    err => console.log('Error loading genre', err),
    () => console.log('Finished'));
  }

  private getMoviesByGenre(): void {
    from(this.genres).pipe(

      mergeMap(
        genre => this.movieApiService.getMoviesByGenreId(genre.id, 
          { page: UtilService.getRandomMoviePageNumber(genre.id) }
        )
        .pipe(map(resp => {return {genre, resp}}))
      ),
      takeUntil(this.clearSubs$),
    ).subscribe(
      resp => {
        resp.genre.movies = resp.resp.results.sort(() => RANDOM_NUMBER_FACTOR - Math.random()).slice(0, RANDOM_MOVIE_NUMBERS);
        UtilService.setMovieParamsWithGenreToLocal(resp.genre.id, { total_pages: resp.resp.total_pages });
        this.cd.detectChanges();
      },
      err => console.log('Error loading movies', err),
      () => console.log('Finished')
    );
  }

  
}
