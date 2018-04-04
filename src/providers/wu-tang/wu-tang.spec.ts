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

    const req = httpMock.expectOne(`https://my-json-server.typicode.com/bth1994/fakeServer/db/SaidtheSky`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Said the Sky'
    });

    httpMock.verify();

  });

  it('should post the correct data', () => {
    service.newBandILike<any>({ newBand: 'Illenium' }).subscribe((data: any) => {
      expect(data.newBand).toBe('Illenium');
    });

    const req = httpMock.expectOne(`https://my-json-server.typicode.com/bth1994/fakeServer/db/`, 'post to api');
    expect(req.request.method).toBe('POST');

    req.flush({
      newBand: 'Illenium'
    });
    httpMock.verify();
  })

});
