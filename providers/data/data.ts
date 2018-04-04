import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataProvider {
  url = 'https://jsonplaceholder.typicode.com/users';
  postUrl = 'http://replace.with.api/anything';

  constructor(private http: HttpClient) {
  }

  getData() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  post(item: any, name: string) {
    return this.http.post(this.postUrl, {item, name});
  }

}
