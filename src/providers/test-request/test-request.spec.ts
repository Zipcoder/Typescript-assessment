import { TestRequestProvider } from "./test-request";
import { TestBed, async, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient, HttpHandler } from "@angular/common/http";
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
            ]
        })
    })
    it("should return 'For the Children'", () => {
        let response:string = trp.wuTangIs();
    });
    
})