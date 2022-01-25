import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-c01-lifecycle',
  templateUrl: './c01-lifecycle.component.html',
  styleUrls: ['./c01-lifecycle.component.css']
})
export class C01LifecycleComponent implements OnInit, OnDestroy {
  intervalSub!: any;

  constructor() { }

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit()')
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Hello from ngOnDestroy()')
    
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

}
