import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WutangForeverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WutangForeverProvider {


  constructor(public httpClient: HttpClient) {

  }

  wuTang() {
    return "For the Children";
  }

  
  myFavoriteBand() {
    return this.httpClient.get(`http://test.api.here/blahblah/1`);
  }

  newBandILIke<T>(item: any) {
    return this.httpClient.post(`http://test.api.here/blahblah`, item);
  }

}
