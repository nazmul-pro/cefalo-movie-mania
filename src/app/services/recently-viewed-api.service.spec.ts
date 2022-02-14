import { TestBed } from '@angular/core/testing';

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
});
