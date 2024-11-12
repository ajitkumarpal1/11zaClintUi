import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopUpsComponent } from './components/top-ups/top-ups.component';
import { BalanceUsageComponent } from './components/balance-usage/balance-usage.component';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  {
    path: '', component: WalletComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'topups' },
      { path: 'topups', component: TopUpsComponent },
      { path: 'balance-usage', component: BalanceUsageComponent },
      { path: 'billing-details', component: BillingDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
