import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  answers: any;

  constructor() {
  
   this.answers = [
     'For the Children'
   ];
  }

  wuTangIs(){
    return this.answers;
  }

}








