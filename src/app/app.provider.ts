import {Injectable} from '@angular/core';
import { GlobalService } from './shared/global.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppProvider {
    constructor(public _global_srv:GlobalService) {

    }

    load() {
        console.log('load');
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
}
