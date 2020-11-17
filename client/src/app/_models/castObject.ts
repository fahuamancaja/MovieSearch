import { Crew } from './crew';

export interface RootObject {
    id: number;
    cast: any[];
    crew: Crew[];
}