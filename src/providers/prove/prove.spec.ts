import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed} from '@angular/core/testing';

import {ProveProvider} from './prove';
import { HttpClient } from '@angular/common/http';

let children = null;
let service: ProveProvider;
let httpMock: HttpTestingController;


describe('Return the Children', ()=>{
    
    it('should return a string saying For the Children', ()=>{
        let client = null;
        children = new ProveProvider(client);
        let result = children.wuTangIs();
        let expectation = "For the Children";

        expect(result).toBe(expectation);
    });

});


describe('Get favorite band service', ()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers:[ProveProvider]
        });
        service = TestBed.get(ProveProvider);
        httpMock = TestBed.get(HttpTestingController);
    });

        it('should return a string for a band name', ()=>{
            service.myFavoriteBand(1).subscribe((data:any)=>{
                expect(data.name).toBe('Creed');
            });
            const req = httpMock.expectOne(`localhost/8080/1`,'call to api');
            expect(req.request.method).toBe('GET');
            
            req.flush({
                name: 'Creed'
            });
            httpMock.verify();
        });
        
        it('should post a string for a new band name', ()=>{
            service.newBandILike<any>({bandname: 'Creed'}).subscribe((data:any) => {
                expect(data.name).toBe('Creed');
            });
            const req = httpMock.expectOne(`localhost/8080`, 'post to api');
            expect(req.request.method).toBe('POST');
            req.flush({
                name: 'Creed'
            });

            httpMock.verify();
        });
    });

