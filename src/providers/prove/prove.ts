import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProveProvider {

  children: any;

  constructor(public httpClient: HttpClient) {
    
  }

  wuTangIs(){
    this.children = "For the Children";
    return this.children;
  }

  myFavoriteBand<T>(item){
    return this.httpClient.get<T>(`localhost/8080/${item}`);
  }

}
