import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationComponent {
  @Input() public sidenav: any;

  public toggleSidenav(): void {
    this.sidenav.toggle();
  }

}
