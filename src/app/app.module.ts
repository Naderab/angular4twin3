import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { FournisseuerComponent } from './fournisseuer/fournisseuer.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FournisseuerComponent,
    ListFournisseursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
