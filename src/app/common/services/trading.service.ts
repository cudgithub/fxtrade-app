import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TradingService {
	constructor(private httpClient: HttpClient) {}
	
	getTradingData(): Observable<TradingData[]> {
		return this.httpClient.get<TradingData[]>('/api/trading');
	}
}

export interface TradingData {
	pair: string;
	buy: number;
	sell: number;
}
