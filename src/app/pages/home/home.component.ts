import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  public colums: number = 3


  info(event: number) {
    this.colums = event
  }
}
