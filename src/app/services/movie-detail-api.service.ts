import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListResApi } from '../core/interfaces/api.interface';
import { RestApiService } from '../core/services/api/rest-api.service';
import { IMovie, IMovieCredits, IMovieDetail } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailApiService extends RestApiService<IMovieDetail> {

  protected baseUrl: string = 'movie';

  public getMovieDetailById(id: number): Observable<IMovieDetail> {
    return this.getItem({}, `${id}`);
  }

  public getMovieCreditsById(id: number): Observable<IMovieCredits> {
    return this.getItem({}, `${id}/credits`);
  }

  public getRecommendedById(id: number): Observable<IListResApi<IMovie[]>> {
    return this.getItem({}, `${id}/recommendations`);
  }

}
