import { WuTangProvider} from "./wu-tang";
import { TestBed} from "@angular/core/testing";
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
});
