import { WuTangIsProvider } from './wu-tang-is';
 
let wuTangIsProvider = null;
 
describe('Magic 8 Ball Service', () => {
 
    beforeEach(() => {
      wuTangIsProvider = new WuTangIsProvider();
    });
 
    it('should return a non empty array', () => {
 
            let result = wuTangIsProvider.getAnswers();
 
            expect(Array.isArray(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
        }
    );
 
    it('should return one random answer as a string', () => {
            expect(typeof wuTangIsProvider.getRandomAnswer()).toBe('string');
        }
    );
 
    it('should have both yes and no available in result set', () => {
 
            let result = wuTangIsProvider.getAnswers();
 
            expect(result).toContain('Yes');
            expect(result).toContain('No');
 
        }
    );
 
});