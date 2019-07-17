import { Component, OnInit } from '@angular/core';
import { UserFormat } from '../shared/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-available-notes',
  templateUrl: './available-notes.component.html',
  styleUrls: ['./available-notes.component.css']
})
export class AvailableNotesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  userDetails: UserFormat = {currBalance : 4500, accType : 'saving', accHolderName: 'Ayushman'};

  withdrawAmt: any;
  updatedBalance: number;

  onSubmit(){
    this.router.navigate(['/processing']);
  }

  onWithdraw(){
    if(this.withdrawAmt>=0){
     this.updatedBalance = this.userDetails.currBalance - this.withdrawAmt;
    }
    else{
     this.withdrawAmt = 0;
    }
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.withdrawAmt = +params['val'];
    });
    this.onWithdraw();
  }

}
