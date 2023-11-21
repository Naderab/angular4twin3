import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account';
import { UserService } from 'src/app/services/user.service';
import { AddAccountComponent } from '../add-account/add-account.component';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  @ViewChild('<app-add-account></app-add-account>') 
  addAccount !: AddAccountComponent;

  listAccounts : Account[] = [];
  prop:number=0;
  hide:boolean = true
  selectedAccount !: Account;

    constructor(private _userService:UserService){}
  ngOnInit(): void {
    this._userService.getAllAccounts().subscribe({
      next : (data) => this.listAccounts = data
    })
  }
  changeProp(){
    this.prop= 1;
  }

  deleteA(id:number){
    console.log(id)
    this._userService.deleteAccount(id).subscribe({
      next:()=>this.listAccounts = this.listAccounts.filter((a)=>a.id !== id)
    });
  }

  testEventParent(event:any){
   // console.log(event)
  }

  show(a:Account){
    console.log(a)
      this.selectedAccount = a;
    this.hide=false;

  }
}
