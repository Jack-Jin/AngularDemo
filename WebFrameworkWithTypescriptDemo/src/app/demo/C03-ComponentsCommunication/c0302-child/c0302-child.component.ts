import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c0302-child',
  templateUrl: './c0302-child.component.html',
  styleUrls: ['./c0302-child.component.css']
})
export class C0302ChildComponent implements OnInit {
  message = 'message from child'

  constructor() { }

  ngOnInit(): void {
  }

}
