import { WutangProvider } from './wutang';

let wuTang = null;

describe('WuTang Service', () => {

    beforeEach(() => {
        wuTang = new WutangProvider();
    });

    it('should return children', () => {
        let result = wuTang.wuTangIs();
        expect(result).toBe('For the Children');
    });
    
});