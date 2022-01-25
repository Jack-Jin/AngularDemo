import { Component, OnInit } from '@angular/core';
import { C20DataService } from '../c20-data.service';

@Component({
  selector: 'app-c20-http-client',
  templateUrl: './c20-http-client.component.html',
  styleUrls: ['./c20-http-client.component.css']
})
export class C20HttpClientComponent implements OnInit {

  constructor(private dataService: C20DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      console.log(res);
    })
  }

}
