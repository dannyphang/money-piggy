import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormConfig } from './form.interface';

@Component({
  selector: 'app-form-array-item',
  templateUrl: './form-array-item.component.html',
})
export class FormArrayItemComponent {
  @Input() removeBtnLabel!: string;
  @Input() addBtnLabel!: string;
  @Input() formConfig!: FormConfig[];
  @Output() addForm = new EventEmitter();
  @Output() removeForm = new EventEmitter();

  handleAddForm() {
    this.addForm.emit();
  }

  handleRemoveForm() {
    this.removeForm.emit();
  }
}
