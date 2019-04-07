import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-amount',
	templateUrl: './amount.component.html',
	styleUrls: ['./amount.component.less']
})
export class AmountComponent implements OnChanges {
	
	@Input()
	amount: number;
	
	amountNormalPart: string;
	amountBoldPart: string;
	amountUpperPart: string;
	
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.amount) {
			const stringAmount = this.amount.toString();
			this.amountUpperPart = stringAmount.slice(stringAmount.length - 1);
			this.amountBoldPart = stringAmount.slice(stringAmount.length - 3, stringAmount.length - 1);
			this.amountNormalPart = stringAmount.slice(0, stringAmount.length - 3);
		}
	}
	}
