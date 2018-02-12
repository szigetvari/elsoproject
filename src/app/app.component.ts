import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tomb = [1, 2, 3, 4, 5, 6];

  constructor() {
    console.log(this.tomb.filter(  (param: number) => param == 2));
  }
}
