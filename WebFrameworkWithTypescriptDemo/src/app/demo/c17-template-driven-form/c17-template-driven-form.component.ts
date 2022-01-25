import { Component, OnInit } from '@angular/core';
import { Pet } from './c17-pet.model';

@Component({
  selector: 'app-c17-template-driven-form',
  templateUrl: './c17-template-driven-form.component.html',
  styleUrls: ['./c17-template-driven-form.component.css']
})
export class C17TemplateDrivenFormComponent implements OnInit {
  species = ['fish', 'cat', 'dog'];
  model = new Pet(1, 'Goldie', this.species[0]);
  submited = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submited = true;
  }
}
