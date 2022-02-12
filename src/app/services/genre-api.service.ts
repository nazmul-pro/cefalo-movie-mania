import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IKeyValue } from '../core/interfaces/generic.interface';
import { RestApiService } from '../core/services/api/rest-api.service';
import { IGenre, IGenreApiResponse } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreApiService extends RestApiService<IKeyValue> {
  protected baseUrl: string = 'genre';

  public getGenreList(): Observable<IGenreApiResponse> {
    return this.getListAsFlat({}, `movie/list`);
  }
}
