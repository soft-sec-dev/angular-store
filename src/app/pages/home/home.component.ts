import { Component } from '@angular/core';

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

  eventFromHeader(event: number) {
    this.colums = event
    this.rowHeigh = ROW_HEIGT[this.colums]
  }

  eventFromFiters(newCategory: string) {
    console.log(newCategory)
    this.category = newCategory

  }
}
