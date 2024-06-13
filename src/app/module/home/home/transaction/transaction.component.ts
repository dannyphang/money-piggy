import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  @Input() currentDate: Date = new Date();
  isExpanding: boolean = false;
  currentStep: string = "";

  ngOnInit() {

  }

  currentDateUpdate(date: Date) {
    this.currentDate = date;
  }

  toggleCatButton(type: string) {
    if (type === 'INCOME') {
      if (this.currentStep === "INCOME") {
        this.isExpanding = false;
        this.currentStep = "";
      }
      else {
        this.isExpanding = true;
        this.currentStep = "INCOME";
      }
    }
    else if (type === 'EXPENSE') {
      if (this.currentStep === "EXPENSE") {
        this.isExpanding = false;
        this.currentStep = "";
      }
      else {
        this.isExpanding = true;
        this.currentStep = "EXPENSE";
      }
    }
    else if (type === 'TOTAL') {
      if (this.currentStep === "TOTAL") {
        this.isExpanding = false;
        this.currentStep = "";
      }
      else {
        this.isExpanding = true;
        this.currentStep = "TOTAL";
      }
    }
  }
}
