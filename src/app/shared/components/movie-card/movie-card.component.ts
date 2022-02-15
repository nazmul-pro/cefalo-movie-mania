import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlPaths } from 'src/app/enums/url-paths.enum';
import { IMovie } from "src/app/interfaces/movie.interface";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() public movie!: IMovie;
  public posterImageHostUrl: string = environment.posterImageHostUrl + '/w300';

  constructor(    
    private router: Router,
  ) { }

  public gotoMovieDetail(): void {
    this.router.navigate([`${UrlPaths.MOVIES}/${this.movie.id}`]);
  }
}