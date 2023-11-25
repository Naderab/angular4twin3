import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  values:Account = new Account();
  constructor(private fb:FormBuilder){}
  formAccount : FormGroup= new FormGroup({})
  ngOnInit(){
    this.formAccount = this.fb.group({
      title : [""],
      description : [""],
      image : [""]
    })
  }

  addAccount(){
    this.values = this.formAccount.value;
    console.log(this.formAccount.value)
  }
}
