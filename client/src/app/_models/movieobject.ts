import { Cast } from './cast';
import { Trailer } from './trailer';

export interface MovieObject {
    id: string;
    title: string;
    year: string;
    length: string;
    rating: string;
    rating_votes: string;
    poster: string;
    plot: string;
    trailer: Trailer;
    cast: Cast[];
    technical_specs: string[][];
}