export interface IGenre {
    id: number;
    name: string;
    imageUrl?: string;
}

export interface IGenreApiResponse {
    genres: IGenre[];
}