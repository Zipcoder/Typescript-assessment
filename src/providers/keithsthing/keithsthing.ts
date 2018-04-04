import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the KeithsthingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KeithsthingProvider {

  constructor(public http: HttpClient) {
    console.log('Hello KeithsthingProvider Provider');
  }


  wuTangIs() {
    return "For The Children";
  }


}
