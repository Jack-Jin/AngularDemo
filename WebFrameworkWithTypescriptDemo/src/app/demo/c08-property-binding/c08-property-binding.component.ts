import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c08-property-binding',
  templateUrl: './c08-property-binding.component.html',
  styleUrls: ['./c08-property-binding.component.css']
})
export class C08PropertyBindingComponent implements OnInit {
  isUnchangable = true;
  imageURL = '/assets/example.png'

  constructor() { }

  ngOnInit(): void {
  }

}
