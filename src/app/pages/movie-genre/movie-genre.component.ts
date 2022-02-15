import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { NUMBER_OF_MOVIES_BY_GENRE } from 'src/app/constants/api-params.const';
import { QUERY_PARAMS_SORT_BY } from 'src/app/constants/api-query-params-key-value.const';
import { UrlParamsProps } from 'src/app/enums/url-params.enum';
import { IGenre } from 'src/app/interfaces/genre.interface';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { GenreApiService } from 'src/app/services/genre-api.service';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.css']
})
export class MovieGenreComponent implements OnInit, OnDestroy {
  public genreId: number = Number(this.activatedRoute.snapshot.paramMap.get(UrlParamsProps.GENRE_ID));
  public movies: IMovie[] = [];
  private genres!: IGenre[];
  private clearSubs$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApiService: MovieApiService,
    private genreApiService: GenreApiService,
  ) { }

  public ngOnInit(): void {
    this.genreId && this.getMoviesByGenre();
    this.getGenreList();
  }

  
  public ngOnDestroy(): void {
    this.clearSubs$.next(true);
    this.clearSubs$.complete();
  }

  public getGenreName(id: number): string {
    if (!this.genres) {
      return 'No Genre';
    }
    return this.genres.find(g => g.id === id)?.name || 'Not Found';
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
    this.movieApiService.getMoviesByGenreId(this.genreId, {[QUERY_PARAMS_SORT_BY.key]: QUERY_PARAMS_SORT_BY.value})
    .pipe(takeUntil(this.clearSubs$), map(m => m.results.slice(0, NUMBER_OF_MOVIES_BY_GENRE)))  
    .subscribe(
        m => this.movies = m,
        err => console.log('Error loading movies', err),
        () => console.log('Finished'));
  }

}
