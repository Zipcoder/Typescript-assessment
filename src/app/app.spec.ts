import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing'; // configures and initializes environment for testing and provides methods for creating components and services to unit test
import { WuTangProvider } from '../providers/wu-tang/wu-tang';

describe('WuTangProvider', () => {

	let provider: WuTangProvider;
	let httpMock: HttpTestingController;

	// can access these variables before each test	
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [WuTangProvider]
		});

		provider = TestBed.get(WuTangProvider);
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should get the data successfully', () => {
		provider.myFavoriteBand(1).subscribe((data: any) => {
			expect(data.band).toBe('Baby Metal');
		});

		const req = httpMock.expectOne('http://test.api.here/whatevs/1');
		expect(req.request.method).toBe('GET'); 
		
		req.flush({ // flush mocks a json file. This is essentially like having a separate json file for testing
			band: 'Baby Metal'
		});

		httpMock.verify(); // verifies  there are no oustanding http calls
	});

	it ('should post new data', () =>{
		provider.newBandILIke<any>({newBand: 'Conro'}).subscribe((data: any) => {
				expect(data.newBand).toBe('Conro');
		});
		const req = httpMock.expectOne('http://test.api.here/whatevs');
		expect(req.request.method).toBe('POST'); 
		
		req.flush({
			newBand: 'Conro'
		});
	});
});