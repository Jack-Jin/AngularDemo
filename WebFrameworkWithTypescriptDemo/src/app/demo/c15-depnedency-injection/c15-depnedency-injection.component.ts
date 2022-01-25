import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './c15-log.service';

@Component({
  selector: 'app-c15-depnedency-injection',
  template: `
    <h1>Hello World</h1>
  `
})
export class C15DepnedencyInjectionComponent implements OnInit {

  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef) { }

  ngOnInit(): void {
    this.logService.logMessage('Hello from dependency injection.');
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red');
  }


}
