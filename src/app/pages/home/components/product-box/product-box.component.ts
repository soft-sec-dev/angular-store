import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/helpers/interfaces.m';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false
  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: "shoes",
    description: 'Description',
    image: 'https://via.placeholder.com/150'
  }

  @Output() addToCart = new EventEmitter()

  constructor() {
    console.log(this.fullWidthMode)
  }
  ngOnInit(): void { }
  onAddTocard(): void {
    this.addToCart.emit(this.product)
  }
}
