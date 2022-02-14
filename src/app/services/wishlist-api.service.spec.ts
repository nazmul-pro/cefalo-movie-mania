import { TestBed } from '@angular/core/testing';

import { WishlistApiService } from './wishlist-api.service';

describe('WishlistApiService', () => {
  let service: WishlistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
