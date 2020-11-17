import { Result } from './result';

export interface RootObject {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
}