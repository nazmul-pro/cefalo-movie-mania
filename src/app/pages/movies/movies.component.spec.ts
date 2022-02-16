import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of, Subject } from 'rxjs';
import { IGenre, IGenreApiResponse } from 'src/app/interfaces/genre.interface';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { GenreApiService } from 'src/app/services/genre-api.service';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MoviesComponent } from './movies.component';

const mockMovies: IMovie[] = [
  {
    id: 1,
    title: 'Movie 1',
  },
  {
    id: 2,
    title: 'Movie 2',
  },
  {
    id: 3,
    title: 'Movie 2',
  }
];

const mockGenres: IGenre[] = [
  {
    id: 1,
    name: 'Genre 1',
  },
  {
    id: 2,
    name: 'Genre 2',
  },
  {
    id: 3,
    name: 'Genre 2',
  },
  {
    id: 4,
    name: 'Genre 4',
  },
  {
    id: 5,
    name: 'Genre 5',
  },
  {
    id: 6,
    name: 'Genre 6',
  }
]
class MovieApiServiceStub {
  public getMoviesByGenreId(id: string, queryParams: any): Observable<IMovie[]> {
    return of(mockMovies);
  }
}

class GenreApiServiceStub {
  public getGenreList(id: string, queryParams: any): Observable<IGenreApiResponse> {
    return of({ genres: mockGenres });
  }
}

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let moveServiceUnderTest: MovieApiService;
  let genreServiceUnderTest = GenreApiService;

  beforeEach(async () => {
    const matSnackbarSpy =
      jasmine.createSpyObj('MatSnackbar', ['open']);
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [        
        HttpClientTestingModule,
      ],
      providers: [
        { provide: MovieApiService, useValue: new MovieApiServiceStub() },
        { provide: GenreApiService, useValue: new GenreApiServiceStub() },
        { provide: MatSnackBar, useValue: matSnackbarSpy },
      ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    moveServiceUnderTest = TestBed.get(MovieApiService);
    genreServiceUnderTest = TestBed.get(GenreApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('should call service getMoreMoviesByGenres', () => {
    const serviceSpy = spyOn<any>(moveServiceUnderTest, 'getMoviesByGenreId');
    component.genres = mockGenres;
    (<any>component).skip = 0;    
    component.getMoreMoviesByGenres();
    expect(serviceSpy).toHaveBeenCalled();
  });

  it('should call service getMoreMoviesByGenres 2 times', () => {
    const serviceSpy = spyOn<any>(moveServiceUnderTest, 'getMoviesByGenreId');
    component.genres = mockGenres;
    (<any>component).skip = 0;
    component.getMoreMoviesByGenres();
    component.getMoreMoviesByGenres(); // after this no genres msg will show
    component.getMoreMoviesByGenres();
    component.getMoreMoviesByGenres();
    component.getMoreMoviesByGenres(); // 5 times
    expect(serviceSpy).toHaveBeenCalledTimes(2);
  });
  
  it('should not call service getMoreMoviesByGenres', () => {
    const serviceSpy = spyOn<any>(moveServiceUnderTest, 'getMoviesByGenreId');
    component.genres = [];
    component.getMoreMoviesByGenres();
    expect(serviceSpy).not.toHaveBeenCalled();
  });

    
  it('should call service getgenreList', () => {
    const serviceSpy = spyOn<any>(genreServiceUnderTest, 'getGenreList').and.returnValue(of({genres: mockGenres}));  
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
  });


  it('should complete clearSubs$', () => {
    const clearSubs$: Subject<any> = (<any>component).clearSubs$;
    expect(clearSubs$).toBeTruthy();
    component.ngOnDestroy();
    expect(clearSubs$.isStopped).toBeTruthy();
  });
  
});
