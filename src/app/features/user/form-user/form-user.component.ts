import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  id: number = 0;
  constructor(
    private userService: UserService,
    private router: Router,
    private ac: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.ac.snapshot.params['id'];
    this.id !== undefined &&
      this.userService.fetchUserById(this.id).subscribe({
        next: (data) => (this.user = data),
      });
  }
  user: User = new User();
  add(f: NgForm) {
    if (this.getButtonMessage() === 'Add') {
      console.log(f.value);
      console.log(this.user);
      this.user.accountCategory = 'Customer';
      this.userService.addUser(this.user).subscribe({
        next: () => this.router.navigate(['user']),
      });
    } else {
      this.user.picture = `https://bootdey.com/img/Content/avatar/avatar${Math.floor(Math.random() * (7 - 1 + 1) + 1)}.png`;
      this.userService.updateUser(this.id, this.user).subscribe({
        next: () => this.router.navigate(['user']),
      });
    }
  }
getButtonMessage() {
    return this.id !== undefined ? 'Update' : 'Add';
  }
}
