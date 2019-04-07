import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TradingData, TradingService } from '../common/services/trading.service';

@Component({
	selector: 'app-trading',
	templateUrl: './trading.component.html',
	styleUrls: ['./trading.component.less']
})
export class TradingComponent implements OnInit, OnDestroy {
	
	tradingData: TradingData[] = [];
	
	private tradingSubscription: Subscription = Subscription.EMPTY;
	
	constructor(private tradingService: TradingService) {
	
	}
	
	ngOnInit() {
		this.tradingSubscription = interval(1000)
			.pipe(switchMap(() => this.tradingService.getTradingData()))
			.subscribe((response: TradingData[]) => {
				this.tradingData = response;
			});

	}
	
	trackByFn(index, item): TradingData {
		return item.pair;
	}
	
	ngOnDestroy(): void {
		this.tradingSubscription.unsubscribe();
	}
}
