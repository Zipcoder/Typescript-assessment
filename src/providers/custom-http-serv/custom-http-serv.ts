import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomHttpServProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomHttpServProvider {
  

  constructor(public httpClient: HttpClient) {
  }

  wuTangls() : string {
    return 'For the Children';
  }

  myFavoriteBand<T>(id: number) {
    return this.httpClient.get<T>(`http://replace.with.api/anything/${id}`);
  }

 newBandILike<T>(item: any) {
    return this.httpClient.post<T>(`http://replace.with.api/anything`, item);
  }

}
