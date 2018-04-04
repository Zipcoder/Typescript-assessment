import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataService {
 url = '/Users/kibrettecle/Dev/Ionic-Disappointment-example/src/assets/mock/manifest.json';

 constructor(private http: HttpClient) {}

 getData() {
   const req = new HttpRequest('GET', this.url, {
     reportProgress: true
   });

   return this.http.request(req);
 }
 post<T>(item:any){
   return this.http.post<T>(`/Users/kibrettecle/Dev/Ionic-Disappointment-example/src/assets/mock/manifest.json`,item);
 }
}