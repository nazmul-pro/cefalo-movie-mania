import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  @Input() public sidenav: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sidenav);
    
  }

  public toggleSidenav(): void {
    console.log(this.sidenav);
    
    this.sidenav.toggle();
  }

}
