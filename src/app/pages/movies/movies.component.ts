import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GenreApiService } from 'src/app/services/genre-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {
  items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  constructor(
    private genreApiService: GenreApiService,
  ) { }

  ngOnInit(): void {
    this.genreApiService.getGenreList().subscribe(x => console.log(x));
  }

}
