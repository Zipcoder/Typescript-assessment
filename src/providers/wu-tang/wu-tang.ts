import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WuTangProvider Provider');
  }

  wuTangIs(){
  	return "For the Children";
  }

  myFavoriteBand<T>(band: number){
  	return this.http.get<T>(`http://test.api.here/whatevs/${band}`);
  }

  newBandILIke<T>(item: any){
  	return this.http.post(`http://test.api.here/whatevs`, item);
  }


}
