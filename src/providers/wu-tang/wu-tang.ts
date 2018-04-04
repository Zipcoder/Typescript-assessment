import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  constructor(public http: HttpClient) {

  }

  public static wuTangIs(): string {
    return 'For the Children';
  }

  public myFavoriteBand<T> (id: any) {
    return this.http.get<T>(`https://my-json-server.typicode.com/bth1994/fakeServer/db/${id}`);
  }

  public newBandILike<T>(item: any) {
    return this.http.post<T>(`https://my-json-server.typicode.com/bth1994/fakeServer/db/`, item);
  }

}
