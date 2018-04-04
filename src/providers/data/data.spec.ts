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

 it('should return a typeOf string',
   inject(
     [HttpTestingController, DataProvider],
     (httpMock: HttpTestingController, dataService: DataProvider) => {
       expect(typeof dataService.wuTangIs()).toBe('string');
     }
   )
);

 it('should return a string',
   inject(
     [HttpTestingController, DataProvider],
     (httpMock: HttpTestingController, dataService: DataProvider) => {
      
       var result = dataService.wuTangIs();
       expect(result).toEqual("For the Children");
     }
   )
);

 it('should get a string',
   inject(
     [HttpTestingController, DataProvider],
     (httpMock: HttpTestingController, dataService: DataProvider) => {
       const mockUsers = [
         { name: 'ReggaeBand'},
         { name: 'ZipCodeBand'}
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

 
 it('should post a new band',
   inject(
     [HttpTestingController, DataProvider],
     (httpMock: HttpTestingController, dataService: DataProvider) => {
       //const mockData2 = "Hello World";

       dataService.newBandILike('BestBand').subscribe((data: any) => {
         expect(data.firstname).toBe('BestBand');
       });

       const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users', 'post to api');
       expect(req.request.method).toBe('POST');

       req.flush({
         firstname: 'BestBand'
       });

       httpMock.verify();

     }
   )
);



});