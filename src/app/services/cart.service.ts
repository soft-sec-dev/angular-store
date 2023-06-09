import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../helpers/interfaces.m';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] })


  constructor(private _snackBar: MatSnackBar) { }
  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items]
    const itemInCart = items.find((_item: CartItem) => _item.id === item.id)
    if (itemInCart) {
      itemInCart.quantity += 1
    } else {
      items.push(item)
    }

    this.cart.next({ items })
    this._snackBar.open('1 item added to cart.', 'ok', { duration: 3000 })
    console.log(this.cart.value)
  }
}
