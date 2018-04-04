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

    service = TestBed.get(WuTangProvider);
    httpMock = TestBed.get(HttpTestingController);
  });

    it('should return For the Children to be a string', () => {
        let result = service;
        expect(typeof service.wuTangIs()).toBe('string');
    });

    it('should get my favorite band', () => {
        service.myFavoriteBand().subscribe((data: any) => {
          expect(data.band).toBe('Black Sabbath');
        });
    
        const req = httpMock.expectOne(`http://www.wu.tang/lover`);
        expect(req.request.method).toBe('GET');
    
        req.flush({
          band: 'Black Sabbath'
        });
    
        httpMock.verify();
    
        });

        it('should post new Band I Like', () => {
            service.newBandILike<any>({ band: 'Wu Tang' }).subscribe((data: any) => {
              expect(data.band).toBe('Wu Tang');
            });
          
            const req = httpMock.expectOne(`http://www.wu.tang/lover`, 'post to api');
            expect(req.request.method).toBe('POST');
          
            req.flush({
              band: 'Wu Tang'
            });
          
            httpMock.verify();
          });
});