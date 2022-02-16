import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';

import { MovieGenreComponent } from './movie-genre.component';

describe('MovieGenreComponent', () => {
  let component: MovieGenreComponent;
  let fixture: ComponentFixture<MovieGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGenreComponent ],
      imports: [        
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        SharedUiModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
