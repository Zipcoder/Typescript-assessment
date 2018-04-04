import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WuTangProvider } from './wu-tang';

describe('CustomHttpService', () => {

  let service: WuTangProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WuTangProvider]
    });

    // inject the service

    service = TestBed.get(WuTangProvider);
    httpMock = TestBed.get(HttpTestingController);
  });
//STRING
  it('should return a string', () => {
    expect(service.wuTangls()).toBe('For the Children');
 });
 //GET
 it('should return your favorite band', () => {
    service.myFavoriteBand().subscribe((data: any) => {
      expect(data.band).toBe('deadmouse');
    });

    const req = httpMock.expectOne(`http://www.wu.tang/lover`);
    expect(req.request.method).toBe('GET');

    req.flush({
      band: 'deadmouse'
    });

    httpMock.verify();
  });

  it('should post the correct data', () => {
    service.newBandILike<any>({ band: 'flux pavilion' }).subscribe((data: any) => {
      expect(data.band).toBe('flux pavilion');
    });
  
    const req = httpMock.expectOne(`http://www.wu.tang/lover`, 'post to api');
    expect(req.request.method).toBe('POST');
  
    req.flush({
      band: 'flux pavilion'
    });
  
    httpMock.verify();
  });

});


