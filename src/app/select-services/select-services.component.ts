import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-services',
  templateUrl: './select-services.component.html',
  styleUrls: ['./select-services.component.css']
})
export class SelectServicesComponent implements OnInit {
  pinInput: number;
  constructor() { }
  fixedBal: number[];

  // onSelectBal(){
  //   let bal = 
  //   this.router.navigate(['available-notes', bal]);
  //   console.log(this.selectedBal);
  // }

  ngOnInit() {
    this.fixedBal= [500,1000,2000,3000,4000,0];
  }


}
