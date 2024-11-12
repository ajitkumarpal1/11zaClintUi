import { Component } from '@angular/core';
import moment from 'moment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent {

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
}
