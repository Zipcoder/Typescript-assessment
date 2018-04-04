import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WutangForeverProvider } from './wutangforever';
//import { providerDef } from '@angular/core';

describe('WuTangForeverProvider', () => {


  //inject the service
  let wutang = null;
  let HttpClient = null;
  describe('For the People', () => {
    it('should say For the Children', () => {
      let result = new WutangForeverProvider(HttpClient);
      expect(result.wuTang()).toEqual('For the Children')
    });
  });
  //-- 

  describe('get and post data', () => {
    let service: WutangForeverProvider;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [WutangForeverProvider]
      });
      service = TestBed.get(WutangForeverProvider);
      httpMock = TestBed.get(HttpTestingController);
    });
    it('should get the data successfully', () => {
      service.myFavoriteBand().subscribe((data: any) => {
        expect(data.band).toBe('Destinys Child');
      });

      const req = httpMock.expectOne('http://test.api.here/blahblah/1', "call to api");
      expect(req.request.method).toBe('GET');

      req.flush({
        band: 'Destinys Child'
      });

      httpMock.verify();
    });
    it('should post new data', () => {
      service.newBandILIke<any>({ newBand: 'Bey' }).subscribe((data: any) => {
        expect(data.newBand).toBe('Bey');
      });
      const req = httpMock.expectOne('http://test.api.here/blahblah',
        "post to api");
      expect(req.request.method).toBe('POST');

      req.flush({
        newBand: 'Bey'
      });

      httpMock.verify();
    });
  });
});
