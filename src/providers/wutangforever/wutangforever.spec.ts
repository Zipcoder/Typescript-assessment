import { WutangforeverProvider } from "./wutangforever";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";

describe("Type Script Assesment Test Suite", () => {
  describe("GET and POST testers", () => {
    let provider: WutangforeverProvider;
    let httpMocK: HttpTestingController;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [WutangforeverProvider]
      });
      provider = TestBed.get(WutangforeverProvider);
      httpMocK = TestBed.get(HttpTestingController);
    });
    it("Should get the correct band", () => {
      provider.myFavoriteBand().subscribe((data: any) => {
        expect(data.name).toBe("The Roots");
      });

      const req = httpMocK.expectOne(
        `http://wu.tang.forever/anything/1`,
        "call to api"
      );
      expect(req.request.method).toBe("GET");
      req.flush({
        name: "The Roots"
      });

      httpMocK.verify();
    });
    it("Should post the new band I like", () => {
      provider
        .newBandILIke<any>({ bandname: "A Tribe Called Quest" })
        .subscribe((data: any) => {
          expect(data.bandname).toBe("A Tribe Called Quest");
        });

      const req = httpMocK.expectOne(
        `http://wu.tang.forever/anything`,
        "post to api"
      );
      expect(req.request.method).toBe("POST");

      req.flush({
        bandname: "A Tribe Called Quest"
      });

      httpMocK.verify();
    });
  });
  let wutang = null;
  let HttpClient = null;
  describe("Testing For the Children", () => {
    beforeEach(() => {
      wutang = new WutangforeverProvider(HttpClient);
    });
    it("Should say For the Children", () => {
      let result = wutang.wuTangls();
      expect(result).toBe("For the Children");
    });
  });
});
