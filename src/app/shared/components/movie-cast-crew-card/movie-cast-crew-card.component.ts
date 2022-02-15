import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICastCrewPerson } from 'src/app/interfaces/movie.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-cast-crew-card',
  templateUrl: './movie-cast-crew-card.component.html',
  styleUrls: ['./movie-cast-crew-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCastCrewCardComponent implements OnInit {
  
  @Input() public person!: ICastCrewPerson;
  public posterImageHostUrl: string = environment.posterImageHostUrl + '/w200';
  constructor() { }

  ngOnInit(): void {
  }

}
