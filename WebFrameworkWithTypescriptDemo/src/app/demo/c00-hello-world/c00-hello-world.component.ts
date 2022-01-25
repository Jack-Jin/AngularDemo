import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c00-hello-world',
  template: '<h1>{{ title }}</h1>',
  styles: [`
    h1 {
      color: blue;
    }
  `]
  // templateUrl: './c00-hello-world.component.html',
  // styleUrls: ['./c00-hello-world.component.css']
})
export class C00HelloWorldComponent implements OnInit {
  title: string = 'Hello World!';

  constructor() { }

  ngOnInit(): void {
  }

}
