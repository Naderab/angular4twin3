import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./features/invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  {
    path: 'fournisseur',
    loadChildren: () =>
      import('./features/fournisseur/fournisseur.module').then(
        (m) => m.FournisseurModule
      ),
  },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
