import {WuTangServiceProvider} from "./wu-tang-service";
import {inject, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpEvent, HttpEventType} from "@angular/common/http";

describe("Test the wuTangService", () => {
    describe("test wuTangIs function", () => {
      beforeEach(() =>
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [WuTangServiceProvider]
        }));
      it('should return string For the Children', inject(
        [HttpTestingController, WuTangServiceProvider],
        (httpMock: HttpTestingController, wuTangServiceProvider: WuTangServiceProvider) => {
          expect(wuTangServiceProvider.wuTangIs).toMatch("For the Children");
        }));
    });
    describe("test myFavoriteBand", () => {
        beforeEach(() =>
          TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WuTangServiceProvider]
          }));
        it('should get a string', inject(
          [HttpTestingController, WuTangServiceProvider],
          (httpMock: HttpTestingController, wuTangServiceProvider: WuTangServiceProvider) => {
            const mockData = ["Definitely not WuTang"];

            wuTangServiceProvider.myFavoriteBand().subscribe((event: HttpEvent<any>) => {
                switch (event.type) {
                  case HttpEventType.Response:
                    expect(event.body).toEqual(mockData);
                }
              }
            );

            const mockReq = httpMock.expectOne(wuTangServiceProvider.url);

            expect(mockReq.cancelled).toBeFalsy();
            expect(mockReq.request.responseType).toEqual('json');
            mockReq.flush(mockData);

            httpMock.verify();
          }
        ));
      it('should post data', inject(
        [HttpTestingController, WuTangServiceProvider],
        (httpMock: HttpTestingController, wuTangServiceProvider: WuTangServiceProvider) => {
          wuTangServiceProvider.newBandILike("The Police").subscribe((data: any) => {
            expect(data).toBe('The Police');
          });

          const req = httpMock.expectOne('fake.url');
          expect(req.request.method).toBe('POST');

          req.flush("The Police");
          httpMock.verify();
        }));
      }
    );
  }
);
