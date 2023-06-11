import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/helpers/interfaces.m';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  private _cart: Cart = {items:[{id:1, name:'product', price:12, product:'weqwe', quantity:12}]}
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
  getTotal(items: CartItem[]):number{
    return this.cartService.getTotal(items)
  }
  onClear(){
    this.cartService.clearCart()
  }

  constructor(private cartService: CartService){}
}
