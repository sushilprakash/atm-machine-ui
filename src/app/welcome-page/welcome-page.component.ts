import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  cardInput:string = '';
  formatCard(){
     this.cardInput =  this.cardInput.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
  }
  constructor(private router: Router) { }


  onSubmit(){
      this.router.navigate(['/enter-pin']);
    }

    ngOnInit() {
    }

}
