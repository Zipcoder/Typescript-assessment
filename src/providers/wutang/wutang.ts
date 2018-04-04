import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WutangProvider {

  whoWuTangIsFor: any;

  constructor() {
    this.whoWuTangIsFor = "For the Children";
  }

  wuTangIs(){
    return this.whoWuTangIsFor;
  }

}
