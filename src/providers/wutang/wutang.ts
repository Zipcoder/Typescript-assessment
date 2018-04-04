import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WutangProvider {

  whoWuTangIsFor: any;

  constructor(private httpClient: HttpClient) {
    this.whoWuTangIsFor = "For the Children";
  }

  wuTangIs(){
    return this.whoWuTangIsFor;
  }

  myFavoriteBand<T>(id: number) {
    return this.httpClient.get<T>(`http://www.mocky.io/v2/5185415ba171ea3a00704eed/${id}`)
  }

  newBandILike<T>(band: any) {
    return this.httpClient.post<T>(`http://www.mocky.io/v2/5185415ba171ea3a00704eed/`, band)
  }

}
