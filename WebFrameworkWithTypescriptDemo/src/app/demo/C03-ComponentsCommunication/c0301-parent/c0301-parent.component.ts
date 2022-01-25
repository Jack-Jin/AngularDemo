import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c0301-parent',
  templateUrl: './c0301-parent.component.html',
  styleUrls: ['./c0301-parent.component.css']
})
export class C0301ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg: any) {
    alert(msg);
  }

}
