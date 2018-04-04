import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  url = '/Users/jessicacampbell/Dev/Ionic-Disappointment-example/src/assets/MockData/manifest.json';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  wuTangIs(){
    return "For the Children";
  }
  getMyFavoriteBand() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });
    console.log(this.http.request(req));
    return this.http.request(req);
    
  }
  newBandILike<T>(item:any){
    return this.http.post<T>(this.url, item);
}

}
