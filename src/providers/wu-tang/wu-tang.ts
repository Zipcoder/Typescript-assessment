import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WuTangProvider {

  constructor(public http: HttpClient) {

  }

  wuTangIs(): string {
    return 'For the Children';
  }

}
