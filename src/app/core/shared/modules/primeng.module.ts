import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { TooltipModule } from "primeng/tooltip";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextareaModule } from "primeng/inputtextarea";
import { CalendarModule } from "primeng/calendar";
import { RadioButtonModule } from "primeng/radiobutton";
import { MultiSelectModule } from "primeng/multiselect";
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from "primeng/splitbutton";

const PRIMENG_MODULES = [
    InputNumberModule,
    TranslateModule,
    InputSwitchModule,
    ToastModule,
    TooltipModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    ProgressSpinnerModule,
    InputTextareaModule,
    CalendarModule,
    RadioButtonModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule,
    ChipModule,
]

@NgModule({
    imports: [
        PRIMENG_MODULES
    ],
    exports: [
        PRIMENG_MODULES
    ],
    providers: [

    ]
})

export class PrimeNgModule { }