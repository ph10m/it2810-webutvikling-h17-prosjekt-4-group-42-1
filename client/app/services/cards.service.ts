import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import unirest from 'unirest';

@Injectable()
export class CardsService {
  constructor(private http: Http) {
      console.log('postser');
  }

  getPosts(filter) {
    // return unirest.get("")
    // .header("X-Mashape-Key", "8H1hVFLvFGmshgsDDQdruQsAtnAHp1xWKTrjsnGd6yrYXU5X7N")
    // .end(function (result) {
    //   console.log(result.status, result.headers, result.body);
    // });
    let headers = new Headers();
    headers.append('X-Mashape-Key', '8H1hVFLvFGmshgsDDQdruQsAtnAHp1xWKTrjsnGd6yrYXU5X7N');
    const opts = new RequestOptions();
    opts.headers = headers;
    let url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?';
    // const attack = '&attack=10';
    // const health = '&health=10';
    // const cost = '&cost=5';
    // const type = '&type=Spell';
    const collectible = '&collectible=1';

    url += filter + collectible;


    return this.http.get(url, opts).map(
      res => res.json()
    );
  }
}
