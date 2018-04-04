import { WutangforeverProvider } from "./wutangforever";

let wutang = null;
describe("Type Script Assesment Test Suite", () => {
  describe("Testing For the Children", () => {
    beforeEach(() => {
      wutang = new WutangforeverProvider();
    });
    it("Should say For the Children", () => {
      let result = wutang.wuTangls();
      expect(result).toBe("For the Children");
    });
  });
});
