import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-c0701-pipes',
  templateUrl: './c0701-pipes.component.html',
  styleUrls: ['./c0701-pipes.component.css']
})
export class C0701PipesComponent implements OnInit {
  // todayDate = new Date();
  todayDate = new Date();
  price = 23434.55;

  constructor() { }

  ngOnInit(): void {
    var date = new Date();
    let s = `${date.getFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
    console.log(s);
    
    var now_utc =  Date.UTC(2022,0,5,19,25,3);  

    this.todayDate = new Date(now_utc);
  }

}
