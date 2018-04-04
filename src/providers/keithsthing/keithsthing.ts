import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';
import{catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

/*
  Generated class for the KeithsthingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KeithsthingProvider {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) {
    console.log('Hello KeithsthingProvider Provider');
  }


  wuTangIs() {
    return "For The Children";
  }

  myFavoriteBand() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });
    return this.http.request(req);
  }

  newBandILike(item: any){
    return this.http.post(this.url, item);
  }


}
