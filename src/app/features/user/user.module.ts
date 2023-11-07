import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormUserComponent } from './form-user/form-user.component';
import { FormUserReactiveComponent } from './form-user-reactive/form-user-reactive.component';

@NgModule({
  declarations: [UsersComponent, UserslistComponent, FormUserComponent, FormUserReactiveComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule,ReactiveFormsModule],
})
export class UserModule {}
