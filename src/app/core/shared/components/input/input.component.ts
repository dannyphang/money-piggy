import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BaseFieldControlComponent } from '../base-field-control/base-field-control';

@Component({
  selector: 'app-base-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent
  extends BaseFieldControlComponent
  implements OnInit {
  @Input() mode: 'text' | 'number' | 'password' | 'switch' | 'label-text' =
    'text';
  @Input() iconUrl!: string;
  @Input() leftIconUrl!: string;
  @Input() onBlurFunction: any;
  @Input() onlyNumber: boolean = false;
  @Input() maxLength = 255;
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() min!: number;
  @Input() max!: number;
  @Input() minFractionDigits: number = 2;
  @Input() maxFractionDigits: number = 2;
  @Input() useGrouping: boolean = true;
  @Input() content!: string;
  @Input() descriptionMessage: string = '';
  @Input() labelTextStyle: string = '';

  @ViewChild('prefix_content', { static: true })
  prefix_content!: ElementRef<HTMLDivElement>;

  paddingForPrefix = 10;

  ngOnInit() {
    if (this.mode === 'number') {
      this.fieldControl.setValue(this.fieldControl.value ?? undefined, {
        emitEvent: false,
      });
    }
    this.paddingForPrefix = this.prefix_content?.nativeElement.clientWidth;
  }

  onBlur() {
    if (!!this.onBlurFunction) return this.onBlurFunction();
  }
}
