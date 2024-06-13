import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';

//i18n
import { HttpClient } from '@angular/common/http';
import { CommonSharedModule } from './core/shared/modules/common-shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './core/shared/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';

export const imports = [
  CommonModule,
  CommonSharedModule,
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  RouterModule,
  //#region components
  LayoutModule,
  //#endregion
  MaterialModule,

  TranslateModule.forRoot(),
];
