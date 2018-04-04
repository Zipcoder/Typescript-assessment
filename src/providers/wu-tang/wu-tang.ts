import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuTangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuTangProvider {

  url = "https://www.somewebsite.com"


  constructor(public http: HttpClient) {
    //console.log('Hello WuTangProvider Provider');
  }

  wuTangIs(): string {
return "For the Children";
  }

  myFavoriteBand() {
return this.http.get(this.url + '/tariq');
  }

  newBandILike(value: string) {
    return this.http.post(this.url + '/tariq', {value});
  }

}
