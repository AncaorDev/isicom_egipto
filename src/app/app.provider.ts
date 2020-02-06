import {Injectable} from '@angular/core';
import { GlobalService } from './shared/global.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppProvider {
    constructor(public _global_srv:GlobalService) {

    }

    load() {
        return true;
        // return new Promise((resolve, reject) => {
        //     const queryString = window.location.search;
        //     const urlParams = new URLSearchParams(queryString);
        //     if(urlParams.has('key')) {
        //         resolve(urlParams.get('key'))
        //     }
        // })
    }
}
