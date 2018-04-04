import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WuTangProvider {
	public favoriteBand: string;

	constructor(public http: Http) {
	}

	public wuTangIs(): string {
		return "For the Children";
	}

	public myFavoriteBand(): string {
		this.http.get('assets/data/favoriteBand.json').map((res: Response) => res.json()).subscribe(data => {
			this.favoriteBand = data.favoriteBand;
		});
		return this.favoriteBand;
	}
}