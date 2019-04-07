import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradingComponent } from './trading/trading.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'trading',
		pathMatch: 'full',
	},
	{
		path: 'trading',
		component: TradingComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
