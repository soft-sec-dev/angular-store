import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/helpers/interfaces.m';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  private _cart: Cart = {items:[]}
  itemsQuantity = 0

  @Input()
  get cart():Cart{
    return this._cart
  }

  set cart(cart:Cart){
    this._cart = cart
    this.itemsQuantity = cart.items
      .map((item:CartItem)=>item.quantity)
      .reduce((prev,current)=> prev + current)
  }

  constructor(){}
}
