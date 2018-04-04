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

  newBandILike<T>(item: any) {
    return this.httpClient.post<T>(`http://www.wu.tang/lover`, item);
  }

}
