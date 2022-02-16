import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { TopNavigationComponent } from './top-navigation.component';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should toggle', () => {
    let sidenavOpened = false;
    component.sidenav = {
      toggle: () => { sidenavOpened = !sidenavOpened }
    };
    component.toggleSidenav()
    expect(sidenavOpened).toBeTruthy();
  });
});
