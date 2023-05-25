import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortUI } from 'src/app/helpers/interfaces.m';

@Component({
  selector: 'app-product-header',
  templateUrl: 'product-header.component.html',
  styles: [
  ]
})
export class ProductHeaderComponent implements OnInit {

  @Output() columnsCountChange = new EventEmitter<number>()

  constructor() { }
  ngOnInit(): void { }

  sort: SortUI = 'desc'
  itemsShowCoun: number = 12


  onSortUpdated(newSort: SortUI): void {
    this.sort = newSort
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCoun = count
  }
  onColumnsUpdated(column: number): void {
    this.columnsCountChange.emit(column)
  }

}
