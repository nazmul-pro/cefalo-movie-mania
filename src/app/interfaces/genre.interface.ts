import { IMovie } from "./movie.interface";

export interface IGenre {
    id: number;
    name: string;
    imageUrl?: string;
    movies?: IMovie[];
}

export interface IGenreApiResponse {
    genres: IGenre[];
}

