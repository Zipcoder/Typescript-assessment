import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

import { DataProvider } from './data';

describe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataProvider]
        });
    });

    it('should get myFavoriteBand',
        inject(
            [HttpTestingController, DataProvider],
            (httpMock: HttpTestingController, dataService: DataProvider) => {
                const mockUsers = [
                    { name: 'Bob', website: 'www.yessss.com' },
                    { name: 'Juliette', website: 'nope.com' }
                ];

                dataService.myFavoriteBand().subscribe((event: HttpEvent<any>) => {
                    switch (event.type) {
                        case HttpEventType.Response:
                            expect(event.body).toEqual(mockUsers);
                    }
                });

                const mockReq = httpMock.expectOne('https://jsonplaceholder.typicode.com/wuTangIs');

                expect(mockReq.cancelled).toBeFalsy();
                expect(mockReq.request.responseType).toEqual('json');
                mockReq.flush(mockUsers);

                httpMock.verify();
            }
        )
    );

    it('should post the newBandLike',
        inject(
            [HttpTestingController, DataProvider],
            (httpMock: HttpTestingController, dataService: DataProvider) => {
                dataService.newBandILike('firstname').subscribe((data: any) => {
                    expect(data.value).toBe('firstname');
                  

                });

                const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/wuTangIs', 'post to api');
                expect(req.request.method).toBe('POST');

                req.flush({
                    value: 'firstname'
                   
                });

                httpMock.verify();
            }));



});
describe('wuTangIsTest', () =>{
    it('should return For the Children', () => {
        expect(DataProvider.wuTangIs()).toEqual('For the Children')
    }
)
})