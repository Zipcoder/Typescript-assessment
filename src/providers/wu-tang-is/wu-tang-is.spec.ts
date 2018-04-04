import { WuTangIsProvider } from './wu-tang-is';
// import { describe, beforeEach, expect, it } from 'jasmine';
 
let wuTangIsProvider = null;
 
describe('Wu Tang is Provider', () => {
 
    beforeEach(() => {
      wuTangIsProvider = new WuTangIsProvider();
    });
 
    it('should return "For the Children"', () => {
            let expected = "For the Children";
            let result = wuTangIsProvider.wuTangIs();
            expect(expected).toEqual(result);
        }
    );
 
    // it('should return one random answer as a string', () => {
    //         expect(typeof wuTangIsProvider.getRandomAnswer()).toBe('string');
    //     }
    // );
 
    // it('should have both yes and no available in result set', () => {
 
    //         let result = wuTangIsProvider.getAnswers();
 
    //         expect(result).toContain('Yes');
    //         expect(result).toContain('No');
 
    //     }
    // );
 
});