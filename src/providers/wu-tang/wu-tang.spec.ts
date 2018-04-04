import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WuTangProvider } from './wu-tang';

describe('WuTangProvider', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let wuTang: WuTangProvider;
	let testUrl = 'assets/data';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ]
		});

		// Inject the http service and test controller for each test
    	httpClient = TestBed.get(HttpClient);
    	httpTestingController = TestBed.get(HttpTestingController);
    	wuTang = new WuTangProvider(httpClient);
    });
  	/// Tests begin ///

	it('is for the children', () => {
		expect(wuTang.wuTangIs()).toBe("For the Children");
	});

	it('should be my favorite band', () => {
		let favoriteBand = wuTang.myFavoriteBand();
		expect(favoriteBand).toEqual("WuTang");
	});

	it('should accept new bands I like', () => {
		const band = "Carpenter Brut";
		const testData: string = JSON.stringify(band);

		wuTang.newBandILike(band).subscribe(data => {
			expect(data).toEqual("Carpenter Brut");
		});
	});
});