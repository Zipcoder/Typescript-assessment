import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed} from '@angular/core/testing';

import {ProveProvider} from './prove';

let children = null;

describe('Return the Children', ()=>{
    
    beforeEach(()=> {
        children = new ProveProvider();
    });

    it('should return a string saying For the Children', ()=>{
        let result = children.wuTangIs();
        let expectation = "For the Children";
        expect(result).toBe(expectation);
    });
    
})

