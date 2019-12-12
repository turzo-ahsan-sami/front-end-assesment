import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <Navbar></Navbar>
  <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'angular-boilerplate';
}
