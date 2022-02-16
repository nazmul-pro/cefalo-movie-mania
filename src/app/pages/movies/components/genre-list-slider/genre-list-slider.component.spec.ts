import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UrlPaths } from 'src/app/enums/url-paths.enum';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';

import { GenreListSliderComponent } from './genre-list-slider.component';

describe('GenreListSliderComponent', () => {
  let component: GenreListSliderComponent;
  let fixture: ComponentFixture<GenreListSliderComponent>;
  const routerSpy =
  jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreListSliderComponent ],
      imports: [        
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        SharedUiModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1, // represents the movieId
              },
            },
            params: of([])
          }
        },
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

  it('router should go to genre page', () => {
    const routerSpy = TestBed.get(Router);
    const activatedRoute = TestBed.get(ActivatedRoute);
    component.gotoGenre(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith([UrlPaths.GENRES, 1], { relativeTo: activatedRoute});
  });

  it('should append image url to each genre', () => {
    component.genres = [{id: 1, name: 'G1'}];
    setTimeout(() => {
      expect(component.genres[0].imageUrl).toBeTruthy();
    }, 1000);   
  });

  it('should make slider group based on split value', () => {
    (<any>component).splitGenreBy = 1;
    component.genres = [{id: 1, name: 'G1'}, {id: 2, name: 'G2'}, {id: 2, name: 'G3'}];
    setTimeout(() => {
      expect(component.genres.length).toEqual(2);
    }, 1000);   
  });

  it('should return id by track by fn', () => {  
    expect(component.trackByFn(0, {id: 1})).toEqual(1);
  });

  

});
