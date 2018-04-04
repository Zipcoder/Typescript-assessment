import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DataProvider } from './data';



describe('DataProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataProvider]
    });
  });

  it('should get a string named WuTang',
  inject(
    [HttpTestingController, DataProvider],
    (httpMock: HttpTestingController, dataService: DataProvider) => {

    dataService.myFavoriteBand().subscribe((data: any) => {
      expect(data.name).toBe('WuTang');
    });

    const req = httpMock.expectOne(`http://replace.with.api/anything/`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'WuTang'
    });

    httpMock.verify();
  }));


  it('should post the new band',
  inject(
      [HttpTestingController, DataProvider],
      (httpMock: HttpTestingController, dataService: DataProvider) => {

      dataService.newBandILIke('theband').subscribe((data: any) => {
       expect(data.newband).toBe('theband');
     });

     const req = httpMock.expectOne(`http://replace.with.api/anything`, 'post to api');
     expect(req.request.method).toBe('POST');
     expect(req.request.url).toBe(`http://replace.with.api/anything`);

     req.flush({
       newband: 'theband',
     });

     httpMock.verify();
   }));

  });

describe('DataProvider', () => {
  it('should get a string that contains For the Children',() =>  {
    let test = new DataProvider(null).wuTangIs();
    expect(test).toEqual('For the Children');
});
});

