import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WutangforeverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WutangforeverProvider {
  public butwhy: String;

  constructor() {
    this.butwhy = "For the Children";
  }

  wuTangls(){
    return this.butwhy;
  }

}
