import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MyServiceProvider {
url = "/Users/aprilrivera/Dev/April/Typescript-assessment/src/manifest.json";
  constructor(public http: HttpClient) {
    console.log('Hello MyServiceProvider Provider');
  }
getData(){
  const req = new HttpRequest('GET', this.url, {
    reportProgress: true
  });
  return this.http.request(req);
};

}
