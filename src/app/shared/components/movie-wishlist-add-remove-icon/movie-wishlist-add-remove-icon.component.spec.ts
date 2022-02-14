import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
