import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseuerComponent } from './fournisseuer/fournisseuer.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';


@NgModule({
  declarations: [
    FournisseuerComponent,
    ListFournisseursComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule
  ]
})
export class FournisseurModule { }
