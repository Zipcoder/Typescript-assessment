import { WuTangProvider} from "./wu-tang";
import { TestBed, inject} from "@angular/core/testing";
import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('WuTang', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WuTangProvider]
    });
  });
  it('should say For the Children', () => {
    const wuTang = TestBed.get(WuTangProvider);
    expect(wuTang.wuTangIs()).toEqual('For the Children');
  });

  it ('should get myFavoriteBand', inject(
    [HttpTestingController, WuTangProvider],
    (httpMock: HttpTestingController, wuTang: WuTangProvider) => {
      const mockUsers = [
        { band: "The Who"},
        { band: "Queen"}
      ];
      const otherMock = [
        {land: "Bad"},
        {land: "Free"}
      ];
      wuTang.myFavoriteBand().subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(mockUsers);
        }
      });
      const mockRequest = httpMock.expectOne(wuTang.url);

      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(mockUsers);

      httpMock.verify();
    }
  ));
});

describe('Post Method', () => {
  let service: WuTangProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WuTangProvider]
    });
    service = TestBed.get(WuTangProvider);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should post the correct data', () => {
    service.newBandILike<any>({bandILike: 'MF Doom'}).subscribe((response) => {
      expect(response.bandILike).toBe('MF Doom');
    });
    const req = httpMock.expectOne('dummyURL', 'post to dummy');
    expect(req.request.method).toBe('POST');
    req.flush({bandILike: 'MF Doom'});
  });
  httpMock.verify();
});


