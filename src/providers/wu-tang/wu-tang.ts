import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  constructor(public http: HttpClient) {

  }

  public static wuTangIs(): string {
    return 'For the Children';
  }

  myFavoriteBand<T> (id: any) {
    return this.http.get<T>(`http://google.com/${id}`);
  }

  post<T>(item: any) {
    return this.http.post<T>(`http://google.com/`, item);
  }

}
