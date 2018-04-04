import { wuTangProvider } from './wuTangProvider';
import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

let wuTang = null;

describe('wuTangProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [wuTangProvider]
    });
  });

  it('should return a string', () => {
      expect(typeof wuTang.wuTangIs()).toBe('string');
    }
  );
  it(
    'should get favorite band',
    inject(
      [HttpTestingController, wuTangProvider],
      (httpMock: HttpTestingController, wuTang: wuTangProvider) => {
        const mockbands = [
          { name: 'RHCP'},
          { name: 'Beatles'}

        ];

        wuTang.myFavoriteBand().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockbands);
          }
        });

        const mockReq = httpMock.expectOne(wuTang.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.method).toBe('GET');
        mockReq.flush(mockbands);

        httpMock.verify();
      }
    )
  );
  it(
    'should post the correct data',
    inject(
      [HttpTestingController, wuTangProvider],
      (httpMock: HttpTestingController, wuTang: wuTangProvider) => {
        const mockData = 'Favorite Band';

        wuTang.newBankILike('Favorite Band').subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockData);
          }
        });

        const mockTest = httpMock.expectOne(wuTang.url);
        expect(mockTest.cancelled).toBeFalsy();
        expect(mockTest.request.method).toBe('POST');
        mockTest.flush(mockData);

        httpMock.verify();
      }
    )
  )

});
