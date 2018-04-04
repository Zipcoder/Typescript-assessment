import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WutangforeverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WutangforeverProvider {
  public butwhy: String;

  constructor(private httpClient: HttpClient) {
    this.butwhy = "For the Children";
  }

  wuTangls(){
    return this.butwhy;
  }

  myFavoriteBand() {
    return this.httpClient.get(`http://wu.tang.forever/anything/1`);
  }

  newBandILIke<T>(item: any) {
    return this.httpClient.post<T>(`http://wu.tang.forever/anything`, item);
  }
}
