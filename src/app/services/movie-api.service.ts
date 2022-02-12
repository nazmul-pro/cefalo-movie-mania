import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListResApi } from '../core/interfaces/api.interface';
import { RestApiService } from '../core/services/api/rest-api.service';
import { UtilService } from '../core/utils/util.service';
import { IMovie } from "../interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieApiService extends RestApiService<IMovie> {
  protected baseUrl: string = 'discover/movie';

  public getMoviesByGenreId(id: number): Observable<IListResApi<IMovie[]>> {
    const params = {
      with_genres: id,
      page: UtilService.getRandomMoviePageNumber(id),
    }
    return this.getList(params);
  }
}
