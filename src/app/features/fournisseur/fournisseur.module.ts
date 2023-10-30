import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseuerComponent } from './fournisseuer/fournisseuer.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';
import { TestService } from 'src/app/services/test.service';


@NgModule({
  declarations: [
    FournisseuerComponent,
    ListFournisseursComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule
  ],
  providers:[]
})
export class FournisseurModule { }
