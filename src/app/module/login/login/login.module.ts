import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CommonSharedModule } from '../../../core/shared/modules/common-shared.module';
import { MaterialModule } from '../../../core/shared/modules/material.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonSharedModule,
  ]
})
export class LoginModule { }
