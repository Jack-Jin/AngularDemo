import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c10-child',
  template: '<button (click)="Save()">Save</button>',
  // templateUrl: './c10-child.component.html',
  styleUrls: ['./c10-child.component.css']
})
export class C10ChildComponent implements OnInit {
  @Output() saveEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  Save() {
    this.saveEvent.emit('item name');
  }
}
