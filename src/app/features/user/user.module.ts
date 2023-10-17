import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserslistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
