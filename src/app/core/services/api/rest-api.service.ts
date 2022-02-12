import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListReqParamsApi, IListResApi } from '../../interfaces/api.interface';
import { IKeyValue } from '../../interfaces/generic.interface';
import { IHttpOptionsCommon } from '../../interfaces/http-response.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export abstract class RestApiService<T> {
  protected abstract baseUrl: string;
  protected abstract appServiceUrl: string;

  constructor(private apiService: ApiService) {}

  protected getList<T>(params: IListReqParamsApi = {}, path?: string): Observable<IListResApi<T>> {
    return this.apiService.get(this.getUrl(path), <IKeyValue>params);
  }

  protected getListAsFlat<T>(params: IListReqParamsApi = {}, path?: string): Observable<T> {
    return this.apiService.get(this.getUrl(path), <IKeyValue>params);
  }

  protected getItem<T>(params: IKeyValue = {}, path?: string): Observable<T> {
    return this.apiService.get(this.getUrl(path), params);
  }

  protected getItemById<T>(id: string, params: IKeyValue = {}, path?: string): Observable<T> {
    return this.apiService.get(`${this.getUrl(path)}/${id}`, params);
  }

  protected getItemByPath<T>(path: string[], params: IKeyValue = {}, additionalPath?: string, headers?: IKeyValue): Observable<T> {
    return this.apiService.get(
      `${this.getUrl(additionalPath)}/${path.join('/')}`,
      params, 
      headers,
    );
  }

  protected postItemByPath<T>(path: string[], body: IKeyValue = {}, options?: IHttpOptionsCommon, additionalPath?: string): Observable<T> {
    return this.apiService.post(
      `${this.getUrl(additionalPath)}/${path.join('/')}`,
      body,
      options,
    );
  }

  protected postItem<T>(params: IKeyValue = {}, options?: IHttpOptionsCommon, path?: string): Observable<T> {
    return this.apiService.post(this.getUrl(path), params, options);
  }

  protected putItemById<T>(id: string, params: IKeyValue = {}, path?: string): Observable<T> {
    return this.apiService.put(`${this.getUrl(path)}/${id}`, params);
  }

  protected deleteItemById<T>(id: string, params: IKeyValue = {}, path?: string): Observable<T> {
    return this.apiService.delete(`${this.getUrl(path)}/${id}`, params);
  }

  protected patchItem<T>(params: IKeyValue = {}, path?: string): Observable<T> {
    return this.apiService.patch(`${this.getUrl(path)}`, params);
  }

  protected patchItemById<T>(id: string, params: IKeyValue = {}, path?: string): Observable<T> {
    return this.apiService.patch(`${this.getUrl(path)}/${id}`, params);
  }

  private getUrl(path?: string): string {
    return path ? `${this.appServiceUrl}/${this.baseUrl}/${path}` : `${this.appServiceUrl}/${this.baseUrl}`;
  }
}
