import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  constructor(public http: HttpClient) {
  }

  wuTangIs(): string {
    return "For the Children";
  }

  myFavoriteBand<T>(bandrank: number) {
    return this.http.get(`www.bigbandapi.com/${bandrank}`);
  }

  newBandILike<T>(item: any) {
    return this.http.post<T>(`www.bigbandapi.com`, item);
  }

}
