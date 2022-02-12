import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: SideNavigationComponent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.sidenav);
    
  }

}
