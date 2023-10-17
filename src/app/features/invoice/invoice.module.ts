import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';


@NgModule({
  declarations: [
    InvoiceComponent,
    MainInvoiceComponent,
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
