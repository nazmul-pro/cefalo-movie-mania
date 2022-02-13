import { Injectable } from '@angular/core';
import { MAX_PAGE_NUMBER, MIN_PAGE_NUMBER } from 'src/app/constants/api-params.const';
import { MOVIE_GENRE_PARAMS_KEY } from 'src/app/constants/local-storage-keys.const';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public static getRandomMoviePageNumber(genreId: number): number {
    const params = UtilService.getLocalParams();
    const pageInfo = params.find((g: any) => g.genreId === genreId)?.pageInfo;
    return pageInfo ? 
      Math.floor(Math.random() * (pageInfo.total_pages > MAX_PAGE_NUMBER ? MAX_PAGE_NUMBER : pageInfo.total_pages)) + MIN_PAGE_NUMBER : MIN_PAGE_NUMBER;
  }

  public static setMovieParamsWithGenreToLocal(genreId: number, pageInfo: any): void {
    const params = UtilService.getLocalParams();
    const idx = params.findIndex((g: any) => g.genreId === genreId);
    if (idx > -1) {
      params[idx].pageInfo = pageInfo;
    } else {
      params.push({genreId, pageInfo});
    }
    localStorage.setItem(MOVIE_GENRE_PARAMS_KEY, JSON.stringify(params));
  }

  private static getLocalParams(): any {
    const localParams = localStorage.getItem(MOVIE_GENRE_PARAMS_KEY);
    const params = localParams ? JSON.parse(localParams) : [];
    return params;
  }
}
