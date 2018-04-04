import { WuProvider } from "./wu";
import {
    HttpClientTestingModule,
    HttpTestingController
  } from "@angular/common/http/testing";
  import { TestBed } from "@angular/core/testing";

let MethodMan = null;
let HttpClient = null;

    describe("Test For the Children", () => {
        beforeEach(() => {
            MethodMan = new WuProvider(HttpClient);
        });
        it("Should say For the Children", () => {
            let output = MethodMan.wuTangIs();
            expect(output).toBe("For the Children");
        });
    });


describe("Test Suite", () => {
    describe("GET test", () => {
      let provider: WuProvider;
      let httpMocK: HttpTestingController;
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [WuProvider]
        });
        provider = TestBed.get(WuProvider);
        httpMocK = TestBed.get(HttpTestingController);
      });
      it("Should get desired band", () => {
        provider.myFavoriteBand().subscribe((data: any) => {
          expect(data.name).toBe("Linkin Park");
        });
  
        const req = httpMocK.expectOne(
          `http://wutangclan.toolit/whatever/1`,
        );
        expect(req.request.method).toBe("GET");
        req.flush({
          name: "Linkin Park"
        });
  
        httpMocK.verify();
        });

    it("Should post new band I like", () => {
        provider.newBandILike<any>({ 
            bandname: "A Day To Remember" }).subscribe((data: any) => {
        expect(data.bandname).toBe("A Day To Remember");
      });

    const req = httpMocK.expectOne(
      `http://wutangclan.toolit/whatever/1`,
    );
    expect(req.request.method).toBe("POST");

    req.flush({
      bandname: "A Day To Remember"
    });

    httpMocK.verify();
    });
  });
});
