import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'listUsers', component: UserslistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
