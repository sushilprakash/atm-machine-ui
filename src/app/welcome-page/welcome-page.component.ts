import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnlyNumbersValidators } from './../shared/only-numbers.validators';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {


  constructor(private router: Router) { }
  cardvalue: FormGroup;
  cardInput:string = '';

  // console.log(fc);
  
  formatCard(){
      this.cardInput =  this.cardInput.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
   }
  onSubmit(){
      this.router.navigate(['/enter-pin']);
    }
    ngOnInit() {
      this.cardvalue = new FormGroup({
        cnumber: new FormControl('', [
          Validators.required,
          OnlyNumbersValidators.onlynumbers
        ]),
        phone: new FormControl(null, Validators.required)
      });
     
       // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, [Validators.required, Validators.pattern('(?=^.{4,41}$)([A-Za-z]{1})([A-Za-z0-9!@#$%_\^\&amp;\*\-\.\?]{3,39})$')]),
    //   'email': new FormControl(null, Validators.email),
    //   'gender': new FormControl('female'),
    //   'hobbies' : new FormArray([])
    // });
    }

}
