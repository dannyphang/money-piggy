import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonSharedModule } from '../../../core/shared/modules/common-shared.module';
import { MaterialModule } from '../../../core/shared/modules/material.module';
import { ComponentsModule } from '../../../core/shared/components/components.module';
import { TransactionComponent } from './transaction/transaction.component';
import { CategoryComponent } from './transaction/category/category.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';


@NgModule({
  declarations: [
    HomeComponent,
    TransactionComponent,
    CategoryComponent,
    CreateTransactionComponent
  ],
  imports: [
    CommonModule,
    CommonSharedModule,
    HomeRoutingModule,
    ComponentsModule,
    MaterialModule,
  ],
})
export class HomeModule { }
