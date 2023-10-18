import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseuerComponent } from './fournisseuer/fournisseuer.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';

const routes: Routes = [
  { path: 'list', component: ListFournisseursComponent },
  { path: ':id', component: FournisseuerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
