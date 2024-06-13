import { Component, Inject, Input } from '@angular/core';
import { CONTROL_TYPE, FormConfig } from '../../../../core/shared/components/form/form.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss'
})
export class CreateTransactionComponent {
  createTransactionForm: FormConfig[] = [];
  createForm = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    budget: new FormControl(0, [Validators.required]),
    spent: new FormControl(0, [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { formConfig: FormConfig[] },
    public dialog: MatDialog,

  ) {

  }

  ngOnInit() {
    this.createTransactionForm = this.data.formConfig;
  }
}
