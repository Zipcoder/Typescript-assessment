import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DataProvider } from './data';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataProvider]
    });
  });

  it('should get favoriteBand',
    inject(
      [HttpTestingController, DataProvider],
      (httpMock: HttpTestingController, dataService: DataProvider) => {
        const mockUsers = [
          { name: 'Bob', website: 'www.yessss.com' },
          { name: 'Juliette', website: 'nope.com' }
        ];

        dataService.myFavoriteBand(1).subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(`http://replace.with.api/anything/1`);

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
    dataService.newBandILIke('Wu Tang').subscribe((data: any) => {
      expect(data.value).toBe('Wu Tang');

    });

    const req = httpMock.expectOne(`http://replace.with.api/anything`, 'post to api');
    expect(req.request.method).toBe('POST');

    req.flush({
      value: 'Wu Tang'
    });

    httpMock.verify();
  }));

});

describe('simple print', () => {
  it('should print For the Children', () => {
    expect(DataProvider.wuTangIs()).toEqual('For the Children');
  });
});
