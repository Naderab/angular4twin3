import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, UserslistComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
