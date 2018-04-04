import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WutangForeverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WutangForeverProvider {

  constructor(public http: HttpClient) {
    
  }

  wuTang(){
    console.log("For the Children");
  }

  myFavoriteBand(){
    
  }

}
