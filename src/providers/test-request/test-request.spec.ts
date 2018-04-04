import { TestRequestProvider } from "./test-request";
import { HttpClient } from "@angular/common/http";

describe("Test-Request Provider", () => {
    let trp:TestRequestProvider;
    beforeEach(() => {
         trp = new TestRequestProvider();
    })
    it("should return 'For the Children'", () => {
        let response:string = trp.wuTangIs();
    })
})