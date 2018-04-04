import { TestRequestProvider } from "./test-request";
import { TestBed, async, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient, HttpHandler, HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("Test-Request Provider", () => {
    let trp:TestRequestProvider;
    let http:HttpClient;
    let handler:HttpHandler;
    beforeEach(() => {
        
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [
                TestRequestProvider
            ]
        })
    })
    it("should return 'For the Children'", inject([HttpTestingController, TestRequestProvider], (httpMock:HttpTestingController, trp: TestRequestProvider) => {
        let response:string = trp.wuTangIs();
        expect(response).toEqual("For the Children");
    }));
    it("should get empty string", 
    inject([HttpTestingController, TestRequestProvider],
        (httpMock: HttpTestingController, trp: TestRequestProvider) => {
            const emptyString = '';
        trp.myFavoriteBand().subscribe((event:HttpEvent<any>) => {
            switch (event.type) {
                case HttpEventType.Response:
                    expect(event.body).toEqual('');
            }
        })
    }));
});