import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-services',
  templateUrl: './select-services.component.html',
  styleUrls: ['./select-services.component.css']
})
export class SelectServicesComponent implements OnInit {

  constructor(private router: Router) { }
  fixedBal: number[];
  ngOnInit() {
    this.fixedBal= [500,1000,2000,3000,4000,null];
  }


}
