import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WuTangProvider } from './wu-tang';


describe('should print correctly', () => {

  it('should print For the Children', () => {

      expect(WuTangProvider.wuTangIs()).toEqual('For the Children');
    }
  );
});

describe('http calls', () => {

  let service: WuTangProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WuTangProvider]

    });

    service = TestBed.get(WuTangProvider);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should get the correct band name', () => {
    service.myFavoriteBand('SaidtheSky').subscribe((data: any) => {
      expect(data.name).toBe('Said the Sky');
    });

    const req = httpMock.expectOne(`http://google.com/SaidtheSky`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Said the Sky'
    });

    httpMock.verify();

  });

  it('should post the correct data', () => {
    service.post<any>({ firstname: 'firstname' }).subscribe((data: any) => {
      expect(data.firstname).toBe('firstname');
    });

    const req = httpMock.expectOne(`http://google.com/`, 'post to api');
    expect(req.request.method).toBe('POST');

    req.flush({
      firstname: 'firstname'
    });
    httpMock.verify();
  })

});
