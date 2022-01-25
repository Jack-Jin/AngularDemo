import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c06-template-statements',
  templateUrl: './c06-template-statements.component.html',
  styleUrls: ['./c06-template-statements.component.css']
})
export class C06TemplateStatementsComponent implements OnInit {
  showText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText(event: any): void {
    this.showText = !this.showText;

    console.log(event)
    console.log(event.target.baseURI);
  }
}
