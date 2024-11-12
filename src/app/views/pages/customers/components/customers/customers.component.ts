import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgLabelTemplateDirective, NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import moment from 'moment';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';
import { ModalService } from '../../../../../core/utilities/modal';
import { swalHelper } from '../../../../../core/constants/swal-helper';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NgSelectModule,
    NgLabelTemplateDirective,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule,
    RouterModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  constructor(private modal: ModalService) {}

  onFilterModal() {
    this.modal.open('filter-modal');
  }

  label = ['All label', 'NoAnswered', 'NotInterested', 'Inereseted'];

  teamMember = ['All Members', '11za Admin', 'AFER', 'AAgam'];

  status = ['All Customers', 'Active', 'In-Active', 'Active and Spam'];

  tags = ['11', '234', '23'];
  tagCondition = ['Or', 'And'];

  bsConfig?: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-dark-blue',
    showWeekNumbers: false,
    rangeInputFormat: 'DD/MM/YYYY',
    rangeSeparator: ' - ',
    showClearButton: true,
    displayMonths: 1,
    maxDate: moment().endOf('day').toDate(),
    showPreviousMonth: false,
  };

  dateRange: any[] = [
    moment().startOf('day').toDate(),
    moment().endOf('day').toDate(),
  ];

  payload = {
    fromDate: moment(this.dateRange[0]).format('YYYY-MM-DD'),
    toDate: moment(this.dateRange[1]).format('YYYY-MM-DD'),
  };

  changeDateDetails() {
    if (Array.isArray(this.dateRange) && this.dateRange.length > 0) {
      this.payload.fromDate = moment(this.dateRange[0]).format('YYYY-MM-DD');
      this.payload.toDate = moment(this.dateRange[1]).format('YYYY-MM-DD');
    }
  }

  deleteDuplicateCustomer = () => {
    swalHelper.success('Duplicate Customer Deleted', 'No Duplicate Found');
  };

  onAddCustomer() {
    this.modal.open('add-Customer');
  }

  country = ['91 India', '82 Us'];

  onImport(){
    this.modal.open('import')
  }
}
