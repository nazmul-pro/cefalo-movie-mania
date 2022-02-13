import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IKeyValue } from '../../interfaces/generic.interface';
import { IHttpOptionsCommon, IHttpOptionsResponseString, IHttpOptionsResponseJSON } from '../../interfaces/http-response.interface';

export class ApiServiceHttpParameterCodec implements HttpParameterCodec {
  public readonly encodeKey = (key: string | number | boolean) => encodeURIComponent(key);
  public readonly encodeValue = (key: string | number | boolean) => encodeURIComponent(key);
  public readonly decodeKey = (key: string) => decodeURIComponent(key);
  public readonly decodeValue = (key: string) => decodeURIComponent(key);
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private static readonly encodeGetParams = (params: IKeyValue) =>
    Object.getOwnPropertyNames(params)
      .reduce(
        (acc, paramKey) => acc.set(paramKey, params[paramKey]),
        new HttpParams({ encoder: new ApiServiceHttpParameterCodec() }),
      );

  constructor(private httpClient: HttpClient) {
  }

  public get(url: string, params: IKeyValue = {}, headers: IKeyValue = {}): Observable<any> {
    return this.httpClient.get(url, { params: ApiService.encodeGetParams(params), headers: headers });
  }

  public post(url: string, body: IKeyValue = {}, options?: IHttpOptionsCommon): Observable<any> {
    if (options && this.isResponseText(options)) {
      // tslint:disable-next-line: no-useless-cast
      return this.httpClient.post(url, body, <IHttpOptionsResponseString>options);
    }

    return this.httpClient.post(url, body, <IHttpOptionsResponseJSON>options);
  }

  public put(url: string, params: IKeyValue = {}): Observable<any> {
    return this.httpClient.put(url, params);
  }

  public patch(url: string, params: IKeyValue = {}): Observable<any> {
    return this.httpClient.patch(url, params);
  }

  public delete(url: string, params: IKeyValue = {}): Observable<any> {
    return this.httpClient.delete(url, { params });
  }

  private isResponseText(options: IHttpOptionsCommon): options is IHttpOptionsResponseString {
    return options.responseType === 'text';
  }

}
