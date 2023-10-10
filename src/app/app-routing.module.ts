import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FournisseuerComponent } from './fournisseuer/fournisseuer.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'users', component: UsersComponent },
  { path: 'listUsers', component: UserslistComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'fournisseur/:id',component:FournisseuerComponent},
  { path: '**', component: NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
