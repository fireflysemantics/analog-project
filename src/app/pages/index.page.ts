import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  standalone: true,
  template: `
    <h2> Hello Products</h2>
    <router-outlet></router-outlet>
    `,
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
