import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { TradingComponent } from './trading/trading.component';
import { PanelComponent } from './trading/panel/panel.component';
import { AmountComponent } from './trading/panel/amount/amount.component';

@NgModule({
	declarations: [
		AppComponent,
		TradingComponent,
		PanelComponent,
		AmountComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
