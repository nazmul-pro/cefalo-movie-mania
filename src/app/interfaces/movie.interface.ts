import { IGenre } from "./genre.interface";

export interface IMovie {
    id: number;
    title?: string;
    poster_path?: string;
    release_date?: string;
}

export interface IMovieDetail {
    id: number;
    imdb_id: string;
    vote_average: number;
    overview: string;
    genres: IGenre[];
    backdrop_path: string;
    title?: string;
    poster_path?: string;
    release_date?: string;
    credits?: IMovieCredits;
}

export interface IMovieCredits {
    id: number;
    cast: ICastCrewPerson[];
    crew: ICastCrewPerson[];
}

export interface ICastCrewPerson {
    profile_path: string;
    name: string;
    known_for_department: string;
    department: string;
    job: string;
    character: string;
}

export interface IWishListMovie extends IMovie {
  date: Date;
}

export interface IRecentlyViewedMovie extends IMovie {
  visitedDate: Date;
}

export interface IMovieVideos {
  key: string;
  site: string;
  name: string;
  type: string;
  official: boolean;
  size: number;
}