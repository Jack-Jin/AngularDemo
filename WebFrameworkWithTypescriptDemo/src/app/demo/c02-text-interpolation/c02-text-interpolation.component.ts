import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c02-text-interpolation',
  templateUrl: './c02-text-interpolation.component.html',
  styleUrls: ['./c02-text-interpolation.component.css']
})
export class C02TextInterpolationComponent implements OnInit {
  title = 'Hello Title!';

  constructor() { }

  ngOnInit(): void {
  }

  getMin(a: Number, b: Number) {
    if (a < b)
      return a;
    return b;
  }

}
