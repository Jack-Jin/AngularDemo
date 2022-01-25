import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c13-attribute-directives',
  template: `
    <p appHighlight>Attribute Directive</p>
    <p [appHighlight]="'green'">Attribute Directive</p>
  `
})
export class C13AttributeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
