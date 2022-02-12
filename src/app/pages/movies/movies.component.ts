import { Component, OnInit } from '@angular/core';
import { GenreApiService } from 'src/app/services/genre-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private genreApiService: GenreApiService,
  ) { }

  ngOnInit(): void {
    this.genreApiService.getGenreList().subscribe(x => console.log(x));
  }

}
