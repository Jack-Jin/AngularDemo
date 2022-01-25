import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c18-reactive-forms2',
  templateUrl: './c18-reactive-forms2.component.html',
  styleUrls: ['./c18-reactive-forms2.component.css']
})
export class C18ReactiveForms2Component implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
