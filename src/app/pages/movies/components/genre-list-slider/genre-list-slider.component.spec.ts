import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';

import { GenreListSliderComponent } from './genre-list-slider.component';

describe('GenreListSliderComponent', () => {
  let component: GenreListSliderComponent;
  let fixture: ComponentFixture<GenreListSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreListSliderComponent ],
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
    fixture = TestBed.createComponent(GenreListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.genres = [{id: 1, imageUrl: '', name: ''}];
    expect(component).toBeTruthy();
  });
});
