import { Component, OnInit } from '@angular/core';
import { CartItem, Cart } from 'src/app/helpers/interfaces.m';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'https //via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 1
    },
    {
      product: 'https //via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 3,
      id: 1
    },
    ]
  }
  dataSource: Array<CartItem> = []
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'action']
  constructor() { }
  ngOnInit(): void {
    this.dataSource = this.cart.items
  }
  getTotal(items: CartItem[]): number {
    return items.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)
  }

}
