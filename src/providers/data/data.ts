import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {


  constructor(public http: HttpClient) {
    
  }
  public static wuTangIs(){
return 'For the Children';
  }
  myFavoriteBand(){
    return this.http.get('https://jsonplaceholder.typicode.com/wuTangIs')
  }

  newBandILike(value:any){
    return this.http.post('https://jsonplaceholder.typicode.com/wuTangIs',value)
  }





}
