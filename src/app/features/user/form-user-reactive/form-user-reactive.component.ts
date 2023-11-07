import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user-reactive',
  templateUrl: './form-user-reactive.component.html',
  styleUrls: ['./form-user-reactive.component.css'],
})
export class FormUserReactiveComponent {
  username: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  userForm = new FormGroup({
    firstName: new FormControl({ value:'',disabled:true}, [
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
      city: new FormControl('',[Validators.required]),
      street:new FormControl('')
    }),
    competences : new FormArray([new FormControl("")])
  });

  fb: FormBuilder = new FormBuilder();
  userFormBuilder = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    address: this.fb.group({
      city : [""]
    }),
    competences:this.fb.array([])
  }) 
  get competences() {
    return this.userForm.controls["competences"];
  }

  get lastName() {
        return this.userForm.controls['lastName'];

  }

  get city() {
    return this.userForm.controls["address"].controls["city"];
  }
  addCompetence() {
    this.competences.push(new FormControl(""))
  }

  testAdd() {
    console.log(this.username.value);
    console.log(this.competences)
    console.log(this.userForm.value)
    console.log(this.userForm.getRawValue())
  }
}
