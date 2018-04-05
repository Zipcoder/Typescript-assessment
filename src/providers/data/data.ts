import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  constructor(private http: HttpClient) {}



  myFavoriteBand<T>(id: any) {
    return this.http.get<T>(`http://replace.with.api/anything/${id}`);
  }


  newBandILIke<T>(value: any) {
    return this.http.post<T>(`http://replace.with.api/anything`, value);
  }
  public static wuTangIs(){
    return 'For the Children';
  }


}
