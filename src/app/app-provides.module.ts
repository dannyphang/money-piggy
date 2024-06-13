import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormArrayItemComponent } from './core/shared/components/form/form-array-item.component';
import { FormArrayComponent } from './core/shared/components/form/form-array.component';
import { BASE_UI_TOKEN, FORM_ARRAY_TOKEN, CONTROL_TYPE } from './core/shared/components/form/form.interface';
import { ButtonComponent, CheckboxComponent, DatepickerComponent, DropdownComponent, InputComponent, LabelComponent, MultiselectComponent, RadioComponent, TextareaComponent } from './core/shared/components';

export const allBaseUIForm = {
    [CONTROL_TYPE.Textbox]: InputComponent,
    [CONTROL_TYPE.Textarea]: TextareaComponent,
    [CONTROL_TYPE.Dropdown]: DropdownComponent,
    [CONTROL_TYPE.Calendar]: DatepickerComponent,
    [CONTROL_TYPE.Checkbox]: CheckboxComponent,
    [CONTROL_TYPE.Radio]: RadioComponent,
    [CONTROL_TYPE.Multiselect]: MultiselectComponent,
    [CONTROL_TYPE.Label]: LabelComponent,
    [CONTROL_TYPE.Button]: ButtonComponent,
};

export const providers = [
    { provide: ErrorHandler },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    provideAnimationsAsync(),
    {
        provide: BASE_UI_TOKEN,
        useValue: allBaseUIForm,
    },
    {
        provide: FORM_ARRAY_TOKEN,
        useValue: {
            [CONTROL_TYPE.FormArray]: FormArrayComponent,
            arrayItem: FormArrayItemComponent,
        },
    },

];