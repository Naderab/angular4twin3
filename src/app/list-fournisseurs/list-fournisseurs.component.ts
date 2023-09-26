import { Component } from '@angular/core';
import { Fournisseuer } from '../models/fournisseurs';

@Component({
  selector: 'app-list-fournisseurs',
  templateUrl: './list-fournisseurs.component.html',
  styleUrls: ['./list-fournisseurs.component.css'],
})
export class ListFournisseursComponent {
  list: Fournisseuer[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 400, code: '40ABC452', libelle: 'asus' },
  ];
  delete(id:number) {
    this.list = this.list.filter(e => e.idFournisseur != id);
  }
}
