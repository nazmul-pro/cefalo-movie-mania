import { TestBed } from '@angular/core/testing';
import { WISH_LIST_KEY } from '../constants/local-storage-keys.const';
import { IMovie } from '../interfaces/movie.interface';

import { WishlistApiService } from './wishlist-api.service';

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
]

describe('WishlistApiService', () => {
  let service: WishlistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should get all wishlist movies from local', () => {
    localStorage.clear();

    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(mockMovies));
    expect(<IMovie[]>service.getAllMoviesFromWishlist()).toEqual(mockMovies);
  });

  it('should get a movie from wishlist by id from local', () => {
    localStorage.clear();

    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(mockMovies));
    expect(<IMovie>service.getMovieFromWishlist(1)).toEqual(mockMovies[0]);
  });

  it('should add a movie to wishlist by id from local', () => {
    localStorage.clear();
    service.addOrRemoveMovieToWishlist(mockMovies[0]);
    expect(<IMovie>service.getMovieFromWishlist(1)).toBeTruthy();
  });
  
  it('should remove a movie from wishlist by id from local', () => {
    localStorage.clear();

    service.addOrRemoveMovieToWishlist(mockMovies[0]); // add

    service.addOrRemoveMovieToWishlist(mockMovies[0]); // to be delete
    expect(<IMovie>service.getMovieFromWishlist(1)).toBeFalsy();
  });
});
