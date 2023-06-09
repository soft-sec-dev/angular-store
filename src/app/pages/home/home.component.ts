import { Component } from '@angular/core';
import { Product } from 'src/app/helpers/interfaces.m';
import { CartService } from 'src/app/services/cart.service';

const ROW_HEIGT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  public colums: number = 3
  public rowHeigh = ROW_HEIGT[this.colums]
  public category: string | undefined


  constructor(private cartService: CartService) { }


  eventFromHeader(event: number) {
    console.log(`Event Activate: eventFromHeader: ${event}`)
    this.colums = event
    this.rowHeigh = ROW_HEIGT[this.colums]
  }

  eventFromFiters(newCategory: string) {
    console.log(newCategory)
    this.category = newCategory

  }
  onAddTocard(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
