// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//
// @Component({
//   selector: 'app-patient',
//   templateUrl: './patient.component.html',
//   styleUrl: './patient.component.css'
// })
// export class PatientComponent {
// constructor() { }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'create') {
      this.router.navigate(['patients/create']);
    } else if (route === 'view') {
      this.router.navigate(['patients/view']);
    }
  }
}
