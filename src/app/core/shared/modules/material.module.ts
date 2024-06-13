import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
        MatDialogContent,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogActions,
        MatDialogClose,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatIconModule,
        MatNativeDateModule,
        MatButtonModule,
        MatDialogTitle,
        MatTabsModule,
        MatExpansionModule,
    ],
    exports: [
        MatDialogContent,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogActions,
        MatDialogClose,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatIconModule,
        MatNativeDateModule,
        MatButtonModule,
        MatDialogTitle,
        MatTabsModule,
        MatExpansionModule,
    ],
    providers: [
        provideNativeDateAdapter()
    ]
})

export class MaterialModule { }