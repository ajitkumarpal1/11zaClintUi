import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { swalHelper } from '../../../../../core/constants/swal-helper';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.scss'
})
export class BillingDetailsComponent {
  disabledAddress:boolean=true;

  onEditAdddress(){
    this.disabledAddress=!this.disabledAddress
  }

  onSaveAddress=()=>{
    swalHelper.success('Billing Address','Bussiness Address Updated Successfully')
  }

}
