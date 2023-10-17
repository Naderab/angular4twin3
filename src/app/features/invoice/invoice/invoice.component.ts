import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../../../models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  id: number = 0;
  status: boolean = true;
  invoice: Invoice = new Invoice();
  list: Invoice[] = [
    {
      idFacture: 1,
      montantFacture: 120,
      montantRemise: 10,
      dateFacture: '12/12/2021',
      active: true,
    },
    {
      idFacture: 2,
      montantFacture: 1020,
      montantRemise: 90,
      dateFacture: '22/11/2020',
      active: true,
    },
    {
      idFacture: 3,
      montantFacture: 260,
      montantRemise: 30,
      dateFacture: '18/10/2020',
      active: false,
    },
    {
      idFacture: 4,
      montantFacture: 450,
      montantRemise: 40,
      dateFacture: '14/12/2020',
      active: true,
    },
  ];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    // this._activatedRoute.params.subscribe((param) => {
    //   this.id = param['id'];
    //   this.status = param['status']=='true' ? true : false;
    //   console.log(this.status);
    // })

    // this._activatedRoute.paramMap.subscribe((p) => {
    //   console.log(p.get('id'))
    //   console.log(p.get('status'))
    // })

    this._activatedRoute.queryParams.subscribe((p) => {
      this.id = p['id'];
      this.status = p['status'] == 'true' ? true : false;
    });
    this.invoice = this.list.find((i) => i.idFacture == this.id) as Invoice;
  }

  toList() {
    this._router.navigate(['/invoice/list']);
  }
}
