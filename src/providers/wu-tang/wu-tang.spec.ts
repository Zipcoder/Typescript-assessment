import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {WuTangProvider} from './wu-tang';

let service : WuTangProvider;
let httpMock: HttpTestingController;

describe('WuTang Provider', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WuTangProvider]
        })

        service = TestBed.get(WuTangProvider);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('Be for the kids', () => {
        let result = service.wuTang()
        expect(result).toEqual('For the children');
    });

     it('should get WTC, my favorite band', () => { 
         service.myFavoriteBand(1).subscribe((data: any) => {
             expect(data.bandname).toBe('Wu Tang Clan');
         });

         const req = httpMock.expectOne(`www.rankartist.com/1`, 'what');
         expect(req.request.method).toBe('GET');

         req.flush({bandname: 'Wu Tang Clan'});

         httpMock.verify();
     });


     it('should post WTC, my favorite band', () => {
               service.newBandILike<any>({ bandname: 'Wu Tang Clan' }).subscribe((data: any) => {
                    expect(data.bandname).toBe('Wu Tang Clan');
                });
        
                const req = httpMock.expectOne(`www.rankartist.com`, 'post to api');
                expect(req.request.method).toBe('POST'); 
        
                req.flush({
                    bandname: 'Wu Tang Clan'
                });
        
                httpMock.verify();
            });
    
});
    
    
    
