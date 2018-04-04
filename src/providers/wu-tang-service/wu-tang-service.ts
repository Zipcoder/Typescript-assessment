import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuTangServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuTangServiceProvider {

  url = "fake.url"

  constructor(public http: HttpClient) {
  }

  wuTangIs():string{
    return "For the Children";
  }

  myFavoriteBand(){
    return this.http.get(this.url);
  }

  newBandILike(value){
    return this.http.post(this.url, value);
  }

}
