import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c16-main',
  template: `
    <h1>Angular router app</h1>
    <nav>
      <ul>
        <li><a routerLink="/first-component/1">First Component</a></li>
        <li><a routerLink="/second-component">Second Component</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class C16MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
