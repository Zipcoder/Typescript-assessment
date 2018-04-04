import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  answers: any;
  url = 'https://jsonplaceholder.typicode.com'; // fake REST API for testing 

  constructor(private http: HttpClient) { // added private to test for url
  
  }

  wuTangIs(){
    return 'For the Children';
  }

  myFavoriteBand(){
    const req = new HttpRequest('GET', this.url,{
      reportProgress:true
    });
    return this.http.request(req);
  }

}








