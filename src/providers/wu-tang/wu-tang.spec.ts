import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WuTangProvider } from './wu-tang';
 
let service: WuTangProvider;
let mock: HttpTestingController;

describe('WuTang Provider', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WuTangProvider]
        });

        service = TestBed.get(WuTangProvider);
        mock = TestBed.get(HttpTestingController);
    });
 
    it('should be for the kids', () => {
        let result = service.wuTangIs();
        expect(result).toContain('For the Children');
    });

    it('should get WTC, my favorite band', () => {
        service.myFavoriteBand(1).subscribe((data: any) => {
            expect(data.bandname).toBe('Wu Tang Clan');
        });

        const req = mock.expectOne(`www.bigbandapi.com/1`, 'api call');
        expect(req.request.method).toBe('GET');

        req.flush({
            bandname: 'Wu Tang Clan'
        });
        mock.verify();
    });

    it('should post WTC, my favorite band', () => {
        service.newBandILike<any>({ bandname: 'Wu Tang Clan' }).subscribe((data: any) => {
            expect(data.bandname).toBe('Wu Tang Clan');
        });

        const req = mock.expectOne(`www.bigbandapi.com`, 'post to api');
        expect(req.request.method).toBe('POST'); 

        req.flush({
            bandname: 'Wu Tang Clan'
        });

        mock.verify();
    });

});