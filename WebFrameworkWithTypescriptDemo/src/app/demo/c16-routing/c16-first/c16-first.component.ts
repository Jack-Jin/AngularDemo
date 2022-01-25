import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-c16-first',
  templateUrl: './c16-first.component.html',
  styleUrls: ['./c16-first.component.css']
})
export class C16FirstComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
