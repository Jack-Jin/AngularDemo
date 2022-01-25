import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c19-form-validation',
  templateUrl: './c19-form-validation.component.html',
  styleUrls: ['./c19-form-validation.component.css']
})
export class C19FormValidationComponent implements OnInit {
  nameInput = '';

  validateForm = new FormGroup({
    name: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  get name() {
    return this.validateForm.get('name');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
