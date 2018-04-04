import { DataProvider } from './data';
import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DataProvider]
      });
    });
   describe('test WuTang', () => {
           it('should return for the children',
      inject(
        [HttpTestingController, DataProvider],
        (httpMock: HttpTestingController, dataProvider: DataProvider) => {
            expect(dataProvider.wuTangIs).toMatch("For the Children");
      })
   
    );
   })

   it(
    'should get users',
    inject(
      [HttpTestingController, DataProvider],
      (httpMock: HttpTestingController, dataService: DataProvider) => {
        const mockUsers = [
          { name: 'Bob', website: 'www.yessss.com' },
          { name: 'Juliette', website: 'nope.com' }
        ];
 
        dataService.getMyFavoriteBand().subscribe((event: HttpEvent<any>) => {
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

  it('should post the correct item',
  inject(
    [HttpTestingController, DataProvider],
    (httpMock: HttpTestingController, dataService: DataProvider) => {
 
      dataService.newBandILike({ firstname: 'firstname' }).subscribe((data: any) => {
        expect(data.firstname).toBe('firstname');
      });
 
      const req = httpMock.expectOne('/Users/jessicacampbell/Dev/Ionic-Disappointment-example/src/assets/MockData/manifest.json', 'post to api');
      expect(req.request.method).toBe('POST');
 
      req.flush({
        firstname: 'firstname'
      });
 
      httpMock.verify();
 
    }
  )
)