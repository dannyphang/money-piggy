import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../modules/material.module';
import { MCalendarComponent } from './m-calendar/m-calendar.component';
import { CommonSharedModule } from '../modules/common-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from './label/label.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PrimeNgModule } from '../modules/primeng.module';
import { OnlyNumberDirective } from '../directives/only-number.directive';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormArrayComponent } from './form/form-array.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { RadioComponent } from './radio/radio.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import { FormItemComponent } from './form/form-item.component';
import { FormArrayItemComponent } from './form/form-array-item.component';

const ExportComponents = [
  MCalendarComponent,
  LabelComponent,
  InputComponent,
  DropdownComponent,
  FormArrayItemComponent,
  FormArrayComponent,
  FormItemComponent,
  FormComponent,
  TextareaComponent,
  CheckboxComponent,
  DatepickerComponent,
  RadioComponent,
  MultiselectComponent,
  ButtonComponent,
]

@NgModule({
  declarations: [
    ExportComponents,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    CommonSharedModule,
    MaterialModule,
    PrimeNgModule,
    ReactiveFormsModule,
    TranslateModule,
    OnlyNumberDirective,
  ],
  exports: [
    ExportComponents
  ],
  providers: [
    TranslateService
  ]
})
export class ComponentsModule { }