import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomHttpServProvider } from './custom-http-serv';


describe('CustomHttpService', () => {

  let service: CustomHttpServProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomHttpServProvider]
    });

    // inject the service

    service = TestBed.get(CustomHttpServProvider);
    httpMock = TestBed.get(HttpTestingController);
});

    it('should return for the children', () => {
        expect(service.wuTangls()).toBe('For the Children');
    });

    it('should get my favorite band name', () => {
        service.myFavoriteBand(1).subscribe((data: any) => {
          expect(data.name).toBe('Imagine Dragons');
        });

      });
      
     
      it('should get the correct band name part 2', () => {
        service.myFavoriteBand(1).subscribe((data: any) => {
          expect(data.name).toBe('Imagine Dragons');
        });
    
        const req = httpMock.expectOne(`http://replace.with.api/anything/1`, 'call to api');
        expect(req.request.method).toBe('GET');
        req.flush({
            name: 'Imagine Dragons',
            greeting: 'For the Children'
          });
      
          httpMock.verify();
      });
      it('should post the new band I like', () => {
  service.newBandILike<any>({ bandname: 'Queen' }).subscribe((data: any) => {
    expect(data.bandname).toBe('Queen');
  });

  const req = httpMock.expectOne(`http://replace.with.api/anything`, 'post to api');
  expect(req.request.method).toBe('POST');

  req.flush({
    bandname: 'Queen'
  });

  httpMock.verify();
});

    });
    

