import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MyServiceProvider } from '../../providers/my-service/my-service';

let wuTangClan = null;
let HttpClient = null;
describe('Testing wuTangIs', () => {
  beforeEach(() => {
    wuTangClan = new MyServiceProvider(HttpClient);
  });

  it('should return for the children', () => {
    let result = wuTangClan.wuTangIs();
  expect(result).toBe("For the children");
  });
});

describe('MyServiceProvider', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MyServiceProvider ]
      });
    });
   
    it(
      'should get users',
      inject(
        [HttpTestingController, MyServiceProvider],
        (httpMock: HttpTestingController, dataService: MyServiceProvider) => {
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
   });
    

    