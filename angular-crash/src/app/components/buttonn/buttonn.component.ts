import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttonn',
  templateUrl: './buttonn.component.html',
  styleUrls: ['./buttonn.component.css']
})
export class ButtonnComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
