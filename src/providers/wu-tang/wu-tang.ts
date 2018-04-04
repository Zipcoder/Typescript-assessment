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

	public myFavoriteBand(): string {
		//this.http.get('assets/data/favoriteBand.json').map((res: Response) => res.json()).subscribe(data => {
			//this.favoriteBand = data.favoriteBand;
			//this.bandsILike.push(data.favoriteBand);
		//});
		//return this.favoriteBand;
		return "WuTang";
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

	public handleResponse(data: any): void {
		this.bandsILike.push(data.band);
	}
}