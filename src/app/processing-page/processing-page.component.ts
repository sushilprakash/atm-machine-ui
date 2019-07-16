import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing-page.component.html',
  styleUrls: ['./processing-page.component.css']
})
export class ProcessingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      console.log("validating card details");
      this.router.navigate(['/thanks']);
    }, 1000);
  }

}
