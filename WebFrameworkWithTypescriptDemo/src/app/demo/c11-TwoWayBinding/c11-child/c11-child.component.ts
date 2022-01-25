import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c11-child',
  templateUrl: './c11-child.component.html',
  styleUrls: ['./c11-child.component.css']
})
export class C11ChildComponent implements OnInit {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  dec() {
    this.reSize(-1);
  }

  inc() {
    this.reSize(1);
  }

  reSize(delta: number) {
    this.size = Math.min(40, Math.max(8, this.size + delta));

    this.sizeChange.emit(this.size);
  }

}
