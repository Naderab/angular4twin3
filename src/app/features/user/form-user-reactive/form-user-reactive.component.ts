import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-form-user-reactive',
  templateUrl: './form-user-reactive.component.html',
  styleUrls: ['./form-user-reactive.component.css'],
})
export class FormUserReactiveComponent implements OnInit {
  fbUser: FormGroup = new FormGroup({});
  id: number = 0;
  user: User = new User();
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private ac:ActivatedRoute) { }

  ngOnInit() {
    this.ac.params.subscribe((param) => {
      this.id = param['id'];
    });
    console.log(this.id)
    this.id !== undefined &&
    this.userService.fetchUserById(this.id).subscribe({
      next: (data) => this.onUserExist(data) })
  this.fbUser = this.fb.group({
      firstName:
     
          ['', [Validators.required, Validators.minLength(3)]]
          ,
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail.com')],
      ],
      birthDate: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}?')],
      ],
      profession: ['', [Validators.required]],
      accountCategory: [{ value: 'Customer', disabled: true }],
  })
    
  }

  onUserExist(user:User) {   
    this.fbUser.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
      email: user.email,
      password: user.password,
      profession:user.profession
    })
  }
  username: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  userForm = new FormGroup({
    firstName: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    password: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl(''),
    }),
    competences: new FormArray([new FormControl('')]),
  });

  //fb: FormBuilder = new FormBuilder();
  userFormBuilder = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: this.fb.group({
      city: [''],
    }),
    competences: this.fb.array([]),
  });
  get competences() {
    return this.userForm.controls['competences'];
  }

  // get lastName() {
  //       return this.userForm.controls['lastName'];

  // }

  get city() {
    return this.userForm.controls['address'].controls['city'];
  }
  addCompetence() {
    this.competences.push(new FormControl(''));
  }

  testAdd() {
    console.log(this.username.value);
    console.log(this.competences);
    console.log(this.userForm.value);
    console.log(this.userForm.getRawValue());
  }

  addUser() {
    console.log(this.fbUser.value)

    if (this.id !== undefined) {
      this.userService.updateUser(this.id, this.fbUser.getRawValue()).subscribe({
        next: () => this.router.navigate(['/user/listUsers']),
      })
    } else {
      this.fbUser.getRawValue().picture = 'https://bootdey.com/img/Content/avatar/avatar3.png'
      this.userService.addUser(this.fbUser.getRawValue()).subscribe({
        next: () => this.router.navigate(['/user/listUsers']),
      });
    }
  }

  get firstName() {
    return this.fbUser.controls['firstName'];
  }

  get lastName() {
    return this.fbUser.controls['lastName'];
  }

  get email() {
    return this.fbUser.controls['email'];
  }

  get birthDate() {
    return this.fbUser.controls['birthDate'];
  }

  get password() {
    return this.fbUser.controls['password'];
  }

  get profession() {
    return this.fbUser.controls['profession'];
  }
}
