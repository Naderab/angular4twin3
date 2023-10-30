import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit, OnDestroy {
  searchtext: string = '';
  listusers: User[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.fetchAllUsers().subscribe({
      next: (data) => this.listusers = data as User[],
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
