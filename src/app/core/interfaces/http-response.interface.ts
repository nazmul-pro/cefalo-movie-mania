import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface IHttpOptionsCommon {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: string;
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'json' | 'text';
    withCredentials?: boolean;
  }
  
  export interface IHttpOptionsResponseJSON extends IHttpOptionsCommon {
    observe: 'body';
    responseType: 'json';
  }
  
  export interface IHttpOptionsResponseString extends IHttpOptionsCommon {
    observe: 'response';
    responseType: 'text';
  }
  