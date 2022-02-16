import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { IMenu, MenuDataService } from 'src/app/core/services/api/menu-data.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavigationComponent {
  @ViewChild('sidenav') sidenav!: SideNavigationComponent;
  public menus: IMenu[] = [];
  
  constructor(private menuDataService: MenuDataService) {
    this.menus = menuDataService.getMenus();
  }

}
