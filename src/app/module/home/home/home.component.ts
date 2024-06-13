import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormConfig, CONTROL_TYPE } from '../../../core/shared/components/form/form.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnChanges {
  currentDate: Date = new Date();
  createTransactionForm: FormConfig[] = [];
  createForm = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    budget: new FormControl(0, [Validators.required]),
    spent: new FormControl(0, [Validators.required]),
  });


  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createFormConfig();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HomeComponent', changes);
    console.log('Date updated', this.currentDate);

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  currentDateUpdate(event: Date) {
    this.currentDate = event;
  }

  addTransactionButton() {
    this.dialog.open(CreateTransactionComponent, {
      data: {
        formConfig: this.createTransactionForm
      }
    }).afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  createFormConfig() {
    this.createTransactionForm = [
      {
        label: 'Category Name',
        type: CONTROL_TYPE.Textbox,
        fieldControl: this.createForm.controls.categoryName,
        layoutDefine: {
          column: 0,
          row: 0,
          colSpan: 2,
        }
      },
      {
        label: 'Budget',
        type: CONTROL_TYPE.Textbox,
        mode: 'number',
        onlyNumber: true,
        fieldControl: this.createForm.controls.budget,
        layoutDefine: {
          column: 0,
          row: 1,
          colSpan: 1,
        }
      },
      {
        label: 'Spent',
        type: CONTROL_TYPE.Textbox,
        mode: 'number',
        onlyNumber: true,
        fieldControl: this.createForm.controls.spent,
        layoutDefine: {
          column: 1,
          row: 1,
          colSpan: 1,
        }
      }
    ]
  }
}
