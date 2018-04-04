import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  url = 'https://jsonplaceholder.typicode.com/users';
  posturl = 'http://replace.with.api/anything';

  constructor(private http: HttpClient) {}

  getData() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  wuTangIs():string{
    return 'For the Children';
  }
  myFavoriteBand() {
    return this.http.get(`http://replace.with.api/anything/`);
  }

  newBandILIke(newband:string) {
    return this.http.post(this.posturl, {newband});
  }
}
