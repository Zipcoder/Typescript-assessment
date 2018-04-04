import { KeithsthingProvider } from './keithsthing';
import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
describe('first test', () => {
 
    it('should do nothing', () => {
 
        expect(true).toBeTruthy();
 
    });
 
});




beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [KeithsthingProvider]
    })
})

describe('test wutang method',()=>{
    it ('should return string',inject([HttpTestingController, KeithsthingProvider],
       ( httpMock: HttpTestingController, 
        provider: KeithsthingProvider)=>{
            expect(provider.wuTangIs).toMatch("For The Children")
    })
);
})

it(
    'should Get users',
    inject(
      [HttpTestingController, KeithsthingProvider],
      (
        httpMock: HttpTestingController,
        provider: KeithsthingProvider
      ) => {
          const mockUsers = [
              { name: 'Bob', website: 'www.yessss.com' },
              { name: 'Juliette', website: 'nope.com' }
            ];
            
            provider.myFavoriteBand().subscribe((event: HttpEvent<any>) => {
              switch (event.type) {
                case HttpEventType.Response:
                  expect(event.body).toEqual(mockUsers);
              }
            });
            
            const mockReq = httpMock.expectOne(provider.url);
            expect(mockReq.cancelled).toBeFalsy();
            expect(mockReq.request.responseType).toEqual('json');
            
            mockReq.flush(mockUsers);
            
            httpMock.verify();
      })
  );
  describe('test Post method', () => {
      it('should POST a JSON representation of a search to the server', inject([HttpTestingController, KeithsthingProvider], 
          (httpMock: HttpTestingController, provider: KeithsthingProvider) => {
              provider.newBandILike({item:'Keith'}).subscribe((data: any) => {
                  expect(data.item).toBe('Keith');
              })
  
              const mockReq = httpMock.expectOne(provider.url);
                  expect (mockReq.cancelled).toBeFalsy();
                  expect(mockReq.request.method).toBe('POST');
                  expect(mockReq.request.url).toBe('https://jsonplaceholder.typicode.com/users');
                  
              mockReq.flush({item:'Keith'});
              httpMock.verify();
  
      })
      );
  });
  

