import { Component, Input, OnInit } from '@angular/core';
import { BaseFieldControlComponent } from '../base-field-control/base-field-control';

@Component({
  selector: 'app-base-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent
  extends BaseFieldControlComponent
  implements OnInit {
  @Input() lineNumber: number = 4;
  @Input() maxLength!: number;
  @Input() autoResize!: boolean;
  @Input() labelShowsOptional = false;
  @Input() hideLengthLimit = false;
  @Input() instructionText = '';
  @Input() tooltip = '';
  currentLength: number = 0;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.currentLength = this.fieldControl.value?.length || 0;
    this.fieldControl.valueChanges.subscribe((val: string) => {
      this.currentLength = val?.length || 0;
    });

    if (this.maxLength > 500 || !this.maxLength) this.maxLength = 500;
  }
}
