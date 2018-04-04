import { WuTangProvider } from './wu-tang';
 
let wuTang = null;
 
describe('Wu-Tang Service', () => {
 
    beforeEach(() => {
      wuTang = new WuTangProvider();
    });
 
    it('For the Children', () => {
 
            let result = wuTang.wuTangIs();
 
            expect(result).toContain('For the Children');
            
        }
    );
 
});