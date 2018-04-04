import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WuTangProvider } from './wu-tang';

describe('WuTangService', () => {

  let service: WuTangProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WuTangProvider]
    });

    // inject the service
    service = TestBed.get(WuTangProvider);
    httpMock = TestBed.get(HttpTestingController);
  });

    it('should return For the Children to be a string', () => {
        let result = service;
        expect(typeof service.wuTangIs()).toBe('string');
    });

      it('should get my favorite band', () => {
    service.myFavoriteBand(1).subscribe((data: any) => {
      expect(data.band).toBe('Black Sabbath');
    });

    const req = httpMock.expectOne(`http://replace.with.api/anything/1`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      band: 'Black Sabbath'
    });

    httpMock.verify();

    });
});