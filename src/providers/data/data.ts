import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataProvider {
  url = 'https://jsonplaceholder.typicode.com/users';
  postUrl = 'http://replace.with.api/anything';
  answer: string = null;

  constructor(private httpClient: HttpClient) {
    this.answer = 'For the Children'
  }

  wuTangIs() {
    return this.answer;
  }

  myFavoriteBand() {
    return this.httpClient.get(this.url);
  }

  newBandILike(name: string) {
    return this.httpClient.post(this.postUrl, {name})

  }
}


