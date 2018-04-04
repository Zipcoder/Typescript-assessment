import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MyServiceProvider {
url = "/Users/aprilrivera/Dev/April/Typescript-assessment/src/manifest.json";
public wuTang: string;  

constructor(public http: HttpClient) {
    this.wuTang = "For the children";
  }
wuTangIs(){
return this.wuTang;
}

myFavoriteBand(){
  const req = new HttpRequest('GET', this.url, {
    reportProgress: true
  });
return this.http.request(req);
};

}
