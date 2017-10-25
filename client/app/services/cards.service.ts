import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import unirest from 'unirest';

@Injectable()
export class CardsService {
  constructor(private http: Http) {
      console.log('postser');
  }

  getPosts() {
    // return unirest.get("")
    // .header("X-Mashape-Key", "8H1hVFLvFGmshgsDDQdruQsAtnAHp1xWKTrjsnGd6yrYXU5X7N")
    // .end(function (result) {
    //   console.log(result.status, result.headers, result.body);
    // });
    let headers = new Headers();
    headers.append('X-Mashape-Key', '8H1hVFLvFGmshgsDDQdruQsAtnAHp1xWKTrjsnGd6yrYXU5X7N');
    let opts = new RequestOptions();
    opts.headers = headers;
    var url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?cost=7'
    let attack = '?attack=2'
    let health = '?health=5'
    let cost = '?cost=8'


    return this.http.get(url, opts).map(
      res => res.json()
    );
  }
}
