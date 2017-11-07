import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import unirest from 'unirest';

@Injectable()
export class CardsService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) {
    console.log('init card service');
  }

  getCards(query: object): Observable<any> {
    return this.http.get('/api/card', {params: query}).map(res => res.json());
  }

  countCards(): Observable<any> {
    return this.http.get('/api/cards/count');
  }
}
