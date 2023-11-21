import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
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
    console.log(this.formAccount.value)
  }
}
