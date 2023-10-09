import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { FournisseuerComponent } from './fournisseuer/fournisseuer.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FournisseuerComponent,
    ListFournisseursComponent,
    NavbarComponent,
    HeaderComponent,
    UsersComponent,
    UserslistComponent,
    MyDirectiveDirective
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
