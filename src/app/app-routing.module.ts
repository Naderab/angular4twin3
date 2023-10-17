import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './features/user/users/users.component';
import { UserslistComponent } from './features/user/userslist/userslist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FournisseuerComponent } from './features/fournisseur/fournisseuer/fournisseuer.component';
import { MainInvoiceComponent } from './features/invoice/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './features/invoice/invoice-list/invoice-list.component';
import { InvoiceComponent } from './features/invoice/invoice/invoice.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'users', component: UsersComponent },
  { path: 'listUsers', component: UserslistComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'fournisseur/:id', component: FournisseuerComponent },
  {
    path: 'invoice',
    component: MainInvoiceComponent,
    children: [
      { path: 'list', component: InvoiceListComponent },
      { path: '', component: InvoiceComponent },
      // {path:':id/:status',component: InvoiceComponent}
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
