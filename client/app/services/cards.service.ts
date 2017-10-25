import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CardsService {

    constructor(private http: Http) {
        console.log('postser');
    }

    getPosts() {
        return this.http.get('https://api.hearthstonejson.com/v1/21517/enUS/cards.json')
            .map(res => res.json());
    }
}