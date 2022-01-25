import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c0701-pipes',
  templateUrl: './c0701-pipes.component.html',
  styleUrls: ['./c0701-pipes.component.css']
})
export class C0701PipesComponent implements OnInit {
  todayDate = new Date();
  price = 23434.55;

  constructor() { }

  ngOnInit(): void {
  }

}
