import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/do";

/*
  Generated class for the TestRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestRequestProvider {

  jasonTheJSON:string = '{ "name":"jason" }'

  constructor() {
    console.log('Hello TestRequestProvider Provider');
  }

  public wuTangIs(){
    return "For the Children";
  }

  // myFavoriteBand(){
  //   this.http.get("fakeurl");
  // }

}
