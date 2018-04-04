import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DataProvider } from './data';

let wuTang = null;

describe('WuTangClan service', () => {

  beforeEach(() => {
    wuTang = new DataProvider();
  });

  it('should return a string', () => {
      let result = wuTang.wuTangIs();

      expect(result).toEqual('For the Children');
    }
  );
});
