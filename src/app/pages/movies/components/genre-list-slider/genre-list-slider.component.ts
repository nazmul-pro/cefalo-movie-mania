import { Component, Input, OnInit } from '@angular/core';
import { GENRE_IMG_URLS } from 'src/app/constants/genre-image-urls.constant';
import { IGenre } from 'src/app/interfaces/genre.interface';

@Component({
  selector: 'app-genre-list-slider',
  templateUrl: './genre-list-slider.component.html',
  styleUrls: ['./genre-list-slider.component.scss'],
})
export class GenreListSliderComponent implements OnInit {
  private genreImgUrls = GENRE_IMG_URLS;
  private splitGenreBy: number = 5;

  @Input() public genres!: IGenre[];
  public genreGroups!: IGenre[][];

  public ngOnInit(): void {    
    this.appendImageUrl();
    this.makeSliderGroups();
  }
  public gotoGenre(): void {
    // navigate to genre page
  }

  
  private appendImageUrl(): void {
    this.genres = this.genres.map(g => {
      g.imageUrl = this.genreImgUrls
        .find(u => u.id === g.id)?.url || this.genreImgUrls[0].url;
      return g;
    });
  }

  private makeSliderGroups(): void {
    const [list, chunkSize] = [this.genres, this.splitGenreBy];
    this.genreGroups = [...Array(Math.ceil(list.length / chunkSize))]
        .map(_ => list.splice(0, chunkSize));
  }


}
