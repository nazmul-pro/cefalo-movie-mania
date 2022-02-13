import { TestBed } from '@angular/core/testing';

import { GenreApiService } from './genre-api.service';

describe('GenreApiService', () => {
  let service: GenreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
