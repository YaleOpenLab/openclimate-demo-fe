import Storage from './Storage';
import * as axios from 'axios';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export class Http {

    static get(path, data) {
        return from(
            axios({
                method: 'GET',
                url: `https://api.openx.solar/${path}`,
                params: data,
                headers: {
                    'Content-Type': 'application/x-www-form/urlencoded'
                }
            })
        );
    }

    static post(path, data) {
        return from(
            axios({
                method: 'POST',
                url: `https://api.openx.solar/${path}`,
                data: data,
                headers: {
                    'Content-Type': 'application/x-www-form/urlencoded'
                }
            })
        );

    }
}