import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MovieDetailApiService } from './movie-detail-api.service';

describe('MovieDetailApiService', () => {
  let service: MovieDetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [        
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(MovieDetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
