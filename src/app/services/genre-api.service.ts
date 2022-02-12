import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IKeyValue } from '../core/interfaces/generic.interface';
import { RestApiService } from '../core/services/api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class GenreApiService extends RestApiService<IKeyValue> {
  protected baseUrl: string = 'discover';

  public getGenreList(): Observable<IKeyValue> {
    return this.getList({}, `movie`);
  }
}
