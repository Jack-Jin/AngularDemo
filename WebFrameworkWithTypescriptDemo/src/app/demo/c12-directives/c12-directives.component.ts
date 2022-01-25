import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c12-directives',
  template: `
    <!-- ngClass -->
    <div [ngClass]="isSpecial ? 'special' : '' ">Example</div>
    <div [ngClass]="currentClasses">Current Classes</div>

    <!-- ngStyle -->
    <div [ngStyle]="currentStyle">Current Style</div>
    
    <!-- ngModel -->
    <label for="formName">{{ name }}</label>
    <input type="text" [(ngModel)]="name" id="formName">
  `
})
export class C12DirectivesComponent implements OnInit {
  isSpecial = true;
  currentClasses = {};
  currentStyle = {};
  name = 'Bob';

  constructor() { }

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      firstClass: true,
      secondClass: false,
      thirdClass: true,
    }
  }

  setCurrentStyles() {
    this.currentStyle = {
      'font-style': 'italic',
      'font-weight': 'bold'
    }
  }

}
