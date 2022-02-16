import { TestBed } from '@angular/core/testing';
import { IMovie } from '../interfaces/movie.interface';

import { RecentlyViewedApiService } from './recently-viewed-api.service';

describe('RecentlyViewedApiService', () => {
  let service: RecentlyViewedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentlyViewedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should add and get recently viewed movie', () => {
    localStorage.clear();
    const movie = {id: 1, title: 'M1'};
    service.addMovieToRecentlyViewed(movie);
    expect(<IMovie>service.getAllMoviesFromRecentlyViewed()[0]).toBeTruthy();
  });
});
