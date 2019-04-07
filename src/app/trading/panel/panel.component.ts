import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TradingData } from '../../common/services/trading.service';

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
	styleUrls: ['./panel.component.less']
})
export class PanelComponent implements OnChanges {
	
	@Input()
	tradingData: TradingData;
	
	positive = false;
	
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.tradingData) {
			if (changes.tradingData.previousValue && changes.tradingData.currentValue.buy > changes.tradingData.previousValue.buy) {
				this.positive = true;
			} else {
				this.positive = false;
			}
		}
	}
}
