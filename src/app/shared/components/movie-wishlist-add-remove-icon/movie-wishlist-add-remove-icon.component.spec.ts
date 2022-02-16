import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WISH_LIST_KEY } from 'src/app/constants/local-storage-keys.const';

import { MovieWishlistAddRemoveIconComponent } from './movie-wishlist-add-remove-icon.component';

describe('MovieWishlistAddRemoveIconComponent', () => {
  let component: MovieWishlistAddRemoveIconComponent;
  let fixture: ComponentFixture<MovieWishlistAddRemoveIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieWishlistAddRemoveIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWishlistAddRemoveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should add to watchlist', () => {
    localStorage.clear();
    component.movie = {id: 1, title: 'M1'};
    component.addOrRemove();
    const movie = JSON.parse(localStorage.getItem(WISH_LIST_KEY) || '');
    expect(movie).toBeTruthy();
  });

  it('should return true while check in wishlist', () => {
    localStorage.clear();
    component.movie = {id: 1, title: 'M1'};
    component.addOrRemove();
    expect(component.checkInWishList()).toBeTruthy();
  });
  
});
