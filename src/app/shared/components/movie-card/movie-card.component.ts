import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from "src/app/interfaces/movie.interface";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
  @Input() public movie!: IMovie;
  public posterImageHostUrl: string = environment.posterImageHostUrl + '/w300';

  constructor(    
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  public gotoMovieDetail(): void {
    this.router.navigate([`movies/${this.movie.id}`]);
  }
}