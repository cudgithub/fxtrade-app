import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AmountComponent } from './amount/amount.component';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
	let component: PanelComponent;
	let fixture: ComponentFixture<PanelComponent>;
	const tradingData = { pair: 'USD CHF', buy: 0.02241, sell: 0.34425 };
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PanelComponent, AmountComponent]
		})
			.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(PanelComponent);
		component = fixture.componentInstance;
		component.tradingData = tradingData;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
	
	it('should have negative trend by default', () => {
		expect(fixture.debugElement.query(By.css('.trend')).classes.positive).toBeFalsy();
	});
	
	it('should change trend to positive', () => {
		const newTradingData = { pair: 'USD CHF', buy: 0.11111, sell: 0.5555 };
		component.tradingData = newTradingData;
		component.ngOnChanges({
			tradingData: new SimpleChange(tradingData, component.tradingData, false)
		});
		fixture.detectChanges();
		
		expect(fixture.debugElement.query(By.css('.trend')).classes.positive).toBeTruthy();
	});
	
	it('should change trend to negatve', () => {
		const newTradingData = { pair: 'USD CHF', buy: 0.00111, sell: 0.0055 };
		component.tradingData = newTradingData;
		component.ngOnChanges({
			tradingData: new SimpleChange(tradingData, component.tradingData, false)
		});
		fixture.detectChanges();
		
		expect(fixture.debugElement.query(By.css('.trend')).classes.positive).toBeFalsy();
	});
});
