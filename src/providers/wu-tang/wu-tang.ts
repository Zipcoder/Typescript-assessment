import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WuTangProvider {

  constructor(public httpClient: HttpClient) {
    
  }

  wuTangIs(){
    return 'For the Children';
  }

  myFavoriteBand(){
    return this.httpClient.get(`http://www.wu.tang/lover`);
  }

  newBandILike<T>(id: string) {
    return this.httpClient.get<T>(`http://www.wu.tang/lover/${id}`);
  }

}
