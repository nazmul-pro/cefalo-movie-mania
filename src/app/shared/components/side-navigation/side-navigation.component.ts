import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavigationComponent {
  @ViewChild('sidenav') sidenav!: SideNavigationComponent;

}
