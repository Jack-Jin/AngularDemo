import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c14-structural-directives',
  template: `
    <div *ngIf="isActive">Active</div>
    <div *ngIf="!isActive">Not Active</div>

    <div *ngFor="let item of items; let i = index">{{ i }} - {{ item.name }}</div>

    <div [ngSwitch]="switchValue.name">
      <div *ngSwitchCase="'Bob'">Hi Bob</div>
      <div *ngSwitchCase="'Monika'">Hi Monika</div>
      <div *ngSwitchDefault>Hi friend</div>
    </div>
  `
})
export class C14StructuralDirectivesComponent implements OnInit {
  isActive = true;
  items = [
    {name: 'Bob'},
    {name: 'John'},
    {name: 'Monika'}
  ]
  switchValue= {name: 'Monika'}

  constructor() { }

  ngOnInit(): void {
  }

}
