import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";

@Injectable()
export class wuTangProvider {
  url = '/Users/madelinebowe/Dev/IonicProjects/Typescript-assessment/src/assets/mock/mock.json';

  constructor(private http: HttpClient) {}

  wuTangIs():String {
    return "For the Children"
  }

  myFavoriteBand() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  newBankILike<T>(item: any) {
    return this.http.post<T>(this.url, item);
  }


}
