import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'create') {
      this.router.navigate(['appointments/create']);
    } else if (route === 'view') {
      this.router.navigate(['appointments/view']);
    }
  }
}
