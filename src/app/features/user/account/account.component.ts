import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnChanges {
 ngOnChanges(changes: SimpleChanges): void {
   //console.log(changes)
 }
 @Output() d = new EventEmitter<number>();
 @Output() testO = new EventEmitter();
 @Output() showEvent = new EventEmitter<Account>();

 @Input() a !: Account;
 @Input() p!:number;

 delete(id:number){
  this.d.emit(id);
 }

 testOEvent(){
  this.testO.emit({id:1,name:"test"})
 }

 show(a:Account){
  this.showEvent.emit(a);
 }
}
