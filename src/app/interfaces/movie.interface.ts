import { IGenre } from "./genre.interface";

export interface IMovie {
    id: number;
    title?: string;
    poster_path?: string;
    release_date?: string;
}

export interface IMovieDetail {
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