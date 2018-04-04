import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  constructor(public http: Http) {
  }

  public wuTangIs(): string {
  	return "For the Children";
  }
}
