import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-c18-reactive-forms1',
  templateUrl: './c18-reactive-forms1.component.html',
  styleUrls: ['./c18-reactive-forms1.component.css']
})
export class C18ReactiveForms1Component implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Nacy');
  }
}
