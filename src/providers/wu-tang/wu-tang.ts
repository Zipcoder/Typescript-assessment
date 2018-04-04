import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuTangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuTangProvider {
  httpClient: any;
  url = `http://replace.with.api/anything/WuTang`;
  posturl =`http://replace.with.api/anything/newBand`;

  constructor(public http: HttpClient) {
    console.log('Hello WuTangProvider Provider');
  }

  static wuTangls(): any {
    return "For the Children";
  }

  myFavoriteBand() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });

    return this.http.request(req);
  }
  
  newBandILIke(band: string) {
    const req = new HttpRequest('POST', this.url, {
      reportProgress: true
    });

    return this.http.post(this.posturl, {band});

  }

}
