import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuProvider {
  public cream: String;

  constructor(private http: HttpClient) {
    this.cream = "For the Children";
    console.log('Hello WuProvider Provider its very lit');
  }

  wuTangIs(){
    return this.cream;
    //haha return cream tho
  }

  myFavoriteBand(){
    return this.http.get(`http://wutangclan.toolit/whatever/1`);
  }

  newBandILike<T>(value: any){
      return this.http.post<T>(`http://wutangclan.toolit/whatever/1`, value);
  }
}