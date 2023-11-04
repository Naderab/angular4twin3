import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [UsersComponent, UserslistComponent, FormUserComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
