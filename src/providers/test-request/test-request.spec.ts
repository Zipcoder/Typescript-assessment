import { TestRequestProvider } from "./test-request";
import { TestBed, async, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient, HttpHandler, HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("Test-Request Provider", () => {
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
    it("should get reponse string",
        inject([HttpTestingController, TestRequestProvider],
            (httpMock: HttpTestingController, trp: TestRequestProvider) => {
                const responseString = "test response";
                trp.myFavoriteBand().subscribe(trpResponse =>
                    expect(trpResponse).toEqual(responseString)
                );
            }));
    it("should return new test string",
        inject([HttpTestingController, TestRequestProvider],
            (httpMock: HttpTestingController, trp: TestRequestProvider) => {
                const returnValue = 'new test string';
                trp.newBandILike().subscribe(trpResponse => 
                    expect(trpResponse).toEqual(returnValue)
                );
            }));
});