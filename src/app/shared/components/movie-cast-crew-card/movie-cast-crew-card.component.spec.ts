import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCastCrewCardComponent } from './movie-cast-crew-card.component';

describe('MovieCastCrewCardComponent', () => {
  let component: MovieCastCrewCardComponent;
  let fixture: ComponentFixture<MovieCastCrewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCastCrewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCastCrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
