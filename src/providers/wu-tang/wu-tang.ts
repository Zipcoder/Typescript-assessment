import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuTangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuTangProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello WuTangProvider Provider');
  }

  wuTangls(): any {
    return "For the Children";
  }

  myFavoriteBand(){
    return this.httpClient.get('http://www.wu.tang/lover');
  }

  newBandILike<T>(item:any){
    return this.httpClient.post<T>(`http://www.wu.tang/lover`, item);
  }

}
