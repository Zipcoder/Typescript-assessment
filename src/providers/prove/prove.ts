import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProveProvider {

  children: any;

  constructor() {
    
  }

  wuTangIs(){
    this.children = "For the Children";
    return this.children;
  }

}
