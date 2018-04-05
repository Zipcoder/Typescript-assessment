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
      'should get band',
      inject(
        [HttpTestingController, MyServiceProvider],
        (httpMock: HttpTestingController, dataService: MyServiceProvider) => {
          const mockUsers = [
            { name: 'WuTang Clan'}
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
    it('should post new band', 
    inject(
      [HttpTestingController, MyServiceProvider],
    (httpMock: HttpTestingController, dataService: MyServiceProvider) => {
      
      dataService.newBandILike('Method Man').subscribe((data:any) => {
            expect(data.bandName).toBe('Method Man');
        });
        
        const req = httpMock.expectOne('/Users/aprilrivera/Dev/April/Typescript-assessment/src/manifest.json' ,'post to api');
        expect(req.request.method).toBe('POST');

        req.flush({
          bandName: 'Method Man'
        });
        httpMock.verify();
      }
    )
  );
});