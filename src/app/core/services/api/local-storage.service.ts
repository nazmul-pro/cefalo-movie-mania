import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getItem( key: string ): any {
    const item = localStorage.getItem(key);
    return item && JSON.parse(item)
      ? JSON.parse(item)
      : null;
  }

  public clearAll(): void {
    localStorage.clear();
  }

  public clear(key: string): void {
    localStorage.removeItem(key);
  }
}
