import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { GENRE_IMG_URLS } from 'src/app/constants/genre-image-urls.constant';
import { IGenre } from 'src/app/interfaces/genre.interface';
import { GenreApiService } from 'src/app/services/genre-api.service';

@Component({
  selector: 'app-genre-list-slider',
  templateUrl: './genre-list-slider.component.html',
  styleUrls: ['./genre-list-slider.component.scss'],
})
export class GenreListSliderComponent implements OnInit, OnDestroy {
  public genreGroups!: IGenre[][];
  private genreImgUrls = GENRE_IMG_URLS;
  private clearSubs$ = new Subject();
  private splitGenreBy: number = 5;

  constructor(
    private genreApiService: GenreApiService,
  ) { }

  public ngOnInit(): void {
    this.getGenreList();
  }

  public ngOnDestroy(): void {
    this.clearSubs$.next(true);
    this.clearSubs$.complete();
  }

  public gotoGenre(): void {
    // navigate to genre page
  }

  private getGenreList(): void {
    this.genreApiService.getGenreList()
    .pipe(takeUntil(this.clearSubs$), map(d => d.genres))
    .subscribe((d: IGenre[]) => {
      this.appendImageUrl(d);
      this.makeSliderGroups(d);
    });
  }

  private appendImageUrl(genres: IGenre[]): void {
    genres = genres.map(g => {
      g.imageUrl = this.genreImgUrls
        .find(u => u.id === g.id)?.url || this.genreImgUrls[0].url;
      return g;
    });
  }

  private makeSliderGroups(d: IGenre[]): void {
    const [list, chunkSize] = [d, this.splitGenreBy];
    this.genreGroups = [...Array(Math.ceil(list.length / chunkSize))]
        .map(_ => list.splice(0,chunkSize));
  }

}
