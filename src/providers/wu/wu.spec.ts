import { WuProvider } from "./wu";

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
