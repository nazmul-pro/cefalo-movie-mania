import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHolderWithGroupTitleComponent } from './movies-holder-with-group-title.component';

describe('MoviesHolderWithGroupTitleComponent', () => {
  let component: MoviesHolderWithGroupTitleComponent;
  let fixture: ComponentFixture<MoviesHolderWithGroupTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesHolderWithGroupTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesHolderWithGroupTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
