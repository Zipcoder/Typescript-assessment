import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataProvider {
  url = 'https://jsonplaceholder.typicode.com/users';
  postUrl = 'http://replace.with.api/anything';

  constructor() {

  }

  wuTangIs() {
    return 'For the Children';
  }


}


