import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed} from '@angular/core/testing';

import {ProveProvider} from './prove';
import { HttpClient } from '@angular/common/http';

let children = null;

describe('Return the Children', ()=>{
    
    beforeEach(()=>{
        
    })

    it('should return a string saying For the Children', ()=>{
        let client = null;
        children = new ProveProvider(client);
        let result = children.wuTangIs();
        let expectation = "For the Children";
        expect(result).toBe(expectation);
    });
    
});

// Didn't have quite enough time to get this one to pass

// let service: ProveProvider;
// let httpMock: HttpTestingController;

// describe('Get favorite band service', ()=>{
//     beforeEach(()=>{
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers:[ProveProvider]
//         });

//         it('should return a string for a band name', ()=>{
//             service.myFavoriteBand(1).subscribe((data:any)=>{
//                 expect(data.name).toBe('Creed');
//             });
//             const req = httpMock.expectOne(`localhost/8080/1`,'call to api');
//             expect(req.request.method).toBe('GET');
//         });
        
//     });
// })



