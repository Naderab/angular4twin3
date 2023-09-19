import { Component } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  title: string = 'Product List';
  color = 'red';
  affiche= true;  
  products: Product[] = [
    {
      id: '1',
      name: 'iphone',
      price: 1000,
      quantity: 0,
      category: { id: '1', type: 'phone' },
    },
    {
      id: '2',
      name: 'tv',
      price: 2000,
      quantity: 10,
      category: { id: '2', type: 'electro' },
    },
    {
      id: '3',
      name: 'pc',
      price: 3000,
      quantity: 50,
      category: { id: '3', type: 'electro' },
    },
  ];

  buy(p: Product) {
    p.quantity--;
  }

  getColor() {
    return this.color;
  }
}
