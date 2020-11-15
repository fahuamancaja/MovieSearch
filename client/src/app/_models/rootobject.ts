import { Title } from '@angular/platform-browser';
import { Company } from './company';
import { Name } from './name';

export interface RootObject {
    titles: Title[];
    names: Name[];
    companies: Company[];
}