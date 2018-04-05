import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuTangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuTangProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WuTangProvider Provider');
  }

  wuTang() : string
  {
    return "For the children";
  }

  myFavoriteBand<T>(bandrank: number)
  {
    return this.http.get(`www.rankartist.com/${bandrank}`);
  }

  newBandILike<T>(item: any) {
        return this.http.post<T>(`www.rankartist.com`, item);
     }


}
