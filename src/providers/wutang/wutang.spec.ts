import { WutangProvider } from './wutang';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing'

describe('WuTang Service', () => {

    let wuTang: WutangProvider;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WutangProvider]
        });

        wuTang = TestBed.get(WutangProvider);
        httpMock = TestBed.get(HttpTestingController);

    });

    // it('should return children', () => {
    //     let result = wuTang.wuTangIs();
    //     expect(result).toBe('For the Children');
    // });

    it('should get data', () => {
        wuTang.myFavoriteBand(1).subscribe((data: any) => {
            expect(data.name).toBe('WuTang');
        });
    });

    it('should know whats up', () => {
        wuTang.myFavoriteBand(1).subscribe((data: any) => {
            expect(data.name).toBe('WuTang');
        });
        const req = httpMock.expectOne(`http://www.mocky.io/v2/5185415ba171ea3a00704eed/1`, 'call to api');
        expect(req.request.method).toBe('GET');
        req.flush({
            name: 'WuTang'
        });
        httpMock.verify();
    });

    it('should post the correct data', () => {
        wuTang.newBandILike<any>('NWA').subscribe((data: any) => {
          expect(data.firstname).toBe('NWA');
        });
      
        const req = httpMock.expectOne(`http://www.mocky.io/v2/5185415ba171ea3a00704eed`, 'post to api');
        expect(req.request.method).toBe('POST');
      
        req.flush({
          firstname: 'NWA'
        });
      
        httpMock.verify();
      });

});