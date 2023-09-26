import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseuer',
  templateUrl: './fournisseuer.component.html',
  styleUrls: ['./fournisseuer.component.css'],
})
export class FournisseuerComponent {
  idFournisseur = 105;
  code = 'A104B89';
  libelle = 'MyTeck';
  hide = false;
  changehide() {
    this.hide = !this.hide;
  }

}


