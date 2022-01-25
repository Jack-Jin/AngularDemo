import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { C0302ChildComponent } from '../c0302-child/c0302-child.component';

@Component({
  selector: 'app-c0302-parent',
  templateUrl: './c0302-parent.component.html',
  styleUrls: ['./c0302-parent.component.css']
})
export class C0302ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(C0302ChildComponent) child!: C0302ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      console.log(this.child.message);
      // alert(this.child.message);
  }

}
