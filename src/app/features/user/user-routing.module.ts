import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormUserReactiveComponent } from './form-user-reactive/form-user-reactive.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'listUsers', component: UserslistComponent },
  { path: 'add', component: FormUserComponent },
  { path: 'update/:id', component: FormUserComponent },
  { path: 'addReactive', component: FormUserReactiveComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
