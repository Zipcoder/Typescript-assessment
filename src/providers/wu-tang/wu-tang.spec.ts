import { WuTangProvider } from './wu-tang';
 
let wuTang = null;
 
describe('Wu-Tang Service', () => {
 
    beforeEach(() => {
     // wuTang = new WuTangProvider();

    });
 
    it('should say For the Children', () => {
            let result = WuTangProvider.prototype.wuTangIs();

            expect(result).toEqual('For the Children');
        }
    );
 
});