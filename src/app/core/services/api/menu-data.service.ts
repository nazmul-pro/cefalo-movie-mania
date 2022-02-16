import { Injectable } from '@angular/core';
export interface IMenu {
  name: string;
  routerLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  private menus: IMenu[] = [
    {
      name: 'Movies',
      routerLink: 'movies',
    },
    {
      name: 'Wish List',
      routerLink: 'wishlist',
    },
    {
      name: 'Recently Viewed',
      routerLink: 'recently-viewed',
    }
  ];

  public getMenus(): IMenu[] {
    return this.menus;
  }
}
