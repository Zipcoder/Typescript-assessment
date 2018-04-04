import { WuTangProvider } from './wu-tang';
import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe("The WuTang Provider's", () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WuTangProvider]
        })
    })

    describe("wuTangIs method", () => {
        it("should return 'For the Children'", () => {
            expect(WuTangProvider.prototype.wuTangIs()).toEqual("For the Children");
        })
    })

    describe('myFavoriteBand method', () => {
        it('should GET "Wu-Tang Clan" from the endpoint: "https://www.somewebsite.com/tariq/fav"', inject([HttpTestingController, WuTangProvider],
            (httpMock: HttpTestingController, wuTangProvider: WuTangProvider) => {
                wuTangProvider.myFavoriteBand().subscribe((data: any) => {

                    expect(data.name).toEqual("Wu-Tang Clan");

                })

                const mockReq = httpMock.expectOne(wuTangProvider.url + '/tariq/fav');
                expect(mockReq.cancelled).toBeFalsy();
                expect(mockReq.request.responseType).toEqual('json');
                expect(mockReq.request.method).toBe('GET');
                expect(mockReq.request.url).toBe('https://www.somewebsite.com/tariq/fav');
                mockReq.flush({ name: "Wu-Tang Clan" });
                httpMock.verify();

            })
        )
    })

    describe('newBandILike method', () => {
        it('should POST "The Roots" to the endpoint: "https://www.somewebsite.com/tariq"', inject([HttpTestingController, WuTangProvider],
            (httpMock: HttpTestingController, wuTangProvider: WuTangProvider) => {
                wuTangProvider.newBandILike('The Roots').subscribe((data: any) => {

                    expect(data).toEqual({name: "The Roots"});

                })

                const mockReq = httpMock.expectOne(wuTangProvider.url + '/tariq');
                expect(mockReq.cancelled).toBeFalsy();
                expect(mockReq.request.method).toBe('POST');
                expect(mockReq.request.url).toBe('https://www.somewebsite.com/tariq');
                mockReq.flush({ name: "The Roots" });
                httpMock.verify();

            })
        )
    })
})