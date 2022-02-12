import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListSliderComponent } from './genre-list-slider.component';

describe('GenreListSliderComponent', () => {
  let component: GenreListSliderComponent;
  let fixture: ComponentFixture<GenreListSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreListSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
