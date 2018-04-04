import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WuTangProvider {
	public favoriteBand: string;
	public bandsILike: string[] = [];

	constructor(public client: HttpClient) {
	}

	public wuTangIs(): string {
		return "For the Children";
	}

	public myFavoriteBand(): Observable<string> {
		return this.client.get<string>('assets/data/favoriteBand.json', {
			headers: new HttpHeaders(
				{
					'Authorization': 'my-auth-token'
				}
			)
		});
	}

	public newBandILike(band: string): Observable<string> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': 'my-auth-token'
			})
		};

		let thisBand: string;
		return this.client.post<string>('assets/data/favoriteBand.json', JSON.stringify(band), httpOptions);
	}
}