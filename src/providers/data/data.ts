import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataProvider {
  
  url = 'https://jsonplaceholder.typicode.com/users';

 constructor(private http: HttpClient) {}

 wuTangIs(){
   return "For the Children";
 }
 myFavoriteBand() {
   const req = new HttpRequest('GET', this.url, {
     reportProgress: true
   });

   return this.http.request(req);
 }
 newBandILike<T>(item:string){
   return this.http.post<T>(this.url,item);
 }
}