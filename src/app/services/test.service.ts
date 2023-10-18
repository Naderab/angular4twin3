import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  list = ['a','b']
  constructor() { }

  getList() { 
    return this.list;
  }
  addToList(vara: any){
    this.list.push(vara);
  }
}
