import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GenreApiService } from './genre-api.service';

describe('GenreApiService', () => {
  let service: GenreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [        
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(GenreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
