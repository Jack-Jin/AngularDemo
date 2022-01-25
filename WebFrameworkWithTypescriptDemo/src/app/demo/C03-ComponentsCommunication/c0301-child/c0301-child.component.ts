import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c0301-child',
  templateUrl: './c0301-child.component.html',
  styleUrls: ['./c0301-child.component.css']
})
export class C0301ChildComponent implements OnInit {
  @Input() childMessage!: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child.');
  }
}
