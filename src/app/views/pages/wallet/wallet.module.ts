import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletRoutingModule } from './wallet-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BalanceUsageComponent } from './components/balance-usage/balance-usage.component';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';
import { TopUpsComponent } from './components/top-ups/top-ups.component';
import { WalletComponent } from './components/wallet/wallet.component';


@NgModule({
  declarations: [
    BalanceUsageComponent,
    BillingDetailsComponent,
    TopUpsComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    BsDatepickerModule,
  ]
})
export class WalletModule { }
