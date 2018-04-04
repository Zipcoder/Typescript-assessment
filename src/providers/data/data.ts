import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  url = 'https://98fa00f4-f10f-4506-b1d7-6bc8cf9a694a.mock.pstmn.io';

  constructor(private http: HttpClient) {}

  getData() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });

    return this.http.request(req);
  }


  post(item: any , name?: string) {
    return this.http.post(this.url, {item, name});
  }


  wuTangIs(){
    return this.http.get(this.url);
  }


}
