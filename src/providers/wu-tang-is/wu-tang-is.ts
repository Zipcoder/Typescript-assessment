import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuTangIsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuTangIsProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello WuTangIsProvider Provider');
  // }

  answer: string;
 
  constructor() {
    this.answer = "For the Children";
  }
 
  wuTangIs(){
    return this.answer;
  }

  getAnswer(){
    return this.answer;
  }
 
  // getRandomAnswer(){
  //   return this.answer[this.getRandomInt(0, this.answer.length-1)];
  // }
 
  // getRandomInt(min, max){
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

}