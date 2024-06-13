import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-m-calendar',
  templateUrl: './m-calendar.component.html',
  styleUrl: './m-calendar.component.scss'
})
export class MCalendarComponent {
  @Input() dateType: string = 'MONTH';
  @Output() datePicked: EventEmitter<Date> = new EventEmitter();

  constructor(
    public datepipe: DatePipe
  ) { }
  currentDate = new Date();
  date: string = this.dateType === 'MONTH' ? this.datepipe.transform(this.currentDate, 'MMM yyyy') || '' : this.datepipe.transform(this.currentDate, 'yyyy') || '';

  dateButtonClick(isNext: boolean = false) {
    if (this.dateType === 'MONTH') {
      this.currentDate = new Date(this.currentDate.setMonth(isNext ? (this.currentDate.getMonth() + 1) : (this.currentDate.getMonth() - 1)));
      this.date = this.datepipe.transform(this.currentDate, 'MMM yyyy') || '';
    }
    else if (this.dateType === 'YEAR') {
      this.currentDate = new Date(this.currentDate.setFullYear(isNext ? (this.currentDate.getFullYear() + 1) : (this.currentDate.getFullYear() - 1)));
      this.date = this.datepipe.transform(this.currentDate, 'yyyy') || '';
    }
    this.datePicked.emit(this.currentDate);
  }
}
