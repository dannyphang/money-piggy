import { EventEmitter } from '@angular/core';
import { OptionsModel } from '../form/form.interface';
import { Observable } from 'rxjs';

export interface DropdownOptionConfig {
    label: string;
    value: any;
    disabled?: boolean;
    preIcon?: string;
}

export type DependOnFieldsDataSourceConfig =
    | UpdateOptionsDependOnFieldConfig
    | NotUpdateOptionsDependOnFieldConfig;

export interface UpdateOptionsDependOnFieldConfig {
    fields: string[] | EventEmitter<any>[];
    action: () => Observable<OptionsModel[]>;
    updateOptions: true;
    debounce?: number;
}

export interface NotUpdateOptionsDependOnFieldConfig {
    fields: string[] | EventEmitter<any>[];
    action: () => void;
    updateOptions?: false;
}
