import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IMenu, MenuDataService } from 'src/app/core/services/api/menu-data.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationComponent {
  @Input() public sidenav: any;
  public menus: IMenu[] = [];
  constructor(private menuDataService: MenuDataService) {
    this.menus = menuDataService.getMenus();
  }

  public toggleSidenav(): void {
    this.sidenav.toggle();
  }

}
