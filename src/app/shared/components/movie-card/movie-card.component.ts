import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from "src/app/interfaces/movie.interface";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() public movie!: IMovie;
  public posterImageHostUrl: string = environment.posterImageHostUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
