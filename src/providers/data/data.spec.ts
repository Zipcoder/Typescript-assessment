import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DataProvider } from './data';

let wuTang = null;
let HttpClient = null;

describe('WuTangClan service', () => {

  beforeEach(() => {
    wuTang = new DataProvider(HttpClient);
  });

  it('should return a string', () => {
      let result = wuTang.wuTangIs();

      expect(result).toEqual('For the Children');
    }
  );

  describe('DataProvider', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DataProvider]
      });
    });

    it(
      'should get users',
      inject(
        [HttpTestingController, DataProvider],
        (httpMock: HttpTestingController, dataService: DataProvider) => {
          const mockUsers = [
            { name: 'Bob', website: 'www.yessss.com' },
            { name: 'Juliette', website: 'nope.com' }
          ];

          dataService.myFavoriteBand().subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toEqual(mockUsers);
            }
          });

          const mockReq = httpMock.expectOne(dataService.url);

          expect(mockReq.cancelled).toBeFalsy();
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(mockUsers);

          httpMock.verify();
        }
      )
    );

    it('should post the correct data',
      inject(
        [HttpTestingController, DataProvider],
        (httpMock: HttpTestingController, dataService: DataProvider) => {
          dataService.newBandILike('Imagine Dragons').subscribe((data: any) => {
            expect(data.name).toBe('Imagine Dragons');

          });
          const req = httpMock.expectOne(`http://replace.with.api/anything`, 'post to api');
          expect(req.request.method).toBe('POST');

          req.flush({
            name: 'Imagine Dragons'
          });

          httpMock.verify();
        }));
  });
});
