import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movies-holder-with-group-title',
  templateUrl: './movies-holder-with-group-title.component.html',
  styleUrls: ['./movies-holder-with-group-title.component.css']
})
export class MoviesHolderWithGroupTitleComponent {
  @Input() public groupTitle: string = 'Movies';
  @Input() public movies: IMovie[] = [];

}
