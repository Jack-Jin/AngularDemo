import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c10-parent',
  template: '<app-c10-child (saveEvent)="clickSave($event)"></app-c10-child>',
  // templateUrl: './c10-parent.component.html',
  styleUrls: ['./c10-parent.component.css']
})
export class C10ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickSave(event: any) {
    console.log(event);
  }
}
