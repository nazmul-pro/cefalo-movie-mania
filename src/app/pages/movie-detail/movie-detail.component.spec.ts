import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { IListResApi } from 'src/app/core/interfaces/api.interface';
import { UrlPaths } from 'src/app/enums/url-paths.enum';
import { IMovie, IMovieCredits, IMovieDetail, IMovieVideos } from 'src/app/interfaces/movie.interface';
import { MovieDetailApiService } from 'src/app/services/movie-detail-api.service';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';

import { MovieDetailComponent } from './movie-detail.component';

class MovieDetailApiServiceStub {
  public getMovieDetailById(id: number): Observable<IMovieDetail> {
    return of();
  }

  public getMovieCreditsById(id: number): Observable<IMovieCredits> {
    return of();
  }

  public getRecommendedById(id: number): Observable<IListResApi<IMovie[]>> {
    return of();
  }
  
  public getVideosById(id: number): Observable<IListResApi<IMovieVideos[]>> {
    return of();
  }

}


describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let movieDetailServiceUnderTest: MovieDetailApiService;
  const routerSpy =
  jasmine.createSpyObj('Router', ['navigate']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      imports: [        
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        SharedUiModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MovieDetailApiService, useValue: new MovieDetailApiServiceStub() },
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
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    movieDetailServiceUnderTest = TestBed.get(MovieDetailApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('router should go to genre page', () => {
    const routerSpy = TestBed.get(Router);
    component.gotoGenre(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith([`${UrlPaths.MOVIES}/${UrlPaths.GENRES}`, 1]);
  });

  it('should complete clearSubs$', () => {
    const clearSubs$: Subject<any> = (<any>component).clearSubs$;
    expect(clearSubs$).toBeTruthy();
    component.ngOnDestroy();
    expect(clearSubs$.isStopped).toBeTruthy();
  });
  
  it('should call service getMoreMoviesByGenres', () => {
    const serviceSpy = spyOn<any>(movieDetailServiceUnderTest, 'getMovieDetailById');
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
    expect(serviceSpy).toHaveBeenCalledWith(1);
  })

  it('should call service getRecommendedById', () => {
    const serviceSpy = spyOn<any>(movieDetailServiceUnderTest, 'getRecommendedById');
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
    expect(serviceSpy).toHaveBeenCalledWith(1);
  })

  it('should call service getMovieCreditsById', () => {
    const serviceSpy = spyOn<any>(movieDetailServiceUnderTest, 'getMovieCreditsById');
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
    expect(serviceSpy).toHaveBeenCalledWith(1);
  })

});
