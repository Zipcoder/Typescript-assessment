import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WutangForeverProvider } from './wutangforever';
//import { providerDef } from '@angular/core';

describe('WuTangForeverProvider', () => {

  let service: WutangForeverProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WutangForeverProvider]
    });
  });

    //inject the service

    it('should say For the Children', () => {
      expect(WutangForeverProvider.wuTang()).toEqual('For the Children')
    });

    // it('should get the data successfully', () => {
    //   WuTangForeverProvider.myFavoriteBand(1).subscribe((data: any) => {
    //   			expect(data.band).toBe('Destinys Child');
    // });
      
    //   const req = httpMock.expectOne('http://test.api.here/blahblah/1');
    //   expect(req.request.method).toBe('GET'); 
      
    //   req.flush({ 
    //   band: 'Destinys Child'
    //   });
      
    //   httpMock.verify(); // verifies  there are no oustanding http calls
    //   });
      
    //   it ('should post new data', () =>{
    //   WuTangForeverProvider.newBandILIke<any>({newBand: 'Bey'}).subscribe((data: any) => {
    //   expect(data.newBand).toBe('Bey');
    //   });
    //   const req = httpMock.expectOne('http://test.api.here/blahblah');
    //   expect(req.request.method).toBe('POST'); 
      	
    //   req.flush({
    //   newBand: 'Bey'
    //   });
    //   });

    service = TestBed.get(WutangForeverProvider);
    httpMock = TestBed.get(HttpTestingController);
  });
// });
