import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { WuTangProvider } from './wu-tang';

describe('WuTangProvider', () => {
	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [
			],
			providers: [
			WuTangProvider,
			MockBackend,
			BaseRequestOptions,
			{
				provide: Http,
				useFactory: (mockBackend, options) => {
					return new Http(mockBackend, options);
				},
				deps: [MockBackend, BaseRequestOptions]
			}
			],
			imports: [
			HttpModule
			]
		}).compileComponents();
	}));
	beforeEach(() => {
	});
	// joshmorony the goat

	it('is for the children', inject([WuTangProvider, MockBackend], (wuTang, mockBackend)  => {
		expect(wuTang.wuTangIs()).toBe("For the Children");
	}));
});