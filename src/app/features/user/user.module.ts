import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormUserComponent } from './form-user/form-user.component';
import { FormUserReactiveComponent } from './form-user-reactive/form-user-reactive.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AccountComponent } from './account/account.component';
import { AddAccountComponent } from './add-account/add-account.component';

@NgModule({
  declarations: [UserslistComponent, FormUserComponent, FormUserReactiveComponent, ListAccountComponent, AccountComponent, AddAccountComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule,ReactiveFormsModule],
})
export class UserModule {}
