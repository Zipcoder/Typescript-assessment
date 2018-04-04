import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {WuTangProvider} from './wu-tang';

let service : WuTangProvider;
let httpMock: HttpTestingController;

beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WuTangProvider]
    });

    service = TestBed.get(WuTangProvider);
    httpMock = TestBed.get(HttpTestingController);
});
    it('Be for the kids', () => {
        let result = service.wuTang()
        expect(result).toEqual('For the children');
    });