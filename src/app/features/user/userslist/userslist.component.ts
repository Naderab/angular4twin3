import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../../core/user';
import { UserService } from 'src/app/services/user.service';
import { Account } from 'src/app/models/account';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit, OnDestroy,OnChanges {
  searchtext: string = '';
  listusers: User[] = [];
  listFiltred : User[]=[];
  @Input() selectedAccount !: Account;
  constructor(private _userService: UserService) {}
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes['selectedAccount'].currentValue.title)
    if(changes['selectedAccount'].currentValue !== undefined){
     this.listFiltred = this.listusers.filter((u)=>u.accountCategory === changes['selectedAccount'].currentValue.title)
    /* this._userService.fetchAllUsers()
     .pipe(
      map((u)=>
      filter((user:User)=>user.accountCategory === changes['selectedAccount'].currentValue.title))
      )
     .subscribe({
       next: (data) => {this.listusers = data} ,
       error: (err) => console.log(err),
     })*/
    }
  }

  ngOnInit() {
    console.log(this.selectedAccount)
    this._userService.fetchAllUsers().subscribe({
      next: (data) => {this.listusers = data as User[];this.listFiltred = this.listusers},
      error: (err) => console.log(err),
    })
    console.log(
      this._userService.fetchNbInList(
        this.listusers,
        'accountCategory',
        'Customer'
      )
    );
  }

  ngOnDestroy() {
    this.listusers = [];
    console.log(this.listusers);
    console.log('I m destroyed');
  }

  deleteUser(id: number) {

    this._userService.deleteUser(id).subscribe({
      next: () =>
        (this.listusers = this.listusers.filter((u) => u.id != id)),
      error: (err) => console.log(err),
    });
  }

  searchUser() {
    this.searchtext != ''
      ? (this.listusers = this.listusers.filter(
          (u) => u.accountCategory == this.searchtext
        ))
      : (this.listusers = this.listusers);
  }
}
