import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c11-parent',
  templateUrl: './c11-parent.component.html',
  styleUrls: ['./c11-parent.component.css']
})
export class C11ParentComponent implements OnInit {
  fontSizePx = 12;

  constructor() { }

  ngOnInit(): void {
  }

  callPhone(phoneNumber: string) {
    console.log(phoneNumber);
  }
}
